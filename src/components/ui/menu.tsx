import { CSSProperties, forwardRef, KeyboardEvent, ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { ButtonBase, ButtonBaseProps } from "./button-base";
import { useScrollLock } from "./scroll-lock";
import { Fade, Grow } from "./transitions";

/**
 * Menu popup — port perilaku Menu/Popover MUI:
 * - posisi dihitung dari anchorEl + anchorOrigin/transformOrigin, digeser agar tetap 16px dari tepi layar
 *   (tidak dibalik ke atas), dihitung ulang saat render, resize, dan scroll (bila scroll tidak dikunci)
 * - backdrop transparan ber-Fade: klik di luar hanya menutup menu; Escape/Tab menutup
 * - Paper elevation 8 radius 8, list padding 8px, transisi Grow durasi "auto"
 * - fokus otomatis ke item terpilih/pertama, navigasi panah/Home/End/huruf, fokus kembali ke elemen asal saat tutup
 */
type Origin = { vertical: "top" | "bottom"; horizontal: "left" | "center" };

const MARGIN_THRESHOLD = 16;
const offsetTop = (height: number, vertical: Origin["vertical"]) => vertical === "bottom" ? height : 0;
const offsetLeft = (width: number, horizontal: Origin["horizontal"]) => horizontal === "center" ? width / 2 : 0;

export interface MenuPopupProps {
    open: boolean;
    onClose: () => void;
    anchorEl: HTMLElement | null;
    children: ReactNode;
    role?: "menu" | "listbox";
    listId?: string;
    /** Menu MUI: bawah-kiri; Select MUI: bawah-tengah */
    align?: "start" | "center";
    /** Panah atas/bawah berputar dari item terakhir ke pertama (Menu) atau berhenti (Select) */
    wrap?: boolean;
    /** Kunci scroll body selama terbuka (Menu MUI tanpa disableScrollLock) */
    lockScroll?: boolean;
    /** Render di dalam elemen ini, bukan di body (MUI `disablePortal`) */
    container?: HTMLElement | null;
    paperStyle?: CSSProperties;
    paperClassName?: string;
}

export function MenuPopup({
    open, onClose, anchorEl, children, role = "menu", listId, align = "start", wrap = true, lockScroll = true, container, paperStyle, paperClassName,
}: MenuPopupProps) {
    const [exited, setExited] = useState(!open);
    const [positioned, setPositioned] = useState(open);
    const paperRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const previousFocus = useRef<HTMLElement | null>(null);
    const horizontal: Origin["horizontal"] = align === "center" ? "center" : "left";

    useScrollLock(open && lockScroll);

    // Port getPositioningStyle Popover MUI (anchorOrigin bawah, transformOrigin atas)
    const setPositioningStyles = useCallback(() => {
        const element = paperRef.current;
        if (!element || !anchorEl) return;
        const elem = { width: element.offsetWidth, height: element.offsetHeight };
        const elemOrigin = { vertical: offsetTop(elem.height, "top"), horizontal: offsetLeft(elem.width, horizontal) };
        const rect = anchorEl.getBoundingClientRect();
        const anchor = { top: rect.top + offsetTop(rect.height, "bottom"), left: rect.left + offsetLeft(rect.width, horizontal) };
        let top = anchor.top - elemOrigin.vertical;
        let left = anchor.left - elemOrigin.horizontal;
        const bottom = top + elem.height;
        const right = left + elem.width;
        const heightThreshold = window.innerHeight - MARGIN_THRESHOLD;
        const widthThreshold = window.innerWidth - MARGIN_THRESHOLD;
        if (top < MARGIN_THRESHOLD) {
            const diff = top - MARGIN_THRESHOLD;
            top -= diff;
            elemOrigin.vertical += diff;
        } else if (bottom > heightThreshold) {
            const diff = bottom - heightThreshold;
            top -= diff;
            elemOrigin.vertical += diff;
        }
        if (left < MARGIN_THRESHOLD) {
            const diff = left - MARGIN_THRESHOLD;
            left -= diff;
            elemOrigin.horizontal += diff;
        } else if (right > widthThreshold) {
            const diff = right - widthThreshold;
            left -= diff;
            elemOrigin.horizontal += diff;
        }
        element.style.top = `${Math.round(top)}px`;
        element.style.left = `${Math.round(left)}px`;
        element.style.transformOrigin = `${elemOrigin.horizontal}px ${elemOrigin.vertical}px`;
        setPositioned(true);
    }, [anchorEl, horizontal]);

    useEffect(() => {
        if (open) {
            setExited(false);
            previousFocus.current = document.activeElement as HTMLElement | null;
        } else if (previousFocus.current) {
            previousFocus.current.focus();
            previousFocus.current = null;
        }
    }, [open]);

    // Sama dengan Popover MUI: posisi dihitung ulang setiap render selama terbuka
    useEffect(() => { if (open) setPositioningStyles(); });

    useEffect(() => {
        if (!open) return;
        let timer: number;
        const handleResize = () => { window.clearTimeout(timer); timer = window.setTimeout(setPositioningStyles, 166); };
        window.addEventListener("resize", handleResize);
        if (!lockScroll) window.addEventListener("scroll", setPositioningStyles);
        return () => {
            window.clearTimeout(timer);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", setPositioningStyles);
        };
    }, [open, lockScroll, setPositioningStyles]);

    const items = () => listRef.current ? [...listRef.current.querySelectorAll<HTMLElement>("[data-slot=menu-item]")] : [];

    // MenuList autoFocusItem: fokus ke item terpilih (atau pertama) saat menu terbuka
    useLayoutEffect(() => {
        if (!open || exited) return;
        const list = items();
        (list.find(item => item.dataset.selected === "true") ?? list[0])?.focus({ preventScroll: true });
    }, [open, exited]);

    const onKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
        const list = items();
        const index = list.indexOf(document.activeElement as HTMLElement);
        const move = (i: number) => { event.preventDefault(); list[i]?.focus(); };
        if (event.key === "ArrowDown") move(index < list.length - 1 ? index + 1 : wrap ? 0 : index);
        else if (event.key === "ArrowUp") move(index > 0 ? index - 1 : wrap ? list.length - 1 : 0);
        else if (event.key === "Home") move(0);
        else if (event.key === "End") move(list.length - 1);
        else if (event.key === "Tab") { event.preventDefault(); onClose(); }
        else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
            const char = event.key.toLowerCase();
            const rotated = [...list.slice(index + 1), ...list.slice(0, index + 1)];
            const match = rotated.find(item => (item.textContent ?? "").trim().toLowerCase().startsWith(char));
            if (match) { event.preventDefault(); match.focus(); }
        }
    };

    if (!open && exited) return null;

    return createPortal(
        <div
            role="presentation"
            data-slot="modal"
            className="fixed inset-0 z-[1300]"
            onKeyDown={event => { if (event.key === "Escape") { event.stopPropagation(); onClose(); } }}
        >
            {/* Backdrop transparan (Backdrop invisible MUI, ber-Fade): klik di luar hanya menutup menu */}
            <Fade in={open} appear>
                <div aria-hidden="true" className="fixed flex items-center justify-center inset-0 -z-[1] bg-transparent [-webkit-tap-highlight-color:transparent]" onClick={onClose} />
            </Fade>
            <Grow in={open} appear onEntering={setPositioningStyles} onExited={() => { setExited(true); setPositioned(false); }}>
                <div
                    ref={paperRef}
                    data-slot="paper"
                    style={{ ...paperStyle, ...(positioned ? {} : { opacity: 0 }) }}
                    className={cn(
                        "bg-white text-[rgba(0,0,0,0.87)] [transition:box-shadow_300ms_cubic-bezier(0.4,0,0.2,1)_0ms] rounded-[8px]",
                        "[box-shadow:0px_5px_5px_-3px_rgba(0,0,0,0.2),0px_8px_10px_1px_rgba(0,0,0,0.14),0px_3px_14px_2px_rgba(0,0,0,0.12)]",
                        "absolute overflow-y-auto overflow-x-hidden min-w-[16px] min-h-[16px] max-w-[calc(100%-32px)] max-h-[calc(100%-96px)] [outline:0]",
                        paperClassName,
                    )}
                >
                    <ul ref={listRef} id={listId} role={role} tabIndex={-1} onKeyDown={onKeyDown} className="list-none m-0 p-0 relative py-2 [outline:0]">
                        {children}
                    </ul>
                </div>
            </Grow>
        </div>,
        container ?? document.body,
    );
}

