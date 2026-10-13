import { useRef, useState } from "react";
import { ButtonBase } from "components/ui/button-base";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { FlowBlock } from "consts/product-detail/enterprise.types";
import SectionHeading from "../../shared/section-heading";
import Figure from "./figure";

interface FlowSectionProps {
    id?: string;
    content: FlowBlock;
}

export default function FlowSection({ id, content }: FlowSectionProps) {
    const { title, description, steps } = content;
    const [activeIndex, setActiveIndex] = useState(0);
    const stepRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const active = steps[activeIndex];
    const ActiveIcon = active.icon;

    const select = (index: number) => {
        setActiveIndex(index);
        stepRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    };

    return <section id={id} className="pe-band pv-anchor">
        <div className="pe-band__stage">
            <Container maxWidth="xl">
                <div className="pe-split pe-split--center pe-band__split">
                    <div>
                        <SectionHeading title={title} description={description} align="left" />
                        <div key={active.label} className="pe-flow__detail" role="tabpanel" aria-label={active.title}>
                            <span className="pe-icon-tile"><ActiveIcon /></span>
                            <div>
                                <Typography component="h3" className="pe-flow__title">{active.title}</Typography>
                                <Typography className="pe-flow__description">{active.description}</Typography>
                            </div>
                        </div>
                    </div>
                    <Figure image={active.image} alt={active.title} variant="showcase" />
                </div>
            </Container>
        </div>
        <div className="pe-flow__bar">
            <Container maxWidth="xl">
                <div className="pe-flow__steps" role="tablist" aria-label={title}>
                    {steps.map(({ label }, index) => (
                        <ButtonBase
                            key={label}
                            ref={(el: HTMLButtonElement | null) => { stepRefs.current[index] = el; }}
                            disableRipple
                            role="tab"
                            aria-selected={index === activeIndex}
                            className={`pe-flow__step ${index === activeIndex ? "active" : ""}`}
                            onClick={() => select(index)}
                        >
                            {label}
                        </ButtonBase>
                    ))}
                </div>
            </Container>
        </div>
    </section>
}
