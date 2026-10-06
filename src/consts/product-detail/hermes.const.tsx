import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import RuleOutlinedIcon from "@mui/icons-material/RuleOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";

import imgAdmin from "assets/asyst/img/background/product/amala/device-A.webp";
import imgMobile from "assets/asyst/img/background/product/amala/device-B.webp";
import imgOverview from "assets/asyst/img/background/services-solutions/amala1.webp";
import imgLoyaltyMember from "assets/asyst/img/background/product/amala/loyalty-member.webp";
import imgLoyaltyStaff from "assets/asyst/img/background/product/amala/loyalty-staff.webp";
import imgLoyaltyUnit from "assets/asyst/img/background/product/amala/loyalty-unit.webp";
import imgMultiTier from "assets/asyst/img/background/product/amala/multi-tier.webp";
import imgPointExchange from "assets/asyst/img/background/product/amala/point-exchange.webp";
import imgPromoReward from "assets/asyst/img/background/product/amala/promo-and-reward.webp";
import imgBusinessOwner from "assets/asyst/img/background/product/amala/business-owner.webp";
import { ProductDetailContent } from "consts/product-detail.const";
import { localized } from "shared/i18n";

// Konten dua bahasa: konstanta `...En` = teks EN lengkap; ekspor `localized(...En, {...})` di bawah file = terjemahan ID
// (teks saja, struktur & urutan sama).
// Konten mengikuti home.asyst.co.id/product/hermes (di situs lama slug ini dipakai untuk "Loyalty Platform").
// Screenshot CMS lama untuk Hermes adalah aplikasi cargo, jadi sementara memakai aset loyalty Amala.

