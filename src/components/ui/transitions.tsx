/**
 * Transisi Fade / Grow / Slide / Zoom / Collapse.
 * Port dari @mui/material v5.18 (MIT) di atas react-transition-group agar durasi, easing,
 * urutan state & nilai awal/akhir identik dengan animasi sebelumnya.
 */
import { cloneElement, CSSProperties, forwardRef, ReactElement, ReactNode, Ref, useCallback, useRef } from "react";
import { Transition } from "react-transition-group";
import type { TransitionStatus } from "react-transition-group";
import { cn } from "@/lib/utils";

// ---------- konstanta theme MUI ----------
export const easing = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
};
export const duration = { shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195 };

const formatMs = (ms: number) => `${Math.round(ms)}ms`;
export function createTransition(props: string | string[], options: { duration?: number | string; easing?: string; delay?: number | string } = {}) {
    const { duration: d = duration.standard, easing: e = easing.easeInOut, delay = 0 } = options;
    return (Array.isArray(props) ? props : [props])
        .map(p => `${p} ${typeof d === "string" ? d : formatMs(d)} ${e} ${typeof delay === "string" ? delay : formatMs(delay)}`)
        .join(",");
}
export function getAutoHeightDuration(height: number) {
    if (!height) return 0;
    const constant = height / 36;
    return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}
const reflow = (node: HTMLElement) => node.scrollTop;

type Timeout = number | { appear?: number; enter?: number; exit?: number };
type Easing = string | { enter?: string; exit?: string };
function getTransitionProps({ timeout, easing: e, style = {} }: { timeout: Timeout | "auto"; easing?: Easing; style?: CSSProperties }, mode: "enter" | "exit") {
    return {
        duration: style.transitionDuration ?? (typeof timeout === "number" ? timeout : timeout === "auto" ? 0 : timeout[mode] || 0),
        easing: style.transitionTimingFunction ?? (typeof e === "object" ? e[mode] : e),
        delay: style.transitionDelay,
    };
}

function useForkRef<T>(...refs: (Ref<T> | undefined)[]) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useCallback((value: T) => {
        refs.forEach(ref => {
            if (typeof ref === "function") ref(value);
            else if (ref) (ref as React.MutableRefObject<T>).current = value;
        });
    }, refs);
}

interface BaseTransitionProps {
    in?: boolean;
    appear?: boolean;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    timeout?: Timeout;
    easing?: Easing;
    style?: CSSProperties;
    children: ReactElement;
    onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
    /** Diteruskan langsung ke Transition (dipanggil tanpa node) */
    onEntering?: () => void;
    onEntered?: (node: HTMLElement, isAppearing: boolean) => void;
    onExited?: (node: HTMLElement) => void;
}

const childStyle = (children: ReactElement) => (children.props as { style?: CSSProperties }).style;

// ---------- Fade ----------
export const Fade = forwardRef<HTMLElement, BaseTransitionProps>(function Fade(
    { in: inProp, appear = true, children, easing: e, style, timeout = { enter: duration.enteringScreen, exit: duration.leavingScreen }, onEnter, onEntered, onExited, ...other }, ref,
) {
    const nodeRef = useRef<HTMLElement>(null);
    const handleRef = useForkRef(nodeRef, (children as { ref?: Ref<HTMLElement> }).ref, ref);
    return <Transition
        appear={appear}
        in={inProp}
        nodeRef={nodeRef}
        timeout={timeout}
        onEnter={(isAppearing: boolean) => {
            const node = (nodeRef.current as HTMLElement);
            reflow(node);
            const p = getTransitionProps({ style, timeout, easing: e }, "enter");
            node.style.webkitTransition = createTransition("opacity", p);
            node.style.transition = createTransition("opacity", p);
            onEnter?.(node, isAppearing);
        }}
        onEntered={(isAppearing: boolean) => onEntered?.((nodeRef.current as HTMLElement), isAppearing)}
        onExit={() => {
            const node = (nodeRef.current as HTMLElement);
            const p = getTransitionProps({ style, timeout, easing: e }, "exit");
            node.style.webkitTransition = createTransition("opacity", p);
            node.style.transition = createTransition("opacity", p);
        }}
        onExited={() => onExited?.((nodeRef.current as HTMLElement))}
        {...other}
    >
        {(state: TransitionStatus, childProps?: Record<string, unknown>) => cloneElement(children, {
            ...childProps,
            style: {
                opacity: 0,
                visibility: state === "exited" && !inProp ? "hidden" : undefined,
                ...(state === "entering" || state === "entered" ? { opacity: 1 } : {}),
                ...style,
                ...childStyle(children),
            },
            ref: handleRef,
        })}
    </Transition>
});

