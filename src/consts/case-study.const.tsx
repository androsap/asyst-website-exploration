import imgHero from "assets/asyst/img/background/services-solutions/products-and-services.png";
import imgFeatured from "assets/asyst/img/background/product/amala/feature.png";
import imgCase1 from "assets/asyst/img/background/services-solutions/amala1.png";
import imgCase2 from "assets/asyst/img/background/services-solutions/amala2.png";
import imgCase3 from "assets/asyst/img/background/industry/airline-airport/airport.jpeg";
import imgCase4 from "assets/asyst/img/background/services-solutions/hermes1.png";
import imgCase5 from "assets/asyst/img/background/services-solutions/hermes2.png";
import imgCase6 from "assets/asyst/img/background/product/athena/athena-background.png";
import imgCase7 from "assets/asyst/img/background/services-solutions/cargo.png";
import imgCase8 from "assets/asyst/img/background/product/elea/elea-background.png";
import imgCase9 from "assets/asyst/img/background/product/chronus/chronus-background.png";
import imgExpAirline from "assets/asyst/img/background/industry/airline-airport/airline.jpeg";
import imgExpEnterprise from "assets/asyst/img/background/HBNR-3.jpg";
import imgExpDigital from "assets/asyst/img/background/product/overview/background-product.png";
import imgExpItService from "assets/asyst/img/background/HBNR-2.jpg";
import imgTech1 from "assets/asyst/img/background/HBNR-1.jpg";
import imgTech2 from "assets/asyst/img/background/HBNR-2.jpg";
import imgProfile1 from "assets/asyst/img/background/industry/testimonials-profile-1.png";
import imgProfile2 from "assets/asyst/img/background/industry/testimonials-profile-2.png";
import imgProfile3 from "assets/asyst/img/background/industry/testimonials-profile-3.png";
import logoGaruda from "assets/asyst/img/logo/ga-logo-color.png";
import { localized } from "shared/i18n";

// Konten statis halaman Case Study & detailnya (desain revamp 2026).
// Gambar sementara memakai aset yang sudah ada di repo; ganti dengan aset final dari desain.
// `slug` tanpa entri di caseStudyDetailsEn = halaman detail belum ada (kartu tampil tapi tidak bisa diklik).
// Konten dua bahasa: konstanta `...En` = teks EN lengkap; ekspor `localized(...En, {...})` di bawah file = terjemahan ID (teks saja,
// struktur & urutan sama). Opsi filter & tag tetap bahasa Inggris (key filter); labelnya lewat CaseStudyTermsConst.

export const CASE_STUDY_BASE_PATH = "/case-study";

export const caseStudyLink = (slug: string) => `${CASE_STUDY_BASE_PATH}/${slug}`;

// ---------- halaman utama ----------

/** Dimensi filter explorer; urutan = urutan tab */
export type CaseStudyFilterKey = "industry" | "solution" | "technology";

export interface CaseStudyItem {
    slug: string;
    title: string;
    image: string;
    tags: string[];
    industry: string;
    solution: string;
    technology: string[];
}

const caseStudyHeroEn = {
    title: "Technology Solutions.\nReal Business Outcomes.",
    description: "Discover how ASYST helps organizations solve complex technology challenges through consulting, software, integration and managed IT services.",
    button: "Explore Our Work",
    image: imgHero,
}

const caseStudyIntroEn = {
    title: "Case Study",
    description: "Explore how ASYST helps organizations turn complex technology requirements into practical business solutions. From airline booking and distribution platforms to IT service management and professional IT services, our experience spans critical enterprise technology environments.",
}

