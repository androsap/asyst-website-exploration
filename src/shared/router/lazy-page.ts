import { ComponentType, lazy, LazyExoticComponent } from "react";

type PageModule = { default: ComponentType };

export type LazyPage = LazyExoticComponent<ComponentType> & {
    preload: () => Promise<PageModule>;
    loaded?: ComponentType;
};

export const lazyPage = (load: () => Promise<PageModule>): LazyPage => {
    let promise: Promise<PageModule> | undefined;
    const page = lazy(() => page.preload()) as LazyPage;
    page.preload = () => promise ??= load().then(module => {
        page.loaded = module.default;
        return module;
    });
    return page;
};
