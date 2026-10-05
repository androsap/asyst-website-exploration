import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { IndustryHeroContent } from "consts/industry.const";

interface IndustryHeroProps {
    content: IndustryHeroContent;
    onPrimary: () => void;
    onSecondary?: () => void;
}

/** Hero rata tengah; eyebrow, tombol kedua dan statistik opsional. Memakai kelas pv-hero dari product-v2. */
export default function IndustryHero({ content, onPrimary, onSecondary }: IndustryHeroProps) {
    const { eyebrow, title, description, primaryButton, secondaryButton, stats } = content;

    return <Box component="section" className="pv-hero iv-hero">
        <Container maxWidth="xl">
            <Box className="pv-hero__content">
                {eyebrow && <Typography className="pv-hero__eyebrow">{eyebrow}</Typography>}
                <Typography variant="h1" className="pv-hero__title">{title}</Typography>
                <Typography className="pv-hero__description">{description}</Typography>
                <Box className="pv-hero__actions">
                    <Button className="pv-btn pv-btn--primary" onClick={onPrimary}>{primaryButton}</Button>
                    {secondaryButton && onSecondary && <Button className="pv-btn pv-btn--outline" onClick={onSecondary}>{secondaryButton}</Button>}
                </Box>
            </Box>
            {stats && <Box className="pv-stats">
                {stats.map(({ icon: Icon, value, label }) => (
                    <Box key={label} className="pv-stats__item">
                        <Icon className="pv-stats__icon" />
                        <Box>
                            <Typography className="pv-stats__value">{value}</Typography>
                            <Typography className="pv-stats__label">{label}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>}
        </Container>
    </Box>
}
