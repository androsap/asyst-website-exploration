import { SvgIconComponent } from "@mui/icons-material";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { SolutionCtaContent, SolutionFaqContent, SolutionIconCard } from "./solution.const";

import imgIntro from "assets/asyst/img/background/services-solutions/cargo.png";
import imgAirline from "assets/asyst/img/background/industry/airline-airport/airline.jpeg";
import imgAirport from "assets/asyst/img/background/industry/airline-airport/airport.jpeg";
import imgGround from "assets/asyst/img/background/services-solutions/products-and-services.png";
import imgLoyalty from "assets/asyst/img/background/services-solutions/amala2.png";
import imgEcosystem from "assets/asyst/img/background/industry/industry-detail.jpeg";
import { localized } from "shared/i18n";

// Konten statis halaman Industries (desain revamp 2026).
// Gambar sementara memakai aset yang sudah ada di repo; ganti dengan aset final dari desain.
// Konten dua bahasa: konstanta `...En` = teks EN lengkap; ekspor `localized(...En, {...})` di bawah file = terjemahan ID
// (teks saja, struktur & urutan sama).

export interface IndustryHeroContent {
    eyebrow?: string;
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton?: string;
    stats?: { icon: SvgIconComponent; value: string; label: string }[];
}

/** Section teks kiri + gambar kanan */
export interface IndustryIntroContent {
    title: string;
    paragraphs: string[];
    image: string;
}

export interface IndustryCard {
    /** Label hijau di kartu sekaligus kategori filter */
    tag: string;
    title: string;
    description: string;
    chips: string[];
    link: { label: string; to: string };
    image: string;
}

export interface IndustryCardsContent {
    title?: string;
    description?: string;
    items: IndustryCard[];
}

const AVIATION_LINK = "/industry/aviation";

const industryHeroEn: IndustryHeroContent = {
    title: "Technology Solutions Built Around Your Industry",
    description: "Every industry operates differently. Business processes, regulations, customer expectations, operational workflows and technology create different challenges",
    primaryButton: "Explore Industry Solutions",
    secondaryButton: "Talk to an ASYST Expert",
    stats: [
        { icon: WorkspacePremiumOutlinedIcon, value: "21+", label: "Enterprise Journey" },
        { icon: WidgetsOutlinedIcon, value: "Enterprise", label: "Product Capability" },
        { icon: HubOutlinedIcon, value: "Integration", label: "Connected Technology" },
        { icon: PsychologyOutlinedIcon, value: "Expertise", label: "Industry Knowledge" },
    ],
}

const industryIntroEn: IndustryIntroContent = {
    title: "Technology Works Better When It Understands the Business Behind It",
    paragraphs: [
        "A technology solution cannot be evaluated only by its technical architecture. It also needs to understand how people work, how processes operate, how services are delivered, how data moves, and what business outcomes matter.",
        "That's where domain expertise becomes valuable",
    ],
    image: imgIntro,
}

