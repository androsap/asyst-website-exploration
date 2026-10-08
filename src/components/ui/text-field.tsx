import { ChangeEvent, CSSProperties, FocusEvent, forwardRef, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes, useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useAppearance } from "./appearance";

/**
 * Input outlined (pengganti TextField MUI). Struktur DOM, ukuran, outline ber-notch, floating label,
 * helper text, dan auto-resize multiline sama dengan MUI.
 *
 * appearance:
 * - "app"   : theme proyek (Source Sans Pro 13px, fokus #2775BB) — halaman Contact Us
 * - "modal" : theme bawaan modal lama (font inherit, 0.9286rem, fokus #1976d2) — modal Ask Asyst & Request Demo
 */
export type InputAppearance = "app" | "modal";

const APPEARANCE: Record<InputAppearance, { root: string; focus: string; helper: string }> = {
    app: { root: "font-['Source_Sans_Pro'] text-[13px]", focus: "#2775BB", helper: "font-[Inter] text-[0.75rem]" },
    modal: { root: "font-[inherit] text-[0.9285714285714286rem]", focus: "#1976d2", helper: "font-[inherit] text-[0.6964285714285714rem]" },
};

// Label: theme proyek meng-override 14px Source Sans Pro; theme modal menggeser top 2px
const LABEL_APPEARANCE: Record<InputAppearance, string> = {
    app: "font-['Source_Sans_Pro'] text-[14px] top-0",
    modal: "font-[inherit] text-[0.9285714285714286rem] top-[2px]",
};

export const formControlClass = "inline-flex flex-col relative min-w-0 p-0 m-0 border-0 align-top";

export const outlinedRootClass = (appearance: InputAppearance, fullWidth?: boolean) => cn(
    "outlined-input font-normal leading-[1.4375em] text-[rgba(0,0,0,0.87)] box-border relative cursor-text inline-flex items-center rounded-[8px]",
    APPEARANCE[appearance].root,
    fullWidth && "w-full",
);

export const inputClass = cn(
    "[font:inherit] tracking-[inherit] text-current border-0 border-none border-current [-webkit-tap-highlight-color:transparent] box-content bg-none bg-transparent h-[1.4375em] m-0 block min-w-0 w-full",
    "[animation-name:mui-auto-fill-cancel] [animation-duration:10ms] focus:[outline:0] invalid:[box-shadow:none]",
    "placeholder:text-current placeholder:opacity-[0.42] placeholder:[transition:opacity_200ms_cubic-bezier(0.4,0,0.2,1)_0ms]",
    "autofill:[animation-duration:5000s] autofill:[animation-name:mui-auto-fill] autofill:rounded-[inherit]",
);

export const inputPadding = { medium: "py-[16.5px] px-[14px]", small: "py-[8.5px] px-[14px]" };

export function focusVars(appearance: InputAppearance): CSSProperties {
    return { ["--input-focus-color" as string]: APPEARANCE[appearance].focus };
}

/** Outline ber-notch: legend memberi celah untuk label yang melayang. */
export function NotchedOutline({ label, notched, className }: { label?: ReactNode; notched: boolean; className?: string }) {
    return <fieldset
        aria-hidden="true"
        data-slot="input-outline"
        className={cn(
            "outlined-input__outline text-left absolute bottom-0 right-0 -top-[5px] left-0 m-0 px-2 py-0 pointer-events-none rounded-[inherit]",
            "border-solid border border-[rgba(0,0,0,0.23)] overflow-hidden min-w-[0%]",
            className,
        )}
    >
        {label
            ? <legend className={cn(
                "[float:unset] w-auto overflow-hidden block p-0 h-[11px] text-[0.75em] invisible whitespace-nowrap",
                notched
                    ? "max-w-full [transition:max-width_100ms_cubic-bezier(0.0,0,0.2,1)_50ms]"
                    : "max-w-[0.01px] [transition:max-width_50ms_cubic-bezier(0.0,0,0.2,1)_0ms]",
            )}>
                <span className="px-[5px] inline-block opacity-0 visible">{label}</span>
            </legend>
            : <legend className="[float:unset] w-auto overflow-hidden p-0 leading-[11px] [transition:width_150ms_cubic-bezier(0.0,0,0.2,1)_0ms]">
                <span className="notranslate">&#8203;</span>
            </legend>}
    </fieldset>
}

