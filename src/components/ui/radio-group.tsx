import { forwardRef } from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";
import { ButtonBase } from "./button-base";
import { svgIconClass } from "./svg-icon";

/** RadioGroup (shadcn/ui, Radix). */
export const RadioGroup = RadioGroupPrimitive.Root;

const RADIO_UNCHECKED = "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z";
const RADIO_CHECKED = "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z";

export interface RadioGroupItemProps {
    value: string;
    "aria-label"?: string;
    checked: boolean;
    className?: string;
    /** Ukuran ikon (default: ukuran small pada theme modal = 1.1607rem) */
    iconClassName?: string;
    /** Warna aktif (RGB), default biru theme modal (#1976d2) */
    colorRgb?: string;
}

/**
 * Radio — tampilan & animasi identik dengan Radio MUI: lingkaran luar + titik yang membesar
 * (scale 0 -> 1, 150ms), ripple dari tengah, hover tint 4%.
 */
export const RadioGroupItem = forwardRef<HTMLButtonElement, RadioGroupItemProps>(function RadioGroupItem(
    { value, checked, className, iconClassName = "text-[1.1607142857142858rem]", colorRgb = "25 118 210", "aria-label": ariaLabel }, ref,
) {
    return <RadioGroupPrimitive.Item value={value} asChild>
        <ButtonBase
            ref={ref}
            aria-label={ariaLabel}
            centerRipple
            focusRipple
            data-slot="radio"
            // <button> mewarisi font-size & text-align seperti <span> pada Radio MUI
            className={cn("radio p-[9px] rounded-[50%] text-[rgba(0,0,0,0.6)] [font-size:inherit] [text-align:inherit]", className)}
            style={{ ["--radio-color-rgb" as string]: colorRgb }}
        >
            <span className="relative flex">
                <svg data-icon="" className={cn(svgIconClass, iconClassName, "[transform:scale(1)]")} focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                    <path d={RADIO_UNCHECKED} />
                </svg>
                <svg
                    data-icon=""
                    className={cn(
                        svgIconClass, iconClassName, "left-0 absolute",
                        checked
                            ? "[transform:scale(1)] [transition:transform_150ms_cubic-bezier(0.0,0,0.2,1)_0ms]"
                            : "[transform:scale(0)] [transition:transform_150ms_cubic-bezier(0.4,0,1,1)_0ms]",
                    )}
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                >
                    <path d={RADIO_CHECKED} />
                </svg>
            </span>
        </ButtonBase>
    </RadioGroupPrimitive.Item>
});
