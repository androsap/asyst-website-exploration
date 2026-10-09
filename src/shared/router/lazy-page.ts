import { ComponentType, lazy, LazyExoticComponent } from "react";

type PageModule = { default: ComponentType };

export type LazyPage = LazyExoticComponent<ComponentType> & {
    /** Unduh modul page; setelah selesai, `loaded` terisi */
    preload: () => Promise<PageModule>;
    /** Komponen page jika modulnya sudah terunduh (bisa dirender tanpa Suspense) */
    loaded?: ComponentType;
};

/**
 * `lazy()` yang bisa di-preload. Dipakai router (src/shared/router/router.tsx, hasil generate initialize/index.cjs).
 * Page pertama di-preload sebelum render awal (main.tsx) lalu dirender langsung tanpa Suspense:
 * fallback Suspense membuat React menahan commit konten berikutnya s.d. ~500ms (FALLBACK_THROTTLE_MS),
 * sehingga konten pertama (LCP) tertunda.
 */
export const lazyPage = (load: () => Promise<PageModule>): LazyPage => {
    let promise: Promise<PageModule> | undefined;
    const page = lazy(() => page.preload()) as LazyPage;
    page.preload = () => promise ??= load().then(module => {
        page.loaded = module.default;
        return module;
    });
    return page;
};
