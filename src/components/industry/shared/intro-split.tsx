import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { IndustryIntroContent } from "consts/industry.const";
import SectionHeading from "components/product/shared/section-heading";

interface IntroSplitSectionProps {
    content: IndustryIntroContent;
}

/** Judul + paragraf di kiri, gambar di kanan. `children` dirender di bawahnya (mis. accordion layer teknologi). */
export default function IntroSplitSection({ content, children }: PropsWithChildren<IntroSplitSectionProps>) {
    const { title, paragraphs, image } = content;

    return <Box component="section" className="pv-section">
        <Container maxWidth="xl">
            <Box className="pv-split iv-intro">
                <Box>
                    <SectionHeading title={title} align="left" />
                    {paragraphs.map(text => <Typography key={text} className="pv-paragraph">{text}</Typography>)}
                </Box>
                <Box className="iv-intro__media">
                    <img src={image} alt={title} loading="lazy" />
                </Box>
            </Box>
            {children}
        </Container>
    </Box>
}
