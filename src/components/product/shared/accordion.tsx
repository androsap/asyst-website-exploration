import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Collapse from "@mui/material/Collapse";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

interface AccordionItemProps {
    title: string;
    open: boolean;
    onToggle: () => void;
    /** circle = ikon lingkaran (daftar fitur), plain = ikon +/− (FAQ) */
    icon?: "circle" | "plain";
}

export default function AccordionItem({ title, open, onToggle, icon = "plain", children }: PropsWithChildren<AccordionItemProps>) {
    const OpenIcon = icon === "circle" ? RemoveCircleOutlineRoundedIcon : RemoveRoundedIcon;
    const ClosedIcon = icon === "circle" ? AddCircleRoundedIcon : AddRoundedIcon;

    return <Box className={`pv-accordion ${open ? "open" : ""}`}>
        <ButtonBase className="pv-accordion__header" aria-expanded={open} onClick={onToggle}>
            <span className="pv-accordion__title">{title}</span>
            {open ? <OpenIcon className="pv-accordion__icon" /> : <ClosedIcon className="pv-accordion__icon" />}
        </ButtonBase>
        <Collapse in={open}>
            <Box className="pv-accordion__body">{children}</Box>
        </Collapse>
    </Box>
}
