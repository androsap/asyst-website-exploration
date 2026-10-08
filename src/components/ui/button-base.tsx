import { ButtonHTMLAttributes, FocusEvent, forwardRef, KeyboardEvent, MouseEvent, ReactNode, TouchEvent, useEffect, useRef, useState } from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { TouchRipple, TouchRippleHandle } from "./touch-ripple";

/**
 * Pengganti ButtonBase MUI: reset style tombol + ripple + perilaku keyboard/fokus yang sama.
 * `data-button-base` dipakai SCSS sebagai pengganti selector `.MuiButtonBase-root`.
 */
export const buttonBaseClass = cn(
    "inline-flex items-center justify-center relative box-border bg-transparent [outline:0] border-0 border-none border-current m-0 rounded-none p-0",
    "cursor-pointer select-none align-middle no-underline text-inherit appearance-none [-webkit-tap-highlight-color:transparent]",
    "[&::-moz-focus-inner]:border-none disabled:pointer-events-none disabled:cursor-default aria-disabled:pointer-events-none aria-disabled:cursor-default print:[print-color-adjust:exact]",
);

export interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Render sebagai child (mis. <Link>) — pola shadcn/Radix Slot */
    asChild?: boolean;
    disableRipple?: boolean;
    /** Ripple dari tengah (IconButton, Radio) */
    centerRipple?: boolean;
    /** Ripple berdenyut saat fokus keyboard (default true seperti Button MUI) */
    focusRipple?: boolean;
    children?: ReactNode;
}

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(function ButtonBase({
    asChild = false,
    disableRipple = false,
    centerRipple = false,
    focusRipple = false,
    className,
    children,
    type,
    disabled,
    onMouseDown, onMouseUp, onMouseLeave, onTouchStart, onTouchEnd, onTouchMove, onDragLeave, onContextMenu, onFocus, onBlur, onKeyDown, onKeyUp,
    ...props
}, ref) {
    const ripple = useRef<TouchRippleHandle>(null);
    const [focusVisible, setFocusVisible] = useState(false);
    const keydown = useRef(false);
    const enableRipple = !disableRipple && !disabled;

    if (disabled && focusVisible) setFocusVisible(false);

    useEffect(() => {
        if (focusVisible && focusRipple && !disableRipple) ripple.current?.pulsate();
    }, [focusVisible, focusRipple, disableRipple]);

    // Sama dengan useRippleHandler MUI: jalankan handler user, lalu start/stop ripple
    const handler = <E extends { type: string }>(action: "start" | "stop", user?: (e: E) => void) => (event: E) => {
        user?.(event);
        if (!disableRipple && ripple.current) ripple.current[action](event as never);
    };

    const handleFocus = (event: FocusEvent<HTMLButtonElement>) => {
        if (event.currentTarget.matches(":focus-visible")) setFocusVisible(true);
        onFocus?.(event);
    };

    const handleBlur = (event: FocusEvent<HTMLButtonElement>) => {
        ripple.current?.stop(event);
        setFocusVisible(false);
        onBlur?.(event);
    };

    // Elemen non-<button> (mis. <li> item menu) tidak punya aktivasi keyboard bawaan
    const isNonNativeButton = (el: HTMLElement) => el.tagName !== "BUTTON" && !(el.tagName === "A" && (el as HTMLAnchorElement).href);

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
        if (focusRipple && !keydown.current && focusVisible && ripple.current && event.key === " ") {
            keydown.current = true;
            ripple.current.stop(event, () => ripple.current?.start(event));
        }
        if (event.target === event.currentTarget && isNonNativeButton(event.currentTarget) && event.key === " ") event.preventDefault();
        onKeyDown?.(event);
        if (event.target === event.currentTarget && isNonNativeButton(event.currentTarget) && event.key === "Enter" && !disabled) {
            event.preventDefault();
            event.currentTarget.click();
        }
    };

    const handleKeyUp = (event: KeyboardEvent<HTMLButtonElement>) => {
        if (focusRipple && event.key === " " && ripple.current && focusVisible && !event.defaultPrevented) {
            keydown.current = false;
            ripple.current.stop(event, () => ripple.current?.pulsate());
        }
        onKeyUp?.(event);
        if (event.target === event.currentTarget && isNonNativeButton(event.currentTarget) && event.key === " " && !event.defaultPrevented && !disabled) {
            event.currentTarget.click();
        }
    };

    const handleMouseLeave = (event: MouseEvent<HTMLButtonElement>) => {
        if (focusVisible) event.preventDefault();
        onMouseLeave?.(event);
        if (!disableRipple) ripple.current?.stop(event);
    };

    const Comp = asChild ? Slot : "button";

    return <Comp
        {...props}
        ref={ref}
        data-button-base=""
        data-focus-visible={focusVisible ? "true" : undefined}
        className={cn(buttonBaseClass, className)}
        type={asChild ? undefined : (type ?? "button")}
        disabled={asChild ? undefined : disabled}
        aria-disabled={asChild && disabled ? true : undefined}
        tabIndex={disabled ? -1 : props.tabIndex}
        onMouseDown={handler<MouseEvent<HTMLButtonElement>>("start", onMouseDown)}
        onMouseUp={handler<MouseEvent<HTMLButtonElement>>("stop", onMouseUp)}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handler<TouchEvent<HTMLButtonElement>>("start", onTouchStart)}
        onTouchEnd={handler<TouchEvent<HTMLButtonElement>>("stop", onTouchEnd)}
        onTouchMove={handler<TouchEvent<HTMLButtonElement>>("stop", onTouchMove)}
        onDragLeave={handler<React.DragEvent<HTMLButtonElement>>("stop", onDragLeave)}
        onContextMenu={handler<MouseEvent<HTMLButtonElement>>("stop", onContextMenu)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
    >
        <Slottable>{children}</Slottable>
        {enableRipple && <TouchRipple ref={ripple} center={centerRipple} />}
    </Comp>
});
