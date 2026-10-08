import { useState } from "react";
import { ButtonBase } from "components/ui/button-base";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { YouTubeIcon } from "components/ui/icons";
import { PrinciplesConst } from "consts/about-us.const";
import { useLocalized } from "shared/i18n";

/** Tab Vision / Mission / Values + video profil perusahaan. */
export default function PrinciplesSection() {
    const { tabs, defaultTab, videoEmbedUrl, videoThumbnail, videoTitle, videoThumbnailAlt, playVideo } = useLocalized(PrinciplesConst);
    const [activeIndex, setActiveIndex] = useState(defaultTab);
    const [playing, setPlaying] = useState(false);

    return <section className="home-section">
        <Container maxWidth="xl">
            <div className="about-principles__tabs" role="tablist">
                {tabs.map(({ label }, index) => (
                    <ButtonBase
                        key={index}
                        role="tab"
                        aria-selected={index === activeIndex}
                        className={`about-principles__tab ${index === activeIndex ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {label}
                    </ButtonBase>
                ))}
            </div>
            <div className="about-principles">
                <div className="about-principles__list" role="tabpanel">
                    {tabs[activeIndex].items.map(({ title, description }, index) => (
                        <div key={index} className="about-principles__item">
                            <Typography className="about-principles__title">{title}</Typography>
                            <Typography className="about-principles__description">{description}</Typography>
                        </div>
                    ))}
                </div>
                <div className="about-principles__video">
                    {playing && videoEmbedUrl
                        ? <iframe
                            src={`${videoEmbedUrl}?autoplay=1`}
                            title={videoTitle}
                            allow="autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                        />
                        : <ButtonBase
                            className="about-principles__thumbnail"
                            onClick={() => setPlaying(true)}
                            disabled={!videoEmbedUrl}
                            aria-label={playVideo}
                        >
                            <img src={videoThumbnail} alt={videoThumbnailAlt} loading="lazy" />
                            <YouTubeIcon className="about-principles__play" />
                        </ButtonBase>
                    }
                </div>
            </div>
        </Container>
    </section>
}
