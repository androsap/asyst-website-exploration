import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { IndustryHeroContent } from "consts/industry.const";

interface IndustryHeroProps {
    content: IndustryHeroContent;
    onPrimary: () => void;
    onSecondary?: () => void;
}

/** Hero rata tengah; eyebrow, tombol kedua dan statistik opsional. Memakai kelas pv-hero dari product-v2. */
export default function IndustryHero({ content, onPrimary, onSecondary }: IndustryHeroProps) {
    const { eyebrow, title, description, primaryButton, secondaryButton, stats } = content;

    return <section className="pv-hero iv-hero">
        <Container maxWidth="xl">
            <div className="pv-hero__content">
                {eyebrow && <Typography className="pv-hero__eyebrow">{eyebrow}</Typography>}
                <Typography variant="h1" className="pv-hero__title">{title}</Typography>
                <Typography className="pv-hero__description">{description}</Typography>
                <div className="pv-hero__actions">
                    <Button className="pv-btn pv-btn--primary" onClick={onPrimary}>{primaryButton}</Button>
                    {secondaryButton && onSecondary && <Button className="pv-btn pv-btn--outline" onClick={onSecondary}>{secondaryButton}</Button>}
                </div>
            </div>
            {stats && <div className="pv-stats">
                {stats.map(({ icon: Icon, value, label }) => (
                    <div key={label} className="pv-stats__item">
                        <Icon className="pv-stats__icon" />
                        <div>
                            <Typography className="pv-stats__value">{value}</Typography>
                            <Typography className="pv-stats__label">{label}</Typography>
                        </div>
                    </div>
                ))}
            </div>}
        </Container>
    </section>
}
