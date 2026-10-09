import { Children, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';

import AutoRoute from './AutoRoute';
import router from "./router"
import AnalyticsHelper from "helper/AnalyticsHelper";
import PageLoader from "shared/page-loader";
import { useLanguage } from "shared/i18n";
import { LazyPage } from "./lazy-page";

export interface RouterProps {
    path: string;
    component: LazyPage;
}

const Error404 = () => <>404</>

// Durasi minimum loading screen tiap ganti page (ms)
const PAGE_LOADER_DURATION = 700;

export default function MainApp() {
    const routers: RouterProps[] = router;
    const location = useLocation();
    const language = useLanguage();
    // Load pertama tidak memakai durasi minimum (Suspense fallback tetap tampil selama chunk page diunduh),
    // supaya konten awal (LCP) tidak tertutup loader
    const [pageLoading, setPageLoading] = useState<boolean>(false);
    const loaderKey = `${location.pathname}|${language}`;
    const prevLoaderKey = useRef(loaderKey);

    useEffect(() => {
        AnalyticsHelper.handleRouteChange(location.pathname, location.search);
    }, [location.pathname, location.search]);

    // useLayoutEffect agar loader muncul sebelum page baru / teks bahasa baru sempat ter-paint
    useLayoutEffect(() => {
        if (prevLoaderKey.current === loaderKey) return;
        prevLoaderKey.current = loaderKey;
        setPageLoading(true);
    }, [loaderKey]);

    useEffect(() => {
        if (!pageLoading) return;
        const timer = setTimeout(() => setPageLoading(false), PAGE_LOADER_DURATION);
        return () => clearTimeout(timer);
    }, [pageLoading, loaderKey]);

    return (<>
        <PageLoader open={pageLoading} />
        <Routes>
            <Route path="*" element={<Error404 />} />
            {Children.toArray(routers.map(({ path, component }) => <Route path={path} element={<AutoRoute Component={component} />} />))}
        </Routes>
    </>)
}
