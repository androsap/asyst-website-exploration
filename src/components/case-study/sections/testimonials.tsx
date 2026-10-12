import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { CaseStudyTestimonialsConst } from "consts/case-study.const";
import { useLocalized } from "shared/i18n";
import SectionHeading from "components/product/shared/section-heading";

const AUTOPLAY_DELAY = 8000;

const hideTimers = new WeakMap<SwiperType, number>();
const showEdges = (swiper: SwiperType) => {
    window.clearTimeout(hideTimers.get(swiper));
    swiper.el.classList.add("is-sliding");
};
const hideEdgesAfterSlide = (swiper: SwiperType) => {
    window.clearTimeout(hideTimers.get(swiper));
    hideTimers.set(swiper, window.setTimeout(() => swiper.el?.classList.remove("is-sliding"), swiper.params.speed! + 100));
};

const reducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function TestimonialsSection() {
    const { title, items } = useLocalized(CaseStudyTestimonialsConst);

    return <section className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading align="left" title={title} />
            <Swiper
                className="cs-testimonials"
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                rewind
                autoplay={reducedMotion ? false : { delay: AUTOPLAY_DELAY, disableOnInteraction: false, pauseOnMouseEnter: true }}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{ 900: { slidesPerView: 2 } }}
                onSlideChangeTransitionStart={swiper => { showEdges(swiper); hideEdgesAfterSlide(swiper); }}
                onTouchStart={showEdges}
                onTouchEnd={hideEdgesAfterSlide}
            >
                {items.map(({ name, role, quote, photo }, index) => (
                    <SwiperSlide key={`${name}-${index}`}>
                        <figure className="cs-testimonial">
                            <img src={photo} alt={name} className="cs-testimonial__photo" width={48} height={48} loading="lazy" decoding="async" />
                            <div>
                                <figcaption>
                                    <Typography component="cite" className="cs-testimonial__name">{name}</Typography>
                                    <Typography component="span" className="cs-testimonial__role">{role}</Typography>
                                </figcaption>
                                <Typography component="blockquote" className="cs-testimonial__quote">{quote}</Typography>
                            </div>
                        </figure>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    </section>
}
