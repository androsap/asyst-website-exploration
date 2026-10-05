import { HeaderLanguagesConst } from "consts/header.const";

type Language = typeof HeaderLanguagesConst[number];

// SVG inline karena emoji bendera tidak tampil di Windows
const FlagID = () => <svg viewBox="0 0 3 2" aria-hidden="true">
    <rect width="3" height="1" fill="#E70011" />
    <rect y="1" width="3" height="1" fill="#FFFFFF" />
</svg>;

const FlagEN = () => <svg viewBox="0 0 60 30" aria-hidden="true">
    <clipPath id="flag-en-clip"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" /></clipPath>
    <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
    <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#flag-en-clip)" stroke="#C8102E" strokeWidth="4" />
    <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10" />
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
</svg>;

const flags: Record<Language, () => JSX.Element> = { ID: FlagID, EN: FlagEN };

export default function LanguageFlag({ lang }: { lang: Language }) {
    const Flag = flags[lang];
    return <span className="header__flag"><Flag /></span>;
}
