import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ProductDetailContent } from "consts/product-detail.const";
import SectionHeading from "../../shared/section-heading";

interface OverviewSectionProps {
    content: ProductDetailContent["overview"];
}

export default function OverviewSection({ content }: OverviewSectionProps) {
    const { title, paragraphs, image, challenges } = content;

    return <Box component="section" className="pv-section">
        <Container maxWidth="xl">
            <Box className="pv-split">
                <Box>
                    <SectionHeading title={title} align="left" />
                    {paragraphs.map(text => <Typography key={text} className="pv-paragraph">{text}</Typography>)}
                </Box>
                <Box className="pv-media">
                    <img src={image} alt={title} loading="lazy" />
                </Box>
            </Box>
            <Box className="pv-grid pv-grid--4 pv-overview__challenges">
                {challenges.map(({ icon: Icon, title, description }) => (
                    <Box key={title} className="pv-card pv-card--soft">
                        <Icon className="pv-card__icon" />
                        <Typography className="pv-card__title">{title}</Typography>
                        <Typography className="pv-card__description">{description}</Typography>
                    </Box>
                ))}
            </Box>
        </Container>
    </Box>
}
