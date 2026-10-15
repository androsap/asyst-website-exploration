import { useLayoutEffect } from "react";
import { Localized, useLanguage } from "shared/i18n";

interface HeadTitleSharedProps {
    title: string | Localized<string>;
}

export default function HeadTitleShared({ title = "" }: HeadTitleSharedProps) {
    const language = useLanguage();
    const text = typeof title === "string" ? title : title[language];

    useLayoutEffect(() => {
        document.title = text;
    }, [text]);

    return null;
}
