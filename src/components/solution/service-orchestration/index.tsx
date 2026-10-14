import { MainLayoutSharedProps } from "shared/layout/main-layout";
import { ServiceOrchestrationConst } from "consts/solution-detail/service-orchestration.const";
import { SOLUTION_LINKS } from "consts/solution-links.const";
import { useLocalized } from "shared/i18n";
import SolutionPage from "../page";

export default function ServiceOrchestrationComponent({ }: MainLayoutSharedProps) {
    return <SolutionPage path={SOLUTION_LINKS.serviceOrchestration} content={useLocalized(ServiceOrchestrationConst)} exploreSection={1} />
}
