import Box from "@mui/material/Box";
import "../shared/product-v2.scss";
import { ProductDetailContent } from "consts/product-detail.const";
import { askAsystModal, scrollToSection, SECTION_IDS, useTalkToExpert } from "../shared/page-actions";
import CtaSection from "../shared/cta";
import HeroSection from "./sections/hero";
import OverviewSection from "./sections/overview";
import LifecycleSection from "./sections/lifecycle";
import FeaturesSection from "./sections/features";
import HowItWorksSection from "./sections/how-it-works";
import BusinessModelsSection from "./sections/business-models";
import FaqSection from "./sections/faq";

interface ProductDetailProps {
    content: ProductDetailContent;
}

/** Layout halaman detail produk (revamp 2026). Konten per produk ada di consts/product-detail.const. */
export default function ProductDetail({ content }: ProductDetailProps) {
    const talkToExpert = useTalkToExpert();

    return <Box className="product-v2">
        <HeroSection content={content.hero} onTalkToExpert={talkToExpert} onExplore={() => scrollToSection(SECTION_IDS.lifecycle)} />
        <OverviewSection content={content.overview} />
        <LifecycleSection content={content.lifecycle} />
        <FeaturesSection content={content.features} />
        <HowItWorksSection content={content.howItWorks} />
        <BusinessModelsSection content={content.businessModels} />
        <FaqSection content={content.faq} />
        <CtaSection {...content.cta} onClick={() => askAsystModal("product-demo")} />
    </Box>
}
