import { PropsWithChildren } from "react";
import { Container } from "components/ui/container";
import { cn } from "@/lib/utils";
import { Bone, Card } from "./bone";

const HERO_BACKGROUND = "radial-gradient(ellipse 60% 55% at 45% 40%, rgba(214, 228, 250, 0.75) 0%, rgba(255, 255, 255, 0) 70%), linear-gradient(180deg, #F7FAFE 0%, #FFFFFF 100%)";

const repeat = (count: number) => Array.from({ length: count }, (_, i) => i);

const Section = ({ className, children }: PropsWithChildren<{ className?: string }>) =>
    <section className={cn("py-14 max-[599px]:py-10", className)}>
        <Container maxWidth="xl">{children}</Container>
    </section>

const Heading = ({ description = true }: { description?: boolean }) =>
    <div className="mx-auto mb-10 flex max-w-[1120px] flex-col items-center gap-3">
        <Bone className="h-9 w-[min(560px,90%)] max-[599px]:h-7" />
        {description && <>
            <Bone className="mt-2 h-4 w-[min(800px,95%)]" />
            <Bone className="h-4 w-[min(560px,75%)]" />
        </>}
    </div>

const Lines = ({ widths, className }: { widths: string[]; className?: string }) =>
    <div className="flex flex-col gap-2.5">
        {widths.map((width, i) => <Bone key={i} className={cn("h-3.5", className)} style={{ width }} />)}
    </div>

const Chips = ({ widths }: { widths: number[] }) =>
    <div className="flex flex-wrap gap-2.5">
        {widths.map((width, i) => <Bone key={i} className="h-8 rounded-full" style={{ width }} />)}
    </div>

const NavButtons = ({ size = "size-10" }: { size?: string }) =>
    <div className="flex gap-3">
        <Bone className={cn(size, "rounded-full")} />
        <Bone className={cn(size, "rounded-full")} />
    </div>

