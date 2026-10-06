import { lazy } from "react";
import { useParams } from "react-router-dom";
import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
import { CareerJobsConst, CareerSeoConst } from "consts/career.const";
import { mapLocalized } from "shared/i18n";
const MainComponent = lazy(() => import("components/career/job-detail"));

export default function DashboardPages() {
    const { slug } = useParams();
    // Judul posisi sama di kedua bahasa, jadi cukup cari di data EN
    const job = CareerJobsConst.EN.find(item => item.slug === slug);

    // Judul dari layout (bukan useEffect di komponen) supaya tidak ditimpa saat layout re-render
    const props: MainLayoutSharedProps = {
        title: mapLocalized(CareerSeoConst, ({ jobDetail }) => job ? jobDetail.title.replace("{title}", job.title) : jobDetail.fallbackTitle),
        // Hero baru berlatar terang: navbar selalu versi putih agar menu terbaca
        defaultNav: true
    }

    return <MainLayoutShared {...props}>
        <MainComponent {...props} />
    </MainLayoutShared>
}
