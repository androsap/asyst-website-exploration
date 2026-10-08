import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { ProductDetailContent } from "consts/product-detail.const";

interface HeroSectionProps {
    content: ProductDetailContent["hero"];
    onTalkToExpert: () => void;
    onExplore: () => void;
}

export default function HeroSection({ content, onTalkToExpert, onExplore }: HeroSectionProps) {
    const { title, description, primaryButton, secondaryButton, stats } = content;

    return <section className="pv-hero">
        <Container maxWidth="xl">
            <div className="pv-hero__content">
                <Typography variant="h1" className="pv-hero__title">{title}</Typography>
                <Typography className="pv-hero__description">{description}</Typography>
                <div className="pv-hero__actions">
                    <Button className="pv-btn pv-btn--primary" onClick={onTalkToExpert}>{primaryButton}</Button>
                    <Button className="pv-btn pv-btn--outline" onClick={onExplore}>{secondaryButton}</Button>
                </div>
            </div>
            <div className="pv-stats">
                {stats.map(({ icon: Icon, value, label }) => (
                    <div key={label} className="pv-stats__item">
                        <Icon className="pv-stats__icon" />
                        <div>
                            <Typography className="pv-stats__value">{value}</Typography>
                            <Typography className="pv-stats__label">{label}</Typography>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    </section>
}
