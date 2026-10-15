import { lazy } from "react";
import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
import { mapLocalized } from "shared/i18n";
import { AmalaDetailConst } from "consts/product-detail/amala.const";
const MainComponent = lazy(() => import("components/product/amala"));

const props: MainLayoutSharedProps = {
    title: mapLocalized(AmalaDetailConst, content => content.seo.title),
}

export default function DashboardPages() {
    return <MainLayoutShared {...props}>
        <MainComponent {...props} />
    </MainLayoutShared>
}
