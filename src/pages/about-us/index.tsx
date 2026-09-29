import { lazy, useEffect } from "react";
import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
const MainComponent = lazy(() => import("components/about-us"));

const props: MainLayoutSharedProps = {
    title: "PT Aero Systems Indonesia",
    blurNav: true
}

export default function DashboardPages() {
    useEffect(() => {
        window.location.href = "https://www.asyst.co.id/about-us"
    }, [])

    return <MainLayoutShared {...props}>
        <MainComponent {...props}/>
    </MainLayoutShared>
}