import { useState } from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CapabilitiesConst } from "consts/home.const";
import SectionHeading from "./section-heading";

export default function CapabilitiesSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = CapabilitiesConst.items[activeIndex];

    return <Box component="section" className="home-section">
        <Container maxWidth="xl">
            <SectionHeading title={CapabilitiesConst.title} description={CapabilitiesConst.description} />
            <Box className="home-capabilities">
                <Box className="home-capabilities__menu" role="tablist">
                    {CapabilitiesConst.items.map(({ icon: Icon, label }, index) => (
                        <ButtonBase
                            key={label}
                            role="tab"
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
                    <Box className="home-capabilities__text">
                        <Typography className="home-capabilities__title">{active.title}</Typography>
                        <Typography className="home-capabilities__description">{active.description}</Typography>
                        <Box className="home-chips">
                            {active.tags.map(tag => <span key={tag} className="home-chip">{tag}</span>)}
                        </Box>
                    </Box>
                    <Box className="home-capabilities__image">
                        <img src={CapabilitiesConst.image} alt={active.title} loading="lazy" />
                    </Box>
                </Box>
            </Box>
        </Container>
    </Box>
}
