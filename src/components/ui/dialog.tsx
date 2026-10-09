import { cloneElement, isValidElement, ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { FocusScope } from "@radix-ui/react-focus-scope";
import { cn } from "@/lib/utils";
import { useScrollLock } from "./scroll-lock";
import { Fade } from "./transitions";

/**
 * Modal (shadcn/ui Dialog, Radix) dengan perilaku Modal MUI:
 * root fixed z-index 9999, backdrop hitam 50% ber-Fade, focus trap, Escape & klik backdrop menutup,
 * scroll body dikunci (padding scrollbar), dan `closeAfterTransition` — konten bertransisi tetap
 * ter-mount sampai animasi keluarnya selesai.
 */
export interface ModalProps {
    open: boolean;
    onClose?: () => void;
    /** Elemen konten. Jika berupa komponen transisi (Fade/Zoom/Slide), modal menunggu animasinya. */
    children: ReactElement;
    className?: string;
    zIndex?: number;
    backdropClassName?: string;
    backdropTimeout?: number | { enter: number; exit: number };
    /** Lepas kunci scroll setelah animasi keluar (default: segera saat ditutup) */
    closeAfterTransition?: boolean;
    /** Judul untuk pembaca layar */
    title: string;
}

const hasTransition = (children: ReactNode) => isValidElement(children) && (children.props as { in?: boolean }).in !== undefined;

export function Modal({
    open, onClose, children, className, zIndex = 9999, backdropClassName, backdropTimeout = { enter: 225, exit: 195 }, closeAfterTransition = false, title,
}: ModalProps) {
    const transition = hasTransition(children);
    const [exited, setExited] = useState(!open);
    const contentRef = useRef<HTMLElement | null>(null);

    useEffect(() => { if (open) setExited(false); }, [open]);
    useScrollLock(open || (closeAfterTransition && transition && !exited));

    if (!open && (!transition || exited)) return null;

    const childProps: Record<string, unknown> = { tabIndex: -1 };
    if (transition) {
        const original = children.props as { onExited?: (node: HTMLElement) => void };
        childProps.onExited = (node: HTMLElement) => { setExited(true); original.onExited?.(node); };
    }

    return <DialogPrimitive.Root open modal={false} onOpenChange={next => !next && onClose?.()}>
        <DialogPrimitive.Portal>
            <div role="presentation" data-slot="modal" className={cn("fixed inset-0", !open && exited && "invisible", className)} style={{ zIndex }}>
                <Fade in={open} appear timeout={backdropTimeout}>
                    <div
                        aria-hidden="true"
                        data-slot="backdrop"
                        className={cn("fixed flex items-center justify-center inset-0 bg-[rgba(0,0,0,0.5)] [-webkit-tap-highlight-color:transparent] -z-[1]", backdropClassName)}
                        onClick={() => onClose?.()}
                    />
                </Fade>
                <FocusScope
                    asChild
                    trapped={open}
                    loop
                    onMountAutoFocus={event => { event.preventDefault(); contentRef.current?.focus({ preventScroll: true }); }}
                >
                    <DialogPrimitive.Content
                        asChild
                        aria-describedby={undefined}
                        onOpenAutoFocus={event => event.preventDefault()}
                        onPointerDownOutside={event => event.preventDefault()}
                        onInteractOutside={event => event.preventDefault()}
                        ref={node => { contentRef.current = node; }}
                    >
                        {cloneElement(children, childProps)}
                    </DialogPrimitive.Content>
                </FocusScope>
                <DialogPrimitive.Title className="sr-only" data-parity="skip">{title}</DialogPrimitive.Title>
            </div>
        </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
}

export const DialogTitle = DialogPrimitive.Title;
