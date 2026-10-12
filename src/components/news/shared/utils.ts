import { NEWS_BASE_PATH } from "consts/news-page.const";
import { formatDate, Language } from "shared/i18n";

export const newsDetailPath = (slug: string) => `${NEWS_BASE_PATH}/${slug}`;

export const newsCategoryPath = (category: string) => `${NEWS_BASE_PATH}?category=${encodeURIComponent(category)}`;

export const formatNewsDate = (date: string, language: Language, format = language === "ID" ? "D MMMM YYYY" : "MMMM D, YYYY") =>
    formatDate(date, format, language);

const DANGEROUS_TAGS = "script, style, object, embed, link, meta, form";

const decodeEntities = (content: string) => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = content;
    return textarea.value;
};

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
    // Pad block closings so adjacent paragraphs don't run together ("end.Next")
    const spaced = decodeEntities(content || "").replace(/<\/(p|h[1-6]|li|div|blockquote)>|<br\s*\/?>/gi, "$& ");
    const doc = new DOMParser().parseFromString(spaced, "text/html");
    return (doc.body.textContent || "").replace(/\s+/g, " ").trim();
};

const WORDS_PER_MINUTE = 200;

export const newsReadingMinutes = (content: string) =>
    Math.max(1, Math.round(newsPlainText(content).split(" ").filter(Boolean).length / WORDS_PER_MINUTE));
