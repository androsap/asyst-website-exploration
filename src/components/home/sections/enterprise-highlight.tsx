import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { EnterpriseHighlightConst } from "consts/home.const";
import { useLocalized } from "shared/i18n";
import SectionHeading from "./section-heading";

export default function EnterpriseHighlightSection() {
    const { title, description, items } = useLocalized(EnterpriseHighlightConst);

    return <section className="home-section home-highlight__section">
        <Container maxWidth="xl">
            <SectionHeading title={title} description={description} />
            <Swiper
                className="home-highlight__swiper"
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{ 600: { slidesPerView: 1.1, spaceBetween: 24 }, 900: { slidesPerView: 2.15, spaceBetween: 24 } }}
            >
                {items.map(({ icon: Icon, title, description }) => (
                    <SwiperSlide key={title}>
                        <div className="home-highlight">
                            <div className="home-icon-tile"><Icon /></div>
                            <div>
                                <Typography className="home-highlight__title">{title}</Typography>
                                <Typography className="home-highlight__description">{description}</Typography>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    </section>
}
