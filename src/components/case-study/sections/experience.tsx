import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CaseStudyExperienceConst } from "consts/case-study.const";
import SectionHeading from "components/product/shared/section-heading";
import useSwiperNav from "components/home/sections/use-swiper-nav";

export default function ExperienceSection() {
    const { title, button, items } = CaseStudyExperienceConst;
    const { swiperProps, navProps } = useSwiperNav();

    return <Box component="section" className="pv-section">
        <Container maxWidth="xl" className="cs-experience">
            <SectionHeading align="left" title={title} />
            <Swiper {...swiperProps} spaceBetween={16} slidesPerView={1.15} breakpoints={{ 600: { slidesPerView: 2.2 }, 1200: { slidesPerView: 3.3 } }}>
                {items.map(({ title, description, image, link }) => (
                    <SwiperSlide key={title}>
                        <Box className="cs-experience__card">
                            <Box className="cs-experience__image" sx={{ backgroundImage: `url(${image})` }} />
                            <Typography className="cs-experience__title">{title}</Typography>
                            <Typography className="cs-experience__description">{description}</Typography>
                            <Button component={Link} to={link} className="pv-btn pv-btn--outline cs-btn--small">{button}</Button>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
            {!navProps.isBeginning && <IconButton aria-label="Previous" className="cs-slider-arrow cs-slider-arrow--prev" onClick={navProps.onPrev}><ChevronLeftRoundedIcon /></IconButton>}
            {!navProps.isEnd && <IconButton aria-label="Next" className="cs-slider-arrow cs-slider-arrow--next" onClick={navProps.onNext}><ChevronRightRoundedIcon /></IconButton>}
        </Container>
    </Box>
}
