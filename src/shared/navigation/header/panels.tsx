import { useState } from "react";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { HeaderGroup, HeaderPanelSubtitle, HeaderProductsConst, HeaderProductsLink } from "consts/header.const";
import { useLocalized, useT } from "shared/i18n";
import MenuLink from "./menu-link";

interface PanelProps {
    onNavigate: () => void;
}

interface PanelSideProps {
    title: string;
    /** Halaman overview; tampil sebagai tombol primary di bawah subtitle. */
    link?: string;
    linkLabel?: string;
    onNavigate?: () => void;
    tabs?: string[];
    active?: number;
    onChange?: (index: number) => void;
}

const IconColor = "#2775BB";

// Carbon "port-output" (menu Product)
function ProductIcon() {
    return <svg viewBox="0 0 32 32" width="1em" height="1em" fill={IconColor} aria-hidden="true">
        <path d="M30 16L23 9L21.586 10.414L26.172 15H9V17H26.172L21.586 21.586L23 23L30 16Z" />
        <path d="M14 28C7.383 28 2 22.617 2 16C2 9.383 7.383 4 14 4C16.335 4 18.599 4.671 20.546 5.941L19.454 7.617C17.8319 6.55925 15.9365 5.99732 14 6C8.486 6 4 10.486 4 16C4 21.514 8.486 26 14 26C15.9365 26.0027 17.8319 25.4408 19.454 24.383L20.546 26.059C18.5992 27.3288 16.3243 28.0034 14 28Z" />
    </svg>
}

// Carbon "ibm-devops-control" (menu selain Product)
function GroupIcon() {
    return <svg viewBox="0 0 32 32" width="1em" height="1em" fill={IconColor} aria-hidden="true">
        <path d="M27 24a2.995 2.995 0 0 0-2.816 2h-2.566l-1.558-3.116C22.415 21.492 24 18.934 24 16s-1.585-5.492-3.94-6.884L21.618 6h2.566A2.995 2.995 0 0 0 27 8c1.654 0 3-1.346 3-3s-1.346-3-3-3a2.995 2.995 0 0 0-2.816 2h-2.566a1.99 1.99 0 0 0-1.789 1.106l-1.607 3.213C17.516 8.115 16.772 8 16 8s-1.516.115-2.222.32L12.17 5.104A1.99 1.99 0 0 0 10.38 4H7.817A2.995 2.995 0 0 0 5 2C3.346 2 2 3.346 2 5s1.346 3 3 3a2.995 2.995 0 0 0 2.816-2h2.566l1.558 3.116C9.584 10.508 8 13.066 8 16s1.584 5.492 3.94 6.884L10.382 26H7.816A2.995 2.995 0 0 0 5 24c-1.654 0-3 1.346-3 3s1.346 3 3 3a2.995 2.995 0 0 0 2.816-2h2.566a1.99 1.99 0 0 0 1.789-1.106l1.607-3.213c.706.204 1.45.319 2.222.319s1.516-.115 2.222-.32l1.607 3.214A1.99 1.99 0 0 0 21.618 28h2.566A2.995 2.995 0 0 0 27 30c1.654 0 3-1.346 3-3s-1.346-3-3-3m0-20a1.001 1.001 0 0 1 0 2a1 1 0 0 1 0-2M5 6a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2m0 22a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2m5.286-12c0-3.15 2.563-5.714 5.714-5.714s5.714 2.563 5.714 5.714s-2.563 5.714-5.714 5.714s-5.714-2.563-5.714-5.714M27 28a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2m-8.41-15.443L20 14l-5 5l-3-3l1.444-1.444l1.56 1.622z" />
    </svg>
}

function PanelSide({ title, link, linkLabel, onNavigate, tabs, active, onChange }: PanelSideProps) {
    const subtitle = useLocalized(HeaderPanelSubtitle);

    return <div className="header-panel__side">
        <div className="header-panel__title">{title}</div>
        <div className="header-panel__subtitle">{subtitle}</div>
        {link && linkLabel && <MenuLink link={link} className="header-panel__button" onClick={onNavigate}>{linkLabel}</MenuLink>}
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
    const t = useT();
    const categories = useLocalized(HeaderProductsConst);
    const category = categories[active];

    return <div className="header-panel">
        <PanelSide title={t("Products", "Produk")} link={HeaderProductsLink} linkLabel={t("Explore All Products", "Jelajahi Semua Produk")} onNavigate={onNavigate} tabs={categories.map(x => x.label)} active={active} onChange={setActive} />
        <div className="header-panel__content">
            <div className="header-panel__highlight">
                <div className="header-panel__highlight-title">{category.title}</div>
                <div className="header-panel__highlight-description">{category.description}</div>
            </div>
            <div className="header-products">
                {category.items.map(({ name, description, link }) => (
                    <MenuLink key={name} link={link} className="header-product" onClick={onNavigate}>
                        <span className="header-product__icon"><ProductIcon /></span>
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
            linkLabel={group.linkLabel}
            onNavigate={onNavigate}
            tabs={hasTabs ? groups.map(x => x.label) : undefined}
            active={active}
            onChange={setActive}
        />
        <div className="header-panel__content">
            <div className="header-links">
                {group.items.map(({ label, link }) => (
                    <MenuLink key={label} link={link} className="header-link" onClick={onNavigate}>
                        <span className="header-link__icon"><GroupIcon /></span>
                        <span className="header-link__label">{label}</span>
                    </MenuLink>
                ))}
            </div>
        </div>
    </div>
}
