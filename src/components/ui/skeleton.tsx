import { CSSProperties, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: "text" | "rounded" | "rectangular";
    width?: CSSProperties["width"];
    height?: CSSProperties["height"];
}

const VARIANTS = {
    text: "h-[1.5em] mt-0 mb-0 origin-[0_55%] [transform:scale(1,0.60)] rounded-[8px/13.3px]",
    rounded: "h-[1.2em] rounded-[8px]",
    rectangular: "h-[1.2em]",
};

export function Skeleton({ variant = "text", width, height, className, style, ...props }: SkeletonProps) {
    return <span
        data-slot="skeleton"
        data-variant={variant}
        className={cn("block bg-[rgba(0,0,0,0.11)] animate-mui-pulse", VARIANTS[variant], className)}
        style={{ width, height, ...style }}
        {...props}
    />
}
