import MainLayoutShared, { MainLayoutSharedProps } from "shared/layout/main-layout";
import { mapLocalized } from "shared/i18n";
import { NotFoundConst } from "consts/not-found.const";
import NotFoundComponent from ".";

const props: MainLayoutSharedProps = {
    title: mapLocalized(NotFoundConst, content => content.seoTitle),
    defaultNav: true
}

export default function NotFoundPage() {
    return <MainLayoutShared {...props}>
        <NotFoundComponent />
    </MainLayoutShared>
}