const caseStudyFeaturedEn = {
    title: "Featured Case Study",
    description: "An effective IT strategy starts with the business, not with a technology product. ASYST's approach connects business objectives, current technology capabilities and future priorities to create a practical roadmap for transformation.",
    slug: "garuda-indonesia",
    client: "Garuda Indonesia",
    caseTitle: "Airline Booking & Distribution",
    summary: "UI/UX Re-design Web and Mobile include digital booking ecosystem supporting airline sales and business partners.",
    tags: ["Aviation", "React.js", "CMS Development"],
    image: imgFeatured,
    details: [
        { label: "Service", value: "Professional IT Services / Booking & Distribution" },
        { label: "Challenge", value: "Enable digital airline booking and distribution across customer and business-partner channels." },
        { label: "Asyst Role", value: "Technology development, integration and application services." },
    ],
    button: "Read Case study",
}

const caseStudyFilterTabsEn: { key: CaseStudyFilterKey; label: string; options: string[] }[] = [
    { key: "industry", label: "Industry", options: ["Airlines", "Enterprise", "Banking", "Telecommunication", "Insurance", "Transportation", "Information & Technology"] },
    { key: "solution", label: "Solutions", options: ["Booking & Distribution", "Mobile Platform", "IT Service Management", "Enterprise Application", "Data & Analytics"] },
    { key: "technology", label: "Technology", options: ["React.js", "Next.js", "Node.js", "Flutter", "Power BI", "Java"] },
];

const caseStudyExplorerEn = {
    allLabel: "All",
    searchPlaceholder: "Search study case",
    emptyText: "No case study matches your filter.",
    loadMore: "Load more",
    pageSize: 6,
}

const caseStudiesEn: CaseStudyItem[] = [
    { slug: "garuda-indonesia", title: "Airline booking & distribution ecosystem", image: imgFeatured, tags: ["Aviation", "React.js"], industry: "Airlines", solution: "Booking & Distribution", technology: ["React.js", "Next.js", "Node.js"] },
    { slug: "enhancing-platform-mobile-services", title: "Enhancing platform mobile services", image: imgCase1, tags: ["Banking", "Payment"], industry: "Banking", solution: "Mobile Platform", technology: ["Flutter", "Java"] },
    { slug: "pilot-air-crew-mobile-platform", title: "Pilot and Air crew mobile platform", image: imgCase2, tags: ["Airlines", "Mobile"], industry: "Airlines", solution: "Mobile Platform", technology: ["Flutter", "Node.js"] },
    { slug: "airport-transportation-platform", title: "Airport transportation platform", image: imgCase3, tags: ["Transportation", "Web"], industry: "Transportation", solution: "Enterprise Application", technology: ["React.js", "Java"] },
    { slug: "sales-apps-smart-telecommunications", title: "Sales apps for Smart Telecommunications", image: imgCase4, tags: ["Telecommunication", "Sales"], industry: "Telecommunication", solution: "Mobile Platform", technology: ["Flutter", "Node.js"] },
    { slug: "it-projects-management-platform", title: "IT Projects management platform", image: imgCase5, tags: ["Information & Technology", "ITSM"], industry: "Information & Technology", solution: "IT Service Management", technology: ["React.js", "Node.js"] },
    { slug: "corporate-travel-management-airlines", title: "Corporate travel management for airlines", image: imgCase6, tags: ["Airlines", "Travel"], industry: "Airlines", solution: "Enterprise Application", technology: ["Next.js", "Java"] },
    { slug: "cargo-operations-visibility", title: "Cargo operations visibility platform", image: imgCase7, tags: ["Transportation", "Cargo"], industry: "Transportation", solution: "Data & Analytics", technology: ["Power BI", "Java"] },
    { slug: "enterprise-service-desk", title: "Enterprise service desk modernization", image: imgCase8, tags: ["Enterprise", "ITSM"], industry: "Enterprise", solution: "IT Service Management", technology: ["React.js", "Java"] },
    { slug: "insurance-claim-analytics", title: "Insurance claim analytics dashboard", image: imgCase9, tags: ["Insurance", "Analytics"], industry: "Insurance", solution: "Data & Analytics", technology: ["Power BI", "Node.js"] },
];

