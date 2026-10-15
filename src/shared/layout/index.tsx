import { useLocation } from "react-router-dom";
import HeadTitleShared from "shared/head/title";
import useSeo, { useNoIndex } from "shared/head/seo";
import { PageSeo, PageSeoConst } from "consts/seo.const";
import { Localized, useLocalized } from "shared/i18n";

export interface LayoutSharedProps {
    title: string | Localized<string>;
    noindex?: boolean;
    render?: (prop: LayoutSharedProps) => React.ReactElement;
}

function RouteSeo({ path, content }: { path: string; content: Localized<PageSeo> }) {
    useSeo({ ...useLocalized(content), path });
    return null;
}

export default function LayoutShared({ render, ...others }: LayoutSharedProps) {
    const path = useLocation().pathname.replace(/(.)\/$/, "$1");
    const seo = PageSeoConst[path];
    useNoIndex(!!others.noindex);

    return <>
        <HeadTitleShared title={seo ? { EN: seo.EN.title, ID: seo.ID.title } : others.title} />
        {seo && <RouteSeo key={path} path={path} content={seo} />}
        {render && render({ ...others })}
    </>
}
