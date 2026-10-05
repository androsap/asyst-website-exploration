import { Children, useEffect, useLayoutEffect, useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';

import AutoRoute from './AutoRoute';
import router from "./router"
import AnalyticsHelper from "helper/AnalyticsHelper";
import PageLoader from "shared/page-loader";

export interface RouterProps {
    path: string;
    component: React.LazyExoticComponent<() => JSX.Element>;
}

const Error404 = () => <>404</>

// Durasi minimum loading screen tiap ganti page (ms)
const PAGE_LOADER_DURATION = 700;

export default function MainApp() {
    const routers: RouterProps[] = router;
    const location = useLocation();
    const [pageLoading, setPageLoading] = useState<boolean>(true);

    useEffect(() => {
        AnalyticsHelper.handleRouteChange(location.pathname, location.search);
    }, [location.pathname, location.search]);

    // useLayoutEffect agar loader muncul sebelum page baru sempat ter-paint
    useLayoutEffect(() => {
        setPageLoading(true);
        const timer = setTimeout(() => setPageLoading(false), PAGE_LOADER_DURATION);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (<>
        <PageLoader open={pageLoading} />
        <Routes>
            <Route path="*" element={<Error404 />} />
            {Children.toArray(routers.map(({ path, component }) => <Route path={path} element={<AutoRoute Component={component} />} />))}
        </Routes>
    </>)
}
