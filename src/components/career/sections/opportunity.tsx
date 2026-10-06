import { useLocalized } from "shared/i18n";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { CAREER_JOBS_PATH, CareerJobsConst, CareerOpportunityConst } from "consts/career.const";
import SectionHeading from "components/product/shared/section-heading";
import JobCard from "../shared/job-card";

/** Lowongan terbaru (maks. `limit`) + tombol ke daftar lengkap. */
export default function OpportunitySection() {
    const { title, description, button, limit } = useLocalized(CareerOpportunityConst);
    const jobs = useLocalized(CareerJobsConst);

    return <Box component="section" className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={title} description={description} />
            <Box className="cr-job-grid">
                {jobs.slice(0, limit).map(job => <JobCard key={job.slug} job={job} />)}
            </Box>
            <Box className="cr-center">
                <Button component={Link} to={CAREER_JOBS_PATH} className="pv-btn pv-btn--primary" endIcon={<ArrowForwardRoundedIcon />}>{button}</Button>
            </Box>
        </Container>
    </Box>
}
