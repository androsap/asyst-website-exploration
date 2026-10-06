import './index.scss'
import Box from '@mui/material/Box'
import Button from "@mui/material/Button"
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import image from 'assets/asyst/img/background/services-solutions/cargo.webp'
import { ReactComponent as Icon1 } from "assets/asyst/img/icon/services-solutions/icon1.svg"
import { ReactComponent as Icon2 } from "assets/asyst/img/icon/services-solutions/icon2.svg"
import { ReactComponent as Icon6 } from "assets/asyst/img/icon/services-solutions/icon6.svg"
import { ReactComponent as ProffesionalServices } from "assets/asyst/img/icon/services-solutions/professional-services.svg"
import { ReactComponent as Infrastructure } from "assets/asyst/img/icon/services-solutions/infrastructure.svg"
import { ReactComponent as BusinessProcess } from "assets/asyst/img/icon/services-solutions/business-process.svg"
import { ReactComponent as ArrowLeft } from "assets/asyst/img/icon/services-solutions/arrow-left.svg"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { SetStateAction, useEffect } from "react"
import Divider from '@mui/material/Divider'
import { useState } from 'react'
import Drawer from "@mui/material/Drawer"
import useMediaQuery from '@mui/material/useMediaQuery'
import ServicesSolutionMobileComponent from '../mobile/services-solutions'
import { styles } from './styled'
import ServicesSolutionHelper from 'helper/home/ServicesSolutionHelper'
import Skeleton from '@mui/material/Skeleton'
import IndustriesHelper from 'helper/home/IndustriesHelper'
import CardsProductHelper from 'helper/home/CardsProductHelper'
import BusinessSolutionHelper from 'helper/home/BusinessSolutionHelper'
import he from 'he'
import CardsBusinessSolutionHelper from 'helper/home/CardsBusinessSolutionHelper'
import icon1 from "assets/asyst/img/icon/services-solutions/icon3.svg"
import icon2 from "assets/asyst/img/icon/services-solutions/icon4.svg"
import icon3 from "assets/asyst/img/icon/services-solutions/icon5.svg"
import DiscoverMoreHelper from 'helper/home/DiscoverMoreHelper'
import CardsSolutionHelper from 'helper/home/CardsSolutionHelper'
import { useNavigate } from 'react-router-dom'

export const cardsBusinessIconsMobile = [
    icon1, icon2, icon3
]

const cardsBusinessIcons = [
    <ProffesionalServices />, <Infrastructure />, <BusinessProcess />
]

export interface IndustriesDataInterface {
    title_id: string;
    title_en: string;
    image1: string;
    sequence: string;
}

export interface CardsProductInterface {
    title_id: string;
    title_en: string;
    sub_section_1: CardsProductSubSectionInterface[];
}

export interface CardsProductSubSectionInterface {
    title_id: string;
    title_en: string;
    subtitle_id: string;
    subtitle_en: string;
    description_id: string;
    description_en: string;
    link_en: string;
    sequence: string;
    image1: string;
    image2: string;
}

