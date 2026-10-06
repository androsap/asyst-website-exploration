import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { AboutIntroConst } from "consts/about-us.const";
import { useLocalized } from "shared/i18n";
import SectionHeading from "components/home/sections/section-heading";

export default function AboutIntroSection() {
    const intro = useLocalized(AboutIntroConst);

    return <Box component="section" className="home-section about-intro">
        <Container maxWidth="xl">
            <SectionHeading title={intro.title} description={intro.description} />
        </Container>
    </Box>
}
