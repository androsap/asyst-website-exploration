import { useState } from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
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

    return <Box component="section" id={SOLUTION_SECTION_IDS.definition} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            <SectionHeading title={content.title} description={content.description} />
            <Box className="pv-catalog sv-definition">
                <Box className="pv-catalog__menu" role="tablist">
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
                </Box>
                <Box className="pv-catalog__panel" role="tabpanel">
                    <span className="sv-tag">{active.tag}</span>
                    <Typography className="pv-catalog__title">{active.title}</Typography>
                    <Typography className="pv-catalog__description">{active.description}</Typography>
                    <Box className="sv-pillars">
                        {active.pillars.map(pillar => <Box key={pillar} className="sv-pillars__item">{pillar}</Box>)}
                    </Box>
                </Box>
            </Box>
        </Container>
    </Box>
}
