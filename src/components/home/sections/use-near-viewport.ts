import { RefObject, useEffect, useState } from "react";

export default function useNearViewport(ref: RefObject<Element>, rootMargin = "400px 0px") {
    const [near, setNear] = useState(typeof IntersectionObserver === "undefined");

    useEffect(() => {
        const el = ref.current;
        if (near || !el) return;
        const observer = new IntersectionObserver(entries => {
            if (!entries.some(entry => entry.isIntersecting)) return;
            observer.disconnect();
            setNear(true);
        }, { rootMargin });
        observer.observe(el);
        return () => observer.disconnect();
    }, [near, ref, rootMargin]);

    return near;
}
