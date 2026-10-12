import './index.scss';
import './sections/home.scss';
import { MainLayoutSharedProps } from 'shared/layout/main-layout'
import HeroSection from './sections/hero'
import EnterpriseHighlightSection from './sections/enterprise-highlight'
import ProductsSection from './sections/products'
import CapabilitiesSection from './sections/capabilities'
import PartnerSection from './sections/partner'
import CtaSection from './sections/cta'
import { lazy, PropsWithChildren, Suspense, useRef } from 'react'
import useNearViewport from './sections/use-near-viewport'
import { useTalkToExpert } from 'components/product/shared/page-actions'

const IndustriesSection = lazy(() => import('./sections/industries'))
const NewsSection = lazy(() => import('./sections/news'))

const PLACEHOLDER_CLASS = "min-h-[600px]";

const WhenNearViewport = ({ children }: PropsWithChildren) => {
    const ref = useRef<HTMLDivElement>(null);
    const near = useNearViewport(ref, "600px 0px");
    return near
        ? <Suspense fallback={<div className={PLACEHOLDER_CLASS} />}>{children}</Suspense>
        : <div ref={ref} className={PLACEHOLDER_CLASS} />;
}

export const formatPaginationBullet = (index: number): string => {
    return `${index + 1 < 10 ? '0' : ''}${index + 1}`
}

export default function HomeComponent({ }: MainLayoutSharedProps) {
    const talkToExpert = useTalkToExpert();

    return <div className="home-v2">
        <HeroSection onTalkToExpert={talkToExpert} />
        <EnterpriseHighlightSection />
        <WhenNearViewport><ProductsSection /></WhenNearViewport>
        <WhenNearViewport><CapabilitiesSection /></WhenNearViewport>
        <WhenNearViewport><PartnerSection /></WhenNearViewport>
        <WhenNearViewport><IndustriesSection /></WhenNearViewport>
        <WhenNearViewport><NewsSection /></WhenNearViewport>
        <CtaSection onTalkToExpert={talkToExpert} />
    </div>
}