const caseStudyTestimonialsEn = {
    title: "More clients success stories",
    items: [
        { name: "Emma Falck", role: "President of Mobile Infrastructure", quote: "Thank you asyst for your continued tireless efforts in making sure we're productive. And you always do it with a smile!!! Many thanks.", photo: imgProfile1 },
        { name: "Matthieu Caillat", role: "Chief Technology of AXA Group Operations", quote: "Fantastic, highly skilled and experienced team members. We've relied on them exclusively since 2013 to continuing that relationship", photo: imgProfile2 },
        { name: "Rina Kartika", role: "Head of Digital Channel", quote: "ASYST understood our operational complexity from day one and delivered a platform our teams adopted quickly.", photo: imgProfile3 },
        { name: "Emma Falck", role: "President of Mobile Infrastructure", quote: "Thank you asyst for your continued tireless efforts in making sure we're productive. And you always do it with a smile!!! Many thanks.", photo: imgProfile1 },
        { name: "Matthieu Caillat", role: "Chief Technology of AXA Group Operations", quote: "Fantastic, highly skilled and experienced team members. We've relied on them exclusively since 2013 to continuing that relationship", photo: imgProfile2 },
    ],
}

const caseStudyExperienceEn = {
    title: "Our Experience",
    button: "Learn more",
    items: [
        { title: "Airline", description: "We provides a comprehensive, objective evaluation of your entire technology ecosystem", image: imgExpAirline, link: "/industry" },
        { title: "Enterprise IT", description: "Provides the strategic blueprint needed to harmonize an organization's technology landscape with its long-term corporate goals", image: imgExpEnterprise, link: "/industry" },
        { title: "Digital Transformation", description: "Aligns internal IT services directly with business needs, ensuring that technology supports growth rather than hindering it", image: imgExpDigital, link: "/solution" },
        { title: "IT Service", description: "Architecture that keeps IT services reliable, measurable and ready to scale with business change", image: imgExpItService, link: "/solution" },
    ],
}

const caseStudyCtaEn = {
    title: "Need a technology partner?",
    subtitle: "Not sure where to start?",
    description: "Talk with an ASYST IT consultant about your business objectives, current technology environment and transformation priorities.",
    button: "Talk with an ASYST IT Consultant",
}

// ---------- halaman detail ----------

export interface CaseStudyArchitectureBranch {
    label: string;
    /** Node turunan di bawah cabang (opsional) */
    child?: string;
}

export interface CaseStudyDetailContent {
    hero: { title: string; description: string; button: string; image: string };
    summary: { logo: string; client: string; items: { label: string; value: string }[] };
    challenge: { eyebrow: string; title: string; paragraphs: string[]; image: string };
    solution: {
        eyebrow: string;
        title: string;
        architecture: { top: string; core: string; branches: CaseStudyArchitectureBranch[] };
        items: { title: string; description: string }[];
    };
    technologies: {
        title: string;
        images: string[];
        groups: { label: string; items: string }[];
    };
    approach: {
        eyebrow: string;
        title: string;
        steps: { phase: string; title: string; description: string }[];
    };
    outcome: {
        eyebrow: string;
        title: string;
        items: { title: string; description: string }[];
    };
    related: { title: string; slugs: string[] };
}

