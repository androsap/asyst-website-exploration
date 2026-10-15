import { lazy } from "react";
import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
const MainComponent = lazy(() => import("components/product/project-management"));

const props: MainLayoutSharedProps = {
    title: "PT Aero Systems Indonesia",
}

export default function DashboardPages() {
    return <MainLayoutShared {...props}>
        <MainComponent {...props} />
    </MainLayoutShared>
}
