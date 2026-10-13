import { MainLayoutSharedProps } from "shared/layout/main-layout";
import { HermesDetailConst } from "consts/product-detail/hermes.const";
import { useLocalized } from "shared/i18n";
import EnterpriseProductPage from "../enterprise";

export default function HermesDetailComponent({ }: MainLayoutSharedProps) {
    return <EnterpriseProductPage path="/product/hermes" content={useLocalized(HermesDetailConst)} />
}
