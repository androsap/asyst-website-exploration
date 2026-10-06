import { useEffect } from "react";
import { Localized, useLanguage } from "shared/i18n";

interface HeadTitleSharedProps {
    title: string | Localized<string>;
    children?: React.ReactElement;
}

export default function HeadTitleShared({ title = "", children }: HeadTitleSharedProps) {
    const language = useLanguage();
    const text = typeof title === "string" ? title : title[language];

    useEffect(() => {
        document.title = `${text}`
    })

    return <>
        {children}
    </>
}
