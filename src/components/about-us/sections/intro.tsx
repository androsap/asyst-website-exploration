import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { AboutIntroConst } from "consts/about-us.const";
import SectionHeading from "components/home/sections/section-heading";

export default function AboutIntroSection() {
    return <Box component="section" className="home-section about-intro">
        <Container maxWidth="xl">
            <SectionHeading title={AboutIntroConst.title} description={AboutIntroConst.description} />
        </Container>
    </Box>
}
