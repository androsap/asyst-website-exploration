import { Localized } from "shared/i18n";
import { SITE_NAME, SITE_URL } from "shared/head/seo";

export interface PageSeo {
    title: string;
    description: string;
    jsonLd?: object | object[];
}

const page = (en: PageSeo, id: PageSeo): Localized<PageSeo> => ({ EN: en, ID: id });
const withSite = (title: string) => `${title} | ${SITE_NAME}`;

export const OrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: "ASYST",
    url: SITE_URL,
    logo: `${SITE_URL}/logo-asyst.png`,
    email: "sales@asyst.co.id",
    telephone: "+62 21 29356070",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Information System Building, 3rd floor, RT.001/RW.010, Pajang, Benda",
        addressLocality: "Tangerang",
        addressRegion: "Banten",
        postalCode: "15126",
        addressCountry: "ID",
    },
    sameAs: [
        "https://www.linkedin.com/company/pt.-aero-systems-indonesia/",
        "https://instagram.com/asyst_official",
    ],
};

const WebsiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
    },
};

export const PageSeoConst: Record<string, Localized<PageSeo>> = {
    "/": page(
        {
            title: `${SITE_NAME} (ASYST) | Enterprise Technology & IT Solutions`,
            description: "From enterprise applications to integration and managed services, ASYST builds technology that connects people, processes and systems so your business can move with confidence.",
            jsonLd: [OrganizationSchema, WebsiteSchema],
        },
        {
            title: `${SITE_NAME} (ASYST) | Solusi Teknologi & IT Enterprise`,
            description: "Mulai dari aplikasi enterprise hingga integrasi dan managed services, ASYST membangun teknologi yang menghubungkan orang, proses, dan sistem agar bisnis Anda melangkah dengan yakin.",
            jsonLd: [OrganizationSchema, WebsiteSchema],
        },
    ),
    "/about": page(
        {
            title: withSite("About Us"),
            description: "Founded in 2005, PT Aero Systems Indonesia (ASYST) is a strategic IT consultant for enterprise and a member of the Garuda Indonesia Group, delivering secure, scalable digital solutions.",
        },
        {
            title: withSite("Tentang Kami"),
            description: "Didirikan pada 2005, PT Aero Systems Indonesia (ASYST) adalah konsultan IT strategis untuk enterprise dan bagian dari Garuda Indonesia Group, menghadirkan solusi digital yang aman dan skalabel.",
        },
    ),
    "/case-study": page(
        {
            title: withSite("Case Studies"),
            description: "Discover how ASYST helps organizations solve complex technology challenges through consulting, software, integration and managed IT services.",
        },
        {
            title: withSite("Studi Kasus"),
            description: "Temukan bagaimana ASYST membantu organisasi menyelesaikan tantangan teknologi yang kompleks melalui konsultasi, perangkat lunak, integrasi, dan managed IT services.",
        },
    ),
    "/contact-us": page(
        {
            title: withSite("Contact Us"),
            description: "Get in touch with ASYST to discuss enterprise software, integration, cybersecurity and managed IT services for your organization.",
        },
        {
            title: withSite("Hubungi Kami"),
            description: "Hubungi ASYST untuk berdiskusi tentang perangkat lunak enterprise, integrasi, keamanan siber, dan managed IT services bagi organisasi Anda.",
        },
    ),
    "/industry": page(
        {
            title: withSite("Industries"),
            description: "Technology solutions built around your industry. ASYST understands the business processes, regulations and operational workflows behind every sector.",
        },
        {
            title: withSite("Industri"),
            description: "Solusi teknologi yang dibangun sesuai industri Anda. ASYST memahami proses bisnis, regulasi, dan alur kerja operasional di balik setiap sektor.",
        },
    ),
    "/industry/aviation": page(
        {
            title: withSite("Aviation Industry"),
            description: "ASYST combines enterprise software, integration, digital solutions and aviation domain expertise to help airlines and airports connect their operations.",
        },
        {
            title: withSite("Industri Penerbangan"),
            description: "ASYST memadukan perangkat lunak enterprise, integrasi, solusi digital, dan keahlian domain penerbangan untuk membantu maskapai dan bandara menghubungkan operasionalnya.",
        },
    ),
    "/news": page(
        {
            title: withSite("News"),
            description: "The latest ASYST news on technology and business. Filter by topic and stay future ready.",
        },
        {
            title: withSite("Berita"),
            description: "Berita terbaru ASYST seputar teknologi dan bisnis. Saring berdasarkan topik dan bersiaplah menghadapi masa depan.",
        },
    ),
    "/product": page(
        {
            title: withSite("Products"),
            description: "Enterprise software built for complex business environments: ERP, corporate travel, loyalty, cybersecurity, document management and more from ASYST.",
        },
        {
            title: withSite("Produk"),
            description: "Perangkat lunak enterprise untuk lingkungan bisnis yang kompleks: ERP, perjalanan korporat, loyalitas, keamanan siber, manajemen dokumen, dan lainnya dari ASYST.",
        },
    ),
    "/product/auxoshift": page(
        {
            title: withSite("Auxoshift: Ground Operations & Resource Scheduling"),
            description: "Auxoshift schedules resources and connects flight information and meal monitoring for ground operations.",
        },
        {
            title: withSite("Auxoshift: Operasional Darat & Penjadwalan Sumber Daya"),
            description: "Auxoshift menjadwalkan sumber daya serta menghubungkan informasi penerbangan dan pemantauan katering untuk operasional darat.",
        },
    ),
    "/product/chronus": page(
        {
            title: withSite("Chronus: 24/7 Managed Cyber Defense"),
            description: "Round-the-clock threat monitoring, real-time SIEM analytics and proactive incident response to safeguard mission-critical enterprise assets.",
        },
        {
            title: withSite("Chronus: Pertahanan Siber Terkelola 24/7"),
            description: "Pemantauan ancaman sepanjang waktu, analitik SIEM real-time, dan respons insiden proaktif untuk melindungi aset enterprise yang krusial.",
        },
    ),
    "/product/elea": page(
        {
            title: withSite("Elea: Next-Gen Enterprise ERP"),
            description: "Integrate finance, supply chain, HCM and CRM into a single source of truth, driving automation, compliance and end-to-end operational excellence.",
        },
        {
            title: withSite("Elea: ERP Enterprise Generasi Baru"),
            description: "Satukan keuangan, rantai pasok, HCM, dan CRM dalam satu sumber data, mendorong otomasi, kepatuhan, dan keunggulan operasional menyeluruh.",
        },
    ),
    "/product/project-management": page(
        {
            title: withSite("Project Management with AI Agents"),
            description: "Asyst Project Management keeps streams, deliverables, tasks and logged hours in one place, and lets AI agents do the status reporting.",
        },
        {
            title: withSite("Manajemen Proyek dengan AI Agent"),
            description: "Asyst Project Management menyatukan stream, deliverable, tugas, dan jam kerja dalam satu tempat, serta membiarkan AI agent menyusun laporan status.",
        },
    ),
    "/solution": page(
        {
            title: withSite("Enterprise Technology Solutions"),
            description: "From cybersecurity and IT operations to application modernization, data orchestration and digital business transformation, ASYST helps enterprises connect, modernize and scale.",
        },
        {
            title: withSite("Solusi Teknologi Enterprise"),
            description: "Dari keamanan siber dan operasional IT hingga modernisasi aplikasi, orkestrasi data, dan transformasi bisnis digital, ASYST membantu enterprise terhubung, modern, dan berkembang.",
        },
    ),
    "/solution/security-operations-center": page(
        {
            title: withSite("Security Operations Center (SOC)"),
            description: "Build connected security operations with centralized monitoring, security visibility and incident response across infrastructure, applications and networks.",
        },
        {
            title: withSite("Security Operations Center (SOC)"),
            description: "Bangun operasional keamanan yang terhubung melalui pemantauan terpusat, visibilitas keamanan, dan respons insiden di seluruh infrastruktur, aplikasi, dan jaringan.",
        },
    ),
};
