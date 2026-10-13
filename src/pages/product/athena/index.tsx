import { lazy } from "react";
import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
import { mapLocalized } from "shared/i18n";
import { AthenaDetailConst } from "consts/product-detail/athena.const";
const MainComponent = lazy(() => import("components/product/athena"));

const props: MainLayoutSharedProps = {
    title: mapLocalized(AthenaDetailConst, content => content.seo.title),
    defaultNav: true
}

export default function DashboardPages() {
    return <MainLayoutShared {...props}>
        <MainComponent {...props} />
    </MainLayoutShared>
}