// TODO: baru Aviation yang punya halaman detail; Loyalty diarahkan ke produk Amala, Industry Ecosystem sementara ke halaman ini
const industryExpertiseEn: IndustryCardsContent = {
    title: "Explore Our Industry Expertise",
    description: "From aviation and airport operations to loyalty and connected industry ecosystems, ASYST applies enterprise technology, software, integration and operational expertise to industry-specific challenges",
    items: [
        {
            tag: "Airline",
            title: "Connected Technology for Airline Operations",
            description: "Support airline operations with integrated technology across commercial processes, passenger services, operational workflows, data and enterprise systems",
            chips: ["Commercial", "Operations", "Passenger", "Enterprise Systems", "Integration", "Data"],
            link: { label: "Explore Airline Solutions", to: AVIATION_LINK },
            image: imgAirline,
        },
        {
            tag: "Airport",
            title: "Technology for Connected Airport Operations",
            description: "Connect airport processes, operational systems, stakeholders and data to support efficient and coordinated airport operations",
            chips: ["Airport Operations", "Passenger", "Infrastructure", "Data", "Integration", "Service Management"],
            link: { label: "Explore Airport Solutions", to: AVIATION_LINK },
            image: imgAirport,
        },
        {
            tag: "Ground Handler",
            title: "Connected Technology to Ground Operations",
            description: "Enable ground handling organizations to connect operational processes, workforce, systems and information across time-critical activities",
            chips: ["operational workflows", "workforce coordination", "turnaround processes", "system integration"],
            link: { label: "Explore Ground Handler Solutions", to: AVIATION_LINK },
            image: imgGround,
        },
        {
            tag: "Loyalty",
            title: "Digital Technology for Customer Loyalty",
            description: "Build connected loyalty experiences that bring customer data, engagement, rewards and digital touchpoints closer together",
            chips: ["Commercial", "Operations", "Passenger", "Enterprise Systems", "Integration", "Data"],
            link: { label: "Explore Loyalty Solutions", to: "/product/amala" },
            image: imgLoyalty,
        },
        {
            tag: "Industry Ecosystem",
            title: "Connect the Ecosystem Behind the Business",
            description: "Modern businesses rarely operate through a single organization or system. Customers, partners, suppliers, service providers and technology platforms must work together",
            chips: ["Commercial", "Operations", "Passenger", "Enterprise Systems", "Integration", "Data"],
            link: { label: "Explore Ecosystem Solutions", to: "/industry" },
            image: imgEcosystem,
        },
    ],
}

const industryFoundationEn = {
    title: "One Technology Foundation for Multiple Industry Applications",
    description: "Across industries, ASYST combines products, integration, digital solutions, infrastructure and professional services to address different business environments while maintaining a connected technology foundation",
    items: [
        { icon: WidgetsOutlinedIcon, title: "Enterprise Product Capability", description: "Build on technology capabilities designed around real operational requirements" },
        { icon: HubOutlinedIcon, title: "Product Integration Capability", description: "Connect products, applications, data, infrastructure and third-party systems" },
        { icon: PsychologyOutlinedIcon, title: "Expertise in enterprise platform", description: "Understand the processes, stakeholders and operational context behind the technology" },
        { icon: SupportAgentOutlinedIcon, title: "Long-Term Support Delivery", description: "Support the journey beyond implementation from adoption and operation to improvement" },
    ] as SolutionIconCard[],
}

const industryFaqEn: SolutionFaqContent = {
    title: "Industry FAQ",
    items: [
        { question: "What industries does ASYST serve?", answer: "ASYST's current public website identifies Airline, Airport, Ground Handler, Loyalty and Industry Ecosystem as industry areas" },
        { question: "Does ASYST only provide technology for aviation?", answer: "No. Aviation is where ASYST has long-running domain experience, but its enterprise software, integration, infrastructure and professional services are applied to other industries and connected business ecosystems as well" },
        { question: "Can Amala integrate with existing enterprise systems?", answer: "Yes. Amala is designed to connect with existing customer, commercial, partner and enterprise systems through APIs and integration services" },
        { question: "Can ASYST integrate existing enterprise systems?", answer: "Yes. ASYST connects applications, data, infrastructure and third-party platforms so existing systems can work together as a more connected technology environment" },
        { question: "Does ASYST provide custom technology solutions?", answer: "Yes. Alongside its products, ASYST provides custom development and professional services for requirements that are specific to an organization or industry" },
        { question: "Can ASYST support implementation after creating the strategy?", answer: "Yes. ASYST supports the journey from technology strategy and architecture through implementation, integration and operational adoption" },
        { question: "Can ASYST support technology beyond implementation?", answer: "Yes. ASYST provides managed services, IT operations and continuous improvement to keep technology reliable after go-live" },
    ],
}

