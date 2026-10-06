// Halaman News & detail news (revamp 2026). Isi news diambil dari API (helper/NewsHelper).
import { localized } from "shared/i18n";

export const NEWS_BASE_PATH = "/news";

export const NewsHeroConst = localized({
    title: "Dive into the World of Technology and Business",
    description: "Explore and share asyst news. Filter by topic to see the news and make you future ready",
}, {
    title: "Selami Dunia Teknologi dan Bisnis",
    description: "Jelajahi dan bagikan berita asyst. Saring berdasarkan topik untuk melihat berita dan bersiap menghadapi masa depan",
});

export const NEWS_ALL_CATEGORY = "All News";

// Kategori yang dipakai CMS asyst (field `category` di API)
export const NewsCategoriesConst = [NEWS_ALL_CATEGORY, "Company", "Technology", "Events", "Expertise", "Logistics"];

/** Label ID untuk kategori news; nilai kategori tetap dipakai untuk query API & URL */
export const NewsCategoryTermsConst: Record<string, string> = {
    [NEWS_ALL_CATEGORY]: "Semua Berita",
    "All": "Semua",
    "Company": "Perusahaan",
    "Technology": "Teknologi",
    "Events": "Acara",
    "Expertise": "Keahlian",
    "Logistics": "Logistik",
};

export const NEWS_PAGE_SIZE = 9;
export const NEWS_RELATED_LIMIT = 6;

// `created_by` dari API berisi username CMS (mis. "admincms"), bukan nama tampilan
export const NEWS_AUTHOR = "Asyst Admin";

export const NewsDetailConst = localized({
    publishedBy: `Published by ${NEWS_AUTHOR}`,
    postedBy: `Posted by ${NEWS_AUTHOR}`,
    publishedAt: "Published at",
    collaboration: "For Sponsorships or collaborations",
    contactLabel: "contact us",
    contactLink: "/contact-us",
    relatedTitle: "Related News",
    notFoundTitle: "News not found",
    notFoundDescription: "The news you are looking for may have been moved or removed.",
    backToNews: "Back to News",
    share: "Share",
    linkCopied: "Link copied",
    /** `{n}` diganti jumlah menit */
    readingTime: "{n} min",
    readingTimePlural: "{n} mins",
    dateFormat: "MMMM D, YYYY [at] HH:mm:ss",
}, {
    publishedBy: `Diterbitkan oleh ${NEWS_AUTHOR}`,
    postedBy: `Diposting oleh ${NEWS_AUTHOR}`,
    publishedAt: "Diterbitkan di",
    collaboration: "Untuk sponsor atau kolaborasi,",
    contactLabel: "hubungi kami",
    relatedTitle: "Berita Terkait",
    notFoundTitle: "Berita tidak ditemukan",
    notFoundDescription: "Berita yang Anda cari mungkin telah dipindahkan atau dihapus.",
    backToNews: "Kembali ke Berita",
    share: "Bagikan",
    linkCopied: "Tautan disalin",
    readingTime: "{n} menit",
    readingTimePlural: "{n} menit",
    dateFormat: "D MMMM YYYY [pukul] HH:mm:ss",
});
