import { useLocalized } from "shared/i18n";
import { Link } from "react-router-dom";
import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { ArrowForwardRoundedIcon } from "components/ui/icons";
import { CAREER_JOBS_PATH, CareerJobsConst, CareerOpportunityConst } from "consts/career.const";
import SectionHeading from "components/product/shared/section-heading";
import JobCard from "../shared/job-card";

/** Lowongan terbaru (maks. `limit`) + tombol ke daftar lengkap. */
export default function OpportunitySection() {
    const { title, description, button, limit } = useLocalized(CareerOpportunityConst);
    const jobs = useLocalized(CareerJobsConst);

    return <section className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={title} description={description} />
            <div className="cr-job-grid">
                {jobs.slice(0, limit).map(job => <JobCard key={job.slug} job={job} />)}
            </div>
            <div className="cr-center">
                <Button asChild className="pv-btn pv-btn--primary" endIcon={<ArrowForwardRoundedIcon />}><Link to={CAREER_JOBS_PATH}>{button}</Link></Button>
            </div>
        </Container>
    </section>
}
