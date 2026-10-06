import Box from "@mui/material/Box";
import { MainLayoutSharedProps } from "shared/layout/main-layout";
import "components/product/shared/product-v2.scss";
import "components/solution/shared/solution-v2.scss";
import "./shared/industry-v2.scss";
import { IndustryCtaConst, IndustryExpertiseConst, IndustryFaqConst, IndustryFoundationConst, IndustryHeroConst, IndustryIntroConst } from "consts/industry.const";
import { scrollToSection, useTalkToExpert } from "components/product/shared/page-actions";
import CtaSection from "components/product/shared/cta";
import FaqSection from "components/product/detail/sections/faq";
import IconCardsSection from "components/solution/shared/icon-cards";
import IndustryHero from "./shared/hero";
import IntroSplitSection from "./shared/intro-split";
import IndustryCardsSection from "./shared/industry-cards";
import { INDUSTRY_SECTION_IDS } from "./shared/section-ids";
import { useLocalized } from "shared/i18n";

/** Halaman utama Industries (revamp 2026). Memakai gaya dasar product-v2 + solution-v2, tambahan di industry-v2. */
export default function IndustryComponent({ }: MainLayoutSharedProps) {
    const talkToExpert = useTalkToExpert();
    const hero = useLocalized(IndustryHeroConst);
    const intro = useLocalized(IndustryIntroConst);
    const expertise = useLocalized(IndustryExpertiseConst);
    const foundation = useLocalized(IndustryFoundationConst);
    const faq = useLocalized(IndustryFaqConst);
    const cta = useLocalized(IndustryCtaConst);

    return <Box className="product-v2 solution-v2 industry-v2">
        <IndustryHero content={hero} onPrimary={() => scrollToSection(INDUSTRY_SECTION_IDS.solutions)} onSecondary={talkToExpert} />
        <IntroSplitSection content={intro} />
        <IndustryCardsSection {...expertise} />
        <IconCardsSection {...foundation} />
        <FaqSection content={faq} />
        <CtaSection {...cta} onClick={talkToExpert} />
    </Box>
}
