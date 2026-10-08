import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { CaseStudyDetailContent } from "consts/case-study.const";

interface OverviewSectionProps {
    hero: CaseStudyDetailContent["hero"];
    summary: CaseStudyDetailContent["summary"];
    challenge: CaseStudyDetailContent["challenge"];
    onViewArchitecture: () => void;
}

/** Hero tengah + bar ringkasan klien + kartu Business Challenge. */
export default function OverviewSection({ hero, summary, challenge, onViewArchitecture }: OverviewSectionProps) {
    return <>
        <section className="cs-hero cs-hero--center">
            <div className="cs-hero__backdrop" style={{ backgroundImage: `url(${hero.image})` }} aria-hidden />
            <Container maxWidth="xl" className="cs-hero__inner">
                <Typography variant="h1" className="cs-hero__title">{hero.title}</Typography>
                <Typography className="cs-hero__description">{hero.description}</Typography>
                <Button className="pv-btn pv-btn--primary cs-hero__button" onClick={onViewArchitecture}>{hero.button}</Button>
            </Container>
        </section>

        <section className="pv-section cs-overview">
            <Container maxWidth="xl">
                <div className="cs-summary">
                    <div className="cs-summary__logo">
                        <img src={summary.logo} alt={summary.client} />
                    </div>
                    {summary.items.map(({ label, value }, index) => (
                        <div key={index}>
                            <Typography className="cs-summary__label">{label}</Typography>
                            <Typography className="cs-summary__value">{value}</Typography>
                        </div>
                    ))}
                </div>

                <div className="cs-challenge">
                    <div>
                        <Typography className="cs-eyebrow">{challenge.eyebrow}</Typography>
                        <Typography variant="h2" className="cs-challenge__title">{challenge.title}</Typography>
                        {challenge.paragraphs.map(text => <Typography key={text} className="cs-challenge__text">{text}</Typography>)}
                    </div>
                    <div className="cs-challenge__image" style={{ backgroundImage: `url(${challenge.image})` }} />
                </div>
            </Container>
        </section>
    </>
}
