import { useState } from "react";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { ProductDetailContent } from "consts/product-detail.const";
import SectionHeading from "../../shared/section-heading";
import TabBar from "../../shared/tab-bar";
import { SECTION_IDS } from "../../shared/page-actions";

interface LifecycleSectionProps {
    content: ProductDetailContent["lifecycle"];
}

export default function LifecycleSection({ content }: LifecycleSectionProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = content.items[activeIndex];

    return <section id={SECTION_IDS.lifecycle} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            <SectionHeading title={content.title} description={content.description} />
            <TabBar variant="pill" labels={content.items.map(x => x.label)} active={activeIndex} onChange={setActiveIndex} />
            <div className="pv-split pv-split--media-first pv-lifecycle" role="tabpanel">
                <div className="pv-media">
                    <img src={active.image} alt={active.title} loading="lazy" />
                </div>
                <div>
                    <Typography className="pv-subheading">{active.title}</Typography>
                    <Typography className="pv-paragraph">{active.description}</Typography>
                </div>
            </div>
        </Container>
    </section>
}
