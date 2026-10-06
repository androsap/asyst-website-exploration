import { MainLayoutSharedProps } from 'shared/layout/main-layout';
import { SmartDocumentDetailConst } from 'consts/product-detail/smart-document.const';
import { useLocalized } from 'shared/i18n';
import ProductDetail from '../detail';

export default function SmartDocumentDetailComponent({ }: MainLayoutSharedProps) {
    return <ProductDetail content={useLocalized(SmartDocumentDetailConst)} />
}