export default function ServicesSolutionsHomeComponent() {
    const navigate = useNavigate()
    const matches = useMediaQuery('(max-width:1023px)')
    const [activeIndustry, setActiveIndustry] = useState('')
    const [selectedSolution, setSelectedSolution] = useState('')
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState<string>('')
    const [discoverMore, setDiscoverMore] = useState<string>('')
    const [industriesData, setIndustriesData] = useState<IndustriesDataInterface[] | null>(null)
    const [industriesLoading, setIndustriesLoading] = useState(true)
    const [cardsProductLoading, setCardsProductLoading] = useState(true)
    const [cardsProductData, setCardsProductData] = useState<CardsProductInterface[] | null>(null)
    const [cardsSolutionData, setCardsSolutionData] = useState<CardsProductInterface[] | null>(null)
    const [businessSolutionLoading, setBusinessSolutionLoading] = useState(true)
    const [businessSolutionData, setBusinessSolutionData] = useState<CardsProductSubSectionInterface | null>(null)
    const [cardsBusinessSolutionLoading, setCardsBusinessSolutionLoading] = useState(true)
    const [cardsBusinessSolutionData, setCardsBusinessSolutionData] = useState<CardsProductSubSectionInterface[] | null>(null)
    const activeProducts: CardsProductInterface | undefined | null = cardsProductData && cardsProductData.find(section => section.title_en === activeIndustry);
    const activeSolutions: CardsProductInterface | undefined | null = cardsSolutionData && cardsSolutionData.find(section => section.title_en === activeIndustry);
    const selectedSolutionData: CardsProductSubSectionInterface | undefined | null = activeSolutions && (activeSolutions.sub_section_1 || []).find(subSection => subSection.title_en === selectedSolution);

    const handleClose = () => {
        setSelectedSolution('')
    }
    const handleIndustryClick = (title_en: SetStateAction<string>) => {
        setActiveIndustry(title_en);
    }
    const handleProductsClick = (link: string, title: string) => {
        if (title.toLowerCase() === 'amala') {
            navigate(link)
        } else {
            window.location.href = link;
        }
    }
    const getTitle = () => {
        setLoading(true)
        ServicesSolutionHelper.get(({ status, data }) => {
            setLoading(false)
            if (status && data?.data?.section.title_id) setTitle(data?.data?.section?.title_id || '')
        })
    }
    const getDiscoverMore = () => {
        DiscoverMoreHelper.get(({ status, data }) => {
            if (status && data?.data?.section.link_en) setDiscoverMore(data?.data?.section?.link_en || '')
        })
    }
    const getIndustries = () => {
        setIndustriesLoading(true)
        IndustriesHelper.get(({ status, data }) => {
            setIndustriesLoading(false)
            if (status && data?.data?.section) {
                setIndustriesData(data?.data?.section)
                const sortedIndustries: IndustriesDataInterface[] = data?.data?.section.sort((a: { sequence: string }, b: { sequence: string }) => {
                    return parseInt(a.sequence) - parseInt(b.sequence);
                });
                setActiveIndustry(sortedIndustries[0].title_en)
            }
        })
    }
    const getCardsProduct = () => {
        setCardsProductLoading(true)
        CardsProductHelper.get(({ status, data }) => {
            setCardsProductLoading(false)
            if (status && data?.data?.section) {
                setCardsProductData(data?.data?.section)
            }
        })
    }
    const getCardsSolution = () => {
        CardsSolutionHelper.get(({ status, data }) => {
            if (status && data?.data?.section) {
                setCardsSolutionData(data?.data?.section)
            }
        })
    }
    const getBusinessSolution = () => {
        setBusinessSolutionLoading(true)
        BusinessSolutionHelper.get(({ status, data }) => {
            setBusinessSolutionLoading(false)
            if (status && data?.data?.section) {
                setBusinessSolutionData(data?.data?.section)
            }
        })
    }
    const getCardsBusinessSolution = () => {
        setCardsBusinessSolutionLoading(true)
        CardsBusinessSolutionHelper.get(({ status, data }) => {
            setCardsBusinessSolutionLoading(false)
            if (status && data?.data?.section) {
                setCardsBusinessSolutionData(data?.data?.section)
            }
        })
    }
    useEffect(() => {
        getTitle()
        getDiscoverMore()
        getIndustries()
        getCardsProduct()
        getCardsSolution()
        getBusinessSolution()
        getCardsBusinessSolution()
    }, [])
    return (
        <>
            {matches &&
                <ServicesSolutionMobileComponent title={title} loading={loading}
                    activeIndustry={activeIndustry} industriesData={industriesData}
                    activeProducts={activeProducts} businessSolutionData={businessSolutionData}
                    cardsBusinessSolutionData={cardsBusinessSolutionData}
                    handleIndustryClick={handleIndustryClick} activeSolutions={activeSolutions} />
            }
            {!matches &&
                <>
                    <Box className="solutions-container">
                        <Grid container>
                            <Grid container columns={1} spacing="10px">
                                <Grid item md={1}>
                                    <Typography className="title-solutions">Our Services and Solutions</Typography>
                                    {(title && !loading) ? (
                                        <Typography className="highlight-solutions">
                                            {title}
                                        </Typography>
                                    ) : (
                                        <Skeleton animation="wave" variant="text" width={'50%'} height={50} />
                                    )}
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', mt: '18px' }}>
                                        <Divider sx={{ flex: '1', mr: '2%' }} textAlign='left'>
                                            <Button className="btn-solutions custom">
                                                <Box sx={{ borderRadius: "100%", mr: "9px", border: `1px solid #123554`, width: "23px", minWidth: "23px", height: "23px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                    <Icon2 />
                                                </Box>
                                                Products and Services
                                            </Button>
                                        </Divider>
                                        <Link href={discoverMore || '#'} underline='none' sx={{ fontFamily: 'Inter', fontSize: '12px', fontWeight: '400', textAlign: 'center' }}>Discover more</Link>
                                    </Box>
                                    <Grid container sx={{ marginTop: "40px" }} direction="row" justifyContent="flex-start" alignItems="center" gap={1}>
                                        <Typography className='category-industry'>Industries</Typography>
                                        {(industriesData && !industriesLoading) ? (
                                            industriesData.sort((a, b) => {
                                                return parseInt(a.sequence) - parseInt(b.sequence);
                                            }).map((industry) => (
                                                <Button
                                                    key={industry.title_en}
                                                    className={`btn-industries ${activeIndustry === industry.title_en ? 'active' : ''}`}
                                                    onClick={() => handleIndustryClick(industry.title_en)}
                                                >
                                                    {industry.title_en}
                                                </Button>
                                            ))
                                        ) : (
                                            [0, 1, 2, 3, 4].map((index) => (
                                                <div key={index}>
                                                    <Button className="btn-industries">
                                                        <Skeleton animation="wave" variant="text" width={100} height={30} />
                                                    </Button>
                                                </div>
                                            ))
                                        )}
                                    </Grid>
                                    <Grid container mt={.5} spacing={1.5} pt={4} justifyContent="space-between" display="flex" alignItems="center" flexDirection="row" sx={{ flexWrap: "nowrap", height: "270px" }}>
                                        <Grid item xs={6} mr={1.5}>
                                            <Box sx={styles.solutionsBox}>
                                                <Box sx={styles.solutionsBox.image}>
                                                    <img src={image} alt="Background" />
                                                </Box>
                                                {(activeSolutions) &&
                                                    activeSolutions.sub_section_1.sort((a: { sequence: string }, b: { sequence: string }) => {
                                                        return parseInt(a.sequence) - parseInt(b.sequence);
                                                    }).map((subSection) => (
                                                        <Box sx={styles.solutionsBox.content} pt={1} pl={1} onClick={() => setSelectedSolution(subSection.title_en)}>
                                                            <Typography className="title">SOLUTION</Typography>
                                                            <Typography className="highlight">{subSection.title_en}</Typography>
                                                            <Box sx={styles.solutionsBox.button}>
                                                                <Icon6 />
                                                            </Box>
                                                        </Box>
                                                    ))
                                                }
                                            </Box>
                                        </Grid>
                                        <Grid item container xs={6} mr={1.5} spacing={1.5} justifyContent="space-between" display="flex" alignItems="center">
                                            {(!cardsProductLoading && activeProducts) && activeProducts.sub_section_1.sort((a: { sequence: string }, b: { sequence: string }) => {
                                                return parseInt(a.sequence) - parseInt(b.sequence);
                                            }).map((subSection) => (
                                                <Grid item xs={6} sx={styles.productBox} key={subSection.title_id}>
                                                    <Box onClick={() => handleProductsClick(subSection.link_en, subSection.title_en)}>
                                                        <Box sx={styles.productBox.content}>
                                                            <Typography sx={styles.productBox.content.title}>{"PRODUCT"}</Typography>
                                                            <Typography sx={styles.productBox.content.name}>{subSection.title_en}</Typography>
                                                            <Typography sx={styles.productBox.content.highlight}>{subSection.description_en}</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={styles.productBox.footer}>
                                                        <Typography sx={styles.productBox.footer.title}>{subSection.subtitle_en}</Typography>
                                                        <Box sx={styles.productBox.roundedSvgContainer}>
                                                            <ArrowOutwardIcon sx={styles.productBox.arrowIcon} />
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container columns={1} spacing="10px" mt={3}>
                                <Grid item md={1}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', mt: '18px' }}>
                                        <Divider sx={{ flex: '1', mr: '2%' }} textAlign='left'>
                                            <Button className="btn-solutions">
                                                <Box sx={{ borderRadius: "100%", mr: "9px", border: `1px solid #123554`, width: "23px", minWidth: "23px", height: "23px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                    <Icon1 />
                                                </Box>
                                                Business Solution
                                            </Button>
                                        </Divider>
                                        <Link href={businessSolutionData?.link_en || '#'} underline='none' sx={{ fontFamily: 'Inter', fontSize: '12px', fontWeight: '400', textAlign: 'center' }}>Discover more</Link>
                                    </Box>

                                    <Box display="flex" flexDirection="row" gap={2} mt={1}>
                                        <Box>
                                            {(businessSolutionData && !businessSolutionLoading) ? (
                                                <Typography className="content-solutions"
                                                    dangerouslySetInnerHTML={{ __html: he.decode(businessSolutionData.description_en) }}
                                                />
                                            ) : (
                                                <>
                                                    <Skeleton animation="wave" variant="text" width={400} height={50} />
                                                    <Skeleton animation="wave" variant="text" width={400} height={100} />
                                                </>
                                            )}
                                            {/* <Button className="btn-more">More Business Solution</Button> */}
                                        </Box>
                                        <Box display="flex" flexDirection="row" justifyContent="space-around" gap={1}>
                                            {(cardsBusinessSolutionData && !cardsBusinessSolutionLoading) ? (
                                                cardsBusinessSolutionData.sort((a, b) => {
                                                    return parseInt(a.sequence) - parseInt(b.sequence);
                                                }).map((card, index) => (
                                                    <Link
                                                        key={card.title_en}
                                                        sx={styles.businessSolutionsBox}
                                                        href={card.link_en}
                                                        underline='none'
                                                    >
                                                        <Typography sx={styles.businessSolutionsBox.content}>{he.decode(card.title_en)}</Typography>
                                                        <Box sx={styles.businessSolutionsBox.icon}>
                                                            {cardsBusinessIcons[index]}
                                                        </Box>
                                                    </Link>
                                                ))
                                            ) : (
                                                <>
                                                    {['#', '#', '#'].map((value, index) => (
                                                        <Link
                                                            key={index}
                                                            sx={styles.businessSolutionsBox}
                                                            href={value}
                                                            underline='none'
                                                        />
                                                    ))
                                                    }
                                                </>
                                            )}
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>

                    <Drawer
                        anchor="bottom"
                        open={(selectedSolution && selectedSolutionData) ? true : false}
                        PaperProps={{ sx: { width: "100%", height: "238px", borderRadius: "32px 32px 0px 0px", background: "rgba(242, 242, 242, 0.85)", backdropFilter: "blur(4px)" } }}
                        onClose={handleClose}
                    >
                        <Box sx={{ display: "flex", flexDirection: "row", margin: "39px 120px 39px 60px", gap: "10px", paddingX: "5%" }} justifyContent="space-between">
                            <Box sx={{ width: "40%" }}>
                                <Box display="flex" flexDirection="column" justifyContent="space-between">
                                    <Box onClick={handleClose} display="flex" flexDirection="row" sx={{ margin: "5px 0px", cursor: "pointer" }}>
                                        <Box sx={{ borderRadius: "100%", mr: "9px", mt: "-1px", border: "1px solid #2775BB", width: "20px", minWidth: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <ArrowLeft />
                                        </Box>
                                        <Typography sx={styles.buttonBack}>Back</Typography>
                                    </Box>
                                    <Typography sx={styles.titleDrawer}>{selectedSolutionData?.subtitle_en}</Typography>
                                    <Typography sx={styles.contentDrawer}>{selectedSolutionData?.description_en}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ maxWidth: "60%", display: "flex", flexDirection: "row", gap: "60px" }}>
                                <Box sx={{ backgroundImage: `url(${selectedSolutionData?.image1})`, backgroundSize: 'cover', width: '282px', height: '160px', borderRadius: '12px', backgroundPosition: 'center' }} />
                                <Box sx={{ backgroundImage: `url(${selectedSolutionData?.image2})`, backgroundSize: 'cover', width: '282px', height: '160px', borderRadius: '12px', backgroundPosition: 'center' }} />
                            </Box>
                        </Box>
                    </Drawer >
                </>
            }
        </>
    )
}
