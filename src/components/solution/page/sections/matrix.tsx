import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { MatrixBlock } from "consts/solution-detail/solution-page.types";
import SectionHeading from "components/product/shared/section-heading";

interface MatrixSectionProps {
    id?: string;
    content: MatrixBlock;
}

export default function MatrixSection({ id, content }: MatrixSectionProps) {
    const { title, description, items } = content;

    return <section id={id} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            <SectionHeading title={title} description={description} />
            <ul className="sp-matrix">
                {items.map(({ icon: Icon, title, description, points }) => (
                    <li key={title} className="sp-matrix__item">
                        {Icon && <span className="pe-icon-tile"><Icon /></span>}
                        <Typography component="h3" className="sp-card__title">{title}</Typography>
                        <Typography className="sp-card__description">{description}</Typography>
                        {points && <ul className="sp-bullets">
                            {points.map(point => <li key={point}>{point}</li>)}
                        </ul>}
                    </li>
                ))}
            </ul>
        </Container>
    </section>
}
