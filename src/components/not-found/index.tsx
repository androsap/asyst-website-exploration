import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonBase } from "components/ui/button-base";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { SearchRoundedIcon } from "components/ui/icons";
import { useTalkToExpert } from "components/product/shared/page-actions";
import { NotFoundCard, NotFoundConst } from "consts/not-found.const";
import { useLocalized } from "shared/i18n";
import "components/product/shared/product-v2.scss";
import "./not-found.scss";

const Illustration = () => (
    <svg className="nf-hero__illustration" viewBox="0 0 320 280" role="img" aria-hidden="true">
        <defs>
            <linearGradient id="nf-bar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#5B9BD8" />
                <stop offset="1" stopColor="#2775BB" />
            </linearGradient>
            <linearGradient id="nf-body" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#EAF1F9" />
            </linearGradient>
            <filter id="nf-shadow" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#123554" floodOpacity="0.14" />
            </filter>
        </defs>
        <g filter="url(#nf-shadow)">
            <rect x="34" y="44" width="252" height="200" rx="26" fill="url(#nf-body)" />
            <path d="M34 70a26 26 0 0 1 26-26h200a26 26 0 0 1 26 26v8H34z" fill="url(#nf-bar)" />
        </g>
        <circle cx="64" cy="62" r="8" fill="#FFFFFF" opacity=".9" />
        <circle cx="88" cy="62" r="8" fill="#FFFFFF" opacity=".65" />
        <circle cx="112" cy="62" r="8" fill="#123554" opacity=".35" />
        <text x="160" y="190" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="78" fontWeight="800" fill="#89BA3A" stroke="#6E9B2C" strokeWidth="2">404</text>
    </svg>
);

const CardContent = ({ title, description, image }: NotFoundCard) => <>
    <div className="nf-card__image">
        <img src={image} alt="" loading="lazy" decoding="async" />
    </div>
    <Typography component="h2" className="nf-card__title">{title}</Typography>
    <Typography className="nf-card__description">{description}</Typography>
</>;

export default function NotFoundComponent() {
    const content = useLocalized(NotFoundConst);
    const navigate = useNavigate();
    const talkToExpert = useTalkToExpert();
    const [query, setQuery] = useState("");

    useEffect(() => {
        const meta = document.createElement("meta");
        meta.name = "robots";
        meta.content = "noindex";
        document.head.appendChild(meta);
        return () => meta.remove();
    }, []);

    const onSearch = (event: FormEvent) => {
        event.preventDefault();
        const q = query.trim();
        navigate(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
    };

    return <div className="product-v2 not-found">
        <section className="nf-hero">
            <Container maxWidth="xl" className="nf-hero__inner">
                <Illustration />
                <div>
                    <Typography variant="h1" className="nf-hero__title">{content.title}</Typography>
                    <Typography className="nf-hero__description">
                        {content.description.before}
                        <Link to="/">{content.description.link}</Link>
                        {content.description.after}
                    </Typography>
                    <form role="search" className="nf-search" onSubmit={onSearch}>
                        <label htmlFor="nf-search-input" className="nf-search__label">{content.searchLabel}</label>
                        <div className="nf-search__field">
                            <SearchRoundedIcon className="nf-search__icon" />
                            <input
                                id="nf-search-input"
                                type="search"
                                value={query}
                                onChange={event => setQuery(event.target.value)}
                                placeholder={content.searchPlaceholder}
                            />
                            <button type="submit" className="nf-search__submit">{content.searchSubmit}</button>
                        </div>
                    </form>
                </div>
            </Container>
        </section>
        <section className="nf-cards">
            <Container maxWidth="xl">
                <ul className="nf-cards__grid">
                    {content.cards.map(card => (
                        <li key={card.title}>
                            {card.link
                                ? <Link to={card.link} className="nf-card"><CardContent {...card} /></Link>
                                : <ButtonBase className="nf-card" onClick={talkToExpert}><CardContent {...card} /></ButtonBase>}
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    </div>
}
