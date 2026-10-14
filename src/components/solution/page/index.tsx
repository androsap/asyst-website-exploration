import { Fragment } from "react";
import "components/product/shared/product-v2.scss";
import "components/product/enterprise/enterprise.scss";
import "./solution-page.scss";
import { SolutionBlock, SolutionPageContent } from "consts/solution-detail/solution-page.types";
import { SOLUTION_BASE_PATH } from "consts/solution-links.const";
import useSeo from "shared/head/seo";
import { breadcrumbSchema, faqSchema } from "shared/head/schema";
import { useT } from "shared/i18n";
import { scrollToSection, useTalkToExpert } from "components/product/shared/page-actions";
import CtaSection from "components/product/shared/cta";
import FaqSection from "components/product/detail/sections/faq";
import TimelineSection from "components/product/enterprise/sections/timeline";
import HeroSection from "./sections/hero";
import ClientsSection from "./sections/clients";
import IntroSection from "./sections/intro";
import CardsSection from "./sections/cards";
import MatrixSection from "./sections/matrix";
import CarouselSection from "./sections/carousel";
import StepsSection from "./sections/steps";
import TabsSection from "./sections/tabs";
import ListSection from "./sections/list";

const FIRST_SECTION_ID = "solution-overview";

interface SolutionPageProps {
    path: string;
    content: SolutionPageContent;
    exploreSection?: number;
}

const renderBlock = (block: SolutionBlock, id?: string) => {
    switch (block.type) {
        case "intro": return <IntroSection id={id} content={block} />;
        case "cards": return <CardsSection id={id} content={block} />;
        case "matrix": return <MatrixSection id={id} content={block} />;
        case "carousel": return <CarouselSection id={id} content={block} />;
        case "steps": return <StepsSection id={id} content={block} />;
        case "tabs": return <TabsSection id={id} content={block} />;
        case "list": return <ListSection id={id} content={block} />;
        case "timeline": return <TimelineSection id={id} content={block} />;
    }
};

export default function SolutionPage({ path, content, exploreSection = 0 }: SolutionPageProps) {
    const t = useT();
    const talkToExpert = useTalkToExpert("it-solutions");
    const { seo, hero, sections, faq, cta } = content;

    useSeo({
        ...seo,
        path,
        jsonLd: [
            breadcrumbSchema([
                { name: t("Solutions", "Solusi"), path: SOLUTION_BASE_PATH },
                { name: hero.breadcrumb, path },
            ], t("Home", "Beranda")),
            faqSchema(faq.items),
        ],
    });

    return <div className="product-v2 product-enterprise solution-page">
        <HeroSection content={hero} onPrimary={talkToExpert} onSecondary={() => scrollToSection(FIRST_SECTION_ID)} />
        <ClientsSection />
        {sections.map((block, index) => <Fragment key={`${block.type}-${index}`}>
            {renderBlock(block, index === exploreSection ? FIRST_SECTION_ID : undefined)}
        </Fragment>)}
        <FaqSection content={faq} align="center" />
        <CtaSection {...cta} onClick={talkToExpert} />
    </div>
}
