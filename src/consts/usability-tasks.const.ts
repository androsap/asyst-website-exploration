export interface UsabilityTask {
    /** Dipakai di URL: `?task=<id>` */
    id: string;
    name: string;
    /** Task dianggap selesai saat peserta membuka path yang cocok */
    successPath: RegExp;
}

// Isi sesuai skenario usability test. Contoh:
// { id: "T1", name: "Cari lowongan dan buka detailnya", successPath: /^\/career\/job-detail/ },
export const usabilityTasks: UsabilityTask[] = [];
