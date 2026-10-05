import { lazy } from "react";
import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
const MainComponent = lazy(() => import("components/product/anteros"));

const props: MainLayoutSharedProps = {
    title: "PT Aero Systems Indonesia",
    // Hero baru berlatar terang: navbar selalu versi putih agar menu terbaca
    defaultNav: true
}

export default function DashboardPages() {
    return <MainLayoutShared {...props}>
        <MainComponent {...props} />
    </MainLayoutShared>
}