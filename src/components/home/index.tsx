import './index.scss';
import './sections/home.scss';
import { MainLayoutSharedProps } from 'shared/layout/main-layout'
import HeroSection from './sections/hero'
import EnterpriseHighlightSection from './sections/enterprise-highlight'
import ProductsSection from './sections/products'
import CapabilitiesSection from './sections/capabilities'
import PartnerSection from './sections/partner'
import CtaSection from './sections/cta'
import { lazy, PropsWithChildren, ReactNode, Suspense, useRef } from 'react'
import useNearViewport from './sections/use-near-viewport'
import { useTalkToExpert } from 'components/product/shared/page-actions'
import { CapabilitiesSkeleton, IndustriesSkeleton, NewsSkeleton, PartnerSkeleton, ProductsSkeleton } from 'shared/skeleton/home'

const IndustriesSection = lazy(() => import('./sections/industries'))
const NewsSection = lazy(() => import('./sections/news'))

const WhenNearViewport = ({ fallback, children }: PropsWithChildren<{ fallback: ReactNode }>) => {
    const ref = useRef<HTMLDivElement>(null);
    const near = useNearViewport(ref, "600px 0px");
    return near
        ? <Suspense fallback={fallback}>{children}</Suspense>
        : <div ref={ref}>{fallback}</div>;
}

export const formatPaginationBullet = (index: number): string => {
    return `${index + 1 < 10 ? '0' : ''}${index + 1}`
}

export default function HomeComponent({ }: MainLayoutSharedProps) {
    const talkToExpert = useTalkToExpert();

    return <div className="home-v2">
        <HeroSection onTalkToExpert={talkToExpert} />
        <EnterpriseHighlightSection />
        <WhenNearViewport fallback={<ProductsSkeleton />}><ProductsSection /></WhenNearViewport>
        <WhenNearViewport fallback={<CapabilitiesSkeleton />}><CapabilitiesSection /></WhenNearViewport>
        <WhenNearViewport fallback={<PartnerSkeleton />}><PartnerSection /></WhenNearViewport>
        <WhenNearViewport fallback={<IndustriesSkeleton />}><IndustriesSection /></WhenNearViewport>
        <WhenNearViewport fallback={<NewsSkeleton />}><NewsSection /></WhenNearViewport>
        <CtaSection onTalkToExpert={talkToExpert} />
    </div>
}
