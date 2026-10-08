import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { useLocalized } from "shared/i18n";
import { CareerValuesConst } from "consts/career.const";
import SectionHeading from "components/product/shared/section-heading";

export default function ValuesSection() {
    const { title, items } = useLocalized(CareerValuesConst);

    return <section className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={title} />
            <div className="cr-values">
                {items.map(({ title, subtitle, description, icon: Icon }, index) => (
                    <div key={index} className="cr-value">
                        <div className="cr-icon"><Icon /></div>
                        <Typography variant="h3" className="cr-value__title">{title}</Typography>
                        <Typography className="cr-value__subtitle">{subtitle}</Typography>
                        <Typography className="cr-value__description">{description}</Typography>
                    </div>
                ))}
            </div>
        </Container>
    </section>
}
