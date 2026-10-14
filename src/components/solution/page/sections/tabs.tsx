import { useState } from "react";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { TabsBlock } from "consts/solution-detail/solution-page.types";
import SectionHeading from "components/product/shared/section-heading";
import TabBar from "components/product/shared/tab-bar";

interface TabsSectionProps {
    id?: string;
    content: TabsBlock;
}

export default function TabsSection({ id, content }: TabsSectionProps) {
    const { variant, title, description, items } = content;
    const [activeIndex, setActiveIndex] = useState(0);
    const active = items[activeIndex];
    const labels = items.map(item => item.label);
    const boxed = variant === "boxed";

    const panel = <div key={active.label} className="pe-tabs__panel sp-tabs__panel" role="tabpanel" aria-label={active.label}>
        <div>
            <Typography component="h3" className={boxed ? "pe-tabs__title" : "sp-tabs__title"}>{active.title}</Typography>
            {active.paragraphs.map(text => <Typography key={text} className="sp-tabs__text">{text}</Typography>)}
            {active.subtitle && <Typography component="h4" className="sp-tabs__subtitle">{active.subtitle}</Typography>}
            {active.points && <ul className="sp-bullets">
                {active.points.map(point => <li key={point}>{point}</li>)}
            </ul>}
        </div>
        <div className={boxed ? "sp-frame" : "sp-photo"}>
            <img src={active.image} alt={active.title} loading="lazy" decoding="async" />
        </div>
    </div>;

    return <section id={id} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            <SectionHeading title={title} description={description} />
            {boxed
                ? <div className="pe-tabs">
                    <div className="pe-tabs__bar">
                        <TabBar variant="underline" labels={labels} active={activeIndex} onChange={setActiveIndex} />
                    </div>
                    {panel}
                </div>
                : <div className="sp-tabs">
                    <TabBar variant="pill" labels={labels} active={activeIndex} onChange={setActiveIndex} />
                    {panel}
                </div>}
        </Container>
    </section>
}
