import { useLocalized } from "shared/i18n";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CareerInternshipConst } from "consts/career.const";
import { careerJobsLink } from "../shared/utils";

export default function InternshipSection() {
    const { title, description, button, filter } = useLocalized(CareerInternshipConst);

    return <Box component="section" className="pv-section">
        <Container maxWidth="xl" className="cr-internship">
            <Box>
                <Typography variant="h2" className="cr-title cr-title--large">{title}</Typography>
                <Typography className="cr-text">{description}</Typography>
            </Box>
            <Button component={Link} to={careerJobsLink({ [filter.key]: filter.value })} className="pv-btn pv-btn--primary">{button}</Button>
        </Container>
    </Box>
}
