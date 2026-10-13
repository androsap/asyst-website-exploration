import { lazy } from "react";
import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
import { mapLocalized } from "shared/i18n";
import { AmalaV2DetailConst } from "consts/product-detail/amala-v2.const";
const MainComponent = lazy(() => import("components/product/amala-v2"));

const props: MainLayoutSharedProps = {
    title: mapLocalized(AmalaV2DetailConst, content => content.seo.title),
    defaultNav: true
}

export default function DashboardPages() {
    return <MainLayoutShared {...props}>
        <MainComponent {...props} />
    </MainLayoutShared>
}