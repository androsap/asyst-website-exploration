import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
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

    return <Box component="section" className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={content.title} />
            <Box className="pv-features">
                <Box className="pv-features__list">
                    {content.items.map(({ title, description }, index) => (
                        <AccordionItem key={title} title={title} icon="circle" open={index === activeIndex} onToggle={() => setActiveIndex(index)}>
                            <Typography className="pv-accordion__text">{description}</Typography>
                        </AccordionItem>
                    ))}
                </Box>
                <Box className="pv-features__media">
                    <img src={active.image} alt={active.title} loading="lazy" />
                </Box>
            </Box>
        </Container>
    </Box>
}
