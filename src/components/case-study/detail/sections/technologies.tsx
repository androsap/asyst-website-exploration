import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CaseStudyDetailContent } from "consts/case-study.const";
import useSwiperNav from "components/home/sections/use-swiper-nav";

interface TechnologiesSectionProps {
    content: CaseStudyDetailContent["technologies"];
}

/** Banner gelap dengan slider gambar di belakang dan kartu teknologi di atasnya. */
export default function TechnologiesSection({ content }: TechnologiesSectionProps) {
    const { swiperProps, navProps } = useSwiperNav();

    return <Box component="section" className="cs-tech">
        <Swiper {...swiperProps} className="cs-tech__slider">
            {content.images.map(image => (
                <SwiperSlide key={image}>
                    <Box className="cs-tech__image" sx={{ backgroundImage: `url(${image})` }} />
                </SwiperSlide>
            ))}
        </Swiper>
        {!navProps.isBeginning && <IconButton aria-label="Previous" className="cs-slider-arrow cs-slider-arrow--prev cs-slider-arrow--dark" onClick={navProps.onPrev}><ChevronLeftRoundedIcon /></IconButton>}
        {!navProps.isEnd && <IconButton aria-label="Next" className="cs-slider-arrow cs-slider-arrow--next cs-slider-arrow--dark" onClick={navProps.onNext}><ChevronRightRoundedIcon /></IconButton>}
        <Container maxWidth="xl" className="cs-tech__content">
            <Typography variant="h2" className="cs-tech__title">{content.title}</Typography>
            <Box className="cs-tech__grid">
                {content.groups.map(({ label, items }) => (
                    <Box key={label} className="cs-tech__card">
                        <Typography className="cs-tech__label">{label}</Typography>
                        <Typography className="cs-tech__items">{items}</Typography>
                    </Box>
                ))}
            </Box>
        </Container>
    </Box>
}
