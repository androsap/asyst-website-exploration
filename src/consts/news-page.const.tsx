// Halaman News & detail news (revamp 2026). Isi news diambil dari API (helper/NewsHelper).

export const NEWS_BASE_PATH = "/news";

export const NewsHeroConst = {
    title: "Dive into the World of Technology and Business",
    description: "Explore and share asyst news. Filter by topic to see the news and make you future ready",
};

export const NEWS_ALL_CATEGORY = "All News";

// Kategori yang dipakai CMS asyst (field `category` di API)
export const NewsCategoriesConst = [NEWS_ALL_CATEGORY, "Company", "Technology", "Events", "Expertise", "Logistics"];

export const NEWS_PAGE_SIZE = 9;
export const NEWS_RELATED_LIMIT = 6;

// `created_by` dari API berisi username CMS (mis. "admincms"), bukan nama tampilan
export const NEWS_AUTHOR = "Asyst Admin";

export const NewsDetailConst = {
    publishedBy: `Published by ${NEWS_AUTHOR}`,
    collaboration: "For Sponsorships or collaborations",
    contactLabel: "contact us",
    contactLink: "/contact-us",
    relatedTitle: "Related News",
    notFoundTitle: "News not found",
    notFoundDescription: "The news you are looking for may have been moved or removed.",
};
