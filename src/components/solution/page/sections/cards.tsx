import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { CardsBlock } from "consts/solution-detail/solution-page.types";
import SplitHeading from "./split-heading";
import DetailGroups from "./detail-groups";

interface CardsSectionProps {
    id?: string;
    content: CardsBlock;
}

export default function CardsSection({ id, content }: CardsSectionProps) {
    const { heading, title, description, columns, soft = false, items } = content;

    return <section id={id} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            <SplitHeading title={title} description={description} split={heading === "split"} />
            <ul className={`sp-cards sp-cards--${columns}`}>
                {items.map(({ tag, icon: Icon, title, description, points, groups, footnote, image }) => (
                    <li key={title} className={`sp-card ${soft ? "sp-card--soft" : ""}`}>
                        {tag && <span className="pe-tag">{tag}</span>}
                        {Icon && <span className="pe-icon-tile"><Icon /></span>}
                        <Typography component="h3" className="sp-card__title">{title}</Typography>
                        <Typography className="sp-card__description">{description}</Typography>
                        {points && <ul className="sp-inline-points">
                            {points.map(point => <li key={point}>{point}</li>)}
                        </ul>}
                        {groups && <DetailGroups groups={groups} />}
                        {footnote && <Typography className="sp-card__footnote">{footnote}</Typography>}
                        {image && <div className="sp-card__image">
                            <img src={image} alt={title} loading="lazy" decoding="async" />
                        </div>}
                    </li>
                ))}
            </ul>
        </Container>
    </section>
}
