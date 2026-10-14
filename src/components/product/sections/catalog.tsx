import { useLayoutEffect, useRef, useState } from "react";
import { Button } from "components/ui/button";
import { ButtonBase } from "components/ui/button-base";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { ArrowForwardRoundedIcon } from "components/ui/icons";
import { Link } from "react-router-dom";
import { ProductCatalogConst } from "consts/product.const";
import { useLocalized, useT } from "shared/i18n";
import SectionHeading from "../shared/section-heading";
import { SECTION_IDS } from "../shared/page-actions";

const CATALOG_VISIBLE = 3;

type IndicatorRect = { top: number; left: number; width: number; height: number };

export default function CatalogSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [indicator, setIndicator] = useState<IndicatorRect | null>(null);
    const [panelHeight, setPanelHeight] = useState<number | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const contentRef = useRef<HTMLDivElement>(null);
    const t = useT();
    const catalog = useLocalized(ProductCatalogConst);
    const active = catalog.categories[activeIndex];

    useLayoutEffect(() => {
        const measure = () => {
            const item = itemRefs.current[activeIndex];
            if (item) setIndicator({ top: item.offsetTop, left: item.offsetLeft, width: item.offsetWidth, height: item.offsetHeight });
        };
        measure();

        const menu = menuRef.current;
        if (!menu || typeof ResizeObserver === "undefined") return;
        const observer = new ResizeObserver(measure);
        observer.observe(menu);
        return () => observer.disconnect();
    }, [activeIndex]);

    useLayoutEffect(() => {
        const content = contentRef.current;
        if (!content || typeof ResizeObserver === "undefined") return;
        const observer = new ResizeObserver(() => setPanelHeight(content.offsetHeight));
        observer.observe(content);
        return () => observer.disconnect();
    }, [activeIndex]);

    const select = (index: number) => {
        setActiveIndex(index);
        itemRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    };

    return <section id={SECTION_IDS.catalog} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            <SectionHeading title={catalog.title} description={catalog.description} align="left" />
            <div className="pv-catalog">
                <div ref={menuRef} className={`pv-catalog__menu ${indicator ? "has-indicator" : ""}`} role="tablist">
                    {indicator && <span
                        className="pv-catalog__indicator"
                        aria-hidden="true"
                        style={{ width: indicator.width, height: indicator.height, transform: `translate(${indicator.left}px, ${indicator.top}px)` }}
                    />}
                    {catalog.categories.map(({ label }, index) => (
                        <ButtonBase
                            key={index}
                            ref={(el: HTMLButtonElement | null) => { itemRefs.current[index] = el; }}
                            role="tab"
                            aria-selected={index === activeIndex}
                            className={`pv-catalog__menu-item ${index === activeIndex ? "active" : ""}`}
                            onClick={() => select(index)}
                        >
                            {label}
                        </ButtonBase>
                    ))}
                </div>
                <div className="pv-catalog__viewport" style={panelHeight === null ? undefined : { height: panelHeight }}>
                    <div ref={contentRef} key={activeIndex} className="pv-catalog__panel" role="tabpanel">
                        <Typography className="pv-catalog__eyebrow">{active.label}</Typography>
                        <Typography className="pv-catalog__title">{active.title}</Typography>
                        <Typography className="pv-catalog__description">{active.description}</Typography>
                        <div className="pv-catalog__grid">
                            {active.products.slice(0, CATALOG_VISIBLE).map(({ name, title, description, image, link }) => (
                                <Link key={name} to={link} className="pv-catalog-card">
                                    <Typography className="pv-catalog-card__name">{name}</Typography>
                                    <Typography className="pv-catalog-card__title">{title}</Typography>
                                    <Typography className="pv-catalog-card__description">{description}</Typography>
                                    <span className="pv-catalog-card__link">{t("Explore Product", "Lihat Produk")} <ArrowForwardRoundedIcon /></span>
                                    <div className="pv-catalog-card__image" style={{ backgroundImage: `url(${image})` }} />
                                </Link>
                            ))}
                        </div>
                        {active.products.length > CATALOG_VISIBLE && <Button asChild className="pv-btn pv-btn--primary pv-catalog__button">
                            <Link to={active.button.link}>{active.button.label}</Link>
                        </Button>}
                    </div>
                </div>
            </div>
        </Container>
    </section>
}
