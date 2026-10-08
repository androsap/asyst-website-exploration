import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { Link } from "react-router-dom";
import { JoinTeamConst } from "consts/about-us.const";
import { useLocalized } from "shared/i18n";

export default function JoinTeamSection() {
    const { title, description, link, images } = useLocalized(JoinTeamConst);

    return <section className="home-section home-section--last">
        <Container maxWidth="xl">
            <div className="about-join">
                {images.map(image => (
                    <div key={image} className="about-join__image" style={{ backgroundImage: `url(${image})` }} />
                ))}
                <div className="about-join__card">
                    <Typography variant="h2" className="about-join__title">{title}</Typography>
                    {description.map((text, index) => (
                        <Typography key={index} className="about-join__description">{text}</Typography>
                    ))}
                    <Link to={link.to} className="home-link about-join__link">{link.label}</Link>
                </div>
            </div>
        </Container>
    </section>
}
