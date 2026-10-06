import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { IndustryCardsContent } from "consts/industry.const";
import SectionHeading from "components/product/shared/section-heading";
import TabBar from "components/product/shared/tab-bar";
import { useT } from "shared/i18n";
import { INDUSTRY_SECTION_IDS } from "./section-ids";

/** Grid kartu industri dengan filter kapsul; kategori filter diambil dari `tag` tiap kartu. */
export default function IndustryCardsSection({ title, description, items }: IndustryCardsContent) {
    const [activeIndex, setActiveIndex] = useState(0);
    const t = useT();
    // Filter disimpan sebagai index (0 = semua) supaya tetap sama saat bahasa diganti
    const tags = Array.from(new Set(items.map(x => x.tag)));
    const filters = [t("All", "Semua"), ...tags];
    const visibleItems = activeIndex === 0 ? items : items.filter(x => x.tag === tags[activeIndex - 1]);

    return <Box component="section" id={INDUSTRY_SECTION_IDS.solutions} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            {title && <SectionHeading title={title} description={description} />}
            <TabBar variant="pill" labels={filters} active={activeIndex} onChange={setActiveIndex} />
            <Box className="iv-cards" role="tabpanel">
                {visibleItems.map(({ tag, title, description, chips, link, image }) => (
                    <Box key={link.to + image} className="iv-card">
                        <span className="sv-tag">{tag}</span>
                        <Typography className="iv-card__title">{title}</Typography>
                        <Typography className="iv-card__description">{description}</Typography>
                        <Box className="iv-card__chips">
                            {chips.map(chip => <span key={chip} className="sv-chip">{chip}</span>)}
                        </Box>
                        <Link to={link.to} className="iv-card__link">{link.label}</Link>
                        <Box className="iv-card__image" sx={{ backgroundImage: `url(${image})` }} />
                    </Box>
                ))}
            </Box>
        </Container>
    </Box>
}
