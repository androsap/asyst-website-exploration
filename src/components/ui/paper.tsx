import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const ELEVATION = { 0: "[box-shadow:none]", 1: "[box-shadow:0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]", 2: "[box-shadow:0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)]", 4: "[box-shadow:0px_2px_4px_-1px_rgba(0,0,0,0.2),0px_4px_5px_0px_rgba(0,0,0,0.14),0px_1px_10px_0px_rgba(0,0,0,0.12)]", 8: "[box-shadow:0px_5px_5px_-3px_rgba(0,0,0,0.2),0px_8px_10px_1px_rgba(0,0,0,0.14),0px_3px_14px_2px_rgba(0,0,0,0.12)]", 16: "[box-shadow:0px_8px_10px_-5px_rgba(0,0,0,0.2),0px_16px_24px_2px_rgba(0,0,0,0.14),0px_6px_30px_5px_rgba(0,0,0,0.12)]", 24: "[box-shadow:0px_11px_15px_-7px_rgba(0,0,0,0.2),0px_24px_38px_3px_rgba(0,0,0,0.14),0px_9px_46px_8px_rgba(0,0,0,0.12)]" } as const;

export interface PaperProps extends HTMLAttributes<HTMLDivElement> {
    elevation?: keyof typeof ELEVATION;
    square?: boolean;
}

/** Permukaan putih dengan bayangan elevation — identik dengan Paper MUI (radius 8). */
export const Paper = forwardRef<HTMLDivElement, PaperProps>(function Paper({ elevation = 1, square = false, className, ...props }, ref) {
    return <div
        ref={ref}
        data-slot="paper"
        className={cn(
            "bg-white text-[rgba(0,0,0,0.87)] [transition:box-shadow_300ms_cubic-bezier(0.4,0,0.2,1)_0ms]",
            !square && "rounded-[8px]",
            ELEVATION[elevation],
            className,
        )}
        {...props}
    />
});
