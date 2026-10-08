import { Typography } from "components/ui/typography";
import { Divider } from "components/ui/divider";
import { Container } from "components/ui/container";
import { styles } from './styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/mousewheel'
import { FeaturesModel } from "models/amala/features.model"
import background from "assets/asyst/img/background/product/amala/feature.webp"
import frame from "assets/asyst/img/background/product/amala/feature-frame.webp"
import he from 'he'
import { formatPaginationBullet } from 'components/home'
import { RefObject, useEffect, useRef, useState } from 'react'
import { scrollTo } from 'lib'
import { useApiText, useT } from 'shared/i18n'

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
    const apiText = useApiText()
    const t = useT()

    const FeatureContentBox: React.FC<FeatureContentBoxProps> = ({ feature, sectionIndex }) => {
        const section = feature?.section?.[sectionIndex]

        if (!section) return null

        return (
            <div className="flex flex-col items-center justify-evenly h-[100vh]">
                <Container maxWidth="xl">
                    <div className="flex flex-row items-center justify-between gap-[80px]">
                        <div className="flex flex-col w-[90%]">
                            <Typography className={styles.feature}>{t(`${feature?.product_name} Feature`, `Fitur ${feature?.product_name}`)}</Typography>
                            <Typography className={styles.title} dangerouslySetInnerHTML={{ __html: he.decode(apiText(section, "title") || '') }} />
                            <Typography className={styles.subtitle} dangerouslySetInnerHTML={{ __html: he.decode(apiText(section, "subtitle") || '') }} />
                            {section.sub_section_1.map((subsection, index) => (
                                <div key={`subsection-${index}`}>
                                    <Typography className={styles.description}>{apiText(subsection, "title")}</Typography>
                                    <Typography className={styles.subdescription}>{apiText(subsection, "description")}</Typography>
                                    {index + 1 !== section.sub_section_1.length && (
                                        <div className="pb-[15px]">
                                            <Divider style={{ borderColor: '#FFFFFF1A' }} orientation="horizontal" flexItem />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="text-right">
                            <img src={frame} style={{ position: 'relative', top: '5px', width: '625px', height: '28.194px' }} alt="frame" />
                            <img src={section.image1} style={{ width: '625px', height: '380px', borderRadius: '0px 0px 16px 16px' }} alt={`Image ${sectionIndex}`} />
                        </div>
                    </div>
                </Container>
            </div>
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
        <div ref={elementRef} className="[background-size:cover] h-[100vh] [background-repeat:no-repeat] [background-attachment:fixed]" style={{ backgroundImage: `url(${background})` }}>
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
                        <div className={`swiper-pagination ${styles.swiperPagination}`} />
                    </Swiper>
                </>
            )}
        </div>
    )
}

export default FeatureComponent
