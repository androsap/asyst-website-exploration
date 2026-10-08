import "components/product/shared/product-v2.scss";
import "../shared/solution-v2.scss";
import { SolutionDetailContent } from "consts/solution-detail.const";
import { scrollToSection, useTalkToExpert } from "components/product/shared/page-actions";
import CtaSection from "components/product/shared/cta";
import FaqSection from "components/product/detail/sections/faq";
import SolutionHero from "../shared/hero";
import IconCardsSection from "../shared/icon-cards";
import TabbedPanelSection from "../shared/tabbed-panel";
import ChallengeSection from "./sections/challenge";
import DefinitionSection from "./sections/definition";
import { SOLUTION_SECTION_IDS } from "../shared/section-ids";

interface SolutionDetailProps {
    content: SolutionDetailContent;
}

/** Layout halaman detail solusi (revamp 2026). Konten per solusi ada di consts/solution-detail.const. */
export default function SolutionDetail({ content }: SolutionDetailProps) {
    const talkToExpert = useTalkToExpert("it-solutions");

    return <div className="product-v2 solution-v2">
        <SolutionHero content={content.hero} onPrimary={talkToExpert} onSecondary={() => scrollToSection(SOLUTION_SECTION_IDS.definition)} />
        <ChallengeSection content={content.challenge} />
        <DefinitionSection content={content.definition} />
        <TabbedPanelSection {...content.howItWorks} />
        <IconCardsSection {...content.why} />
        <FaqSection content={content.faq} />
        <CtaSection {...content.cta} onClick={talkToExpert} />
    </div>
}
