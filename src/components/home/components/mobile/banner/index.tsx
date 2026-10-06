import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { requestDemoModal } from 'components/home';
import './index.scss';
import { MainBannerModel } from 'models/mainbanner.model';
import { Children } from 'react';

interface HomeBannerMobileProps {
    banner: MainBannerModel[];
}

const HomeBannerMobileComponent: React.FC<HomeBannerMobileProps> = ({ banner }) => {

    return (
        <>
            <Box sx={{
                ".swiper-pagination": {
                    position: "absolute",
                    textAlign: "center",
                    transition: "300ms opacity",
                    transform: "translate3d(0, 0, 0)",
                    zIndex: 10,
                    marginBottom: "24px !important",

                    ".swiper-pagination-bullet": {
                        background: "rgba(255, 255, 255, 0.5)",
                    },

                    ".swiper-pagination-bullet.swiper-pagination-bullet-active": {
                        background: "#FFF",
                    },
                },
            }}>
                <Swiper
                    slidesPerView={1}
                    freeMode={false}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Pagination, FreeMode]}
                    loop={true}
                >
                    {banner?.length > 0 && Children.toArray(banner.map((item, index) =>
                        <SwiperSlide key={index}>
                            <Box sx={{
                                height: "100vh",
                                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.72) 52.63%, rgba(0, 0, 0, 0.42) 96.23%), url(${item.image_mobile})`,
                                backgroundSize: "cover",
                                backgroundPosition: "15%",
                                backgroundRepeat: "no-repeat",
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                            }}>
                                <Container maxWidth="xl" sx={{ pt: "10%" }}>
                                    <Typography sx={{
                                        color: '#FFF',
                                        textAlign: 'center',
                                        fontFamily: 'Inter',
                                        fontSize: '20px',
                                        fontWeight: '500'
                                    }}>{item.title}</Typography>
                                    <Typography sx={{
                                        color: '#89BA3A',
                                        textAlign: 'center',
                                        fontFamily: 'Inter',
                                        fontSize: '32px',
                                        fontWeight: '700'
                                    }}>{item.subtitle}</Typography>
                                    <Button sx={{
                                        width: '100%',
                                        height: '48px',
                                        mt: '29px',
                                        mb: '75px',
                                        borderRadius: '55px',
                                        background: 'linear-gradient(180deg, #2775BB 0%, #2775BB 100%)',
                                        color: '#FFF',
                                        textAlign: 'center',
                                        fontFamily: 'Inter',
                                        fontSize: '16px',
                                        fontWeight: '700'
                                    }} onClick={requestDemoModal}>Schedule a demo</Button>
                                </Container>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper >
            </Box>
        </>
    );
}

export default HomeBannerMobileComponent;