import { NEWS_BASE_PATH } from "consts/news-page.const";
import { formatDate, Language } from "shared/i18n";

export const newsDetailPath = (slug: string) => `${NEWS_BASE_PATH}/${slug}`;

export const newsCategoryPath = (category: string) => `${NEWS_BASE_PATH}?category=${encodeURIComponent(category)}`;

/** `created_date` dari API berformat "YYYY-MM-DD HH:mm:ss" */
export const formatNewsDate = (date: string, language: Language, format = language === "ID" ? "D MMMM YYYY" : "MMMM D, YYYY") =>
    formatDate(date, format, language);

const DANGEROUS_TAGS = "script, style, object, embed, link, meta, form";

/**
 * Decode entity HTML (&lt;p&gt; -> <p>) pakai parser browser, pengganti library `he` (~50KB gzip).
 * Isi <textarea> berupa RCDATA: entity di-decode tapi tag tidak di-parse/dieksekusi.
 */
const decodeEntities = (content: string) => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = content;
    return textarea.value;
};

/** Konten API berupa HTML yang di-escape. Decode lalu buang tag/atribut yang bisa menjalankan script. */
export const decodeNewsHtml = (content: string) => {
    const doc = new DOMParser().parseFromString(decodeEntities(content || ""), "text/html");
    doc.querySelectorAll(DANGEROUS_TAGS).forEach(el => el.remove());
    doc.body.querySelectorAll("*").forEach(el => {
        Array.from(el.attributes).forEach(({ name, value }) => {
            if (name.startsWith("on") || /^\s*javascript:/i.test(value)) el.removeAttribute(name);
        });
    });
    return doc.body.innerHTML;
};

export const newsPlainText = (content: string) => {
    const doc = new DOMParser().parseFromString(decodeEntities(content || ""), "text/html");
    return (doc.body.textContent || "").replace(/\s+/g, " ").trim();
};

const WORDS_PER_MINUTE = 200;

export const newsReadingMinutes = (content: string) =>
    Math.max(1, Math.round(newsPlainText(content).split(" ").filter(Boolean).length / WORDS_PER_MINUTE));
