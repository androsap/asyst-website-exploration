import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import CallSplitOutlinedIcon from "@mui/icons-material/CallSplitOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import LinkOffOutlinedIcon from "@mui/icons-material/LinkOffOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

import imgBanner from "assets/asyst/img/background/product/elea/detail/banner-1.png";
import imgBusiness from "assets/asyst/img/background/product/elea/detail/business-1.png";
import imgPromotion from "assets/asyst/img/background/product/elea/detail/promotion-1.png";
import { ProductDetailContent } from "consts/product-detail.const";
import { localized } from "shared/i18n";

// Konten dua bahasa: konstanta `...En` = teks EN lengkap; ekspor `localized(...En, {...})` di bawah file = terjemahan ID
// (teks saja, struktur & urutan sama).
// Konten mengikuti home.asyst.co.id/product/elea (ERP Solution).
// TODO: gambar masih screenshot CMS lama (Eleasoft); ganti dengan visual ERP dari desain.

const eleaDetailEn: ProductDetailContent = {
    hero: {
        title: "Unify Core Operations and Accelerate Enterprise Growth with Next-Gen ERP",
        description: "Break down operational silos and integrate finance, supply chain, HCM and CRM into a single source of truth, driving automation, compliance and end-to-end operational excellence",
        primaryButton: "Talk to ERP Expert",
        secondaryButton: "Explore Elea",
        stats: [
            { icon: VerifiedOutlinedIcon, value: "SAP · Oracle · Odoo", label: "Certified Expertise" },
            { icon: HubOutlinedIcon, value: "Single Source", label: "Finance, SCM, HCM & CRM" },
            { icon: SupportAgentOutlinedIcon, value: "24/7", label: "Managed Support" },
            { icon: AutorenewOutlinedIcon, value: "Fullcycle", label: "Implementation" },
        ],
    },
    overview: {
        title: "The Core of Enterprise Operations",
        paragraphs: [
            "ASYST delivers comprehensive ERP solutions that connect strategic planning, procurement, manufacturing and analytics onto an intelligent digital backbone.",
            "Modernize workflows, streamline compliance and make confident, data-driven decisions with architectures proven in mission-critical aviation, corporate and sovereign asset environments.",
        ],
        image: imgBanner,
        challenges: [
            { icon: CallSplitOutlinedIcon, title: "Operational Silos", description: "Integrate finance, supply chain, HCM and CRM into a single source of truth" },
            { icon: ReceiptLongOutlinedIcon, title: "Slow Financial Close", description: "Accelerate monthly closing with seamless reconciliation across subsidiaries" },
            { icon: GppGoodOutlinedIcon, title: "Compliance Pressure", description: "Stay aligned with local tax laws, IFRS standards and audit mandates" },
            { icon: LinkOffOutlinedIcon, title: "Legacy Systems", description: "Connect the new ERP with legacy systems, banking gateways and suppliers" },
        ],
    },
    lifecycle: {
        title: "Comprehensive Enterprise Capabilities for Every Function",
        description: "Connecting departments, automating repetitive processes and empowering teams across the entire organization",
        items: [
            { label: "Inventory", title: "End-to-end inventory & warehouse visibility", description: "Real-time tracking of raw materials and finished goods across multi-location warehouses, reducing carrying costs and eliminating stockouts.", image: imgBusiness },
            { label: "Manufacturing", title: "Lean manufacturing & resource planning", description: "Optimize production scheduling, capacity planning and shop-floor tracking for consistent delivery times and superior output quality.", image: imgBusiness },
            { label: "Procurement", title: "Automated procurement & vendor management", description: "Streamline purchase orders, vendor evaluations and contract management with automated approval workflows and electronic invoicing.", image: imgBusiness },
            { label: "Finance", title: "Single source of financial truth", description: "Consolidate general ledgers, accounts payable, accounts receivable and fixed assets with seamless reconciliation across all subsidiaries.", image: imgBusiness },
            { label: "Governance", title: "Audit-ready financial integrity & governance", description: "Maintain continuous compliance with local tax laws, IFRS standards and institutional audit mandates through automated governance logs.", image: imgBusiness },
            { label: "Budgeting", title: "Strategic budgeting & cash-flow forecasting", description: "Accelerate monthly financial close cycles and leverage predictive cash-flow forecasting for informed capital allocation.", image: imgBusiness },
            { label: "Payroll", title: "Streamlined payroll & attendance automation", description: "Ensure accurate, error-free payroll calculations, tax withholding and attendance tracking integrated directly with enterprise finance.", image: imgBusiness },
            { label: "Talent", title: "Comprehensive talent lifecycle management", description: "Digitize recruitment, onboarding, performance evaluations, development plans and succession tracking within a unified portal.", image: imgBusiness },
            { label: "Self-Service", title: "Employee self-service & workforce analytics", description: "Give employees self-service mobile tools for leave requests and pay slips, while HR managers get real-time turnover analytics.", image: imgBusiness },
        ],
    },
    features: {
        title: "Cloud & Hybrid ERP Ecosystems",
        items: [
            { title: "SAP Implementation & Advisory", description: "Industry-leading enterprise application software providing robust, highly scalable architectures built for complex, high-volume operations", image: imgBusiness },
            { title: "Oracle Fusion Cloud ERP", description: "A modern, agile SaaS application suite engineered for connected financial management, supply chain resilience and global workforce agility", image: imgBusiness },
            { title: "Odoo Enterprise Suite", description: "Highly customizable, modular business apps designed to automate core functions rapidly and cost-effectively for growing enterprises", image: imgBusiness },
            { title: "Advisory, Deployment & Managed Services", description: "Whether you need Tier-1 global enterprise software or agile open suites, ASYST delivers certified advisory, deployment and 24/7 managed services", image: imgPromotion },
            { title: "Custom Business Technology Platforms", description: "End-to-end implementation and custom platforms that extend your ERP for industry-specific processes", image: imgPromotion },
        ],
    },
    howItWorks: {
        title: "How ASYST Makes Enterprise Modernization Simple and Reliable",
        items: [
            { label: "User Experience", title: "Intuitive user experience & adoption", description: "Clean, role-based dashboards and a streamlined UI reduce employee training time, boost data accuracy and foster rapid company-wide adoption.", image: imgPromotion },
            { label: "System Resilience", title: "Robust architecture & system resilience", description: "Enterprise-grade security protocols, multi-layer data redundancy and high-availability infrastructure support non-stop 24/7 business operations.", image: imgBusiness },
            { label: "Integration", title: "Effortless API & legacy integration", description: "Flexible integration middleware connects your new ERP with legacy systems, banking gateways, CRM platforms and external suppliers.", image: imgBanner },
        ],
    },
    businessModels: {
        title: "ERP Built Around Your Operating Model",
        items: [
            { icon: FlightOutlinedIcon, title: "Aviation", points: ["mission-critical operations", "multi-entity finance", "maintenance procurement", "workforce management"] },
            { icon: AccountBalanceOutlinedIcon, title: "Sovereign & State-Owned", points: ["strict financial integrity", "governance compliance", "investment fund reporting", "audit readiness"] },
            { icon: FactoryOutlinedIcon, title: "Manufacturing & Distribution", points: ["production scheduling", "capacity planning", "multi-warehouse inventory", "vendor management"] },
            { icon: BusinessOutlinedIcon, title: "Corporate Enterprise", points: ["consolidated ledgers", "budgeting & forecasting", "payroll & HCM", "employee self-service"] },
            { icon: TrendingUpOutlinedIcon, title: "Growing Enterprise", points: ["modular Odoo apps", "rapid automation", "cost-effective rollout", "scalable foundation"] },
        ],
    },
    faq: {
        title: "Elea ERP Solution FAQ",
        items: [
            { question: "What is Elea?", answer: "Elea is ASYST's ERP solution that integrates finance, supply chain, human capital management and CRM into a single source of truth for enterprise operations." },
            { question: "Which ERP platforms does ASYST support?", answer: "ASYST delivers certified advisory, deployment and managed services across SAP, Oracle Fusion Cloud ERP and Odoo Enterprise." },
            { question: "Which business functions are covered?", answer: "Supply chain and operations, finance and accounting, and human capital management, including inventory, manufacturing, procurement, ledgers, budgeting, payroll and talent management." },
            { question: "Can Elea integrate with our legacy systems?", answer: "Yes. Integration middleware connects the ERP with legacy systems, banking gateways, CRM platforms and external suppliers." },
            { question: "Does Elea support regulatory compliance?", answer: "Yes. Automated governance logs help maintain compliance with local tax laws, IFRS standards and institutional audit mandates." },
            { question: "Does ASYST provide support after go-live?", answer: "Yes. ASYST provides end-to-end implementation and 24/7 managed support across SAP, Oracle Fusion and Odoo ecosystems." },
        ],
    },
    cta: {
        title: "Ready to Modernize Your Enterprise Core?",
        description: "Talk with our ERP specialists about your business functions, existing systems and transformation roadmap",
        button: "Request product demo",
    },
}

