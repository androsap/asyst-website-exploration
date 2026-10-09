import { useEffect, useState } from "react";
import { Container } from "components/ui/container";
import { Skeleton } from "components/ui/skeleton";
import { Typography } from "components/ui/typography";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NewsHelper from "helper/NewsHelper";
import NewsModel from "models/news.model";
import { NEWS_BASE_PATH, NewsCategoryTermsConst, NewsDummyConst } from "consts/news-page.const";
import { useT, useTerms } from "shared/i18n";
import { newsDetailPath } from "components/news/shared/utils";
import CarouselNav from "./carousel-nav";
import useSwiperNav from "./use-swiper-nav";
import LazyBackground from "./lazy-background";

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
            const list: NewsModel[] = status && Array.isArray(data?.data) ? data.data : [];
            // TODO: hapus fallback dummy setelah akses CMS tersedia
            setNews(list.length ? list : NewsDummyConst.slice(0, HOME_NEWS_LIMIT));
        });
        return () => { active = false };
    }, []);

    if (!loading && !news.length) return null;

    // Dummy belum punya halaman detail, arahkan ke daftar news
    const cardPath = (slug: string) => slug.startsWith("dummy-") ? NEWS_BASE_PATH : newsDetailPath(slug);

    return <section className="home-section home-news__section">
        <Container maxWidth="xl">
            <div className="home-news__header">
                <Typography variant="h2" className="home-heading__title">{t("News", "Berita")}</Typography>
                <CarouselNav {...navProps} variant="arrow" size="large" />
            </div>
            <Swiper {...swiperProps} className="home-news__swiper" spaceBetween={16} slidesPerView={1} breakpoints={{ 600: { slidesPerView: 2.1, spaceBetween: 20 }, 1024: { slidesPerView: 3.2, spaceBetween: 20 } }}>
                {loading
                    ? Array.from({ length: 4 }).map((_, index) => (
                        <SwiperSlide key={index}>
                            <Skeleton variant="rounded" className="home-news-card" />
                        </SwiperSlide>
                    ))
                    : news.map(({ id, slug, image, title, category: type }) => (
                        // Tiap kartu = <article> dengan heading sendiri (SEO / semantik HTML5)
                        <SwiperSlide key={id} tag="article">
                            <LazyBackground as={Link} to={cardPath(slug)} className="home-news-card" image={image}>
                                <span className="home-news-card__tag">{category(type)}</span>
                                <h3 className="home-news-card__title">
                                    <span className="home-news-card__title-text" title={title}>{title}</span>
                                </h3>
                            </LazyBackground>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </Container>
    </section>
}
