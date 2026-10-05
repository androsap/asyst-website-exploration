import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { IndustryDetailContent } from "consts/industry-detail.const";
import SectionHeading from "components/product/shared/section-heading";

interface ValueChainSectionProps {
    content: IndustryDetailContent["valueChain"];
}

export default function ValueChainSection({ content }: ValueChainSectionProps) {
    return <Box component="section" className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={content.title} description={content.description} />
            <ol className="iv-chain">
                {content.steps.map(step => <li key={step} className="iv-chain__step">{step}</li>)}
            </ol>
        </Container>
    </Box>
}
