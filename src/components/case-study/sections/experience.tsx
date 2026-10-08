import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { IconButton } from "components/ui/icon-button";
import { Typography } from "components/ui/typography";
import { ChevronLeftRoundedIcon, ChevronRightRoundedIcon } from "components/ui/icons";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CaseStudyExperienceConst } from "consts/case-study.const";
import SectionHeading from "components/product/shared/section-heading";
import { useLocalized, useT } from "shared/i18n";
import useSwiperNav from "components/home/sections/use-swiper-nav";

export default function ExperienceSection() {
    const { title, button, items } = useLocalized(CaseStudyExperienceConst);
    const { swiperProps, navProps } = useSwiperNav();
    const t = useT();

    return <section className="pv-section">
        <Container maxWidth="xl" className="cs-experience">
            <SectionHeading align="left" title={title} />
            <Swiper {...swiperProps} spaceBetween={16} slidesPerView={1.15} breakpoints={{ 600: { slidesPerView: 2.2 }, 1200: { slidesPerView: 3.3 } }}>
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
            {!navProps.isBeginning && <IconButton aria-label={t("Previous", "Sebelumnya")} className="cs-slider-arrow cs-slider-arrow--prev" onClick={navProps.onPrev}><ChevronLeftRoundedIcon /></IconButton>}
            {!navProps.isEnd && <IconButton aria-label={t("Next", "Berikutnya")} className="cs-slider-arrow cs-slider-arrow--next" onClick={navProps.onNext}><ChevronRightRoundedIcon /></IconButton>}
        </Container>
    </section>
}
