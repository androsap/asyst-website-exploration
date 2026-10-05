import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { MainLayoutSharedProps } from "shared/layout/main-layout";
import "components/product/shared/product-v2.scss";
import "./shared/news.scss";
import NewsHelper from "helper/NewsHelper";
import NewsModel from "models/news.model";
import { NEWS_ALL_CATEGORY, NEWS_PAGE_SIZE, NewsCategoriesConst, NewsHeroConst } from "consts/news-page.const";
import NewsCard, { NewsCardSkeleton } from "./shared/news-card";

/** Halaman utama News (revamp 2026). Daftar news dari API, filter kategori disimpan di query `?category=`. */
export default function NewsComponent({ }: MainLayoutSharedProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get("category") || NEWS_ALL_CATEGORY;

    const [items, setItems] = useState<NewsModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(false);
    // Abaikan respons lama kalau kategori sudah diganti sebelum request selesai
    const requestId = useRef(0);

    const load = useCallback((offset: number) => {
        const id = ++requestId.current;
        setLoading(true);
        setError(false);
        NewsHelper.getList({
            limit: NEWS_PAGE_SIZE,
            offset,
            category: category === NEWS_ALL_CATEGORY ? undefined : category,
        }, ({ status, data }) => {
            if (id !== requestId.current) return;
            setLoading(false);
            const list: NewsModel[] = status && Array.isArray(data?.data) ? data.data : [];
            if (!status) setError(true);
            setItems(prev => offset ? [...prev, ...list] : list);
            // Gagal saat "Show More": tombol tetap ada agar bisa dicoba lagi
            setHasMore(status ? list.length === NEWS_PAGE_SIZE : offset > 0);
        });
    }, [category]);

    useEffect(() => {
        setItems([]);
        load(0);
    }, [load]);

    const selectCategory = (value: string) => {
        setSearchParams(value === NEWS_ALL_CATEGORY ? {} : { category: value }, { replace: true });
    };

    return <Box className="product-v2 news-v2">
        <Box component="section" className="nw-hero">
            <Container maxWidth="md">
                <Typography variant="h1" className="nw-hero__title">{NewsHeroConst.title}</Typography>
                <Typography className="nw-hero__description">{NewsHeroConst.description}</Typography>
            </Container>
        </Box>

        <Box component="section" className="pv-section pv-section--last">
            <Container maxWidth="xl">
                <Box className="nw-filters" role="tablist" aria-label="News category">
                    {NewsCategoriesConst.map(value => (
                        <button
                            key={value}
                            type="button"
                            role="tab"
                            aria-selected={value === category}
                            className={`nw-filter ${value === category ? "active" : ""}`}
                            onClick={() => selectCategory(value)}
                        >
                            {value}
                        </button>
                    ))}
                </Box>

                <Box className="nw-grid">
                    {items.map(item => <NewsCard key={item.id} item={item} />)}
                    {loading && Array.from({ length: items.length ? 3 : NEWS_PAGE_SIZE }).map((_, i) => <NewsCardSkeleton key={i} />)}
                </Box>

                {!loading && !items.length && (
                    <Box className="nw-empty">
                        <Typography>{error ? "Failed to load news." : "No news in this category yet."}</Typography>
                        {error && <Button className="pv-btn pv-btn--outline" onClick={() => load(0)}>Try again</Button>}
                    </Box>
                )}

                {hasMore && !loading && (
                    <Box className="nw-more">
                        <Button className="pv-btn pv-btn--primary nw-more__button" onClick={() => load(items.length)}>Show More</Button>
                    </Box>
                )}
            </Container>
        </Box>
    </Box>
}
