import { SvgIconComponent } from "@mui/icons-material";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import RuleOutlinedIcon from "@mui/icons-material/RuleOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";

import imgAmalaAdmin from "assets/asyst/img/background/product/amala/device-A.png";
import imgAmalaMobile from "assets/asyst/img/background/product/amala/device-B.png";
import imgAmalaOverview from "assets/asyst/img/background/services-solutions/amala1.png";
import imgLoyaltyMember from "assets/asyst/img/background/product/amala/loyalty-member.png";
import imgMultiTier from "assets/asyst/img/background/product/amala/multi-tier.png";
import imgPointExchange from "assets/asyst/img/background/product/amala/point-exchange.png";
import imgPromoReward from "assets/asyst/img/background/product/amala/promo-and-reward.png";
import imgBusinessOwner from "assets/asyst/img/background/product/amala/business-owner.png";
import { localized } from "shared/i18n";

// Konten halaman detail produk (desain revamp 2026). Satu objek per produk, dirender oleh components/product/detail.
// Gambar sementara memakai aset yang sudah ada di repo; ganti dengan aset final dari desain.
// Konten dua bahasa: konstanta `...En` = teks EN lengkap; ekspor `localized(...En, {...})` di bawah file = terjemahan ID
// (teks saja, struktur & urutan sama).

export interface IconTextItem {
    icon: SvgIconComponent;
    title: string;
    description: string;
}

export interface TabContentItem {
    label: string;
    title: string;
    description: string;
    image: string;
}

export interface ProductDetailContent {
    hero: {
        title: string;
        description: string;
        primaryButton: string;
        secondaryButton: string;
        stats: { icon: SvgIconComponent; value: string; label: string }[];
    };
    overview: {
        title: string;
        paragraphs: string[];
        image: string;
        challenges: IconTextItem[];
    };
    lifecycle: {
        title: string;
        description: string;
        items: TabContentItem[];
    };
    features: {
        title: string;
        items: { title: string; description: string; image: string }[];
    };
    howItWorks: {
        title: string;
        items: TabContentItem[];
    };
    businessModels: {
        title: string;
        items: { icon: SvgIconComponent; title: string; points: string[] }[];
    };
    faq: {
        title: string;
        items: { question: string; answer: string }[];
    };
    cta: {
        title: string;
        description: string;
        button: string;
    };
}

const lifecycleDescription = "Amala brings core loyalty operations into a connected platform from member management and tiering to rewards, promotions, points, partner integration and analytics";

