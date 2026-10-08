import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { useLocalized } from "shared/i18n";
import { CareerApplyStepsConst } from "consts/career.const";

export default function ApplyStepsSection() {
    const { title, description, image, steps } = useLocalized(CareerApplyStepsConst);

    return <section className="pv-section">
        <Container maxWidth="xl" className="cr-steps">
            <div>
                <Typography variant="h2" className="cr-title">{title}</Typography>
                <Typography className="cr-text">{description}</Typography>
                <ol className="cr-steps__list">
                    {steps.map(({ title, description }, index) => (
                        <li key={title} className="cr-steps__item">
                            <Typography className="cr-steps__title">
                                <span>{String(index + 1).padStart(2, "0")}</span>{title}
                            </Typography>
                            <Typography className="cr-steps__description">{description}</Typography>
                        </li>
                    ))}
                </ol>
            </div>
            <div className="cr-steps__image" style={{ backgroundImage: `url(${image})` }} aria-hidden />
        </Container>
    </section>
}