// ---------- Grow (dipakai menu/popover) ----------
const getScale = (value: number) => `scale(${value}, ${value ** 2})`;
export const Grow = forwardRef<HTMLElement, Omit<BaseTransitionProps, "timeout"> & { timeout?: Timeout | "auto" }>(function Grow(
    { in: inProp, appear = true, children, easing: e, style, timeout = "auto", onEnter, onEntered, onExited, ...other }, ref,
) {
    const nodeRef = useRef<HTMLElement>(null);
    const autoTimeout = useRef<number>();
    const timer = useRef<number>();
    const handleRef = useForkRef(nodeRef, (children as { ref?: Ref<HTMLElement> }).ref, ref);
    return <Transition
        appear={appear}
        in={inProp}
        nodeRef={nodeRef}
        timeout={timeout === "auto" ? (null as unknown as number) : timeout}
        addEndListener={(next: () => void) => {
            if (timeout === "auto") {
                window.clearTimeout(timer.current);
                timer.current = window.setTimeout(next, autoTimeout.current || 0);
            }
        }}
        onEnter={(isAppearing: boolean) => {
            const node = (nodeRef.current as HTMLElement);
            reflow(node);
            const p = getTransitionProps({ style, timeout, easing: e }, "enter");
            let d: number | string = p.duration;
            if (timeout === "auto") {
                d = getAutoHeightDuration(node.clientHeight);
                autoTimeout.current = d;
            }
            node.style.transition = [
                createTransition("opacity", { duration: d, delay: p.delay }),
                createTransition("transform", { duration: typeof d === "number" ? d * 0.666 : d, delay: p.delay, easing: p.easing }),
            ].join(",");
            onEnter?.(node, isAppearing);
        }}
        onEntered={(isAppearing: boolean) => onEntered?.((nodeRef.current as HTMLElement), isAppearing)}
        onExit={() => {
            const node = (nodeRef.current as HTMLElement);
            const p = getTransitionProps({ style, timeout, easing: e }, "exit");
            let d: number | string = p.duration;
            if (timeout === "auto") {
                d = getAutoHeightDuration(node.clientHeight);
                autoTimeout.current = d;
            }
            node.style.transition = [
                createTransition("opacity", { duration: d, delay: p.delay }),
                createTransition("transform", { duration: typeof d === "number" ? d * 0.666 : d, delay: p.delay || (typeof d === "number" ? d * 0.333 : 0), easing: p.easing }),
            ].join(",");
            node.style.opacity = "0";
            node.style.transform = getScale(0.75);
        }}
        onExited={() => onExited?.((nodeRef.current as HTMLElement))}
        {...other}
    >
        {(state: TransitionStatus, childProps?: Record<string, unknown>) => cloneElement(children, {
            ...childProps,
            style: {
                opacity: 0,
                transform: getScale(0.75),
                visibility: state === "exited" && !inProp ? "hidden" : undefined,
                ...(state === "entering" ? { opacity: 1, transform: getScale(1) } : state === "entered" ? { opacity: 1, transform: "none" } : {}),
                ...style,
                ...childStyle(children),
            },
            ref: handleRef,
        })}
    </Transition>
});

