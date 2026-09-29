import { Children } from "react";
import { Routes, Route } from 'react-router-dom';

import AutoRoute from './AutoRoute';
import router from "./router"

export interface RouterProps {
    path: string;
    component: React.LazyExoticComponent<() => JSX.Element>;
}

const Error404 = () => <>404</>

export default function MainApp() {
    const routers: RouterProps[] = router;

    return (<Routes>
        <Route path="*" element={<Error404 />} />
        {Children.toArray(routers.map(({ path, component }) => <Route path={path} element={<AutoRoute Component={component} />} />))}
    </Routes>)
}

