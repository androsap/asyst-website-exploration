import "components/product/shared/product-v2.scss";
import "components/solution/shared/solution-v2.scss";
import "../shared/industry-v2.scss";
import { IndustryDetailContent } from "consts/industry-detail.const";
import { requestDemoModal, scrollToSection } from "components/product/shared/page-actions";
import CtaSection from "components/product/shared/cta";
import FaqSection from "components/product/detail/sections/faq";
import TabbedPanelSection from "components/solution/shared/tabbed-panel";
import IndustryHero from "../shared/hero";
import IntroSplitSection from "../shared/intro-split";
import IndustryCardsSection from "../shared/industry-cards";
import { INDUSTRY_SECTION_IDS } from "../shared/section-ids";
import ChallengesSection from "./sections/challenges";
import LayersAccordion from "./sections/layers";
import ValueChainSection from "./sections/value-chain";
import DomainsSection from "./sections/domains";
import PrioritiesSection from "./sections/priorities";

interface IndustryDetailProps {
    content: IndustryDetailContent;
}

/** Layout halaman detail industri (revamp 2026). Konten per industri ada di consts/industry-detail.const. */
export default function IndustryDetail({ content }: IndustryDetailProps) {
    return <div className="product-v2 solution-v2 industry-v2">
        <IndustryHero content={content.hero} onPrimary={() => scrollToSection(INDUSTRY_SECTION_IDS.solutions)} />
        <IntroSplitSection content={content.overview} />
        <ChallengesSection content={content.challenges} />
        <IntroSplitSection content={content.layers}>
            <LayersAccordion items={content.layers.items} />
        </IntroSplitSection>
        <ValueChainSection content={content.valueChain} />
        <DomainsSection content={content.domains} />
        <IntroSplitSection content={content.products} />
        <IndustryCardsSection {...content.solutions} />
        <TabbedPanelSection {...content.connect} />
        <PrioritiesSection content={content.priorities} />
        <FaqSection content={content.faq} />
        <CtaSection {...content.cta} onClick={requestDemoModal} />
    </div>
}
