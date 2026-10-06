import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import ContentPasteOffOutlinedIcon from "@mui/icons-material/ContentPasteOffOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

import imgPlaceholder from "assets/asyst/img/background/product/overview/background-product.webp";
import { ProductDetailContent } from "consts/product-detail.const";
import { localized } from "shared/i18n";

// Konten dua bahasa: konstanta `...En` = teks EN lengkap; ekspor `localized(...En, {...})` di bawah file = terjemahan ID
// (teks saja, struktur & urutan sama).
// Struktur mengikuti halaman Amala (components/product/detail).
// TODO: copy disusun dari positioning Apollo (ERP) di halaman Products; konfirmasi dengan tim produk.
// TODO: gambar masih placeholder; ganti dengan screenshot/visual Apollo dari desain.

const apolloDetailEn: ProductDetailContent = {
    hero: {
        title: "Integrated Enterprise Resource Planning for Connected Operations",
        description: "Bring finance, procurement, inventory, assets and human resources into one integrated platform so every team works from the same data and the same processes",
        primaryButton: "Talk to ERP Expert",
        secondaryButton: "Explore Apollo",
        stats: [
            { icon: AccountTreeOutlinedIcon, value: "Modular", label: "Business Processes" },
            { icon: HubOutlinedIcon, value: "Integration", label: "API + Ecosystem" },
            { icon: InsightsOutlinedIcon, value: "Real-Time", label: "Reporting" },
            { icon: AutorenewOutlinedIcon, value: "Fullcycle", label: "Implementation" },
        ],
    },
    overview: {
        title: "Built for Core Business Processes at Enterprise Scale",
        paragraphs: [
            "An enterprise resource planning (ERP) platform is software that helps organizations manage core business processes such as finance, procurement, inventory, assets and human resources in one connected system.",
            "Apollo replaces disconnected spreadsheets and standalone applications with integrated modules that share master data, approval workflows and reporting, so management gets a single, reliable view of operations and teams spend less time reconciling data.",
        ],
        image: imgPlaceholder,
        challenges: [
            { icon: StorageOutlinedIcon, title: "Siloed Business Data", description: "Connect finance, procurement, inventory and HR data in one platform" },
            { icon: ContentPasteOffOutlinedIcon, title: "Manual Processes", description: "Replace spreadsheets and paper approvals with configurable workflows" },
            { icon: VisibilityOffOutlinedIcon, title: "Limited Visibility", description: "Give management real-time insight into cost, budget and performance" },
            { icon: GavelOutlinedIcon, title: "Compliance & Control", description: "Enforce approval hierarchies, audit trails and internal policies" },
        ],
    },
    lifecycle: {
        title: "Run Core Business Operations End to End",
        description: "Apollo connects the processes that keep an organization running from planning and purchasing to accounting, assets and people",
        items: [
            { label: "Finance", title: "Financial management & accounting", description: "Manage general ledger, accounts payable and receivable, budgeting and financial closing in one integrated finance module.", image: imgPlaceholder },
            { label: "Procurement", title: "Procurement & purchasing", description: "Digitize purchase requests, approvals, purchase orders and vendor management with full traceability.", image: imgPlaceholder },
            { label: "Inventory", title: "Inventory & warehouse", description: "Track stock levels, movements and valuation across warehouses to keep materials available without overstocking.", image: imgPlaceholder },
            { label: "Assets", title: "Asset management", description: "Register, maintain and depreciate company assets with a complete history of location, condition and value.", image: imgPlaceholder },
            { label: "Human Resources", title: "Human resources & payroll", description: "Manage employee data, attendance, leave and payroll so HR processes stay connected to finance.", image: imgPlaceholder },
            { label: "Reporting", title: "Reporting & analytics", description: "Turn transactions into real-time dashboards and reports that support faster management decisions.", image: imgPlaceholder },
        ],
    },
    features: {
        title: "Everything Your Core Operations Need in One Platform",
        items: [
            { title: "Integrated Master Data", description: "One source of truth for organizations, vendors, items, accounts and employees across every module", image: imgPlaceholder },
            { title: "Configurable Approval Workflows", description: "Multi-level approvals that follow your organization's structure and authority matrix", image: imgPlaceholder },
            { title: "Budget Control", description: "Plan budgets and check commitments against them before spending happens", image: imgPlaceholder },
            { title: "Multi-Company & Multi-Branch", description: "Manage multiple entities, branches and cost centers with consolidated reporting", image: imgPlaceholder },
            { title: "Audit Trail", description: "Every transaction and approval is recorded to support internal control and audits", image: imgPlaceholder },
            { title: "Real-Time Dashboards", description: "Monitor financial and operational performance with up-to-date dashboards", image: imgPlaceholder },
            { title: "Open Integration", description: "APIs that connect Apollo with existing operational systems, banks and partner platforms", image: imgPlaceholder },
        ],
    },
    howItWorks: {
        title: "How ASYST Delivers Apollo",
        items: [
            { label: "Assess & Configure", title: "Fit the platform to your processes", description: "Our team maps your business processes and configures Apollo modules, master data and workflows to match how your organization operates.", image: imgPlaceholder },
            { label: "Integrate & Migrate", title: "Connect systems and move data safely", description: "Existing data is migrated and Apollo is integrated with the operational systems your teams already rely on.", image: imgPlaceholder },
            { label: "Support & Evolve", title: "Grow with ongoing support", description: "After go-live, ASYST supports users, monitors the platform and extends modules as your organization grows.", image: imgPlaceholder },
        ],
    },
    businessModels: {
        title: "ERP for Every Kind of Enterprise",
        items: [
            { icon: FlightOutlinedIcon, title: "Aviation", points: ["airline back office", "maintenance procurement", "spare part inventory", "cost control"] },
            { icon: GavelOutlinedIcon, title: "Government & State-Owned", points: ["budget governance", "procurement compliance", "asset registry", "audit trail"] },
            { icon: LocalShippingOutlinedIcon, title: "Transportation & Logistics", points: ["fleet assets", "warehouse inventory", "vendor management", "operational costing"] },
            { icon: AccountBalanceOutlinedIcon, title: "Financial Services", points: ["financial consolidation", "approval hierarchy", "regulatory reporting", "internal control"] },
            { icon: BusinessOutlinedIcon, title: "Corporate Enterprise", points: ["multi-company", "shared services", "HR & payroll", "management reporting"] },
        ],
    },
    faq: {
        title: "Apollo ERP FAQ",
        items: [
            { question: "What is Apollo?", answer: "Apollo is ASYST's enterprise resource planning platform that brings core business processes such as finance, procurement, inventory, assets and human resources into one integrated system." },
            { question: "Which modules does Apollo include?", answer: "Apollo covers financial management, procurement, inventory, asset management, human resources and reporting. Modules can be implemented together or in stages." },
            { question: "Can Apollo integrate with our existing systems?", answer: "Yes. Apollo provides APIs to connect with existing operational systems, banking platforms and partner applications." },
            { question: "Can Apollo be configured to our approval structure?", answer: "Yes. Approval workflows, authority matrices and organization structures are configurable to match your internal policies." },
            { question: "Does Apollo support multiple companies or branches?", answer: "Yes. Apollo supports multiple entities, branches and cost centers with consolidated reporting." },
            { question: "Does ASYST provide implementation and support?", answer: "Yes. ASYST handles process assessment, configuration, data migration, integration, training and ongoing support." },
        ],
    },
    cta: {
        title: "Ready to Connect Your Core Business Operations?",
        description: "Talk with our ERP specialists about your business processes, systems and operational goals",
        button: "Request product demo",
    },
}

