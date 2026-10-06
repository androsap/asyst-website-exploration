import { styles } from './styled';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import ibm from '../../../../assets/asyst/img/background/about-us/our-partner/ibm.webp';
import hp from '../../../../assets/asyst/img/background/about-us/our-partner/hp.webp'

const partnersData = [
    {
        text: "Indonesian Airline Flagship",
        name: "Garuda Indonesia",
        image: ibm,
    },
    {
        text: "Indonesian Airline Flagship",
        name: "Citilink",
        image: hp,
    },
    {
        text: "Indonesian Airline Flagship",
        name: "Citilink",
        image: hp,
    },
];


export default function OurPartnerComponent() {

    return <>
        <Typography sx={styles.title}>
            Our Partner
        </Typography>
        <Box sx={{paddingBottom: '50px'}} display='flex' flexDirection='row' justifyContent='space-between'>
            <Grid container display='flex' flexDirection='row' gap={4}>
                <Grid item xs={4}>
                    <Typography sx={styles.text}>We work with other companies/brands at any scale of business from small to enterprise and help them  unlock the power of everyday customer interactions so they can make those experiences extraordinary to get more benefits</Typography>
                    <Box sx={styles.buttonFrame}>
                        <Box sx={styles.button}>
                            <Typography sx={styles.textButton}>View all customers and stories</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={'-300px'}
                        freeMode={true}
                        modules={[FreeMode]}
                    >
                        {partnersData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Box sx={styles.swiperBox} gap={2} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                                    <img src={item.image} />
                                    <Box gap={.25} display='flex' flexDirection='column' alignItems='center'>
                                        <Typography sx={styles.titleLogo}>{item.name}</Typography>
                                        <Typography sx={styles.descLogo}>{item.text}</Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        )
                        )}
                    </Swiper>
                </Grid>
            </Grid>
        </Box >
    </>
}