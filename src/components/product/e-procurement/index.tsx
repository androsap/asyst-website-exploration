import { MainLayoutSharedProps } from 'shared/layout/main-layout';
import { EProcurementDetailConst } from 'consts/product-detail/e-procurement.const';
import ProductDetail from '../detail';

export default function EProcurementDetailComponent({ }: MainLayoutSharedProps) {
    return <ProductDetail content={EProcurementDetailConst} />
}
