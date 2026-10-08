import { StorefrontOutlinedIcon, AutorenewOutlinedIcon, HubOutlinedIcon, FactCheckOutlinedIcon, MailOutlineOutlinedIcon, VisibilityOffOutlinedIcon, GroupsOutlinedIcon, ReceiptLongOutlinedIcon, FlightOutlinedIcon, AccountBalanceOutlinedIcon, FactoryOutlinedIcon, ApartmentOutlinedIcon, BoltOutlinedIcon } from "components/ui/icons";

import imgPlaceholder from "assets/asyst/img/background/product/overview/background-product.webp";
import { ProductDetailContent } from "consts/product-detail.const";
import { localized } from "shared/i18n";

// Konten dua bahasa: konstanta `...En` = teks EN lengkap; ekspor `localized(...En, {...})` di bawah file = terjemahan ID
// (teks saja, struktur & urutan sama).
// Belum ada halaman sumber untuk E-Procurement. Copy disusun dari deskripsi "eProcurement Solution" di
// product overview home.asyst.co.id dan poin procurement pada konten ERP.
// TODO: konfirmasi copy, statistik & FAQ dengan tim produk; ganti gambar placeholder dengan screenshot e-Procurement.

const eProcurementDetailEn: ProductDetailContent = {
    hero: {
        title: "E-Procurement Platform for Transparent, Connected Purchasing",
        description: "A B2B digital platform that centralizes, automates and manages your organization's purchasing operations, connecting buyers and suppliers within a unified environment",
        primaryButton: "Talk to Procurement Expert",
        secondaryButton: "Explore E-Procurement",
        stats: [
            { icon: StorefrontOutlinedIcon, value: "B2B", label: "Buyer & Supplier Portal" },
            { icon: FactCheckOutlinedIcon, value: "End-to-End", label: "Source-to-Pay" },
            { icon: HubOutlinedIcon, value: "Integration", label: "ERP + API" },
            { icon: AutorenewOutlinedIcon, value: "Fullcycle", label: "Implementation" },
        ],
    },
    overview: {
        title: "Built for Procurement Teams That Manage Many Vendors",
        paragraphs: [
            "An e-procurement platform digitizes how organizations buy goods and services, from purchase requests and vendor registration to tenders, evaluation, purchase orders and invoicing.",
            "By bringing buyers and suppliers into one environment with automated approval workflows, ASYST E-Procurement helps organizations shorten purchasing cycles, improve transparency and keep every procurement decision auditable.",
        ],
        image: imgPlaceholder,
        challenges: [
            { icon: MailOutlineOutlinedIcon, title: "Manual Approvals", description: "Replace email and paper approvals with automated, rule-based workflows" },
            { icon: VisibilityOffOutlinedIcon, title: "Limited Spend Visibility", description: "See requests, commitments and spend across units in one place" },
            { icon: GroupsOutlinedIcon, title: "Fragmented Vendor Data", description: "Keep vendor profiles, documents and evaluations in a single register" },
            { icon: ReceiptLongOutlinedIcon, title: "Slow PO-to-Invoice Cycle", description: "Connect purchase orders, receipts and electronic invoices end to end" },
        ],
    },
    lifecycle: {
        title: "One Platform for the Procurement Lifecycle",
        description: "ASYST E-Procurement connects every stage of purchasing, from request to payment, so buyers, approvers and suppliers work from the same information",
        items: [
            { label: "Request", title: "Purchase requests", description: "Business units raise purchase requests that are checked against budgets and routed automatically to the right approvers.", image: imgPlaceholder },
            { label: "Register", title: "Vendor registration", description: "Suppliers register through a self-service portal, submit company documents and keep their profiles up to date for qualification.", image: imgPlaceholder },
            { label: "Source", title: "Sourcing & tender", description: "Publish requests for quotation and tenders to qualified vendors and receive bids electronically within a defined schedule.", image: imgPlaceholder },
            { label: "Evaluate", title: "Bid evaluation", description: "Compare offers on price, technical and administrative criteria with a documented, auditable evaluation process.", image: imgPlaceholder },
            { label: "Award", title: "Award & contract", description: "Award the winning vendor and manage the resulting contract, including terms, values and validity periods.", image: imgPlaceholder },
            { label: "Order", title: "Purchase orders", description: "Generate purchase orders from awarded bids and contracts, with automated approval workflows before release to suppliers.", image: imgPlaceholder },
            { label: "Invoice", title: "Receipt & electronic invoicing", description: "Match goods receipts with purchase orders and supplier e-invoices to speed up verification and payment.", image: imgPlaceholder },
            { label: "Analyze", title: "Spend & vendor analytics", description: "Monitor spend, cycle times and vendor performance from centralized reports and dashboards.", image: imgPlaceholder },
        ],
    },
    features: {
        title: "Everything You Need to Run Digital Procurement",
        items: [
            { title: "Vendor Management", description: "Manage vendor registration, qualification, documents and performance evaluations from one supplier register", image: imgPlaceholder },
            { title: "E-Sourcing & E-Tender", description: "Run requests for quotation, auctions and tenders online with transparent schedules and electronic bid submission", image: imgPlaceholder },
            { title: "Approval Workflow Engine", description: "Configure multi-level approval rules for requests, awards and purchase orders without custom development", image: imgPlaceholder },
            { title: "Purchase Order Management", description: "Create, approve, send and track purchase orders against contracts and budgets", image: imgPlaceholder },
            { title: "Contract Management", description: "Keep contract terms, values and validity periods in one place and act before contracts expire", image: imgPlaceholder },
            { title: "E-Invoicing", description: "Receive supplier invoices electronically and match them against purchase orders and receipts", image: imgPlaceholder },
            { title: "Supplier Portal", description: "Give suppliers one place to register, respond to tenders, receive orders and submit invoices", image: imgPlaceholder },
            { title: "Procurement Analytics", description: "Track spend, savings, cycle times and vendor performance through reports and dashboards", image: imgPlaceholder },
        ],
    },
    howItWorks: {
        title: "From Purchase Request to Payment",
        items: [
            { label: "Buyer Experience", title: "Built for procurement and business teams", description: "Requesters, buyers and approvers work in the same platform, with workflows that route each request, tender and purchase order to the right people automatically.", image: imgPlaceholder },
            { label: "Supplier Experience", title: "A single portal for suppliers", description: "Suppliers register, update their documents, respond to tenders, receive purchase orders and submit invoices through one self-service portal.", image: imgPlaceholder },
            { label: "Integration", title: "Integrates with your ERP and finance systems", description: "E-Procurement connects with ERP, budgeting and finance systems through APIs, so commitments, receipts and invoices flow without re-entry.", image: imgPlaceholder },
        ],
    },
    businessModels: {
        title: "One Procurement Platform for Multiple Industries",
        items: [
            { icon: FlightOutlinedIcon, title: "Aviation", points: ["maintenance & spare parts", "vendor qualification", "tender management", "contract tracking"] },
            { icon: ApartmentOutlinedIcon, title: "State-Owned Enterprises", points: ["transparent tenders", "regulatory compliance", "audit trail", "multi-entity procurement"] },
            { icon: AccountBalanceOutlinedIcon, title: "Banking & Financial", points: ["vendor risk", "approval governance", "budget control", "spend reporting"] },
            { icon: FactoryOutlinedIcon, title: "Manufacturing", points: ["direct material sourcing", "purchase orders", "supplier performance", "receipt matching"] },
            { icon: BoltOutlinedIcon, title: "Energy & Infrastructure", points: ["project procurement", "e-tender", "contract management", "e-invoicing"] },
        ],
    },
    faq: {
        title: "E-Procurement FAQ",
        items: [
            { question: "What is ASYST E-Procurement?", answer: "ASYST E-Procurement is a B2B digital platform that centralizes, automates and manages an organization's purchasing operations, connecting buyers and suppliers within a unified environment." },
            { question: "Which procurement processes are covered?", answer: "Purchase requests, vendor registration and qualification, sourcing and tenders, bid evaluation, awarding, purchase orders, contracts, receipts and electronic invoicing." },
            { question: "Can suppliers access the platform?", answer: "Yes. Suppliers use a self-service portal to register, maintain their documents, respond to tenders, receive purchase orders and submit invoices." },
            { question: "Can approval workflows be configured?", answer: "Yes. Multi-level approval rules can be configured for requests, awards and purchase orders." },
            { question: "Can E-Procurement integrate with our ERP?", answer: "Yes. The platform connects with ERP, budgeting and finance systems through APIs." },
            { question: "Can ASYST support implementation?", answer: "Yes. ASYST supports the full lifecycle, from process design and implementation to integration, go-live and ongoing support." },
        ],
    },
    cta: {
        title: "Ready to Digitize Your Procurement?",
        description: "Talk with our procurement and enterprise technology specialists about your purchasing process, vendors and existing systems",
        button: "Request product demo",
    },
}

