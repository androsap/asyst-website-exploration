import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { PartnerConst } from "consts/home.const";
import { useLocalized } from "shared/i18n";
import SectionHeading from "./section-heading";
import LazyBackground from "./lazy-background";

export default function PartnerSection() {
    const partner = useLocalized(PartnerConst);

    return <section className="home-section">
        <Container maxWidth="xl">
            <SectionHeading title={partner.title} />
            <div className="home-partner">
                {partner.items.map(({ title, description, image }) => (
                    <LazyBackground key={title} className="home-partner__card" image={image}>
                        <div className="home-partner__caption">
                            <Typography className="home-partner__title">{title}</Typography>
                            <Typography className="home-partner__description">{description}</Typography>
                        </div>
                    </LazyBackground>
                ))}
            </div>
        </Container>
    </section>
}
