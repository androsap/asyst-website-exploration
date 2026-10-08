import { useState, useEffect, useRef, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import { Typography } from "components/ui/typography";
import { Container } from "components/ui/container";
import { Button } from "components/ui/button";
import { CircularProgress } from "components/ui/circular-progress";
import { ReactComponent as BackCircleIcon } from 'assets/asyst/img/icon/industry/back-circle.svg';
import { MainLayoutSharedProps } from 'shared/layout/main-layout';
import ScaleableComponent from './components/scaleable';
import BusinessComponent from './components/business';
import InteractComponent from './components/interact';
import TestimonialComponent from './components/testimonial';
import JoinComponent from './components/join';
import ResourcesComponent from './components/resources';
import FeaturesComponent from 'shared/components/product/features';
import CustomersComponent from './components/loyalty';
import { requestDemoModal } from 'components/product/shared/page-actions';
import './index.scss';

import { styles } from './styled';
import { BannerModel } from 'models/amala/banner.model';
import { ProductTestimonialModel } from 'models/amala/testimonial.model';
import { CustomersModel } from 'models/amala/customers.model';
import { FeaturesModel } from 'models/amala/features.model';
import BannerHelper from 'helper/athena/BannerHelper';
import TestimonialHelper from 'helper/amala/TestimonialHelper';
import CustomersHelper from 'helper/athena/CustomersHelper';
import FeaturesHelper from 'helper/athena/FeatureHelper';
import he from 'he';
import { useApiText, useT } from 'shared/i18n';
import bannerBackground from 'assets/asyst/img/background/product/athena/athena-background.webp';

const Loading = <div className="w-full h-[150px] flex items-center justify-center relative">
    <CircularProgress size={40} />
</div>

export default function AthenaDetailComponent({ }: MainLayoutSharedProps) {
    const [data, setData] = useState<BannerModel>({} as BannerModel)
    const [testimonialData, setTestimonialData] = useState<ProductTestimonialModel>({} as ProductTestimonialModel)
    const [customerData, setCustomerData] = useState<CustomersModel>({} as CustomersModel)
    const [featureData, setFeatureData] = useState<FeaturesModel>({} as FeaturesModel)
    const [loading, setLoading] = useState<boolean>(true)
    const prevElementRef = useRef<HTMLDivElement>(null)
    const apiText = useApiText()
    const t = useT()
    const nextElementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        getData()
        getTestimonialData()
        getCustomerData()
        getFeatureData()
    }, [])

    const getData = () => {
        setLoading(true)
        BannerHelper.get(({ status, data }) => {
            setLoading(false)
            if (status) setData(data.data)
        })
    }

    const getTestimonialData = () => {
        setLoading(true)
        TestimonialHelper.get(({ status, data }) => {
            setLoading(false)
            if (status) setTestimonialData(data.data || [])
        })
    }

    const getCustomerData = () => {
        setLoading(true)
        CustomersHelper.get(({ status, data }) => {
            setLoading(false)
            if (status) setCustomerData(data.data)
        })
    }

    const getFeatureData = () => {
        setLoading(true)
        FeaturesHelper.get(({ status, data }) => {
            setLoading(false)
            if (status) setFeatureData(data.data)
        })
    }

    // console.log("data nih", data.product?.product_name)
    return <div className="container-product">
        <Element name="athena">
            <div className='mainBox' style={{ backgroundImage: `url(${bannerBackground})` }}>
                {!loading && data && (
                    <Container maxWidth="xl">
                        <div className="backNavContainer">
                            <Link to="https://www.asyst.co.id/our-products">
                                <BackCircleIcon />
                            </Link>
                            <Typography className={styles.backNavText}>
                                {t("Product and Services", "Produk dan Layanan")}
                            </Typography>
                            <Typography>
                                {data.product?.product_name}
                            </Typography>
                        </div>
                        <Typography className={styles.product}>
                            {data.product?.product_name}
                        </Typography>
                        <div className="flex flex-row">
                            <div className="left-banner flex flex-col justify-start">
                                <Typography className={styles.title}
                                    dangerouslySetInnerHTML={{ __html: he.decode(apiText(data.product?.section, "title") || '') }} />
                                <Typography className={styles.description}
                                    dangerouslySetInnerHTML={{ __html: he.decode(apiText(data.product?.section, "description") || '') }} />
                                <Button className={styles.buttonFrame} onClick={requestDemoModal}>
                                    <span className={styles.button}>
                                        <Typography component="span" className={`block ${styles.textButton}`}>{t("Request Demo", "Minta Demo")}</Typography>
                                    </span>
                                </Button>
                            </div>
                            <div className="right-banner">
                                <img alt="" className="image1" src={data.product?.section?.image1}></img>
                                <img alt="" className="image2" src={data.product?.section?.image2}></img>
                            </div>
                        </div>
                    </Container>
                )}
            </div>
            
            <div className="absolute z-[1] h-[75px] w-full [background:#fff] rounded-tr-[200px] mt-[-75px]" />
        </Element>
        <Suspense fallback={Loading}>
            <Container maxWidth="xl" className="flex gap-[100px] flex-col pt-[0px]">
                <ScaleableComponent />
                <BusinessComponent />
                <div ref={prevElementRef} />
                <CustomersComponent corporate={customerData} />
            </Container>
            <div className="box-border flex-row mt-[100px] mb-[100px]">
                <FeaturesComponent feature={featureData} prevElement={prevElementRef} nextElement={nextElementRef} />
            </div>
            <Container ref={nextElementRef} maxWidth="xl" className="flex gap-[100px] flex-col">
                <div>
                    <InteractComponent />
                </div>
                <div>
                    <TestimonialComponent testimonial={testimonialData} />
                </div>
                <div>
                    <ResourcesComponent />
                </div>
                <div>
                    <JoinComponent />
                </div>
            </Container>
        </Suspense>
    </div>

}
