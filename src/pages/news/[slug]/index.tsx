import { lazy } from "react";
import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
const MainComponent = lazy(() => import("components/news/detail"));

const props: MainLayoutSharedProps = {
    title: "News | PT Aero Systems Indonesia",
    // Hero baru berlatar terang: navbar selalu versi putih agar menu terbaca
    defaultNav: true
}

export default function DashboardPages() {
    return <MainLayoutShared {...props}>
        <MainComponent {...props} />
    </MainLayoutShared>
}
