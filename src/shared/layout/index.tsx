import HeadTitleShared from "shared/head/title";

export interface LayoutSharedProps {
    title: string;
    render?: (prop: LayoutSharedProps) => React.ReactElement;
}

export default function LayoutShared({ render, ...others }: LayoutSharedProps) {

    return <>
        <HeadTitleShared title={others.title} />
        {render && render({ ...others })}
    </>
}