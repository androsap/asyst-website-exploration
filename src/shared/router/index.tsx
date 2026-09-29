import { Children, useEffect } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';

import AutoRoute from './AutoRoute';
import router from "./router"
import AnalyticsHelper from "helper/AnalyticsHelper";

export interface RouterProps {
    path: string;
    component: React.LazyExoticComponent<() => JSX.Element>;
}

const Error404 = () => <>404</>

export default function MainApp() {
    const routers: RouterProps[] = router;
    const location = useLocation();

    useEffect(() => {
        AnalyticsHelper.handleRouteChange(location.pathname, location.search);
    }, [location.pathname, location.search]);

    return (<Routes>
        <Route path="*" element={<Error404 />} />
        {Children.toArray(routers.map(({ path, component }) => <Route path={path} element={<AutoRoute Component={component} />} />))}
    </Routes>)
}