// ---------- terjemahan ID (struktur & urutan sama dengan eleaDetailEn) ----------

export const EleaDetailConst = localized(eleaDetailEn, {
    hero: {
        title: "Satukan Operasional Inti dan Percepat Pertumbuhan Perusahaan dengan ERP Generasi Baru",
        description: "Hilangkan silo operasional dan integrasikan keuangan, rantai pasok, HCM, dan CRM menjadi satu sumber kebenaran untuk mendorong otomatisasi, kepatuhan, dan keunggulan operasional end-to-end",
        primaryButton: "Hubungi Ahli ERP",
        secondaryButton: "Jelajahi Elea",
        stats: [
            { label: "Keahlian Tersertifikasi" },
            { value: "Satu Sumber Data", label: "Keuangan, SCM, HCM & CRM" },
            { label: "Dukungan Terkelola" },
            { value: "Fullcycle", label: "Implementasi" },
        ],
    },
    overview: {
        title: "Inti dari Operasional Perusahaan",
        paragraphs: [
            "ASYST menghadirkan solusi ERP menyeluruh yang menghubungkan perencanaan strategis, pengadaan, manufaktur, dan analitik dalam satu tulang punggung digital yang cerdas.",
            "Modernisasi alur kerja, sederhanakan kepatuhan, dan ambil keputusan berbasis data dengan percaya diri menggunakan arsitektur yang telah terbukti di lingkungan penerbangan, korporat, dan aset negara yang kritis.",
        ],
        challenges: [
            { title: "Silo Operasional", description: "Integrasikan keuangan, rantai pasok, HCM, dan CRM menjadi satu sumber kebenaran" },
            { title: "Tutup Buku yang Lambat", description: "Percepat tutup buku bulanan dengan rekonsiliasi yang mulus di seluruh anak perusahaan" },
            { title: "Tekanan Kepatuhan", description: "Tetap selaras dengan peraturan perpajakan lokal, standar IFRS, dan ketentuan audit" },
            { title: "Sistem Lama", description: "Hubungkan ERP baru dengan sistem lama, gateway perbankan, dan pemasok" },
        ],
    },
    lifecycle: {
        title: "Kapabilitas Enterprise Menyeluruh untuk Setiap Fungsi",
        description: "Menghubungkan departemen, mengotomatiskan proses berulang, dan memberdayakan tim di seluruh organisasi",
        items: [
            { label: "Inventaris", title: "Visibilitas inventaris & gudang end-to-end", description: "Pelacakan bahan baku dan barang jadi secara real-time di gudang multi-lokasi, menekan biaya penyimpanan dan mencegah kehabisan stok." },
            { label: "Manufaktur", title: "Lean manufacturing & perencanaan sumber daya", description: "Optimalkan penjadwalan produksi, perencanaan kapasitas, dan pelacakan lantai produksi untuk waktu pengiriman yang konsisten dan kualitas output yang unggul." },
            { label: "Pengadaan", title: "Pengadaan & manajemen vendor otomatis", description: "Sederhanakan purchase order, evaluasi vendor, dan manajemen kontrak dengan alur persetujuan otomatis dan faktur elektronik." },
            { label: "Keuangan", title: "Satu sumber kebenaran finansial", description: "Konsolidasikan buku besar, utang usaha, piutang usaha, dan aset tetap dengan rekonsiliasi yang mulus di seluruh anak perusahaan." },
            { label: "Tata Kelola", title: "Integritas & tata kelola keuangan yang siap audit", description: "Jaga kepatuhan berkelanjutan terhadap peraturan perpajakan lokal, standar IFRS, dan ketentuan audit institusi melalui log tata kelola otomatis." },
            { label: "Anggaran", title: "Penganggaran strategis & proyeksi arus kas", description: "Percepat siklus tutup buku bulanan dan manfaatkan proyeksi arus kas prediktif untuk alokasi modal yang tepat." },
            { label: "Penggajian", title: "Otomatisasi penggajian & kehadiran", description: "Pastikan perhitungan gaji, potongan pajak, dan pencatatan kehadiran yang akurat dan bebas kesalahan, terintegrasi langsung dengan keuangan perusahaan." },
            { label: "Talenta", title: "Manajemen siklus talenta menyeluruh", description: "Digitalisasi rekrutmen, onboarding, penilaian kinerja, rencana pengembangan, dan pelacakan suksesi dalam satu portal terpadu." },
            { label: "Swalayan", title: "Layanan mandiri karyawan & analitik tenaga kerja", description: "Beri karyawan tools mobile mandiri untuk pengajuan cuti dan slip gaji, sementara manajer HR mendapatkan analitik turnover secara real-time." },
        ],
    },
    features: {
        title: "Ekosistem ERP Cloud & Hybrid",
        items: [
            { title: "Implementasi & Advisory SAP", description: "Software aplikasi enterprise terdepan dengan arsitektur yang tangguh dan sangat skalabel untuk operasional bervolume tinggi dan kompleks" },
            { title: "Oracle Fusion Cloud ERP", description: "Rangkaian aplikasi SaaS modern dan agile untuk manajemen keuangan yang terhubung, ketahanan rantai pasok, dan kelincahan tenaga kerja global" },
            { title: "Odoo Enterprise Suite", description: "Aplikasi bisnis modular yang sangat mudah disesuaikan untuk mengotomatiskan fungsi inti dengan cepat dan hemat biaya bagi perusahaan yang sedang bertumbuh" },
            { title: "Advisory, Deployment & Layanan Terkelola", description: "Baik Anda membutuhkan software enterprise global Tier-1 maupun suite terbuka yang agile, ASYST menghadirkan advisory tersertifikasi, deployment, dan layanan terkelola 24/7" },
            { title: "Platform Teknologi Bisnis Khusus", description: "Implementasi end-to-end dan platform khusus yang memperluas ERP Anda untuk proses spesifik industri" },
        ],
    },
    howItWorks: {
        title: "Bagaimana ASYST Membuat Modernisasi Enterprise Sederhana dan Andal",
        items: [
            { label: "Pengalaman Pengguna", title: "Pengalaman pengguna yang intuitif & mudah diadopsi", description: "Dashboard berbasis peran yang rapi dan UI yang sederhana mempersingkat waktu pelatihan karyawan, meningkatkan akurasi data, dan mempercepat adopsi di seluruh perusahaan." },
            { label: "Ketahanan Sistem", title: "Arsitektur tangguh & ketahanan sistem", description: "Protokol keamanan kelas enterprise, redundansi data berlapis, dan infrastruktur high-availability mendukung operasional bisnis tanpa henti 24/7." },
            { label: "Integrasi", title: "Integrasi API & sistem lama yang mudah", description: "Middleware integrasi yang fleksibel menghubungkan ERP baru Anda dengan sistem lama, gateway perbankan, platform CRM, dan pemasok eksternal." },
        ],
    },
    businessModels: {
        title: "ERP yang Dibangun Sesuai Model Operasional Anda",
        items: [
            { title: "Penerbangan", points: ["operasional kritis", "keuangan multi-entitas", "pengadaan perawatan", "manajemen tenaga kerja"] },
            { title: "Negara & BUMN", points: ["integritas keuangan yang ketat", "kepatuhan tata kelola", "pelaporan dana investasi", "kesiapan audit"] },
            { title: "Manufaktur & Distribusi", points: ["penjadwalan produksi", "perencanaan kapasitas", "inventaris multi-gudang", "manajemen vendor"] },
            { title: "Perusahaan Korporat", points: ["buku besar terkonsolidasi", "penganggaran & proyeksi", "penggajian & HCM", "layanan mandiri karyawan"] },
            { title: "Perusahaan Bertumbuh", points: ["aplikasi Odoo modular", "otomatisasi cepat", "implementasi hemat biaya", "fondasi yang skalabel"] },
        ],
    },
    faq: {
        title: "FAQ Solusi ERP Elea",
        items: [
            { question: "Apa itu Elea?", answer: "Elea adalah solusi ERP dari ASYST yang mengintegrasikan keuangan, rantai pasok, manajemen sumber daya manusia, dan CRM menjadi satu sumber kebenaran untuk operasional perusahaan." },
            { question: "Platform ERP apa saja yang didukung ASYST?", answer: "ASYST menghadirkan advisory tersertifikasi, deployment, dan layanan terkelola untuk SAP, Oracle Fusion Cloud ERP, dan Odoo Enterprise." },
            { question: "Fungsi bisnis apa saja yang tercakup?", answer: "Rantai pasok dan operasional, keuangan dan akuntansi, serta manajemen sumber daya manusia, termasuk inventaris, manufaktur, pengadaan, buku besar, penganggaran, penggajian, dan manajemen talenta." },
            { question: "Apakah Elea dapat terintegrasi dengan sistem lama kami?", answer: "Ya. Middleware integrasi menghubungkan ERP dengan sistem lama, gateway perbankan, platform CRM, dan pemasok eksternal." },
            { question: "Apakah Elea mendukung kepatuhan regulasi?", answer: "Ya. Log tata kelola otomatis membantu menjaga kepatuhan terhadap peraturan perpajakan lokal, standar IFRS, dan ketentuan audit institusi." },
            { question: "Apakah ASYST memberikan dukungan setelah go-live?", answer: "Ya. ASYST menyediakan implementasi end-to-end dan dukungan terkelola 24/7 untuk ekosistem SAP, Oracle Fusion, dan Odoo." },
        ],
    },
    cta: {
        title: "Siap Memodernisasi Inti Perusahaan Anda?",
        description: "Diskusikan fungsi bisnis, sistem yang ada, dan roadmap transformasi Anda bersama spesialis ERP kami",
        button: "Minta demo produk",
    },
});
