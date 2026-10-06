import { MainLayoutSharedProps } from 'shared/layout/main-layout';
import { ApolloDetailConst } from 'consts/product-detail/apollo.const';
import { useLocalized } from 'shared/i18n';
import ProductDetail from '../detail';

export default function ApolloDetailComponent({ }: MainLayoutSharedProps) {
    return <ProductDetail content={useLocalized(ApolloDetailConst)} />
}
