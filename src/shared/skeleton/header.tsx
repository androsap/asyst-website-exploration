import { Container } from "components/ui/container";
import { Bone } from "./bone";

const NAV_WIDTHS = [80, 80, 56, 90];

export default function HeaderSkeleton() {
    return <div className="absolute inset-x-0 top-0 z-[1]">
        <Container maxWidth="xl" className="flex h-[84px] items-center justify-between gap-6 max-[1023px]:h-16">
            <Bone className="h-10 w-[120px] max-[1023px]:h-8 max-[1023px]:w-24" />
            <div className="flex gap-8 max-[1023px]:hidden">
                {NAV_WIDTHS.map((width, i) => <Bone key={i} className="h-4" style={{ width }} />)}
            </div>
            <div className="flex items-center gap-4">
                <Bone className="size-10 rounded-full" />
                <Bone className="h-4 w-[60px] max-[1023px]:hidden" />
                <Bone className="h-11 w-[150px] rounded-lg max-[1023px]:hidden" />
                <Bone className="hidden size-10 rounded-full max-[1023px]:block" />
                <Bone className="hidden size-10 rounded-full max-[1023px]:block" />
            </div>
        </Container>
    </div>
}
