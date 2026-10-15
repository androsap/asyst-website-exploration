import { Navigate, useParams } from "react-router-dom";
import { MainLayoutSharedProps } from "shared/layout/main-layout";
import "components/product/shared/product-v2.scss";
import "../shared/case-study.scss";
import { CASE_STUDY_BASE_PATH, CaseStudyDetailContent, CaseStudyDetailsConst } from "consts/case-study.const";
import useSeo, { SITE_NAME } from "shared/head/seo";
import { scrollToSection } from "components/product/shared/page-actions";
import { useLocalized, useT } from "shared/i18n";
import { breadcrumbSchema } from "shared/head/schema";
import CaseStudyCta from "../shared/cta";
import { CASE_STUDY_SECTION_IDS } from "../shared/section-ids";
import OverviewSection from "./sections/overview";
import SolutionSection from "./sections/solution";
import TechnologiesSection from "./sections/technologies";
import ApproachSection from "./sections/approach";
import OutcomeSection from "./sections/outcome";

function CaseStudySeo({ slug, hero }: { slug: string; hero: CaseStudyDetailContent["hero"] }) {
    const t = useT();
    const path = `${CASE_STUDY_BASE_PATH}/${slug}`;
    useSeo({
        title: `${hero.title} | ${SITE_NAME}`,
        description: hero.description,
        path,
        image: hero.image,
        type: "article",
        jsonLd: breadcrumbSchema([
            { name: t("Case Study", "Studi Kasus"), path: CASE_STUDY_BASE_PATH },
            { name: hero.title, path },
        ], t("Home", "Beranda")),
    });
    return null;
}

export default function CaseStudyDetailComponent({ }: MainLayoutSharedProps) {
    const { slug = "" } = useParams();
    const content = useLocalized(CaseStudyDetailsConst)[slug];

    if (!content) return <Navigate to={CASE_STUDY_BASE_PATH} replace />;

    return <div className="product-v2 case-study-v2">
        <CaseStudySeo slug={slug} hero={content.hero} />
        <OverviewSection
            hero={content.hero}
            summary={content.summary}
            challenge={content.challenge}
            onViewArchitecture={() => scrollToSection(CASE_STUDY_SECTION_IDS.solution)}
        />
        <SolutionSection content={content.solution} />
        <TechnologiesSection content={content.technologies} />
        <ApproachSection content={content.approach} />
        <OutcomeSection outcome={content.outcome} related={content.related} />
        <CaseStudyCta />
    </div>
}
