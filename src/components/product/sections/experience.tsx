import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ProductExperienceConst } from "consts/product.const";
import SectionHeading from "../shared/section-heading";

export default function ExperienceSection() {
    return <Box component="section" className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={ProductExperienceConst.title} description={ProductExperienceConst.description} align="left" />
            <Box className="pv-grid pv-grid--4">
                {ProductExperienceConst.items.map(({ icon: Icon, title, description }) => (
                    <Box key={title} className="pv-card pv-experience">
                        <Box className="pv-experience__illustration"><Icon /></Box>
                        <Typography className="pv-card__title">{title}</Typography>
                        <Typography className="pv-card__description">{description}</Typography>
                    </Box>
                ))}
            </Box>
        </Container>
    </Box>
}