const hermesDetailEn: ProductDetailContent = {
    hero: {
        title: "Maximize Customer Lifetime Value and Scale Seamless Loyalty Ecosystems",
        description: "Transform enterprises and travel leaders into loyalty powerhouses with an end-to-end management platform, enhancing customer retention, automating partner rewards and driving sustainable revenue growth",
        primaryButton: "Talk to Loyalty Expert",
        secondaryButton: "Explore Hermes",
        stats: [
            { icon: GroupsOutlinedIcon, value: "3M+", label: "Loyalty Members Handled" },
            { icon: HubOutlinedIcon, value: "25+", label: "Partner Banks & Ecosystems" },
            { icon: EmojiEventsOutlinedIcon, value: "Award-Winning", label: "Freddie Awards Backbone" },
            { icon: CreditCardOutlinedIcon, value: "B2B & B2C", label: "Co-Branded Ecosystem" },
        ],
    },
    overview: {
        title: "Boost Retention with an Integrated Loyalty Ecosystem",
        paragraphs: [
            "Hermes offers an enterprise-grade platform designed to simplify loyalty program management, turn transactional customers into brand advocates and unlock new revenue streams.",
            "From dynamic tiering to seamless multi-merchant point exchanges, Hermes lets you scale your loyalty ecosystem with proven industry excellence, as the backbone behind GarudaMiles' Freddie Awards wins for Program of the Year, Best Redemption Ability and Best Customer Service.",
        ],
        image: imgOverview,
        challenges: [
            { icon: PersonSearchOutlinedIcon, title: "Transactional Customers", description: "Turn one-off buyers into engaged members through tiers, perks and personalized offers" },
            { icon: RuleOutlinedIcon, title: "Rules Locked Behind IT", description: "Set up tiers, expiry policies and multiplier campaigns without IT bottlenecks" },
            { icon: HandshakeOutlinedIcon, title: "Disconnected Partner Networks", description: "Bring banks, airlines, hotels, retail and F&B into one accrual and redemption hub" },
            { icon: AccountBalanceWalletOutlinedIcon, title: "Unclear Point Liability", description: "Value outstanding points, track breakage and recognize deferred revenue accurately" },
        ],
    },
    lifecycle: {
        title: "Tailored for Every Touchpoint in Your Ecosystem",
        description: "Empowering businesses, partners and customers with end-to-end, real-time loyalty lifecycle management",
        items: [
            {
                label: "Partners & Merchants",
                title: "A seamless connection between brands and members",
                description: "Merchant and co-branded partners such as banks, airlines, hotels, retail and F&B connect into a unified loyalty hub to purchase reward points, issue points on member purchases and enable cross-brand instant redemptions, with automated billing, point reconciliation and settlement dashboards in the partner back-office.",
                image: imgLoyaltyUnit,
            },
            {
                label: "Program Managers",
                title: "Run loyalty operations without IT bottlenecks",
                description: "Set up and deploy multi-tier criteria, point expiration policies, targeted multiplier campaigns and seasonal vouchers through a dynamic rule engine, protected by real-time fraud monitoring and a complete transactional audit trail.",
                image: imgAdmin,
            },
            {
                label: "Customer Service",
                title: "360° member management",
                description: "Equip support agents with single-view customer profiles to resolve inquiries instantly, process retro-claims and deliver award-winning customer service.",
                image: imgLoyaltyStaff,
            },
            {
                label: "Finance & Executives",
                title: "Turn reward points into a profit center",
                description: "Maintain accounting governance with accurate valuation of outstanding points, automated deferred revenue recognition and breakage tracking, while executive dashboards visualize customer lifetime value, churn prediction and partner revenue contribution.",
                image: imgBusinessOwner,
            },
            {
                label: "Members",
                title: "Frictionless omnichannel self-service",
                description: "Members and corporate clients track tier progress, check point history, claim points 24/7 and redeem flexibly across lifestyle catalogs, flight seats, corporate perks and merchant vouchers, with transparent milestone progression and elite recognition.",
                image: imgMobile,
            },
        ],
    },
    features: {
        title: "Everything You Need to Scale a Loyalty Ecosystem",
        items: [
            { title: "Multi-Tier Membership Leveling", description: "Configure customizable tier progression rules (e.g. Silver, Gold, Platinum), qualifying criteria and exclusive benefits that drive engagement", image: imgMultiTier },
            { title: "Promo, Bonus & Reward Engine", description: "Launch targeted bonus campaigns, milestone point multipliers, personalized discounts and seasonal vouchers effortlessly", image: imgPromoReward },
            { title: "Flexible Membership Models", description: "Monetize premium engagement with paid subscription memberships or drive massive scale with open free-tier programs", image: imgLoyaltyMember },
            { title: "Point Exchange & Instant Redemption", description: "Let members exchange or spend points directly across a vast network of merchants and lifestyle services in real time", image: imgPointExchange },
            { title: "Partner & Merchant Back-Office", description: "A centralized portal for partners to manage point purchases, settle accruals and redemptions, and view commercial reporting", image: imgLoyaltyUnit },
            { title: "Robust API Integration Platform", description: "Plug into POS systems, core banking, booking engines, payment gateways and surrounding enterprise applications", image: imgAdmin },
            { title: "Actionable Business Analytics", description: "Track active member ratios, churn risk, breakage rates and campaign performance with comprehensive data visualization", image: imgBusinessOwner },
            { title: "Centralized Operator Dashboard", description: "Streamline back-office administration, member service adjustments, fraud monitoring and rule governance from a single screen", image: imgAdmin },
            { title: "Omnichannel Experience", description: "Deliver responsive web portals and white-label mobile app capabilities with modern, intuitive UX for high customer satisfaction", image: imgMobile },
        ],
    },
    howItWorks: {
        title: "How Hermes Makes Loyalty Simple and Scalable",
        items: [
            { label: "Intuitive Interface", title: "Intuitive & responsive interface", description: "Beautifully crafted member touchpoints across web and mobile that make discovering, earning and redeeming points enjoyable and frictionless.", image: imgMobile },
            { label: "High-Volume Reliability", title: "Proven high-volume reliability", description: "A high-availability architecture capable of handling multi-million member bases, high-frequency transactions and complex ledgering.", image: imgAdmin },
            { label: "API Connectivity", title: "Enterprise API connectivity", description: "Modern RESTful APIs and pre-built connectors that integrate smoothly with your existing CRM, ERP and payment systems.", image: imgOverview },
        ],
    },
    businessModels: {
        title: "One Loyalty Ecosystem for Multiple Industries",
        items: [
            { icon: FlightOutlinedIcon, title: "Airline & Travel", points: ["frequent flyer programs", "flight seat redemption", "elite tier recognition", "partner accrual"] },
            { icon: AccountBalanceOutlinedIcon, title: "Banking & Financial", points: ["co-branded credit & debit cards", "automated tier qualification", "real-time transaction sync", "point purchase"] },
            { icon: HotelOutlinedIcon, title: "Hospitality", points: ["guest loyalty", "membership tiers", "partner benefits", "personalized offers"] },
            { icon: StorefrontOutlinedIcon, title: "Retail & F&B", points: ["purchase rewards", "merchant vouchers", "multi-merchant redemption", "seasonal campaigns"] },
            { icon: BusinessCenterOutlinedIcon, title: "Corporate (B2B)", points: ["corporate loyalty programs", "corporate perks", "client tiering", "partner settlement"] },
        ],
    },
    faq: {
        title: "Hermes Loyalty Platform FAQ",
        items: [
            { question: "What is Hermes?", answer: "Hermes is an enterprise-grade loyalty platform from ASYST that manages tiering, points, promotions, rewards, partner networks and member experiences in one ecosystem." },
            { question: "How many members can Hermes handle?", answer: "Hermes runs on a high-availability architecture that already handles 3M+ loyalty members, high-frequency transactions and complex ledgering." },
            { question: "Can partners and merchants join the program?", answer: "Yes. Banks, airlines, hotels, retail and F&B partners can purchase points, issue points on member purchases, enable instant redemptions and settle transactions through the partner back-office." },
            { question: "Does Hermes support co-branded card programs?", answer: "Yes. Hermes supports co-branded credit and debit card programs with automated tier qualification and real-time transaction syncing." },
            { question: "Can we run both free and paid memberships?", answer: "Yes. Hermes supports open free-tier programs as well as paid subscription memberships with exclusive benefits." },
            { question: "How does Hermes help finance teams?", answer: "Hermes values outstanding points, automates deferred revenue recognition, tracks breakage and provides executive dashboards for customer lifetime value, churn and partner revenue." },
            { question: "Can Hermes integrate with our existing systems?", answer: "Yes. RESTful APIs and pre-built connectors integrate with POS systems, core banking, booking engines, payment gateways, CRM and ERP." },
        ],
    },
    cta: {
        title: "Ready to Scale Your Loyalty Ecosystem?",
        description: "Talk with our loyalty specialists about your members, partners, existing systems and growth objectives",
        button: "Request product demo",
    },
}

