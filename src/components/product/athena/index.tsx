import { MainLayoutSharedProps } from "shared/layout/main-layout";
import { AthenaDetailConst } from "consts/product-detail/athena.const";
import { useLocalized } from "shared/i18n";
import EnterpriseProductPage from "../enterprise";

export default function AthenaDetailComponent({ }: MainLayoutSharedProps) {
    return <EnterpriseProductPage path="/product/athena" content={useLocalized(AthenaDetailConst)} />
}
