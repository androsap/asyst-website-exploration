import './index.scss'
import { styles } from './styled'

import { lazy, Suspense, useEffect, useState } from 'react'
import { MainLayoutSharedProps } from 'shared/layout/main-layout'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import { Element } from 'react-scroll'
import Typography from '@mui/material/Typography'
import OverviewEachIndustryComponent from './components/each-industry'
import DownloadResourceComponent from './components/donwload-resource'
import Skeleton from '@mui/material/Skeleton'
import IndustryOverviewHelper from 'helper/industry/IndustryOverviewHelper'
import HowWeWorComponent from './components/work'

const TestimonialsComponent = lazy(() => import("./components/testimonials"))

const Loading = (
    <Box width="100%" height="150px" display="flex" alignItems="center" justifyContent="center" position="relative">
        <CircularProgress color="inherit" size={40} />
    </Box>
)

interface MainBannerSection {
    section_id: string
    title_id: string
    title_en: string
    description_id: string
    description_en: string
    link1_en: string
}

interface Industry {
    industries_id: string
    industries_code: string
    industries_name: string
    image: string
    sequence: string
    status: string
}

export default function IndustryComponent({ }: MainLayoutSharedProps) {
    const [loadingMainBanner, setLoadingMainBanner] = useState<boolean>(false)
    const [loadingIndustries, setLoadingIndustries] = useState<boolean>(false)
    const [mainBannerData, setMainBannerData] = useState<MainBannerSection[]>([])
    const [industriesData, setIndustriesData] = useState<Industry[]>([])

    const getMainBannerData = () => {
        setLoadingMainBanner(true)
        IndustryOverviewHelper.getMainBanner(({ status, data }) => {
            setLoadingMainBanner(false)
            if (status && data?.data?.section) {
                setMainBannerData(data.data.section)
            }
        })
    }

    const getIndustriesData = () => {
        setLoadingIndustries(true)
        IndustryOverviewHelper.getIndustries(({ status, data }) => {
            setLoadingIndustries(false)
            if (status && data?.data?.industries) {
                setIndustriesData(data.data.industries)
            }
        })
    }

    useEffect(() => {
        getMainBannerData()
        getIndustriesData()
    }, [])

    return (
        <Box className="container-industry">
            <Element name="industry">
                <Box sx={styles.mainBox}>
                    <Box sx={styles.overlayBox} />
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Box sx={styles.headerBox}>
                            <div>
                                {loadingMainBanner ? (
                                    <>
                                        <Skeleton variant="text" width="70%" height={40} sx={{ marginBottom: 2 }} />
                                        <Skeleton variant="text" width="90%" height={30} sx={{ marginBottom: 3 }} />
                                    </>
                                ) : (
                                    mainBannerData.length > 0 && (
                                        <>
                                            <Typography sx={styles.headerTitle}>
                                                {mainBannerData[0].title_en}
                                            </Typography>
                                            <Typography sx={styles.headerSubtitle}>
                                                {mainBannerData[0].description_en}
                                            </Typography>
                                        </>
                                    )
                                )}
                                <Box display="flex" flexDirection="row" justifyContent="center">
                                    {loadingIndustries
                                        ? Array.from({ length: 4 }).map((_, index) => (
                                            <Skeleton
                                                key={index}
                                                variant="rectangular"
                                                width={180}
                                                height={120}
                                                sx={{ margin: 1 }}
                                            />
                                        ))
                                        : industriesData
                                        // .filter((data) => data.sequence !== '5')
                                        .map((industry) => (
                                            <Box
                                                key={industry.industries_id}
                                                className="card-industry"
                                                sx={{
                                                    backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 108, 174, 0.40) 47.92%, #006CAE 100%), url(${industry.image})`,
                                                }}
                                            >
                                                <Box className="btn-type">
                                                    <Typography className="text-type">{industry.industries_name}</Typography>
                                                </Box>
                                            </Box>
                                        ))}
                                </Box>
                                <Box display="flex" justifyContent="center">
                                    <Button sx={styles.btnAll}>
                                        <Typography sx={styles.textBtnAll}>View all industry solutions</Typography>
                                    </Button>
                                </Box>
                            </div>
                        </Box>
                    </div>
                </Box>
            </Element>
            <Suspense fallback={Loading}>
                <Container maxWidth="xl" sx={{ display: "flex", gap: "53px", flexDirection: "column" }}>
                    <OverviewEachIndustryComponent />
                    <HowWeWorComponent />
                    <TestimonialsComponent />
                    <DownloadResourceComponent />
                </Container>
            </Suspense>
        </Box>
    )
}
