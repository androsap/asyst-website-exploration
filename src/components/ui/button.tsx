import { cloneElement, forwardRef, isValidElement, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Appearance, useAppearance } from "./appearance";
import { ButtonBase, ButtonBaseProps } from "./button-base";

/**
 * Button (shadcn/ui pattern) dengan varian & nilai visual identik dengan Button MUI:
 * appearance "app" = theme proyek (primary #2775BB, font Inter 14px),
 * appearance "modal" = theme modal lama (primary #1976d2, font inherit 13px).
 * Radius 8, tanpa uppercase, ripple & focus ripple aktif seperti MUI.
 */
const buttonVariants = cva(
    "font-medium leading-[1.75] min-w-[64px] rounded-[8px] normal-case hover:no-underline " +
    "[transition:background-color_250ms_cubic-bezier(0.4,0,0.2,1)_0ms,box-shadow_250ms_cubic-bezier(0.4,0,0.2,1)_0ms,border-color_250ms_cubic-bezier(0.4,0,0.2,1)_0ms,color_250ms_cubic-bezier(0.4,0,0.2,1)_0ms]",
    {
        variants: {
            variant: {
                text: "px-2 py-[6px] [@media(hover:none)]:hover:bg-transparent disabled:text-[rgba(0,0,0,0.26)]",
                contained:
                    "px-4 py-[6px] text-white [box-shadow:0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)] hover:[box-shadow:0px_2px_4px_-1px_rgba(0,0,0,0.2),0px_4px_5px_0px_rgba(0,0,0,0.14),0px_1px_10px_0px_rgba(0,0,0,0.12)] active:[box-shadow:0px_5px_5px_-3px_rgba(0,0,0,0.2),0px_8px_10px_1px_rgba(0,0,0,0.14),0px_3px_14px_2px_rgba(0,0,0,0.12)] " +
                    "focus-visible:[box-shadow:0px_3px_5px_-1px_rgba(0,0,0,0.2),0px_6px_10px_0px_rgba(0,0,0,0.14),0px_1px_18px_0px_rgba(0,0,0,0.12)] " +
                    "disabled:text-[rgba(0,0,0,0.26)] disabled:[box-shadow:none] disabled:bg-[rgba(0,0,0,0.12)]",
                outlined: "px-[15px] py-[5px] border border-solid [@media(hover:none)]:hover:bg-transparent disabled:text-[rgba(0,0,0,0.26)] disabled:border-[rgba(0,0,0,0.12)]",
            },
            appearance: {
                app: "font-[Inter] text-[0.875rem]",
                modal: "font-[inherit] text-[0.8125rem]",
            },
            disableElevation: { true: "", false: "" },
        },
        compoundVariants: [
            { variant: "text", appearance: "app", className: "text-[#2775BB] hover:bg-[rgba(39,117,187,0.04)]" },
            { variant: "text", appearance: "modal", className: "text-[#1976d2] hover:bg-[rgba(25,118,210,0.04)]" },
            { variant: "contained", appearance: "app", className: "bg-[#2775BB] hover:bg-[rgb(27,81,130)] [@media(hover:none)]:hover:bg-[#2775BB]" },
            { variant: "contained", appearance: "modal", className: "bg-[#1976d2] hover:bg-[#1565c0] [@media(hover:none)]:hover:bg-[#1976d2]" },
            { variant: "outlined", appearance: "app", className: "border-[rgba(39,117,187,0.5)] text-[#2775BB] hover:bg-[rgba(39,117,187,0.04)] hover:border-[#2775BB]" },
            { variant: "outlined", appearance: "modal", className: "border-[rgba(25,118,210,0.5)] text-[#1976d2] hover:bg-[rgba(25,118,210,0.04)] hover:border-[#1976d2]" },
            { variant: "contained", disableElevation: true, className: "[box-shadow:none] hover:[box-shadow:none] focus-visible:[box-shadow:none] active:[box-shadow:none] disabled:[box-shadow:none]" },
        ],
        defaultVariants: { variant: "text", appearance: "app", disableElevation: false },
    },
);

// Ikon start/end: margin & ukuran 20px seperti MUI (size medium)
const iconClass = "[display:inherit] [&>*:nth-of-type(1)]:text-[20px]";
const StartIcon = ({ children }: { children: ReactNode }) => <span data-slot="button-start-icon" className={cn(iconClass, "mr-2 -ml-1")}>{children}</span>;
const EndIcon = ({ children }: { children: ReactNode }) => <span data-slot="button-end-icon" className={cn(iconClass, "-mr-1 ml-2")}>{children}</span>;

export interface ButtonProps extends Omit<ButtonBaseProps, "centerRipple">, Omit<VariantProps<typeof buttonVariants>, "appearance"> {
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    appearance?: Appearance;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    { className, variant, disableElevation, appearance: appearanceProp, startIcon, endIcon, children, asChild, focusRipple = true, ...props }, ref,
) {
    const appearance = useAppearance(appearanceProp);
    const wrap = (content: ReactNode) => <>
        {startIcon && <StartIcon>{startIcon}</StartIcon>}
        {content}
        {endIcon && <EndIcon>{endIcon}</EndIcon>}
    </>;

    return <ButtonBase
        ref={ref}
        data-slot="button"
        data-variant={variant ?? "text"}
        asChild={asChild}
        focusRipple={focusRipple}
        className={cn(buttonVariants({ variant, appearance, disableElevation }), className)}
        {...props}
    >
        {/* asChild: ikon disisipkan ke dalam child (mis. <Link>) */}
        {asChild && isValidElement<{ children?: ReactNode }>(children)
            ? (startIcon || endIcon ? cloneElement(children, undefined, wrap(children.props.children)) : children)
            : wrap(children)}
    </ButtonBase>
});

export { buttonVariants };