// ---------- terjemahan ID (struktur & urutan sama dengan apolloDetailEn) ----------

export const ApolloDetailConst = localized(apolloDetailEn, {
    hero: {
        title: "Enterprise Resource Planning Terintegrasi untuk Operasional yang Terhubung",
        description: "Satukan keuangan, pengadaan, inventori, aset, dan SDM dalam satu platform terintegrasi agar setiap tim bekerja dengan data dan proses yang sama",
        primaryButton: "Hubungi Ahli ERP",
        secondaryButton: "Jelajahi Apollo",
        stats: [
            { label: "Proses Bisnis" },
            { label: "API + Ekosistem" },
            { label: "Pelaporan" },
            { label: "Implementasi" },
        ],
    },
    overview: {
        title: "Dibangun untuk Proses Bisnis Inti Skala Enterprise",
        paragraphs: [
            "Platform enterprise resource planning (ERP) adalah software yang membantu organisasi mengelola proses bisnis inti seperti keuangan, pengadaan, inventori, aset, dan sumber daya manusia dalam satu sistem yang terhubung.",
            "Apollo menggantikan spreadsheet dan aplikasi terpisah dengan modul terintegrasi yang berbagi master data, alur persetujuan, dan pelaporan, sehingga manajemen mendapatkan satu gambaran operasional yang andal dan tim tidak lagi menghabiskan waktu merekonsiliasi data.",
        ],
        challenges: [
            { title: "Data Bisnis Terpisah", description: "Hubungkan data keuangan, pengadaan, inventori, dan SDM dalam satu platform" },
            { title: "Proses Manual", description: "Ganti spreadsheet dan persetujuan kertas dengan alur kerja yang dapat dikonfigurasi" },
            { title: "Visibilitas Terbatas", description: "Beri manajemen insight real-time atas biaya, anggaran, dan kinerja" },
            { title: "Kepatuhan & Kontrol", description: "Terapkan hierarki persetujuan, jejak audit, dan kebijakan internal" },
        ],
    },
    lifecycle: {
        title: "Jalankan Operasional Bisnis Inti dari Hulu ke Hilir",
        description: "Apollo menghubungkan proses yang menjaga organisasi tetap berjalan, mulai dari perencanaan dan pembelian hingga akuntansi, aset, dan SDM",
        items: [
            { label: "Keuangan", title: "Manajemen keuangan & akuntansi", description: "Kelola buku besar, utang dan piutang, anggaran, serta tutup buku dalam satu modul keuangan terintegrasi." },
            { label: "Pengadaan", title: "Pengadaan & pembelian", description: "Digitalisasi permintaan pembelian, persetujuan, purchase order, dan manajemen vendor dengan jejak yang lengkap." },
            { label: "Inventori", title: "Inventori & gudang", description: "Pantau level stok, pergerakan, dan valuasi di seluruh gudang agar material tetap tersedia tanpa kelebihan stok." },
            { label: "Aset", title: "Manajemen aset", description: "Daftarkan, rawat, dan susutkan aset perusahaan dengan riwayat lokasi, kondisi, dan nilai yang lengkap." },
            { label: "SDM", title: "Sumber daya manusia & penggajian", description: "Kelola data karyawan, kehadiran, cuti, dan penggajian agar proses SDM tetap terhubung dengan keuangan." },
            { label: "Pelaporan", title: "Pelaporan & analitik", description: "Ubah transaksi menjadi dashboard dan laporan real-time yang mendukung keputusan manajemen lebih cepat." },
        ],
    },
    features: {
        title: "Semua Kebutuhan Operasional Inti dalam Satu Platform",
        items: [
            { title: "Master Data Terintegrasi", description: "Satu sumber data untuk organisasi, vendor, item, akun, dan karyawan di seluruh modul" },
            { title: "Alur Persetujuan yang Dapat Dikonfigurasi", description: "Persetujuan bertingkat yang mengikuti struktur organisasi dan matriks kewenangan Anda" },
            { title: "Kontrol Anggaran", description: "Rencanakan anggaran dan periksa komitmen terhadapnya sebelum pengeluaran terjadi" },
            { title: "Multi-Perusahaan & Multi-Cabang", description: "Kelola banyak entitas, cabang, dan cost center dengan pelaporan konsolidasi" },
            { title: "Jejak Audit", description: "Setiap transaksi dan persetujuan tercatat untuk mendukung kontrol internal dan audit" },
            { title: "Dashboard Real-Time", description: "Pantau kinerja keuangan dan operasional melalui dashboard yang selalu terbaru" },
            { title: "Integrasi Terbuka", description: "API yang menghubungkan Apollo dengan sistem operasional, bank, dan platform mitra yang sudah ada" },
        ],
    },
    howItWorks: {
        title: "Bagaimana ASYST Menghadirkan Apollo",
        items: [
            { label: "Analisis & Konfigurasi", title: "Sesuaikan platform dengan proses Anda", description: "Tim kami memetakan proses bisnis Anda dan mengonfigurasi modul, master data, serta alur kerja Apollo sesuai cara organisasi Anda beroperasi." },
            { label: "Integrasi & Migrasi", title: "Hubungkan sistem dan pindahkan data dengan aman", description: "Data yang ada dimigrasikan dan Apollo diintegrasikan dengan sistem operasional yang sudah digunakan tim Anda." },
            { label: "Dukungan & Pengembangan", title: "Berkembang dengan dukungan berkelanjutan", description: "Setelah go-live, ASYST mendampingi pengguna, memantau platform, dan mengembangkan modul seiring pertumbuhan organisasi Anda." },
        ],
    },
    businessModels: {
        title: "ERP untuk Setiap Jenis Perusahaan",
        items: [
            { title: "Penerbangan", points: ["back office maskapai", "pengadaan perawatan", "inventori suku cadang", "kontrol biaya"] },
            { title: "Pemerintah & BUMN", points: ["tata kelola anggaran", "kepatuhan pengadaan", "registrasi aset", "jejak audit"] },
            { title: "Transportasi & Logistik", points: ["aset armada", "inventori gudang", "manajemen vendor", "perhitungan biaya operasional"] },
            { title: "Jasa Keuangan", points: ["konsolidasi keuangan", "hierarki persetujuan", "pelaporan regulasi", "kontrol internal"] },
            { title: "Perusahaan Korporat", points: ["multi-perusahaan", "shared services", "SDM & penggajian", "laporan manajemen"] },
        ],
    },
    faq: {
        title: "FAQ Apollo ERP",
        items: [
            { question: "Apa itu Apollo?", answer: "Apollo adalah platform enterprise resource planning dari ASYST yang menyatukan proses bisnis inti seperti keuangan, pengadaan, inventori, aset, dan sumber daya manusia dalam satu sistem terintegrasi." },
            { question: "Modul apa saja yang ada di Apollo?", answer: "Apollo mencakup manajemen keuangan, pengadaan, inventori, manajemen aset, sumber daya manusia, dan pelaporan. Modul dapat diimplementasikan sekaligus atau bertahap." },
            { question: "Apakah Apollo dapat terintegrasi dengan sistem kami yang sudah ada?", answer: "Ya. Apollo menyediakan API untuk terhubung dengan sistem operasional, platform perbankan, dan aplikasi mitra yang sudah ada." },
            { question: "Apakah Apollo dapat disesuaikan dengan struktur persetujuan kami?", answer: "Ya. Alur persetujuan, matriks kewenangan, dan struktur organisasi dapat dikonfigurasi sesuai kebijakan internal Anda." },
            { question: "Apakah Apollo mendukung banyak perusahaan atau cabang?", answer: "Ya. Apollo mendukung banyak entitas, cabang, dan cost center dengan pelaporan konsolidasi." },
            { question: "Apakah ASYST menyediakan implementasi dan dukungan?", answer: "Ya. ASYST menangani analisis proses, konfigurasi, migrasi data, integrasi, pelatihan, dan dukungan berkelanjutan." },
        ],
    },
    cta: {
        title: "Siap Menghubungkan Operasional Bisnis Inti Anda?",
        description: "Diskusikan proses bisnis, sistem, dan tujuan operasional Anda bersama spesialis ERP kami",
        button: "Minta demo produk",
    },
});
