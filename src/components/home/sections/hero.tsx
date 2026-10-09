import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { Link } from "react-router-dom";
import { AwardsConst, HeroConst, TrustedByConst } from "consts/home.const";
import { useLocalized, useT } from "shared/i18n";

interface HeroSectionProps {
    onTalkToExpert: () => void;
}

export default function HeroSection({ onTalkToExpert }: HeroSectionProps) {
    const t = useT();
    const hero = useLocalized(HeroConst);
    const awards = useLocalized(AwardsConst);

    return <section className="home-hero">
        <Container maxWidth="xl">
            <div className="home-hero__content">
                <Typography variant="h1" className="home-hero__title">{hero.title}</Typography>
                <Typography className="home-hero__description">{hero.description}</Typography>
                <div className="home-hero__actions">
                    {/* span = item flex pengganti <a> pembungkus lama, supaya posisi tombol tetap sama persis */}
                    <span><Button asChild className="home-btn home-btn--primary"><Link to={hero.primaryButton.link}>{hero.primaryButton.label}</Link></Button></span>
                    <Button className="home-btn home-btn--outline" onClick={onTalkToExpert}>{hero.secondaryButton.label}</Button>
                </div>
                <div className="home-hero__honors">
                    <Typography component="span" className="home-hero__honors-pill">{t("Honorable Award", "Penghargaan")}</Typography>
                    <div className="home-hero__awards">
                        {awards.map(({ image, title, subtitle }) => (
                            <div key={title} className="home-award">
                                <div className="home-award__icon"><img src={image} alt={title} loading="lazy" /></div>
                                <div>
                                    <Typography className="home-award__title">{title}</Typography>
                                    <Typography className="home-award__subtitle">{subtitle}</Typography>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="home-trusted">
                <Typography className="home-trusted__label">{t("Trusted by", "Dipercaya oleh")}</Typography>
                <div className="home-trusted__logos">
                    {TrustedByConst.map(({ name, logo }) => (
                        <div key={name} className="home-trusted__logo">
                            <img src={logo} alt={name} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    </section>
}
