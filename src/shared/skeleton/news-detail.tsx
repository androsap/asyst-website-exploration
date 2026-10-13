import { Container } from "components/ui/container";
import { Bone } from "./bone";

// Shared by the route-level PageLoader and the detail page's own loading state, so both
// phases (chunk download → data fetch) look identical and read as a single skeleton.
export default function NewsDetailSkeleton() {
    return <div aria-hidden="true">
        <div className="mt-[84px] border-y border-solid border-[#E4E8EE] max-[1023px]:mt-16">
            <Container maxWidth="xl" className="flex min-h-[44px] items-center gap-3">
                <Bone className="size-4" />
                <Bone className="h-3 w-2" />
                <Bone className="h-3.5 w-10" />
                <Bone className="h-3 w-2" />
                <Bone className="h-3.5 w-[min(260px,45%)]" />
            </Container>
        </div>

        <Container className="max-w-[796px] py-14 max-[599px]:py-10">
            <div className="flex flex-col gap-3">
                <Bone className="h-10 w-[95%] max-[599px]:h-8" />
                <Bone className="h-10 w-[60%] max-[599px]:h-8" />
            </div>
            <Bone className="mt-6 h-11 w-full rounded-full max-[599px]:h-[88px] max-[599px]:rounded-2xl" />
            <Bone className="my-11 aspect-[5/3] w-full rounded-xl max-[599px]:my-7" />
            <div className="flex flex-col gap-3">
                {Array.from({ length: 6 }).map((_, i) => <Bone key={i} className="h-4" style={{ width: i % 3 === 2 ? "70%" : "100%" }} />)}
            </div>
        </Container>
    </div>
}