const industryCtaEn: SolutionCtaContent = {
    title: "Discuss Your Technology Challenge",
    description: "ASYST combines local business and domain understanding with enterprise technology capabilities and global technology partnerships to deliver solutions designed around each organization's context",
    button: "Talk to Expert",
}

// ---------- konten dua bahasa (EN di atas, terjemahan ID di bawah) ----------

export const IndustryHeroConst = localized(industryHeroEn, {
    title: "Solusi Teknologi yang Dibangun Sesuai Industri Anda",
    description: "Setiap industri beroperasi secara berbeda. Proses bisnis, regulasi, ekspektasi pelanggan, alur kerja operasional, dan teknologi menghadirkan tantangan yang berbeda pula",
    primaryButton: "Jelajahi Solusi Industri",
    secondaryButton: "Hubungi Ahli ASYST",
    stats: [
        { label: "Perjalanan Enterprise" },
        { label: "Kapabilitas Produk" },
        { value: "Integrasi", label: "Teknologi Terhubung" },
        { value: "Keahlian", label: "Pengetahuan Industri" },
    ],
});

export const IndustryIntroConst = localized(industryIntroEn, {
    title: "Teknologi Bekerja Lebih Baik Saat Memahami Bisnis di Baliknya",
    paragraphs: [
        "Solusi teknologi tidak dapat dinilai hanya dari arsitektur teknisnya. Solusi juga harus memahami cara orang bekerja, cara proses berjalan, cara layanan diberikan, cara data bergerak, dan hasil bisnis apa yang penting.",
        "Di situlah keahlian domain menjadi bernilai",
    ],
});

export const IndustryExpertiseConst = localized(industryExpertiseEn, {
    title: "Jelajahi Keahlian Industri Kami",
    description: "Dari operasional penerbangan dan bandara hingga loyalitas dan ekosistem industri yang terhubung, ASYST menerapkan teknologi enterprise, software, integrasi, dan keahlian operasional untuk tantangan spesifik industri",
    items: [
        {
            tag: "Maskapai",
            title: "Teknologi Terhubung untuk Operasional Maskapai",
            description: "Dukung operasional maskapai dengan teknologi terintegrasi di seluruh proses komersial, layanan penumpang, alur kerja operasional, data, dan sistem enterprise",
            chips: ["Komersial", "Operasional", "Penumpang", "Sistem Enterprise", "Integrasi", "Data"],
            link: { label: "Jelajahi Solusi Maskapai" },
        },
        {
            tag: "Bandara",
            title: "Teknologi untuk Operasional Bandara yang Terhubung",
            description: "Hubungkan proses bandara, sistem operasional, stakeholder, dan data untuk mendukung operasional bandara yang efisien dan terkoordinasi",
            chips: ["Operasional Bandara", "Penumpang", "Infrastruktur", "Data", "Integrasi", "Manajemen Layanan"],
            link: { label: "Jelajahi Solusi Bandara" },
        },
        {
            tag: "Ground Handler",
            title: "Teknologi Terhubung untuk Operasional Darat",
            description: "Mampukan organisasi ground handling menghubungkan proses operasional, tenaga kerja, sistem, dan informasi di seluruh aktivitas yang sangat bergantung pada waktu",
            chips: ["alur kerja operasional", "koordinasi tenaga kerja", "proses turnaround", "integrasi sistem"],
            link: { label: "Jelajahi Solusi Ground Handler" },
        },
        {
            tag: "Loyalitas",
            title: "Teknologi Digital untuk Loyalitas Pelanggan",
            description: "Bangun pengalaman loyalitas yang terhubung dengan mendekatkan data pelanggan, keterlibatan, reward, dan titik kontak digital",
            chips: ["Komersial", "Operasional", "Penumpang", "Sistem Enterprise", "Integrasi", "Data"],
            link: { label: "Jelajahi Solusi Loyalitas" },
        },
        {
            tag: "Ekosistem Industri",
            title: "Hubungkan Ekosistem di Balik Bisnis",
            description: "Bisnis modern jarang beroperasi melalui satu organisasi atau satu sistem. Pelanggan, mitra, pemasok, penyedia layanan, dan platform teknologi harus bekerja bersama",
            chips: ["Komersial", "Operasional", "Penumpang", "Sistem Enterprise", "Integrasi", "Data"],
            link: { label: "Jelajahi Solusi Ekosistem" },
        },
    ],
});

