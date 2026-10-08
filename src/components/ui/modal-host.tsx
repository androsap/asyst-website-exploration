import { ReactNode, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";
import { AppearanceProvider } from "./appearance";
import { Modal } from "./dialog";

/**
 * Modal imperatif (pengganti bgsModal): `openModal({ render })` dari mana saja, dirender oleh <ModalHost /> di root aplikasi.
 * Perilaku sama dengan sebelumnya: backdrop fade-in, konten tanpa animasi, langsung hilang saat ditutup.
 */
interface ModalEntry {
    key: number;
    className?: string;
    title: string;
    render: (api: { hide: () => void }) => ReactNode;
}

let entries: ModalEntry[] = [];
let nextKey = 0;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach(listener => listener());

export function openModal(options: Omit<ModalEntry, "key">) {
    const key = nextKey++;
    entries = [...entries, { ...options, key }];
    emit();
    return { hide: () => closeModal(key) };
}

function closeModal(key: number) {
    entries = entries.filter(entry => entry.key !== key);
    emit();
}

export function ModalHost() {
    const list = useSyncExternalStore(
        callback => { listeners.add(callback); return () => listeners.delete(callback); },
        () => entries,
    );

    return <>
        {list.map(({ key, className, title, render }) => {
            const hide = () => closeModal(key);
            return <Modal key={key} open onClose={hide} title={title}>
                <div className={cn(className)}>
                    <AppearanceProvider value="modal">{render({ hide })}</AppearanceProvider>
                </div>
            </Modal>
        })}
    </>
}
