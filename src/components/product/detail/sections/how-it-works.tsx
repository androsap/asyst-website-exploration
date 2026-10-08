import { useState } from "react";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { ProductDetailContent } from "consts/product-detail.const";
import SectionHeading from "../../shared/section-heading";
import TabBar from "../../shared/tab-bar";

interface HowItWorksSectionProps {
    content: ProductDetailContent["howItWorks"];
}

export default function HowItWorksSection({ content }: HowItWorksSectionProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = content.items[activeIndex];

    return <section className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={content.title} />
            <TabBar variant="underline" labels={content.items.map(x => x.label)} active={activeIndex} onChange={setActiveIndex} />
            <div className="pv-split pv-how" role="tabpanel">
                <div>
                    <Typography className="pv-subheading">{active.title}</Typography>
                    <Typography className="pv-paragraph">{active.description}</Typography>
                </div>
                <div className="pv-media">
                    <img src={active.image} alt={active.title} loading="lazy" />
                </div>
            </div>
        </Container>
    </section>
}
