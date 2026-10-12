import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface BoneProps extends HTMLAttributes<HTMLSpanElement> {
    tone?: "light" | "inverse";
}

const TONES = {
    light: "bg-[linear-gradient(90deg,#E9EDF2_0%,#F6F8FB_40%,#E9EDF2_80%)]",
    inverse: "bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.2)_40%,rgba(255,255,255,0.1)_80%)]",
};

export function Bone({ tone = "light", className, ...props }: BoneProps) {
    return <span
        aria-hidden="true"
        className={cn("block shrink-0 max-w-full rounded-md bg-[length:300%_100%] animate-skeleton-shimmer motion-reduce:animate-none", TONES[tone], className)}
        {...props}
    />
}

export const Card = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) =>
    <div className={cn("box-border rounded-xl border border-solid border-[#E4E8EE] bg-white", className)} {...props} />
