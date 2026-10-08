import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";

interface CtaSectionProps {
    title: string;
    description: string;
    button: string;
    onClick: () => void;
}

export default function CtaSection({ title, description, button, onClick }: CtaSectionProps) {
    return <section className="pv-section pv-section--last">
        <Container maxWidth="xl">
            <div className="pv-cta">
                <div>
                    <Typography variant="h2" className="pv-cta__title">{title}</Typography>
                    <Typography className="pv-cta__description">{description}</Typography>
                </div>
                <Button className="pv-btn pv-btn--white" onClick={onClick}>{button}</Button>
            </div>
        </Container>
    </section>
}
