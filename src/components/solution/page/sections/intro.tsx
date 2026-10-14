import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { IntroBlock } from "consts/solution-detail/solution-page.types";
import SectionHeading from "components/product/shared/section-heading";

interface IntroSectionProps {
    id?: string;
    content: IntroBlock;
}

export default function IntroSection({ id, content }: IntroSectionProps) {
    const { title, paragraphs, image } = content;

    return <section id={id} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            <div className="pe-split pe-split--center">
                <div>
                    <SectionHeading title={title} align="left" />
                    {paragraphs.map(text => <Typography key={text} className="sp-text">{text}</Typography>)}
                </div>
                <div className="sp-frame">
                    <img src={image} alt={title} loading="lazy" decoding="async" />
                </div>
            </div>
        </Container>
    </section>
}
