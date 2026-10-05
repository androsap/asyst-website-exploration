import { MainLayoutSharedProps } from 'shared/layout/main-layout';
import { HermesDetailConst } from 'consts/product-detail/hermes.const';
import ProductDetail from '../detail';

export default function HermesDetailComponent({ }: MainLayoutSharedProps) {
    return <ProductDetail content={HermesDetailConst} />
}