const caseStudyDetailsEn: Record<string, CaseStudyDetailContent> = {
    "garuda-indonesia": {
        hero: {
            title: "Garuda Indonesia: Building Digital Booking & Airline Distribution Experiences",
            description: "ASYST supported Garuda Indonesia's digital airline ecosystem through booking, distribution and business-partner technology capabilities.",
            button: "View Solution Architecture",
            image: imgTech1,
        },
        summary: {
            logo: logoGaruda,
            client: "Garuda Indonesia",
            items: [
                { label: "Industry", value: "Aviation" },
                { label: "Service", value: "Airline IT / Booking" },
                { label: "Asyst's Role", value: "Technology & Integration" },
                { label: "Platform", value: "Mobile and Web" },
            ],
        },
        challenge: {
            eyebrow: "Business Challenge",
            title: "Connecting Airline Booking With Business Distribution",
            paragraphs: [
                "Airline booking is more than a search-and-book interface. It requires coordinated technology across customers, travel agents, corporate partners, airline systems and supporting services.",
                "ASYST's work with Garuda Indonesia included digital systems supporting airline sales and distribution, including GDS and COS capabilities used by travel agents and corporate partners.",
            ],
            image: imgFeatured,
        },
        solution: {
            eyebrow: "Solution",
            title: "An Integrated Digital Booking & Distribution Ecosystem",
            architecture: {
                top: "Customer Web",
                core: "Booking / Reservation Services",
                branches: [
                    { label: "GDS", child: "Travel Agents" },
                    { label: "COS", child: "Corporate Partners" },
                    { label: "Other APIs" },
                ],
            },
            items: [
                { title: "An Integrated Digital Booking & Distribution Ecosystem", description: "Defining the overarching financial, operational, and customer-facing objectives of the enterprise." },
                { title: "Booking Experience", description: "Search flights, select travel options and complete booking through digital airline channels." },
                { title: "Agent & Partner Distribution", description: "Connect travel agents and corporate partners to airline inventory through GDS and COS channels." },
                { title: "Service Integration", description: "Expose booking and reservation services to other channels and partners through APIs." },
            ],
        },
        technologies: {
            title: "Technologies used",
            images: [imgTech1, imgTech2],
            groups: [
                { label: "Backend", items: "Node.js, NestJS, Express" },
                { label: "BI & analytics", items: "Power BI, Power Query, DAX Studio, Tabular Editor, Power Automate" },
                { label: "Frontend", items: "Next.js, React, Mantine React Table, Ky, React Query" },
                { label: "UI/UX Design", items: "Figma, Framer, Miro, Maze, UX Pilot, UXPin" },
            ],
        },
        approach: {
            eyebrow: "Approach",
            title: "An Integrated Digital Booking and Distribution Ecosystem",
            steps: [
                { phase: "Discover", title: "Business + airline requirements", description: "We read your previous work, walk your spaces if we can, and write a one-page brief that you correct line by line. Nothing else happens until that page is right." },
                { phase: "UI/UX", title: "Business & Technical Architecture", description: "Map user journeys, booking flows and partner channels into a design system and a target technical architecture." },
                { phase: "Develop", title: "Application & integration", description: "Build web and mobile booking applications together with the services that connect them to airline systems." },
                { phase: "Integrate", title: "Distribution channel integration", description: "Connect GDS, COS and partner APIs so travel agents and corporate partners can book through their own channels." },
                { phase: "Deploy", title: "Production implementation", description: "Roll out to production with testing, monitoring and a cut-over plan agreed with the airline teams." },
                { phase: "Support", title: "Continuous technology support", description: "Keep the platform reliable and evolving through ongoing maintenance, enhancement and operational support." },
            ],
        },
        outcome: {
            eyebrow: "Outcome",
            title: "Enabling More Connected Airline Commerce",
            items: [
                { title: "Distribution", description: "Supports travel-agent and corporate-partner channels" },
                { title: "Booking", description: "Digital airline booking capabilities" },
                { title: "Experience", description: "More accessible digital booking workflows" },
                { title: "Scalability", description: "Supports multiple business channels" },
            ],
        },
        related: {
            title: "Related cases",
            slugs: ["enhancing-platform-mobile-services", "pilot-air-crew-mobile-platform", "corporate-travel-management-airlines"],
        },
    },
};


// ---------- konten dua bahasa (EN di atas, terjemahan ID di bawah) ----------

