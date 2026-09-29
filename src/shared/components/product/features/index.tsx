import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import { styles } from './styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/mousewheel'
import { FeaturesModel } from "models/anteros/features.model"
import background from "assets/asyst/img/background/product/anteros/feature.png"
import frame from "assets/asyst/img/background/product/anteros/feature-frame.png"
import he from 'he'
import { formatPaginationBullet } from 'components/home'
import { RefObject, useEffect, useRef, useState } from 'react'
import { scrollTo } from 'lib'

interface FeatureContentBoxProps {
    feature: FeaturesModel['product']
    sectionIndex: number
}

interface FeaturesProps {
    feature: FeaturesModel
    prevElement: RefObject<HTMLDivElement>
    nextElement: RefObject<HTMLDivElement>
}

const FeatureComponent: React.FC<FeaturesProps> = ({ feature, prevElement, nextElement }) => {
    const [isLastSlide, setIsLastSlide] = useState<boolean>(false)
    const [hasScrolledDownOnLastSlide, setHasScrolledDownOnLastSlide] = useState<boolean>(false)
    const [isFirstSlide, setIsFirstSlide] = useState<boolean>(false)
    const [hasScrolledUpOnFirstSlide, setHasScrolledUpOnFirstSlide] = useState<boolean>(false)
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const elementRef = useRef<HTMLDivElement>(null)

    const FeatureContentBox: React.FC<FeatureContentBoxProps> = ({ feature, sectionIndex }) => {
        const section = feature?.section?.[sectionIndex]

        if (!section) return null

        return (
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-evenly" sx={{ height: "100vh" }}>
                <Container maxWidth="xl">
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" gap={5}>
                        <Box display="flex" flexDirection="column" width="90%">
                            <Typography sx={styles.feature}>{feature?.product_name} Feature</Typography>
                            <Typography sx={styles.title} dangerouslySetInnerHTML={{ __html: he.decode(section.title_id || '') }} />
                            <Typography sx={styles.subtitle} dangerouslySetInnerHTML={{ __html: he.decode(section.subtitle_id || '') }} />
                            {section.sub_section_1.map((subsection, index) => (
                                <Box key={`subsection-${index}`}>
                                    <Typography sx={styles.description}>{subsection.title_id}</Typography>
                                    <Typography sx={styles.subdescription}>{subsection.description_id}</Typography>
                                    {index + 1 !== section.sub_section_1.length && (
                                        <Box paddingBottom="15px">
                                            <Divider style={{ borderColor: '#FFFFFF1A' }} orientation="horizontal" flexItem />
                                        </Box>
                                    )}
                                </Box>
                            ))}
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                            <img src={frame} style={{ position: 'relative', top: '5px', width: '625px', height: '28.194px' }} alt="frame" />
                            <img src={section.image1} style={{ width: '625px', height: '380px', borderRadius: '0px 0px 16px 16px' }} alt={`Image ${sectionIndex}`} />
                        </Box>
                    </Box>
                </Container>
            </Box>
        )
    }

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            if (event.deltaY > 0) {
                if (isLastSlide && !hasScrolledDownOnLastSlide) {
                    setHasScrolledDownOnLastSlide(true)
                } else if (hasScrolledDownOnLastSlide) {
                    scrollTo(nextElement)
                }
            } else {
                if (isFirstSlide && !hasScrolledUpOnFirstSlide) {
                    setHasScrolledUpOnFirstSlide(true)
                } else if (hasScrolledUpOnFirstSlide) {
                    scrollTo(prevElement)
                }
            }
        }

        if (isVisible && (isLastSlide || isFirstSlide)) {
            window.addEventListener('wheel', handleWheel)
        } else {
            window.removeEventListener('wheel', handleWheel)
            setHasScrolledDownOnLastSlide(false)
            setHasScrolledUpOnFirstSlide(false)
        }

        return () => {
            window.removeEventListener('wheel', handleWheel)
        }
    }, [isFirstSlide, isLastSlide, hasScrolledUpOnFirstSlide, hasScrolledDownOnLastSlide, isVisible])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.1 }
        )

        if (elementRef.current) {
            observer.observe(elementRef.current)
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current)
            }
        }
    }, [])

    return (
        <Box ref={elementRef} sx={{ backgroundImage: `url(${background})`, backgroundSize: "cover", height: "100vh", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed" }}>
            {feature.product?.section?.length === 1 ? (
                <FeatureContentBox feature={feature.product} sectionIndex={0} />
            ) : feature.product?.section?.length > 0 && (
                <>
                    <Swiper
                        modules={[Pagination, FreeMode, Mousewheel]}
                        direction={'vertical'}
                        mousewheel={true}
                        slidesPerView={1}
                        freeMode={false}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination',
                            renderBullet: (index, className) => {
                                return `<span class="${className} pagination-number">${formatPaginationBullet(index)}</span>`
                            }
                        }}
                        onSlideChange={(swiper) => {
                            scrollTo(elementRef)
                            if (swiper.activeIndex + 1 >= feature.product.section.length) setIsLastSlide(true)
                            else setIsLastSlide(false)
                            if (swiper.activeIndex === 0) setIsFirstSlide(true)
                            else setIsFirstSlide(false)
                        }}
                        loop={false}
                        style={{
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden'
                        }}
                    >
                        {feature.product?.section?.length > 0 && feature.product.section.map((_, index) => (
                            <SwiperSlide key={`slide-${index}`}>
                                <FeatureContentBox feature={feature.product} sectionIndex={index} />
                            </SwiperSlide>
                        ))}
                        <Box className="swiper-pagination" sx={styles.swiperPagination} />
                    </Swiper>
                </>
            )}
        </Box>
    )
}

export default FeatureComponent
