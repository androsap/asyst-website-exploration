import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CareerWhyConst } from "consts/career.const";
import CarouselNav from "components/home/sections/carousel-nav";
import useSwiperNav from "components/home/sections/use-swiper-nav";

export default function WhySection() {
    const { title, description, items } = CareerWhyConst;
    const { swiperProps, navProps } = useSwiperNav();

    return <Box component="section" className="pv-section">
        <Container maxWidth="xl">
            <Box className="cr-why__header">
                <Box>
                    <Typography variant="h2" className="cr-title">{title}</Typography>
                    <Typography className="cr-text">{description}</Typography>
                </Box>
                <CarouselNav {...navProps} variant="arrow" />
            </Box>
            <Swiper {...swiperProps} spaceBetween={20} slidesPerView={1.15} breakpoints={{ 600: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
                {items.map(({ title, description }) => (
                    <SwiperSlide key={title} className="cr-why__slide">
                        <Box className="cr-card">
                            <Typography variant="h3" className="cr-card__title">{title}</Typography>
                            <Typography className="cr-card__description">{description}</Typography>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    </Box>
}
