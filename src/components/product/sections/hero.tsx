import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { ProductHeroConst } from "consts/product.const";
import { useLocalized } from "shared/i18n";

interface HeroSectionProps {
    onExplore: () => void;
    onTalkToExpert: () => void;
}

export default function HeroSection({ onExplore, onTalkToExpert }: HeroSectionProps) {
    const { eyebrow, title, description, primaryButton, secondaryButton, image } = useLocalized(ProductHeroConst);

    return <section className="pv-hero pv-hero--with-image">
        <Container maxWidth="xl">
            <div className="pv-hero__content">
                <Typography className="pv-hero__eyebrow">{eyebrow}</Typography>
                <Typography variant="h1" className="pv-hero__title">{title}</Typography>
                <Typography className="pv-hero__description">{description}</Typography>
                <div className="pv-hero__actions">
                    <Button className="pv-btn pv-btn--primary" onClick={onExplore}>{primaryButton.label}</Button>
                    <Button className="pv-btn pv-btn--outline" onClick={onTalkToExpert}>{secondaryButton.label}</Button>
                </div>
            </div>
            <div className="pv-hero__mockup">
                <img src={image} alt={title} />
            </div>
        </Container>
    </section>
}
