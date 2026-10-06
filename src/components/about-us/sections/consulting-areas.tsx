import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ConsultingAreasConst } from "consts/about-us.const";
import { useLocalized } from "shared/i18n";
import CarouselNav from "components/home/sections/carousel-nav";
import useSwiperNav from "components/home/sections/use-swiper-nav";

export default function ConsultingAreasSection() {
    const { swiperProps, navProps } = useSwiperNav();
    const areas = useLocalized(ConsultingAreasConst);

    return <Box component="section" className="home-section">
        <Container maxWidth="xl">
            <Box className="about-left-heading about-left-heading--with-nav">
                <Box>
                    <Typography variant="h2" className="home-heading__title">{areas.title}</Typography>
                    <Typography className="about-left-heading__description">{areas.description}</Typography>
                </Box>
                <CarouselNav {...navProps} variant="arrow" size="large" />
            </Box>
            <Swiper {...swiperProps} className="about-areas__swiper" spaceBetween={16} slidesPerView={1.1} breakpoints={{ 600: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
                {areas.items.map(({ title, description }, index) => (
                    <SwiperSlide key={index}>
                        <Box className="about-area">
                            <Typography className="about-area__title">{title}</Typography>
                            <Typography className="about-area__description">{description}</Typography>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    </Box>
}
