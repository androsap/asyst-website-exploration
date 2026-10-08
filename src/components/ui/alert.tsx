import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { svgIconClass } from "./svg-icon";

const SUCCESS_ICON = "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z";

/** Alert "success" (shadcn/ui Alert) — warna, ikon & ukuran identik dengan Alert MUI standard success. */
export function Alert({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return <div
        role="alert"
        data-slot="alert"
        className={cn(
            "bg-[rgb(245,249,239)] text-[rgb(64,79,38)] [transition:box-shadow_300ms_cubic-bezier(0.4,0,0.2,1)_0ms] rounded-[8px] [box-shadow:none]",
            "font-[Inter] font-normal text-[0.875rem] leading-[1.43] flex py-[6px] px-4",
            className,
        )}
        {...props}
    >
        <div className="mr-3 py-[7px] px-0 flex text-[22px] opacity-90 text-[#89BA3A]">
            <svg data-icon="" className={cn(svgIconClass, "text-[inherit]")} focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d={SUCCESS_ICON} /></svg>
        </div>
        <div className="py-2 px-0 min-w-0 overflow-auto">{children}</div>
    </div>
}
