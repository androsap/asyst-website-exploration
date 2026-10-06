import { MainLayoutSharedProps } from 'shared/layout/main-layout';
import { AmalaDetailConst } from 'consts/product-detail.const';
import { useLocalized } from 'shared/i18n';
import ProductDetail from '../detail';

export default function AmalaDetailComponent({ }: MainLayoutSharedProps) {
    return <ProductDetail content={useLocalized(AmalaDetailConst)} />
}
