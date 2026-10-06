import { lazy } from "react";
import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
import { localized } from "shared/i18n";
const MainComponent = lazy(() => import("components/search"));

const props: MainLayoutSharedProps = {
    title: localized("Search | PT Aero Systems Indonesia", "Pencarian | PT Aero Systems Indonesia"),
    // Hero berlatar terang: navbar selalu versi putih agar menu terbaca
    defaultNav: true
}

export default function SearchPages() {
    return <MainLayoutShared {...props}>
        <MainComponent {...props} />
    </MainLayoutShared>
}
