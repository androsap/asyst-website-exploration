import { Typography } from "components/ui/typography";
import { styles, logoSwiperSlideClass } from './styled'
import { Virtual, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Children } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { CustomersModel } from "models/amala/customers.model";
import { useT } from "shared/i18n";

interface CustomersProps {
    corporate: CustomersModel;
}

const CustomersComponent: React.FC<CustomersProps> = ({ corporate }) => {
    const t = useT();
    // console.log("customer", corporate)
    return (
        <>
            <Typography className={styles.title}>
                {t("Trusted by Leading Businesses", "Dipercaya oleh Bisnis Terkemuka")}
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
                        <SwiperSlide key={`slide-${index}`} virtualIndex={index} className={logoSwiperSlideClass}>
                            <div className="flex flex-row justify-center [align-items:space-evenly]">
                                <img alt="" src={item.company_logo} className="h-[70px]" />
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    );
};

// }
export default CustomersComponent;