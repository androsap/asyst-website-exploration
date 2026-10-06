import { IndustryPopoverContent } from "consts/industry-detail.const";

interface HoverPopoverProps extends Partial<IndustryPopoverContent> {
    /** Sejajar kiri/tengah/kanan elemen pemicu; pakai start/end di tepi layar supaya tidak terpotong */
    align?: "start" | "center" | "end";
}

/** Popover glass di atas elemen pemicu (`.iv-popover-trigger`), tampil saat hover/fokus. */
export default function HoverPopover({ title, points, align = "center" }: HoverPopoverProps) {
    return <div className={`iv-popover iv-popover--${align}`} role="tooltip">
        {title && <p className="iv-popover__title">{title}</p>}
        {!!points?.length && <ul className="iv-popover__list">
            {points.map(point => <li key={point}>{point}</li>)}
        </ul>}
    </div>
}
