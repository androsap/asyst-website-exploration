import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { useLocalized } from "shared/i18n";
import { CareerIndonesiaConst } from "consts/career.const";

export default function IndonesiaSection() {
    const { title, description, items } = useLocalized(CareerIndonesiaConst);

    return <section className="pv-section">
        <Container maxWidth="xl" className="cr-indonesia">
            <div>
                <Typography variant="h2" className="cr-title cr-title--large">{title}</Typography>
                <Typography className="cr-text">{description}</Typography>
            </div>
            <dl className="cr-facts">
                {items.map(({ label, value }, index) => (
                    <div key={index} className="cr-facts__row">
                        <Typography component="dt" className="cr-facts__label">{label}</Typography>
                        <Typography component="dd" className="cr-facts__value">{value}</Typography>
                    </div>
                ))}
            </dl>
        </Container>
    </section>
}
