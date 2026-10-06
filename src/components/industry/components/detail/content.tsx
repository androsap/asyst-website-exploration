import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import Typography from '@mui/material/Typography';
// import { styles } from './styled';
// import './index.scss';

import gaLogo from 'assets/asyst/img/logo/ga-logo-color.png'
import citilinkLogo from 'assets/asyst/img/logo/citilink-logo-color.png'
import airfranceLogo from 'assets/asyst/img/logo/airfrance-logo-color.png'
import pelitaLogo from 'assets/asyst/img/logo/pelita-air-logo-color.png'
import lufthansaLogo from 'assets/asyst/img/logo/lufthansa-logo-color.png'
import southwestLogo from 'assets/asyst/img/logo/southwest-logo-color.png'
import { contentStyles } from './styled';
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
                sx={contentStyles.logoTitle}
            >
                {t("Trusted by Over 120 Airlines", "Dipercaya oleh Lebih dari 120 Maskapai")}
            </Typography>
            <div style={contentStyles.logoContainer}>
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
                        <SwiperSlide key={`slide-${index}`} style={contentStyles.logoSwiperSlider}>
                            <img src={logo} style={contentStyles.logo} />
                        </SwiperSlide>

                    ))}
                </Swiper>

            </div>
        </>
    );
};
