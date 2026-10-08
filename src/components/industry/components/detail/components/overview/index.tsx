import './index.scss'
import { Typography } from "components/ui/typography";
import OverViewA from 'assets/img/icon/overview/overview-image-1.webp';
import OverViewB from 'assets/img/icon/overview/overview-image-2.webp';
import { useT } from 'shared/i18n'

export default function OverViewComponent() {
    const t = useT()
    return (
        <>
            <div className="overview [box-sizing:border-box] flex-row">
                <div className="flex flex-row">
                    <div className="flex flex-col gap-[19px] pt-[80px] pb-[80px]">
                        <div>
                            <Typography variant='h1'>{t("Overview", "Ikhtisar")}</Typography>
                        </div>
                        <Typography className="w-[622px]" variant='h2'>{t("Improving performance and delivering a more seamless to airlines inddustry", "Meningkatkan kinerja dan menghadirkan layanan yang lebih mulus bagi industri penerbangan")}</Typography>
                        <Typography className="w-[622px]" variant='h3'>{t("We invented field service management software and continued to grow in airlines industry by taking the successes of our Amala, and creating a new, more advanced solution. Aero systems indonesia create product solutions more robust, feature-rich service management software solution that enables you to increase profit performance and streamline your airline business all in one product.", "Kami mengembangkan software manajemen layanan lapangan dan terus bertumbuh di industri penerbangan dengan membawa keberhasilan Amala menjadi solusi baru yang lebih canggih. Aero Systems Indonesia menciptakan solusi software manajemen layanan yang lebih tangguh dan kaya fitur untuk membantu Anda meningkatkan kinerja keuntungan dan menyederhanakan bisnis maskapai dalam satu produk.")}</Typography>
                    </div>
                    <img className='img-overview-1' src={OverViewA} alt="" />
                </div>
                <div className="flex flex-row gap-[80px]">
                    <img className='img-overview-2' src={OverViewB} alt="" />
                    <div className="flex flex-col gap-[19px] pt-[30px]">
                        <Typography className="w-[622px]" variant='h2'>{t("We made operational efficiency and perform large scale transformation", "Kami mewujudkan efisiensi operasional dan transformasi berskala besar")}</Typography>
                        <Typography className="w-[622px]" variant='h3'>{t("Aero Systems Indonesia crafted a unique blend of services and solutions for the Airline Industry. Our services are based on the core technology pillars of Cloud computing, social computing, Mobility and Analytics that are best suited for the Airline industry", "Aero Systems Indonesia meracik perpaduan unik layanan dan solusi untuk industri penerbangan. Layanan kami dibangun di atas pilar teknologi inti, yaitu cloud computing, social computing, mobilitas, dan analitik, yang paling sesuai untuk industri penerbangan")}</Typography>
                    </div>
                </div>
            </div>
        </>
    )
}