export function HelperText({ id, error, appearance, size, children }: { id?: string; error?: boolean; appearance: InputAppearance; size: "small" | "medium"; children: ReactNode }) {
    return <p
        id={id}
        data-slot="helper-text"
        data-error={error ? "true" : undefined}
        className={cn(
            "helper-text text-[rgba(0,0,0,0.6)] font-normal leading-[1.66] text-left mr-[14px] mb-0 ml-[14px]",
            APPEARANCE[appearance].helper,
            size === "small" ? "mt-1" : "mt-[3px]",
        )}
    >
        {children}
    </p>
}

// ---------- Textarea auto-resize (port TextareaAutosize MUI) ----------
const getStyleValue = (value: string) => parseInt(value, 10) || 0;
const shadowStyle: CSSProperties = { visibility: "hidden", position: "absolute", overflow: "hidden", height: 0, top: 0, left: 0, transform: "translateZ(0)" };

const TextareaAutosize = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement> & { minRows?: number }>(function TextareaAutosize(
    { minRows = 1, onChange, style, value, className, placeholder, ...props }, forwardedRef,
) {
    const isControlled = useRef(value != null).current;
    const inputRef = useRef<HTMLTextAreaElement | null>(null);
    const shadowRef = useRef<HTMLTextAreaElement>(null);
    const heightRef = useRef<number | null>(null);

    const setRef = (node: HTMLTextAreaElement | null) => {
        inputRef.current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
    };

    const calculate = useCallback(() => {
        const input = (inputRef.current as HTMLTextAreaElement);
        const computed = window.getComputedStyle(input);
        if (computed.width === "0px") return { outerHeightStyle: 0, overflowing: false };
        const shadow = (shadowRef.current as HTMLTextAreaElement);
        shadow.style.width = computed.width;
        shadow.value = input.value || placeholder || "x";
        if (shadow.value.slice(-1) === "\n") shadow.value += " ";
        const padding = getStyleValue(computed.paddingBottom) + getStyleValue(computed.paddingTop);
        const border = getStyleValue(computed.borderBottomWidth) + getStyleValue(computed.borderTopWidth);
        const innerHeight = shadow.scrollHeight;
        shadow.value = "x";
        const singleRowHeight = shadow.scrollHeight;
        let outerHeight = innerHeight;
        if (minRows) outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
        outerHeight = Math.max(outerHeight, singleRowHeight);
        return {
            outerHeightStyle: outerHeight + (computed.boxSizing === "border-box" ? padding + border : 0),
            overflowing: Math.abs(outerHeight - innerHeight) <= 1,
        };
    }, [minRows, placeholder]);

    const syncHeight = useCallback(() => {
        const result = calculate();
        if (result.outerHeightStyle === 0 && !result.overflowing) return;
        const input = (inputRef.current as HTMLTextAreaElement);
        if (heightRef.current !== result.outerHeightStyle) {
            heightRef.current = result.outerHeightStyle;
            input.style.height = `${result.outerHeightStyle}px`;
        }
        input.style.overflow = result.overflowing ? "hidden" : "";
    }, [calculate]);

    useLayoutEffect(() => {
        let timer: number;
        const debounced = () => { window.clearTimeout(timer); timer = window.setTimeout(syncHeight, 166); };
        window.addEventListener("resize", debounced);
        const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(syncHeight) : null;
        observer?.observe((inputRef.current as HTMLTextAreaElement));
        return () => { window.clearTimeout(timer); window.removeEventListener("resize", debounced); observer?.disconnect(); };
    }, [syncHeight]);

    useLayoutEffect(() => { syncHeight(); });

    return <>
        <textarea
            value={value}
            onChange={e => { if (!isControlled) syncHeight(); onChange?.(e); }}
            ref={setRef}
            rows={minRows}
            style={style}
            className={className}
            placeholder={placeholder}
            {...props}
        />
        <textarea
            aria-hidden
            data-input=""
            className={className}
            readOnly
            ref={shadowRef}
            tabIndex={-1}
            style={{ ...shadowStyle, ...style, paddingTop: 0, paddingBottom: 0 }}
        />
    </>
});

