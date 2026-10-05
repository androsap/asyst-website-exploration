import { lazy } from "react";
import { useParams } from "react-router-dom";
import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
import { CareerJobsConst, CareerSeoConst } from "consts/career.const";
const MainComponent = lazy(() => import("components/career/job-detail"));

export default function DashboardPages() {
    const { slug } = useParams();
    const job = CareerJobsConst.find(item => item.slug === slug);

    // Judul dari layout (bukan useEffect di komponen) supaya tidak ditimpa saat layout re-render
    const props: MainLayoutSharedProps = {
        title: job ? CareerSeoConst.jobDetail.title.replace("{title}", job.title) : CareerSeoConst.jobDetail.fallbackTitle,
        // Hero baru berlatar terang: navbar selalu versi putih agar menu terbaca
        defaultNav: true
    }

    return <MainLayoutShared {...props}>
        <MainComponent {...props} />
    </MainLayoutShared>
}
