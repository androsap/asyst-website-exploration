import { Link } from "react-router-dom";
import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { ChevronRightRoundedIcon, HomeOutlinedIcon } from "components/ui/icons";
import { EnterpriseProductContent } from "consts/product-detail/enterprise.types";
import { useT } from "shared/i18n";
import { PRODUCT_BASE_PATH } from "../constants";

interface HeroSectionProps {
    content: EnterpriseProductContent["hero"];
    onTalkToExpert: () => void;
    onExplore: () => void;
}

export default function HeroSection({ content, onTalkToExpert, onExplore }: HeroSectionProps) {
    const t = useT();
    const { breadcrumb, title, description, primaryButton, secondaryButton, image, imageAlt } = content;

    return <section className="pe-hero">
        <nav className="pe-breadcrumb" aria-label="Breadcrumb">
            <Container maxWidth="xl" className="pe-breadcrumb__inner">
                <Link to="/" aria-label={t("Home", "Beranda")}><HomeOutlinedIcon /></Link>
                <ChevronRightRoundedIcon className="pe-breadcrumb__separator" aria-hidden="true" />
                <Link to={PRODUCT_BASE_PATH}>{t("Products", "Produk")}</Link>
                <ChevronRightRoundedIcon className="pe-breadcrumb__separator" aria-hidden="true" />
                <span className="pe-breadcrumb__current" aria-current="page">{breadcrumb}</span>
            </Container>
        </nav>
        <Container maxWidth="xl" className="pe-hero__inner">
            <div className="pe-hero__content">
                <Typography variant="h1" className="pe-hero__title">{title}</Typography>
                <Typography className="pe-hero__description">{description}</Typography>
                <div className="pe-hero__actions">
                    <Button className="pv-btn pv-btn--primary" onClick={onTalkToExpert}>{primaryButton}</Button>
                    <Button className="pv-btn pv-btn--outline" onClick={onExplore}>{secondaryButton}</Button>
                </div>
            </div>
            <div className="pe-hero__media">
                <img src={image} alt={imageAlt} decoding="async" />
            </div>
        </Container>
    </section>
}
