import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

export default function useSwiperNav() {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [edges, setEdges] = useState({ isBeginning: true, isEnd: false });

    const sync = (s: SwiperType) => setEdges({ isBeginning: s.isBeginning, isEnd: s.isEnd });

    return {
        swiperProps: {
            onSwiper: (s: SwiperType) => { setSwiper(s); sync(s); },
            onSlideChange: sync,
            onResize: sync,
        },
        navProps: {
            ...edges,
            onPrev: () => swiper?.slidePrev(),
            onNext: () => swiper?.slideNext(),
        },
    };
}
