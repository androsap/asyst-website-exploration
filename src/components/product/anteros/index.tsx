import { MainLayoutSharedProps } from 'shared/layout/main-layout';
import { AnterosDetailConst } from 'consts/product-detail.const';
import ProductDetail from '../detail';

export default function AnterosDetailComponent({ }: MainLayoutSharedProps) {
    return <ProductDetail content={AnterosDetailConst} />
}
