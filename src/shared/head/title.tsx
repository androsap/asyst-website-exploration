import { useEffect } from "react";

interface HeadTitleSharedProps {
    title: string;
    children?: React.ReactElement;
}

export default function HeadTitleShared({ title = "", children }: HeadTitleSharedProps) {
    useEffect(() => {
        document.title = `${title}`
    })

    return <>
        {children}
    </>
}