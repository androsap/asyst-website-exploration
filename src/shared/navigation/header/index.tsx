import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import logoAsyst from "assets/img/logo/asyst-logo-color.svg";
import { HeaderCompanyConst, HeaderLanguagesConst, HeaderNewsLink, HeaderSolutionsConst } from "consts/header.const";
import { useTalkToExpert } from "components/product/shared/page-actions";
import { GroupsPanel, ProductsPanel } from "./panels";
import MobileMenu from "./mobile-menu";
import MenuLink from "./menu-link";
import LanguageFlag from "./flags";
import "./index.scss";

type PanelKey = "products" | "solutions" | "company";

const menus: { key?: PanelKey; label: string; link?: string }[] = [
    { key: "products", label: "Products" },
    { key: "solutions", label: "Solutions" },
    { label: "News", link: HeaderNewsLink },
    { key: "company", label: "Company" },
];

export default function HeaderShared() {
    const isMobile = useMediaQuery("(max-width:1023px)");
    const location = useLocation();
    const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
    const [panel, setPanel] = useState<PanelKey | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [langAnchor, setLangAnchor] = useState<HTMLElement | null>(null);
    // TODO: belum ada fitur multi-bahasa; pilihan hanya mengganti label
    const [language, setLanguage] = useState<typeof HeaderLanguagesConst[number]>("ID");
    const closeTimer = useRef<number>();
    const talkToExpert = useTalkToExpert();

    const closePanel = () => setPanel(null);

    // Tutup menu saat pindah halaman / tekan Escape
    useEffect(() => {
        setPanel(null);
        setMobileOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && closePanel();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // Jeda kecil agar panel tidak tertutup saat kursor berpindah dari menu ke panel
    const openPanel = (key: PanelKey) => {
        window.clearTimeout(closeTimer.current);
        setPanel(key);
    };
    const scheduleClose = () => {
        window.clearTimeout(closeTimer.current);
        closeTimer.current = window.setTimeout(closePanel, 150);
    };

    // Transparan saat di paling atas; panel terbuka tetap pakai background agar terbaca
    return <header className={`header ${scrolled || panel ? "header--elevated" : "header--transparent"}`} onMouseLeave={scheduleClose} onMouseEnter={() => window.clearTimeout(closeTimer.current)}>
        <Container maxWidth="xl" className="header__bar">
            <Link to="/" className="header__brand" aria-label="ASYST home">
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
                {/* TODO: fitur pencarian belum ada */}
                <IconButton aria-label="Search" className="header__icon-btn"><SearchRoundedIcon /></IconButton>
                {!isMobile && <>
                    <button type="button" className="header__lang" aria-haspopup="menu" onClick={e => setLangAnchor(e.currentTarget)}>
                        <LanguageRoundedIcon />
                        {language}
                        <KeyboardArrowDownRoundedIcon className="header__lang-caret" />
                    </button>
                    <Menu anchorEl={langAnchor} open={!!langAnchor} onClose={() => setLangAnchor(null)} disableScrollLock>
                        {HeaderLanguagesConst.map(lang => (
                            <MenuItem key={lang} selected={lang === language} onClick={() => { setLanguage(lang); setLangAnchor(null); }} className="header__lang-option">
                                <LanguageFlag lang={lang} />
                                {lang}
                            </MenuItem>
                        ))}
                    </Menu>
                    <button type="button" className="header__cta" onClick={talkToExpert}>Talk to expert</button>
                </>}
                {isMobile && <IconButton aria-label="Open menu" className="header__icon-btn" onClick={() => setMobileOpen(true)}><MenuRoundedIcon /></IconButton>}
            </div>
        </Container>

        {!isMobile && panel && <Container maxWidth="xl" className="header__dropdown">
            {panel === "products" && <ProductsPanel onNavigate={closePanel} />}
            {panel === "solutions" && <GroupsPanel groups={HeaderSolutionsConst} onNavigate={closePanel} />}
            {panel === "company" && <GroupsPanel groups={[HeaderCompanyConst]} onNavigate={closePanel} />}
        </Container>}

        {isMobile && <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} onTalkToExpert={talkToExpert} logo={logoAsyst} />}
    </header>
}
