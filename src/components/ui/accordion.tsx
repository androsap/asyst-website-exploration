import { createContext, ReactNode, useContext, useId, useState } from "react";
import { cn } from "@/lib/utils";
import { ButtonBase } from "./button-base";
import { Collapse } from "./transitions";

/**
 * Accordion bergaya Paper — identik dengan Accordion MUI (spacing 16):
 * garis pemisah ::before, margin 16px saat terbuka (gutters), ikon berputar 180deg, Collapse durasi "auto".
 * Bisa controlled (`expanded` + `onChange`) atau uncontrolled.
 */
const AccordionContext = createContext({ expanded: false, toggle: () => undefined as void, id: "", gutters: true });

export interface AccordionProps {
    expanded?: boolean;
    onChange?: (event: unknown, expanded: boolean) => void;
    disableGutters?: boolean;
    /** elevation 0 = tanpa bayangan */
    elevation?: 0 | 1;
    square?: boolean;
    className?: string;
    children: ReactNode;
}

export function Accordion({ expanded: expandedProp, onChange, disableGutters, elevation = 1, square, className, children }: AccordionProps) {
    const [state, setState] = useState(false);
    const expanded = expandedProp ?? state;
    const id = useId();
    const toggle = () => {
        if (expandedProp === undefined) setState(!expanded);
        onChange?.(undefined, !expanded);
    };
    const [summary, ...details] = Array.isArray(children) ? children : [children];

    return <div
        data-slot="paper"
        data-expanded={expanded ? "true" : undefined}
        className={cn(
            "accordion bg-white text-[rgba(0,0,0,0.87)] relative [transition:margin_150ms_cubic-bezier(0.4,0,0.2,1)_0ms] [overflow-anchor:none] rounded-none",
            elevation ? "[box-shadow:0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" : "[box-shadow:none]",
            !square && "accordion--rounded",
            !disableGutters && "accordion--gutters",
            className,
        )}
    >
        <AccordionContext.Provider value={{ expanded, toggle, id, gutters: !disableGutters }}>
            {summary}
            <Collapse in={expanded} timeout="auto">
                <div role="region" id={`${id}-content`} aria-labelledby={`${id}-header`}>{details}</div>
            </Collapse>
        </AccordionContext.Provider>
    </div>
}

export interface AccordionSummaryProps {
    expandIcon?: ReactNode;
    children: ReactNode;
    id?: string;
    className?: string;
    contentClassName?: string;
    iconClassName?: string;
}

export function AccordionSummary({ expandIcon, children, id, className, contentClassName, iconClassName }: AccordionSummaryProps) {
    const { expanded, toggle, id: ctxId, gutters } = useContext(AccordionContext);
    const state = expanded ? "true" : undefined;
    return <ButtonBase
        asChild
        disableRipple
        data-expanded={state}
        aria-expanded={expanded}
        className={cn(
            "accordion-summary flex min-h-[48px] py-0 px-8 [transition:min-height_150ms_cubic-bezier(0.4,0,0.2,1)_0ms,background-color_150ms_cubic-bezier(0.4,0,0.2,1)_0ms]",
            gutters && "accordion-summary--gutters",
            className,
        )}
        onClick={toggle}
    >
        <div role="button" tabIndex={0} id={id ?? `${ctxId}-header`} aria-controls={`${ctxId}-content`}>
            <div data-expanded={state} className={cn("accordion-summary__content flex grow my-3 mx-0 [transition:margin_150ms_cubic-bezier(0.4,0,0.2,1)_0ms]", gutters && "accordion-summary__content--gutters", contentClassName)}>{children}</div>
            {expandIcon && <div data-expanded={state} className={cn("accordion-summary__icon flex text-[rgba(0,0,0,0.54)] [transform:rotate(0deg)] [transition:transform_150ms_cubic-bezier(0.4,0,0.2,1)_0ms]", iconClassName)}>{expandIcon}</div>}
        </div>
    </ButtonBase>
}

export function AccordionDetails({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={cn("pt-4 px-8 pb-8", className)}>{children}</div>
}
