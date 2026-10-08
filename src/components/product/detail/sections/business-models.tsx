import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { ProductDetailContent } from "consts/product-detail.const";
import SectionHeading from "../../shared/section-heading";

interface BusinessModelsSectionProps {
    content: ProductDetailContent["businessModels"];
}

export default function BusinessModelsSection({ content }: BusinessModelsSectionProps) {
    return <section className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={content.title} />
            <div className="pv-grid pv-grid--5">
                {content.items.map(({ icon: Icon, title, points }) => (
                    <div key={title} className="pv-card pv-card--soft pv-model">
                        <div className="pv-icon-tile"><Icon /></div>
                        <Typography className="pv-card__title">{title}</Typography>
                        <ul className="pv-list">
                            {points.map(point => <li key={point}>{point}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </Container>
    </section>
}
