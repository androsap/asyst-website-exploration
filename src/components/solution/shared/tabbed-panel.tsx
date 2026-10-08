import { useState } from "react";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { SolutionTabPanelItem } from "consts/solution.const";
import SectionHeading from "components/product/shared/section-heading";
import TabBar from "components/product/shared/tab-bar";

interface TabbedPanelSectionProps {
    title: string;
    description?: string;
    items: SolutionTabPanelItem[];
    id?: string;
}

/** Kotak bertab sejajar + panel teks/gambar. Dipakai "Technology Is Only Valuable..." dan "How Security Operations Work". */
export default function TabbedPanelSection({ title, description, items, id }: TabbedPanelSectionProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = items[activeIndex];

    return <section id={id} className={`pv-section ${id ? "pv-anchor" : ""}`}>
        <Container maxWidth="xl">
            <SectionHeading title={title} description={description} />
            <div className="pv-solve">
                <TabBar variant="segment" labels={items.map(x => x.label)} active={activeIndex} onChange={setActiveIndex} />
                <div className="pv-solve__panel" role="tabpanel">
                    <div>
                        <Typography className="pv-solve__title">{active.title}</Typography>
                        <Typography className="pv-solve__description">{active.description}</Typography>
                        <ul className="pv-list">
                            {active.points.map(point => <li key={point}>{point}</li>)}
                        </ul>
                        {active.subtitle && <Typography className="pv-solve__subtitle">{active.subtitle}</Typography>}
                        {active.subPoints && <ul className="pv-list">
                            {active.subPoints.map(point => <li key={point}>{point}</li>)}
                        </ul>}
                        {active.tags && <div className="pv-chips">
                            {active.tags.map(tag => <span key={tag} className="sv-chip">{tag}</span>)}
                        </div>}
                    </div>
                    <div className="pv-media">
                        <img src={active.image} alt={active.title} loading="lazy" />
                    </div>
                </div>
            </div>
        </Container>
    </section>
}
