import { useLayoutEffect } from "react";

/**
 * Kunci scroll <body> saat overlay terbuka — perilaku sama dengan ModalManager MUI:
 * body diberi overflow hidden + padding-right selebar scrollbar (agar konten tidak bergeser),
 * dengan hitungan referensi untuk overlay yang bertumpuk.
 */
let locks = 0;
let restore: (() => void) | null = null;

// Untuk <body>: ada scrollbar vertikal jika lebar window > lebar dokumen
const isOverflowing = (body: HTMLElement) => (body.ownerDocument.defaultView as Window).innerWidth > body.ownerDocument.documentElement.clientWidth;

function lock() {
    locks += 1;
    if (locks > 1) return;
    const body = document.body;
    const saved: { el: HTMLElement; property: string; value: string }[] = [];
    if (isOverflowing(body)) {
        const scrollbarSize = Math.abs(window.innerWidth - document.documentElement.clientWidth);
        saved.push({ el: body, property: "padding-right", value: body.style.paddingRight });
        body.style.paddingRight = `${(parseInt(window.getComputedStyle(body).paddingRight, 10) || 0) + scrollbarSize}px`;
    }
    const parent = body.parentElement;
    const scrollContainer = parent?.nodeName === "HTML" && window.getComputedStyle(parent).overflowY === "scroll" ? parent : body;
    saved.push(
        { el: scrollContainer, property: "overflow", value: scrollContainer.style.overflow },
        { el: scrollContainer, property: "overflow-x", value: scrollContainer.style.overflowX },
        { el: scrollContainer, property: "overflow-y", value: scrollContainer.style.overflowY },
    );
    scrollContainer.style.overflow = "hidden";
    restore = () => saved.forEach(({ el, property, value }) => value ? el.style.setProperty(property, value) : el.style.removeProperty(property));
}

function unlock() {
    locks = Math.max(0, locks - 1);
    if (locks === 0 && restore) {
        restore();
        restore = null;
    }
}

export function useScrollLock(active: boolean) {
    useLayoutEffect(() => {
        if (!active) return;
        lock();
        return unlock;
    }, [active]);
}
