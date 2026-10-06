import { useLocalized } from "shared/i18n";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CAREER_JOBS_PATH, CareerHeroConst } from "consts/career.const";

export default function HeroSection() {
    const { title, description, button, image } = useLocalized(CareerHeroConst);

    return <Box component="section" className="cr-hero">
        <Box className="cr-hero__backdrop" sx={{ backgroundImage: `url(${image})` }} aria-hidden />
        <Container maxWidth="md" className="cr-hero__inner">
            <Typography variant="h1" className="cr-hero__title">{title}</Typography>
            <Typography className="cr-hero__description">{description}</Typography>
            <Button component={Link} to={CAREER_JOBS_PATH} className="pv-btn pv-btn--primary cr-hero__button">{button}</Button>
        </Container>
    </Box>
}
