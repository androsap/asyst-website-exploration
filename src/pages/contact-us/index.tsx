import { lazy } from "react";
import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
const MainComponent = lazy(() => import("components/contact-us"));

const props: MainLayoutSharedProps = {
    title: "Contact Us | PT Aero Systems Indonesia",
    // Hero berlatar terang: navbar selalu versi putih agar menu terbaca
    defaultNav: true
}

export default function ContactUsPages() {
    return <MainLayoutShared {...props}>
        <MainComponent {...props} />
    </MainLayoutShared>
}
