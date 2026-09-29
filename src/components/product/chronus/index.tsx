import { useState, useEffect, useRef, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
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
import RequestDemoComponent from '../../../components/home/components/request-demo';
import { bgsModal } from '@andrydharmawan/bgs-component';
import './index.scss';

import { styles } from './styled';
import { BannerModel } from 'models/anteros/banner.model';
import { ProductTestimonialModel } from 'models/anteros/testimonial.model';
import { CustomersModel } from 'models/anteros/customers.model';
import { FeaturesModel } from 'models/anteros/features.model';
import BannerHelper from 'helper/chronus/BannerHelper';
import TestimonialHelper from 'helper/anteros/TestimonialHelper';
import CustomersHelper from 'helper/chronus/CustomersHelper';
import FeaturesHelper from 'helper/chronus/FeatureHelper';
import he from 'he';
import bannerBackground from 'assets/asyst/img/background/product/chronus/chronus-background.png';

const Loading = <Box width="100%" height="150px" display="flex" alignItems="center" justifyContent="center" position="relative">
    <CircularProgress color="inherit" size={40} />
</Box>

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

export default function ChronusDetailComponent({ }: MainLayoutSharedProps) {
    const [data, setData] = useState<BannerModel>({} as BannerModel)
    const [testimonialData, setTestimonialData] = useState<ProductTestimonialModel>({} as ProductTestimonialModel)
    const [customerData, setCustomerData] = useState<CustomersModel>({} as CustomersModel)
    const [featureData, setFeatureData] = useState<FeaturesModel>({} as FeaturesModel)
    const [loading, setLoading] = useState<boolean>(true)
    const prevElementRef = useRef<HTMLDivElement>(null)
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
    return <Box className="container-product">
        <Element name="chronus">
            <Box className='mainBox' sx={{ backgroundImage: `url(${bannerBackground})` }}>
                {!loading && data && (
                    <Container maxWidth="xl">
                        <Box className="backNavContainer">
                            <Link to="https://www.asyst.co.id/our-products">
                                <BackCircleIcon />
                            </Link>
                            <Typography sx={styles.backNavContainer.text}>
                                Product and Services
                            </Typography>
                            <Typography>
                                {data.product?.product_name}
                            </Typography>
                        </Box>
                        <Typography sx={styles.product}>
                            {data.product?.product_name}
                        </Typography>
                        <Box display='flex' flexDirection='row'>
                            <Box className="left-banner" display='flex' flexDirection='column' justifyContent='flex-start'>
                                <Typography sx={styles.title}
                                    dangerouslySetInnerHTML={{ __html: he.decode(data.product?.section?.title_id || '') }} />
                                <Typography sx={styles.description}
                                    dangerouslySetInnerHTML={{ __html: he.decode(data.product?.section?.description_id || '') }} />
                                <Button sx={styles.buttonFrame} onClick={requestDemoModal}>
                                    <Box sx={styles.button}>
                                        <Typography sx={styles.textButton}>Request Demo</Typography>
                                    </Box>
                                </Button>
                            </Box>
                            <Box className="right-banner">
                                <img className="image1" src={data.product?.section?.image1}></img>
                                <img className="image2" src={data.product?.section?.image2}></img>
                            </Box>
                        </Box>
                    </Container>
                )}
            </Box>
            
            <Box
                sx={{
                    position: 'absolute',
                    zIndex: '1',
                    height: '75px',
                    width: '100%',
                    background: '#fff',
                    borderTopRightRadius: '200px',
                    marginTop: '-75px',
                }}
            />
        </Element>
        <Suspense fallback={Loading}>
            <Container maxWidth="xl" sx={{ display: "flex", gap: "100px", flexDirection: "column", paddingTop: '0px' }}>
                <ScaleableComponent />
                <BusinessComponent />
                <Box ref={prevElementRef} />
                <CustomersComponent corporate={customerData} />
            </Container>
            <Grid mt='100px' mb='100px'>
                <FeaturesComponent feature={featureData} prevElement={prevElementRef} nextElement={nextElementRef} />
            </Grid>
            <Container ref={nextElementRef} maxWidth="xl" sx={{ display: "flex", gap: "100px", flexDirection: "column" }}>
                <Box>
                    <InteractComponent />
                </Box>
                <Box>
                    <TestimonialComponent testimonial={testimonialData} />
                </Box>
                <Box>
                    <ResourcesComponent />
                </Box>
                <Box>
                    <JoinComponent />
                </Box>
            </Container> 
        </Suspense>
    </Box>

}
