import { lazy } from "react";
import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
import { mapLocalized } from "shared/i18n";
import { EProcurementDetailConst } from "consts/product-detail/e-procurement.const";
const MainComponent = lazy(() => import("components/product/e-procurement"));

const props: MainLayoutSharedProps = {
    title: mapLocalized(EProcurementDetailConst, content => content.seo.title),
}

export default function DashboardPages() {
    return <MainLayoutShared {...props}>
        <MainComponent {...props} />
    </MainLayoutShared>
}
