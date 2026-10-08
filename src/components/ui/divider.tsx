import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
    orientation?: "horizontal" | "vertical";
    /** middle = inset 16px (vertikal) / 32px (horizontal) seperti Divider MUI dengan spacing 16 */
    variant?: "fullWidth" | "middle";
    flexItem?: boolean;
}

/** Garis pemisah tipis — identik dengan Divider MUI (border thin, rgba(0,0,0,0.12)). */
export function Divider({ orientation = "horizontal", variant = "fullWidth", flexItem, className, ...props }: DividerProps) {
    const vertical = orientation === "vertical";
    return <hr
        data-slot="divider"
        className={cn(
            "m-0 shrink-0 border-0 border-solid border-[rgba(0,0,0,0.12)]",
            vertical ? "border-b-0 h-full [border-right-width:thin]" : "[border-bottom-width:thin]",
            variant === "middle" && (vertical ? "my-4" : "mx-8"),
            flexItem && "self-stretch h-auto",
            "opacity-100",
            className,
        )}
        {...props}
    />
}
