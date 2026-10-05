import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AccordionItem from "components/product/shared/accordion";

interface CareerFaqProps {
    title: string;
    items: { question: string; answer: string }[];
}

/** FAQ di bawah halaman Career, Jobs & detail. Pertanyaan pertama terbuka secara default. */
export default function CareerFaq({ title, items }: CareerFaqProps) {
    const [open, setOpen] = useState<number | null>(0);

    return <Box component="section" className="pv-section">
        <Container maxWidth="xl">
            <Typography variant="h2" className="cr-title">{title}</Typography>
            <Box className="cr-faq">
                {items.map(({ question, answer }, index) => (
                    <AccordionItem
                        key={question}
                        title={question}
                        open={open === index}
                        onToggle={() => setOpen(open === index ? null : index)}
                    >
                        <Typography className="pv-accordion__text">{answer}</Typography>
                    </AccordionItem>
                ))}
            </Box>
        </Container>
    </Box>
}
