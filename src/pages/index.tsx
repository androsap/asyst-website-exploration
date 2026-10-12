import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
import MainComponent from "components/home";

const props: MainLayoutSharedProps = {
    title: "PT Aero Systems Indonesia"
}

export default function DashboardPages() {
    return <MainLayoutShared {...props}>
        <MainComponent {...props} />
    </MainLayoutShared>
}