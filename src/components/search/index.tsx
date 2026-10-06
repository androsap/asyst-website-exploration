import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { MainLayoutSharedProps } from "shared/layout/main-layout";
import { SITE_URL } from "shared/head/seo";
import { useLocalized } from "shared/i18n";
import { SEARCH_PAGE_SIZE, SEARCH_TABS, SearchIndexConst, SearchPageConst, SearchTab } from "consts/search.const";
import { highlight, searchEntries, toTerms } from "./shared/search-utils";
import "components/product/shared/product-v2.scss";
import "./search.scss";

// Host tanpa protokol untuk baris URL di bawah tiap hasil, mis. "asyst.co.id/about"
const DISPLAY_HOST = SITE_URL.replace(/^https?:\/\/(www\.)?/, "");
const QUERY_DEBOUNCE = 300;

const LoadMoreIcon = () => (
    <svg className="sr-more__icon" viewBox="0 0 20 20" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * Math.PI) / 4;
            return <circle key={i} cx={10 + 7 * Math.cos(angle)} cy={10 + 7 * Math.sin(angle)} r={1.6} fill="currentColor" />;
        })}
    </svg>
);

/** Halaman Search Result (revamp 2026). Kata kunci & tab disimpan di query `?q=` dan `?tab=`. */
export default function SearchComponent({ }: MainLayoutSharedProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("q") ?? "";
    const tabParam = searchParams.get("tab") as SearchTab | null;
    const tab: SearchTab = tabParam && SEARCH_TABS.includes(tabParam) ? tabParam : "all";
    const content = useLocalized(SearchPageConst);
    const index = useLocalized(SearchIndexConst);

    const [input, setInput] = useState(query);
    const [visible, setVisible] = useState(SEARCH_PAGE_SIZE);

    const updateParams = (next: { q?: string; tab?: SearchTab }) => {
        const q = (next.q ?? query).trim();
        const nextTab = next.tab ?? tab;
        setSearchParams({ ...(q && { q }), ...(nextTab !== "all" && { tab: nextTab }) }, { replace: true });
    };

    // Sinkron saat URL berubah dari luar (mis. tombol back)
    useEffect(() => setInput(query), [query]);

    // Hasil diperbarui sambil mengetik, URL ikut berubah setelah jeda singkat
    useEffect(() => {
        if (input.trim() === query.trim()) return;
        const timer = window.setTimeout(() => updateParams({ q: input }), QUERY_DEBOUNCE);
        return () => window.clearTimeout(timer);
    }, [input]);

    useEffect(() => setVisible(SEARCH_PAGE_SIZE), [query, tab]);

    const terms = useMemo(() => toTerms(query), [query]);
    const results = useMemo(() => {
        const matches = searchEntries(index, query);
        return tab === "all" ? matches : matches.filter(entry => entry.category === tab);
    }, [index, query, tab]);

    const countLabel = (results.length === 1 ? content.resultCountSingle : content.resultCount)
        .replace("{n}", String(results.length))
        .replace("{q}", query.trim());

    return <Box className="product-v2 search-v2">
        <Box component="section" className="sr-hero">
            <Container maxWidth="md">
                <Typography variant="h1" className="sr-hero__title">{content.title}</Typography>
                <Box
                    component="form"
                    role="search"
                    className="sr-input"
                    onSubmit={e => { e.preventDefault(); updateParams({ q: input }); }}
                >
                    <SearchRoundedIcon className="sr-input__icon" />
                    <input
                        type="search"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder={content.placeholder}
                        aria-label={content.placeholder}
                        autoFocus={!query}
                    />
                    {input && (
                        <IconButton
                            size="small"
                            className="sr-input__clear"
                            aria-label={content.clear}
                            onClick={() => { setInput(""); updateParams({ q: "" }); }}
                        >
                            <CloseRoundedIcon fontSize="small" />
                        </IconButton>
                    )}
                </Box>
            </Container>
        </Box>

        <Box component="section" className="pv-section pv-section--last sr-body">
            <Container maxWidth="xl">
                <Box className="sr-tabs" role="tablist" aria-label={content.title}>
                    {SEARCH_TABS.map(value => (
                        <button
                            key={value}
                            type="button"
                            role="tab"
                            aria-selected={value === tab}
                            className={`sr-tab ${value === tab ? "active" : ""}`}
                            onClick={() => updateParams({ tab: value })}
                        >
                            {content.tabs[value]}
                        </button>
                    ))}
                </Box>

                {!query.trim()
                    ? <Typography className="sr-count">{content.emptyQuery}</Typography>
                    : <>
                        <Typography className="sr-count" aria-live="polite">
                            {results.length ? countLabel : content.noResult.replace("{q}", query.trim())}
                        </Typography>

                        <ul className="sr-list">
                            {results.slice(0, visible).map(entry => (
                                <li key={`${entry.category}-${entry.link}-${entry.title}`} className="sr-item">
                                    <Link to={entry.link} className="sr-item__title">{highlight(entry.title, terms)}</Link>
                                    <Typography className="sr-item__description">{highlight(entry.description, terms)}</Typography>
                                    <span className="sr-item__url">{DISPLAY_HOST}{entry.link}</span>
                                </li>
                            ))}
                        </ul>

                        {visible < results.length && (
                            <Button
                                className="pv-btn pv-btn--outline sr-more"
                                startIcon={<LoadMoreIcon />}
                                onClick={() => setVisible(count => count + SEARCH_PAGE_SIZE)}
                            >
                                {content.loadMore}
                            </Button>
                        )}
                    </>}
            </Container>
        </Box>
    </Box>
}
