import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IndustriesConst } from "consts/home.const";
import { useLocalized, useT } from "shared/i18n";
import CarouselNav from "./carousel-nav";
import useSwiperNav from "./use-swiper-nav";

export default function IndustriesSection() {
    const { swiperProps, navProps } = useSwiperNav();
    const t = useT();
    const industries = useLocalized(IndustriesConst);

    return <section className="home-section home-industries__section">
        <Container maxWidth="xl">
            <div className="home-industries">
                <div className="home-industries__intro">
                    <Typography variant="h2" className="home-heading__title">{industries.title}</Typography>
                    <Typography className="home-industries__description">{industries.description}</Typography>
                    <div className="home-industries__actions">
                        <Link to={industries.allLink} className="home-link">{t("All Industries", "Semua Industri")}</Link>
                        <CarouselNav {...navProps} />
                    </div>
                </div>
                <div className={`home-industries__slider${navProps.isBeginning ? "" : " is-scrolled"}`}>
                    <Swiper {...swiperProps} spaceBetween={16} slidesPerView={1} breakpoints={{ 600: { slidesPerView: 1.6, spaceBetween: 32 }, 1200: { slidesPerView: 2.25, spaceBetween: 32 } }}>
                        {industries.items.map(({ title, description, image, tags }) => (
                            <SwiperSlide key={title}>
                                <div className="home-industry">
                                    <div className="home-industry__image" style={{ backgroundImage: `url(${image})` }} />
                                    <Typography className="home-industry__title">{title}</Typography>
                                    <Typography className="home-industry__description">{description}</Typography>
                                    <div className="home-chips home-chips--filled">
                                        {tags.map(tag => <span key={tag} className="home-chip">{tag}</span>)}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </Container>
    </section>
}
