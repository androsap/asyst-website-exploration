import { useEffect, useRef, useState } from "react";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { IconButton } from "components/ui/icon-button";
import { ChevronLeftRoundedIcon, ChevronRightRoundedIcon } from "components/ui/icons";
import { CarouselBlock } from "consts/solution-detail/solution-page.types";
import { useT } from "shared/i18n";

interface CarouselSectionProps {
    id?: string;
    content: CarouselBlock;
}

export default function CarouselSection({ id, content }: CarouselSectionProps) {
    const t = useT();
    const { title, description, items } = content;
    const trackRef = useRef<HTMLUListElement>(null);
    const [edges, setEdges] = useState({ start: true, end: false });

    const updateEdges = () => {
        const track = trackRef.current;
        if (!track) return;
        setEdges({
            start: track.scrollLeft <= 1,
            end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 1,
        });
    };

    useEffect(() => {
        updateEdges();
        window.addEventListener("resize", updateEdges);
        return () => window.removeEventListener("resize", updateEdges);
    }, []);

    const scroll = (direction: 1 | -1) => {
        const track = trackRef.current;
        const card = track?.firstElementChild as HTMLElement | null;
        if (!track || !card) return;
        track.scrollBy({ left: direction * (card.offsetWidth + 16), behavior: "smooth" });
    };

    return <section id={id} className="pv-section pv-anchor sp-carousel">
        <Container maxWidth="xl" className="sp-carousel__inner">
            <div className="sp-carousel__intro">
                <Typography variant="h2" className="pv-heading__title">{title}</Typography>
                <Typography className="sp-carousel__description">{description}</Typography>
            </div>
            <div className="sp-carousel__viewport">
                <div className="sp-carousel__nav">
                    <IconButton className="sp-carousel__arrow" aria-label={t("Previous", "Sebelumnya")} disabled={edges.start} onClick={() => scroll(-1)}>
                        <ChevronLeftRoundedIcon />
                    </IconButton>
                    <IconButton className="sp-carousel__arrow" aria-label={t("Next", "Berikutnya")} disabled={edges.end} onClick={() => scroll(1)}>
                        <ChevronRightRoundedIcon />
                    </IconButton>
                </div>
                <ul ref={trackRef} className="sp-carousel__track" onScroll={updateEdges}>
                    {items.map(({ title, description, image }) => (
                        <li key={title} className="sp-carousel__card">
                            <Typography component="h3" className="sp-carousel__title">{title}</Typography>
                            <Typography className="sp-carousel__text">{description}</Typography>
                            <div className="sp-carousel__image">
                                <img src={image} alt={title} loading="lazy" decoding="async" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    </section>
}
