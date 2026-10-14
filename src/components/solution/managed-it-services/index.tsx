import { MainLayoutSharedProps } from "shared/layout/main-layout";
import { ManagedItServicesConst } from "consts/solution-detail/managed-it-services.const";
import { SOLUTION_LINKS } from "consts/solution-links.const";
import { useLocalized } from "shared/i18n";
import SolutionPage from "../page";

export default function ManagedItServicesComponent({ }: MainLayoutSharedProps) {
    return <SolutionPage path={SOLUTION_LINKS.managedIt} content={useLocalized(ManagedItServicesConst)} exploreSection={1} />
}
