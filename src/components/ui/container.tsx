import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const MAX_WIDTH = {
    sm: "min-[600px]:max-w-[600px]",
    md: "min-[900px]:max-w-[900px]",
    lg: "min-[1200px]:max-w-[1200px]",
    xl: "min-[1536px]:max-w-[1536px]",
} as const;

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    maxWidth?: keyof typeof MAX_WIDTH | false;
    disableGutters?: boolean;
}

/**
 * Pembungkus konten horizontal. Gutter 32px (48px >= 600px) & max-width per breakpoint
 * mengikuti Container MUI dengan theme spacing 16.
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
    { maxWidth = "lg", disableGutters = false, className, ...props }, ref,
) {
    return <div
        ref={ref}
        data-slot="container"
        data-max-width={maxWidth || undefined}
        className={cn(
            "w-full ml-auto box-border mr-auto block",
            !disableGutters && "pl-8 pr-8 min-[600px]:pl-12 min-[600px]:pr-12",
            maxWidth && MAX_WIDTH[maxWidth],
            className,
        )}
        {...props}
    />
});
