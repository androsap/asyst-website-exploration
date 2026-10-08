import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { ProductExperienceConst } from "consts/product.const";
import { useLocalized } from "shared/i18n";
import SectionHeading from "../shared/section-heading";

export default function ExperienceSection() {
    const experience = useLocalized(ProductExperienceConst);

    return <section className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={experience.title} description={experience.description} align="left" />
            <div className="pv-grid pv-grid--4">
                {experience.items.map(({ image, title, description }, index) => (
                    <div key={index} className="pv-card pv-experience">
                        <div className="pv-experience__illustration"><img src={image} alt="" /></div>
                        <Typography className="pv-card__title pv-experience__title">{title}</Typography>
                        <Typography className="pv-card__description">{description}</Typography>
                    </div>
                ))}
            </div>
        </Container>
    </section>
}
