import { MainLayoutSharedProps } from "shared/layout/main-layout";
import "components/product/shared/product-v2.scss";
import "./shared/case-study.scss";
import { scrollToSection } from "components/product/shared/page-actions";
import HeroSection from "./sections/hero";
import FeaturedSection from "./sections/featured";
import ExplorerSection from "./sections/explorer";
import TestimonialsSection from "./sections/testimonials";
import ExperienceSection from "./sections/experience";
import CaseStudyCta from "./shared/cta";
import { CASE_STUDY_SECTION_IDS } from "./shared/section-ids";

export default function CaseStudyComponent({ }: MainLayoutSharedProps) {
    return <div className="product-v2 case-study-v2">
        <HeroSection onExplore={() => scrollToSection(CASE_STUDY_SECTION_IDS.explorer)} />
        <FeaturedSection />
        <ExplorerSection />
        <TestimonialsSection />
        <ExperienceSection />
        <CaseStudyCta />
    </div>
}
