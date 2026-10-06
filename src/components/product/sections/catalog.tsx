import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Link } from "react-router-dom";
import { ProductCatalogConst } from "consts/product.const";
import { useLocalized, useT } from "shared/i18n";
import SectionHeading from "../shared/section-heading";
import { SECTION_IDS } from "../shared/page-actions";

// Tampil satu baris saja; sisanya lewat tombol "Explore ..."
const CATALOG_VISIBLE = 3;

export default function CatalogSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const t = useT();
    const catalog = useLocalized(ProductCatalogConst);
    const active = catalog.categories[activeIndex];

    return <Box component="section" id={SECTION_IDS.catalog} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            <SectionHeading title={catalog.title} description={catalog.description} align="left" />
            <Box className="pv-catalog">
                <Box className="pv-catalog__menu" role="tablist">
                    {catalog.categories.map(({ label }, index) => (
                        <ButtonBase
                            key={index}
                            role="tab"
                            aria-selected={index === activeIndex}
                            className={`pv-catalog__menu-item ${index === activeIndex ? "active" : ""}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {label}
                        </ButtonBase>
                    ))}
                </Box>
                <Box className="pv-catalog__panel" role="tabpanel">
                    <Typography className="pv-catalog__eyebrow">{active.label}</Typography>
                    <Typography className="pv-catalog__title">{active.title}</Typography>
                    <Typography className="pv-catalog__description">{active.description}</Typography>
                    <Box className="pv-catalog__grid">
                        {active.products.slice(0, CATALOG_VISIBLE).map(({ name, title, description, image, link }) => (
                            <Link key={name} to={link} className="pv-catalog-card">
                                <Typography className="pv-catalog-card__name">{name}</Typography>
                                <Typography className="pv-catalog-card__title">{title}</Typography>
                                <Typography className="pv-catalog-card__description">{description}</Typography>
                                <span className="pv-catalog-card__link">{t("Explore Product", "Lihat Produk")} <ArrowForwardRoundedIcon /></span>
                                <Box className="pv-catalog-card__image" sx={{ backgroundImage: `url(${image})` }} />
                            </Link>
                        ))}
                    </Box>
                    {active.products.length > CATALOG_VISIBLE && <Link to={active.button.link}>
                        <Button className="pv-btn pv-btn--primary pv-catalog__button">{active.button.label}</Button>
                    </Link>}
                </Box>
            </Box>
        </Container>
    </Box>
}
