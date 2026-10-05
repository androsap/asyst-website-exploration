import { MainLayoutSharedProps } from "shared/layout/main-layout";
import { AviationDetailConst } from "consts/industry-detail.const";
import IndustryDetail from "../detail";

export default function AviationIndustryComponent({ }: MainLayoutSharedProps) {
    return <IndustryDetail content={AviationDetailConst} />
}
