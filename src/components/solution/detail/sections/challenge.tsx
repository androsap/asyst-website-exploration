import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { SolutionDetailContent } from "consts/solution-detail.const";
import SectionHeading from "components/product/shared/section-heading";
import TabBar from "components/product/shared/tab-bar";

interface ChallengeSectionProps {
    content: SolutionDetailContent["challenge"];
}

export default function ChallengeSection({ content }: ChallengeSectionProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = content.items[activeIndex];

    return <Box component="section" className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={content.title} description={content.description} />
            <TabBar variant="pill" labels={content.items.map(x => x.label)} active={activeIndex} onChange={setActiveIndex} />
            <Box className="pv-split pv-split--media-first pv-lifecycle" role="tabpanel">
                <Box className="pv-media">
                    <img src={active.image} alt={active.title} loading="lazy" />
                </Box>
                <Box>
                    <Typography className="sv-challenge__title">{active.title}</Typography>
                    {active.paragraphs.map(text => <Typography key={text} className="sv-challenge__text">{text}</Typography>)}
                    <Typography className="sv-challenge__solution-title">{active.solution.title}</Typography>
                    <Typography className="sv-challenge__solution-text">{active.solution.description}</Typography>
                </Box>
            </Box>
        </Container>
    </Box>
}
