import { useEffect, useRef, useState } from "react";
import { ButtonBase } from "components/ui/button-base";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { CapabilitiesConst } from "consts/home.const";
import { useLocalized } from "shared/i18n";
import SectionHeading from "./section-heading";
import useNearViewport from "./use-near-viewport";

export default function CapabilitiesSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const capabilities = useLocalized(CapabilitiesConst);
    const active = capabilities.items[activeIndex];

    const sectionRef = useRef<HTMLElement>(null);
    const nearViewport = useNearViewport(sectionRef);

    // Preload semua gambar tab supaya pergantian tidak kedip saat gambar baru dimuat.
    // Baru dijalankan saat section mendekati viewport, supaya tidak berebut bandwidth dengan hero.
    useEffect(() => {
        if (!nearViewport) return;
        CapabilitiesConst.EN.items.forEach(({ image }) => {
            const img = new Image();
            img.src = image;
        });
    }, [nearViewport]);

    return <section ref={sectionRef} className="home-section">
        <Container maxWidth="xl">
            <SectionHeading title={capabilities.title} description={capabilities.description} />
            <div className="home-capabilities">
                <div className="home-capabilities__menu" role="tablist">
                    {capabilities.items.map(({ icon: Icon, label }, index) => (
                        <ButtonBase
                            key={index}
                            role="tab"
                            disableRipple
                            aria-selected={index === activeIndex}
                            className={`home-capabilities__menu-item ${index === activeIndex ? "active" : ""}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <span className="home-icon-tile"><Icon /></span>
                            <Typography component="span">{label}</Typography>
                        </ButtonBase>
                    ))}
                </div>
                <div className="home-capabilities__detail" role="tabpanel">
                    <div key={activeIndex} className="home-capabilities__text">
                        <Typography className="home-capabilities__title">{active.title}</Typography>
                        <Typography className="home-capabilities__description">{active.description}</Typography>
                        <div className="home-chips">
                            {active.tags.map(tag => <span key={tag} className="home-chip">{tag}</span>)}
                        </div>
                    </div>
                    <div className="home-capabilities__image">
                        <img key={active.image} src={nearViewport ? active.image : undefined} alt={active.title} loading="lazy" />
                    </div>
                </div>
            </div>
        </Container>
    </section>
}
