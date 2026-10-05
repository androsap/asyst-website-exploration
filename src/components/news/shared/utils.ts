import dayjs from "dayjs";
import he from "he";
import { NEWS_BASE_PATH } from "consts/news-page.const";

export const newsDetailPath = (slug: string) => `${NEWS_BASE_PATH}/${slug}`;

export const newsCategoryPath = (category: string) => `${NEWS_BASE_PATH}?category=${encodeURIComponent(category)}`;

/** `created_date` dari API berformat "YYYY-MM-DD HH:mm:ss" */
export const formatNewsDate = (date: string, format = "MMMM D, YYYY") => {
    const parsed = dayjs(date);
    return parsed.isValid() ? parsed.format(format) : "";
};

const DANGEROUS_TAGS = "script, style, object, embed, link, meta, form";

/** Konten API berupa HTML yang di-escape. Decode lalu buang tag/atribut yang bisa menjalankan script. */
export const decodeNewsHtml = (content: string) => {
    const doc = new DOMParser().parseFromString(he.decode(content || ""), "text/html");
    doc.querySelectorAll(DANGEROUS_TAGS).forEach(el => el.remove());
    doc.body.querySelectorAll("*").forEach(el => {
        Array.from(el.attributes).forEach(({ name, value }) => {
            if (name.startsWith("on") || /^\s*javascript:/i.test(value)) el.removeAttribute(name);
        });
    });
    return doc.body.innerHTML;
};

export const newsPlainText = (content: string) => {
    const doc = new DOMParser().parseFromString(he.decode(content || ""), "text/html");
    return (doc.body.textContent || "").replace(/\s+/g, " ").trim();
};

const WORDS_PER_MINUTE = 200;

export const newsReadingMinutes = (content: string) =>
    Math.max(1, Math.round(newsPlainText(content).split(" ").filter(Boolean).length / WORDS_PER_MINUTE));
