import { Fragment, ReactNode } from "react";
import { SearchEntry } from "consts/search.const";
import { HeaderSearchLink } from "consts/header.const";

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const toTerms = (query: string) => query.toLowerCase().split(/\s+/).filter(Boolean);

/** Semua kata kunci harus ada; hasil dengan kata kunci di judul diurutkan lebih dulu. */
export const searchEntries = (entries: SearchEntry[], query: string) => {
    const terms = toTerms(query);
    if (!terms.length) return [];
    const phrase = query.trim().toLowerCase();
    return entries
        .map((entry, index) => {
            const title = entry.title.toLowerCase();
            const haystack = `${title} ${entry.description} ${entry.keywords ?? ""}`.toLowerCase();
            if (!terms.every(term => haystack.includes(term))) return null;
            const score = (title.includes(phrase) ? 10 : 0) + terms.filter(term => title.includes(term)).length;
            return { entry, score, index };
        })
        .filter((result): result is NonNullable<typeof result> => result !== null)
        .sort((a, b) => b.score - a.score || a.index - b.index)
        .map(result => result.entry);
};

/** Tebalkan bagian teks yang cocok dengan kata kunci */
export const highlight = (text: string, terms: string[]): ReactNode => {
    if (!terms.length) return text;
    const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "gi");
    return text.split(pattern).map((part, i) => i % 2 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>);
};

export const searchPageLink = (query: string) => `${HeaderSearchLink}${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`;