const amalaDetailEn: ProductDetailContent = {
    hero: {
        title: "Enterprise Loyalty Platform for Customer Engagement & Growth",
        description: "Build personalized loyalty programs that connect customer data, rewards, promotions, partners and digital experiences in one scalable platform",
        primaryButton: "Talk to Loyalty Expert",
        secondaryButton: "Explore Loyalty Platform",
        stats: [
            { icon: GroupsOutlinedIcon, value: "9M+", label: "Members" },
            { icon: LoyaltyOutlinedIcon, value: "15+", label: "Loyalty Experience" },
            { icon: HubOutlinedIcon, value: "Integration", label: "API + Ecosystem" },
            { icon: AutorenewOutlinedIcon, value: "Fullcycle", label: "Implementation" },
        ],
    },
    overview: {
        title: "Built for Loyalty Programs That Operate at Enterprise Scale",
        paragraphs: [
            "An enterprise loyalty platform is software that helps organizations manage customer membership, loyalty rules, points, rewards, promotions, tiers, partner relationships and customer engagement across multiple channels.",
            "Unlike a simple rewards application, an enterprise loyalty platform typically needs to connect with existing business systems, transaction data and external partners. This makes integration, scalability, security, configurability and operational management important considerations when selecting a loyalty technology platform.",
        ],
        // TODO: ganti dengan diagram arsitektur "Enterprise Loyalty Platform" dari desain
        image: imgAmalaOverview,
        challenges: [
            { icon: PersonSearchOutlinedIcon, title: "Fragmented Customer Data", description: "Create a connected loyalty layer across customer and transaction ecosystems" },
            { icon: RuleOutlinedIcon, title: "Complex Program or Platform Rules", description: "Configure loyalty rules without rebuilding the entire platform bonuses and redemption rules" },
            { icon: HandshakeOutlinedIcon, title: "Growing Partner Ecosystem", description: "Connect partners through an integration-ready loyalty architecture" },
            { icon: InsightsOutlinedIcon, title: "Limited Platform Visibility", description: "Centralize reporting, analytics and loyalty intelligence members, points, campaigns and more" },
        ],
    },
    lifecycle: {
        title: "One Platform for the Loyalty Lifecycle",
        description: lifecycleDescription,
        // TODO: desain hanya menampilkan isi tab "Acquire"; copy & screenshot tab lain perlu dikonfirmasi
        items: [
            { label: "Acquire", title: "Acquire Member", description: lifecycleDescription, image: imgAmalaAdmin },
            { label: "Register", title: "Register Member", description: "Onboard new members through web, mobile and partner channels with consistent profile data and membership rules from day one.", image: imgAmalaAdmin },
            { label: "Engage", title: "Engage Member", description: "Reach members with relevant campaigns, promotions and communications based on their profile, tier and activity.", image: imgAmalaAdmin },
            { label: "Earn", title: "Earn Points", description: "Award points from purchases, flights, partner transactions and activities using configurable earning rules.", image: imgAmalaAdmin },
            { label: "Reward", title: "Reward Member", description: "Recognize members with tier benefits, bonuses and personalized rewards that strengthen their relationship with your brand.", image: imgAmalaAdmin },
            { label: "Reedem", title: "Redeem Rewards", description: "Let members redeem points for products, services, vouchers and partner rewards through connected redemption channels.", image: imgAmalaAdmin },
            { label: "Retain", title: "Retain Member", description: "Keep members active with tier qualification, retention campaigns and benefits that encourage continued engagement.", image: imgAmalaAdmin },
            { label: "Analyze", title: "Analyze Performance", description: "Monitor members, points, campaigns and partner performance from centralized reports and loyalty analytics.", image: imgAmalaAdmin },
        ],
    },
    features: {
        title: "Everything You Need to Operate a Modern Loyalty Program",
        // TODO: desain hanya menampilkan deskripsi "Member Management"; copy fitur lain perlu dikonfirmasi
        items: [
            { title: "Member Management", description: "Manage member profiles, loyalty status and customer information from a centralized loyalty environment", image: imgLoyaltyMember },
            { title: "Multi-Tier Loyalty", description: "Define membership tiers with their own qualification rules, benefits and upgrade or downgrade criteria", image: imgMultiTier },
            { title: "Points Management", description: "Configure how points are earned, transferred, expired and adjusted across products, channels and partners", image: imgPointExchange },
            { title: "Promotion & Rewards", description: "Create promotions, bonus campaigns and reward catalogs that can be targeted to specific members or segments", image: imgPromoReward },
            { title: "Partner & Merchant", description: "Onboard partners and merchants, manage their earning and redemption agreements and settle partner transactions", image: imgAmalaAdmin },
            { title: "Integration Platform", description: "Connect Amala with existing business systems, transaction sources and partner platforms through APIs", image: imgAmalaAdmin },
            { title: "Elite Bonus Point", description: "Give higher-tier members additional bonus points and benefits to recognize and retain your most valuable customers", image: imgMultiTier },
            { title: "Business Analytics", description: "Track members, points liability, campaigns and partner performance through reports and dashboards", image: imgBusinessOwner },
            { title: "Mobile Loyalty", description: "Give members access to their profile, points, rewards and promotions through a mobile loyalty experience", image: imgAmalaMobile },
        ],
    },
    howItWorks: {
        title: "From Customer Activity to Meaningful Rewards",
        // TODO: desain hanya menampilkan isi tab "How it work"; copy tab lain perlu dikonfirmasi
        items: [
            { label: "How it work", title: "How loyalty software actually works", description: lifecycleDescription, image: imgAmalaAdmin },
            { label: "Business & Admin Experience", title: "Built for business and admin teams", description: "Program managers configure tiers, earning rules, promotions and rewards from an admin console, while operations teams handle member service, adjustments and approvals in the same platform.", image: imgAmalaAdmin },
            { label: "Integration", title: "Integrates with your existing systems", description: "Amala connects to transaction systems, customer data sources and partner platforms through APIs, so loyalty activity is captured where it happens without rebuilding existing systems.", image: imgAmalaAdmin },
        ],
    },
    businessModels: {
        title: "One Loyalty Platform for Multiple Business Models",
        items: [
            { icon: FlightOutlinedIcon, title: "Airline & Travel", points: ["frequent flyer programs", "tier management", "partner rewards", "points redemption", "alliance integration"] },
            { icon: HotelOutlinedIcon, title: "Hospitality", points: ["guest loyalty", "membership tiers", "room/activity rewards", "partner benefits", "personalized promotions"] },
            { icon: AccountBalanceOutlinedIcon, title: "Banking & Financial", points: ["customer rewards", "transaction-based points", "partner rewards", "tier benefits", "campaign management"] },
            { icon: StorefrontOutlinedIcon, title: "Retail & Commerce", points: ["purchase rewards", "member segmentation", "promotional campaigns", "partner ecosystem", "customer retention"] },
            { icon: LocalHospitalOutlinedIcon, title: "Healthcare", points: ["member engagement", "wellness rewards", "partner ecosystem", "campaign-based engagement"] },
        ],
    },
    faq: {
        title: "Enterprise Loyalty platform FAQ",
        // TODO: desain hanya menampilkan jawaban pertanyaan pertama; jawaban lain perlu dikonfirmasi
        items: [
            { question: "What is Amala?", answer: "Amala is ASYST's enterprise loyalty platform designed to support customer membership, loyalty programs, points, rewards, promotions, partner ecosystems, analytics and digital loyalty experiences." },
            { question: "What industries can use Amala?", answer: "Amala can support loyalty programs across airline and travel, hospitality, banking and financial services, retail and commerce, healthcare and other industries that run membership or reward programs." },
            { question: "Can Amala integrate with existing enterprise systems?", answer: "Yes. Amala is designed to connect with existing business systems, transaction sources and partner platforms through APIs, so loyalty activity can be captured without replacing your current systems." },
            { question: "Can Amala support different loyalty tiers?", answer: "Yes. Amala supports multi-tier loyalty programs with configurable qualification rules, tier benefits and elite bonus points." },
            { question: "Can businesses manage promotions and rewards?", answer: "Yes. Business teams can create promotions, bonus campaigns and reward catalogs, and target them to specific members or segments from the admin console." },
            { question: "Can ASYST support implementation after creating the strategy?", answer: "Yes. ASYST supports the full lifecycle, from program design and implementation to integration, go-live and ongoing operational support." },
            { question: "Does Amala support partner and merchant programs?", answer: "Yes. Amala lets you onboard partners and merchants, manage earning and redemption agreements and track partner transactions." },
            { question: "Can loyalty members access the program through mobile?", answer: "Yes. Members can access their profile, points, rewards and promotions through a mobile loyalty experience." },
        ],
    },
    cta: {
        title: "Ready to Build a More Connected Loyalty Program?",
        description: "Talk with our loyalty and enterprise technology specialists about your business model, existing systems, customer journey and loyalty objectives",
        button: "Request product demo",
    },
}