// ---------- terjemahan ID (struktur & urutan sama dengan hermesDetailEn) ----------

export const HermesDetailConst = localized(hermesDetailEn, {
    hero: {
        title: "Maksimalkan Customer Lifetime Value dan Kembangkan Ekosistem Loyalitas yang Mulus",
        description: "Ubah perusahaan dan pemimpin industri perjalanan menjadi kekuatan loyalitas dengan platform manajemen end-to-end yang meningkatkan retensi pelanggan, mengotomatiskan reward mitra, dan mendorong pertumbuhan pendapatan berkelanjutan",
        primaryButton: "Hubungi Ahli Loyalitas",
        secondaryButton: "Jelajahi Hermes",
        stats: [
            { label: "Member Loyalitas Dikelola" },
            { label: "Bank Mitra & Ekosistem" },
            { value: "Peraih Penghargaan", label: "Tulang Punggung Freddie Awards" },
            { label: "Ekosistem Co-Branded" },
        ],
    },
    overview: {
        title: "Tingkatkan Retensi dengan Ekosistem Loyalitas Terintegrasi",
        paragraphs: [
            "Hermes menawarkan platform kelas enterprise yang dirancang untuk menyederhanakan pengelolaan program loyalitas, mengubah pelanggan transaksional menjadi pendukung brand, dan membuka sumber pendapatan baru.",
            "Mulai dari tingkatan dinamis hingga pertukaran poin multi-merchant yang mulus, Hermes memungkinkan Anda mengembangkan ekosistem loyalitas dengan keunggulan industri yang terbukti, sebagai tulang punggung kemenangan GarudaMiles di Freddie Awards untuk kategori Program of the Year, Best Redemption Ability, dan Best Customer Service.",
        ],
        challenges: [
            { title: "Pelanggan Transaksional", description: "Ubah pembeli sekali jalan menjadi member yang terlibat melalui tingkatan, benefit, dan penawaran personal" },
            { title: "Aturan Bergantung pada Tim IT", description: "Atur tingkatan, kebijakan kedaluwarsa, dan kampanye pengganda poin tanpa hambatan IT" },
            { title: "Jaringan Mitra yang Terputus", description: "Satukan bank, maskapai, hotel, ritel, dan F&B dalam satu pusat perolehan dan penukaran" },
            { title: "Kewajiban Poin yang Tidak Jelas", description: "Nilai poin yang beredar, pantau breakage, dan akui pendapatan tangguhan secara akurat" },
        ],
    },
    lifecycle: {
        title: "Disesuaikan untuk Setiap Titik Kontak di Ekosistem Anda",
        description: "Memberdayakan bisnis, mitra, dan pelanggan dengan manajemen siklus loyalitas end-to-end secara real-time",
        items: [
            {
                label: "Mitra & Merchant",
                title: "Koneksi mulus antara brand dan member",
                description: "Merchant dan mitra co-branded seperti bank, maskapai, hotel, ritel, dan F&B terhubung ke pusat loyalitas terpadu untuk membeli poin reward, memberikan poin atas pembelian member, dan mengaktifkan penukaran lintas brand secara instan, dengan penagihan otomatis, rekonsiliasi poin, dan dashboard settlement di back-office mitra.",
            },
            {
                label: "Program Manager",
                title: "Jalankan operasional loyalitas tanpa hambatan IT",
                description: "Atur dan terapkan kriteria multi-tingkat, kebijakan kedaluwarsa poin, kampanye pengganda yang terarah, dan voucher musiman melalui rule engine yang dinamis, dilindungi pemantauan fraud real-time dan jejak audit transaksi yang lengkap.",
            },
            {
                label: "Layanan Pelanggan",
                title: "Manajemen member 360°",
                description: "Bekali agen layanan dengan profil pelanggan dalam satu tampilan untuk menyelesaikan pertanyaan seketika, memproses klaim susulan, dan memberikan layanan pelanggan kelas penghargaan.",
            },
            {
                label: "Keuangan & Eksekutif",
                title: "Ubah poin reward menjadi pusat keuntungan",
                description: "Jaga tata kelola akuntansi dengan penilaian akurat atas poin yang beredar, pengakuan pendapatan tangguhan otomatis, dan pelacakan breakage, sementara dashboard eksekutif menampilkan customer lifetime value, prediksi churn, dan kontribusi pendapatan mitra.",
            },
            {
                label: "Member",
                title: "Layanan mandiri omnichannel tanpa hambatan",
                description: "Member dan klien korporat dapat memantau progres tingkatan, melihat riwayat poin, mengklaim poin 24/7, dan menukarkannya secara fleksibel untuk katalog gaya hidup, kursi penerbangan, benefit korporat, dan voucher merchant, dengan progres pencapaian yang transparan dan pengakuan status elite.",
            },
        ],
    },
    features: {
        title: "Semua yang Anda Butuhkan untuk Mengembangkan Ekosistem Loyalitas",
        items: [
            { title: "Tingkatan Keanggotaan Multi-Level", description: "Atur aturan kenaikan tingkat (mis. Silver, Gold, Platinum), kriteria kualifikasi, dan benefit eksklusif yang mendorong keterlibatan" },
            { title: "Mesin Promo, Bonus & Reward", description: "Luncurkan kampanye bonus yang terarah, pengganda poin berbasis pencapaian, diskon personal, dan voucher musiman dengan mudah" },
            { title: "Model Keanggotaan Fleksibel", description: "Monetisasi keterlibatan premium dengan keanggotaan berbayar atau raih skala besar dengan program tingkat gratis" },
            { title: "Pertukaran Poin & Penukaran Instan", description: "Biarkan member menukar atau membelanjakan poin langsung di jaringan merchant dan layanan gaya hidup yang luas secara real-time" },
            { title: "Back-Office Mitra & Merchant", description: "Portal terpusat bagi mitra untuk mengelola pembelian poin, menyelesaikan perolehan dan penukaran, serta melihat laporan komersial" },
            { title: "Platform Integrasi API yang Tangguh", description: "Terhubung ke sistem POS, core banking, booking engine, payment gateway, dan aplikasi enterprise di sekitarnya" },
            { title: "Analitik Bisnis yang Actionable", description: "Pantau rasio member aktif, risiko churn, tingkat breakage, dan kinerja kampanye dengan visualisasi data yang komprehensif" },
            { title: "Dashboard Operator Terpusat", description: "Sederhanakan administrasi back-office, penyesuaian layanan member, pemantauan fraud, dan tata kelola aturan dari satu layar" },
            { title: "Pengalaman Omnichannel", description: "Hadirkan portal web responsif dan kapabilitas aplikasi mobile white-label dengan UX modern dan intuitif untuk kepuasan pelanggan yang tinggi" },
        ],
    },
    howItWorks: {
        title: "Bagaimana Hermes Membuat Loyalitas Sederhana dan Skalabel",
        items: [
            { label: "Antarmuka Intuitif", title: "Antarmuka yang intuitif & responsif", description: "Titik kontak member yang dirancang apik di web dan mobile, membuat proses menemukan, mengumpulkan, dan menukarkan poin menjadi menyenangkan dan tanpa hambatan." },
            { label: "Andal untuk Volume Tinggi", title: "Keandalan teruji untuk volume tinggi", description: "Arsitektur high-availability yang mampu menangani jutaan member, transaksi berfrekuensi tinggi, dan pembukuan yang kompleks." },
            { label: "Konektivitas API", title: "Konektivitas API kelas enterprise", description: "RESTful API modern dan konektor siap pakai yang terintegrasi mulus dengan CRM, ERP, dan sistem pembayaran Anda yang sudah ada." },
        ],
    },
    businessModels: {
        title: "Satu Ekosistem Loyalitas untuk Berbagai Industri",
        items: [
            { title: "Maskapai & Perjalanan", points: ["program frequent flyer", "penukaran kursi penerbangan", "pengakuan tingkat elite", "perolehan dari mitra"] },
            { title: "Perbankan & Keuangan", points: ["kartu kredit & debit co-branded", "kualifikasi tingkatan otomatis", "sinkronisasi transaksi real-time", "pembelian poin"] },
            { title: "Perhotelan", points: ["loyalitas tamu", "tingkatan keanggotaan", "benefit mitra", "penawaran personal"] },
            { title: "Ritel & F&B", points: ["reward pembelian", "voucher merchant", "penukaran multi-merchant", "kampanye musiman"] },
            { title: "Korporat (B2B)", points: ["program loyalitas korporat", "benefit korporat", "tingkatan klien", "settlement mitra"] },
        ],
    },
    faq: {
        title: "FAQ Platform Loyalitas Hermes",
        items: [
            { question: "Apa itu Hermes?", answer: "Hermes adalah platform loyalitas kelas enterprise dari ASYST yang mengelola tingkatan, poin, promosi, reward, jaringan mitra, dan pengalaman member dalam satu ekosistem." },
            { question: "Berapa banyak member yang dapat ditangani Hermes?", answer: "Hermes berjalan di atas arsitektur high-availability yang saat ini menangani lebih dari 3 juta member loyalitas, transaksi berfrekuensi tinggi, dan pembukuan yang kompleks." },
            { question: "Apakah mitra dan merchant dapat bergabung dalam program?", answer: "Ya. Mitra bank, maskapai, hotel, ritel, dan F&B dapat membeli poin, memberikan poin atas pembelian member, mengaktifkan penukaran instan, dan menyelesaikan transaksi melalui back-office mitra." },
            { question: "Apakah Hermes mendukung program kartu co-branded?", answer: "Ya. Hermes mendukung program kartu kredit dan debit co-branded dengan kualifikasi tingkatan otomatis dan sinkronisasi transaksi real-time." },
            { question: "Bisakah kami menjalankan keanggotaan gratis dan berbayar sekaligus?", answer: "Bisa. Hermes mendukung program tingkat gratis maupun keanggotaan berbayar dengan benefit eksklusif." },
            { question: "Bagaimana Hermes membantu tim keuangan?", answer: "Hermes menilai poin yang beredar, mengotomatiskan pengakuan pendapatan tangguhan, memantau breakage, dan menyediakan dashboard eksekutif untuk customer lifetime value, churn, dan pendapatan mitra." },
            { question: "Apakah Hermes dapat terintegrasi dengan sistem kami yang sudah ada?", answer: "Ya. RESTful API dan konektor siap pakai terintegrasi dengan sistem POS, core banking, booking engine, payment gateway, CRM, dan ERP." },
        ],
    },
    cta: {
        title: "Siap Mengembangkan Ekosistem Loyalitas Anda?",
        description: "Diskusikan member, mitra, sistem yang ada, dan tujuan pertumbuhan Anda bersama spesialis loyalitas kami",
        button: "Minta demo produk",
    },
});
