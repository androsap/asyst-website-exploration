import { MainLayoutSharedProps } from "shared/layout/main-layout";
import "components/product/shared/product-v2.scss";
import "./shared/solution-v2.scss";
import { SolutionCapabilitiesConst, SolutionCtaConst, SolutionFaqConst, SolutionHeroConst, SolutionValueConst } from "consts/solution.const";
import { requestDemoModal, scrollToSection, useTalkToExpert } from "components/product/shared/page-actions";
import CtaSection from "components/product/shared/cta";
import FaqSection from "components/product/detail/sections/faq";
import SolutionHero from "./shared/hero";
import IconCardsSection from "./shared/icon-cards";
import TabbedPanelSection from "./shared/tabbed-panel";
import LayersSection from "./sections/layers";
import { SOLUTION_SECTION_IDS } from "./shared/section-ids";
import { useLocalized } from "shared/i18n";

/** Halaman utama Solutions (revamp 2026). Memakai gaya dasar product-v2 + tambahan solution-v2. */
export default function SolutionComponent({ }: MainLayoutSharedProps) {
    const talkToExpert = useTalkToExpert("it-solutions");
    const hero = useLocalized(SolutionHeroConst);
    const capabilities = useLocalized(SolutionCapabilitiesConst);
    const value = useLocalized(SolutionValueConst);
    const faq = useLocalized(SolutionFaqConst);
    const cta = useLocalized(SolutionCtaConst);

    return <div className="product-v2 solution-v2">
        <SolutionHero content={hero} onPrimary={requestDemoModal} onSecondary={() => scrollToSection(SOLUTION_SECTION_IDS.layers)} />
        <IconCardsSection {...capabilities} />
        <LayersSection />
        <TabbedPanelSection {...value} />
        <FaqSection content={faq} />
        <CtaSection {...cta} onClick={talkToExpert} />
    </div>
}
