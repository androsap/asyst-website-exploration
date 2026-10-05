import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { SolutionHeroContent } from "consts/solution.const";

interface SolutionHeroProps {
    content: SolutionHeroContent;
    onPrimary: () => void;
    onSecondary: () => void;
}

export default function SolutionHero({ content, onPrimary, onSecondary }: SolutionHeroProps) {
    const { eyebrow, title, description, primaryButton, secondaryButton, image } = content;

    return <Box component="section" className="sv-hero">
        <Container maxWidth="xl" className="sv-hero__inner">
            <Box>
                <Typography className="sv-hero__eyebrow">{eyebrow}</Typography>
                <Typography variant="h1" className="sv-hero__title">{title}</Typography>
                <Typography className="sv-hero__description">{description}</Typography>
                <Box className="sv-hero__actions">
                    <Button className="pv-btn pv-btn--primary" onClick={onPrimary}>{primaryButton}</Button>
                    <Button className="pv-btn pv-btn--outline" onClick={onSecondary}>{secondaryButton}</Button>
                </Box>
            </Box>
            <Box className="sv-hero__media">
                <img src={image} alt={title} />
            </Box>
        </Container>
    </Box>
}
