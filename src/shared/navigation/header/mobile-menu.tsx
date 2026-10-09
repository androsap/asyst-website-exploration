import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "components/ui/dialog";
import { Paper } from "components/ui/paper";
import { Slide } from "components/ui/transitions";
import { IconButton } from "components/ui/icon-button";
import { CloseRoundedIcon, ChevronLeftRoundedIcon, ChevronRightRoundedIcon } from "components/ui/icons";
import { HeaderCompanyConst, HeaderFeaturedConst, HeaderNewsLink, HeaderProductsConst, HeaderSolutionsConst } from "consts/header.const";
import { useLanguage, useLocalized, useT } from "shared/i18n";
import MenuLink from "./menu-link";

interface MobileMenuProps {
    open: boolean;
    onClose: () => void;
    onTalkToExpert: () => void;
    logo: string;
}

interface CardItem {
    name: string;
    description?: string;
    link?: string;
}

interface Category {
    label: string;
    /** Label singkat untuk badge di level kartu. */
    badge: string;
    items: CardItem[];
}

interface Section {
    label: string;
    link?: string;
    /** Sub-menu berisi kategori (drill-down ke kartu). */
    categories?: Category[];
    /** Sub-menu berisi link langsung. */
    links?: CardItem[];
}

export default function MobileMenu({ open, onClose, onTalkToExpert, logo }: MobileMenuProps) {
    const t = useT();
    const language = useLanguage();
    const featured = useLocalized(HeaderFeaturedConst);

    const sections = useMemo<Section[]>(() => [
        { label: t("Home", "Beranda"), link: "/" },
        {
            label: t("Products", "Produk"),
            categories: HeaderProductsConst[language].map(({ label, shortLabel, items }) => ({ label, badge: shortLabel || label, items })),
        },
        {
            label: t("Solutions", "Solusi"),
            categories: HeaderSolutionsConst[language].map(({ label, link, items }) => ({
                label,
                badge: label,
                // Link overview grup jadi kartu pertama
                items: [...(link ? [{ name: t(`All ${label.toLowerCase()}`, `Semua ${label.toLowerCase()}`), link }] : []), ...items.map(({ label, link }) => ({ name: label, link }))],
            })),
        },
        { label: t("News", "Berita"), link: HeaderNewsLink },
        { label: t("Company", "Perusahaan"), links: HeaderCompanyConst[language].items.map(({ label, link }) => ({ name: label, link })) },
    ], [language]);
    const [sectionIndex, setSectionIndex] = useState<number | null>(null);
    const [categoryIndex, setCategoryIndex] = useState<number | null>(null);

    // Selalu mulai dari menu utama saat drawer dibuka
    useEffect(() => {
        if (open) {
            setSectionIndex(null);
            setCategoryIndex(null);
        }
    }, [open]);

    const section = sectionIndex !== null ? sections[sectionIndex] : null;
    const category = section?.categories && categoryIndex !== null ? section.categories[categoryIndex] : null;

    const renderBack = (label: string, badge: string, onBack: () => void) => (
        <div className="header-mobile__back-row">
            <button type="button" className="header-mobile__back" onClick={onBack}>
                <ChevronLeftRoundedIcon />
                {label}
            </button>
            <span className="header-mobile__badge">{badge}</span>
        </div>
    );

    const renderContent = () => {
        if (section && category) {
            return <>
                {renderBack(section.label, category.badge, () => setCategoryIndex(null))}
                <div className={`header-mobile__cards ${category.items.length > 1 ? "is-grid" : ""}`}>
                    {category.items.map(item => (
                        <MenuLink key={item.name} link={item.link} className="header-mobile__card" onClick={onClose}>
                            <span className="header-mobile__card-title">{item.name}</span>
                            {item.description && <span className="header-mobile__card-description">{item.description}</span>}
                        </MenuLink>
                    ))}
                </div>
            </>
        }

        if (section) {
            return <>
                {renderBack(t("Main menu", "Menu utama"), section.label, () => setSectionIndex(null))}
                <nav className="header-mobile__list">
                    {section.categories?.map((item, index) => (
                        <button key={item.label} type="button" className="header-mobile__item" onClick={() => setCategoryIndex(index)}>
                            {item.label}
                            <ChevronRightRoundedIcon />
                        </button>
                    ))}
                    {section.links?.map(item => (
                        <MenuLink key={item.name} link={item.link} className="header-mobile__item" onClick={onClose}>{item.name}</MenuLink>
                    ))}
                </nav>
            </>
        }

        return <>
            <nav className="header-mobile__list header-mobile__list--main">
                {sections.map(({ label, link }, index) => link
                    ? <MenuLink key={label} link={link} className="header-mobile__item" onClick={onClose}>{label}</MenuLink>
                    : <button key={label} type="button" className="header-mobile__item" onClick={() => setSectionIndex(index)}>
                        {label}
                        <ChevronRightRoundedIcon />
                    </button>
                )}
            </nav>
            <div className="header-mobile__featured">
                <div className="header-mobile__featured-title">{t("Featured", "Unggulan")}</div>
                <Link to={featured.link} className="header-mobile__featured-card" onClick={onClose} style={{ backgroundImage: `url(${featured.image})` }}>
                    <span className="header-mobile__featured-overlay">
                        <span className="header-mobile__badge">{featured.label}</span>
                        <span className="header-mobile__featured-name">{featured.title}</span>
                    </span>
                </Link>
            </div>
        </>
    };

    // Drawer kanan: Modal + Slide dari kanan + Paper elevation 16 — sama dengan Drawer MUI
    return <Modal open={open} onClose={onClose} title={t("Menu", "Menu")}>
        <Slide in={open} direction="left" appear>
            <Paper
                elevation={16}
                square
                className="header-mobile overflow-y-auto flex flex-col h-full flex-[1_0_auto] z-[1200] [-webkit-overflow-scrolling:touch] fixed top-0 [outline:0] right-0"
            >
                <div className="header-mobile__top">
                    <img src={logo} alt="ASYST" className="header__logo" />
                    <IconButton aria-label={t("Close menu", "Tutup menu")} onClick={onClose}><CloseRoundedIcon /></IconButton>
                </div>
                <div className="header-mobile__body">{renderContent()}</div>
                <button type="button" className="header-mobile__cta" onClick={() => { onClose(); onTalkToExpert(); }}>{t("Talk to Expert", "Hubungi Ahli")}</button>
            </Paper>
        </Slide>
    </Modal>
}
