import { CSSProperties, ElementType, ReactNode, useRef } from "react";
import useNearViewport from "./use-near-viewport";

type LazyBackgroundProps = {
    image: string;
    as?: ElementType;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    [prop: string]: unknown;
};

export default function LazyBackground({ image, as: Component = "div", style, ...props }: LazyBackgroundProps) {
    const ref = useRef<HTMLElement>(null);
    const visible = useNearViewport(ref, "400px 100%");

    return <Component ref={ref} style={visible ? { ...style, backgroundImage: `url(${image})` } : style} {...props} />;
}
