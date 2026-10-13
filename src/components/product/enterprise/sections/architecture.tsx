import { useState } from "react";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { ArchitectureBlock } from "consts/product-detail/enterprise.types";
import SectionHeading from "../../shared/section-heading";
import TabBar from "../../shared/tab-bar";
import Figure from "./figure";

interface ArchitectureSectionProps {
    id?: string;
    content: ArchitectureBlock;
}

export default function ArchitectureSection({ id, content }: ArchitectureSectionProps) {
    const { mediaFirst = false, title, description, tabs } = content;
    const [activeIndex, setActiveIndex] = useState(0);
    const active = tabs[activeIndex];

    return <section id={id} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            <SectionHeading title={title} description={description} />
            <div className="pe-tabs">
                <div className="pe-tabs__bar">
                    <TabBar variant="underline" labels={tabs.map(tab => tab.label)} active={activeIndex} onChange={setActiveIndex} />
                </div>
                <div key={active.label} className={`pe-tabs__panel ${active.groups ? "pe-tabs__panel--wide" : ""} ${mediaFirst ? "pe-split--reverse" : ""}`} role="tabpanel" aria-label={active.label}>
                    <div className="pe-tabs__content">
                        <Typography component="h3" className="pe-tabs__title">{active.title}</Typography>
                        {active.paragraphs.map(text => <Typography key={text} className="pe-tabs__text">{text}</Typography>)}
                        {active.points && <ul className="pe-bullets pe-bullets--compact">
                            {active.points.map(point => <li key={point}>{point}</li>)}
                        </ul>}
                        {active.groups && <div className="pe-groups">
                            {active.groups.map(group => (
                                <div key={group.title} className="pe-groups__item">
                                    <Typography component="h4" className="pe-groups__title">{group.title}</Typography>
                                    <ul className="pe-bullets pe-bullets--compact pe-bullets--columns">
                                        {group.items.map(item => <li key={item}>{item}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>}
                        {active.roles && <dl className="pe-roles">
                            {active.roles.map(role => (
                                <div key={role.title}>
                                    <dt className="pe-roles__title">{role.title}</dt>
                                    <dd className="pe-roles__description">{role.description}</dd>
                                </div>
                            ))}
                        </dl>}
                    </div>
                    <Figure image={active.image} alt={active.title} />
                </div>
            </div>
        </Container>
    </section>
}
