import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { LinkedInIcon } from "components/ui/icons";
import { LeadersConst } from "consts/about-us.const";
import { useLocalized } from "shared/i18n";
import SectionHeading from "components/home/sections/section-heading";

export default function LeadersSection() {
    const leaders = useLocalized(LeadersConst);

    return <section className="home-section">
        <Container maxWidth="xl">
            <SectionHeading title={leaders.title} description={leaders.description} />
            <div className="about-leaders">
                {leaders.items.map(({ name, position, image, linkedin }) => (
                    <div key={name} className="about-leader">
                        <div className="about-leader__photo">
                            <img src={image} alt={name} loading="lazy" />
                        </div>
                        <div className="about-leader__info">
                            <Typography className="about-leader__name">{name}</Typography>
                            <Typography className="about-leader__position">{position}</Typography>
                            {linkedin
                                ? <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn ${name}`} className="about-leader__linkedin"><LinkedInIcon /></a>
                                : <span className="about-leader__linkedin"><LinkedInIcon /></span>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    </section>
}
