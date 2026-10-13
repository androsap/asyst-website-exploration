import { lazy } from "react";
import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
import { mapLocalized } from "shared/i18n";
import { HermesDetailConst } from "consts/product-detail/hermes.const";
const MainComponent = lazy(() => import("components/product/hermes"));

const props: MainLayoutSharedProps = {
    title: mapLocalized(HermesDetailConst, content => content.seo.title),
    defaultNav: true
}

export default function DashboardPages() {
    return <MainLayoutShared {...props}>
        <MainComponent {...props} />
    </MainLayoutShared>
}
