import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ProductDetailContent } from "consts/product-detail.const";
import SectionHeading from "../../shared/section-heading";
import TabBar from "../../shared/tab-bar";

interface HowItWorksSectionProps {
    content: ProductDetailContent["howItWorks"];
}

export default function HowItWorksSection({ content }: HowItWorksSectionProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = content.items[activeIndex];

    return <Box component="section" className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={content.title} />
            <TabBar variant="underline" labels={content.items.map(x => x.label)} active={activeIndex} onChange={setActiveIndex} />
            <Box className="pv-split pv-how" role="tabpanel">
                <Box>
                    <Typography className="pv-subheading">{active.title}</Typography>
                    <Typography className="pv-paragraph">{active.description}</Typography>
                </Box>
                <Box className="pv-media">
                    <img src={active.image} alt={active.title} loading="lazy" />
                </Box>
            </Box>
        </Container>
    </Box>
}
