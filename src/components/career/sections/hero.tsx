import { useLocalized } from "shared/i18n";
import { Link } from "react-router-dom";
import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { CAREER_JOBS_PATH, CareerHeroConst } from "consts/career.const";

export default function HeroSection() {
    const { title, description, button, image } = useLocalized(CareerHeroConst);

    return <section className="cr-hero">
        <div className="cr-hero__backdrop" style={{ backgroundImage: `url(${image})` }} aria-hidden />
        <Container maxWidth="md" className="cr-hero__inner">
            <Typography variant="h1" className="cr-hero__title">{title}</Typography>
            <Typography className="cr-hero__description">{description}</Typography>
            <Button asChild className="pv-btn pv-btn--primary cr-hero__button"><Link to={CAREER_JOBS_PATH}>{button}</Link></Button>
        </Container>
    </section>
}