// ---------- Zoom ----------
export const Zoom = forwardRef<HTMLElement, BaseTransitionProps>(function Zoom(
    { in: inProp, appear = true, children, easing: e, style, timeout = { enter: duration.enteringScreen, exit: duration.leavingScreen }, onEnter, onEntered, onExited, ...other }, ref,
) {
    const nodeRef = useRef<HTMLElement>(null);
    const handleRef = useForkRef(nodeRef, (children as { ref?: Ref<HTMLElement> }).ref, ref);
    return <Transition
        appear={appear}
        in={inProp}
        nodeRef={nodeRef}
        timeout={timeout}
        onEnter={(isAppearing: boolean) => {
            const node = (nodeRef.current as HTMLElement);
            reflow(node);
            const p = getTransitionProps({ style, timeout, easing: e }, "enter");
            node.style.webkitTransition = createTransition("transform", p);
            node.style.transition = createTransition("transform", p);
            onEnter?.(node, isAppearing);
        }}
        onEntered={(isAppearing: boolean) => onEntered?.((nodeRef.current as HTMLElement), isAppearing)}
        onExit={() => {
            const node = (nodeRef.current as HTMLElement);
            const p = getTransitionProps({ style, timeout, easing: e }, "exit");
            node.style.webkitTransition = createTransition("transform", p);
            node.style.transition = createTransition("transform", p);
        }}
        onExited={() => onExited?.((nodeRef.current as HTMLElement))}
        {...other}
    >
        {(state: TransitionStatus, childProps?: Record<string, unknown>) => cloneElement(children, {
            ...childProps,
            style: {
                transform: "scale(0)",
                visibility: state === "exited" && !inProp ? "hidden" : undefined,
                ...(state === "entering" || state === "entered" ? { transform: "none" } : {}),
                ...style,
                ...childStyle(children),
            },
            ref: handleRef,
        })}
    </Transition>
});

// ---------- Slide ----------
type SlideDirection = "left" | "right" | "up" | "down";
function getTranslateValue(direction: SlideDirection, node: HTMLElement) {
    const rect = node.getBoundingClientRect();
    const computed = window.getComputedStyle(node);
    const transform = computed.getPropertyValue("-webkit-transform") || computed.getPropertyValue("transform");
    let offsetX = 0, offsetY = 0;
    if (transform && transform !== "none") {
        const values = transform.split("(")[1].split(")")[0].split(",");
        offsetX = parseInt(values[4], 10);
        offsetY = parseInt(values[5], 10);
    }
    if (direction === "left") return `translateX(${window.innerWidth + offsetX - rect.left}px)`;
    if (direction === "right") return `translateX(-${rect.left + rect.width - offsetX}px)`;
    if (direction === "up") return `translateY(${window.innerHeight + offsetY - rect.top}px)`;
    return `translateY(-${rect.top + rect.height - offsetY}px)`;
}
function setTranslateValue(direction: SlideDirection, node: HTMLElement | null) {
    if (!node) return;
    const transform = getTranslateValue(direction, node);
    if (transform) {
        node.style.webkitTransform = transform;
        node.style.transform = transform;
    }
}
export const Slide = forwardRef<HTMLElement, BaseTransitionProps & { direction?: SlideDirection }>(function Slide(
    { in: inProp, appear = true, children, direction = "down", easing: e = { enter: easing.easeOut, exit: easing.sharp }, style,
        timeout = { enter: duration.enteringScreen, exit: duration.leavingScreen }, onEnter, onEntered, onExited, ...other }, ref,
) {
    const nodeRef = useRef<HTMLElement>(null);
    const handleRef = useForkRef(nodeRef, (children as { ref?: Ref<HTMLElement> }).ref, ref);
    return <Transition
        appear={appear}
        in={inProp}
        nodeRef={nodeRef}
        timeout={timeout}
        onEnter={(isAppearing: boolean) => {
            const node = (nodeRef.current as HTMLElement);
            setTranslateValue(direction, node);
            reflow(node);
            onEnter?.(node, isAppearing);
        }}
        onEntering={() => {
            const node = (nodeRef.current as HTMLElement);
            const p = getTransitionProps({ style, timeout, easing: e }, "enter");
            node.style.webkitTransition = createTransition("-webkit-transform", p);
            node.style.transition = createTransition("transform", p);
            node.style.webkitTransform = "none";
            node.style.transform = "none";
        }}
        onEntered={(isAppearing: boolean) => onEntered?.((nodeRef.current as HTMLElement), isAppearing)}
        onExit={() => {
            const node = (nodeRef.current as HTMLElement);
            const p = getTransitionProps({ style, timeout, easing: e }, "exit");
            node.style.webkitTransition = createTransition("-webkit-transform", p);
            node.style.transition = createTransition("transform", p);
            setTranslateValue(direction, node);
        }}
        onExited={() => {
            const node = (nodeRef.current as HTMLElement);
            node.style.webkitTransition = "";
            node.style.transition = "";
            onExited?.(node);
        }}
        {...other}
    >
        {(state: TransitionStatus, childProps?: Record<string, unknown>) => cloneElement(children, {
            ...childProps,
            ref: handleRef,
            style: { visibility: state === "exited" && !inProp ? "hidden" : undefined, ...style, ...childStyle(children) },
        })}
    </Transition>
});

