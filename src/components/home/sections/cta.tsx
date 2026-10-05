import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CtaConst } from "consts/home.const";

interface CtaSectionProps {
    onTalkToExpert: () => void;
}

export default function CtaSection({ onTalkToExpert }: CtaSectionProps) {
    return <Box component="section" className="home-section home-section--last">
        <Container maxWidth="xl">
            <Box className="home-cta">
                <Box>
                    <Typography variant="h2" className="home-cta__title">{CtaConst.title}</Typography>
                    <Typography className="home-cta__description">{CtaConst.description}</Typography>
                </Box>
                <Button className="home-btn home-btn--white" onClick={onTalkToExpert}>{CtaConst.button}</Button>
            </Box>
        </Container>
    </Box>
}
