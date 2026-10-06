import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styles } from './styled';
import { ProductTestimonialModel } from "models/amala/testimonial.model";
import { Children } from 'react';
import he from 'he'
import { useApiText, useT } from 'shared/i18n'
import './index.scss';

interface TestimonialProps {
    testimonial: ProductTestimonialModel;
}

const TestimonialComponent: React.FC<TestimonialProps> = ({ testimonial }) => {
    const apiText = useApiText()
    const t = useT()

    return (
        <>
            <Typography sx={styles.title}>
                {t("What they said", "Kata mereka")}
            </Typography>
            <div className="testimonials">
                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={'80px'}
                    freeMode={true}
                    modules={[FreeMode]}
                >
                    {testimonial.product?.length > 0 && Children.toArray(testimonial.product
                        .filter(item => item.product_name === 'Apollo')
                        .map((item, index) =>
                            Children.toArray(item?.corporate_testimonial?.map(testimonial =>
                                <SwiperSlide key={index}>
                                    <Box
                                        sx={{
                                            ...styles.mainBox,
                                            // maxWidth: index === testimonial.length - 1 ? '535px' : '552px'
                                        }}
                                    >
                                        <Grid container>
                                            <Grid item xs={12} sx={styles.quoteGrid}>
                                                <Box className='box-review'>
                                                    <Typography sx={styles.quote}>
                                                        {apiText(testimonial, "review")}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                        <Grid container sx={styles.profileContainer}>
                                            <Grid item xs={2.5}>
                                                <Box sx={styles.profileImage}>
                                                    <img src={testimonial.image1} style={styles.profileImage} alt={testimonial.name} />
                                                </Box>
                                            </Grid>
                                            <Grid item xs={9.5}>
                                                <Typography sx={styles.name}
                                                    dangerouslySetInnerHTML={{ __html: he.decode(testimonial.name) }} />
                                                <Typography sx={styles.position}
                                                    dangerouslySetInnerHTML={{ __html: he.decode(testimonial.position) }} />
                                                <Typography sx={styles.company}
                                                    dangerouslySetInnerHTML={{ __html: he.decode(testimonial.company) }} />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </SwiperSlide>
                            ))
                        ))}
                </Swiper>

            </div>
        </>
    );
};

export default TestimonialComponent;