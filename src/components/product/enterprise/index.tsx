import { Fragment } from "react";
import "../shared/product-v2.scss";
import "./enterprise.scss";
import { EnterpriseBlock, EnterpriseProductContent } from "consts/product-detail/enterprise.types";
import useSeo from "shared/head/seo";
import { breadcrumbSchema, faqSchema } from "shared/head/schema";
import { useT } from "shared/i18n";
import { scrollToSection, useTalkToExpert } from "../shared/page-actions";
import CtaSection from "../shared/cta";
import FaqSection from "../detail/sections/faq";
import { FIRST_SECTION_ID, PRODUCT_BASE_PATH } from "./constants";
import HeroSection from "./sections/hero";
import ChallengeSection from "./sections/challenge";
import OverviewSection from "./sections/overview";
import FlowSection from "./sections/flow";
import TimelineSection from "./sections/timeline";
import CapabilitiesSection from "./sections/capabilities";
import ArchitectureSection from "./sections/architecture";
import ExpertiseSection from "./sections/expertise";

interface EnterpriseProductPageProps {
    path: string;
    content: EnterpriseProductContent;
}

const renderBlock = (block: EnterpriseBlock, id?: string) => {
    switch (block.type) {
        case "challenge": return <ChallengeSection id={id} content={block} />;
        case "overview": return <OverviewSection id={id} content={block} />;
        case "flow": return <FlowSection id={id} content={block} />;
        case "timeline": return <TimelineSection id={id} content={block} />;
        case "capabilities": return <CapabilitiesSection id={id} content={block} />;
        case "architecture": return <ArchitectureSection id={id} content={block} />;
        case "expertise": return <ExpertiseSection id={id} content={block} />;
    }
};

export default function EnterpriseProductPage({ path, content }: EnterpriseProductPageProps) {
    const t = useT();
    const talkToExpert = useTalkToExpert("enterprise");
    const { seo, hero, sections, faq, cta } = content;

    useSeo({
        ...seo,
        path,
        image: hero.image,
        jsonLd: [
            breadcrumbSchema([
                { name: t("Products", "Produk"), path: PRODUCT_BASE_PATH },
                { name: hero.breadcrumb, path },
            ], t("Home", "Beranda")),
            faqSchema(faq.items),
        ],
    });

    return <div className="product-v2 product-enterprise">
        <HeroSection content={hero} onTalkToExpert={talkToExpert} onExplore={() => scrollToSection(FIRST_SECTION_ID)} />
        {sections.map((block, index) => <Fragment key={`${block.type}-${index}`}>
            {renderBlock(block, index === 0 ? FIRST_SECTION_ID : undefined)}
        </Fragment>)}
        <FaqSection content={faq} align="center" />
        <CtaSection {...cta} onClick={talkToExpert} />
    </div>
}
