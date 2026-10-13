import { MainLayoutSharedProps } from "shared/layout/main-layout";
import { ApolloDetailConst } from "consts/product-detail/apollo.const";
import { useLocalized } from "shared/i18n";
import EnterpriseProductPage from "../enterprise";

export default function ApolloDetailComponent({ }: MainLayoutSharedProps) {
    return <EnterpriseProductPage path="/product/apollo" content={useLocalized(ApolloDetailConst)} />
}
