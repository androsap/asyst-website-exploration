import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Ukuran font & line-height selalu diatur terpisah (seperti MUI), jadi class text-* tidak boleh menghapus leading-*
const twMerge = extendTailwindMerge({
    override: {
        conflictingClassGroups: {
            "font-size": [],
        },
    },
});

/** Gabungkan className (konvensi shadcn/ui). */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