/** Label ID untuk opsi filter & tag case study (nilainya tetap dipakai sebagai key filter) */
export const CaseStudyTermsConst: Record<string, string> = {
    "Airlines": "Maskapai",
    "Banking": "Perbankan",
    "Telecommunication": "Telekomunikasi",
    "Insurance": "Asuransi",
    "Transportation": "Transportasi",
    "Information & Technology": "Informasi & Teknologi",
    "Booking & Distribution": "Pemesanan & Distribusi",
    "Mobile Platform": "Platform Mobile",
    "Enterprise Application": "Aplikasi Enterprise",
    "IT Service Management": "Manajemen Layanan IT",
    "Data & Analytics": "Data & Analitik",
    "Aviation": "Penerbangan",
    "Payment": "Pembayaran",
    "Sales": "Penjualan",
    "Travel": "Perjalanan",
    "Cargo": "Kargo",
    "Analytics": "Analitik",
};

export const CaseStudyHeroConst = localized(caseStudyHeroEn, {
    title: "Solusi Teknologi.\nHasil Bisnis Nyata.",
    description: "Temukan bagaimana ASYST membantu organisasi menyelesaikan tantangan teknologi yang kompleks melalui konsultasi, software, integrasi, dan layanan IT terkelola.",
    button: "Jelajahi Karya Kami",
});

export const CaseStudyIntroConst = localized(caseStudyIntroEn, {
    title: "Studi Kasus",
    description: "Lihat bagaimana ASYST membantu organisasi mengubah kebutuhan teknologi yang kompleks menjadi solusi bisnis yang praktis. Mulai dari platform pemesanan dan distribusi maskapai hingga manajemen layanan IT dan layanan IT profesional, pengalaman kami mencakup berbagai lingkungan teknologi enterprise yang kritis.",
});

export const CaseStudyFeaturedConst = localized(caseStudyFeaturedEn, {
    title: "Studi Kasus Unggulan",
    description: "Strategi IT yang efektif dimulai dari bisnis, bukan dari produk teknologi. Pendekatan ASYST menghubungkan tujuan bisnis, kapabilitas teknologi saat ini, dan prioritas masa depan untuk menyusun roadmap transformasi yang praktis.",
    caseTitle: "Pemesanan & Distribusi Maskapai",
    summary: "Redesain UI/UX web dan mobile, termasuk ekosistem pemesanan digital yang mendukung penjualan maskapai dan mitra bisnis.",
    tags: ["Penerbangan", "React.js", "Pengembangan CMS"],
    details: [
        { label: "Layanan", value: "Layanan IT Profesional / Pemesanan & Distribusi" },
        { label: "Tantangan", value: "Menghadirkan pemesanan dan distribusi maskapai secara digital di kanal pelanggan dan mitra bisnis." },
        { label: "Peran Asyst", value: "Pengembangan teknologi, integrasi, dan layanan aplikasi." },
    ],
    button: "Baca Studi Kasus",
});

export const CaseStudyFilterTabsConst = localized(caseStudyFilterTabsEn, [
    { label: "Industri" },
    { label: "Solusi" },
    { label: "Teknologi" },
]);

export const CaseStudyExplorerConst = localized(caseStudyExplorerEn, {
    allLabel: "Semua",
    searchPlaceholder: "Cari studi kasus",
    emptyText: "Tidak ada studi kasus yang sesuai dengan filter Anda.",
    loadMore: "Muat lebih banyak",
});

// `tags`, `industry`, `solution`, `technology` tidak diterjemahkan di sini (key filter); labelnya lewat CaseStudyTermsConst
export const CaseStudiesConst = localized(caseStudiesEn, [
    { title: "Ekosistem pemesanan & distribusi maskapai" },
    { title: "Peningkatan layanan platform mobile" },
    { title: "Platform mobile untuk pilot dan awak kabin" },
    { title: "Platform transportasi bandara" },
    { title: "Aplikasi penjualan untuk Smart Telecommunications" },
    { title: "Platform manajemen proyek IT" },
    { title: "Manajemen perjalanan korporat untuk maskapai" },
    { title: "Platform visibilitas operasional kargo" },
    { title: "Modernisasi service desk enterprise" },
    { title: "Dashboard analitik klaim asuransi" },
]);

