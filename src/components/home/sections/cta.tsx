import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CtaConst } from "consts/home.const";
import { useLocalized } from "shared/i18n";

interface CtaSectionProps {
    onTalkToExpert: () => void;
}

export default function CtaSection({ onTalkToExpert }: CtaSectionProps) {
    const cta = useLocalized(CtaConst);

    return <Box component="section" className="home-section home-section--last">
        <Container maxWidth="xl">
            <Box className="home-cta">
                <Box>
                    <Typography variant="h2" className="home-cta__title">{cta.title}</Typography>
                    <Typography className="home-cta__description">{cta.description}</Typography>
                </Box>
                <Button className="home-btn home-btn--white" onClick={onTalkToExpert}>{cta.button}</Button>
            </Box>
        </Container>
    </Box>
}
