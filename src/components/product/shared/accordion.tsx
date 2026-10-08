import { PropsWithChildren } from "react";
import { ButtonBase } from "components/ui/button-base";
import { Collapse } from "components/ui/transitions";
import { AddCircleRoundedIcon, RemoveCircleOutlineRoundedIcon } from "components/ui/icons";

interface AccordionItemProps {
    title: string;
    open: boolean;
    onToggle: () => void;
    /** circle = ikon lingkaran (daftar fitur), plain = ikon +/− (FAQ) */
    icon?: "circle" | "plain";
}

const COLLAPSE_TIMEOUT = { enter: 380, exit: 280 };
const COLLAPSE_EASING = "cubic-bezier(0.4, 0, 0.2, 1)";

export default function AccordionItem({ title, open, onToggle, icon = "plain", children }: PropsWithChildren<AccordionItemProps>) {
    return <div className={`pv-accordion ${open ? "open" : ""}`}>
        <ButtonBase disableRipple className="pv-accordion__header" aria-expanded={open} onClick={onToggle}>
            <span className="pv-accordion__title">{title}</span>
            {icon === "circle"
                ? (open ? <RemoveCircleOutlineRoundedIcon className="pv-accordion__icon" /> : <AddCircleRoundedIcon className="pv-accordion__icon" />)
                // Ikon +/− dari dua garis CSS: garis vertikal berputar & menghilang saat dibuka
                : <span className="pv-accordion__toggle" aria-hidden="true" />}
        </ButtonBase>
        <Collapse in={open} timeout={COLLAPSE_TIMEOUT} easing={COLLAPSE_EASING}>
            <div className="pv-accordion__body">{children}</div>
        </Collapse>
    </div>
}
