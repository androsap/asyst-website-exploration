import { MainLayoutSharedProps } from "shared/layout/main-layout";
import "components/home/sections/home.scss";
import "./sections/about.scss";
import AboutHeroSection from "./sections/hero";
import AboutIntroSection from "./sections/intro";
import LeadersSection from "./sections/leaders";
import PrinciplesSection from "./sections/principles";
import ClientsSection from "./sections/clients";
import ConsultingAreasSection from "./sections/consulting-areas";
import JoinTeamSection from "./sections/join-team";

export default function AboutUsComponent({ }: MainLayoutSharedProps) {
    return <div className="home-v2 about-v2">
        <AboutHeroSection />
        <AboutIntroSection />
        <LeadersSection />
        <PrinciplesSection />
        <ClientsSection />
        <ConsultingAreasSection />
        <JoinTeamSection />
    </div>
}
