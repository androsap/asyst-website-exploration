import { lazy } from "react";
import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
import { mapLocalized } from "shared/i18n";
import { ApolloDetailConst } from "consts/product-detail/apollo.const";
const MainComponent = lazy(() => import("components/product/apollo"));

const props: MainLayoutSharedProps = {
    title: mapLocalized(ApolloDetailConst, content => content.seo.title),
    defaultNav: true
}

export default function DashboardPages() {
    return <MainLayoutShared {...props}>
        <MainComponent {...props} />
    </MainLayoutShared>
}
