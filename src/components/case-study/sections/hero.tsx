import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { CaseStudyHeroConst } from "consts/case-study.const";
import { useLocalized } from "shared/i18n";

interface HeroSectionProps {
    onExplore: () => void;
}

export default function HeroSection({ onExplore }: HeroSectionProps) {
    const { title, description, button, image } = useLocalized(CaseStudyHeroConst);

    return <section className="cs-hero">
        <div className="cs-hero__backdrop" style={{ backgroundImage: `url(${image})` }} aria-hidden />
        <Container maxWidth="xl" className="cs-hero__inner">
            <Typography variant="h1" className="cs-hero__title">{title}</Typography>
            <Typography className="cs-hero__description">{description}</Typography>
            <Button className="pv-btn pv-btn--primary cs-hero__button" onClick={onExplore}>{button}</Button>
        </Container>
    </section>
}
