import { MainLayoutSharedProps } from 'shared/layout/main-layout';
import { ProjectManagementDetailConst } from 'consts/product-detail/project-management.const';
import ProductDetail from '../detail';

export default function ProjectManagementDetailComponent({ }: MainLayoutSharedProps) {
    return <ProductDetail content={ProjectManagementDetailConst} />
}