export function HeroSkeleton() {
    return <section className="box-border flex min-h-[max(706px,min(100svh,1067px))] flex-col pb-8 pt-[116px] max-[1023px]:min-h-[min(100svh,1067px)] max-[1023px]:pt-[110px] max-[599px]:min-h-0 max-[599px]:pb-2 max-[599px]:pt-28" style={{ background: HERO_BACKGROUND }}>
        <Container maxWidth="xl" className="flex flex-1 flex-col">
            <div className="m-auto flex w-full max-w-[1000px] flex-col items-center">
                <Bone className="h-12 w-[min(900px,100%)] max-[599px]:h-8" />
                <Bone className="mt-3 h-12 w-[min(560px,70%)] max-[599px]:h-8" />
                <div className="mt-10 flex w-full flex-col items-center gap-3 max-[599px]:mt-6">
                    <Bone className="h-4 w-[min(840px,100%)]" />
                    <Bone className="h-4 w-[min(780px,95%)]" />
                    <Bone className="h-4 w-[min(420px,60%)]" />
                </div>
                <div className="mt-10 flex gap-4 max-[599px]:mt-12 max-[599px]:w-full max-[599px]:flex-col max-[599px]:gap-6">
                    <Bone className="h-12 w-[200px] rounded-lg max-[599px]:h-14 max-[599px]:w-full" />
                    <Bone className="h-12 w-[180px] rounded-lg max-[599px]:h-14 max-[599px]:w-full" />
                </div>
                <div className="mt-10 flex flex-col items-center gap-7">
                    <Bone className="h-5 w-[110px] rounded-full" />
                    <div className="flex flex-wrap justify-center gap-x-9 gap-y-4">
                        {repeat(3).map(i => <div key={i} className="flex items-center gap-3">
                            <Bone className="size-10 rounded-lg" />
                            <div className="flex flex-col gap-2">
                                <Bone className="h-3.5 w-[130px]" />
                                <Bone className="h-3 w-[100px]" />
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
            <div className="mt-14 flex items-center gap-10 max-[1023px]:flex-col max-[1023px]:gap-5 max-[599px]:mt-10 max-[599px]:gap-4">
                <Bone className="h-4 w-[90px]" />
                <div className="flex w-full gap-6 overflow-hidden">
                    {repeat(8).map(i => <Bone key={i} className="h-[158px] w-[146px] rounded-lg max-[599px]:h-[92px] max-[599px]:w-[72px]" />)}
                </div>
            </div>
        </Container>
    </section>
}

export function HighlightSkeleton() {
    return <Section>
        <Heading />
        <div className="flex gap-6 overflow-hidden max-[599px]:gap-4">
            {repeat(3).map(i => <Card key={i} className="flex shrink-0 basis-[calc((100%-48px)/2.15)] gap-5 p-7 max-[899px]:basis-[calc((100%-24px)/1.1)] max-[599px]:basis-full max-[599px]:flex-col max-[599px]:gap-4 max-[599px]:p-6">
                <Bone className="size-[52px] rounded-[10px]" />
                <div className="flex flex-1 flex-col gap-3">
                    <Bone className="h-6 w-[85%]" />
                    <Bone className="mb-2 h-6 w-[45%]" />
                    <Lines widths={["100%", "95%", "70%"]} />
                </div>
            </Card>)}
        </div>
        <div className="mt-6 flex justify-center gap-2">
            {repeat(3).map(i => <Bone key={i} className="size-2 rounded-full" />)}
        </div>
    </Section>
}

export function ProductsSkeleton() {
    return <Section>
        <Heading />
        <div className="mx-auto mb-4 box-border flex w-fit max-w-full gap-3 overflow-hidden rounded-full border border-solid border-[#E4E8EE] bg-[#FBFCFE] p-2 max-[599px]:mx-[-16px] max-[599px]:mb-6 max-[599px]:w-auto max-[599px]:gap-2 max-[599px]:rounded-none">
            {[130, 110, 110, 110, 220].map((width, i) => <Bone key={i} className="h-11 rounded-full" style={{ width }} />)}
        </div>
        <div className="grid grid-cols-4 gap-4 max-[1023px]:grid-cols-2 max-[599px]:flex max-[599px]:overflow-hidden">
            {repeat(4).map(i => <Card key={i} className="flex flex-col gap-3 overflow-hidden px-4 pt-7 max-[599px]:basis-[85%] max-[599px]:shrink-0 max-[599px]:pt-12">
                <Bone className="h-6 w-[80%]" />
                <Bone className="mb-2 h-6 w-[50%]" />
                <Lines widths={["100%", "92%", "60%"]} />
                <Bone className="mt-6 h-[180px] w-full rounded-b-none rounded-t-lg max-[599px]:h-[200px]" />
            </Card>)}
        </div>
    </Section>
}

export function CapabilitiesSkeleton() {
    return <Section>
        <Heading />
        <div className="grid grid-cols-[minmax(260px,1fr)_3fr] gap-5 max-[1023px]:grid-cols-1 max-[599px]:gap-8">
            <Card className="flex flex-col gap-2 p-5 max-[1023px]:flex-row max-[1023px]:overflow-hidden">
                {repeat(5).map(i => <div key={i} className="flex shrink-0 items-center gap-4 p-3">
                    <Bone className="size-[52px] rounded-[10px] max-[599px]:size-12" />
                    <div className="flex flex-col gap-2">
                        <Bone className="h-3.5 w-[120px]" />
                        <Bone className="h-3.5 w-[70px]" />
                    </div>
                </div>)}
            </Card>
            <Card className="grid grid-cols-[1fr_1.2fr] gap-8 p-7 max-[1023px]:grid-cols-1 max-[599px]:p-4">
                <div className="flex flex-col gap-3">
                    <Bone className="h-8 w-[75%]" />
                    <Bone className="mb-3 h-8 w-[45%]" />
                    <Lines widths={["100%", "96%", "92%", "55%"]} />
                    <div className="mt-4"><Chips widths={[110, 140, 120, 100]} /></div>
                </div>
                <Bone className="h-[360px] w-full rounded-[10px] max-[599px]:h-[220px]" />
            </Card>
        </div>
    </Section>
}

export function PartnerSkeleton() {
    return <Section>
        <Heading description={false} />
        <div className="grid auto-rows-[440px] grid-cols-3 gap-9 max-[1023px]:auto-rows-[360px] max-[1023px]:grid-cols-1 max-[1023px]:gap-5 max-[599px]:auto-rows-[320px] max-[599px]:gap-[18px]">
            {[1, 2, 2, 1].map((span, i) => <div key={i} className={cn("relative flex items-end p-4", span === 2 && "col-span-2 max-[1023px]:col-span-1")}>
                <Bone className="absolute inset-0 rounded-2xl" />
                <div className="relative box-border flex w-full flex-col gap-3 rounded-[10px] bg-white/50 p-5">
                    <Bone className="h-7 w-[45%]" />
                    <Lines widths={["90%", "60%"]} />
                </div>
            </div>)}
        </div>
    </Section>
}

export function IndustriesSkeleton() {
    return <Section>
        <div className="grid grid-cols-[minmax(320px,1fr)_2fr] gap-10 max-[1023px]:grid-cols-1">
            <div className="flex flex-col">
                <Bone className="h-9 w-[90%]" />
                <Bone className="mt-3 h-9 w-[60%]" />
                <div className="mt-6"><Lines widths={["100%", "94%", "98%", "50%"]} className="h-4" /></div>
                <div className="mt-8 flex items-center justify-between">
                    <Bone className="h-4 w-[110px]" />
                    <NavButtons />
                </div>
            </div>
            <div className="flex gap-8 overflow-hidden max-[599px]:gap-4">
                {repeat(3).map(i => <Card key={i} className="flex shrink-0 basis-[calc((100%-64px)/2.25)] flex-col px-4 pb-5 pt-4 max-[1199px]:basis-[calc((100%-32px)/1.6)] max-[599px]:basis-full">
                    <Bone className="h-[190px] w-full rounded-xl max-[599px]:h-[180px]" />
                    <Bone className="mb-3 mt-6 h-8 w-[55%]" />
                    <Lines widths={["100%", "95%", "65%"]} />
                    <div className="mt-7"><Chips widths={[60, 80, 100]} /></div>
                </Card>)}
            </div>
        </div>
    </Section>
}

export function NewsSkeleton() {
    return <Section>
        <div className="mb-8 flex items-center justify-between">
            <Bone className="h-9 w-[120px]" />
            <NavButtons size="size-[52px] max-[599px]:size-10" />
        </div>
        <div className="flex gap-5 overflow-hidden max-[599px]:gap-4">
            {repeat(4).map(i => <NewsCardSkeleton key={i} className="basis-[calc((100%-60px)/3.2)] max-[1023px]:basis-[calc((100%-20px)/2.1)] max-[599px]:basis-full" />)}
        </div>
    </Section>
}

export function NewsCardSkeleton({ className }: { className?: string }) {
    return <div className={cn("relative box-border flex h-[550px] shrink-0 flex-col justify-between p-4 max-[599px]:h-[380px]", className)}>
        <Bone className="absolute inset-0 rounded-[20px]" />
        <Bone className="relative h-9 w-[110px] rounded-full" />
        <div className="relative box-border flex flex-col gap-2.5 rounded-xl bg-white/60 px-5 py-[18px]">
            <Bone className="h-5 w-[90%]" />
            <Bone className="h-5 w-[55%]" />
        </div>
    </div>
}

export function CtaSkeleton() {
    return <Section>
        <div className="box-border flex items-center justify-between gap-8 rounded-[14px] bg-[#2775BB] px-14 py-[52px] max-[1023px]:px-6 max-[1023px]:py-8 max-[599px]:mx-[-16px] max-[599px]:flex-col max-[599px]:items-start max-[599px]:gap-10 max-[599px]:rounded-none max-[599px]:px-6 max-[599px]:py-10">
            <div className="flex flex-1 flex-col gap-3">
                <Bone tone="inverse" className="mb-2 h-8 w-[min(480px,90%)]" />
                <Bone tone="inverse" className="h-4 w-[min(900px,100%)]" />
                <Bone tone="inverse" className="h-4 w-[min(520px,70%)]" />
            </div>
            <Bone tone="inverse" className="h-[52px] w-[190px] rounded-lg" />
        </div>
    </Section>
}

export default function HomeSkeleton() {
    return <>
        <HeroSkeleton />
        <HighlightSkeleton />
        <ProductsSkeleton />
        <CapabilitiesSkeleton />
        <PartnerSkeleton />
        <IndustriesSkeleton />
        <NewsSkeleton />
        <CtaSkeleton />
    </>
}
