import { MainLayoutSharedProps } from "shared/layout/main-layout";
import { AviationDetailConst } from "consts/industry-detail.const";
import { useLocalized } from "shared/i18n";
import IndustryDetail from "../detail";

export default function AviationIndustryComponent({ }: MainLayoutSharedProps) {
    return <IndustryDetail content={useLocalized(AviationDetailConst)} />
}
