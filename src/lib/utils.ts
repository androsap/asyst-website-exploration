import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
    override: {
        conflictingClassGroups: {
            "font-size": [],
        },
    },
});

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

let decoder: HTMLTextAreaElement | undefined;

export function decodeEntities(html: string) {
    decoder ??= document.createElement("textarea");
    decoder.innerHTML = html;
    return decoder.value;
}

export const scrollTo = (ref: React.RefObject<HTMLDivElement> | null) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
};
