import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CaseStudyExperienceConst } from "consts/case-study.const";
import SectionHeading from "components/product/shared/section-heading";
import { useLocalized } from "shared/i18n";
import CarouselNav from "components/home/sections/carousel-nav";
import useSwiperNav from "components/home/sections/use-swiper-nav";

export default function ExperienceSection() {
    const { title, button, items } = useLocalized(CaseStudyExperienceConst);
    const { swiperProps, navProps } = useSwiperNav();

    return <section className="pv-section cs-experience__section">
        <Container maxWidth="xl" className="cs-experience">
            <div className="cs-experience__header">
                <SectionHeading align="left" title={title} />
                <CarouselNav {...navProps} variant="arrow" size="large" />
            </div>
            <Swiper {...swiperProps} className="cs-experience__swiper" spaceBetween={16} slidesPerView={1.15} breakpoints={{ 600: { slidesPerView: 2.2, spaceBetween: 20 }, 1200: { slidesPerView: 3.3, spaceBetween: 20 } }}>
                {items.map(({ title, description, image, link }, index) => (
                    <SwiperSlide key={index}>
                        <div className="cs-experience__card">
                            <div className="cs-experience__image" style={{ backgroundImage: `url(${image})` }} />
                            <Typography className="cs-experience__title">{title}</Typography>
                            <Typography className="cs-experience__description">{description}</Typography>
                            <Button asChild className="pv-btn pv-btn--outline cs-btn--small"><Link to={link}>{button}</Link></Button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    </section>
}
