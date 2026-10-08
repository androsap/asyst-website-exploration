import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { CtaConst } from "consts/home.const";
import { useLocalized } from "shared/i18n";

interface CtaSectionProps {
    onTalkToExpert: () => void;
}

export default function CtaSection({ onTalkToExpert }: CtaSectionProps) {
    const cta = useLocalized(CtaConst);

    return <section className="home-section home-section--last">
        <Container maxWidth="xl">
            <div className="home-cta">
                <div>
                    <Typography variant="h2" className="home-cta__title">{cta.title}</Typography>
                    <Typography className="home-cta__description">{cta.description}</Typography>
                </div>
                <Button className="home-btn home-btn--white" onClick={onTalkToExpert}>{cta.button}</Button>
            </div>
        </Container>
    </section>
}
