import { MainLayoutSharedProps } from 'shared/layout/main-layout';
import { ChronusDetailConst } from 'consts/product-detail/chronus.const';
import ProductDetail from '../detail';

export default function ChronusDetailComponent({ }: MainLayoutSharedProps) {
    return <ProductDetail content={ChronusDetailConst} />
}
