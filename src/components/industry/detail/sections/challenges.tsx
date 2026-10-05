import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
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

    return <Box component="section" className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={content.title} />
            <Box className="pv-solve">
                <TabBar variant="segment" labels={content.items.map(x => x.label)} active={activeIndex} onChange={setActiveIndex} />
                <Box className="pv-solve__panel" role="tabpanel">
                    <Box className="pv-media">
                        <img src={active.image} alt={active.title} loading="lazy" />
                    </Box>
                    <Box>
                        <Typography className="pv-solve__title">{active.title}</Typography>
                        <Typography className="pv-solve__description">{active.description}</Typography>
                        <ul className="iv-cross-list">
                            {active.points.map(point => <li key={point}><CloseRoundedIcon />{point}</li>)}
                        </ul>
                    </Box>
                </Box>
            </Box>
        </Container>
    </Box>
}