// ---------- terjemahan ID (struktur & urutan sama dengan eProcurementDetailEn) ----------

export const EProcurementDetailConst = localized(eProcurementDetailEn, {
    hero: {
        title: "Platform E-Procurement untuk Pengadaan yang Transparan dan Terhubung",
        description: "Platform digital B2B yang memusatkan, mengotomatiskan, dan mengelola operasional pengadaan organisasi Anda, menghubungkan pembeli dan pemasok dalam satu lingkungan terpadu",
        primaryButton: "Hubungi Ahli Pengadaan",
        secondaryButton: "Jelajahi E-Procurement",
        stats: [
            { label: "Portal Pembeli & Pemasok" },
            { label: "Source-to-Pay" },
            { value: "Integrasi", label: "ERP + API" },
            { value: "Fullcycle", label: "Implementasi" },
        ],
    },
    overview: {
        title: "Dibangun untuk Tim Pengadaan yang Mengelola Banyak Vendor",
        paragraphs: [
            "Platform e-procurement mendigitalkan cara organisasi membeli barang dan jasa, mulai dari permintaan pembelian dan registrasi vendor hingga tender, evaluasi, purchase order, dan penagihan.",
            "Dengan menyatukan pembeli dan pemasok dalam satu lingkungan dengan alur persetujuan otomatis, ASYST E-Procurement membantu organisasi mempersingkat siklus pengadaan, meningkatkan transparansi, dan memastikan setiap keputusan pengadaan dapat diaudit.",
        ],
        challenges: [
            { title: "Persetujuan Manual", description: "Ganti persetujuan lewat email dan kertas dengan alur kerja otomatis berbasis aturan" },
            { title: "Visibilitas Belanja Terbatas", description: "Lihat permintaan, komitmen, dan belanja lintas unit di satu tempat" },
            { title: "Data Vendor Terfragmentasi", description: "Simpan profil, dokumen, dan evaluasi vendor dalam satu daftar" },
            { title: "Siklus PO-ke-Faktur yang Lambat", description: "Hubungkan purchase order, penerimaan barang, dan faktur elektronik secara end-to-end" },
        ],
    },
    lifecycle: {
        title: "Satu Platform untuk Seluruh Siklus Pengadaan",
        description: "ASYST E-Procurement menghubungkan setiap tahap pengadaan, dari permintaan hingga pembayaran, sehingga pembeli, pemberi persetujuan, dan pemasok bekerja dari informasi yang sama",
        items: [
            { label: "Permintaan", title: "Permintaan pembelian", description: "Unit bisnis mengajukan permintaan pembelian yang dicek terhadap anggaran dan diteruskan otomatis ke pemberi persetujuan yang tepat." },
            { label: "Registrasi", title: "Registrasi vendor", description: "Pemasok mendaftar melalui portal swalayan, mengunggah dokumen perusahaan, dan menjaga profil tetap terbaru untuk kualifikasi." },
            { label: "Sourcing", title: "Sourcing & tender", description: "Publikasikan permintaan penawaran harga dan tender kepada vendor yang memenuhi syarat, lalu terima penawaran secara elektronik sesuai jadwal." },
            { label: "Evaluasi", title: "Evaluasi penawaran", description: "Bandingkan penawaran berdasarkan kriteria harga, teknis, dan administrasi melalui proses evaluasi yang terdokumentasi dan dapat diaudit." },
            { label: "Penetapan", title: "Penetapan pemenang & kontrak", description: "Tetapkan vendor pemenang dan kelola kontrak yang dihasilkan, termasuk ketentuan, nilai, dan masa berlakunya." },
            { label: "Pemesanan", title: "Purchase order", description: "Buat purchase order dari penawaran dan kontrak yang telah ditetapkan, dengan alur persetujuan otomatis sebelum dikirim ke pemasok." },
            { label: "Faktur", title: "Penerimaan & faktur elektronik", description: "Cocokkan penerimaan barang dengan purchase order dan e-invoice pemasok untuk mempercepat verifikasi dan pembayaran." },
            { label: "Analisis", title: "Analitik belanja & vendor", description: "Pantau belanja, waktu siklus, dan kinerja vendor dari laporan dan dashboard terpusat." },
        ],
    },
    features: {
        title: "Semua yang Anda Butuhkan untuk Menjalankan Pengadaan Digital",
        items: [
            { title: "Manajemen Vendor", description: "Kelola registrasi, kualifikasi, dokumen, dan evaluasi kinerja vendor dari satu daftar pemasok" },
            { title: "E-Sourcing & E-Tender", description: "Jalankan permintaan penawaran harga, lelang, dan tender secara online dengan jadwal transparan dan pengajuan penawaran elektronik" },
            { title: "Mesin Alur Persetujuan", description: "Atur aturan persetujuan bertingkat untuk permintaan, penetapan pemenang, dan purchase order tanpa pengembangan khusus" },
            { title: "Manajemen Purchase Order", description: "Buat, setujui, kirim, dan pantau purchase order terhadap kontrak dan anggaran" },
            { title: "Manajemen Kontrak", description: "Simpan ketentuan, nilai, dan masa berlaku kontrak di satu tempat dan bertindak sebelum kontrak berakhir" },
            { title: "E-Invoicing", description: "Terima faktur pemasok secara elektronik dan cocokkan dengan purchase order dan penerimaan barang" },
            { title: "Portal Pemasok", description: "Beri pemasok satu tempat untuk mendaftar, merespons tender, menerima pesanan, dan mengirim faktur" },
            { title: "Analitik Pengadaan", description: "Pantau belanja, penghematan, waktu siklus, dan kinerja vendor melalui laporan dan dashboard" },
        ],
    },
    howItWorks: {
        title: "Dari Permintaan Pembelian hingga Pembayaran",
        items: [
            { label: "Pengalaman Pembeli", title: "Dibangun untuk tim pengadaan dan bisnis", description: "Pemohon, pembeli, dan pemberi persetujuan bekerja di platform yang sama, dengan alur kerja yang otomatis meneruskan setiap permintaan, tender, dan purchase order ke orang yang tepat." },
            { label: "Pengalaman Pemasok", title: "Satu portal untuk pemasok", description: "Pemasok mendaftar, memperbarui dokumen, merespons tender, menerima purchase order, dan mengirim faktur melalui satu portal swalayan." },
            { label: "Integrasi", title: "Terintegrasi dengan ERP dan sistem keuangan Anda", description: "E-Procurement terhubung dengan sistem ERP, penganggaran, dan keuangan melalui API, sehingga komitmen, penerimaan, dan faktur mengalir tanpa input ulang." },
        ],
    },
    businessModels: {
        title: "Satu Platform Pengadaan untuk Berbagai Industri",
        items: [
            { title: "Penerbangan", points: ["perawatan & suku cadang", "kualifikasi vendor", "manajemen tender", "pelacakan kontrak"] },
            { title: "Badan Usaha Milik Negara", points: ["tender yang transparan", "kepatuhan regulasi", "jejak audit", "pengadaan multi-entitas"] },
            { title: "Perbankan & Keuangan", points: ["risiko vendor", "tata kelola persetujuan", "pengendalian anggaran", "pelaporan belanja"] },
            { title: "Manufaktur", points: ["sourcing bahan baku langsung", "purchase order", "kinerja pemasok", "pencocokan penerimaan barang"] },
            { title: "Energi & Infrastruktur", points: ["pengadaan proyek", "e-tender", "manajemen kontrak", "e-invoicing"] },
        ],
    },
    faq: {
        title: "FAQ E-Procurement",
        items: [
            { question: "Apa itu ASYST E-Procurement?", answer: "ASYST E-Procurement adalah platform digital B2B yang memusatkan, mengotomatiskan, dan mengelola operasional pengadaan organisasi, menghubungkan pembeli dan pemasok dalam satu lingkungan terpadu." },
            { question: "Proses pengadaan apa saja yang tercakup?", answer: "Permintaan pembelian, registrasi dan kualifikasi vendor, sourcing dan tender, evaluasi penawaran, penetapan pemenang, purchase order, kontrak, penerimaan barang, dan faktur elektronik." },
            { question: "Apakah pemasok dapat mengakses platform?", answer: "Ya. Pemasok menggunakan portal swalayan untuk mendaftar, mengelola dokumen, merespons tender, menerima purchase order, dan mengirim faktur." },
            { question: "Apakah alur persetujuan dapat dikonfigurasi?", answer: "Ya. Aturan persetujuan bertingkat dapat dikonfigurasi untuk permintaan, penetapan pemenang, dan purchase order." },
            { question: "Apakah E-Procurement dapat terintegrasi dengan ERP kami?", answer: "Ya. Platform ini terhubung dengan sistem ERP, penganggaran, dan keuangan melalui API." },
            { question: "Apakah ASYST dapat mendukung implementasi?", answer: "Ya. ASYST mendukung seluruh siklus, mulai dari perancangan proses dan implementasi hingga integrasi, go-live, dan dukungan berkelanjutan." },
        ],
    },
    cta: {
        title: "Siap Mendigitalkan Pengadaan Anda?",
        description: "Diskusikan proses pengadaan, vendor, dan sistem yang ada bersama spesialis pengadaan dan teknologi enterprise kami",
        button: "Minta demo produk",
    },
});
