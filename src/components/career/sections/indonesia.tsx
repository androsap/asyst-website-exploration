import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CareerIndonesiaConst } from "consts/career.const";

export default function IndonesiaSection() {
    const { title, description, items } = CareerIndonesiaConst;

    return <Box component="section" className="pv-section">
        <Container maxWidth="xl" className="cr-indonesia">
            <Box>
                <Typography variant="h2" className="cr-title cr-title--large">{title}</Typography>
                <Typography className="cr-text">{description}</Typography>
            </Box>
            <Box component="dl" className="cr-facts">
                {items.map(({ label, value }) => (
                    <Box key={label} className="cr-facts__row">
                        <Typography component="dt" className="cr-facts__label">{label}</Typography>
                        <Typography component="dd" className="cr-facts__value">{value}</Typography>
                    </Box>
                ))}
            </Box>
        </Container>
    </Box>
}
