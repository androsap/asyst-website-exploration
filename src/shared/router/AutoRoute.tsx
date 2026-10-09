import { Suspense } from "react";
import PageLoader from "shared/page-loader";
import { LazyPage } from "./lazy-page";

interface AutoRouteProps {
    Component: LazyPage;
}

export default function AutoRoute({ Component }: AutoRouteProps) {
    // Modul sudah terunduh (mis. di-preload di main.tsx): render langsung tanpa fallback Suspense
    const Loaded = Component.loaded;
    if (Loaded) return <Loaded />;

    try {
        return <Suspense fallback={<PageLoader />}>
            <Component />
        </Suspense>
    } catch (error) {
        return <>Error</>
    }
}
