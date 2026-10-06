import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CapabilitiesConst } from "consts/home.const";
import { useLocalized } from "shared/i18n";
import SectionHeading from "./section-heading";

export default function CapabilitiesSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const capabilities = useLocalized(CapabilitiesConst);
    const active = capabilities.items[activeIndex];

    // Preload semua gambar tab supaya pergantian tidak kedip saat gambar baru dimuat
    useEffect(() => {
        CapabilitiesConst.EN.items.forEach(({ image }) => {
            const img = new Image();
            img.src = image;
        });
    }, []);

    return <Box component="section" className="home-section">
        <Container maxWidth="xl">
            <SectionHeading title={capabilities.title} description={capabilities.description} />
            <Box className="home-capabilities">
                <Box className="home-capabilities__menu" role="tablist">
                    {capabilities.items.map(({ icon: Icon, label }, index) => (
                        <ButtonBase
                            key={index}
                            role="tab"
                            disableRipple
                            aria-selected={index === activeIndex}
                            className={`home-capabilities__menu-item ${index === activeIndex ? "active" : ""}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <Box className="home-icon-tile"><Icon /></Box>
                            <Typography component="span">{label}</Typography>
                        </ButtonBase>
                    ))}
                </Box>
                <Box className="home-capabilities__detail" role="tabpanel">
                    <Box key={activeIndex} className="home-capabilities__text">
                        <Typography className="home-capabilities__title">{active.title}</Typography>
                        <Typography className="home-capabilities__description">{active.description}</Typography>
                        <Box className="home-chips">
                            {active.tags.map(tag => <span key={tag} className="home-chip">{tag}</span>)}
                        </Box>
                    </Box>
                    <Box className="home-capabilities__image">
                        <img key={active.image} src={active.image} alt={active.title} loading="lazy" />
                    </Box>
                </Box>
            </Box>
        </Container>
    </Box>
}
