import { MainLayoutSharedProps } from 'shared/layout/main-layout';
import { ProjectManagementDetailConst } from 'consts/product-detail/project-management.const';
import { useLocalized } from 'shared/i18n';
import ProductDetail from '../detail';

export default function ProjectManagementDetailComponent({ }: MainLayoutSharedProps) {
    return <ProductDetail content={useLocalized(ProjectManagementDetailConst)} />
}
