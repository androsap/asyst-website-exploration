import { lazy, MouseEvent, Suspense, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "components/ui/container";
import { IconButton } from "components/ui/icon-button";
import { MenuItem, MenuPopup } from "components/ui/menu";
import { KeyboardArrowDownRoundedIcon, LanguageRoundedIcon, MenuRoundedIcon, SearchRoundedIcon } from "components/ui/icons";
import { useMediaQuery } from "hooks/use-media-query";
import { useScrollTrigger } from "hooks/use-scroll-trigger";
import logoAsyst from "assets/img/logo/asyst-logo-color.svg";
import { HeaderCompanyConst, HeaderLanguagesConst, HeaderNewsLink, HeaderSolutionsConst } from "consts/header.const";
import { setLanguage, useLanguage, useLocalized, useT } from "shared/i18n";
import { useTalkToExpert } from "components/product/shared/page-actions";
import { GroupsPanel, ProductsPanel } from "./panels";
import MobileMenu from "./mobile-menu";
import MenuLink from "./menu-link";
import LanguageFlag from "./flags";
import type { SearchOverlayProps } from "./search-overlay";
import "./index.scss";

const SearchOverlay = lazy(() => import("./search-overlay"));

type PanelKey = "products" | "solutions" | "company" | "language";

export default function HeaderShared() {
    const isMobile = useMediaQuery("(max-width:1023px)");
    const location = useLocation();
    const scrolled = useScrollTrigger(10);
    const [panel, setPanel] = useState<PanelKey | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [langAnchor, setLangAnchor] = useState<HTMLElement | null>(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchOrigin, setSearchOrigin] = useState<SearchOverlayProps["origin"] | null>(null);
    const language = useLanguage();
    const t = useT();
    const solutions = useLocalized(HeaderSolutionsConst);
    const company = useLocalized(HeaderCompanyConst);
    const closeTimer = useRef<number>();
    const talkToExpert = useTalkToExpert();

    const menus: { key?: PanelKey; label: string; link?: string }[] = [
        { key: "products", label: t("Products", "Produk") },
        { key: "solutions", label: t("Solutions", "Solusi") },
        { label: t("News", "Berita"), link: HeaderNewsLink },
        { key: "company", label: t("Company", "Perusahaan") },
    ];

    const closePanel = () => setPanel(null);

    const openSearch = (e: MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setSearchOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
        setSearchOpen(true);
        closePanel();
    };

    useEffect(() => {
        setPanel(null);
        setMobileOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && closePanel();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const openPanel = (key: PanelKey) => {
        window.clearTimeout(closeTimer.current);
        setPanel(key);
    };
    const scheduleClose = () => {
        window.clearTimeout(closeTimer.current);
        closeTimer.current = window.setTimeout(closePanel, 150);
    };

    return <header className={`header ${scrolled || panel ? "header--elevated" : "header--transparent"} ${panel ? "header--open" : ""}`} onMouseLeave={scheduleClose} onMouseEnter={() => window.clearTimeout(closeTimer.current)}>
        <Container maxWidth="xl" className="header__bar">
            <Link to="/" className="header__brand" aria-label={t("ASYST home", "Beranda ASYST")}>
                <img src={logoAsyst} alt="ASYST" className="header__logo" />
            </Link>

            {!isMobile && <nav className="header__nav">
                {menus.map(({ key, label, link }) => key
                    ? <button
                        key={label}
                        type="button"
                        className={`header__menu ${panel === key ? "active" : ""}`}
                        aria-expanded={panel === key}
                        onMouseEnter={() => openPanel(key)}
                        onClick={() => panel === key ? closePanel() : openPanel(key)}
                    >
                        {label}
                        <KeyboardArrowDownRoundedIcon />
                    </button>
                    : <MenuLink key={label} link={link} className="header__menu" onClick={closePanel}>{label}</MenuLink>
                )}
            </nav>}

            <div className="header__actions">
                <IconButton aria-label={t("Search", "Cari")} aria-haspopup="dialog" aria-expanded={searchOpen} className="header__icon-btn" onClick={openSearch}><SearchRoundedIcon /></IconButton>
                {isMobile
                    ? <>
                        <IconButton ref={setLangAnchor} aria-label={`${t("Language", "Bahasa")}: ${language}`} aria-haspopup="menu" className="header__icon-btn" onClick={() => setLangOpen(true)}><LanguageRoundedIcon /></IconButton>
                        <MenuPopup open={langOpen} onClose={() => setLangOpen(false)} anchorEl={langAnchor} lockScroll={false}>
                            {HeaderLanguagesConst.map(lang => (
                                <MenuItem key={lang} selected={lang === language} onClick={() => { setLanguage(lang); setLangOpen(false); }} className="header__lang-option">
                                    <LanguageFlag lang={lang} />
                                    {lang}
                                </MenuItem>
                            ))}
                        </MenuPopup>
                    </>
                    : <div className="header__lang-wrap" onMouseEnter={() => openPanel("language")}>
                        <button
                            type="button"
                            className={`header__lang ${panel === "language" ? "active" : ""}`}
                            aria-label={`${t("Language", "Bahasa")}: ${language}`}
                            aria-expanded={panel === "language"}
                            onClick={() => panel === "language" ? closePanel() : openPanel("language")}
                        >
                            <LanguageRoundedIcon />
                            {language}
                            <KeyboardArrowDownRoundedIcon className="header__lang-caret" />
                        </button>
                        {panel === "language" && <div className="header__lang-dropdown">
                            <div className="header-panel header-panel--lang">
                                {HeaderLanguagesConst.map(lang => (
                                    <button
                                        key={lang}
                                        type="button"
                                        className={`header-link ${lang === language ? "active" : ""}`}
                                        aria-pressed={lang === language}
                                        onClick={() => { setLanguage(lang); closePanel(); }}
                                    >
                                        <span className="header-link__icon"><LanguageFlag lang={lang} /></span>
                                        <span className="header-link__label">{lang}</span>
                                    </button>
                                ))}
                            </div>
                        </div>}
                    </div>}
                {!isMobile && <button type="button" className="header__cta" onClick={talkToExpert}>{t("Talk to expert", "Hubungi ahli")}</button>}
                {isMobile && <IconButton aria-label={t("Open menu", "Buka menu")} className="header__icon-btn" onClick={() => setMobileOpen(true)}><MenuRoundedIcon /></IconButton>}
            </div>
        </Container>

        {!isMobile && panel && panel !== "language" && <Container maxWidth="xl" className="header__dropdown">
            {panel === "products" && <ProductsPanel onNavigate={closePanel} />}
            {panel === "solutions" && <GroupsPanel groups={solutions} onNavigate={closePanel} />}
            {panel === "company" && <GroupsPanel groups={[company]} onNavigate={closePanel} />}
        </Container>}

        {isMobile && <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} onTalkToExpert={talkToExpert} logo={logoAsyst} />}

        {searchOrigin && <Suspense fallback={null}>
            <SearchOverlay open={searchOpen} origin={searchOrigin} onClose={() => setSearchOpen(false)} />
        </Suspense>}
    </header>
}
