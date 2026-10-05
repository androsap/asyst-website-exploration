import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CareerConnectsConst } from "consts/career.const";

export default function ConnectsSection() {
    const { title, paragraphs, items } = CareerConnectsConst;

    return <Box component="section" className="pv-section">
        <Container maxWidth="xl">
            <Typography variant="h2" className="cr-title">{title}</Typography>
            {paragraphs.map(text => <Typography key={text} className="cr-text">{text}</Typography>)}
            <Box className="cr-connects">
                {items.map(({ title, description, icon: Icon }) => (
                    <Box key={title} className="cr-card">
                        <Box className="cr-icon"><Icon /></Box>
                        <Typography variant="h3" className="cr-card__title">{title}</Typography>
                        <Typography className="cr-card__description">{description}</Typography>
                    </Box>
                ))}
            </Box>
        </Container>
    </Box>
}
