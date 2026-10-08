import { useState } from "react";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { ProductDetailContent } from "consts/product-detail.const";
import SectionHeading from "../../shared/section-heading";
import AccordionItem from "../../shared/accordion";

interface FaqSectionProps {
    content: ProductDetailContent["faq"];
}

export default function FaqSection({ content }: FaqSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return <section className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={content.title} align="left" />
            <div className="pv-faq">
                {content.items.map(({ question, answer }, index) => (
                    <AccordionItem
                        key={question}
                        title={question}
                        open={index === openIndex}
                        onToggle={() => setOpenIndex(index === openIndex ? null : index)}
                    >
                        <Typography className="pv-accordion__text">{answer}</Typography>
                    </AccordionItem>
                ))}
            </div>
        </Container>
    </section>
}
