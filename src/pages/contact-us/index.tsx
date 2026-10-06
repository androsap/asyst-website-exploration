import { lazy } from "react";
import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
import { localized } from "shared/i18n";
const MainComponent = lazy(() => import("components/contact-us"));

const props: MainLayoutSharedProps = {
    title: localized("Contact Us | PT Aero Systems Indonesia", "Hubungi Kami | PT Aero Systems Indonesia"),
    // Hero berlatar terang: navbar selalu versi putih agar menu terbaca
    defaultNav: true
}

export default function ContactUsPages() {
    return <MainLayoutShared {...props}>
        <MainComponent {...props} />
    </MainLayoutShared>
}
