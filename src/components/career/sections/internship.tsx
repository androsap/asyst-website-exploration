import { useLocalized } from "shared/i18n";
import { Link } from "react-router-dom";
import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { CareerInternshipConst } from "consts/career.const";
import { careerJobsLink } from "../shared/utils";

export default function InternshipSection() {
    const { title, description, button, filter } = useLocalized(CareerInternshipConst);

    return <section className="pv-section">
        <Container maxWidth="xl" className="cr-internship">
            <div>
                <Typography variant="h2" className="cr-title cr-title--large">{title}</Typography>
                <Typography className="cr-text">{description}</Typography>
            </div>
            <Button asChild className="pv-btn pv-btn--primary"><Link to={careerJobsLink({ [filter.key]: filter.value })}>{button}</Link></Button>
        </Container>
    </section>
}
