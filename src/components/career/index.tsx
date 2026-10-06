import Box from "@mui/material/Box";
import { MainLayoutSharedProps } from "shared/layout/main-layout";
import "components/product/shared/product-v2.scss";
import "./shared/career.scss";
import { CAREER_BASE_PATH, CareerFaqConst, CareerHeroConst, CareerSeoConst } from "consts/career.const";
import useSeo from "shared/head/seo";
import { useLocalized, useT } from "shared/i18n";
import CareerFaq from "./shared/faq";
import { breadcrumbSchema, faqSchema } from "./shared/seo";
import HeroSection from "./sections/hero";
import ValuesSection from "./sections/values";
import OpportunitySection from "./sections/opportunity";
import LifeSection from "./sections/life";
import WhySection from "./sections/why";
import IndonesiaSection from "./sections/indonesia";
import InternshipSection from "./sections/internship";

/** Halaman utama Career (revamp 2026). Memakai gaya dasar product-v2 + tambahan career. */
export default function CareerComponent({ }: MainLayoutSharedProps) {
    const t = useT();
    const faq = useLocalized(CareerFaqConst);

    useSeo({
        ...useLocalized(CareerSeoConst).career,
        path: CAREER_BASE_PATH,
        image: CareerHeroConst.EN.image,
        jsonLd: [
            breadcrumbSchema([{ name: t("Career", "Karier"), path: CAREER_BASE_PATH }], t("Home", "Beranda")),
            faqSchema(faq.items),
        ],
    });

    return <Box className="product-v2 career-v2">
        <HeroSection />
        <ValuesSection />
        <OpportunitySection />
        <LifeSection />
        <WhySection />
        <IndonesiaSection />
        <InternshipSection />
        <CareerFaq {...faq} />
    </Box>
}
