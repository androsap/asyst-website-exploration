import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { EnterpriseHighlightConst } from "consts/home.const";
import SectionHeading from "./section-heading";

export default function EnterpriseHighlightSection() {
    const { title, description, items } = EnterpriseHighlightConst;

    return <Box component="section" className="home-section home-highlight__section">
        <Container maxWidth="xl">
            <SectionHeading title={title} description={description} />
            <Swiper
                className="home-highlight__swiper"
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={24}
                slidesPerView={1.1}
                breakpoints={{ 900: { slidesPerView: 2.15 } }}
            >
                {items.map(({ icon: Icon, title, description }) => (
                    <SwiperSlide key={title}>
                        <Box className="home-highlight">
                            <Box className="home-icon-tile"><Icon /></Box>
                            <Box>
                                <Typography className="home-highlight__title">{title}</Typography>
                                <Typography className="home-highlight__description">{description}</Typography>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    </Box>
}
