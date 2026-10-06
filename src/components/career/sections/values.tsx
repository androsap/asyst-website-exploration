import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useLocalized } from "shared/i18n";
import { CareerValuesConst } from "consts/career.const";
import SectionHeading from "components/product/shared/section-heading";

export default function ValuesSection() {
    const { title, items } = useLocalized(CareerValuesConst);

    return <Box component="section" className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={title} />
            <Box className="cr-values">
                {items.map(({ title, subtitle, description, icon: Icon }, index) => (
                    <Box key={index} className="cr-value">
                        <Box className="cr-icon"><Icon /></Box>
                        <Typography variant="h3" className="cr-value__title">{title}</Typography>
                        <Typography className="cr-value__subtitle">{subtitle}</Typography>
                        <Typography className="cr-value__description">{description}</Typography>
                    </Box>
                ))}
            </Box>
        </Container>
    </Box>
}
