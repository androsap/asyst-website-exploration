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

// Section jauh di bawah fold yang membawa dependency berat (Swiper, axios + request API news):
// chunk-nya baru diunduh saat mendekati viewport, supaya tidak berebut bandwidth dengan hero (LCP)
const IndustriesSection = lazy(() => import('./sections/industries'))
const NewsSection = lazy(() => import('./sections/news'))

// Placeholder setinggi kira-kira satu section, supaya section di-mount satu per satu saat di-scroll
const PLACEHOLDER_CLASS = "min-h-[600px]";

/**
 * Section di bawah fold baru di-mount saat mendekati viewport: render awal (task main thread terpanjang)
 * jadi jauh lebih ringan, sehingga hero (LCP) tampil lebih cepat & TBT turun.
 */
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
