import { MainLayoutSharedProps } from "shared/layout/main-layout";
import { EProcurementDetailConst } from "consts/product-detail/e-procurement.const";
import { useLocalized } from "shared/i18n";
import EnterpriseProductPage from "../enterprise";

export default function EProcurementDetailComponent({ }: MainLayoutSharedProps) {
    return <EnterpriseProductPage path="/product/e-procurement" content={useLocalized(EProcurementDetailConst)} />
}
