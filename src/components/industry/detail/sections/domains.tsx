import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import { IndustryDetailContent } from "consts/industry-detail.const";
import SectionHeading from "components/product/shared/section-heading";

interface DomainsSectionProps {
    content: IndustryDetailContent["domains"];
}

export default function DomainsSection({ content }: DomainsSectionProps) {
    return <Box component="section" className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={content.title} />
            <Box className="iv-domains">
                {content.items.map(({ title, description, points }) => (
                    <Box key={title} className="pv-card pv-card--soft iv-domain">
                        <ViewInArOutlinedIcon className="iv-domain__icon" />
                        <Typography className="pv-card__title">{title}</Typography>
                        <Typography className="iv-domain__description">{description}</Typography>
                        <ul className="iv-domain__points">
                            {points.map(point => <li key={point}>{point}</li>)}
                        </ul>
                    </Box>
                ))}
            </Box>
        </Container>
    </Box>
}
