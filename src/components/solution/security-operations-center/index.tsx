import { MainLayoutSharedProps } from "shared/layout/main-layout";
import { SocDetailConst } from "consts/solution-detail.const";
import SolutionDetail from "../detail";

export default function SecurityOperationsCenterComponent({ }: MainLayoutSharedProps) {
    return <SolutionDetail content={SocDetailConst} />
}
