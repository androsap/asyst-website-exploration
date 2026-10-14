import { useState } from "react";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { StepsBlock } from "consts/solution-detail/solution-page.types";
import SectionHeading from "components/product/shared/section-heading";
import AccordionItem from "components/product/shared/accordion";
import DetailGroups from "./detail-groups";

interface StepsSectionProps {
    id?: string;
    content: StepsBlock;
}

export default function StepsSection({ id, content }: StepsSectionProps) {
    const { title, description, image, items } = content;
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return <section id={id} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            <div className="pe-split">
                <div>
                    <SectionHeading title={title} description={description} align="left" />
                    <div className="sp-photo sp-photo--tall">
                        <img src={image} alt={title} loading="lazy" decoding="async" />
                    </div>
                </div>
                <div className="pe-accordion sp-steps">
                    {items.map(({ label, title, description, groups }, index) => (
                        <AccordionItem
                            key={label}
                            title={label}
                            icon="outline"
                            open={index === openIndex}
                            onToggle={() => setOpenIndex(index === openIndex ? null : index)}
                        >
                            {title && <Typography component="h3" className="sp-steps__title">{title}</Typography>}
                            <Typography className="sp-steps__text">{description}</Typography>
                            {groups && <DetailGroups groups={groups} />}
                        </AccordionItem>
                    ))}
                </div>
            </div>
        </Container>
    </section>
}
