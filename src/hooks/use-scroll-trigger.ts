import { useEffect, useState } from "react";

/** true saat halaman sudah di-scroll melewati `threshold` px (pengganti useScrollTrigger MUI dengan disableHysteresis). */
export function useScrollTrigger(threshold = 100) {
    const [trigger, setTrigger] = useState(() => typeof window !== "undefined" && window.pageYOffset > threshold);

    useEffect(() => {
        const handle = () => setTrigger(window.pageYOffset > threshold);
        handle();
        window.addEventListener("scroll", handle, { passive: true });
        return () => window.removeEventListener("scroll", handle);
    }, [threshold]);

    return trigger;
}
