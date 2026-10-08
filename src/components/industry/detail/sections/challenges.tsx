import { useState } from "react";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { CloseRoundedIcon } from "components/ui/icons";
import { IndustryDetailContent } from "consts/industry-detail.const";
import SectionHeading from "components/product/shared/section-heading";
import TabBar from "components/product/shared/tab-bar";

interface ChallengesSectionProps {
    content: IndustryDetailContent["challenges"];
}

/** Tab sejajar + panel gambar kiri / teks kanan; memakai kerangka pv-solve dari halaman Products. */
export default function ChallengesSection({ content }: ChallengesSectionProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = content.items[activeIndex];

    return <section className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={content.title} />
            <div className="pv-solve">
                <TabBar variant="segment" labels={content.items.map(x => x.label)} active={activeIndex} onChange={setActiveIndex} />
                <div className="pv-solve__panel" role="tabpanel">
                    <div className="pv-media">
                        <img src={active.image} alt={active.title} loading="lazy" />
                    </div>
                    <div>
                        <Typography className="pv-solve__title">{active.title}</Typography>
                        <Typography className="pv-solve__description">{active.description}</Typography>
                        <ul className="iv-cross-list">
                            {active.points.map(point => <li key={point}><CloseRoundedIcon />{point}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    </section>
}
