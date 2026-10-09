import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Typography } from "components/ui/typography";
// import { styles } from './styled';
// import './index.scss';

import gaLogo from 'assets/asyst/img/logo/ga-logo-color.webp'
import citilinkLogo from 'assets/asyst/img/logo/citilink-logo-color.webp'
import airfranceLogo from 'assets/asyst/img/logo/airfrance-logo-color.webp'
import pelitaLogo from 'assets/asyst/img/logo/pelita-air-logo-color.webp'
import lufthansaLogo from 'assets/asyst/img/logo/lufthansa-logo-color.webp'
import southwestLogo from 'assets/asyst/img/logo/southwest-logo-color.webp'
import { contentStyles, logoTitleClass } from './styled';
import { useT } from 'shared/i18n';

const logoArray = [
    gaLogo,
    citilinkLogo,
    airfranceLogo,
    pelitaLogo,
    lufthansaLogo,
    southwestLogo,
    gaLogo,
    citilinkLogo,
    airfranceLogo,
    pelitaLogo,
    lufthansaLogo,
    southwestLogo
];

export default function IndustryDetailContentComponent() {
    const t = useT();
    return (
        <>
            <Typography
                className={logoTitleClass}
            >
                {t("Trusted by Over 120 Airlines", "Dipercaya oleh Lebih dari 120 Maskapai")}
            </Typography>
            <div className={contentStyles.logoContainer}>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={24}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false
                    }}
                    modules={[Autoplay]}
                >
                    {logoArray.map((logo, index) => (
                        <SwiperSlide key={`slide-${index}`} className={contentStyles.logoSwiperSlider}>
                            <img alt="" src={logo} className={contentStyles.logo} />
                        </SwiperSlide>

                    ))}
                </Swiper>

            </div>
        </>
    );
};
