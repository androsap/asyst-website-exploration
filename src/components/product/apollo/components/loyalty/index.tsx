import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { styles, contentStyles } from './styled'
import { Virtual, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Children } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { CustomersModel } from "models/amala/customers.model";

interface CustomersProps {
    corporate: CustomersModel;
}

const CustomersComponent: React.FC<CustomersProps> = ({ corporate }) => {
    // console.log("customer", corporate)
    return (
        <>
            <Typography sx={styles.title}>
                Trusted by Leading Businesses
            </Typography>
            <Swiper
                modules={[Virtual, Navigation]}
                // onSwiper={(swiper) => setSwiperRef(swiper)}
                slidesPerView={'auto'}
                spaceBetween={50}
                loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false
                }}
            >
                {corporate.product?.customers?.length > 0 && Children.toArray(corporate?.product?.customers
                    .map((item, index) =>
                        <SwiperSlide key={`slide-${index}`} virtualIndex={index} style={contentStyles.logoSwiperSlider}>
                            <Box display='flex' flexDirection='row' justifyContent='center' alignItems='space-evenly'>
                                <img src={item.company_logo} style={{ width: "301", height: "70px" }}/>
                            </Box>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    );
};

// }
export default CustomersComponent;