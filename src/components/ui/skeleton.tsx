import { CSSProperties, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: "text" | "rounded" | "rectangular";
    width?: CSSProperties["width"];
    height?: CSSProperties["height"];
}

const VARIANTS = {
    // text: tinggi mengikuti font, di-scale 60% vertikal (seperti Skeleton MUI)
    text: "h-auto mt-0 mb-0 origin-[0_55%] [transform:scale(1,0.60)] rounded-[8px/13.3px] empty:before:content-['\\00a0']",
    rounded: "h-[1.2em] rounded-[8px]",
    rectangular: "h-[1.2em]",
};

/** Placeholder loading berdenyut (pulse 2s) — identik dengan Skeleton MUI. */
export function Skeleton({ variant = "text", width, height, className, style, ...props }: SkeletonProps) {
    return <span
        data-slot="skeleton"
        data-variant={variant}
        className={cn("block bg-[rgba(0,0,0,0.11)] animate-mui-pulse", VARIANTS[variant], className)}
        style={{ width, height, ...style }}
        {...props}
    />
}
