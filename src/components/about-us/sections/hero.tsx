import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { AboutHeroConst } from "consts/about-us.const";
import { useLocalized } from "shared/i18n";

export default function AboutHeroSection() {
    const { title, description, button, image } = useLocalized(AboutHeroConst);

    return <Box component="section" className="about-hero" sx={{ backgroundImage: `url(${image})` }}>
        <Container maxWidth="xl">
            <Box className="about-hero__content">
                <Typography variant="h1" className="about-hero__title">{title}</Typography>
                <Typography className="about-hero__description">{description}</Typography>
                <Link to={button.link}>
                    <Button className="home-btn about-btn--blue">{button.label}</Button>
                </Link>
            </Box>
        </Container>
    </Box>
}