export type MenuAppearance = "app" | "modal";

const ITEM_APPEARANCE: Record<MenuAppearance, { className: string; rgb: string }> = {
    app: { className: "font-[Inter] text-[1rem]", rgb: "39 117 187" },
    modal: { className: "font-[inherit] text-[0.9285714285714286rem]", rgb: "25 118 210" },
};

export interface MenuItemProps extends Omit<ButtonBaseProps, "asChild" | "role"> {
    selected?: boolean;
    role?: "menuitem" | "option";
    appearance?: MenuAppearance;
}

/** Item menu — identik dengan MenuItem MUI (min-height 48px di layar < 600px, ripple saat klik). */
export const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(function MenuItem(
    { selected, role = "menuitem", appearance = "app", className, children, style, ...props }, ref,
) {
    return <ButtonBase
        ref={ref}
        asChild
        data-slot="menu-item"
        data-selected={selected ? "true" : undefined}
        className={cn(
            "menu-item font-normal leading-[1.5] flex justify-start items-center relative no-underline",
            "min-h-[48px] min-[600px]:min-h-[auto] py-[6px] box-border whitespace-nowrap px-4 [outline:0]",
            ITEM_APPEARANCE[appearance].className,
            className,
        )}
        style={{ ["--menu-selected-rgb" as string]: ITEM_APPEARANCE[appearance].rgb, ...style }}
        {...props}
    >
        <li role={role} tabIndex={-1} aria-selected={role === "option" ? !!selected : undefined}>{children}</li>
    </ButtonBase>
});
