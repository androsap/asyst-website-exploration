import { lazy } from "react";
import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
import { mapLocalized } from "shared/i18n";
import { SmartDocumentDetailConst } from "consts/product-detail/smart-document.const";
const MainComponent = lazy(() => import("components/product/smart-document"));

const props: MainLayoutSharedProps = {
    title: mapLocalized(SmartDocumentDetailConst, content => content.seo.title),
    defaultNav: true
}

export default function DashboardPages() {
    return <MainLayoutShared {...props}>
        <MainComponent {...props} />
    </MainLayoutShared>
}
