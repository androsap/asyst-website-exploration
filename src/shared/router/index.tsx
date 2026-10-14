import { Children, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';

import AutoRoute from './AutoRoute';
import router from "./router"
import AnalyticsHelper from "helper/AnalyticsHelper";
import PageLoader from "shared/page-loader";
import { useLanguage } from "shared/i18n";
import { LazyPage, lazyPage } from "./lazy-page";

export interface RouterProps {
    path: string;
    component: LazyPage;
}

const NotFoundPage = lazyPage(() => import("components/not-found/page"));

const PAGE_LOADER_DURATION = 700;

export default function MainApp() {
    const routers: RouterProps[] = router;
    const location = useLocation();
    const language = useLanguage();
    const [pageLoading, setPageLoading] = useState<boolean>(false);
    const loaderKey = `${location.pathname}|${language}`;
    const prevLoaderKey = useRef(loaderKey);

    useEffect(() => {
        AnalyticsHelper.handleRouteChange(location.pathname, location.search);
    }, [location.pathname, location.search]);

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
            <Route path="*" element={<AutoRoute Component={NotFoundPage} />} />
            {Children.toArray(routers.map(({ path, component }) => <Route path={path} element={<AutoRoute Component={component} />} />))}
        </Routes>
    </>)
}
