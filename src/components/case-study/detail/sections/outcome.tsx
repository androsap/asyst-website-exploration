import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { CaseStudiesConst, CaseStudyDetailContent } from "consts/case-study.const";
import CaseCard from "../../shared/case-card";
import { useLocalized } from "shared/i18n";

interface OutcomeSectionProps {
    outcome: CaseStudyDetailContent["outcome"];
    related: CaseStudyDetailContent["related"];
}

/** Ringkasan hasil (4 kolom) + kartu Related cases. */
export default function OutcomeSection({ outcome, related }: OutcomeSectionProps) {
    const caseStudies = useLocalized(CaseStudiesConst);
    const relatedItems = related.slugs
        .map(slug => caseStudies.find(item => item.slug === slug))
        .filter((item): item is NonNullable<typeof item> => !!item);

    return <section className="pv-section">
        <Container maxWidth="xl">
            <Typography className="cs-eyebrow cs-eyebrow--dark">{outcome.eyebrow}</Typography>
            <Typography variant="h2" className="pv-heading__title">{outcome.title}</Typography>
            <div className="cs-outcome">
                {outcome.items.map(({ title, description }, index) => (
                    <div key={index} className="cs-outcome__item">
                        <Typography className="cs-outcome__title">{title}</Typography>
                        <Typography className="cs-outcome__text">{description}</Typography>
                    </div>
                ))}
            </div>

            {!!relatedItems.length && <div className="cs-related">
                <Typography variant="h2" className="pv-heading__title">{related.title}</Typography>
                <div className="cs-grid">
                    {relatedItems.map(item => <CaseCard key={item.slug} item={item} />)}
                </div>
            </div>}
        </Container>
    </section>
}
