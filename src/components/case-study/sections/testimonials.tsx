import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CaseStudyTestimonialsConst } from "consts/case-study.const";
import SectionHeading from "components/product/shared/section-heading";

export default function TestimonialsSection() {
    const { title, items } = CaseStudyTestimonialsConst;

    return <Box component="section" className="pv-section">
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
                        <Box className="cs-testimonial">
                            <img src={photo} alt={name} className="cs-testimonial__photo" loading="lazy" />
                            <Box>
                                <Typography className="cs-testimonial__name">{name}</Typography>
                                <Typography className="cs-testimonial__role">{role}</Typography>
                                <Typography className="cs-testimonial__quote">{quote}</Typography>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    </Box>
}
