import { MainLayoutSharedProps } from "shared/layout/main-layout";
import { SmartDocumentDetailConst } from "consts/product-detail/smart-document.const";
import { useLocalized } from "shared/i18n";
import EnterpriseProductPage from "../enterprise";

export default function SmartDocumentDetailComponent({ }: MainLayoutSharedProps) {
    return <EnterpriseProductPage path="/product/smart-document" content={useLocalized(SmartDocumentDetailConst)} />
}
