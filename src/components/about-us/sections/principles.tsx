import { useState } from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { PrinciplesConst } from "consts/about-us.const";

/** Tab Vision / Mission / Values + video profil perusahaan. */
export default function PrinciplesSection() {
    const { tabs, defaultTab, videoEmbedUrl, videoThumbnail } = PrinciplesConst;
    const [activeIndex, setActiveIndex] = useState(defaultTab);
    const [playing, setPlaying] = useState(false);

    return <Box component="section" className="home-section">
        <Container maxWidth="xl">
            <Box className="about-principles__tabs" role="tablist">
                {tabs.map(({ label }, index) => (
                    <ButtonBase
                        key={label}
                        role="tab"
                        aria-selected={index === activeIndex}
                        className={`about-principles__tab ${index === activeIndex ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {label}
                    </ButtonBase>
                ))}
            </Box>
            <Box className="about-principles">
                <Box className="about-principles__list" role="tabpanel">
                    {tabs[activeIndex].items.map(({ title, description }) => (
                        <Box key={title} className="about-principles__item">
                            <Typography className="about-principles__title">{title}</Typography>
                            <Typography className="about-principles__description">{description}</Typography>
                        </Box>
                    ))}
                </Box>
                <Box className="about-principles__video">
                    {playing && videoEmbedUrl
                        ? <iframe
                            src={`${videoEmbedUrl}?autoplay=1`}
                            title="Asyst company profile"
                            allow="autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                        />
                        : <ButtonBase
                            className="about-principles__thumbnail"
                            onClick={() => setPlaying(true)}
                            disabled={!videoEmbedUrl}
                            aria-label="Play video"
                        >
                            <img src={videoThumbnail} alt="Asyst office" loading="lazy" />
                            <YouTubeIcon className="about-principles__play" />
                        </ButtonBase>
                    }
                </Box>
            </Box>
        </Container>
    </Box>
}
