import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CaseStudiesConst, CaseStudyDetailContent } from "consts/case-study.const";
import CaseCard from "../../shared/case-card";

interface OutcomeSectionProps {
    outcome: CaseStudyDetailContent["outcome"];
    related: CaseStudyDetailContent["related"];
}

/** Ringkasan hasil (4 kolom) + kartu Related cases. */
export default function OutcomeSection({ outcome, related }: OutcomeSectionProps) {
    const relatedItems = related.slugs
        .map(slug => CaseStudiesConst.find(item => item.slug === slug))
        .filter((item): item is NonNullable<typeof item> => !!item);

    return <Box component="section" className="pv-section">
        <Container maxWidth="xl">
            <Typography className="cs-eyebrow cs-eyebrow--dark">{outcome.eyebrow}</Typography>
            <Typography variant="h2" className="pv-heading__title">{outcome.title}</Typography>
            <Box className="cs-outcome">
                {outcome.items.map(({ title, description }) => (
                    <Box key={title} className="cs-outcome__item">
                        <Typography className="cs-outcome__title">{title}</Typography>
                        <Typography className="cs-outcome__text">{description}</Typography>
                    </Box>
                ))}
            </Box>

            {!!relatedItems.length && <Box className="cs-related">
                <Typography variant="h2" className="pv-heading__title">{related.title}</Typography>
                <Box className="cs-grid">
                    {relatedItems.map(item => <CaseCard key={item.slug} item={item} />)}
                </Box>
            </Box>}
        </Container>
    </Box>
}
