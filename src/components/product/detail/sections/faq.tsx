import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ProductDetailContent } from "consts/product-detail.const";
import SectionHeading from "../../shared/section-heading";
import AccordionItem from "../../shared/accordion";

interface FaqSectionProps {
    content: ProductDetailContent["faq"];
}

export default function FaqSection({ content }: FaqSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return <Box component="section" className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={content.title} align="left" />
            <Box className="pv-faq">
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
            </Box>
        </Container>
    </Box>
}
