import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
import { Typography } from "components/ui/typography";
import { mainBoxStyle, styles } from './styled';
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
            <Typography className={styles.title}>
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
                        .filter(item => item.product_name === 'Auxoshift')
                        .map((item, index) =>
                            Children.toArray(item?.corporate_testimonial?.map(testimonial =>
                                <SwiperSlide key={index}>
                                    <div
                                        className={styles.mainBox}
                                        style={mainBoxStyle}
                                    >
                                        <div className="box-border flex flex-wrap w-full flex-row">
                                            <div className={`box-border m-0 flex-row grow-0 basis-[100%] max-w-[100%] ${styles.quoteGrid}`}>
                                                <div className='box-review'>
                                                    <Typography className={styles.quote}>
                                                        {apiText(testimonial, "review")}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`box-border flex flex-wrap w-full flex-row ${styles.profileContainer}`}>
                                            <div className="box-border m-0 flex-row grow-0 basis-[20.833333%] max-w-[20.833333%]">
                                                <div className={styles.profileImage}>
                                                    <img src={testimonial.image1} className={styles.profileImage} alt={testimonial.name} />
                                                </div>
                                            </div>
                                            <div className="box-border m-0 flex-row grow-0 basis-[79.166667%] max-w-[79.166667%]">
                                                <Typography className={styles.name}
                                                    dangerouslySetInnerHTML={{ __html: he.decode(testimonial.name) }} />
                                                <Typography className={styles.position}
                                                    dangerouslySetInnerHTML={{ __html: he.decode(testimonial.position) }} />
                                                <Typography className={styles.company}
                                                    dangerouslySetInnerHTML={{ __html: he.decode(testimonial.company) }} />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        ))}
                </Swiper>

            </div>
        </>
    );
};

export default TestimonialComponent;