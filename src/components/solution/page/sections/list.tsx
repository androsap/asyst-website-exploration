import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { ListBlock } from "consts/solution-detail/solution-page.types";
import SectionHeading from "components/product/shared/section-heading";

interface ListSectionProps {
    id?: string;
    content: ListBlock;
}

export default function ListSection({ id, content }: ListSectionProps) {
    const { layout, title, paragraphs, image, items } = content;

    const list = <dl className={`sp-list sp-list--${layout}`}>
        {items.map(({ title, description }) => (
            <div key={title} className="sp-list__item">
                <dt className="sp-list__title">{title}</dt>
                <dd className="sp-list__description">{description}</dd>
            </div>
        ))}
    </dl>;

    const intro = <>
        <SectionHeading title={title} align="left" />
        {paragraphs.map(text => <Typography key={text} className="sp-text">{text}</Typography>)}
    </>;

    if (layout === "aside") {
        return <section id={id} className="pv-section pv-anchor">
            <Container maxWidth="xl">
                <div className="pe-split">
                    <div>
                        {intro}
                        <div className="sp-photo sp-photo--spaced">
                            <img src={image} alt={title} loading="lazy" decoding="async" />
                        </div>
                    </div>
                    {list}
                </div>
            </Container>
        </section>
    }

    return <section id={id} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            <div className="pe-split pe-split--stretch">
                <div>
                    {intro}
                    {list}
                </div>
                <div className="sp-frame sp-frame--fill">
                    <img src={image} alt={title} loading="lazy" decoding="async" />
                </div>
            </div>
        </Container>
    </section>
}
