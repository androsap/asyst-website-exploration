import Box from "@mui/material/Box";
import { MainLayoutSharedProps } from "shared/layout/main-layout";
import "./shared/product-v2.scss";
import { ProductCtaConst } from "consts/product.const";
import { useLocalized } from "shared/i18n";
import { scrollToSection, SECTION_IDS, useTalkToExpert } from "./shared/page-actions";
import CtaSection from "./shared/cta";
import HeroSection from "./sections/hero";
import CatalogSection from "./sections/catalog";
import ExperienceSection from "./sections/experience";
import SolveSection from "./sections/solve";

export default function ProductComponent({ }: MainLayoutSharedProps) {
    const talkToExpert = useTalkToExpert();
    const cta = useLocalized(ProductCtaConst);

    return <Box className="product-v2">
        <HeroSection onExplore={() => scrollToSection(SECTION_IDS.catalog)} onTalkToExpert={talkToExpert} />
        <CatalogSection />
        <ExperienceSection />
        <SolveSection />
        <CtaSection {...cta} onClick={talkToExpert} />
    </Box>
}
