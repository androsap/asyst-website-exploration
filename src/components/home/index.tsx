import { lazy, Suspense, useState, useEffect, useRef } from 'react'
import { Element } from 'react-scroll'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import Skeleton from '@mui/material/Skeleton'
import Drawer from '@mui/material/Drawer'
import LinkMui from '@mui/material/Link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/mousewheel'
import './index.scss';
import { styles } from './styled'
import { styles as stylesOurFact } from './components/our-fact/styled'
import { MainLayoutSharedProps } from 'shared/layout/main-layout'
import NewsHomeComponent from './components/news'
import RequestDemoComponent from './components/request-demo'
import HomeBannerMobileComponent from './components/mobile/banner'
import ServiceProductSolutionComponent from './components/mobile/product-service-solution'
import { OurFactInterface } from './components/our-fact'
import { ReactComponent as ArrowLeft } from 'assets/asyst/img/icon/arrow-left.svg'
import { ReactComponent as CurvedLine1 } from 'assets/asyst/img/icon/our-fact/curved-line-1.svg'
import { ReactComponent as CurvedLine2 } from 'assets/asyst/img/icon/our-fact/curved-line-2.svg'
import { bgsModal } from '@andrydharmawan/bgs-component'
import { MainBannerModel } from 'models/mainbanner.model'
import MainBannerHelper from 'helper/MainBannerHelper'
import CustomersWeServeHelper from 'helper/home/CustomersWeServeHelper'
import he from 'he'
import OurFactHelper from 'helper/home/OurFactHelper'
import { scrollTo } from 'lib'

const StoryHomeComponent = lazy(() => import("./components/story"));
const ServicesSolutionsHomeComponent = lazy(() => import("./components/services-solutions"));
const OurFactHomeComponent = lazy(() => import("./components/our-fact"));
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