export const CaseStudyTestimonialsConst = localized(caseStudyTestimonialsEn, {
    title: "Kisah sukses klien lainnya",
    items: [
        { role: "President of Mobile Infrastructure", quote: "Terima kasih Asyst atas upaya tanpa lelah untuk memastikan kami tetap produktif. Dan semuanya selalu dilakukan dengan senyuman! Terima kasih banyak." },
        { role: "Chief Technology AXA Group Operations", quote: "Anggota tim yang luar biasa, sangat terampil, dan berpengalaman. Kami mengandalkan mereka secara eksklusif sejak 2013 dan terus melanjutkan hubungan tersebut." },
        { role: "Head of Digital Channel", quote: "ASYST memahami kompleksitas operasional kami sejak hari pertama dan menghadirkan platform yang cepat diadopsi oleh tim kami." },
        { role: "President of Mobile Infrastructure", quote: "Terima kasih Asyst atas upaya tanpa lelah untuk memastikan kami tetap produktif. Dan semuanya selalu dilakukan dengan senyuman! Terima kasih banyak." },
        { role: "Chief Technology AXA Group Operations", quote: "Anggota tim yang luar biasa, sangat terampil, dan berpengalaman. Kami mengandalkan mereka secara eksklusif sejak 2013 dan terus melanjutkan hubungan tersebut." },
    ],
});

export const CaseStudyExperienceConst = localized(caseStudyExperienceEn, {
    title: "Pengalaman Kami",
    button: "Pelajari lebih lanjut",
    items: [
        { title: "Maskapai", description: "Kami memberikan evaluasi yang menyeluruh dan objektif atas seluruh ekosistem teknologi Anda" },
        { title: "IT Enterprise", description: "Menyediakan cetak biru strategis untuk menyelaraskan lanskap teknologi organisasi dengan tujuan perusahaan jangka panjang" },
        { title: "Transformasi Digital", description: "Menyelaraskan layanan IT internal dengan kebutuhan bisnis, sehingga teknologi mendorong pertumbuhan, bukan menghambatnya" },
        { title: "Layanan IT", description: "Arsitektur yang menjaga layanan IT tetap andal, terukur, dan siap berkembang seiring perubahan bisnis" },
    ],
});

export const CaseStudyCtaConst = localized(caseStudyCtaEn, {
    title: "Butuh mitra teknologi?",
    subtitle: "Bingung harus mulai dari mana?",
    description: "Diskusikan tujuan bisnis, lingkungan teknologi saat ini, dan prioritas transformasi Anda bersama konsultan IT ASYST.",
    button: "Diskusi dengan Konsultan IT ASYST",
});

