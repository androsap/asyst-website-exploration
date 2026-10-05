import { MainLayoutSharedProps } from 'shared/layout/main-layout';
import { SmartDocumentDetailConst } from 'consts/product-detail/smart-document.const';
import ProductDetail from '../detail';

export default function SmartDocumentDetailComponent({ }: MainLayoutSharedProps) {
    return <ProductDetail content={SmartDocumentDetailConst} />
}
