import { Fade } from "components/ui/transitions";
import PageSkeleton from "shared/skeleton";

interface PageLoaderProps {
    open?: boolean;
}

export default function PageLoader({ open = true }: PageLoaderProps) {
    return <Fade in={open} timeout={{ enter: 0, exit: 400 }} unmountOnExit>
        <div className="fixed inset-0 z-[99999] overflow-hidden bg-white">
            <PageSkeleton />
        </div>
    </Fade>
}