export const CaseStudyDetailsConst = localized(caseStudyDetailsEn, {
    "garuda-indonesia": {
        hero: {
            title: "Garuda Indonesia: Membangun Pengalaman Pemesanan Digital & Distribusi Maskapai",
            description: "ASYST mendukung ekosistem digital maskapai Garuda Indonesia melalui kapabilitas teknologi pemesanan, distribusi, dan mitra bisnis.",
            button: "Lihat Arsitektur Solusi",
        },
        summary: {
            items: [
                { label: "Industri", value: "Penerbangan" },
                { label: "Layanan", value: "IT Maskapai / Pemesanan" },
                { label: "Peran Asyst", value: "Teknologi & Integrasi" },
                { label: "Platform", value: "Mobile dan Web" },
            ],
        },
        challenge: {
            eyebrow: "Tantangan Bisnis",
            title: "Menghubungkan Pemesanan Maskapai dengan Distribusi Bisnis",
            paragraphs: [
                "Pemesanan maskapai lebih dari sekadar antarmuka cari-dan-pesan. Dibutuhkan teknologi yang terkoordinasi antara pelanggan, agen perjalanan, mitra korporat, sistem maskapai, dan layanan pendukung.",
                "Pekerjaan ASYST bersama Garuda Indonesia mencakup sistem digital yang mendukung penjualan dan distribusi maskapai, termasuk kapabilitas GDS dan COS yang digunakan oleh agen perjalanan dan mitra korporat.",
            ],
        },
        solution: {
            eyebrow: "Solusi",
            title: "Ekosistem Pemesanan & Distribusi Digital yang Terintegrasi",
            architecture: {
                top: "Web Pelanggan",
                core: "Layanan Pemesanan / Reservasi",
                branches: [
                    { child: "Agen Perjalanan" },
                    { child: "Mitra Korporat" },
                    { label: "API Lainnya" },
                ],
            },
            items: [
                { title: "Ekosistem Pemesanan & Distribusi Digital yang Terintegrasi", description: "Menetapkan tujuan finansial, operasional, dan layanan pelanggan perusahaan secara menyeluruh." },
                { title: "Pengalaman Pemesanan", description: "Cari penerbangan, pilih opsi perjalanan, dan selesaikan pemesanan melalui kanal digital maskapai." },
                { title: "Distribusi Agen & Mitra", description: "Hubungkan agen perjalanan dan mitra korporat ke inventaris maskapai melalui kanal GDS dan COS." },
                { title: "Integrasi Layanan", description: "Buka layanan pemesanan dan reservasi untuk kanal dan mitra lain melalui API." },
            ],
        },
        technologies: {
            title: "Teknologi yang digunakan",
            groups: [
                { label: "Backend" },
                { label: "BI & analitik" },
                { label: "Frontend" },
                { label: "Desain UI/UX" },
            ],
        },
        approach: {
            eyebrow: "Pendekatan",
            title: "Ekosistem Pemesanan dan Distribusi Digital yang Terintegrasi",
            steps: [
                { phase: "Discover", title: "Kebutuhan bisnis + maskapai", description: "Kami mempelajari pekerjaan Anda sebelumnya, meninjau langsung lingkungan kerja bila memungkinkan, lalu menulis ringkasan satu halaman yang Anda koreksi baris demi baris. Tidak ada langkah lain sebelum halaman itu benar." },
                { phase: "UI/UX", title: "Arsitektur Bisnis & Teknis", description: "Memetakan perjalanan pengguna, alur pemesanan, dan kanal mitra ke dalam design system dan target arsitektur teknis." },
                { phase: "Develop", title: "Aplikasi & integrasi", description: "Membangun aplikasi pemesanan web dan mobile beserta layanan yang menghubungkannya ke sistem maskapai." },
                { phase: "Integrate", title: "Integrasi kanal distribusi", description: "Menghubungkan GDS, COS, dan API mitra agar agen perjalanan dan mitra korporat dapat memesan melalui kanal mereka sendiri." },
                { phase: "Deploy", title: "Implementasi production", description: "Rilis ke production dengan pengujian, pemantauan, dan rencana cut-over yang disepakati bersama tim maskapai." },
                { phase: "Support", title: "Dukungan teknologi berkelanjutan", description: "Menjaga platform tetap andal dan terus berkembang melalui pemeliharaan, peningkatan, dan dukungan operasional berkelanjutan." },
            ],
        },
        outcome: {
            eyebrow: "Hasil",
            title: "Mewujudkan Bisnis Maskapai yang Lebih Terhubung",
            items: [
                { title: "Distribusi", description: "Mendukung kanal agen perjalanan dan mitra korporat" },
                { title: "Pemesanan", description: "Kapabilitas pemesanan maskapai secara digital" },
                { title: "Pengalaman", description: "Alur pemesanan digital yang lebih mudah diakses" },
                { title: "Skalabilitas", description: "Mendukung berbagai kanal bisnis" },
            ],
        },
        related: {
            title: "Studi kasus terkait",
        },
    },
});

export const hasCaseStudyDetail = (slug: string) => slug in CaseStudyDetailsConst.EN;
