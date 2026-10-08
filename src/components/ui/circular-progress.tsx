import { cn } from "@/lib/utils";

const SIZE = 44;
const THICKNESS = 3.6;

/** Spinner indeterminate (rotate 1.4s + dash 1.4s) — identik dengan CircularProgress MUI color="inherit". */
export function CircularProgress({ size = 40, className }: { size?: number; className?: string }) {
    return <span role="progressbar" data-slot="circular-progress" className={cn("inline-block animate-mui-circular-rotate", className)} style={{ width: size, height: size }}>
        <svg className="block" viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}>
            <circle
                className="stroke-current [stroke-dasharray:80px,200px] [stroke-dashoffset:0] animate-mui-circular-dash"
                cx={SIZE} cy={SIZE} r={(SIZE - THICKNESS) / 2} fill="none" strokeWidth={THICKNESS}
            />
        </svg>
    </span>
}
