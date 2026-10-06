import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { CaseStudyFeaturedConst, CaseStudyIntroConst, caseStudyLink } from "consts/case-study.const";
import { useLocalized } from "shared/i18n";
import SectionHeading from "components/product/shared/section-heading";

/** Intro "Case Study" + kartu Featured Case Study. */
export default function FeaturedSection() {
    const { title, description, slug, client, caseTitle, summary, tags, image, details, button } = useLocalized(CaseStudyFeaturedConst);
    const intro = useLocalized(CaseStudyIntroConst);

    return <Box component="section" className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading align="left" title={intro.title} description={intro.description} />
            <Box className="cs-featured">
                <SectionHeading align="left" title={title} description={description} />
                <Box className="cs-featured__card">
                    <Box className="cs-featured__image" sx={{ backgroundImage: `url(${image})` }} />
                    <Box>
                        <Typography className="cs-eyebrow cs-eyebrow--dark">{client}</Typography>
                        <Typography className="cs-featured__title">{caseTitle}</Typography>
                        <Typography className="cs-featured__text">{summary}</Typography>
                        <Box className="cs-tags cs-tags--outline">
                            {tags.map(tag => <span key={tag} className="cs-tag">{tag}</span>)}
                        </Box>
                        {details.map(({ label, value }, index) => (
                            <Box key={index} className="cs-featured__detail">
                                <Typography className="cs-featured__label">{label}</Typography>
                                <Typography className="cs-featured__text">{value}</Typography>
                            </Box>
                        ))}
                        <Button component={Link} to={caseStudyLink(slug)} className="pv-btn pv-btn--outline cs-btn--small">{button}</Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    </Box>
}
