import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { SolutionHeroContent } from "consts/solution.const";

interface SolutionHeroProps {
    content: SolutionHeroContent;
    onPrimary: () => void;
    onSecondary: () => void;
}

export default function SolutionHero({ content, onPrimary, onSecondary }: SolutionHeroProps) {
    const { eyebrow, title, description, primaryButton, secondaryButton, image } = content;

    return <section className="sv-hero">
        <Container maxWidth="xl" className="sv-hero__inner">
            <div>
                <Typography className="sv-hero__eyebrow">{eyebrow}</Typography>
                <Typography variant="h1" className="sv-hero__title">{title}</Typography>
                <Typography className="sv-hero__description">{description}</Typography>
                <div className="sv-hero__actions">
                    <Button className="pv-btn pv-btn--primary" onClick={onPrimary}>{primaryButton}</Button>
                    <Button className="pv-btn pv-btn--outline" onClick={onSecondary}>{secondaryButton}</Button>
                </div>
            </div>
            <div className="sv-hero__media">
                <img src={image} alt={title} />
            </div>
        </Container>
    </section>
}
