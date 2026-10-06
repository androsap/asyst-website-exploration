import { MainLayoutSharedProps } from 'shared/layout/main-layout';
import { HermesDetailConst } from 'consts/product-detail/hermes.const';
import { useLocalized } from 'shared/i18n';
import ProductDetail from '../detail';

export default function HermesDetailComponent({ }: MainLayoutSharedProps) {
    return <ProductDetail content={useLocalized(HermesDetailConst)} />
}
