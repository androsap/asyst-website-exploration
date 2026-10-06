import { MainLayoutSharedProps } from 'shared/layout/main-layout';
import { EleaDetailConst } from 'consts/product-detail/elea.const';
import { useLocalized } from 'shared/i18n';
import ProductDetail from '../detail';

export default function EleaDetailComponent({ }: MainLayoutSharedProps) {
    return <ProductDetail content={useLocalized(EleaDetailConst)} />
}
