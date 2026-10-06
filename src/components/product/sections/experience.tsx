import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ProductExperienceConst } from "consts/product.const";
import { useLocalized } from "shared/i18n";
import SectionHeading from "../shared/section-heading";

export default function ExperienceSection() {
    const experience = useLocalized(ProductExperienceConst);

    return <Box component="section" className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={experience.title} description={experience.description} align="left" />
            <Box className="pv-grid pv-grid--4">
                {experience.items.map(({ image, title, description }, index) => (
                    <Box key={index} className="pv-card pv-experience">
                        <Box className="pv-experience__illustration"><img src={image} alt="" /></Box>
                        <Typography className="pv-card__title pv-experience__title">{title}</Typography>
                        <Typography className="pv-card__description">{description}</Typography>
                    </Box>
                ))}
            </Box>
        </Container>
    </Box>
}
