import { AccountTreeOutlinedIcon, AutorenewOutlinedIcon, BusinessCenterOutlinedIcon, EngineeringOutlinedIcon, HubOutlinedIcon, InsightsOutlinedIcon, IntegrationInstructionsOutlinedIcon, QueryStatsOutlinedIcon, SwapHorizOutlinedIcon, WidgetsOutlinedIcon } from "components/ui/icons";

import imgDashboard from "assets/asyst/img/background/product/project-management/dashboard.webp";
import imgReports from "assets/asyst/img/background/product/project-management/reports.webp";
import imgDeliverables from "assets/asyst/img/background/product/project-management/deliverables.webp";
import imgRequests from "assets/asyst/img/background/product/elea/detail/business-1.webp";
import imgContract from "assets/asyst/img/background/product/smart-document/contract.webp";
import { EnterpriseProductContent } from "./enterprise.types";
import { localized } from "shared/i18n";

const eProcurementDetailEn: EnterpriseProductContent = {
    seo: {
        title: "E-Procurement System for Enterprise Procurement | ASYST",
        description: "ASYST E-Procurement connects requests, approvals, sourcing, purchase orders, suppliers, documents and analytics in one integrated platform, turning procurement into a transparent, data-driven business process.",
    },
    hero: {
        breadcrumb: "E-Procurement",
        title: "Procurement Digitalization: From Request to Business Decision",
        description: "Connect procurement processes, approvals, transactions, suppliers, documents and data within a single, integrated enterprise platform.",
        primaryButton: "Talk to an Expert",
        secondaryButton: "Explore E-Procurement",
        image: imgDashboard,
        imageAlt: "ASYST e-procurement dashboard",
    },
    sections: [
        {
            type: "challenge",
            title: "Procurement Is Not Just Buying. It Is a Business Process",
            paragraphs: [
                "Modern procurement involves many stakeholders, documents, approvals, suppliers, transactions and systems. When these processes operate in silos, organizations face slow approvals, inconsistent data, difficulty monitoring suppliers, fulfillment delays and limited visibility into procurement spending.",
            ],
            items: [
                { title: "Manual Requests", description: "Procurement requests still rely on emails, spreadsheets or separate documents." },
                { title: "Fragmented Approvals", description: "Approvals are difficult to monitor and depend on person-to-person communication." },
                { title: "Limited Supplier Visibility", description: "Supplier, quotation, transaction and performance data are not yet integrated." },
                { title: "Disconnected Systems", description: "Procurement teams must switch between applications to complete a single process." },
                { title: "Limited Procurement Analytics", description: "Transaction data is available but difficult to turn into business insights." },
                { title: "Low Process Visibility", description: "Management struggles to see the real-time status of procurement." },
            ],
        },
        {
            type: "overview",
            title: "A Single Platform to Manage the Entire Procurement Cycle",
            paragraphs: [
                "ASYST E-Procurement is designed to connect people, processes, technology and data, transforming procurement from a series of isolated administrative tasks into an integral part of the company's digital operating model.",
            ],
            image: imgRequests,
            cards: [
                { icon: HubOutlinedIcon, title: "Centralized Procurement", description: "Manage all procurement activities from a single platform." },
                { icon: AutorenewOutlinedIcon, title: "Workflow Automation", description: "Automate request, approval, purchasing and fulfillment processes based on your organization's business rules." },
                { icon: SwapHorizOutlinedIcon, title: "Integrated Supplier Process", description: "Connect procurement activities with suppliers and transactions to improve visibility and control." },
                { icon: AccountTreeOutlinedIcon, title: "Enterprise Integration", description: "Integrate procurement with other enterprise systems such as ERP, finance, HR, inventory, payment, identity and data platforms." },
                { icon: QueryStatsOutlinedIcon, title: "Procurement Visibility", description: "See the status of requests, approvals, transactions, fulfillment, spending and supplier performance." },
                { icon: InsightsOutlinedIcon, title: "Data-Driven Decisions", description: "Turn procurement data into insights for budgeting, supplier strategy, cost control and operational planning." },
            ],
        },
        {
            type: "timeline",
            layout: "split",
            mediaFirst: true,
            title: "From Request to Business Decision",
            description: "ASYST E-Procurement connects every stage of procurement within a single digital workflow.",
            image: imgDashboard,
            items: [
                { title: "Request", lead: "Capture requirements in a structured way.", description: "Employees or business units can create procurement requests based on needs, categories, budgets and supporting information." },
                { title: "Approval", lead: "Make sure every procurement process follows governance standards.", description: "Approval workflows can be based on organizational structure, transaction value, procurement category, budget and business rules." },
                { title: "Transaction", lead: "Manage purchasing activities in a controlled way.", description: "The procurement team can manage transactions, suppliers, quotations, purchase orders and related documents." },
                { title: "Business Decision", lead: "Use data to make better decisions.", description: "Procurement insights support strategic sourcing, cost optimization, supplier management, budgeting and operational planning." },
            ],
        },
        {
            type: "capabilities",
            heading: "column",
            title: "Procurement Modules Built for Enterprise Processes",
            description: "Manage purchase requests digitally, including requirements, categories, budgets, requesters, priorities and supporting documents.",
            image: imgReports,
            items: [
                { title: "Approval Workflow", description: "Automate approvals based on organization, position, transaction value, procurement category and business rules." },
                { title: "Supplier Management", description: "Maintain supplier profiles, registration, qualification documents and performance records in one place." },
                { title: "Sourcing and Quotation", description: "Invite suppliers, collect and compare quotations, and select the best offer transparently." },
                { title: "Purchase Order", description: "Create, approve and send purchase orders that are linked to the original request and budget." },
                { title: "Procurement Document Management", description: "Store contracts, quotations, purchase orders and supporting documents digitally with a complete history." },
                { title: "Fulfillment Tracking", description: "Monitor deliveries, goods receipts and invoices until every order is fulfilled." },
                { title: "Procurement Dashboard", description: "Track spending, cycle times, supplier performance and process status in one dashboard." },
            ],
        },
        {
            type: "architecture",
            mediaFirst: true,
            title: "E-Procurement as Part of Your Enterprise Digital Architecture",
            description: "E-Procurement can be positioned as part of ASYST's broader solution portfolio.",
            tabs: [
                {
                    label: "Procurement Ecosystem",
                    title: "Connecting People, Processes and Data",
                    paragraphs: ["E-procurement is not just an application for the procurement team. The platform must connect every stakeholder involved in the procurement process."],
                    roles: [
                        { title: "Requester", description: "Creates and monitors procurement requirements." },
                        { title: "Procurement Team", description: "Manages sourcing, suppliers, transactions and fulfillment." },
                        { title: "Approver", description: "Reviews and approves requests based on business rules." },
                        { title: "Finance", description: "Monitors budgets, transactions and financial reconciliation." },
                        { title: "Supplier", description: "Interacts with the procurement process in line with the organization's needs." },
                        { title: "Management", description: "Gains visibility into procurement performance and business impact." },
                    ],
                    image: imgRequests,
                },
                {
                    label: "Integration-Ready Architecture",
                    title: "Designed to Connect with Enterprise Systems",
                    paragraphs: ["Procurement data flows to and from the systems that manage budgets, assets and payments."],
                    points: ["ERP and general ledger", "Budgeting and finance", "Inventory and asset management", "HR and organizational structure", "Payment and banking", "Identity and access management"],
                    image: imgDashboard,
                },
                {
                    label: "Control without Complexity",
                    title: "Governance Built into Every Step",
                    paragraphs: ["Controls are applied automatically, so teams can move fast without bypassing policy."],
                    points: ["Configurable approval matrix", "Budget checks before commitment", "Segregation of duties", "Complete audit trail", "Policy-based supplier selection"],
                    image: imgContract,
                },
                {
                    label: "Procurement Analytics",
                    title: "Insights from Every Transaction",
                    paragraphs: ["Procurement data becomes a source of insight for cost, supplier and process decisions."],
                    points: ["Spend analysis by category and unit", "Supplier performance scoring", "Procurement cycle time", "Budget versus actual spending", "Savings tracking"],
                    image: imgReports,
                },
                {
                    label: "Measurable Outcomes",
                    title: "Results the Business Can Measure",
                    paragraphs: ["A connected procurement process delivers outcomes that matter to both operations and management."],
                    points: ["Shorter request-to-order time", "Lower risk of non-compliant purchasing", "Better supplier performance", "More accurate budget control", "Transparent procurement reporting"],
                    image: imgDeliverables,
                },
            ],
        },
        {
            type: "expertise",
            title: "More than Procurement Software",
            description: "ASYST's strength lies not only in application development, but in the combination of enterprise product capability, integration expertise, domain knowledge and experience implementing enterprise solutions.",
            items: [
                { icon: BusinessCenterOutlinedIcon, title: "Enterprise Capability", description: "Building digital solutions designed for business process needs at enterprise scale." },
                { icon: IntegrationInstructionsOutlinedIcon, title: "Integration Expertise", description: "Connecting applications with existing enterprise systems through APIs, integration layers and the right technology architecture." },
                { icon: EngineeringOutlinedIcon, title: "Technology Expertise", description: "Understanding the complexity of business processes in large organizations and industries with demanding operational requirements." },
                { icon: WidgetsOutlinedIcon, title: "Delivery", description: "Combining technology delivery with an implementation approach that considers stakeholders, governance, processes and operational requirements." },
            ],
        },
    ],
    faq: {
        title: "FAQ about E-Procurement",
        items: [
            { question: "What is e-procurement?", answer: "E-procurement is a digital system for managing the procurement process electronically, from requests, approvals, sourcing, transactions and supplier management to fulfillment and reporting." },
            { question: "What are the benefits of e-procurement for companies?", answer: "Companies gain faster approvals, better budget control, transparent supplier selection, fewer manual errors, a complete audit trail and clear visibility into procurement spending." },
            { question: "Can e-procurement be integrated with ERP?", answer: "Yes. E-procurement can exchange data with ERP, finance, inventory and other enterprise systems so budgets, purchase orders and invoices stay consistent." },
            { question: "Can government institutions use e-procurement?", answer: "Yes. Structured approvals, policy-based controls and a complete audit trail support the transparency and accountability that public sector procurement requires." },
            { question: "Is e-procurement only for the procurement department?", answer: "No. Requesters, approvers, finance, suppliers and management all take part in the process, and the platform connects each of them." },
            { question: "What is the difference between e-procurement and a purchase order system?", answer: "A purchase order system focuses on creating orders. E-procurement covers the full cycle, including requests, approvals, sourcing, supplier management, fulfillment and analytics." },
        ],
    },
    cta: {
        title: "Prepare Procurement for More Connected Enterprise Operations",
        description: "Procurement digitalization is not just about replacing manual processes with applications. Organizations need a platform that connects people, processes, systems, suppliers and data to create a more transparent procurement process and enable better business decisions.",
        button: "Talk to an Expert",
    },
};

