import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NewsConst from "consts/news-asyst.const";
import { NEWS_BASE_PATH } from "consts/news-page.const";
import CarouselNav from "./carousel-nav";
import useSwiperNav from "./use-swiper-nav";

// Konten berita masih dari consts/news-asyst.const; kartu mengarah ke halaman /news

export default function NewsSection() {
    const { swiperProps, navProps } = useSwiperNav();

    return <Box component="section" className="home-section home-news__section">
        <Container maxWidth="xl">
            <Box className="home-news__header">
                <Typography variant="h2" className="home-heading__title">News</Typography>
                <CarouselNav {...navProps} variant="arrow" size="large" />
            </Box>
            <Swiper {...swiperProps} className="home-news__swiper" spaceBetween={16} slidesPerView={1} breakpoints={{ 600: { slidesPerView: 2.1, spaceBetween: 20 }, 1024: { slidesPerView: 3.2, spaceBetween: 20 } }}>
                {NewsConst.map(({ type, img, title }) => (
                    <SwiperSlide key={title}>
                        <Link to={NEWS_BASE_PATH} className="home-news-card" style={{ backgroundImage: `url(${img})` }}>
                            <span className="home-news-card__tag">{type}</span>
                            <span className="home-news-card__title">
                                <span className="home-news-card__title-text" title={title}>{title}</span>
                            </span>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    </Box>
}
