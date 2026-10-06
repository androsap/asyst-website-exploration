import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CaseStudyDetailContent } from "consts/case-study.const";

interface OverviewSectionProps {
    hero: CaseStudyDetailContent["hero"];
    summary: CaseStudyDetailContent["summary"];
    challenge: CaseStudyDetailContent["challenge"];
    onViewArchitecture: () => void;
}

/** Hero tengah + bar ringkasan klien + kartu Business Challenge. */
export default function OverviewSection({ hero, summary, challenge, onViewArchitecture }: OverviewSectionProps) {
    return <>
        <Box component="section" className="cs-hero cs-hero--center">
            <Box className="cs-hero__backdrop" sx={{ backgroundImage: `url(${hero.image})` }} aria-hidden />
            <Container maxWidth="xl" className="cs-hero__inner">
                <Typography variant="h1" className="cs-hero__title">{hero.title}</Typography>
                <Typography className="cs-hero__description">{hero.description}</Typography>
                <Button className="pv-btn pv-btn--primary cs-hero__button" onClick={onViewArchitecture}>{hero.button}</Button>
            </Container>
        </Box>

        <Box component="section" className="pv-section cs-overview">
            <Container maxWidth="xl">
                <Box className="cs-summary">
                    <Box className="cs-summary__logo">
                        <img src={summary.logo} alt={summary.client} />
                    </Box>
                    {summary.items.map(({ label, value }, index) => (
                        <Box key={index}>
                            <Typography className="cs-summary__label">{label}</Typography>
                            <Typography className="cs-summary__value">{value}</Typography>
                        </Box>
                    ))}
                </Box>

                <Box className="cs-challenge">
                    <Box>
                        <Typography className="cs-eyebrow">{challenge.eyebrow}</Typography>
                        <Typography variant="h2" className="cs-challenge__title">{challenge.title}</Typography>
                        {challenge.paragraphs.map(text => <Typography key={text} className="cs-challenge__text">{text}</Typography>)}
                    </Box>
                    <Box className="cs-challenge__image" sx={{ backgroundImage: `url(${challenge.image})` }} />
                </Box>
            </Container>
        </Box>
    </>
}
