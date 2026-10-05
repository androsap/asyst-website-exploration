import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

interface CtaSectionProps {
    title: string;
    description: string;
    button: string;
    onClick: () => void;
}

export default function CtaSection({ title, description, button, onClick }: CtaSectionProps) {
    return <Box component="section" className="pv-section pv-section--last">
        <Container maxWidth="xl">
            <Box className="pv-cta">
                <Box>
                    <Typography variant="h2" className="pv-cta__title">{title}</Typography>
                    <Typography className="pv-cta__description">{description}</Typography>
                </Box>
                <Button className="pv-btn pv-btn--white" onClick={onClick}>{button}</Button>
            </Box>
        </Container>
    </Box>
}
