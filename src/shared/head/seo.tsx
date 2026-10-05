import { useEffect } from "react";

// Host produksi saat ini home.asyst.co.id (www.asyst.co.id redirect ke sana); set VITE_SITE_URL untuk memaksa host tertentu
export const SITE_URL: string = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, "");
export const SITE_NAME = "PT Aero Systems Indonesia";

export interface SeoOptions {
    /** Judul untuk og:title (document.title tetap diatur lewat prop `title` layout) */
    title: string;
    description: string;
    /** Path tanpa query, mis. `/career/jobs`; query param filter tidak ikut ke canonical */
    path: string;
    /** URL absolut atau path aset (hasil import gambar) */
    image?: string;
    type?: "website" | "article";
    /** Satu atau beberapa objek schema.org untuk JSON-LD */
    jsonLd?: object | object[];
}

const absoluteUrl = (url: string) => /^https?:\/\//.test(url) ? url : `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`;

/** Pasang/ubah elemen di <head>; mengembalikan fungsi untuk mengembalikan nilai sebelumnya */
const upsert = (selector: string, create: () => HTMLElement, attr: string, value: string) => {
    const existing = document.head.querySelector<HTMLElement>(selector);
    const element = existing ?? document.head.appendChild(create());
    const previous = element.getAttribute(attr);
    element.setAttribute(attr, value);
    return () => {
        if (!existing) element.remove();
        else if (previous !== null) element.setAttribute(attr, previous);
    };
};

const meta = (key: "name" | "property", name: string, content: string) =>
    upsert(`meta[${key}="${name}"]`, () => {
        const element = document.createElement("meta");
        element.setAttribute(key, name);
        return element;
    }, "content", content);

/** Meta description, canonical, Open Graph, Twitter card & JSON-LD per halaman (SPA: dibersihkan saat unmount). */
export default function useSeo({ title, description, path, image, type = "website", jsonLd }: SeoOptions) {
    const jsonLdText = jsonLd ? JSON.stringify(jsonLd) : "";

    useEffect(() => {
        const url = absoluteUrl(path);
        const cleanups = [
            meta("name", "description", description),
            upsert('link[rel="canonical"]', () => {
                const element = document.createElement("link");
                element.setAttribute("rel", "canonical");
                return element;
            }, "href", url),
            meta("property", "og:type", type),
            meta("property", "og:site_name", SITE_NAME),
            meta("property", "og:title", title),
            meta("property", "og:description", description),
            meta("property", "og:url", url),
            meta("name", "twitter:card", image ? "summary_large_image" : "summary"),
            meta("name", "twitter:title", title),
            meta("name", "twitter:description", description),
        ];
        if (image) {
            cleanups.push(meta("property", "og:image", absoluteUrl(image)), meta("name", "twitter:image", absoluteUrl(image)));
        }
        if (jsonLdText) {
            const script = document.createElement("script");
            script.type = "application/ld+json";
            script.dataset.seo = "page";
            script.text = jsonLdText;
            document.head.appendChild(script);
            cleanups.push(() => script.remove());
        }
        return () => cleanups.reverse().forEach(cleanup => cleanup());
    }, [title, description, path, image, type, jsonLdText]);
}