// ---------- TextField ----------
type NativeProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "onChange"> & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange">;

export interface TextFieldProps extends Omit<NativeProps, "className" | "style"> {
    appearance?: InputAppearance;
    size?: "small" | "medium";
    fullWidth?: boolean;
    multiline?: boolean;
    minRows?: number;
    label?: ReactNode;
    error?: boolean;
    helperText?: ReactNode;
    className?: string;
    inputProps?: Record<string, unknown>;
    onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export function TextField({
    appearance: appearanceProp, size = "medium", fullWidth, multiline, minRows, label, error, helperText, className, inputProps,
    id: idProp, value, defaultValue, onChange, onFocus, onBlur, ...props
}: TextFieldProps) {
    const appearance = useAppearance(appearanceProp);
    const autoId = useId();
    const id = idProp ?? autoId;
    const helperId = helperText ? `${id}-helper-text` : undefined;
    const [focused, setFocused] = useState(false);
    const [filled, setFilled] = useState(() => value != null ? String(value) !== "" : defaultValue != null && String(defaultValue) !== "");

    useEffect(() => {
        if (value != null) setFilled(String(value) !== "");
    }, [value]);

    const shrink = !!label && (focused || filled);
    const state = { "data-focused": focused ? "true" : undefined, "data-error": error ? "true" : undefined };

    const handlers = {
        onFocus: (e: FocusEvent<HTMLInputElement & HTMLTextAreaElement>) => { setFocused(true); onFocus?.(e); },
        onBlur: (e: FocusEvent<HTMLInputElement & HTMLTextAreaElement>) => { setFocused(false); onBlur?.(e); },
        onChange: (e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
            if (value == null) setFilled(e.target.value !== "");
            onChange?.(e);
        },
    };

    const common = {
        id,
        value,
        defaultValue,
        "aria-invalid": !!error,
        "aria-describedby": helperId,
        "data-slot": "input",
        "data-input": "",
        ...props,
        ...inputProps,
        ...handlers,
    };

    return <div data-slot="text-field" className={cn(formControlClass, fullWidth && "w-full", className)} style={focusVars(appearance)}>
        {label && <label
            htmlFor={id}
            id={`${id}-label`}
            data-shrink={shrink}
            {...state}
            className={cn(
                "input-label text-[rgba(0,0,0,0.6)] font-normal leading-[1.4375em] p-0 block origin-top-left whitespace-nowrap overflow-hidden text-ellipsis absolute left-0 z-[1]",
                LABEL_APPEARANCE[appearance],
                "[transition:color_200ms_cubic-bezier(0.0,0,0.2,1)_0ms,transform_200ms_cubic-bezier(0.0,0,0.2,1)_0ms,max-width_200ms_cubic-bezier(0.0,0,0.2,1)_0ms]",
                shrink
                    ? "max-w-[calc(133%-32px)] [transform:translate(14px,-9px)_scale(0.75)] pointer-events-auto select-none"
                    : "max-w-[calc(100%-24px)] [transform:translate(14px,16px)_scale(1)] pointer-events-none",
            )}
        >
            {label}
        </label>}
        <div
            data-slot="input-root"
            data-multiline={multiline ? "" : undefined}
            {...state}
            className={cn(outlinedRootClass(appearance, fullWidth), multiline && inputPadding[size])}
        >
            {multiline
                ? <TextareaAutosize {...common} minRows={minRows} className={cn(inputClass, "h-auto resize-none p-0")} />
                : <input type="text" {...common} className={cn(inputClass, inputPadding[size])} />}
            <NotchedOutline label={label} notched={shrink} />
        </div>
        {helperText && <HelperText id={helperId} error={error} appearance={appearance} size={size}>{helperText}</HelperText>}
    </div>
}
