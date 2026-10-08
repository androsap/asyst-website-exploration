import { useSyncExternalStore } from "react";

/** Status media query CSS (pengganti useMediaQuery MUI). */
export function useMediaQuery(query: string) {
    const normalized = query.replace(/^@media( ?)/m, "");
    return useSyncExternalStore(
        callback => {
            const list = window.matchMedia(normalized);
            list.addEventListener("change", callback);
            return () => list.removeEventListener("change", callback);
        },
        () => window.matchMedia(normalized).matches,
        () => false,
    );
}
