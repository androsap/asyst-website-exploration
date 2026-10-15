import { localized } from "shared/i18n";
import NewsModel from "models/news.model";
import imgNewsHero1 from "assets/asyst/img/background/HBNR-1.webp";
import imgNewsHero2 from "assets/asyst/img/background/HBNR-2.webp";
import imgNewsHero3 from "assets/asyst/img/background/HBNR-3.webp";
import imgNewsCargo from "assets/asyst/img/background/services-solutions/cargo.webp";
import imgNewsPartner from "assets/asyst/img/background/partner/partner-integration.webp";
import imgNewsImplementation from "assets/asyst/img/background/partner/partner-implementation.webp";
import imgNewsProduct from "assets/asyst/img/background/partner/partner-product.webp";
import imgNewsServices from "assets/asyst/img/background/partner/partner-services.webp";
import imgNewsCaseStudy from "assets/asyst/img/background/case-study/case-study-hero.webp";
import imgNewsAirline from "assets/asyst/img/background/industry/airline-airport/airline.webp";

export const NEWS_BASE_PATH = "/news";

export const NewsHeroConst = localized({
    title: "Dive into the World of Technology and Business",
    description: "Explore and share asyst news. Filter by topic to see the news and make you future ready",
}, {
    title: "Selami Dunia Teknologi dan Bisnis",
    description: "Jelajahi dan bagikan berita asyst. Saring berdasarkan topik untuk melihat berita dan bersiap menghadapi masa depan",
});

export const NEWS_ALL_CATEGORY = "All News";

export const NewsCategoriesConst = [
    NEWS_ALL_CATEGORY, "Business", "Cloud", "Digital Transformation", "Programming", "Project Management",
    "Software Development", "Quality Assurance", "Enterprise", "ERP", "Business Analysis", "Consulting",
];

export const NewsCategoryTermsConst: Record<string, string> = {
    [NEWS_ALL_CATEGORY]: "Semua Berita",
    "All": "Semua",
    "Business": "Bisnis",
    "Cloud": "Cloud",
    "Digital Transformation": "Transformasi Digital",
    "Programming": "Pemrograman",
    "Project Management": "Manajemen Proyek",
    "Software Development": "Pengembangan Perangkat Lunak",
    "Quality Assurance": "Penjaminan Kualitas",
    "Enterprise": "Enterprise",
    "ERP": "ERP",
    "Business Analysis": "Analisis Bisnis",
    "Consulting": "Konsultasi",
};

const DUMMY_PARAGRAPHS = [
    "Most organizations already know where the friction is. Approvals wait in inboxes, data is copied between systems by hand, and teams spend more time reconciling reports than acting on them. The challenge is rarely a lack of ideas; it is deciding which problem to solve first and how to measure whether the solution worked.",
    "That is why every engagement starts with discovery. We sit with the people who run the process every day, map each handoff, and separate symptoms from root causes. A slow report, for example, is often not a reporting problem at all but the result of three systems that were never designed to share data.",
    "From there, we define success in business terms. Instead of promising a new platform, we agree on outcomes such as shorter cycle times, fewer manual errors, or faster month-end closing. These targets become the yardstick for every design decision that follows, and they keep the project honest when priorities shift.",
    "Technology choices come next, not first. Depending on the existing landscape, the right answer may be extending a current system, integrating several tools through a central hub, or building a focused application for a specific workflow. Each option is weighed against cost, risk, and how well the team can support it long term.",
    "Delivery happens in short, visible increments. Stakeholders see working software every few weeks, give feedback while changes are still cheap, and gain confidence that the project is heading in the right direction. This rhythm also surfaces integration and data issues early, long before they can threaten a go-live date.",
    "Quality is built into each step rather than checked at the end. Automated tests protect critical business rules, performance is validated against realistic traffic, and security reviews run alongside development. The result is a release process that is predictable instead of stressful.",
    "Change management matters as much as code. New tools only create value when people use them, so we plan training, documentation, and support from the start. Early champions inside each department help colleagues adapt and provide feedback that shapes the next iteration.",
    "After launch, the work continues. Dashboards track the outcomes agreed at the start, and regular reviews identify the next improvement. Many of our long-term partnerships began with a single, well-scoped project that proved its value and opened the door to broader transformation.",
    "For companies in Indonesia, local context makes a difference. Regulations, payment methods, language, and the way teams collaborate all influence how a solution should be designed. Working with a partner who understands these details shortens the path from idea to adoption.",
    "If your team is facing a similar challenge, the best first step is a conversation. Share the process that slows you down most, and we will help you understand what is possible, what it takes, and where the quickest wins are likely to be.",
];

const dummyContent = (id: string, category: string, excerpt: string) => {
    const n = Number(id);
    const count = 3 + (n % 5);
    const body = Array.from({ length: count }, (_, i) => DUMMY_PARAGRAPHS[(n + i) % DUMMY_PARAGRAPHS.length]);
    const heading = `<h2>What this means for ${category}</h2>`;
    const middle = Math.ceil(body.length / 2);
    return [`<p>${excerpt}</p>`, ...body.slice(0, middle).map(p => `<p>${p}</p>`), heading, ...body.slice(middle).map(p => `<p>${p}</p>`)].join("");
};

const dummyNews = (id: string, title: string, category: string, image: string, created_date: string, excerpt: string): NewsModel => ({
    id, slug: `dummy-${id}`, title, category, image, created_date,
    caption: excerpt, content: dummyContent(id, category, excerpt), status: "Published",
    created_by: "admincms", updated_date: created_date, updated_by: "admincms",
});

