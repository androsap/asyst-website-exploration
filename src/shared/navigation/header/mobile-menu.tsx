import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { HeaderCompanyConst, HeaderFeaturedConst, HeaderNewsLink, HeaderProductsConst, HeaderSolutionsConst } from "consts/header.const";
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

const sections: Section[] = [
    { label: "Home", link: "/" },
    {
        label: "Products",
        categories: HeaderProductsConst.map(({ label, shortLabel, items }) => ({ label, badge: shortLabel || label, items })),
    },
    {
        label: "Solutions",
        categories: HeaderSolutionsConst.map(({ label, link, items }) => ({
            label,
            badge: label,
            // Link overview grup jadi kartu pertama
            items: [...(link ? [{ name: `All ${label.toLowerCase()}`, link }] : []), ...items.map(({ label, link }) => ({ name: label, link }))],
        })),
    },
    { label: "News", link: HeaderNewsLink },
    { label: "Company", links: HeaderCompanyConst.items.map(({ label, link }) => ({ name: label, link })) },
];

export default function MobileMenu({ open, onClose, onTalkToExpert, logo }: MobileMenuProps) {
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
                {renderBack("Main menu", section.label, () => setSectionIndex(null))}
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
                <div className="header-mobile__featured-title">Featured</div>
                <Link to={HeaderFeaturedConst.link} className="header-mobile__featured-card" onClick={onClose} style={{ backgroundImage: `url(${HeaderFeaturedConst.image})` }}>
                    <span className="header-mobile__featured-overlay">
                        <span className="header-mobile__badge">{HeaderFeaturedConst.label}</span>
                        <span className="header-mobile__featured-name">{HeaderFeaturedConst.title}</span>
                    </span>
                </Link>
            </div>
        </>
    };

    return <Drawer anchor="right" open={open} onClose={onClose} PaperProps={{ className: "header-mobile" }}>
        <div className="header-mobile__top">
            <img src={logo} alt="ASYST" className="header__logo" />
            <IconButton aria-label="Close menu" onClick={onClose}><CloseRoundedIcon /></IconButton>
        </div>
        <div className="header-mobile__body">{renderContent()}</div>
        <button type="button" className="header-mobile__cta" onClick={() => { onClose(); onTalkToExpert(); }}>Talk to Expert</button>
    </Drawer>
}
