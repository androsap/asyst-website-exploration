import Box from "@mui/material/Box"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import env1 from "../../../../assets/asyst/img/background/career/env1.png"
import env2 from "../../../../assets/asyst/img/background/career/env2.png"

const imageEnvironment = [
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

export default function EnvironmentComponent() {
    return (
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
                {imageEnvironment.map((item, index) => (
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
                                src={item.image}
                                alt={`Environment ${index + 1}`}
                            />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}