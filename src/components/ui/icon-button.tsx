import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Appearance, useAppearance } from "./appearance";
import { ButtonBase, ButtonBaseProps } from "./button-base";

export interface IconButtonProps extends Omit<ButtonBaseProps, "centerRipple"> {
    size?: "small" | "medium";
    appearance?: Appearance;
}

// Ukuran font ikon: theme proyek vs theme modal (x 13/14)
const FONT_SIZE: Record<Appearance, Record<"small" | "medium", string>> = {
    app: { medium: "text-[1.5rem]", small: "text-[1.125rem]" },
    modal: { medium: "text-[1.3928571428571428rem]", small: "text-[1.0446428571428572rem]" },
};

/** Tombol ikon bulat — nilai visual identik dengan IconButton MUI (ripple dari tengah). */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
    { className, size = "medium", focusRipple = true, appearance: appearanceProp, ...props }, ref,
) {
    const appearance = useAppearance(appearanceProp);
    return <ButtonBase
        ref={ref}
        data-slot="icon-button"
        centerRipple
        focusRipple={focusRipple}
        className={cn(
            "text-center flex-[0_0_auto] p-2 rounded-[50%] overflow-visible text-[rgba(0,0,0,0.54)]",
            "[transition:background-color_150ms_cubic-bezier(0.4,0,0.2,1)_0ms] hover:bg-[rgba(0,0,0,0.04)] [@media(hover:none)]:hover:bg-transparent",
            "disabled:bg-transparent disabled:text-[rgba(0,0,0,0.26)]",
            FONT_SIZE[appearance][size],
            size === "small" && "p-[5px]",
            className,
        )}
        {...props}
    />
});