export const IndustryFoundationConst = localized(industryFoundationEn, {
    title: "Satu Fondasi Teknologi untuk Berbagai Penerapan Industri",
    description: "Di berbagai industri, ASYST memadukan produk, integrasi, solusi digital, infrastruktur, dan layanan profesional untuk menjawab lingkungan bisnis yang berbeda sambil menjaga fondasi teknologi yang terhubung",
    items: [
        { title: "Kapabilitas Produk Enterprise", description: "Bangun di atas kapabilitas teknologi yang dirancang dari kebutuhan operasional nyata" },
        { title: "Kapabilitas Integrasi Produk", description: "Hubungkan produk, aplikasi, data, infrastruktur, dan sistem pihak ketiga" },
        { title: "Keahlian Platform Enterprise", description: "Pahami proses, stakeholder, dan konteks operasional di balik teknologi" },
        { title: "Delivery & Dukungan Jangka Panjang", description: "Dukung perjalanan setelah implementasi, mulai dari adopsi dan operasional hingga perbaikan" },
    ],
});

export const IndustryFaqConst = localized(industryFaqEn, {
    title: "FAQ Industri",
    items: [
        { question: "Industri apa saja yang dilayani ASYST?", answer: "Situs ASYST saat ini menyebutkan Maskapai, Bandara, Ground Handler, Loyalitas, dan Ekosistem Industri sebagai area industri" },
        { question: "Apakah ASYST hanya menyediakan teknologi untuk penerbangan?", answer: "Tidak. Penerbangan adalah bidang tempat ASYST memiliki pengalaman domain yang panjang, tetapi software enterprise, integrasi, infrastruktur, dan layanan profesionalnya juga diterapkan di industri lain dan ekosistem bisnis yang terhubung" },
        { question: "Apakah Amala dapat terintegrasi dengan sistem enterprise yang sudah ada?", answer: "Ya. Amala dirancang untuk terhubung dengan sistem pelanggan, komersial, mitra, dan enterprise yang ada melalui API dan layanan integrasi" },
        { question: "Apakah ASYST dapat mengintegrasikan sistem enterprise yang sudah ada?", answer: "Ya. ASYST menghubungkan aplikasi, data, infrastruktur, dan platform pihak ketiga sehingga sistem yang ada dapat bekerja bersama sebagai lingkungan teknologi yang lebih terhubung" },
        { question: "Apakah ASYST menyediakan solusi teknologi khusus?", answer: "Ya. Selain produknya, ASYST menyediakan pengembangan khusus dan layanan profesional untuk kebutuhan yang spesifik bagi suatu organisasi atau industri" },
        { question: "Apakah ASYST dapat mendukung implementasi setelah strategi disusun?", answer: "Ya. ASYST mendukung perjalanan dari strategi dan arsitektur teknologi hingga implementasi, integrasi, dan adopsi operasional" },
        { question: "Apakah ASYST dapat mendukung teknologi setelah implementasi?", answer: "Ya. ASYST menyediakan layanan terkelola, operasional IT, dan perbaikan berkelanjutan agar teknologi tetap andal setelah go-live" },
    ],
});

export const IndustryCtaConst = localized(industryCtaEn, {
    title: "Diskusikan Tantangan Teknologi Anda",
    description: "ASYST memadukan pemahaman bisnis dan domain lokal dengan kapabilitas teknologi enterprise dan kemitraan teknologi global untuk menghadirkan solusi yang dirancang sesuai konteks setiap organisasi",
    button: "Hubungi Ahli Kami",
});
