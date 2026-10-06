// Halaman Search Result (revamp 2026). Belum ada API pencarian, jadi index disusun dari konten statis halaman
// (katalog produk, layer solusi, keahlian industri) + halaman company. Konten ikut berubah kalau const sumbernya diubah.
import { Language, Localized, localized } from "shared/i18n";
import { ProductCatalogConst } from "consts/product.const";
import { HeaderSolutionsConst } from "consts/header.const";
import { SolutionHeroConst, SolutionLayersConst } from "consts/solution.const";
import { IndustryExpertiseConst, IndustryHeroConst } from "consts/industry.const";

export const SEARCH_PAGE_SIZE = 5;

export const SEARCH_TABS = ["all", "products", "solutions", "industries"] as const;
export type SearchTab = typeof SEARCH_TABS[number];
export type SearchCategory = Exclude<SearchTab, "all"> | "company";

export interface SearchEntry {
    category: SearchCategory;
    title: string;
    description: string;
    link: string;
    /** Teks tambahan yang ikut dicari tapi tidak ditampilkan */
    keywords?: string;
}

export const SearchPageConst = localized({
    title: "Search Result",
    placeholder: "Search products, solutions, industries...",
    clear: "Clear search",
    tabs: { all: "All Result", products: "Products", solutions: "Solutions", industries: "Industries" } as Record<SearchTab, string>,
    /** `{n}` = jumlah hasil, `{q}` = kata kunci */
    resultCount: "{n} results for “{q}”",
    resultCountSingle: "1 result for “{q}”",
    emptyQuery: "Type a keyword to search ASYST products, solutions and industries.",
    noResult: "No results for “{q}”. Try another keyword.",
    loadMore: "Load more",
    // Overlay pencarian cepat dari tombol search di header
    quickPlaceholder: "Search Aero Systems Indonesia",
    quickNoResult: "No results for “{q}”",
    seeAll: "See all Results",
    close: "Close search",
    categories: { company: "Company", products: "Products", solutions: "Solutions", industries: "Industries" } as Record<SearchCategory, string>,
}, {
    title: "Hasil Pencarian",
    placeholder: "Cari produk, solusi, industri...",
    clear: "Hapus pencarian",
    tabs: { all: "Semua Hasil", products: "Produk", solutions: "Solusi", industries: "Industri" },
    resultCount: "{n} hasil untuk “{q}”",
    resultCountSingle: "1 hasil untuk “{q}”",
    emptyQuery: "Ketik kata kunci untuk mencari produk, solusi, dan industri ASYST.",
    noResult: "Tidak ada hasil untuk “{q}”. Coba kata kunci lain.",
    loadMore: "Muat lebih banyak",
    quickPlaceholder: "Cari di Aero Systems Indonesia",
    quickNoResult: "Tidak ada hasil untuk “{q}”",
    seeAll: "Lihat Semua Hasil",
    close: "Tutup pencarian",
    categories: { company: "Perusahaan", products: "Produk", solutions: "Solusi", industries: "Industri" },
});

/** Urutan grup hasil di overlay pencarian header */
export const SEARCH_QUICK_GROUPS: SearchCategory[] = ["company", "products", "solutions", "industries"];
export const SEARCH_QUICK_GROUP_LIMIT = 3;

// Halaman company belum punya const konten yang bisa dipakai ulang
const companyEntries = localized<SearchEntry[]>([
    { category: "company", title: "Asyst Corporate", description: "We are here to make our best contribution to the nation by prioritizing professionalism and integrity, and by working in synergy to realize a better Indonesia for the future.", link: "/about", keywords: "About us company profile Aero Systems Indonesia" },
    { category: "company", title: "Careers at Asyst", description: "Grow your career with ASYST and build enterprise technology that powers aviation, logistics and businesses across Indonesia.", link: "/career", keywords: "Career jobs vacancy hiring" },
    { category: "company", title: "Asyst News", description: "Explore the latest ASYST news on company updates, technology, events and expertise.", link: "/news", keywords: "News article press release" },
    { category: "company", title: "Case Study", description: "See how ASYST helps organizations solve business challenges with enterprise technology.", link: "/case-study", keywords: "Case study customer story" },
    { category: "company", title: "Contact Us", description: "Talk to ASYST experts about your technology challenge, products, solutions or partnership.", link: "/contact-us", keywords: "Contact talk to expert sales support" },
], [
    { description: "Kami hadir untuk memberikan kontribusi terbaik bagi bangsa dengan mengutamakan profesionalisme dan integritas, serta bersinergi mewujudkan Indonesia yang lebih baik di masa depan.", keywords: "Tentang kami profil perusahaan Aero Systems Indonesia" },
    { title: "Karier di Asyst", description: "Kembangkan karier bersama ASYST dan bangun teknologi enterprise untuk penerbangan, logistik, dan bisnis di seluruh Indonesia.", keywords: "Karier lowongan kerja rekrutmen" },
    { title: "Berita Asyst", description: "Jelajahi berita terbaru ASYST seputar perusahaan, teknologi, acara, dan keahlian.", keywords: "Berita artikel siaran pers" },
    { title: "Studi Kasus", description: "Lihat bagaimana ASYST membantu organisasi menyelesaikan tantangan bisnis dengan teknologi enterprise.", keywords: "Studi kasus cerita pelanggan" },
    { title: "Hubungi Kami", description: "Diskusikan tantangan teknologi, produk, solusi, atau kemitraan Anda dengan para ahli ASYST.", keywords: "Kontak hubungi ahli penjualan dukungan" },
]);

const buildIndex = (lang: Language): SearchEntry[] => {
    const catalog = ProductCatalogConst[lang];
    const seenProducts = new Set<string>();
    const products: SearchEntry[] = [
        { category: "products", title: catalog.title, description: catalog.description, link: "/product" },
        // Satu produk bisa muncul di beberapa kategori katalog; cukup tampil sekali
        ...catalog.categories.flatMap(category => category.products
            .filter(product => !seenProducts.has(product.link) && seenProducts.add(product.link))
            .map(product => ({
                category: "products" as const,
                title: `${product.name} - ${product.title}`,
                description: product.description,
                link: product.link,
                keywords: category.label,
            }))),
    ];

    // Urutan layer solusi sama dengan urutan item solusi di menu header
    const solutionNames = HeaderSolutionsConst[lang][0].items;
    const solutionHero = SolutionHeroConst[lang];
    const solutions: SearchEntry[] = [
        { category: "solutions", title: solutionHero.title, description: solutionHero.description, link: "/solution" },
        ...SolutionLayersConst[lang].items.map((item, i) => ({
            category: "solutions" as const,
            title: solutionNames[i]?.label ?? item.title,
            description: item.description,
            link: item.link.to,
            keywords: `${item.tag} ${item.title}`,
        })),
    ];

    const industryHero = IndustryHeroConst[lang];
    const industries: SearchEntry[] = [
        { category: "industries", title: industryHero.title, description: industryHero.description, link: "/industry" },
        ...IndustryExpertiseConst[lang].items.map(item => ({
            category: "industries" as const,
            title: item.title,
            description: item.description,
            link: item.link.to,
            keywords: `${item.tag} ${item.chips.join(" ")}`,
        })),
    ];

    return [...companyEntries[lang], ...products, ...solutions, ...industries];
};

export const SearchIndexConst: Localized<SearchEntry[]> = { EN: buildIndex("EN"), ID: buildIndex("ID") };
