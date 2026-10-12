import { Container } from "components/ui/container";
import { Bone } from "./bone";

const COLUMNS = [
    [70, 80, 60, 130, 90],
    [70, 90, 140, 90, 80, 130],
    [70, 190, 180, 220, 230, 180],
    [80, 80, 90, 70, 100, 110],
];

export default function FooterSkeleton() {
    return <div className="mt-20 bg-[#123554] pb-5 pt-8">
        <Container maxWidth="xl">
            <div className="grid grid-cols-[repeat(5,auto)] justify-between gap-8 max-[1023px]:grid-cols-2 max-[599px]:grid-cols-1">
                <div className="flex gap-8 max-[1023px]:col-span-full max-[599px]:flex-col">
                    <Bone tone="inverse" className="h-8 w-[94px] max-[599px]:w-[114px] max-[599px]:self-center" />
                    <div className="flex w-[280px] max-w-full flex-col max-[599px]:w-full">
                        <Bone tone="inverse" className="my-1 h-4 w-[200px]" />
                        <Bone tone="inverse" className="my-1.5 h-3 w-full" />
                        <Bone tone="inverse" className="my-1.5 h-3 w-[90%]" />
                        <Bone tone="inverse" className="my-1.5 h-3 w-[55%]" />
                        <Bone tone="inverse" className="mb-1.5 mt-3.5 h-3 w-[150px]" />
                        <Bone tone="inverse" className="mb-1.5 mt-3.5 h-3 w-[190px]" />
                    </div>
                </div>
                {COLUMNS.map((widths, i) => <div key={i} className="flex flex-col gap-4 max-[599px]:gap-6">
                    {widths.map((width, j) => <Bone key={j} tone="inverse" className={j ? "my-1.5 h-3" : "my-1 h-4"} style={{ width }} />)}
                </div>)}
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 max-[599px]:flex-col">
                <div className="flex flex-wrap items-center gap-x-[18px] gap-y-2 max-[599px]:flex-col max-[599px]:gap-4">
                    <Bone tone="inverse" className="h-3 w-[320px]" />
                    <Bone tone="inverse" className="h-3 w-20" />
                    <Bone tone="inverse" className="h-3 w-24" />
                </div>
                <div className="flex items-center gap-3.5">
                    <Bone tone="inverse" className="h-3 w-[90px]" />
                    <Bone tone="inverse" className="size-[26px]" />
                    <Bone tone="inverse" className="size-[26px]" />
                </div>
            </div>
        </Container>
    </div>
}
