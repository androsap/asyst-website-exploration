import { ElementType, forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Appearance, useAppearance } from "./appearance";

/**
 * Teks dengan varian tipografi theme lama (ukuran & line-height MUI).
 * Elemen default per varian sama dengan MUI (h1-h6, subtitle -> h6, body -> p, caption -> span).
 */
const VARIANTS = {
    h1: { tag: "h1", weight: "font-light leading-[1.167]", app: "text-[6rem]", modal: "text-[5.571428571428571rem]" },
    h2: { tag: "h2", weight: "font-light leading-[1.2]", app: "text-[3.75rem]", modal: "text-[3.482142857142857rem]" },
    h3: { tag: "h3", weight: "font-normal leading-[1.167]", app: "text-[3rem]", modal: "text-[2.7857142857142856rem]" },
    h4: { tag: "h4", weight: "font-normal leading-[1.235]", app: "text-[2.125rem]", modal: "text-[1.9732142857142858rem]" },
    h5: { tag: "h5", weight: "font-normal leading-[1.334]", app: "text-[1.5rem]", modal: "text-[1.3928571428571428rem]" },
    h6: { tag: "h6", weight: "font-medium leading-[1.6]", app: "text-[1.25rem]", modal: "text-[1.1607142857142858rem]" },
    subtitle1: { tag: "h6", weight: "font-normal leading-[1.75]", app: "text-[1rem]", modal: "text-[0.9285714285714286rem]" },
    subtitle2: { tag: "h6", weight: "font-medium leading-[1.57]", app: "text-[0.875rem]", modal: "text-[0.8125rem]" },
    body1: { tag: "p", weight: "font-normal leading-[1.5]", app: "text-[1rem]", modal: "text-[0.9285714285714286rem]" },
    body2: { tag: "p", weight: "font-normal leading-[1.43]", app: "text-[0.875rem]", modal: "text-[0.8125rem]" },
    caption: { tag: "span", weight: "font-normal leading-[1.66]", app: "text-[0.75rem]", modal: "text-[0.6964285714285714rem]" },
} as const;

const FONT_FAMILY: Record<Appearance, string> = { app: "font-[Inter]", modal: "font-[inherit]" };

export type TypographyVariant = keyof typeof VARIANTS;

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
    variant?: TypographyVariant;
    /** Ganti elemen HTML (mis. "span", "label", "dt") */
    component?: ElementType;
    htmlFor?: string;
    appearance?: Appearance;
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(function Typography(
    { variant = "body1", component, className, appearance: appearanceProp, ...props }, ref,
) {
    const appearance = useAppearance(appearanceProp);
    const config = VARIANTS[variant];
    const Comp = (component ?? config.tag) as ElementType;
    return <Comp
        ref={ref}
        data-slot="typography"
        data-variant={variant}
        className={cn("m-0", FONT_FAMILY[appearance], config.weight, config[appearance], className)}
        {...props}
    />
});
