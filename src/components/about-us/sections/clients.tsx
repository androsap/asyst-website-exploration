import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ClientsConst } from "consts/about-us.const";

export default function ClientsSection() {
    return <Box component="section" className="home-section">
        <Container maxWidth="xl">
            <Box className="about-left-heading">
                <Typography variant="h2" className="home-heading__title">{ClientsConst.title}</Typography>
                <Typography className="about-left-heading__description">{ClientsConst.description}</Typography>
            </Box>
            <Swiper
                className="about-clients__swiper"
                modules={[Autoplay, Pagination]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                spaceBetween={16}
                slidesPerView={2.5}
                breakpoints={{ 600: { slidesPerView: 4 }, 1024: { slidesPerView: 7 } }}
            >
                {ClientsConst.items.map(({ name, logo }) => (
                    <SwiperSlide key={name}>
                        <Box className="about-clients__logo">
                            <img src={logo} alt={name} loading="lazy" />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    </Box>
}
