import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { NewsDetailSkeleton } from "shared/skeleton";
import { Typography } from "components/ui/typography";
import { HomeOutlinedIcon, ChevronRightRoundedIcon, IosShareRoundedIcon, AccessTimeRoundedIcon } from "components/ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MainLayoutSharedProps } from "shared/layout/main-layout";
import "components/product/shared/product-v2.scss";
import "../shared/news.scss";
import CarouselNav from "components/home/sections/carousel-nav";
import useSwiperNav from "components/home/sections/use-swiper-nav";
import NewsHelper from "helper/NewsHelper";
import NewsModel from "models/news.model";
import { NEWS_AUTHOR, NEWS_BASE_PATH, NEWS_RELATED_LIMIT, NewsCategoryTermsConst, NewsDetailConst } from "consts/news-page.const";
import { useLanguage, useLocalized, useT, useTerms } from "shared/i18n";
import NewsCard from "../shared/news-card";
import { getDummyNewsDetail, getDummyNewsList, isDummyNews } from "../shared/dummy";
import { decodeNewsHtml, formatNewsDate, newsCategoryPath, newsReadingMinutes } from "../shared/utils";

export default function NewsDetailComponent({ }: MainLayoutSharedProps) {
    const { slug = "" } = useParams();
    const [news, setNews] = useState<NewsModel | null>(null);
    const [loading, setLoading] = useState(true);
    const t = useT();
    const text = useLocalized(NewsDetailConst);

    useEffect(() => {
        let active = true;
        window.scrollTo({ top: 0 });
        setLoading(true);
        setNews(null);
        const onDetail = ({ status, data }: { status: boolean; data: any }) => {
            if (!active) return;
            setLoading(false);
            setNews(status && data?.data ? data.data : null);
        };
        const cancel = isDummyNews(slug) ? getDummyNewsDetail(slug, onDetail) : NewsHelper.getDetail(slug, onDetail);
        return () => {
            active = false;
            if (typeof cancel === "function") cancel();
        };
    }, [slug]);

    useEffect(() => {
        if (news) document.title = `${news.title} | PT Aero Systems Indonesia`;
    }, [news]);

    if (loading) return <NewsDetailSkeleton />;

    return <div className="product-v2 news-v2">
        <div className="nw-breadcrumb">
            <Container maxWidth="xl" className="nw-breadcrumb__inner">
                <Link to="/" aria-label={t("Home", "Beranda")}><HomeOutlinedIcon /></Link>
                <ChevronRightRoundedIcon className="nw-breadcrumb__separator" />
                <Link to={NEWS_BASE_PATH}>{t("News", "Berita")}</Link>
                <ChevronRightRoundedIcon className="nw-breadcrumb__separator" />
                <span className="nw-breadcrumb__current">{news?.title || text.notFoundTitle}</span>
            </Container>
        </div>

        <section className="pv-section pv-section--last">
            <Container className="nw-article">
                {!news && <NotFound />}
                {news && <Article news={news} />}
            </Container>
        </section>
    </div>
}

function Article({ news }: { news: NewsModel }) {
    const { title, image, content, category, created_date } = news;
    const html = useMemo(() => decodeNewsHtml(content), [content]);
    const minutes = useMemo(() => newsReadingMinutes(content), [content]);
    const language = useLanguage();
    const text = useLocalized(NewsDetailConst);
    const categoryLabel = useTerms(NewsCategoryTermsConst);

    return <>
        <Typography variant="h1" className="nw-article__title">{title}</Typography>

        <div className="nw-meta">
            <div className="nw-meta__info">
                <span className="nw-avatar" aria-hidden>{NEWS_AUTHOR.charAt(0)}</span>
                <Typography className="nw-meta__text">
                    {formatNewsDate(created_date, language, text.dateFormat)}
                    <span className="nw-meta__divider">|</span>
                    {text.postedBy}
                    {category && <>
                        <span className="nw-meta__divider">|</span>
                        {text.publishedAt} <Link to={newsCategoryPath(category)}>{categoryLabel(category)}</Link>
                    </>}
                </Typography>
            </div>
            <div className="nw-meta__actions">
                <ShareButton title={title} />
                <span className="nw-meta__stat">
                    <AccessTimeRoundedIcon /> {(minutes > 1 ? text.readingTimePlural : text.readingTime).replace("{n}", String(minutes))}
                </span>
            </div>
        </div>

        {image && <img src={image} alt={title} className="nw-article__image" />}

        <div className="nw-content" dangerouslySetInnerHTML={{ __html: html }} />

        {category && <div className="nw-tags">
            <Link to={newsCategoryPath(category)} className="nw-tag">{categoryLabel(category)}</Link>
        </div>}

        <div className="nw-publisher">
            <span className="nw-avatar nw-avatar--large" aria-hidden>{NEWS_AUTHOR.charAt(0)}</span>
            <div>
                <Typography className="nw-publisher__name">{text.publishedBy}</Typography>
                <Typography className="nw-publisher__text">
                    {text.collaboration} <Link to={text.contactLink}>{text.contactLabel}</Link>
                </Typography>
            </div>
        </div>

        <RelatedNews slug={news.slug} category={category} />
    </>
}

function ShareButton({ title }: { title: string }) {
    const [copied, setCopied] = useState(false);
    const text = useLocalized(NewsDetailConst);

    const share = async () => {
        const url = window.location.href;
        try {
            if (navigator.share) return await navigator.share({ title, url });
            await navigator.clipboard.writeText(url);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
        }
    };

    return <button type="button" className="nw-meta__share" onClick={share}>
        <IosShareRoundedIcon /> {copied ? text.linkCopied : text.share}
    </button>
}

function RelatedNews({ slug, category }: { slug: string; category: string }) {
    const [items, setItems] = useState<NewsModel[]>([]);
    const { swiperProps, navProps } = useSwiperNav();
    const text = useLocalized(NewsDetailConst);

    useEffect(() => {
        let active = true;
        const getList = isDummyNews(slug) ? getDummyNewsList : NewsHelper.getList.bind(NewsHelper);
        const fetchList = (params: { category?: string }) => new Promise<NewsModel[]>(resolve =>
            getList({ limit: NEWS_RELATED_LIMIT + 1, ...params }, ({ status, data }) =>
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

    return <div className="nw-related">
        <div className="nw-related__header">
            <Typography variant="h2" className="nw-related__title">{text.relatedTitle}</Typography>
            <CarouselNav {...navProps} />
        </div>
        <Swiper {...swiperProps} spaceBetween={20} slidesPerView={1.1} breakpoints={{ 600: { slidesPerView: 2 } }}>
            {items.map(item => (
                <SwiperSlide key={item.id}>
                    <NewsCard item={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
}

function NotFound() {
    const text = useLocalized(NewsDetailConst);

    return <div className="nw-empty">
        <Typography variant="h1" className="nw-article__title">{text.notFoundTitle}</Typography>
        <Typography>{text.notFoundDescription}</Typography>
        <Button asChild className="pv-btn pv-btn--primary"><Link to={NEWS_BASE_PATH}>{text.backToNews}</Link></Button>
    </div>
}
