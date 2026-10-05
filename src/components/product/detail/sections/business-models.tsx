import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ProductDetailContent } from "consts/product-detail.const";
import SectionHeading from "../../shared/section-heading";

interface BusinessModelsSectionProps {
    content: ProductDetailContent["businessModels"];
}

export default function BusinessModelsSection({ content }: BusinessModelsSectionProps) {
    return <Box component="section" className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={content.title} />
            <Box className="pv-grid pv-grid--5">
                {content.items.map(({ icon: Icon, title, points }) => (
                    <Box key={title} className="pv-card pv-card--soft pv-model">
                        <Box className="pv-icon-tile"><Icon /></Box>
                        <Typography className="pv-card__title">{title}</Typography>
                        <ul className="pv-list">
                            {points.map(point => <li key={point}>{point}</li>)}
                        </ul>
                    </Box>
                ))}
            </Box>
        </Container>
    </Box>
}
