import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { SolutionIconCard } from "consts/solution.const";
import SectionHeading from "components/product/shared/section-heading";

interface IconCardsSectionProps {
    title: string;
    description?: string;
    items: SolutionIconCard[];
}

export default function IconCardsSection({ title, description, items }: IconCardsSectionProps) {
    return <section className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={title} description={description} />
            <div className="pv-grid pv-grid--4">
                {items.map(({ icon: Icon, title, description }) => (
                    <div key={title} className="pv-card pv-card--soft sv-icon-card">
                        <Icon className="sv-icon-card__icon" />
                        <Typography className="pv-card__title">{title}</Typography>
                        <Typography className="pv-card__description">{description}</Typography>
                    </div>
                ))}
            </div>
        </Container>
    </section>
}
