import { MainLayoutSharedProps } from 'shared/layout/main-layout';
import { EleaDetailConst } from 'consts/product-detail/elea.const';
import ProductDetail from '../detail';

export default function EleaDetailComponent({ }: MainLayoutSharedProps) {
    return <ProductDetail content={EleaDetailConst} />
}
