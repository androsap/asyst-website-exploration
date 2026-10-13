import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { TimelineBlock } from "consts/product-detail/enterprise.types";
import SectionHeading from "../../shared/section-heading";
import Figure from "./figure";

interface TimelineSectionProps {
    id?: string;
    content: TimelineBlock;
}

export default function TimelineSection({ id, content }: TimelineSectionProps) {
    const { layout, mediaFirst = false, title, description, image, items } = content;

    const timeline = <ol className="pe-timeline">
        {items.map(({ title, lead, description }) => (
            <li key={title} className="pe-timeline__item">
                <Typography component="h3" className="pe-timeline__title">{title}</Typography>
                {lead && <Typography className="pe-timeline__lead">{lead}</Typography>}
                <Typography className="pe-timeline__description">{description}</Typography>
            </li>
        ))}
    </ol>;

    if (layout === "band") {
        return <section id={id} className="pe-band pe-band--headed pv-anchor">
            <Container maxWidth="xl">
                <SectionHeading title={title} description={description} />
            </Container>
            <div className="pe-band__stage">
                <Container maxWidth="xl">
                    <div className="pe-split pe-split--center pe-band__split">
                        {timeline}
                        <Figure image={image} alt={title} variant="showcase" />
                    </div>
                </Container>
            </div>
        </section>
    }

    return <section id={id} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            <div className={`pe-split pe-split--center ${mediaFirst ? "pe-split--reverse" : ""}`}>
                <div>
                    <SectionHeading title={title} description={description} align="left" />
                    {timeline}
                </div>
                <Figure image={image} alt={title} />
            </div>
        </Container>
    </section>
}
