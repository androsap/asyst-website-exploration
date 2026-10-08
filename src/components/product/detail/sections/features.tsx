import { useState } from "react";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { ProductDetailContent } from "consts/product-detail.const";
import SectionHeading from "../../shared/section-heading";
import AccordionItem from "../../shared/accordion";

interface FeaturesSectionProps {
    content: ProductDetailContent["features"];
}

export default function FeaturesSection({ content }: FeaturesSectionProps) {
    // Selalu ada satu fitur terbuka agar gambar di sisi kanan punya konteks
    const [activeIndex, setActiveIndex] = useState(0);
    const active = content.items[activeIndex];

    return <section className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={content.title} />
            <div className="pv-features">
                <div className="pv-features__list">
                    {content.items.map(({ title, description }, index) => (
                        <AccordionItem key={title} title={title} icon="circle" open={index === activeIndex} onToggle={() => setActiveIndex(index)}>
                            <Typography className="pv-accordion__text">{description}</Typography>
                        </AccordionItem>
                    ))}
                </div>
                <div className="pv-features__media">
                    <img src={active.image} alt={active.title} loading="lazy" />
                </div>
            </div>
        </Container>
    </section>
}
