import { Container } from "components/ui/container";
import { IconButton } from "components/ui/icon-button";
import { Typography } from "components/ui/typography";
import { ChevronLeftRoundedIcon, ChevronRightRoundedIcon } from "components/ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CaseStudyDetailContent } from "consts/case-study.const";
import useSwiperNav from "components/home/sections/use-swiper-nav";
import { useT } from "shared/i18n";

interface TechnologiesSectionProps {
    content: CaseStudyDetailContent["technologies"];
}

/** Banner gelap dengan slider gambar di belakang dan kartu teknologi di atasnya. */
export default function TechnologiesSection({ content }: TechnologiesSectionProps) {
    const { swiperProps, navProps } = useSwiperNav();
    const t = useT();

    return <section className="cs-tech">
        <Swiper {...swiperProps} className="cs-tech__slider">
            {content.images.map(image => (
                <SwiperSlide key={image}>
                    <div className="cs-tech__image" style={{ backgroundImage: `url(${image})` }} />
                </SwiperSlide>
            ))}
        </Swiper>
        {!navProps.isBeginning && <IconButton aria-label={t("Previous", "Sebelumnya")} className="cs-slider-arrow cs-slider-arrow--prev cs-slider-arrow--dark" onClick={navProps.onPrev}><ChevronLeftRoundedIcon /></IconButton>}
        {!navProps.isEnd && <IconButton aria-label={t("Next", "Berikutnya")} className="cs-slider-arrow cs-slider-arrow--next cs-slider-arrow--dark" onClick={navProps.onNext}><ChevronRightRoundedIcon /></IconButton>}
        <Container maxWidth="xl" className="cs-tech__content">
            <Typography variant="h2" className="cs-tech__title">{content.title}</Typography>
            <div className="cs-tech__grid">
                {content.groups.map(({ label, items }, index) => (
                    <div key={index} className="cs-tech__card">
                        <Typography className="cs-tech__label">{label}</Typography>
                        <Typography className="cs-tech__items">{items}</Typography>
                    </div>
                ))}
            </div>
        </Container>
    </section>
}
