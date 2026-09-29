import "./index.scss"
import { useEffect, useState } from "react"
import { milestonesStyles, stroyBoxStyles } from "./styled"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined'
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import useMediaQuery from '@mui/material/useMediaQuery'
import StoryMobileComponent from "../mobile/story"
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Virtual, FreeMode, Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import StoryHelper from "helper/home/StoryHelper"
import Skeleton from "@mui/material/Skeleton"
import he from "he"
import MilestoneStoryHelper from "helper/home/MilestoneStoryHelper"

export interface TitleDataInterface {
    section: {
        title_id: string
        title_en: string
        description_id: string
        description_en: string
        link_en: string
    }
}

interface MilestonesDataInterface {
    title_id: string;
    title_en: string;
    subtitle_id: string;
    description_id: string;
    description_en: string;
    image1: string;
    sequence: string;
}

export default function StoryHomeComponent() {
    const matches = useMediaQuery('(max-width:1023px)')
    const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null)
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const [, setLoadingTitle] = useState(true)
    const [titleData, setTitleData] = useState<TitleDataInterface | null>(null)
    const [, setLoadingMilestone] = useState(true)
    const [milestonesData, setMilestonesData] = useState<MilestonesDataInterface[] | null>(null)

    const handleYearButtonClick = (yearIndex: any) => {
        swiperRef?.slideToLoop(yearIndex, 0)
        setActiveIndex(yearIndex)
    }

    const renderMilestoneButtons = (milestoneIndex: number) => {
        const milestoneStyle = milestonesStyles(activeIndex, milestoneIndex)

        return (
            <Box key={milestoneIndex} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Button
                    onClick={() => handleYearButtonClick(milestoneIndex)}
                    sx={milestoneStyle.buttonYear}
                >
                    {milestonesData && milestonesData[milestoneIndex].subtitle_id}
                </Button>
                <Box
                    onClick={() => handleYearButtonClick(milestoneIndex)}
                    sx={milestoneStyle.buttonYear.stepper}
                />
            </Box>
        )
    }

    const getTitleData = () => {
        setLoadingTitle(true)
        StoryHelper.get(({ status, data }) => {
            setLoadingTitle(false)
            if (status && data?.data?.section.title_id) setTitleData(data?.data)
        })
    }

    const getMilestonesData = () => {
        setLoadingMilestone(true)
        MilestoneStoryHelper.get(({ status, data }) => {
            setLoadingMilestone(false)
            if (status && data?.data?.section) {
                setMilestonesData(data?.data?.section)
            }
        })
    }

    useEffect(() => {
        getTitleData()
        getMilestonesData()
    }, [])

    return <>
        {matches &&
            <StoryMobileComponent titleData={titleData} />
        }
        {!matches &&
            <Box className="story-container">
                <Grid container columns={2} spacing="20px">
                    <Grid item md={1}>
                        <Box>
                            <Typography className="title-story">Asyst Story</Typography>
                            {!titleData ? (
                                <>
                                    <Skeleton animation="wave" variant="text" width={200} height={30} />
                                    <Skeleton animation="wave" variant="text" width={500} height={300} />
                                    <Skeleton animation="wave" variant="text" width={300} height={30} />
                                </>
                            ) : (
                                <>
                                    <Typography className="highlight-story">{he.decode(titleData.section.title_en)}</Typography>
                                    <Typography className="content-story"
                                        dangerouslySetInnerHTML={{ __html: he.decode(titleData.section.description_en) }}
                                    />
                                    <Link href={titleData.section.link_en} underline="none">
                                        <Typography className="read-more">Read more</Typography>
                                    </Link>
                                </>
                            )}
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={1} mt={4}>
                        {milestonesData ?
                            (
                                <Swiper
                                    modules={[Virtual, Pagination, Navigation, FreeMode, Autoplay]}
                                    onSwiper={(swiper) => setSwiperRef(swiper)}
                                    onSlideChange={(swiper) => {
                                        const updateIndex = swiper.activeIndex === 0 ? milestonesData.length - 1
                                            : swiper.activeIndex > milestonesData.length ? 0
                                                : swiper.activeIndex - 1
                                        setActiveIndex(updateIndex)
                                    }}
                                    slidesPerView={1}
                                    freeMode={false}
                                    loop={true}
                                    navigation={true}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false
                                    }}
                                    virtual
                                >
                                    {milestonesData.sort((a, b) => {
                                        return parseInt(a.sequence) - parseInt(b.sequence);
                                    }).map((item, index) => {
                                        const storyBoxStyle = stroyBoxStyles(activeIndex, item.image1, milestonesData.length)

                                        return (
                                            <SwiperSlide key={index} virtualIndex={index}>
                                                <Box className="story">
                                                    <Box sx={storyBoxStyle.mainBox}>
                                                        <Card sx={storyBoxStyle.bgImageBox}>
                                                            <CardMedia
                                                                component="img"
                                                                image={item.image1}
                                                                sx={{ maxWidth: "100%", borderRadius: "20px", visibility: "hidden", height: "auto" }} />
                                                        </Card>
                                                        <Box sx={storyBoxStyle.contentBox}>
                                                            <Box>
                                                                <Typography sx={storyBoxStyle.contentBox.titleTypography}>{item.title_en}</Typography>
                                                                <Typography sx={storyBoxStyle.contentBox.contentTypography}
                                                                    dangerouslySetInnerHTML={{ __html: he.decode(item.description_en) }} />
                                                            </Box>
                                                            {/* Overlay milestone buttons */}
                                                            <Box sx={storyBoxStyle.contentBox.milestonesBox}>
                                                                {(() => {
                                                                    const sortedMilestones = milestonesData.sort((a, b) => parseInt(a.sequence) - parseInt(b.sequence));

                                                                    // console.log('sorted milestones', sortedMilestones)

                                                                    if (activeIndex === 0 || activeIndex === 1) {
                                                                        return sortedMilestones.slice(0, 5).map((_, index) => {
                                                                            const milestoneIndex = index;
                                                                            // console.log(milestone);
                                                                            return renderMilestoneButtons(milestoneIndex);
                                                                        });
                                                                    } else if (activeIndex === sortedMilestones.length - 1 || activeIndex === sortedMilestones.length - 2) {
                                                                        return sortedMilestones.slice(sortedMilestones.length - 5, sortedMilestones.length).map((milestone) => {
                                                                            const milestoneIndex = sortedMilestones.findIndex(item => item.subtitle_id === milestone.subtitle_id);
                                                                            return renderMilestoneButtons(milestoneIndex);
                                                                        });
                                                                    } else {
                                                                        return sortedMilestones.slice(Math.max(activeIndex - 2, 0), Math.min(activeIndex + 3, sortedMilestones.length)).map((_, index) => {
                                                                            const milestoneIndex = Math.max(activeIndex - 2, 0) + index;
                                                                            // console.log(milestone);
                                                                            return renderMilestoneButtons(milestoneIndex);
                                                                        });
                                                                    }
                                                                })()}
                                                            </Box>

                                                        </Box>
                                                        <Box
                                                            sx={storyBoxStyle.contentBox.prevButton}
                                                            onClick={() => activeIndex !== 0 && handleYearButtonClick(activeIndex - 1)}>
                                                            <ExpandCircleDownOutlinedIcon />
                                                        </Box>
                                                        <Box
                                                            sx={storyBoxStyle.contentBox.nextButton}
                                                            onClick={() => activeIndex !== milestonesData.length - 1 && handleYearButtonClick(activeIndex + 1)}>
                                                            <ExpandCircleDownOutlinedIcon />
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            )
                            :
                            <Skeleton animation="wave" variant="rectangular" width="100%" height={400} />
                        }
                    </Grid>
                </Grid>
            </Box >
        }
    </>
}