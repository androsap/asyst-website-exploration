import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { Link } from "react-router-dom";
import { AboutHeroConst } from "consts/about-us.const";
import { useLocalized } from "shared/i18n";

export default function AboutHeroSection() {
    const { title, description, button, image } = useLocalized(AboutHeroConst);

    return <section className="about-hero" style={{ backgroundImage: `url(${image})` }}>
        <Container maxWidth="xl">
            <div className="about-hero__content">
                <Typography variant="h1" className="about-hero__title">{title}</Typography>
                <Typography className="about-hero__description">{description}</Typography>
                <Button asChild className="home-btn about-btn--blue"><Link to={button.link}>{button.label}</Link></Button>
            </div>
        </Container>
    </section>
}