export const EProcurementDetailConst = localized(eProcurementDetailEn, {
    seo: {
        title: "Sistem E-Procurement untuk Pengadaan Enterprise | ASYST",
        description: "E-Procurement ASYST menghubungkan pengajuan, persetujuan, sourcing, purchase order, pemasok, dokumen, dan analitik dalam satu platform terintegrasi, menjadikan pengadaan proses bisnis yang transparan dan berbasis data.",
    },
    hero: {
        title: "Digitalisasi Pengadaan: Dari Pengajuan hingga Keputusan Bisnis",
        description: "Hubungkan proses pengadaan, persetujuan, transaksi, pemasok, dokumen, dan data dalam satu platform enterprise yang terintegrasi.",
        primaryButton: "Hubungi Ahli Kami",
        secondaryButton: "Jelajahi E-Procurement",
        imageAlt: "Dashboard e-procurement ASYST",
    },
    sections: [
        {
            title: "Pengadaan Bukan Sekadar Membeli. Pengadaan Adalah Proses Bisnis",
            paragraphs: [
                "Pengadaan modern melibatkan banyak pemangku kepentingan, dokumen, persetujuan, pemasok, transaksi, dan sistem. Ketika proses ini berjalan terpisah, organisasi menghadapi persetujuan yang lambat, data yang tidak konsisten, kesulitan memantau pemasok, keterlambatan pemenuhan, dan visibilitas pengeluaran yang terbatas.",
            ],
            items: [
                { title: "Pengajuan Manual", description: "Pengajuan pengadaan masih bergantung pada email, spreadsheet, atau dokumen terpisah." },
                { title: "Persetujuan Terfragmentasi", description: "Persetujuan sulit dipantau dan bergantung pada komunikasi antarindividu." },
                { title: "Visibilitas Pemasok Terbatas", description: "Data pemasok, penawaran, transaksi, dan kinerja belum terintegrasi." },
                { title: "Sistem Tidak Terhubung", description: "Tim pengadaan harus berpindah antaraplikasi untuk menyelesaikan satu proses." },
                { title: "Analitik Pengadaan Terbatas", description: "Data transaksi tersedia tetapi sulit diubah menjadi insight bisnis." },
                { title: "Visibilitas Proses Rendah", description: "Manajemen kesulitan melihat status pengadaan secara real-time." },
            ],
        },
        {
            title: "Satu Platform untuk Mengelola Seluruh Siklus Pengadaan",
            paragraphs: [
                "ASYST E-Procurement dirancang untuk menghubungkan orang, proses, teknologi, dan data, mengubah pengadaan dari rangkaian tugas administratif yang terpisah menjadi bagian integral dari model operasional digital perusahaan.",
            ],
            cards: [
                { title: "Pengadaan Terpusat", description: "Kelola seluruh aktivitas pengadaan dari satu platform." },
                { title: "Otomatisasi Alur Kerja", description: "Otomatiskan proses pengajuan, persetujuan, pembelian, dan pemenuhan berdasarkan aturan bisnis organisasi." },
                { title: "Proses Pemasok Terintegrasi", description: "Hubungkan aktivitas pengadaan dengan pemasok dan transaksi untuk meningkatkan visibilitas dan kontrol." },
                { title: "Integrasi Enterprise", description: "Integrasikan pengadaan dengan sistem enterprise lain seperti ERP, keuangan, HR, inventaris, pembayaran, identitas, dan platform data." },
                { title: "Visibilitas Pengadaan", description: "Lihat status pengajuan, persetujuan, transaksi, pemenuhan, pengeluaran, dan kinerja pemasok." },
                { title: "Keputusan Berbasis Data", description: "Ubah data pengadaan menjadi insight untuk penganggaran, strategi pemasok, pengendalian biaya, dan perencanaan operasional." },
            ],
        },
        {
            title: "Dari Pengajuan hingga Keputusan Bisnis",
            description: "ASYST E-Procurement menghubungkan setiap tahap pengadaan dalam satu alur kerja digital.",
            items: [
                { title: "Pengajuan", lead: "Tangkap kebutuhan secara terstruktur.", description: "Karyawan atau unit bisnis dapat membuat pengajuan pengadaan berdasarkan kebutuhan, kategori, anggaran, dan informasi pendukung." },
                { title: "Persetujuan", lead: "Pastikan setiap proses pengadaan mengikuti standar tata kelola.", description: "Alur persetujuan dapat didasarkan pada struktur organisasi, nilai transaksi, kategori pengadaan, anggaran, dan aturan bisnis." },
                { title: "Transaksi", lead: "Kelola aktivitas pembelian secara terkendali.", description: "Tim pengadaan dapat mengelola transaksi, pemasok, penawaran, purchase order, dan dokumen terkait." },
                { title: "Keputusan Bisnis", lead: "Gunakan data untuk keputusan yang lebih baik.", description: "Insight pengadaan mendukung strategic sourcing, optimalisasi biaya, manajemen pemasok, penganggaran, dan perencanaan operasional." },
            ],
        },
        {
            title: "Modul Pengadaan untuk Proses Enterprise",
            description: "Kelola permintaan pembelian secara digital, termasuk kebutuhan, kategori, anggaran, pemohon, prioritas, dan dokumen pendukung.",
            items: [
                { title: "Alur Persetujuan", description: "Otomatiskan persetujuan berdasarkan organisasi, jabatan, nilai transaksi, kategori pengadaan, dan aturan bisnis." },
                { title: "Manajemen Pemasok", description: "Kelola profil, registrasi, dokumen kualifikasi, dan catatan kinerja pemasok di satu tempat." },
                { title: "Sourcing dan Penawaran", description: "Undang pemasok, kumpulkan dan bandingkan penawaran, lalu pilih penawaran terbaik secara transparan." },
                { title: "Purchase Order", description: "Buat, setujui, dan kirim purchase order yang terhubung dengan pengajuan dan anggaran awal." },
                { title: "Manajemen Dokumen Pengadaan", description: "Simpan kontrak, penawaran, purchase order, dan dokumen pendukung secara digital dengan riwayat lengkap." },
                { title: "Pelacakan Pemenuhan", description: "Pantau pengiriman, penerimaan barang, dan invoice hingga setiap pesanan terpenuhi." },
                { title: "Dashboard Pengadaan", description: "Pantau pengeluaran, waktu siklus, kinerja pemasok, dan status proses dalam satu dashboard." },
            ],
        },
        {
            title: "E-Procurement sebagai Bagian dari Arsitektur Digital Enterprise Anda",
            description: "E-Procurement dapat diposisikan sebagai bagian dari portofolio solusi ASYST yang lebih luas.",
            tabs: [
                {
                    label: "Ekosistem Pengadaan",
                    title: "Menghubungkan Orang, Proses, dan Data",
                    paragraphs: ["E-procurement bukan sekadar aplikasi untuk tim pengadaan. Platform harus menghubungkan setiap pemangku kepentingan yang terlibat dalam proses pengadaan."],
                    roles: [
                        { title: "Pemohon", description: "Membuat dan memantau kebutuhan pengadaan." },
                        { title: "Tim Pengadaan", description: "Mengelola sourcing, pemasok, transaksi, dan pemenuhan." },
                        { title: "Pemberi Persetujuan", description: "Meninjau dan menyetujui pengajuan berdasarkan aturan bisnis." },
                        { title: "Keuangan", description: "Memantau anggaran, transaksi, dan rekonsiliasi keuangan." },
                        { title: "Pemasok", description: "Berinteraksi dengan proses pengadaan sesuai kebutuhan organisasi." },
                        { title: "Manajemen", description: "Memperoleh visibilitas atas kinerja dan dampak bisnis pengadaan." },
                    ],
                },
                {
                    label: "Arsitektur Siap Integrasi",
                    title: "Dirancang untuk Terhubung dengan Sistem Enterprise",
                    paragraphs: ["Data pengadaan mengalir dari dan ke sistem yang mengelola anggaran, aset, dan pembayaran."],
                    points: ["ERP dan buku besar", "Penganggaran dan keuangan", "Manajemen inventaris dan aset", "HR dan struktur organisasi", "Pembayaran dan perbankan", "Manajemen identitas dan akses"],
                },
                {
                    label: "Kontrol Tanpa Kerumitan",
                    title: "Tata Kelola di Setiap Tahap",
                    paragraphs: ["Kontrol diterapkan secara otomatis sehingga tim dapat bergerak cepat tanpa melewati kebijakan."],
                    points: ["Matriks persetujuan yang dapat dikonfigurasi", "Pengecekan anggaran sebelum komitmen", "Pemisahan tugas", "Jejak audit lengkap", "Pemilihan pemasok berbasis kebijakan"],
                },
                {
                    label: "Analitik Pengadaan",
                    title: "Insight dari Setiap Transaksi",
                    paragraphs: ["Data pengadaan menjadi sumber insight untuk keputusan biaya, pemasok, dan proses."],
                    points: ["Analisis pengeluaran per kategori dan unit", "Penilaian kinerja pemasok", "Waktu siklus pengadaan", "Anggaran dibandingkan pengeluaran aktual", "Pelacakan penghematan"],
                },
                {
                    label: "Hasil Terukur",
                    title: "Hasil yang Dapat Diukur Bisnis",
                    paragraphs: ["Proses pengadaan yang terhubung memberikan hasil yang penting bagi operasional maupun manajemen."],
                    points: ["Waktu dari pengajuan ke pesanan lebih singkat", "Risiko pembelian tidak patuh lebih rendah", "Kinerja pemasok lebih baik", "Pengendalian anggaran lebih akurat", "Pelaporan pengadaan yang transparan"],
                },
            ],
        },
        {
            title: "Lebih dari Sekadar Software Pengadaan",
            description: "Kekuatan ASYST tidak hanya terletak pada pengembangan aplikasi, tetapi pada kombinasi kapabilitas produk enterprise, keahlian integrasi, pengetahuan domain, dan pengalaman mengimplementasikan solusi enterprise.",
            items: [
                { title: "Kapabilitas Enterprise", description: "Membangun solusi digital yang dirancang untuk kebutuhan proses bisnis berskala enterprise." },
                { title: "Keahlian Integrasi", description: "Menghubungkan aplikasi dengan sistem enterprise yang ada melalui API, lapisan integrasi, dan arsitektur teknologi yang tepat." },
                { title: "Keahlian Teknologi", description: "Memahami kompleksitas proses bisnis di organisasi besar dan industri dengan kebutuhan operasional yang tinggi." },
                { title: "Delivery", description: "Menggabungkan delivery teknologi dengan pendekatan implementasi yang mempertimbangkan pemangku kepentingan, tata kelola, proses, dan kebutuhan operasional." },
            ],
        },
    ],
    faq: {
        title: "Pertanyaan Umum tentang E-Procurement",
        items: [
            { question: "Apa itu e-procurement?", answer: "E-procurement adalah sistem digital untuk mengelola proses pengadaan secara elektronik, mulai dari pengajuan, persetujuan, sourcing, transaksi, dan manajemen pemasok hingga pemenuhan dan pelaporan." },
            { question: "Apa manfaat e-procurement bagi perusahaan?", answer: "Perusahaan memperoleh persetujuan yang lebih cepat, pengendalian anggaran yang lebih baik, pemilihan pemasok yang transparan, kesalahan manual yang lebih sedikit, jejak audit lengkap, dan visibilitas pengeluaran pengadaan yang jelas." },
            { question: "Apakah e-procurement dapat diintegrasikan dengan ERP?", answer: "Ya. E-procurement dapat bertukar data dengan ERP, keuangan, inventaris, dan sistem enterprise lainnya sehingga anggaran, purchase order, dan invoice tetap konsisten." },
            { question: "Apakah instansi pemerintah dapat menggunakan e-procurement?", answer: "Ya. Persetujuan terstruktur, kontrol berbasis kebijakan, dan jejak audit lengkap mendukung transparansi dan akuntabilitas yang dibutuhkan pengadaan sektor publik." },
            { question: "Apakah e-procurement hanya untuk departemen pengadaan?", answer: "Tidak. Pemohon, pemberi persetujuan, keuangan, pemasok, dan manajemen semuanya terlibat dalam proses, dan platform menghubungkan mereka semua." },
            { question: "Apa perbedaan e-procurement dan sistem purchase order?", answer: "Sistem purchase order berfokus pada pembuatan pesanan. E-procurement mencakup seluruh siklus, termasuk pengajuan, persetujuan, sourcing, manajemen pemasok, pemenuhan, dan analitik." },
        ],
    },
    cta: {
        title: "Siapkan Pengadaan untuk Operasional Enterprise yang Lebih Terhubung",
        description: "Digitalisasi pengadaan bukan sekadar mengganti proses manual dengan aplikasi. Organisasi membutuhkan platform yang menghubungkan orang, proses, sistem, pemasok, dan data untuk menciptakan proses pengadaan yang lebih transparan dan keputusan bisnis yang lebih baik.",
        button: "Hubungi Ahli Kami",
    },
});
