import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CaseStudyTestimonialsConst } from "consts/case-study.const";
import { useLocalized } from "shared/i18n";
import SectionHeading from "components/product/shared/section-heading";

export default function TestimonialsSection() {
    const { title, items } = useLocalized(CaseStudyTestimonialsConst);

    return <section className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading align="left" title={title} />
            <Swiper
                className="cs-testimonials"
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{ 900: { slidesPerView: 2 } }}
            >
                {items.map(({ name, role, quote, photo }, index) => (
                    <SwiperSlide key={`${name}-${index}`}>
                        <div className="cs-testimonial">
                            <img src={photo} alt={name} className="cs-testimonial__photo" loading="lazy" />
                            <div>
                                <Typography className="cs-testimonial__name">{name}</Typography>
                                <Typography className="cs-testimonial__role">{role}</Typography>
                                <Typography className="cs-testimonial__quote">{quote}</Typography>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    </section>
}
