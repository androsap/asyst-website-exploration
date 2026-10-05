import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IndustriesConst } from "consts/home.const";
import CarouselNav from "./carousel-nav";
import useSwiperNav from "./use-swiper-nav";

export default function IndustriesSection() {
    const { swiperProps, navProps } = useSwiperNav();

    return <Box component="section" className="home-section home-industries__section">
        <Container maxWidth="xl">
            <Box className="home-industries">
                <Box className="home-industries__intro">
                    <Typography variant="h2" className="home-heading__title">{IndustriesConst.title}</Typography>
                    <Typography className="home-industries__description">{IndustriesConst.description}</Typography>
                    <Box className="home-industries__actions">
                        <Link to={IndustriesConst.allLink} className="home-link">All Industries</Link>
                        <CarouselNav {...navProps} />
                    </Box>
                </Box>
                <Box className="home-industries__slider">
                    <Swiper {...swiperProps} spaceBetween={40} slidesPerView={1.15} breakpoints={{ 600: { slidesPerView: 1.6 }, 1200: { slidesPerView: 2.25 } }}>
                        {IndustriesConst.items.map(({ title, description, image, tags }) => (
                            <SwiperSlide key={title}>
                                <Box className="home-industry">
                                    <Box className="home-industry__image" sx={{ backgroundImage: `url(${image})` }} />
                                    <Typography className="home-industry__title">{title}</Typography>
                                    <Typography className="home-industry__description">{description}</Typography>
                                    <Box className="home-chips home-chips--filled">
                                        {tags.map(tag => <span key={tag} className="home-chip">{tag}</span>)}
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Box>
        </Container>
    </Box>
}
