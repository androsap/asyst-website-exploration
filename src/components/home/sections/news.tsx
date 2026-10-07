import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NewsHelper from "helper/NewsHelper";
import NewsModel from "models/news.model";
import { NewsCategoryTermsConst } from "consts/news-page.const";
import { useT, useTerms } from "shared/i18n";
import { newsDetailPath } from "components/news/shared/utils";
import CarouselNav from "./carousel-nav";
import useSwiperNav from "./use-swiper-nav";

const HOME_NEWS_LIMIT = 6;

// Berita terbaru dari API news/retrieve (sama dengan halaman /news); kartu mengarah ke detail news
export default function NewsSection() {
    const { swiperProps, navProps } = useSwiperNav();
    const t = useT();
    const category = useTerms(NewsCategoryTermsConst);
    const [news, setNews] = useState<NewsModel[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let active = true;
        NewsHelper.getList({ limit: HOME_NEWS_LIMIT }, ({ status, data }) => {
            if (!active) return;
            setLoading(false);
            setNews(status && Array.isArray(data?.data) ? data.data : []);
        });
        return () => { active = false };
    }, []);

    if (!loading && !news.length) return null;

    return <Box component="section" className="home-section home-news__section">
        <Container maxWidth="xl">
            <Box className="home-news__header">
                <Typography variant="h2" className="home-heading__title">{t("News", "Berita")}</Typography>
                <CarouselNav {...navProps} variant="arrow" size="large" />
            </Box>
            <Swiper {...swiperProps} className="home-news__swiper" spaceBetween={16} slidesPerView={1} breakpoints={{ 600: { slidesPerView: 2.1, spaceBetween: 20 }, 1024: { slidesPerView: 3.2, spaceBetween: 20 } }}>
                {loading
                    ? Array.from({ length: 4 }).map((_, index) => (
                        <SwiperSlide key={index}>
                            <Skeleton variant="rounded" className="home-news-card" />
                        </SwiperSlide>
                    ))
                    : news.map(({ id, slug, image, title, category: type }) => (
                        <SwiperSlide key={id}>
                            <Link to={newsDetailPath(slug)} className="home-news-card" style={{ backgroundImage: `url(${image})` }}>
                                <span className="home-news-card__tag">{category(type)}</span>
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
