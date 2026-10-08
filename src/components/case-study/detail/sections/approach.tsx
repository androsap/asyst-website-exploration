import { useState } from "react";
import { ButtonBase } from "components/ui/button-base";
import { Collapse } from "components/ui/transitions";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { AddRoundedIcon, RemoveRoundedIcon } from "components/ui/icons";
import { CaseStudyDetailContent } from "consts/case-study.const";

interface ApproachSectionProps {
    content: CaseStudyDetailContent["approach"];
}

/** Judul sticky di kiri + langkah bernomor (accordion, satu terbuka) di kanan. */
export default function ApproachSection({ content }: ApproachSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return <section className="pv-section">
        <Container maxWidth="xl" className="cs-approach">
            <div className="cs-approach__intro">
                <Typography className="cs-eyebrow cs-eyebrow--dark">{content.eyebrow}</Typography>
                <Typography variant="h2" className="pv-heading__title">{content.title}</Typography>
            </div>
            <div>
                {content.steps.map(({ phase, title, description }, index) => {
                    const open = openIndex === index;
                    return <div key={index} className={`cs-step ${open ? "open" : ""}`}>
                        <ButtonBase className="cs-step__header" aria-expanded={open} onClick={() => setOpenIndex(open ? null : index)}>
                            <span className="cs-step__number">
                                {String(index + 1).padStart(2, "0")}
                                <small>{phase}</small>
                            </span>
                            <span className="cs-step__title">{title}</span>
                            {open ? <RemoveRoundedIcon className="cs-step__icon" /> : <AddRoundedIcon className="cs-step__icon" />}
                        </ButtonBase>
                        <Collapse in={open}>
                            <Typography className="cs-step__text">{description}</Typography>
                        </Collapse>
                    </div>
                })}
            </div>
        </Container>
    </section>
}