// ---------- Collapse (vertikal) ----------
export interface CollapseProps {
    in?: boolean;
    timeout?: Timeout | "auto";
    easing?: Easing;
    className?: string;
    children?: ReactNode;
    unmountOnExit?: boolean;
}
export function Collapse({ in: inProp, timeout = duration.standard, easing: e, className, children, unmountOnExit }: CollapseProps) {
    const nodeRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const autoDuration = useRef<number>();
    const timer = useRef<number>();
    const wrapperSize = () => wrapperRef.current ? wrapperRef.current.clientHeight : 0;

    return <Transition
        in={inProp}
        nodeRef={nodeRef}
        unmountOnExit={unmountOnExit}
        timeout={timeout === "auto" ? (null as unknown as number) : timeout}
        addEndListener={(next: () => void) => {
            if (timeout === "auto") {
                window.clearTimeout(timer.current);
                timer.current = window.setTimeout(next, autoDuration.current || 0);
            }
        }}
        onEnter={() => { (nodeRef.current as HTMLElement).style.height = "0px"; }}
        onEntering={() => {
            const node = (nodeRef.current as HTMLElement);
            const size = wrapperSize();
            const p = getTransitionProps({ timeout, easing: e }, "enter");
            if (timeout === "auto") {
                autoDuration.current = getAutoHeightDuration(size);
                node.style.transitionDuration = `${autoDuration.current}ms`;
            } else {
                node.style.transitionDuration = typeof p.duration === "string" ? p.duration : `${p.duration}ms`;
            }
            node.style.height = `${size}px`;
            node.style.transitionTimingFunction = p.easing as string;
        }}
        onEntered={() => { (nodeRef.current as HTMLElement).style.height = "auto"; }}
        onExit={() => { (nodeRef.current as HTMLElement).style.height = `${wrapperSize()}px`; }}
        onExiting={() => {
            const node = (nodeRef.current as HTMLElement);
            const size = wrapperSize();
            const p = getTransitionProps({ timeout, easing: e }, "exit");
            if (timeout === "auto") {
                autoDuration.current = getAutoHeightDuration(size);
                node.style.transitionDuration = `${autoDuration.current}ms`;
            } else {
                node.style.transitionDuration = typeof p.duration === "string" ? p.duration : `${p.duration}ms`;
            }
            node.style.height = "0px";
            node.style.transitionTimingFunction = p.easing as string;
        }}
    >
        {(state: TransitionStatus) => <div
            ref={nodeRef}
            data-parity="transparent"
            data-slot="collapse"
            data-state={state}
            className={cn(
                "h-0 min-h-0 overflow-hidden [transition:height_300ms_cubic-bezier(0.4,0,0.2,1)_0ms]",
                state === "entered" && "h-auto overflow-visible",
                state === "exited" && !inProp && "invisible",
                className,
            )}
        >
            <div ref={wrapperRef} data-parity="transparent" className="flex w-full">
                <div data-parity="transparent" className="w-full">{children}</div>
            </div>
        </div>}
    </Transition>
}
