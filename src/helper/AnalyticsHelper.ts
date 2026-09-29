import { usabilityTasks, UsabilityTask } from "consts/usability-tasks.const";

// Script Mixpanel & Clarity dipasang di index.html; keduanya sudah menyediakan stub yang
// mengantrekan panggilan sampai library selesai dimuat, jadi aman dipanggil kapan saja.
declare global {
    interface Window {
        mixpanel?: any;
        clarity?: (...args: any[]) => void;
    }
}

const PARTICIPANT_KEY = "usability_participant_id";
const ACTIVE_TASK_KEY = "usability_active_task";

interface ActiveTask {
    id: string;
    startedAt: number;
}

const storage = {
    get(key: string) {
        try { return localStorage.getItem(key); } catch { return null; }
    },
    set(key: string, value: string) {
        try { localStorage.setItem(key, value); } catch { /* storage diblokir, abaikan */ }
    },
    remove(key: string) {
        try { localStorage.removeItem(key); } catch { /* storage diblokir, abaikan */ }
    },
};

class AnalyticsHelper {
    static getParticipantId() {
        return storage.get(PARTICIPANT_KEY);
    }

    /**
     * Samakan ID peserta di Mixpanel & Clarity.
     * Dipanggil otomatis dari URL `?pid=P01`; ID disimpan sehingga tetap terbawa saat pindah halaman.
     */
    static identify(participantId: string) {
        const previousId = this.getParticipantId();
        // Peserta baru di browser yang sama: putus sesi Mixpanel sebelumnya agar data tidak tergabung
        if (previousId && previousId !== participantId) {
            window.mixpanel?.reset?.();
            storage.remove(ACTIVE_TASK_KEY);
        }
        storage.set(PARTICIPANT_KEY, participantId);

        window.mixpanel?.identify?.(participantId);
        window.mixpanel?.register?.({ participant_id: participantId });
        window.mixpanel?.people?.set?.({ $name: participantId });

        window.clarity?.("identify", participantId, undefined, undefined, participantId);
        window.clarity?.("set", "participant_id", participantId);
    }

    /** Kirim event dengan nama yang sama ke Mixpanel dan Clarity (untuk smart event Clarity). */
    static track(event: string, properties: Record<string, any> = {}) {
        const participantId = this.getParticipantId();
        window.mixpanel?.track?.(event, { participant_id: participantId, ...properties });
        window.clarity?.("event", event);
    }

    static startTask(task: UsabilityTask) {
        // Jangan mulai ulang task yang sedang berjalan (reload dengan ?task masih di URL / StrictMode)
        const current = storage.get(ACTIVE_TASK_KEY);
        if (current?.includes(`"id":${JSON.stringify(task.id)}`)) return;

        const active: ActiveTask = { id: task.id, startedAt: Date.now() };
        storage.set(ACTIVE_TASK_KEY, JSON.stringify(active));
        window.clarity?.("set", "task_id", task.id);
        this.track("task_started", { task_id: task.id, task_name: task.name });
    }

    static completeTask(task: UsabilityTask, startedAt: number) {
        storage.remove(ACTIVE_TASK_KEY);
        this.track("task_completed", {
            task_id: task.id,
            task_name: task.name,
            duration_sec: Math.round((Date.now() - startedAt) / 1000),
        });
    }

    static formError(form: string, field: string, message: string) {
        this.track("form_error", { form, field, message });
    }

    /**
     * Dipanggil setiap kali route berubah.
     * - `?pid=P01`  : set ID peserta
     * - `?task=T1`  : mulai task T1 (lihat consts/usability-tasks.const.ts)
     * Task selesai otomatis saat peserta tiba di `successPath` task tersebut.
     */
    static handleRouteChange(pathname: string, search: string) {
        const params = new URLSearchParams(search);

        const pid = params.get("pid");
        if (pid) this.identify(pid);
        else {
            // Pastikan identitas tetap terpasang setelah reload
            const savedId = this.getParticipantId();
            if (savedId) {
                window.mixpanel?.identify?.(savedId);
                window.clarity?.("identify", savedId, undefined, undefined, savedId);
                window.clarity?.("set", "participant_id", savedId);
            }
        }

        const taskId = params.get("task");
        const newTask = taskId ? usabilityTasks.find(t => t.id === taskId) : undefined;
        if (newTask) this.startTask(newTask);

        const raw = storage.get(ACTIVE_TASK_KEY);
        if (!raw) return;
        let active: ActiveTask;
        try { active = JSON.parse(raw); } catch { storage.remove(ACTIVE_TASK_KEY); return; }

        const task = usabilityTasks.find(t => t.id === active.id);
        if (!task) return storage.remove(ACTIVE_TASK_KEY);
        if (task.successPath.test(pathname)) this.completeTask(task, active.startedAt);
    }
}

export default AnalyticsHelper;
