import { MainLayoutSharedProps } from 'shared/layout/main-layout';
import { AmalaDetailConst } from 'consts/product-detail.const';
import ProductDetail from '../detail';

export default function AmalaDetailComponent({ }: MainLayoutSharedProps) {
    return <ProductDetail content={AmalaDetailConst} />
}
