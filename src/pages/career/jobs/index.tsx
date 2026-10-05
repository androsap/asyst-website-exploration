import { lazy } from "react";
import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
import { CareerSeoConst } from "consts/career.const";
const MainComponent = lazy(() => import("components/career/jobs"));

const props: MainLayoutSharedProps = {
    title: CareerSeoConst.jobs.title,
    // Hero baru berlatar terang: navbar selalu versi putih agar menu terbaca
    defaultNav: true
}

export default function DashboardPages() {
    return <MainLayoutShared {...props}>
        <MainComponent {...props} />
    </MainLayoutShared>
}
