import { useState } from "react";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { CheckCircleRoundedIcon } from "components/ui/icons";
import { CapabilityBlock } from "consts/product-detail/enterprise.types";
import SectionHeading from "../../shared/section-heading";
import AccordionItem from "../../shared/accordion";
import Figure from "./figure";

interface CapabilitiesSectionProps {
    id?: string;
    content: CapabilityBlock;
}

export default function CapabilitiesSection({ id, content }: CapabilitiesSectionProps) {
    const { heading, mediaFirst = false, title, description, image, items } = content;
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const headingNode = <SectionHeading title={title} description={description} align={heading === "top" ? "center" : "left"} />;

    return <section id={id} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            {heading === "top" && headingNode}
            <div className={`pe-split pe-split--capabilities ${mediaFirst ? "pe-split--reverse" : ""}`}>
                <div>
                    {heading === "column" && headingNode}
                    <div className="pe-accordion">
                        {items.map(({ title, description, highlight, points, icon }, index) => (
                            <AccordionItem
                                key={title}
                                title={title}
                                icon="outline"
                                leadingIcon={icon}
                                open={index === openIndex}
                                onToggle={() => setOpenIndex(index === openIndex ? null : index)}
                            >
                                <Typography className="pv-accordion__text">{description}</Typography>
                                {points && <ul className="pe-bullets pe-bullets--compact pe-bullets--columns">
                                    {points.map(point => <li key={point}>{point}</li>)}
                                </ul>}
                                {highlight && <Typography className="pe-highlight">
                                    <CheckCircleRoundedIcon className="pe-highlight__icon" />
                                    <span>{highlight}</span>
                                </Typography>}
                            </AccordionItem>
                        ))}
                    </div>
                </div>
                <div className="pe-sticky">
                    <Figure image={image} alt={title} variant="showcase" />
                </div>
            </div>
        </Container>
    </section>
}
