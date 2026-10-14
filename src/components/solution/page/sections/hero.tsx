import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { ChevronRightRoundedIcon, HomeOutlinedIcon } from "components/ui/icons";
import { SolutionPageContent } from "consts/solution-detail/solution-page.types";
import { SOLUTION_BASE_PATH } from "consts/solution-links.const";
import { useT } from "shared/i18n";
import networkBackground from "assets/asyst/img/background/solutions/network.svg";

const heroStyle = { "--sp-hero-network": `url(${networkBackground})` } as CSSProperties;

interface HeroSectionProps {
    content: SolutionPageContent["hero"];
    onPrimary: () => void;
    onSecondary: () => void;
}

export default function HeroSection({ content, onPrimary, onSecondary }: HeroSectionProps) {
    const t = useT();
    const { breadcrumb, eyebrow, title, description, primaryButton, secondaryButton } = content;

    return <section className="sp-hero" style={heroStyle}>
        <nav className="pe-breadcrumb" aria-label="Breadcrumb">
            <Container maxWidth="xl" className="pe-breadcrumb__inner">
                <Link to="/" aria-label={t("Home", "Beranda")}><HomeOutlinedIcon /></Link>
                <ChevronRightRoundedIcon className="pe-breadcrumb__separator" aria-hidden="true" />
                <Link to={SOLUTION_BASE_PATH}>{t("Solutions", "Solusi")}</Link>
                <ChevronRightRoundedIcon className="pe-breadcrumb__separator" aria-hidden="true" />
                <span className="pe-breadcrumb__current" aria-current="page">{breadcrumb}</span>
            </Container>
        </nav>
        <Container maxWidth="xl" className="sp-hero__inner">
            {eyebrow && <span className="sp-hero__eyebrow">{eyebrow}</span>}
            <Typography variant="h1" className="sp-hero__title">{title}</Typography>
            <Typography className="sp-hero__description">{description}</Typography>
            <div className="pv-hero__actions">
                <Button className="pv-btn pv-btn--primary" onClick={onPrimary}>{primaryButton}</Button>
                <Button className="pv-btn pv-btn--outline" onClick={onSecondary}>{secondaryButton}</Button>
            </div>
        </Container>
    </section>
}
