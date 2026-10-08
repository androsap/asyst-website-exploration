import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { ProductDetailContent } from "consts/product-detail.const";
import SectionHeading from "../../shared/section-heading";

interface OverviewSectionProps {
    content: ProductDetailContent["overview"];
}

export default function OverviewSection({ content }: OverviewSectionProps) {
    const { title, paragraphs, image, challenges } = content;

    return <section className="pv-section">
        <Container maxWidth="xl">
            <div className="pv-split">
                <div>
                    <SectionHeading title={title} align="left" />
                    {paragraphs.map(text => <Typography key={text} className="pv-paragraph">{text}</Typography>)}
                </div>
                <div className="pv-media">
                    <img src={image} alt={title} loading="lazy" />
                </div>
            </div>
            <div className="pv-grid pv-grid--4 pv-overview__challenges">
                {challenges.map(({ icon: Icon, title, description }) => (
                    <div key={title} className="pv-card pv-card--soft">
                        <Icon className="pv-card__icon" />
                        <Typography className="pv-card__title">{title}</Typography>
                        <Typography className="pv-card__description">{description}</Typography>
                    </div>
                ))}
            </div>
        </Container>
    </section>
}
