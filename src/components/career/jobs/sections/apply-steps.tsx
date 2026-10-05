import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CareerApplyStepsConst } from "consts/career.const";

export default function ApplyStepsSection() {
    const { title, description, image, steps } = CareerApplyStepsConst;

    return <Box component="section" className="pv-section">
        <Container maxWidth="xl" className="cr-steps">
            <Box>
                <Typography variant="h2" className="cr-title">{title}</Typography>
                <Typography className="cr-text">{description}</Typography>
                <Box component="ol" className="cr-steps__list">
                    {steps.map(({ title, description }, index) => (
                        <Box component="li" key={title} className="cr-steps__item">
                            <Typography className="cr-steps__title">
                                <span>{String(index + 1).padStart(2, "0")}</span>{title}
                            </Typography>
                            <Typography className="cr-steps__description">{description}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box className="cr-steps__image" sx={{ backgroundImage: `url(${image})` }} aria-hidden />
        </Container>
    </Box>
}
