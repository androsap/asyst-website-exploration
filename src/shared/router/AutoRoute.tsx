import { Suspense } from "react";
import PageLoader from "shared/page-loader";

interface AutoRouteProps {
    Component: React.LazyExoticComponent<() => JSX.Element>;
}

export default function AutoRoute({ Component }: AutoRouteProps) {
    try {
        return <Suspense fallback={<PageLoader />}>
            <Component />
        </Suspense>
    } catch (error) {
        return <>Error</>
    }
}
