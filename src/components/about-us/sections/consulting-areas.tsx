import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ConsultingAreasConst } from "consts/about-us.const";
import { useLocalized } from "shared/i18n";
import CarouselNav from "components/home/sections/carousel-nav";
import useSwiperNav from "components/home/sections/use-swiper-nav";

export default function ConsultingAreasSection() {
    const { swiperProps, navProps } = useSwiperNav();
    const areas = useLocalized(ConsultingAreasConst);

    return <section className="home-section">
        <Container maxWidth="xl">
            <div className="about-left-heading about-left-heading--with-nav">
                <div>
                    <Typography variant="h2" className="home-heading__title">{areas.title}</Typography>
                    <Typography className="about-left-heading__description">{areas.description}</Typography>
                </div>
                <CarouselNav {...navProps} variant="arrow" size="large" />
            </div>
            <Swiper {...swiperProps} className="about-areas__swiper" spaceBetween={16} slidesPerView={1.1} breakpoints={{ 600: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
                {areas.items.map(({ title, description }, index) => (
                    <SwiperSlide key={index}>
                        <div className="about-area">
                            <Typography className="about-area__title">{title}</Typography>
                            <Typography className="about-area__description">{description}</Typography>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    </section>
}
