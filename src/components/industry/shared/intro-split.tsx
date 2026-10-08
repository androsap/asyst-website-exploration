import { PropsWithChildren } from "react";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { IndustryIntroContent } from "consts/industry.const";
import SectionHeading from "components/product/shared/section-heading";

interface IntroSplitSectionProps {
    content: IndustryIntroContent;
}

/** Judul + paragraf di kiri, gambar di kanan. `children` dirender di bawahnya (mis. accordion layer teknologi). */
export default function IntroSplitSection({ content, children }: PropsWithChildren<IntroSplitSectionProps>) {
    const { title, paragraphs, image } = content;

    return <section className="pv-section">
        <Container maxWidth="xl">
            <div className="pv-split iv-intro">
                <div>
                    <SectionHeading title={title} align="left" />
                    {paragraphs.map(text => <Typography key={text} className="pv-paragraph">{text}</Typography>)}
                </div>
                <div className="iv-intro__media">
                    <img src={image} alt={title} loading="lazy" />
                </div>
            </div>
            {children}
        </Container>
    </section>
}
