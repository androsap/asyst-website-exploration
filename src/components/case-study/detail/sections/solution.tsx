import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import { CaseStudyDetailContent } from "consts/case-study.const";
import { CASE_STUDY_SECTION_IDS } from "../../shared/section-ids";

interface SolutionSectionProps {
    content: CaseStudyDetailContent["solution"];
}

/** Diagram arsitektur (dibangun dari data, bukan gambar) + daftar poin solusi. */
export default function SolutionSection({ content }: SolutionSectionProps) {
    const { eyebrow, title, architecture, items } = content;

    return <Box component="section" id={CASE_STUDY_SECTION_IDS.solution} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            <Typography className="cs-eyebrow">{eyebrow}</Typography>
            <Typography variant="h2" className="pv-heading__title cs-solution__heading">{title}</Typography>
            <Box className="cs-solution">
                <Box className="cs-arch" role="img" aria-label={`${architecture.top} → ${architecture.core} → ${architecture.branches.map(b => b.label).join(", ")}`}>
                    <span className="cs-arch__node cs-arch__node--top">
                        <LanguageRoundedIcon />{architecture.top}
                    </span>
                    <span className="cs-arch__line" />
                    <span className="cs-arch__node cs-arch__node--core">{architecture.core}</span>
                    <span className="cs-arch__line" />
                    <Box className="cs-arch__branches" sx={{ gridTemplateColumns: `repeat(${architecture.branches.length}, 1fr)` }}>
                        {architecture.branches.map(({ label, child }) => (
                            <Box key={label} className="cs-arch__branch">
                                <span className="cs-arch__node">{label}</span>
                                {child && <>
                                    <span className="cs-arch__line" />
                                    <span className="cs-arch__node">{child}</span>
                                </>}
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box>
                    {items.map(({ title, description }) => (
                        <Box key={title} className="cs-solution__item">
                            <Typography className="cs-solution__title">{title}</Typography>
                            <Typography className="cs-solution__text">{description}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    </Box>
}
