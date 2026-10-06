import HeadTitleShared from "shared/head/title";
import { Localized } from "shared/i18n";

export interface LayoutSharedProps {
    /** Teks yang sama di kedua bahasa cukup string; selain itu `localized(en, id)` */
    title: string | Localized<string>;
    render?: (prop: LayoutSharedProps) => React.ReactElement;
}

export default function LayoutShared({ render, ...others }: LayoutSharedProps) {

    return <>
        <HeadTitleShared title={others.title} />
        {render && render({ ...others })}
    </>
}