export const requestDemoModal2 = () => {
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

interface CustomerDataInterface {
    customer_name: string;
    description_id: string;
    description_en: string;
    category_id: string;
    category_en: string;
    sequence: string;
    status: string;
    img_customer: string;
    img_popup: string;
    img_icon1: string;
    img_icon2: string;
    img_icon3: string;
    img_icon4: string;
}

export const formatPaginationBullet = (index: number): string => {
    return `${index + 1 < 10 ? '0' : ''}${index + 1}`
}

export default function HomeComponent({ }: MainLayoutSharedProps) {
    const [data, setData] = useState<MainBannerModel[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [activeCustomer, setActiveCustomer] = useState('')
    const [customersData, setCustomersData] = useState<CustomerDataInterface[] | null>(null)
    const [customersLoading, setCustomersLoading] = useState(true)
    const [ourFactData, setOurFactData] = useState<OurFactInterface | null>(null)
    const [ourFactLoading, setOurFactLoading] = useState(true)
    const [isLastSlide, setIsLastSlide] = useState<boolean>(false)
    const [hasScrolledDownOnLastSlide, setHasScrolledDownOnLastSlide] = useState<boolean>(false)
    const storyRef = useRef<HTMLDivElement>(null)
    const containerHomeRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const bannerRef = useRef<HTMLDivElement>(null)


    const activeCustomerData: CustomerDataInterface | undefined | null = customersData && customersData.find(data => data.customer_name === activeCustomer)

    useEffect(() => {
        getData()
        getCustomers()
        getOurFact()
    }, [])

    const getData = () => {
        setLoading(true)
        MainBannerHelper.get(({ status, data }) => {
            setLoading(false)
            if (status && data?.data?.length) {
                setData(data.data || [])
            }
            // console.log("data nih", data?.button_text1)
        })
    }
    const getCustomers = () => {
        setCustomersLoading(true)
        CustomersWeServeHelper.get(({ status, data }) => {
            setCustomersLoading(false)
            if (status && data?.data?.customers_we_serve) {
                setCustomersData(data?.data?.customers_we_serve)
                // console.log("data customers ", customersData)
            }
        })
    }
    const getOurFact = () => {
        setOurFactLoading(true)
        OurFactHelper.get(({ status, data }) => {
            setOurFactLoading(false)
            if (status && data?.data?.section) setOurFactData(data?.data?.section)
            // console.log("data our fact", data?.data?.section)
        })
    }

    const matches = useMediaQuery('(max-width:1023px)');

    const handleClose = () => {
        setActiveCustomer('')
    }

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            if (event.deltaY > 0 && isLastSlide && !hasScrolledDownOnLastSlide) {
                setHasScrolledDownOnLastSlide(true);
            } else if (event.deltaY > 0 && hasScrolledDownOnLastSlide) {
                scrollTo(storyRef)
            }
        };

        if (isVisible && isLastSlide) {
            window.addEventListener('wheel', handleWheel);
        } else {
            window.removeEventListener('wheel', handleWheel);
            setHasScrolledDownOnLastSlide(false);
        }

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [isLastSlide, hasScrolledDownOnLastSlide, isVisible]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.1 }
        )

        if (bannerRef.current) {
            observer.observe(bannerRef.current)
        }

        return () => {
            if (bannerRef.current) {
                observer.unobserve(bannerRef.current)
            }
        }
    }, [])

    return <Box ref={containerHomeRef} className="container-home">
        <Element name="home">
            <Box ref={bannerRef} sx={{ height: "100vh" }} className="home-banner">
                {matches &&
                    <HomeBannerMobileComponent banner={data} />
                }
                {!matches &&
                    <>
                        <Swiper
                            modules={[Pagination, FreeMode, Mousewheel]}
                            direction={'vertical'} mousewheel={true}
                            slidesPerView={1} freeMode={false} loop={false}
                            pagination={{
                                clickable: true,
                                el: '.swiper-pagination',
                                renderBullet: (index, className) => {
                                    return `<span class="${className} pagination-number">${formatPaginationBullet(index)}</span>`;
                                }
                            }}
                            onSlideChange={(swiper) => {
                                scrollTo(containerHomeRef)
                                if (swiper.activeIndex + 1 >= data.length) setIsLastSlide(true)
                                else setIsLastSlide(false)
                            }}
                            style={{
                                width: '100%',
                                height: '100%',
                                overflow: 'hidden'
                            }}
                        >
                            {(!loading && data?.length > 0) ?
                                data.map((item, index) => (
                                    <SwiperSlide key={index + 1}>
                                        <Box sx={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.72) 52.63%, rgba(0, 0, 0, 0.42) 96.23%), url(${item.image})`, backgroundSize: "cover", height: "100vh" }}>
                                            <Container maxWidth="xl" sx={{ pt: "10%" }}>
                                                <Box sx={{ marginLeft: "80px" }}>

                                                    <Typography variant="h1" className="feat-title">{item.title}<br /><a>{item.subtitle}</a></Typography>
                                                    <Box maxWidth="500px">
                                                        <Typography variant="h3" className="sub-title">{item.description}</Typography>
                                                    </Box>
                                                    {
                                                        item.link_1 === "#" ? (
                                                            <Button className="btn-demo" onClick={requestDemoModal}>{item.button_text1}</Button>
                                                        ) : (
                                                            <LinkMui href={item.link_1}>
                                                                <Button className="btn-demo">{item.button_text1}</Button>
                                                            </LinkMui>
                                                        )
                                                    }
                                                    {
                                                        item.link_2 === "#" ? (
                                                            <Button className="btn-home" onClick={requestDemoModal}>{item.button_text2}</Button>
                                                        ) : (
                                                            <LinkMui href={item.link_2}>
                                                                <Button className="btn-home">{item.button_text2}</Button>
                                                            </LinkMui>
                                                        )
                                                    }
                                                </Box>
                                            </Container>
                                        </Box>
                                    </SwiperSlide>
                                ))
                                : (
                                    <Box
                                        sx={{
                                            background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.72) 52.63%, rgba(0, 0, 0, 0.42) 96.23%), darkgrey",
                                            backgroundSize: "cover",
                                            height: "100vh",
                                            backdropFilter: "blur(10px)"
                                        }}
                                    >
                                        <Container maxWidth="xl" sx={{ pt: "10%" }}>
                                            <Skeleton variant="text" width="70%" height="64px" />
                                            <Skeleton variant="text" width="60%" height="64px" />
                                            <Box maxWidth="500px">
                                                <Skeleton variant="text" width="100%" height="50px" />
                                            </Box>
                                            <br /><br /><br /><br />
                                            <Button className="btn-demo"><Skeleton variant="text" width="100px" height="22px" /></Button>
                                            <Button className="btn-home"><Skeleton variant="text" width="100px" height="22px" /></Button>
                                        </Container>
                                    </Box>
                                )}
                            <Box className="swiper-pagination"
                                sx={styles.swiperPagination}
                            />
                        </Swiper>
                    </>
                }
            </Box>
            {!matches &&
                <>
                    <Box sx={styles.customersTitle}>
                        Customers We Serve
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" sx={{ background: "rgba(0, 0, 0, 0.35)", zIndex: "10", position: "relative", height: "100px", marginTop: "-100px" }}>
                        {(customersData && !customersLoading) && (
                            customersData.sort((a, b) => {
                                return parseInt(a.sequence) - parseInt(b.sequence);
                            }).map((customer) => (
                                <Box key={customer.customer_name} onClick={() => setActiveCustomer(customer.customer_name)}>
                                    <img src={customer.img_customer} style={{ marginTop: "30px", cursor: 'pointer' }} />
                                </Box>
                            ))
                        )}
                    </Box>
                </>
            }
        </Element>
        <Drawer
            anchor="bottom"
            open={activeCustomer && activeCustomerData ? true : false}
            PaperProps={{ sx: { width: "100%", height: "auto", borderRadius: "32px 32px 0px 0px", background: "rgba(0, 0, 0, 0.85)", backdropFilter: "blur(4px)" } }}
            onClose={handleClose}
        >
            <Box sx={{ paddingX: "5%", margin: "35px 120px 20px 60px" }} display="flex" flexDirection="row" justifyContent="space-between">
                <Box sx={{ width: "50%" }}>
                    <Box display="flex" flexDirection="row" sx={{ margin: "5px 0px", cursor: 'pointer' }} onClick={handleClose}>
                        <Box sx={{ borderRadius: "100%", mr: "9px", mt: "-1px", border: "1px solid #0069B3", width: "20px", minWidth: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <ArrowLeft onClick={handleClose} />
                        </Box>
                        <Typography sx={styles.buttonBox}>Back</Typography>
                    </Box>
                    <Typography sx={styles.tittleDrawer}>{activeCustomerData?.customer_name}</Typography>
                    <Typography sx={styles.contentDrawer}
                        dangerouslySetInnerHTML={{ __html: he.decode(activeCustomerData?.description_en || '') }} />
                </Box>
                <Box sx={{ maxWidth: "50%" }}>
                    <Box display="flex" flexDirection="row" justifyContent="space-between" gap={3}>
                        <Box display="flex" flexDirection="column" justifyContent="center" gap={1} alignItems="flex-end">
                            <Box sx={styles.category}>{activeCustomerData?.category_en}</Box>
                            <Box display="flex" flexDirection="row" gap={2} marginTop={1}>
                                {activeCustomerData?.img_icon1 && (
                                    <img src={activeCustomerData.img_icon1} alt="Icon 1" style={{ width: '30px', height: '30px', borderRadius: '8px' }} />
                                )}
                                {activeCustomerData?.img_icon2 && (
                                    <img src={activeCustomerData.img_icon2} alt="Icon 2" style={{ width: '30px', height: '30px', borderRadius: '8px' }} />
                                )}
                                {activeCustomerData?.img_icon3 && (
                                    <img src={activeCustomerData.img_icon3} alt="Icon 3" style={{ width: '30px', height: '30px', borderRadius: '8px' }} />
                                )}
                                {activeCustomerData?.img_icon4 && (
                                    <img src={activeCustomerData.img_icon4} alt="Icon 4" style={{ width: '30px', height: '30px', borderRadius: '8px' }} />
                                )}
                            </Box>
                        </Box>
                        <Box sx={{ backgroundImage: `url(${activeCustomerData?.img_popup})`, backgroundSize: 'cover', width: '282px', height: '170px', borderRadius: '12px', backgroundPosition: 'center' }} />
                    </Box>
                </Box>
            </Box>
        </Drawer >
        {
            matches && <>
                <Container maxWidth="xl">
                    <Box className="mh">
                    </Box>
                </Container>
            </>
        }
        {
            <Suspense fallback={Loading}>
                <Container ref={storyRef} maxWidth="xl" sx={{ display: "flex", gap: "53px", flexDirection: "column" }}>
                    {matches && <ServiceProductSolutionComponent />}
                    <Box>
                        <StoryHomeComponent />
                    </Box>
                    <Box>
                        <ServicesSolutionsHomeComponent />
                    </Box>
                </Container>
                {matches ?
                    <OurFactHomeComponent ourFactData={ourFactData} ourFactLoading={ourFactLoading} />
                    : <>
                        <CurvedLine1 style={stylesOurFact.curvedLine} />
                        <Box sx={stylesOurFact.mainBox(ourFactData?.image1 || '')}>
                            <Box sx={stylesOurFact.overlayBox} />
                            <Container maxWidth="xl">
                                <OurFactHomeComponent ourFactData={ourFactData} ourFactLoading={ourFactLoading} />
                            </Container>
                        </Box>
                        <CurvedLine2 style={stylesOurFact.curvedLine} />
                    </>
                }
                <Container maxWidth="xl" sx={{ display: "flex", gap: "53px", flexDirection: "column" }}>
                    <Box>
                        <NewsHomeComponent />
                    </Box>
                </Container>
            </Suspense>
        }
    </Box>
}