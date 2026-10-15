import { useSyncExternalStore } from "react";

export const LANGUAGES = ["ID", "EN"] as const;
export type Language = typeof LANGUAGES[number];

const DEFAULT_LANGUAGE: Language = "ID";
const STORAGE_KEY = "language";

const isLanguage = (value: unknown): value is Language => LANGUAGES.includes(value as Language);

const readStoredLanguage = (): Language => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return isLanguage(stored) ? stored : DEFAULT_LANGUAGE;
    } catch {
        return DEFAULT_LANGUAGE;
    }
};

let currentLanguage = readStoredLanguage();
const listeners = new Set<() => void>();

const syncDocument = (language: Language) => {
    document.documentElement.lang = language.toLowerCase();
};
syncDocument(currentLanguage);

const getLanguage = () => currentLanguage;

export const setLanguage = (language: Language) => {
    if (language === currentLanguage) return;
    currentLanguage = language;
    try {
        localStorage.setItem(STORAGE_KEY, language);
    } catch {
    }
    syncDocument(language);
    listeners.forEach(listener => listener());
};

const subscribe = (listener: () => void) => {
    listeners.add(listener);
    return () => { listeners.delete(listener) };
};

export const useLanguage = () => useSyncExternalStore(subscribe, getLanguage);

export const useT = () => {
    const language = useLanguage();
    return (en: string, id: string) => language === "ID" ? id : en;
};

export const useTerms = (dictionary: Record<string, string>) => {
    const language = useLanguage();
    return (term: string) => language === "ID" ? dictionary[term] ?? term : term;
};

export const useApiText = () => {
    const language = useLanguage();
    const [primary, fallback] = language === "ID" ? ["id", "en"] : ["en", "id"];
    return (source: object | undefined | null, field: string): string => {
        const record = (source ?? {}) as Record<string, unknown>;
        return String(record[`${field}_${primary}`] || record[`${field}_${fallback}`] || "");
    };
};


export type Localized<T> = Record<Language, T>;

export type Translation<T> =
    T extends string ? string :
    T extends (...args: never[]) => unknown ? never :
    T extends readonly (infer U)[] ? Translation<U>[] :
    T extends object ? { [K in keyof T]?: Translation<T[K]> } :
    never;

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
    typeof value === "object" && value !== null && Object.getPrototypeOf(value) === Object.prototype;

const mergeTranslation = <T,>(base: T, translation: unknown, path = "ID"): T => {
    if (translation === undefined) return base;
    if (Array.isArray(base) && Array.isArray(translation)) {
        if (import.meta.env.DEV && translation.length !== base.length) {
            console.warn(`[i18n] ${path}: ${base.length} item EN vs ${translation.length} item ID`);
        }
        return base.map((item, index) => mergeTranslation(item, translation[index], `${path}[${index}]`)) as T;
    }
    if (isPlainObject(base) && isPlainObject(translation)) {
        const result: Record<string, unknown> = { ...base };
        Object.keys(translation).forEach(key => {
            result[key] = mergeTranslation(base[key], translation[key], `${path}.${key}`);
        });
        return result as T;
    }
    return translation as T;
};

export const localized = <T,>(en: T, id: Translation<T>): Localized<T> => ({ EN: en, ID: mergeTranslation(en, id) });

export const useLocalized = <T,>(content: Localized<T>): T => content[useLanguage()];

export const mapLocalized = <T, U,>(content: Localized<T>, map: (value: T) => U): Localized<U> => ({ EN: map(content.EN), ID: map(content.ID) });
