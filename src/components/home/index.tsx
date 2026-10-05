import Box from '@mui/material/Box'
import './index.scss';
import './sections/home.scss';
import { MainLayoutSharedProps } from 'shared/layout/main-layout'
import RequestDemoComponent from './components/request-demo'
import { bgsModal } from '@andrydharmawan/bgs-component'
import HeroSection from './sections/hero'
import EnterpriseHighlightSection from './sections/enterprise-highlight'
import ProductsSection from './sections/products'
import CapabilitiesSection from './sections/capabilities'
import PartnerSection from './sections/partner'
import IndustriesSection from './sections/industries'
import NewsSection from './sections/news'
import CtaSection from './sections/cta'
import { useTalkToExpert } from 'components/product/shared/page-actions'

export const requestDemoModal = () => {
    bgsModal({
        isBlur: true,
        className: "customBgsModal",
        render: (e) => {
            return <RequestDemoComponent
                hide={e.hide}
            />
        }
    })
};

export const requestDemoModal2 = requestDemoModal;

export const formatPaginationBullet = (index: number): string => {
    return `${index + 1 < 10 ? '0' : ''}${index + 1}`
}

export default function HomeComponent({ }: MainLayoutSharedProps) {
    const talkToExpert = useTalkToExpert();

    return <Box className="home-v2">
        <HeroSection onTalkToExpert={talkToExpert} />
        <EnterpriseHighlightSection />
        <ProductsSection />
        <CapabilitiesSection />
        <PartnerSection />
        <IndustriesSection />
        <NewsSection />
        <CtaSection onTalkToExpert={talkToExpert} />
    </Box>
}
