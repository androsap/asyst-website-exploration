import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import IosShareRoundedIcon from "@mui/icons-material/IosShareRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MainLayoutSharedProps } from "shared/layout/main-layout";
import "components/product/shared/product-v2.scss";
import "../shared/news.scss";
import CarouselNav from "components/home/sections/carousel-nav";
import useSwiperNav from "components/home/sections/use-swiper-nav";
import NewsHelper from "helper/NewsHelper";
import NewsModel from "models/news.model";
import { NEWS_AUTHOR, NEWS_BASE_PATH, NEWS_RELATED_LIMIT, NewsDetailConst } from "consts/news-page.const";
import NewsCard from "../shared/news-card";
import { decodeNewsHtml, formatNewsDate, newsCategoryPath, newsReadingMinutes } from "../shared/utils";

/** Halaman detail news (/news/:slug). Isi dari API news/{slug}. */
export default function NewsDetailComponent({ }: MainLayoutSharedProps) {
    const { slug = "" } = useParams();
    const [news, setNews] = useState<NewsModel | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let active = true;
        window.scrollTo({ top: 0 });
        setLoading(true);
        setNews(null);
        NewsHelper.getDetail(slug, ({ status, data }) => {
            if (!active) return;
            setLoading(false);
            setNews(status && data?.data ? data.data : null);
        });
        return () => { active = false };
    }, [slug]);

    useEffect(() => {
        if (news) document.title = `${news.title} | PT Aero Systems Indonesia`;
    }, [news]);

    return <Box className="product-v2 news-v2">
        <Box className="nw-breadcrumb">
            <Container maxWidth="xl" className="nw-breadcrumb__inner">
                <Link to="/" aria-label="Home"><HomeOutlinedIcon /></Link>
                <ChevronRightRoundedIcon className="nw-breadcrumb__separator" />
                <Link to={NEWS_BASE_PATH}>News</Link>
                <ChevronRightRoundedIcon className="nw-breadcrumb__separator" />
                <span className="nw-breadcrumb__current">{news?.title || (loading ? "" : NewsDetailConst.notFoundTitle)}</span>
            </Container>
        </Box>

        <Box component="section" className="pv-section pv-section--last">
            <Container className="nw-article">
                {loading && <ArticleSkeleton />}
                {!loading && !news && <NotFound />}
                {news && <Article news={news} />}
            </Container>
        </Box>
    </Box>
}

function Article({ news }: { news: NewsModel }) {
    const { title, image, content, category, created_date } = news;
    const html = useMemo(() => decodeNewsHtml(content), [content]);
    const minutes = useMemo(() => newsReadingMinutes(content), [content]);

    return <>
        <Typography variant="h1" className="nw-article__title">{title}</Typography>

        <Box className="nw-meta">
            <Box className="nw-meta__info">
                <span className="nw-avatar" aria-hidden>{NEWS_AUTHOR.charAt(0)}</span>
                <Typography className="nw-meta__text">
                    {formatNewsDate(created_date, "MMMM D, YYYY [at] HH:mm:ss")}
                    <span className="nw-meta__divider">|</span>
                    Posted by {NEWS_AUTHOR}
                    {category && <>
                        <span className="nw-meta__divider">|</span>
                        Published at <Link to={newsCategoryPath(category)}>{category}</Link>
                    </>}
                </Typography>
            </Box>
            <Box className="nw-meta__actions">
                <ShareButton title={title} />
                <span className="nw-meta__stat">
                    <AccessTimeRoundedIcon /> {minutes} min{minutes > 1 ? "s" : ""}
                </span>
            </Box>
        </Box>

        {image && <img src={image} alt={title} className="nw-article__image" />}

        <Box className="nw-content" dangerouslySetInnerHTML={{ __html: html }} />

        {category && <Box className="nw-tags">
            <Link to={newsCategoryPath(category)} className="nw-tag">{category}</Link>
        </Box>}

        <Box className="nw-publisher">
            <span className="nw-avatar nw-avatar--large" aria-hidden>{NEWS_AUTHOR.charAt(0)}</span>
            <Box>
                <Typography className="nw-publisher__name">{NewsDetailConst.publishedBy}</Typography>
                <Typography className="nw-publisher__text">
                    {NewsDetailConst.collaboration} <Link to={NewsDetailConst.contactLink}>{NewsDetailConst.contactLabel}</Link>
                </Typography>
            </Box>
        </Box>

        <RelatedNews slug={news.slug} category={category} />
    </>
}

function ShareButton({ title }: { title: string }) {
    const [copied, setCopied] = useState(false);

    const share = async () => {
        const url = window.location.href;
        try {
            if (navigator.share) return await navigator.share({ title, url });
            await navigator.clipboard.writeText(url);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            // dibatalkan pengguna / clipboard tidak diizinkan
        }
    };

    return <button type="button" className="nw-meta__share" onClick={share}>
        <IosShareRoundedIcon /> {copied ? "Link copied" : "Share"}
    </button>
}

/** News lain dengan kategori sama; kalau kurang dari 2, dilengkapi news terbaru. */
function RelatedNews({ slug, category }: { slug: string; category: string }) {
    const [items, setItems] = useState<NewsModel[]>([]);
    const { swiperProps, navProps } = useSwiperNav();

    useEffect(() => {
        let active = true;
        const fetchList = (params: { category?: string }) => new Promise<NewsModel[]>(resolve =>
            NewsHelper.getList({ limit: NEWS_RELATED_LIMIT + 1, ...params }, ({ status, data }) =>
                resolve(status && Array.isArray(data?.data) ? data.data : [])));

        (async () => {
            let list = (await fetchList({ category })).filter(x => x.slug !== slug);
            if (list.length < 2) {
                const latest = await fetchList({});
                list = [...list, ...latest.filter(x => x.slug !== slug && !list.some(y => y.slug === x.slug))];
            }
            if (active) setItems(list.slice(0, NEWS_RELATED_LIMIT));
        })();
        return () => { active = false };
    }, [slug, category]);

    if (!items.length) return null;

    return <Box className="nw-related">
        <Box className="nw-related__header">
            <Typography variant="h2" className="nw-related__title">{NewsDetailConst.relatedTitle}</Typography>
            <CarouselNav {...navProps} />
        </Box>
        <Swiper {...swiperProps} spaceBetween={20} slidesPerView={1.1} breakpoints={{ 600: { slidesPerView: 2 } }}>
            {items.map(item => (
                <SwiperSlide key={item.id}>
                    <NewsCard item={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    </Box>
}

function ArticleSkeleton() {
    return <Box aria-busy>
        <Skeleton variant="text" height={48} width="95%" />
        <Skeleton variant="text" height={48} width="60%" />
        <Skeleton variant="rounded" height={44} sx={{ mt: 3, borderRadius: 999 }} />
        <Skeleton variant="rounded" className="nw-article__image" height={360} />
        {Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} variant="text" width={i % 3 === 2 ? "70%" : "100%"} />)}
    </Box>
}

function NotFound() {
    return <Box className="nw-empty">
        <Typography variant="h1" className="nw-article__title">{NewsDetailConst.notFoundTitle}</Typography>
        <Typography>{NewsDetailConst.notFoundDescription}</Typography>
        <Button component={Link} to={NEWS_BASE_PATH} className="pv-btn pv-btn--primary">Back to News</Button>
    </Box>
}
