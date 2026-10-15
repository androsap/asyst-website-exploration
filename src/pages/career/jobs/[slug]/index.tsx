import { lazy } from "react";
import { useParams } from "react-router-dom";
import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
import { CareerJobsConst, CareerSeoConst } from "consts/career.const";
import { mapLocalized } from "shared/i18n";
const MainComponent = lazy(() => import("components/career/job-detail"));

export default function DashboardPages() {
    const { slug } = useParams();
    const job = CareerJobsConst.EN.find(item => item.slug === slug);

    const props: MainLayoutSharedProps = {
        title: mapLocalized(CareerSeoConst, ({ jobDetail }) => job ? jobDetail.title.replace("{title}", job.title) : jobDetail.fallbackTitle),
    }

    return <MainLayoutShared {...props}>
        <MainComponent {...props} />
    </MainLayoutShared>
}
