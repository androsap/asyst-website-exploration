import { useLayoutEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";

interface TabBarProps {
    labels: string[];
    active: number;
    onChange: (index: number) => void;
    /** pill = kapsul (lifecycle), underline = garis bawah (how it works), segment = sel sejajar (solve) */
    variant: "pill" | "underline" | "segment";
}

type IndicatorRect = { left: number; width: number };

export default function TabBar({ labels, active, onChange, variant }: TabBarProps) {
    const listRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const [indicator, setIndicator] = useState<IndicatorRect | null>(null);

    // Indikator aktif digeser (bukan diganti) supaya perpindahan tab terlihat halus
    useLayoutEffect(() => {
        const measure = () => {
            const item = itemRefs.current[active];
            if (item) setIndicator({ left: item.offsetLeft, width: item.offsetWidth });
        };
        measure();

        const list = listRef.current;
        if (!list || typeof ResizeObserver === "undefined") return;
        const observer = new ResizeObserver(measure);
        observer.observe(list);
        return () => observer.disconnect();
    }, [active, labels.join("|")]);

    const select = (index: number) => {
        onChange(index);
        itemRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    };

    return <Box ref={listRef} className={`pv-tabs pv-tabs--${variant} ${indicator ? "has-indicator" : ""}`} role="tablist">
        {indicator && <span
            className="pv-tabs__indicator"
            aria-hidden="true"
            style={{ width: indicator.width, transform: `translateX(${indicator.left}px)` }}
        />}
        {labels.map((label, index) => (
            <ButtonBase
                key={index}
                ref={(el: HTMLButtonElement | null) => { itemRefs.current[index] = el; }}
                disableRipple
                role="tab"
                aria-selected={index === active}
                className={`pv-tabs__item ${index === active ? "active" : ""}`}
                onClick={() => select(index)}
            >
                {label}
            </ButtonBase>
        ))}
    </Box>
}
