import { MainLayoutSharedProps } from "shared/layout/main-layout";
import { AmalaDetailConst } from "consts/product-detail/amala.const";
import { useLocalized } from "shared/i18n";
import EnterpriseProductPage from "../enterprise";

export default function AmalaDetailComponent({ }: MainLayoutSharedProps) {
    return <EnterpriseProductPage path="/product/amala" content={useLocalized(AmalaDetailConst)} />
}
