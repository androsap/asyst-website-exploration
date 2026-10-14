import { MainLayoutSharedProps } from "shared/layout/main-layout";
import { DigitalBusinessConsultingConst } from "consts/solution-detail/digital-business-consulting.const";
import { SOLUTION_LINKS } from "consts/solution-links.const";
import { useLocalized } from "shared/i18n";
import SolutionPage from "../page";

export default function DigitalBusinessConsultingComponent({ }: MainLayoutSharedProps) {
    return <SolutionPage path={SOLUTION_LINKS.digitalConsulting} content={useLocalized(DigitalBusinessConsultingConst)} exploreSection={4} />
}
