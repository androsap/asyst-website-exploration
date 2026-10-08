import { FocusEvent, InputHTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";
import { inputClass } from "./text-field";

export interface InputBaseProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
    /** Class untuk elemen root (pembungkus) */
    className?: string;
    inputProps?: Record<string, unknown>;
}

/** Input polos tanpa outline — struktur & nilai visual identik dengan InputBase MUI (theme proyek). */
export function InputBase({ className, inputProps, onFocus, onBlur, ...props }: InputBaseProps) {
    const [focused, setFocused] = useState(false);

    return <div
        data-slot="input-root"
        data-focused={focused ? "true" : undefined}
        className={cn("font-[Inter] font-normal text-[1rem] leading-[1.4375em] text-[rgba(0,0,0,0.87)] box-border relative cursor-text inline-flex items-center", className)}
    >
        <input
            type="text"
            data-slot="input"
            className={cn(inputClass, "pt-1 pb-[5px] px-0")}
            onFocus={(e: FocusEvent<HTMLInputElement>) => { setFocused(true); onFocus?.(e); }}
            onBlur={(e: FocusEvent<HTMLInputElement>) => { setFocused(false); onBlur?.(e); }}
            {...props}
            {...inputProps}
        />
    </div>
}
