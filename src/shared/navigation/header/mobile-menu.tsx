import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { HeaderCompanyConst, HeaderLinkItem, HeaderNewsLink, HeaderProductsConst, HeaderProductsLink, HeaderSolutionsConst } from "consts/header.const";
import MenuLink from "./menu-link";

interface MobileMenuProps {
    open: boolean;
    onClose: () => void;
    onTalkToExpert: () => void;
    logo: string;
}

interface Section {
    label: string;
    groups: { label?: string; items: HeaderLinkItem[] }[];
}

const sections: Section[] = [
    {
        label: "Products",
        groups: [
            { items: [{ label: "All products", link: HeaderProductsLink }] },
            ...HeaderProductsConst.map(({ label, items }) => ({ label, items: items.map(({ name, link }) => ({ label: name, link })) })),
        ],
    },
    {
        label: "Solutions",
        // Link overview tiap grup (Solutions/Industries) jadi item pertama
        groups: HeaderSolutionsConst.map(({ label, link, items }) => ({
            label,
            items: link ? [{ label: `All ${label.toLowerCase()}`, link }, ...items] : items,
        })),
    },
    { label: "Company", groups: [{ items: HeaderCompanyConst.items }] },
];

export default function MobileMenu({ open, onClose, onTalkToExpert, logo }: MobileMenuProps) {
    const [expanded, setExpanded] = useState<string>("");

    return <Drawer anchor="right" open={open} onClose={onClose} PaperProps={{ className: "header-mobile" }}>
        <div className="header-mobile__top">
            <img src={logo} alt="ASYST" className="header__logo" />
            <IconButton aria-label="Close menu" onClick={onClose}><CloseRoundedIcon /></IconButton>
        </div>
        <nav className="header-mobile__nav">
            {sections.map(({ label, groups }) => {
                const isOpen = expanded === label;
                return <div key={label} className="header-mobile__section">
                    <button type="button" className="header-mobile__toggle" aria-expanded={isOpen} onClick={() => setExpanded(isOpen ? "" : label)}>
                        {label}
                        <ExpandMoreRoundedIcon className={isOpen ? "is-open" : ""} />
                    </button>
                    {isOpen && groups.map((group, index) => (
                        <div key={group.label || index} className="header-mobile__group">
                            {group.label && <div className="header-mobile__group-label">{group.label}</div>}
                            {group.items.map(item => (
                                <MenuLink key={item.label} link={item.link} className="header-mobile__link" onClick={onClose}>{item.label}</MenuLink>
                            ))}
                        </div>
                    ))}
                </div>
            })}
            <MenuLink link={HeaderNewsLink} className="header-mobile__toggle" onClick={onClose}>News</MenuLink>
        </nav>
        <button type="button" className="header__cta header__cta--block" onClick={() => { onClose(); onTalkToExpert(); }}>Talk to expert</button>
    </Drawer>
}
