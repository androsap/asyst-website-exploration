import { forwardRef, ReactNode, SVGProps } from "react";
import { cn } from "@/lib/utils";
import { Appearance, useAppearance } from "./appearance";

type IconFontSize = "inherit" | "small" | "medium" | "large";

export interface SvgIconProps extends Omit<SVGProps<SVGSVGElement>, "ref" | "fontSize"> {
    fontSize?: IconFontSize;
}

export type SvgIconComponent = ReturnType<typeof createIcon>;

// Default identik dengan MUI SvgIcon: 1em, fill currentColor, transisi fill 200ms, ukuran 24px
const FONT_SIZE: Record<Appearance, Record<IconFontSize, string>> = {
    app: { inherit: "text-[inherit]", small: "text-[1.25rem]", medium: "text-[1.5rem]", large: "text-[2.1875rem]" },
    // theme modal: ukuran rem x 13/14
    modal: { inherit: "text-[inherit]", small: "text-[1.1607142857142858rem]", medium: "text-[1.3928571428571428rem]", large: "text-[2.03125rem]" },
};

export const svgIconClass = "select-none w-[1em] h-[1em] inline-block fill-current shrink-0 [transition:fill_200ms_cubic-bezier(0.4,0,0.2,1)_0ms]";

/** Bungkus path SVG menjadi komponen ikon (pengganti createSvgIcon MUI). */
export function createIcon(name: string, path: ReactNode) {
    const Icon = forwardRef<SVGSVGElement, SvgIconProps>(({ className, fontSize = "medium", children, ...props }, ref) => {
        const appearance = useAppearance();
        return <svg
            ref={ref}
            data-icon=""
            className={cn(svgIconClass, FONT_SIZE[appearance][fontSize], className)}
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            {...props}
        >
            {path}
            {children}
        </svg>
    });
    Icon.displayName = `${name}Icon`;
    return Icon;
}
