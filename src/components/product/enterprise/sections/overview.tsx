import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { OverviewBlock } from "consts/product-detail/enterprise.types";
import SectionHeading from "../../shared/section-heading";
import CardGrid from "./card-grid";
import Figure from "./figure";

interface OverviewSectionProps {
    id?: string;
    content: OverviewBlock;
}

export default function OverviewSection({ id, content }: OverviewSectionProps) {
    const { title, paragraphs, points, closing, image, cards } = content;

    return <section id={id} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            <div className="pe-split pe-split--center">
                <div>
                    <SectionHeading title={title} align="left" />
                    {paragraphs.map(text => <Typography key={text} className="pv-paragraph">{text}</Typography>)}
                    {points && <ul className="pe-bullets">
                        {points.map(point => <li key={point}>{point}</li>)}
                    </ul>}
                    {closing && <Typography className="pv-paragraph">{closing}</Typography>}
                </div>
                <Figure image={image} alt={title} />
            </div>
            <CardGrid items={cards} />
        </Container>
    </section>
}
