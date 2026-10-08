import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { LanguageRoundedIcon } from "components/ui/icons";
import { CaseStudyDetailContent } from "consts/case-study.const";
import { CASE_STUDY_SECTION_IDS } from "../../shared/section-ids";

interface SolutionSectionProps {
    content: CaseStudyDetailContent["solution"];
}

/** Diagram arsitektur (dibangun dari data, bukan gambar) + daftar poin solusi. */
export default function SolutionSection({ content }: SolutionSectionProps) {
    const { eyebrow, title, architecture, items } = content;

    return <section id={CASE_STUDY_SECTION_IDS.solution} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            <Typography className="cs-eyebrow">{eyebrow}</Typography>
            <Typography variant="h2" className="pv-heading__title cs-solution__heading">{title}</Typography>
            <div className="cs-solution">
                <div className="cs-arch" role="img" aria-label={`${architecture.top} → ${architecture.core} → ${architecture.branches.map(b => b.label).join(", ")}`}>
                    <span className="cs-arch__node cs-arch__node--top">
                        <LanguageRoundedIcon />{architecture.top}
                    </span>
                    <span className="cs-arch__line" />
                    <span className="cs-arch__node cs-arch__node--core">{architecture.core}</span>
                    <span className="cs-arch__line" />
                    <div className="cs-arch__branches" style={{ gridTemplateColumns: `repeat(${architecture.branches.length}, 1fr)` }}>
                        {architecture.branches.map(({ label, child }) => (
                            <div key={label} className="cs-arch__branch">
                                <span className="cs-arch__node">{label}</span>
                                {child && <>
                                    <span className="cs-arch__line" />
                                    <span className="cs-arch__node">{child}</span>
                                </>}
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    {items.map(({ title, description }) => (
                        <div key={title} className="cs-solution__item">
                            <Typography className="cs-solution__title">{title}</Typography>
                            <Typography className="cs-solution__text">{description}</Typography>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    </section>
}
