import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";

interface TabBarProps {
    labels: string[];
    active: number;
    onChange: (index: number) => void;
    /** pill = kapsul (lifecycle), underline = garis bawah (how it works), segment = sel sejajar (solve) */
    variant: "pill" | "underline" | "segment";
}

export default function TabBar({ labels, active, onChange, variant }: TabBarProps) {
    return <Box className={`pv-tabs pv-tabs--${variant}`} role="tablist">
        {labels.map((label, index) => (
            <ButtonBase
                key={label}
                role="tab"
                aria-selected={index === active}
                className={`pv-tabs__item ${index === active ? "active" : ""}`}
                onClick={() => onChange(index)}
            >
                {label}
            </ButtonBase>
        ))}
    </Box>
}
