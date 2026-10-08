import { useState } from "react";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import AccordionItem from "components/product/shared/accordion";

interface CareerFaqProps {
    title: string;
    items: { question: string; answer: string }[];
}

/** FAQ di bawah halaman Career, Jobs & detail. Pertanyaan pertama terbuka secara default. */
export default function CareerFaq({ title, items }: CareerFaqProps) {
    const [open, setOpen] = useState<number | null>(0);

    return <section className="pv-section">
        <Container maxWidth="xl">
            <Typography variant="h2" className="cr-title">{title}</Typography>
            <div className="cr-faq">
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
            </div>
        </Container>
    </section>
}
