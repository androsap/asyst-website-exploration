import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CaseStudyHeroConst } from "consts/case-study.const";
import { useLocalized } from "shared/i18n";

interface HeroSectionProps {
    onExplore: () => void;
}

export default function HeroSection({ onExplore }: HeroSectionProps) {
    const { title, description, button, image } = useLocalized(CaseStudyHeroConst);

    return <Box component="section" className="cs-hero">
        <Box className="cs-hero__backdrop" sx={{ backgroundImage: `url(${image})` }} aria-hidden />
        <Container maxWidth="xl" className="cs-hero__inner">
            <Typography variant="h1" className="cs-hero__title">{title}</Typography>
            <Typography className="cs-hero__description">{description}</Typography>
            <Button className="pv-btn pv-btn--primary cs-hero__button" onClick={onExplore}>{button}</Button>
        </Container>
    </Box>
}
