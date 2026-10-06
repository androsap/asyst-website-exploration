import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Collapse from "@mui/material/Collapse";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

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
    return <Box className={`pv-accordion ${open ? "open" : ""}`}>
        <ButtonBase disableRipple className="pv-accordion__header" aria-expanded={open} onClick={onToggle}>
            <span className="pv-accordion__title">{title}</span>
            {icon === "circle"
                ? (open ? <RemoveCircleOutlineRoundedIcon className="pv-accordion__icon" /> : <AddCircleRoundedIcon className="pv-accordion__icon" />)
                // Ikon +/− dari dua garis CSS: garis vertikal berputar & menghilang saat dibuka
                : <span className="pv-accordion__toggle" aria-hidden="true" />}
        </ButtonBase>
        <Collapse in={open} timeout={COLLAPSE_TIMEOUT} easing={COLLAPSE_EASING}>
            <Box className="pv-accordion__body">{children}</Box>
        </Collapse>
    </Box>
}
