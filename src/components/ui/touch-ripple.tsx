import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";

/**
 * Efek ripple saat tombol ditekan — replika TouchRipple MUI v5:
 * enter 550ms (scale 0 -> 1, opacity 0.1 -> 0.3), exit 550ms (opacity -> 0),
 * pulsate 2500ms saat fokus keyboard. Easing cubic-bezier(0.4, 0, 0.2, 1).
 */
const DURATION = 550;
const PULSATE_DURATION = 200;
const DELAY_RIPPLE = 80;
const EASE = "cubic-bezier(0.4,0,0.2,1)";

type RippleEvent = { type?: string; clientX?: number; clientY?: number; touches?: TouchList | { clientX: number; clientY: number }[] };

interface RippleData {
    key: number;
    pulsate: boolean;
    x: number;
    y: number;
    size: number;
    leaving: boolean;
}

export interface TouchRippleHandle {
    start: (event?: RippleEvent, options?: { pulsate?: boolean; center?: boolean }) => void;
    stop: (event?: RippleEvent, cb?: () => void) => void;
    pulsate: () => void;
}

function Ripple({ ripple, onExited }: { ripple: RippleData; onExited: () => void }) {
    const { pulsate, x, y, size, leaving } = ripple;

    useEffect(() => {
        if (!leaving) return;
        const id = window.setTimeout(onExited, DURATION);
        return () => window.clearTimeout(id);
    }, [leaving, onExited]);

    return <span
        className="absolute opacity-[0.3] [transform:scale(1)]"
        style={{
            width: size, height: size, top: -(size / 2) + y, left: -(size / 2) + x,
            animation: `mui-ripple-enter ${pulsate ? PULSATE_DURATION : DURATION}ms ${EASE}`,
        }}
    >
        <span
            className="block w-full h-full rounded-[50%] bg-current"
            // Urutan prioritas sama dengan MUI: aturan pulsate menimpa animasi exit
            style={{
                opacity: leaving ? 0 : 1,
                ...(leaving && { animation: `mui-ripple-exit ${DURATION}ms ${EASE}` }),
                ...(pulsate && { position: "absolute", left: 0, top: 0, animation: `mui-ripple-pulsate 2500ms ${EASE} 200ms infinite` }),
            }}
        />
    </span>
}

export const TouchRipple = forwardRef<TouchRippleHandle, { center?: boolean }>(function TouchRipple({ center: centerProp = false }, ref) {
    const [ripples, setRipples] = useState<RippleData[]>([]);
    const nextKey = useRef(0);
    const container = useRef<HTMLSpanElement>(null);
    const ignoringMouseDown = useRef(false);
    const startTimer = useRef<number>();
    const startTimerCommit = useRef<(() => void) | null>(null);
    const rippleCallback = useRef<(() => void) | null>(null);

    useEffect(() => {
        if (rippleCallback.current) {
            rippleCallback.current();
            rippleCallback.current = null;
        }
    }, [ripples]);

    useEffect(() => () => window.clearTimeout(startTimer.current), []);

    const startCommit = useCallback((data: Omit<RippleData, "key" | "leaving">) => {
        setRipples(old => [...old, { ...data, key: nextKey.current++, leaving: false }]);
    }, []);

    const start = useCallback<TouchRippleHandle["start"]>((event = {}, options = {}) => {
        const { pulsate = false, center = centerProp || options.pulsate } = options;
        if (event?.type === "mousedown" && ignoringMouseDown.current) {
            ignoringMouseDown.current = false;
            return;
        }
        if (event?.type === "touchstart") ignoringMouseDown.current = true;

        const element = container.current;
        const rect = element ? element.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
        let x: number, y: number, size: number;
        const touches = event.touches as { clientX: number; clientY: number }[] | undefined;
        if (center || (event.clientX === 0 && event.clientY === 0) || (!event.clientX && !touches)) {
            x = Math.round(rect.width / 2);
            y = Math.round(rect.height / 2);
        } else {
            const point = touches && touches.length > 0 ? touches[0] : (event as { clientX: number; clientY: number });
            x = Math.round(point.clientX - rect.left);
            y = Math.round(point.clientY - rect.top);
        }
        if (center) {
            size = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
            if (size % 2 === 0) size += 1;
        } else {
            const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - x), x) * 2 + 2;
            const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - y), y) * 2 + 2;
            size = Math.sqrt(sizeX ** 2 + sizeY ** 2);
        }

        if (touches) {
            if (startTimerCommit.current === null) {
                startTimerCommit.current = () => startCommit({ pulsate, x, y, size });
                startTimer.current = window.setTimeout(() => {
                    if (startTimerCommit.current) {
                        startTimerCommit.current();
                        startTimerCommit.current = null;
                    }
                }, DELAY_RIPPLE);
            }
        } else {
            startCommit({ pulsate, x, y, size });
        }
    }, [centerProp, startCommit]);

    const stop = useCallback<TouchRippleHandle["stop"]>((event, cb) => {
        window.clearTimeout(startTimer.current);
        if (event?.type === "touchend" && startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
            startTimer.current = window.setTimeout(() => stop(event, cb), 0);
            return;
        }
        startTimerCommit.current = null;
        setRipples(old => {
            const index = old.findIndex(r => !r.leaving);
            if (index === -1) return old;
            return old.map((r, i) => i === index ? { ...r, leaving: true } : r);
        });
        rippleCallback.current = cb ?? null;
    }, []);

    const pulsate = useCallback(() => start({}, { pulsate: true }), [start]);

    useImperativeHandle(ref, () => ({ start, stop, pulsate }), [start, stop, pulsate]);

    return <span
        ref={container}
        data-parity="skip"
        className="overflow-hidden pointer-events-none absolute z-0 inset-0 rounded-[inherit]"
    >
        {ripples.map(ripple => (
            <Ripple key={ripple.key} ripple={ripple} onExited={() => setRipples(old => old.filter(r => r.key !== ripple.key))} />
        ))}
    </span>
});
