import { Container } from "components/ui/container";
import { useLocalized } from "shared/i18n";
import { CareerLifeConst } from "consts/career.const";
import SectionHeading from "components/product/shared/section-heading";

export default function LifeSection() {
    const { title, description, images } = useLocalized(CareerLifeConst);

    return <section className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={title} description={description} />
            <div className="cr-gallery">
                {images.map((image, index) => (
                    <div key={index} className="cr-gallery__item" style={{ backgroundImage: `url(${image})` }} role="img" aria-label={`${title} ${index + 1}`} />
                ))}
            </div>
        </Container>
    </section>
}
