import { CSSProperties, ElementType, ReactNode, useRef } from "react";
import useNearViewport from "./use-near-viewport";

type LazyBackgroundProps = {
    image: string;
    /** Elemen yang dirender (default div), mis. `Link` */
    as?: ElementType;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    [prop: string]: unknown;
};

/**
 * Pengganti `style={{ backgroundImage }}` yang baru memasang gambar saat elemen mendekati viewport
 * (background CSS tidak bisa `loading="lazy"` seperti <img>).
 * Margin horizontal 100% supaya slide Swiper berikutnya ikut termuat.
 */
export default function LazyBackground({ image, as: Component = "div", style, ...props }: LazyBackgroundProps) {
    const ref = useRef<HTMLElement>(null);
    const visible = useNearViewport(ref, "400px 100%");

    return <Component ref={ref} style={visible ? { ...style, backgroundImage: `url(${image})` } : style} {...props} />;
}
