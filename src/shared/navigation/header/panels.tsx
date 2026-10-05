import { useState } from "react";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { HeaderGroup, HeaderPanelSubtitle, HeaderProductsConst, HeaderProductsLink } from "consts/header.const";
import MenuLink from "./menu-link";

interface PanelProps {
    onNavigate: () => void;
}

interface PanelSideProps {
    title: string;
    /** Halaman overview; tampil sebagai link "View all" di bawah subjudul. */
    link?: string;
    onNavigate?: () => void;
    tabs?: string[];
    active?: number;
    onChange?: (index: number) => void;
}

function PanelSide({ title, link, onNavigate, tabs, active, onChange }: PanelSideProps) {
    return <div className="header-panel__side">
        <div className="header-panel__title">{title}</div>
        <div className="header-panel__subtitle">{HeaderPanelSubtitle}</div>
        {link && <MenuLink link={link} className="header-panel__view-all" onClick={onNavigate}>
            View all {title.toLowerCase()}
            <ChevronRightRoundedIcon />
        </MenuLink>}
        {tabs && <div className="header-panel__tabs" role="tablist">
            {tabs.map((label, index) => (
                <button
                    key={label}
                    type="button"
                    role="tab"
                    aria-selected={index === active}
                    className={`header-panel__tab ${index === active ? "active" : ""}`}
                    onMouseEnter={() => onChange?.(index)}
                    onClick={() => onChange?.(index)}
                >
                    {label}
                    <ChevronRightRoundedIcon />
                </button>
            ))}
        </div>}
    </div>
}

export function ProductsPanel({ onNavigate }: PanelProps) {
    const [active, setActive] = useState(0);
    const category = HeaderProductsConst[active];

    return <div className="header-panel">
        <PanelSide title="Products" link={HeaderProductsLink} onNavigate={onNavigate} tabs={HeaderProductsConst.map(x => x.label)} active={active} onChange={setActive} />
        <div className="header-panel__content">
            <div className="header-panel__highlight">
                <div className="header-panel__highlight-title">{category.title}</div>
                <div className="header-panel__highlight-description">{category.description}</div>
            </div>
            <div className="header-products">
                {category.items.map(({ name, description, link }) => (
                    <MenuLink key={name} link={link} className="header-product" onClick={onNavigate}>
                        <span className="header-product__icon"><LoginRoundedIcon /></span>
                        <span>
                            <span className="header-product__name">{name}</span>
                            <span className="header-product__description">{description}</span>
                        </span>
                    </MenuLink>
                ))}
            </div>
        </div>
    </div>
}

interface GroupsPanelProps extends PanelProps {
    /** Satu grup = tanpa menu kiri (Company); lebih dari satu = ada tab di kiri (Solutions/Industries). */
    groups: HeaderGroup[];
}

export function GroupsPanel({ groups, onNavigate }: GroupsPanelProps) {
    const [active, setActive] = useState(0);
    const group = groups[active];
    const hasTabs = groups.length > 1;

    return <div className="header-panel">
        <PanelSide
            title={group.label}
            link={group.link}
            onNavigate={onNavigate}
            tabs={hasTabs ? groups.map(x => x.label) : undefined}
            active={active}
            onChange={setActive}
        />
        <div className="header-panel__content">
            <div className="header-links">
                {group.items.map(({ label, link }) => (
                    <MenuLink key={label} link={link} className="header-link" onClick={onNavigate}>
                        <span className="header-link__icon"><HubOutlinedIcon /></span>
                        <span className="header-link__label">{label}</span>
                    </MenuLink>
                ))}
            </div>
        </div>
    </div>
}
