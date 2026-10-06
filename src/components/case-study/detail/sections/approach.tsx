import { useState } from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { CaseStudyDetailContent } from "consts/case-study.const";

interface ApproachSectionProps {
    content: CaseStudyDetailContent["approach"];
}

/** Judul sticky di kiri + langkah bernomor (accordion, satu terbuka) di kanan. */
export default function ApproachSection({ content }: ApproachSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return <Box component="section" className="pv-section">
        <Container maxWidth="xl" className="cs-approach">
            <Box className="cs-approach__intro">
                <Typography className="cs-eyebrow cs-eyebrow--dark">{content.eyebrow}</Typography>
                <Typography variant="h2" className="pv-heading__title">{content.title}</Typography>
            </Box>
            <Box>
                {content.steps.map(({ phase, title, description }, index) => {
                    const open = openIndex === index;
                    return <Box key={index} className={`cs-step ${open ? "open" : ""}`}>
                        <ButtonBase className="cs-step__header" aria-expanded={open} onClick={() => setOpenIndex(open ? null : index)}>
                            <span className="cs-step__number">
                                {String(index + 1).padStart(2, "0")}
                                <small>{phase}</small>
                            </span>
                            <span className="cs-step__title">{title}</span>
                            {open ? <RemoveRoundedIcon className="cs-step__icon" /> : <AddRoundedIcon className="cs-step__icon" />}
                        </ButtonBase>
                        <Collapse in={open}>
                            <Typography className="cs-step__text">{description}</Typography>
                        </Collapse>
                    </Box>
                })}
            </Box>
        </Container>
    </Box>
}
