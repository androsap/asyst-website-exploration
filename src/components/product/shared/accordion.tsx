import { PropsWithChildren } from "react";
import { ButtonBase } from "components/ui/button-base";
import { Collapse } from "components/ui/transitions";
import { SvgIconComponent } from "components/ui/svg-icon";
import { AddCircleOutlineRoundedIcon, AddCircleRoundedIcon, RemoveCircleOutlineRoundedIcon } from "components/ui/icons";

interface AccordionItemProps {
    title: string;
    open: boolean;
    onToggle: () => void;
    icon?: "circle" | "outline" | "plain";
    leadingIcon?: SvgIconComponent;
    eyebrow?: string;
    className?: string;
}

const COLLAPSE_TIMEOUT = { enter: 380, exit: 280 };
const COLLAPSE_EASING = "cubic-bezier(0.4, 0, 0.2, 1)";

export default function AccordionItem({ title, open, onToggle, icon = "plain", leadingIcon: LeadingIcon, eyebrow, className = "", children }: PropsWithChildren<AccordionItemProps>) {
    const titleNode = LeadingIcon
        ? <span className="pv-accordion__label"><LeadingIcon className="pv-accordion__leading" /><span className="pv-accordion__title">{title}</span></span>
        : <span className="pv-accordion__title">{title}</span>;
    const OpenIcon = icon === "outline" ? AddCircleOutlineRoundedIcon : AddCircleRoundedIcon;

    return <div className={`pv-accordion ${className} ${open ? "open" : ""}`}>
        <ButtonBase disableRipple className="pv-accordion__header" aria-expanded={open} onClick={onToggle}>
            {eyebrow
                ? <span className="pv-accordion__heading"><span className="pv-accordion__eyebrow">{eyebrow}</span>{titleNode}</span>
                : titleNode}
            {icon === "plain"
                ? <span className="pv-accordion__toggle" aria-hidden="true" />
                : (open ? <RemoveCircleOutlineRoundedIcon className="pv-accordion__icon" /> : <OpenIcon className="pv-accordion__icon" />)}
        </ButtonBase>
        <Collapse in={open} timeout={COLLAPSE_TIMEOUT} easing={COLLAPSE_EASING}>
            <div className="pv-accordion__body">{children}</div>
        </Collapse>
    </div>
}
