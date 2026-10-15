import { lazy } from "react";
import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
import { localized } from "shared/i18n";
const MainComponent = lazy(() => import("components/news"));

const props: MainLayoutSharedProps = {
    title: localized("News | PT Aero Systems Indonesia", "Berita | PT Aero Systems Indonesia"),
}

export default function DashboardPages() {
    return <MainLayoutShared {...props}>
        <MainComponent {...props} />
    </MainLayoutShared>
}
