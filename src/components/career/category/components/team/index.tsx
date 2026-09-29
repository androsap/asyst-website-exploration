import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { styles } from './styled'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import env1 from "../../../../../assets/asyst/img/background/career/env1.png";
import env2 from "../../../../../assets/asyst/img/background/career/env2.png";
import Container from "@mui/material/Container";

const imageTeam = [
    {
        image: env1
    },
    {
        image: env2
    },
    {
        image: env1
    },
    {
        image: env2
    },
    {
        image: env1
    },
    {
        image: env1
    },
];

export default function TeamComponent() {
    return (
        <>
            <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", gap: '70px' }}>
                <Typography sx={styles.title}>
                    Meet Asyst Team
                </Typography>
            </Container>
            <div className="testimonials">
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    style={{ overflow: 'visible' }}
                >
                    {imageTeam.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                width: '420px',
                                marginRight: '24px'
                            }}
                        >
                            <Box display='flex' flexDirection='row' pb='50px'>
                                <img
                                    style={{
                                        height: '240px',
                                        width: '100%',
                                        objectFit: 'cover'
                                    }}
                                    src={item.image} />
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}