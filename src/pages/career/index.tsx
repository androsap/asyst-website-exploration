import { lazy } from "react";
import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
import { CareerSeoConst } from "consts/career.const";
import { mapLocalized } from "shared/i18n";
const MainComponent = lazy(() => import("components/career"));

const props: MainLayoutSharedProps = {
    title: mapLocalized(CareerSeoConst, seo => seo.career.title),
    // Hero baru berlatar terang: navbar selalu versi putih agar menu terbaca
    defaultNav: true
}

export default function DashboardPages() {
    return <MainLayoutShared {...props}>
        <MainComponent {...props} />
    </MainLayoutShared>
}
