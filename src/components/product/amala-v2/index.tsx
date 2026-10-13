import { MainLayoutSharedProps } from "shared/layout/main-layout";
import { AmalaV2DetailConst } from "consts/product-detail/amala-v2.const";
import { useLocalized } from "shared/i18n";
import EnterpriseProductPage from "../enterprise";

export default function AmalaV2DetailComponent({ }: MainLayoutSharedProps) {
    return <EnterpriseProductPage path="/product/amala-v2" content={useLocalized(AmalaV2DetailConst)} />
}
