import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ProductDetailContent } from "consts/product-detail.const";

interface HeroSectionProps {
    content: ProductDetailContent["hero"];
    onTalkToExpert: () => void;
    onExplore: () => void;
}

export default function HeroSection({ content, onTalkToExpert, onExplore }: HeroSectionProps) {
    const { title, description, primaryButton, secondaryButton, stats } = content;

    return <Box component="section" className="pv-hero">
        <Container maxWidth="xl">
            <Box className="pv-hero__content">
                <Typography variant="h1" className="pv-hero__title">{title}</Typography>
                <Typography className="pv-hero__description">{description}</Typography>
                <Box className="pv-hero__actions">
                    <Button className="pv-btn pv-btn--primary" onClick={onTalkToExpert}>{primaryButton}</Button>
                    <Button className="pv-btn pv-btn--outline" onClick={onExplore}>{secondaryButton}</Button>
                </Box>
            </Box>
            <Box className="pv-stats">
                {stats.map(({ icon: Icon, value, label }) => (
                    <Box key={label} className="pv-stats__item">
                        <Icon className="pv-stats__icon" />
                        <Box>
                            <Typography className="pv-stats__value">{value}</Typography>
                            <Typography className="pv-stats__label">{label}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Container>
    </Box>
}
