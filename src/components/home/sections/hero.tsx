import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
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

    return <Box component="section" className="home-hero">
        <Container maxWidth="xl">
            <Box className="home-hero__content">
                <Typography variant="h1" className="home-hero__title">{hero.title}</Typography>
                <Typography className="home-hero__description">{hero.description}</Typography>
                <Box className="home-hero__actions">
                    <Link to={hero.primaryButton.link}>
                        <Button className="home-btn home-btn--primary">{hero.primaryButton.label}</Button>
                    </Link>
                    <Button className="home-btn home-btn--outline" onClick={onTalkToExpert}>{hero.secondaryButton.label}</Button>
                </Box>
                <Box className="home-hero__honors">
                    <Typography component="span" className="home-hero__honors-pill">{t("Honorable Award", "Penghargaan")}</Typography>
                    <Box className="home-hero__awards">
                        {awards.map(({ image, title, subtitle }) => (
                            <Box key={title} className="home-award">
                                <Box className="home-award__icon"><img src={image} alt={title} loading="lazy" /></Box>
                                <Box>
                                    <Typography className="home-award__title">{title}</Typography>
                                    <Typography className="home-award__subtitle">{subtitle}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
            <Box className="home-trusted">
                <Typography className="home-trusted__label">{t("Trusted by", "Dipercaya oleh")}</Typography>
                <Box className="home-trusted__logos">
                    {TrustedByConst.map(({ name, logo }) => (
                        <Box key={name} className="home-trusted__logo">
                            <img src={logo} alt={name} loading="lazy" />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    </Box>
}
