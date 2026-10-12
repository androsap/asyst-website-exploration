import { KeyboardEvent, ReactNode, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useAppearance } from "./appearance";
import { MenuItem, MenuPopup } from "./menu";
import { SvgIconComponent } from "./svg-icon";
import { focusVars, formControlClass, HelperText, InputAppearance, inputClass, inputPadding, NotchedOutline, outlinedRootClass } from "./text-field";

export interface SelectOption {
    value: string;
    label: ReactNode;
}

export interface SelectProps {
    value: string;
    onChange: (value: string) => void;
    options: SelectOption[];
    variant?: "outlined" | "standard";
    appearance?: InputAppearance;
    size?: "small" | "medium";
    fullWidth?: boolean;
    error?: boolean;
    helperText?: ReactNode;
    className?: string;
    renderValue?: (value: string) => ReactNode;
    IconComponent: SvgIconComponent;
    disablePortal?: boolean;
    id?: string;
    "aria-label"?: string;
}

export function Select({
    value, onChange, options, variant = "outlined", appearance: appearanceProp, size = "medium", fullWidth, error, helperText,
    className, renderValue, IconComponent, disablePortal, id: idProp, "aria-label": ariaLabel,
}: SelectProps) {
    const appearance = useAppearance(appearanceProp);
    const autoId = useId();
    const id = idProp ?? autoId;
    const listboxId = `${id}-listbox`;
    const [open, setOpen] = useState(false);
    const [focused, setFocused] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const displayRef = useRef<HTMLDivElement>(null);
    const [minWidth, setMinWidth] = useState<number>();

    const openMenu = () => {
        setMinWidth(rootRef.current?.clientWidth);
        setOpen(true);
    };
    const select = (next: string) => {
        if (next !== value) onChange(next);
        setOpen(false);
    };

    const onDisplayKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if ([" ", "ArrowUp", "ArrowDown", "Enter"].includes(event.key)) {
            event.preventDefault();
            openMenu();
        }
    };

    const displayValue = renderValue ? renderValue(value) : options.find(option => option.value === value)?.label;
    const outlined = variant === "outlined";
    const state = { "data-focused": focused || open ? "true" : undefined, "data-error": error ? "true" : undefined };

    const input = <div
        ref={rootRef}
        data-slot="input-root"
        {...state}
        className={outlined
            ? outlinedRootClass(appearance, fullWidth)
            : cn("font-[Inter] font-normal text-[1rem] leading-[1.4375em] text-[rgba(0,0,0,0.87)] box-border relative cursor-text inline-flex items-center", className)}
    >
        <div
            ref={displayRef}
            id={id}
            tabIndex={0}
            role="combobox"
            aria-controls={listboxId}
            aria-expanded={open}
            aria-haspopup="listbox"
            aria-label={ariaLabel}
            data-slot="select-value"
            data-input={outlined ? "" : undefined}
            className={cn(
                "select-value select-value--outlined select-none cursor-pointer rounded-[8px] focus:rounded-[8px]", inputClass,
                outlined ? inputPadding[size] : "pt-1 pb-[5px] px-0",
            )}
            onMouseDown={event => {
                if (event.button !== 0) return;
                event.preventDefault();
                displayRef.current?.focus();
                openMenu();
            }}
            onKeyDown={onDisplayKeyDown}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
        >
            {displayValue || <span className="notranslate">&#8203;</span>}
        </div>
        <input aria-invalid={!!error} aria-hidden tabIndex={-1} readOnly value={value} className="bottom-0 left-0 absolute opacity-0 pointer-events-none w-full box-border" />
        <IconComponent
            data-slot="select-icon"
            className={cn("absolute right-[7px] top-[calc(50%-.5em)] pointer-events-none text-[rgba(0,0,0,0.54)]", open && "rotate-180")}
        />
        {outlined && <NotchedOutline notched={false} />}
    </div>;

    const menu = <MenuPopup
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={rootRef.current}
        role="listbox"
        listId={listboxId}
        align="center"
        wrap={false}
        container={disablePortal ? rootRef.current : undefined}
        paperStyle={{ minWidth }}
    >
        {options.map(option => (
            <MenuItem
                key={option.value}
                role="option"
                appearance={appearance}
                selected={option.value === value}
                data-value={option.value}
                onClick={() => select(option.value)}
            >
                {option.label}
            </MenuItem>
        ))}
    </MenuPopup>;

    return outlined
        ? <div data-slot="text-field" className={cn(formControlClass, fullWidth && "w-full", className)} style={focusVars(appearance)}>
            {input}
            {menu}
            {helperText && <HelperText error={error} appearance={appearance} size={size}>{helperText}</HelperText>}
        </div>
        : <>{input}{menu}</>;
}
