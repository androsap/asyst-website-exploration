import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
// Import langsung (bukan lazy): page ini sudah lazy di router, lazy kedua hanya menambah satu round-trip sebelum hero (LCP) tampil
import MainComponent from "components/home";

const props: MainLayoutSharedProps = {
    title: "PT Aero Systems Indonesia"
}

export default function DashboardPages() {
    return <MainLayoutShared {...props}>
        <MainComponent {...props} />
    </MainLayoutShared>
}