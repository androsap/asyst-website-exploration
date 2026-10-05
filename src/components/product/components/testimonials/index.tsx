import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styles } from './styled';
import './index.scss';

import profile1 from 'assets/asyst/img/background/industry/testimonials-profile-1.png'
import profile2 from 'assets/asyst/img/background/industry/testimonials-profile-2.png'
import profile3 from 'assets/asyst/img/background/industry/testimonials-profile-3.png'

const testimonialsData = [
    {
        text: "Amala was the modern software solution that was exactly what we were looking for. From the feature set to the pricing model, Aero Systems Indonesia has been great for us.",
        name: "Victor Mansen",
        position: "Chief Technology Officer",
        company: "AXA",
        placeholderImage: profile1,
    },
    {
        text: "I've tried every single business solution for my company on the market (and continue to evaluate new solutions), and yet I keep finding coming back to Aero Systems Indonesia.",
        name: "Cindy Jemesson",
        position: "Chief Marketing Officer",
        company: "Bukopin",
        placeholderImage: profile2,
    },
    {
        text: "I've tried every single business solution for my company on the market (and continue to evaluate new solutions), and yet I keep finding coming back to Aero Systems Indonesia.",
        name: "Victor Jemesson",
        position: "Chief Executive Officer",
        company: "AXA",
        placeholderImage: profile3,
    },
];

export default function TestimonialsComponent() {
    return (
        <>
            <Typography sx={styles.title}>
                What they said
            </Typography>
            <div className="testimonials">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={'241px'}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                >
                    {testimonialsData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Box sx={styles.mainBox}>
                                <Grid container>
                                    <Grid item xs={12} sx={styles.quoteGrid}>
                                        <Box>
                                            <Typography sx={styles.quote}>
                                                {item.text}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid container sx={styles.profileContainer}>
                                    <Grid item xs={2.5}>
                                        <Box sx={styles.profileImage}>
                                            <img src={item.placeholderImage} style={styles.profileImage} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={9.5}>
                                        <Typography sx={styles.name}>
                                            {item.name}
                                        </Typography>
                                        <Typography sx={styles.position}>
                                            {item.position}
                                        </Typography>
                                        <Typography sx={styles.company}>
                                            {item.company}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};