export const NewsDummyConst: NewsModel[] = [
    dummyNews("1", "Selecting IT Services with business requirements", "Business", imgNewsHero2, "2026-09-30 09:00:00", "A business may immediately decide it needs cloud migration, automation, or a new platform."),
    dummyNews("2", "High-Speed Architecture for Media", "Software Development", imgNewsAirline, "2026-09-28 10:30:00", "We engineer ultra-fast news websites and publishing platforms optimized for Google News."),
    dummyNews("3", "Enterprise IT Consulting for Newsrooms", "Consulting", imgNewsServices, "2026-09-26 13:00:00", "Enterprise IT architecture built to handle sudden traffic spikes during breaking news."),
    dummyNews("4", "Moving Core Workloads to the Cloud Without Downtime", "Cloud", imgNewsPartner, "2026-09-24 08:15:00", "A phased migration plan keeps critical services online while infrastructure moves to the cloud."),
    dummyNews("5", "Digital Transformation Starts with the Right Questions", "Digital Transformation", imgNewsHero1, "2026-09-22 11:00:00", "Before choosing tools, align every initiative with the outcomes your organization actually needs."),
    dummyNews("6", "Writing Maintainable Code for Long-Lived Systems", "Programming", imgNewsCaseStudy, "2026-09-20 15:45:00", "Clear boundaries, consistent naming and good tests keep enterprise codebases easy to change."),
    dummyNews("7", "Keeping Multi-Vendor Projects on Schedule", "Project Management", imgNewsImplementation, "2026-09-18 09:30:00", "Shared milestones and weekly risk reviews help distributed teams deliver on time."),
    dummyNews("8", "Automated Testing That Scales with Your Release Cycle", "Quality Assurance", imgNewsProduct, "2026-09-16 14:00:00", "A layered test strategy catches regressions early without slowing down every deployment."),
    dummyNews("9", "Integrating Enterprise Systems Through a Single Hub", "Enterprise", imgNewsHero3, "2026-09-14 10:00:00", "Connecting ERP, HRIS and CRM through one integration layer removes data silos across teams."),
    dummyNews("10", "Choosing an ERP That Fits How Your Company Works", "ERP", imgNewsCargo, "2026-09-12 08:45:00", "Map your core processes first so the ERP adapts to the business, not the other way around."),
    dummyNews("11", "Turning Stakeholder Needs into Clear Requirements", "Business Analysis", imgNewsHero2, "2026-09-10 13:30:00", "Structured workshops translate scattered requests into requirements that developers can build."),
    dummyNews("12", "Measuring the Business Value of IT Investments", "Business", imgNewsAirline, "2026-09-08 16:00:00", "Tie every technology budget line to a metric leadership already tracks and reports on."),
    dummyNews("13", "Cost Control Strategies for Growing Cloud Bills", "Cloud", imgNewsServices, "2026-09-06 09:15:00", "Rightsizing, reserved capacity and tagging policies bring cloud spending back under control."),
    dummyNews("14", "Building a Data-Driven Culture in Traditional Industries", "Digital Transformation", imgNewsPartner, "2026-09-04 11:30:00", "Dashboards only matter when teams trust the data and use it to make daily decisions."),
    dummyNews("15", "Modern API Design for Enterprise Integrations", "Programming", imgNewsHero1, "2026-09-02 10:00:00", "Versioned, well-documented APIs let partners integrate faster with fewer support tickets."),
    dummyNews("16", "Agile Delivery in Regulated Environments", "Project Management", imgNewsCaseStudy, "2026-08-31 14:15:00", "Short iterations and audit-ready documentation can work together in strict compliance settings."),
    dummyNews("17", "From Monolith to Modular: A Practical Roadmap", "Software Development", imgNewsImplementation, "2026-08-29 09:45:00", "Splitting a legacy application step by step reduces risk compared to a full rewrite."),
    dummyNews("18", "Performance Testing Before Peak Season", "Quality Assurance", imgNewsProduct, "2026-08-27 15:00:00", "Load tests that mirror real traffic patterns reveal bottlenecks before customers do."),
    dummyNews("19", "Securing Enterprise Access Across Hybrid Workforces", "Enterprise", imgNewsHero3, "2026-08-25 08:30:00", "Single sign-on and role-based access keep systems secure for office and remote staff alike."),
    dummyNews("20", "ERP Data Migration Without Losing History", "ERP", imgNewsCargo, "2026-08-23 12:00:00", "Careful mapping and reconciliation keep years of financial records accurate after go-live."),
    dummyNews("21", "Process Mapping to Find Hidden Inefficiencies", "Business Analysis", imgNewsHero2, "2026-08-21 10:45:00", "Visualizing each handoff exposes delays and duplicate work that reports often miss."),
    dummyNews("22", "When to Bring in an IT Consulting Partner", "Consulting", imgNewsAirline, "2026-08-19 13:15:00", "External expertise speeds up critical projects when internal teams are already at capacity."),
    dummyNews("23", "Asyst Expands Digital Services for Indonesian Enterprises", "Business", imgNewsServices, "2026-08-17 09:00:00", "New service lines help companies modernize operations with local support and expertise."),
    dummyNews("24", "Designing Resilient Multi-Region Cloud Architecture", "Cloud", imgNewsPartner, "2026-08-15 11:00:00", "Redundant regions and automated failover keep services available during regional outages."),
];

export const NEWS_PAGE_SIZE = 9;
export const NEWS_MORE_SIZE = 6;
export const NEWS_SKELETON_COUNT = 4;
export const NEWS_RELATED_LIMIT = 6;

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
