import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ProductHeroConst } from "consts/product.const";

interface HeroSectionProps {
    onExplore: () => void;
    onTalkToExpert: () => void;
}

export default function HeroSection({ onExplore, onTalkToExpert }: HeroSectionProps) {
    const { eyebrow, title, description, primaryButton, secondaryButton, image } = ProductHeroConst;

    return <Box component="section" className="pv-hero pv-hero--with-image">
        <Container maxWidth="xl">
            <Box className="pv-hero__content">
                <Typography className="pv-hero__eyebrow">{eyebrow}</Typography>
                <Typography variant="h1" className="pv-hero__title">{title}</Typography>
                <Typography className="pv-hero__description">{description}</Typography>
                <Box className="pv-hero__actions">
                    <Button className="pv-btn pv-btn--primary" onClick={onExplore}>{primaryButton.label}</Button>
                    <Button className="pv-btn pv-btn--outline" onClick={onTalkToExpert}>{secondaryButton.label}</Button>
                </Box>
            </Box>
            <Box className="pv-hero__mockup">
                <img src={image} alt={title} />
            </Box>
        </Container>
    </Box>
}
