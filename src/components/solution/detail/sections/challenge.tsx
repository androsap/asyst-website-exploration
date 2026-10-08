import { useState } from "react";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { SolutionDetailContent } from "consts/solution-detail.const";
import SectionHeading from "components/product/shared/section-heading";
import TabBar from "components/product/shared/tab-bar";

interface ChallengeSectionProps {
    content: SolutionDetailContent["challenge"];
}

export default function ChallengeSection({ content }: ChallengeSectionProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = content.items[activeIndex];

    return <section className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={content.title} description={content.description} />
            <TabBar variant="pill" labels={content.items.map(x => x.label)} active={activeIndex} onChange={setActiveIndex} />
            <div className="pv-split pv-split--media-first pv-lifecycle" role="tabpanel">
                <div className="pv-media">
                    <img src={active.image} alt={active.title} loading="lazy" />
                </div>
                <div>
                    <Typography className="sv-challenge__title">{active.title}</Typography>
                    {active.paragraphs.map(text => <Typography key={text} className="sv-challenge__text">{text}</Typography>)}
                    <Typography className="sv-challenge__solution-title">{active.solution.title}</Typography>
                    <Typography className="sv-challenge__solution-text">{active.solution.description}</Typography>
                </div>
            </div>
        </Container>
    </section>
}
