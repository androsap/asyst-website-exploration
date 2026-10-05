import Box from "@mui/material/Box";
import { Navigate, useParams } from "react-router-dom";
import { MainLayoutSharedProps } from "shared/layout/main-layout";
import "components/product/shared/product-v2.scss";
import "../shared/case-study.scss";
import { CASE_STUDY_BASE_PATH, CaseStudyDetailsConst } from "consts/case-study.const";
import { scrollToSection } from "components/product/shared/page-actions";
import CaseStudyCta from "../shared/cta";
import { CASE_STUDY_SECTION_IDS } from "../shared/section-ids";
import OverviewSection from "./sections/overview";
import SolutionSection from "./sections/solution";
import TechnologiesSection from "./sections/technologies";
import ApproachSection from "./sections/approach";
import OutcomeSection from "./sections/outcome";

/** Halaman detail case study (/case-study/:slug). Konten per case ada di consts/case-study.const. */
export default function CaseStudyDetailComponent({ }: MainLayoutSharedProps) {
    const { slug = "" } = useParams();
    const content = CaseStudyDetailsConst[slug];

    if (!content) return <Navigate to={CASE_STUDY_BASE_PATH} replace />;

    return <Box className="product-v2 case-study-v2">
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
    </Box>
}