// ---------- terjemahan ID (struktur & urutan sama dengan amalaDetailEn) ----------

const lifecycleDescriptionId = "Amala menyatukan operasional inti program loyalitas dalam satu platform terhubung, mulai dari manajemen member dan tingkatan hingga reward, promosi, poin, integrasi mitra, dan analitik";

export const AmalaDetailConst = localized(amalaDetailEn, {
    hero: {
        title: "Platform Loyalitas Enterprise untuk Keterlibatan & Pertumbuhan Pelanggan",
        description: "Bangun program loyalitas yang personal dengan menghubungkan data pelanggan, reward, promosi, mitra, dan pengalaman digital dalam satu platform yang skalabel",
        primaryButton: "Hubungi Ahli Loyalitas",
        secondaryButton: "Jelajahi Platform Loyalitas",
        stats: [
            { label: "Member" },
            { label: "Pengalaman Loyalitas" },
            { value: "Integrasi", label: "API + Ekosistem" },
            { value: "Fullcycle", label: "Implementasi" },
        ],
    },
    overview: {
        title: "Dibangun untuk Program Loyalitas Berskala Enterprise",
        paragraphs: [
            "Platform loyalitas enterprise adalah software yang membantu organisasi mengelola keanggotaan pelanggan, aturan loyalitas, poin, reward, promosi, tingkatan, hubungan dengan mitra, dan keterlibatan pelanggan di berbagai kanal.",
            "Berbeda dengan aplikasi reward sederhana, platform loyalitas enterprise umumnya harus terhubung dengan sistem bisnis yang ada, data transaksi, dan mitra eksternal. Karena itu, integrasi, skalabilitas, keamanan, kemudahan konfigurasi, dan manajemen operasional menjadi pertimbangan penting saat memilih platform teknologi loyalitas.",
        ],
        challenges: [
            { title: "Data Pelanggan Terfragmentasi", description: "Ciptakan lapisan loyalitas yang terhubung di seluruh ekosistem pelanggan dan transaksi" },
            { title: "Aturan Program atau Platform yang Kompleks", description: "Konfigurasikan aturan loyalitas, bonus, dan penukaran tanpa membangun ulang seluruh platform" },
            { title: "Ekosistem Mitra yang Terus Bertambah", description: "Hubungkan mitra melalui arsitektur loyalitas yang siap integrasi" },
            { title: "Visibilitas Platform Terbatas", description: "Pusatkan pelaporan, analitik, dan intelijen loyalitas untuk member, poin, kampanye, dan lainnya" },
        ],
    },
    lifecycle: {
        title: "Satu Platform untuk Seluruh Siklus Loyalitas",
        description: lifecycleDescriptionId,
        items: [
            { label: "Akuisisi", title: "Akuisisi Member", description: lifecycleDescriptionId },
            { label: "Registrasi", title: "Registrasi Member", description: "Daftarkan member baru melalui kanal web, mobile, dan mitra dengan data profil dan aturan keanggotaan yang konsisten sejak hari pertama." },
            { label: "Libatkan", title: "Libatkan Member", description: "Jangkau member dengan kampanye, promosi, dan komunikasi yang relevan berdasarkan profil, tingkatan, dan aktivitas mereka." },
            { label: "Kumpulkan", title: "Kumpulkan Poin", description: "Berikan poin dari pembelian, penerbangan, transaksi mitra, dan aktivitas lain menggunakan aturan perolehan yang dapat dikonfigurasi." },
            { label: "Beri Reward", title: "Beri Reward Member", description: "Apresiasi member dengan benefit tingkatan, bonus, dan reward personal yang memperkuat hubungan mereka dengan brand Anda." },
            { label: "Tukarkan", title: "Tukarkan Reward", description: "Biarkan member menukarkan poin dengan produk, layanan, voucher, dan reward mitra melalui kanal penukaran yang terhubung." },
            { label: "Pertahankan", title: "Pertahankan Member", description: "Jaga member tetap aktif dengan kualifikasi tingkatan, kampanye retensi, dan benefit yang mendorong keterlibatan berkelanjutan." },
            { label: "Analisis", title: "Analisis Kinerja", description: "Pantau kinerja member, poin, kampanye, dan mitra dari laporan terpusat dan analitik loyalitas." },
        ],
    },
    features: {
        title: "Semua yang Anda Butuhkan untuk Menjalankan Program Loyalitas Modern",
        items: [
            { title: "Manajemen Member", description: "Kelola profil member, status loyalitas, dan informasi pelanggan dari lingkungan loyalitas yang terpusat" },
            { title: "Loyalitas Multi-Tingkat", description: "Tentukan tingkatan keanggotaan dengan aturan kualifikasi, benefit, serta kriteria naik atau turun tingkat masing-masing" },
            { title: "Manajemen Poin", description: "Atur cara poin diperoleh, ditransfer, kedaluwarsa, dan disesuaikan di berbagai produk, kanal, dan mitra" },
            { title: "Promosi & Reward", description: "Buat promosi, kampanye bonus, dan katalog reward yang dapat ditargetkan ke member atau segmen tertentu" },
            { title: "Mitra & Merchant", description: "Daftarkan mitra dan merchant, kelola perjanjian perolehan dan penukaran, serta selesaikan transaksi mitra" },
            { title: "Platform Integrasi", description: "Hubungkan Amala dengan sistem bisnis yang ada, sumber transaksi, dan platform mitra melalui API" },
            { title: "Poin Bonus Elite", description: "Berikan poin bonus dan benefit tambahan bagi member tingkat atas untuk mengapresiasi dan mempertahankan pelanggan paling berharga" },
            { title: "Analitik Bisnis", description: "Pantau member, kewajiban poin, kampanye, dan kinerja mitra melalui laporan dan dashboard" },
            { title: "Loyalitas Mobile", description: "Beri member akses ke profil, poin, reward, dan promosi melalui pengalaman loyalitas di perangkat mobile" },
        ],
    },
    howItWorks: {
        title: "Dari Aktivitas Pelanggan Menjadi Reward yang Bermakna",
        items: [
            { label: "Cara kerja", title: "Bagaimana software loyalitas bekerja", description: lifecycleDescriptionId },
            { label: "Pengalaman Bisnis & Admin", title: "Dibangun untuk tim bisnis dan admin", description: "Program manager mengatur tingkatan, aturan perolehan, promosi, dan reward dari konsol admin, sementara tim operasional menangani layanan member, penyesuaian, dan persetujuan di platform yang sama." },
            { label: "Integrasi", title: "Terintegrasi dengan sistem Anda yang sudah ada", description: "Amala terhubung ke sistem transaksi, sumber data pelanggan, dan platform mitra melalui API, sehingga aktivitas loyalitas tercatat di tempat terjadinya tanpa membangun ulang sistem yang ada." },
        ],
    },
    businessModels: {
        title: "Satu Platform Loyalitas untuk Berbagai Model Bisnis",
        items: [
            { title: "Maskapai & Perjalanan", points: ["program frequent flyer", "manajemen tingkatan", "reward mitra", "penukaran poin", "integrasi aliansi"] },
            { title: "Perhotelan", points: ["loyalitas tamu", "tingkatan keanggotaan", "reward kamar/aktivitas", "benefit mitra", "promosi personal"] },
            { title: "Perbankan & Keuangan", points: ["reward pelanggan", "poin berbasis transaksi", "reward mitra", "benefit tingkatan", "manajemen kampanye"] },
            { title: "Ritel & Niaga", points: ["reward pembelian", "segmentasi member", "kampanye promosi", "ekosistem mitra", "retensi pelanggan"] },
            { title: "Kesehatan", points: ["keterlibatan member", "reward kesehatan", "ekosistem mitra", "keterlibatan berbasis kampanye"] },
        ],
    },
    faq: {
        title: "FAQ Platform Loyalitas Enterprise",
        items: [
            { question: "Apa itu Amala?", answer: "Amala adalah platform loyalitas enterprise dari ASYST yang dirancang untuk mendukung keanggotaan pelanggan, program loyalitas, poin, reward, promosi, ekosistem mitra, analitik, dan pengalaman loyalitas digital." },
            { question: "Industri apa saja yang dapat menggunakan Amala?", answer: "Amala dapat mendukung program loyalitas di industri maskapai dan perjalanan, perhotelan, perbankan dan jasa keuangan, ritel dan niaga, kesehatan, serta industri lain yang menjalankan program keanggotaan atau reward." },
            { question: "Apakah Amala dapat terintegrasi dengan sistem enterprise yang sudah ada?", answer: "Ya. Amala dirancang untuk terhubung dengan sistem bisnis, sumber transaksi, dan platform mitra yang ada melalui API, sehingga aktivitas loyalitas dapat tercatat tanpa mengganti sistem Anda saat ini." },
            { question: "Apakah Amala mendukung tingkatan loyalitas yang berbeda?", answer: "Ya. Amala mendukung program loyalitas multi-tingkat dengan aturan kualifikasi, benefit tingkatan, dan poin bonus elite yang dapat dikonfigurasi." },
            { question: "Apakah bisnis dapat mengelola promosi dan reward?", answer: "Ya. Tim bisnis dapat membuat promosi, kampanye bonus, dan katalog reward, lalu menargetkannya ke member atau segmen tertentu dari konsol admin." },
            { question: "Apakah ASYST dapat mendukung implementasi setelah strategi disusun?", answer: "Ya. ASYST mendukung seluruh siklus, mulai dari perancangan program dan implementasi hingga integrasi, go-live, dan dukungan operasional berkelanjutan." },
            { question: "Apakah Amala mendukung program mitra dan merchant?", answer: "Ya. Amala memungkinkan Anda mendaftarkan mitra dan merchant, mengelola perjanjian perolehan dan penukaran, serta memantau transaksi mitra." },
            { question: "Apakah member loyalitas dapat mengakses program melalui mobile?", answer: "Ya. Member dapat mengakses profil, poin, reward, dan promosi mereka melalui pengalaman loyalitas di perangkat mobile." },
        ],
    },
    cta: {
        title: "Siap Membangun Program Loyalitas yang Lebih Terhubung?",
        description: "Diskusikan model bisnis, sistem yang ada, perjalanan pelanggan, dan tujuan loyalitas Anda bersama spesialis loyalitas dan teknologi enterprise kami",
        button: "Minta demo produk",
    },
});
