import { MainLayoutSharedProps } from "shared/layout/main-layout";
import { SocDetailConst } from "consts/solution-detail.const";
import { useLocalized } from "shared/i18n";
import SolutionDetail from "../detail";

export default function SecurityOperationsCenterComponent({ }: MainLayoutSharedProps) {
    return <SolutionDetail content={useLocalized(SocDetailConst)} />
}
