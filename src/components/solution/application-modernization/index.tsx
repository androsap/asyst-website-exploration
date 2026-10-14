import { MainLayoutSharedProps } from "shared/layout/main-layout";
import { ApplicationModernizationConst } from "consts/solution-detail/application-modernization.const";
import { SOLUTION_LINKS } from "consts/solution-links.const";
import { useLocalized } from "shared/i18n";
import SolutionPage from "../page";

export default function ApplicationModernizationComponent({ }: MainLayoutSharedProps) {
    return <SolutionPage path={SOLUTION_LINKS.appModernization} content={useLocalized(ApplicationModernizationConst)} exploreSection={2} />
}
