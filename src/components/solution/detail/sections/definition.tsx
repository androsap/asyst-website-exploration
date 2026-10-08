import { useState } from "react";
import { ButtonBase } from "components/ui/button-base";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { SolutionDetailContent } from "consts/solution-detail.const";
import SectionHeading from "components/product/shared/section-heading";
import { SOLUTION_SECTION_IDS } from "../../shared/section-ids";

interface DefinitionSectionProps {
    content: SolutionDetailContent["definition"];
}

/** Menu vertikal + panel; memakai kerangka pv-catalog dari halaman Products. */
export default function DefinitionSection({ content }: DefinitionSectionProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = content.items[activeIndex];

    return <section id={SOLUTION_SECTION_IDS.definition} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            <SectionHeading title={content.title} description={content.description} />
            <div className="pv-catalog sv-definition">
                <div className="pv-catalog__menu" role="tablist">
                    {content.items.map(({ label }, index) => (
                        <ButtonBase
                            key={label}
                            role="tab"
                            aria-selected={index === activeIndex}
                            className={`pv-catalog__menu-item ${index === activeIndex ? "active" : ""}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {label}
                        </ButtonBase>
                    ))}
                </div>
                <div className="pv-catalog__panel" role="tabpanel">
                    <span className="sv-tag">{active.tag}</span>
                    <Typography className="pv-catalog__title">{active.title}</Typography>
                    <Typography className="pv-catalog__description">{active.description}</Typography>
                    <div className="sv-pillars">
                        {active.pillars.map(pillar => <div key={pillar} className="sv-pillars__item">{pillar}</div>)}
                    </div>
                </div>
            </div>
        </Container>
    </section>
}
