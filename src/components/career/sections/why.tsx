import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { useLocalized } from "shared/i18n";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CareerWhyConst } from "consts/career.const";
import CarouselNav from "components/home/sections/carousel-nav";
import useSwiperNav from "components/home/sections/use-swiper-nav";

export default function WhySection() {
    const { title, description, items } = useLocalized(CareerWhyConst);
    const { swiperProps, navProps } = useSwiperNav();

    return <section className="pv-section">
        <Container maxWidth="xl">
            <div className="cr-why__header">
                <div>
                    <Typography variant="h2" className="cr-title">{title}</Typography>
                    <Typography className="cr-text">{description}</Typography>
                </div>
                <CarouselNav {...navProps} variant="arrow" />
            </div>
            <Swiper {...swiperProps} spaceBetween={20} slidesPerView={1.15} breakpoints={{ 600: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
                {items.map(({ title, description }, index) => (
                    <SwiperSlide key={index} className="cr-why__slide">
                        <div className="cr-card">
                            <Typography variant="h3" className="cr-card__title">{title}</Typography>
                            <Typography className="cr-card__description">{description}</Typography>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    </section>
}
