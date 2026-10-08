import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { useLocalized } from "shared/i18n";
import { CareerConnectsConst } from "consts/career.const";

export default function ConnectsSection() {
    const { title, paragraphs, items } = useLocalized(CareerConnectsConst);

    return <section className="pv-section">
        <Container maxWidth="xl">
            <Typography variant="h2" className="cr-title">{title}</Typography>
            {paragraphs.map((text, index) => <Typography key={index} className="cr-text">{text}</Typography>)}
            <div className="cr-connects">
                {items.map(({ title, description, icon: Icon }, index) => (
                    <div key={index} className="cr-card">
                        <div className="cr-icon"><Icon /></div>
                        <Typography variant="h3" className="cr-card__title">{title}</Typography>
                        <Typography className="cr-card__description">{description}</Typography>
                    </div>
                ))}
            </div>
        </Container>
    </section>
}
