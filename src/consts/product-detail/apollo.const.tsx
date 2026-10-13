import { AccountBalanceWalletOutlinedIcon, BusinessCenterOutlinedIcon, DashboardCustomizeOutlinedIcon, EngineeringOutlinedIcon, FactCheckOutlinedIcon, IntegrationInstructionsOutlinedIcon, LocalShippingOutlinedIcon, SettingsSuggestOutlinedIcon, ShoppingCartOutlinedIcon, WidgetsOutlinedIcon } from "components/ui/icons";

import imgTimeline from "assets/asyst/img/background/product/project-management/timeline.webp";
import imgStreams from "assets/asyst/img/background/product/project-management/streams.webp";
import imgDashboard from "assets/asyst/img/background/product/project-management/dashboard.webp";
import imgDaily from "assets/asyst/img/background/product/project-management/daily.webp";
import { EnterpriseProductContent } from "./enterprise.types";
import { localized } from "shared/i18n";

const apolloDetailEn: EnterpriseProductContent = {
    seo: {
        title: "ERP and Business Management System | ASYST",
        description: "ASYST ERP and business management solutions connect finance, procurement, supply chain, operations, workflows and reporting in one integrated ecosystem that helps organizations work more efficiently.",
    },
    hero: {
        breadcrumb: "ERP and Business Management",
        title: "ERP and Business Management for an Integrated Business",
        description: "Connect business processes, operations, data and enterprise systems in a single ecosystem that helps your organization work more efficiently.",
        primaryButton: "Talk to an Expert",
        secondaryButton: "Explore Product",
        image: imgTimeline,
        imageAlt: "ASYST ERP and business management application",
    },
    sections: [
        {
            type: "challenge",
            title: "A Single Ecosystem to Manage Increasingly Complex Businesses",
            paragraphs: [
                "ERP and business management solutions bring these processes together into a more connected ecosystem, so the organization can build a single source of business information and rely less on manual work.",
            ],
            items: [
                { title: "People", description: "Grant access to each function based on roles, responsibilities and job requirements." },
                { title: "Process", description: "Standardize workflows, approvals, transactions and operational processes." },
                { title: "Data", description: "Consolidate business information into data that is easier to access and analyze." },
                { title: "Integration", description: "Connect ERP with other enterprise applications and operational systems." },
            ],
        },
        {
            type: "overview",
            title: "When Business Systems Are Not Connected",
            paragraphs: [
                "Business complexity does not always come from the volume of transactions. Problems often arise because processes, applications and data are not well connected.",
            ],
            image: imgStreams,
            cards: [
                { tag: "Fragmented Systems", title: "Data Is Scattered Across Applications", description: "Finance, procurement, HR, operations, CRM and other applications can create data silos when they are not properly integrated." },
                { tag: "Manual Processes", title: "Too Much Administrative Work", description: "Repeated data entry, spreadsheets, email approvals and manual processes increase the risk of human error and slow the business down." },
                { tag: "Limited Visibility", title: "Management Struggles to Get Answers", description: "When data comes from many sources, preparing and analyzing reports takes longer." },
                { tag: "Inconsistent Processes", title: "Each Unit Works Differently", description: "Workflow standardization helps the organization improve process control and consistency." },
                { tag: "Difficult Integration", title: "Communicating with Legacy Systems", description: "Enterprises cannot always replace every application at once, so integration capability becomes a crucial part of ERP transformation." },
            ],
        },
        {
            type: "capabilities",
            heading: "column",
            mediaFirst: true,
            title: "ERP Capabilities for Connecting Business Processes",
            description: "ERP and business management solutions can be designed in a modular way to meet organizational needs, with a focus on business processes, system integration and operational requirements.",
            image: imgDashboard,
            items: [
                { icon: AccountBalanceWalletOutlinedIcon, title: "Financial Management", description: "Help the organization manage financial information and business processes related to budgeting, transactions, reporting and financial visibility." },
                { icon: ShoppingCartOutlinedIcon, title: "Procurement Management", description: "Manage purchase requests, approvals, suppliers and purchase orders in a process connected to budgets and finance." },
                { icon: LocalShippingOutlinedIcon, title: "Supply Chain Management", description: "Coordinate inventory, warehousing, distribution and demand so materials and products are available when they are needed." },
                { icon: SettingsSuggestOutlinedIcon, title: "Operations Management", description: "Plan, run and monitor day-to-day operational activities with consistent data across units." },
                { icon: FactCheckOutlinedIcon, title: "Workflow and Approval", description: "Standardize approvals and business workflows based on roles, authority and company policies." },
                { icon: DashboardCustomizeOutlinedIcon, title: "Reporting and Management Dashboard", description: "Present financial and operational performance in real-time reports and dashboards for management." },
            ],
        },
        {
            type: "timeline",
            layout: "split",
            title: "From Transactions to Business Decisions",
            description: "ERP is not just a repository for transactions. Its real value emerges when those transactions produce information that can be used to control operations and make decisions.",
            image: imgDaily,
            items: [
                { title: "Request", description: "Submit business requirements through a structured, documented process." },
                { title: "Approval", description: "Validate and approve requests based on company rules, authority and policies." },
                { title: "Transaction", description: "Record every transaction centrally to keep data consistent and accurate." },
                { title: "Decision", description: "Turn transaction data into reports and insights that support management decisions." },
            ],
        },
        {
            type: "expertise",
            title: "Why ASYST for Enterprise Business Management?",
            items: [
                { icon: BusinessCenterOutlinedIcon, title: "Enterprise Capability", description: "ASYST has experience building and developing technology solutions for enterprise needs, including management, commercial, operations, cargo and IT services." },
                { icon: IntegrationInstructionsOutlinedIcon, title: "Integration Expertise", description: "Connecting new solutions with existing applications, platforms, data sources and systems is a key part of ASYST's enterprise approach." },
                { icon: EngineeringOutlinedIcon, title: "Technology Expertise", description: "Experience in complex business environments helps ASYST understand that technology must follow business processes, not the other way around." },
                { icon: WidgetsOutlinedIcon, title: "Delivery", description: "ASYST focuses on more than system development. The SCM Phase 2 project, for example, shows a continuous approach that builds on previously established systems." },
            ],
        },
    ],
    faq: {
        title: "FAQ about ERP and Business Management",
        items: [
            { question: "What is ERP and business management?", answer: "ERP and business management is an enterprise software approach that helps organizations manage and integrate the business processes, data, workflows, operations and systems used by different corporate functions." },
            { question: "What are the benefits of ERP for a company?", answer: "ERP gives a company a single source of business data, standardized processes, less manual work, stronger financial control and faster, more reliable reporting for management." },
            { question: "Does an ERP system have to replace all existing systems?", answer: "No. ERP can be implemented in stages and integrated with existing applications, so the organization can modernize without replacing everything at once." },
            { question: "Can ASYST develop solutions tailored to a company's needs?", answer: "Yes. ASYST designs modular solutions and custom development that follow each organization's business processes, structure and integration requirements." },
            { question: "Can ERP be used for supply chain management?", answer: "Yes. ERP can cover procurement, inventory, warehousing and distribution, and connect them with finance and operations for end-to-end supply chain visibility." },
            { question: "Which industries can use ERP solutions?", answer: "ERP solutions suit many industries, including aviation, transportation, manufacturing, government, state-owned enterprises and service companies." },
        ],
    },
    cta: {
        title: "Build a More Connected Enterprise",
        description: "Every organization has unique processes, systems and challenges. With ASYST, you can design an ERP and business management approach that fits your business needs, integrates with your enterprise technology landscape and targets clear business outcomes.",
        button: "Talk to an Expert",
    },
};

export const ApolloDetailConst = localized(apolloDetailEn, {
    seo: {
        title: "Sistem ERP dan Manajemen Bisnis | ASYST",
        description: "Solusi ERP dan manajemen bisnis ASYST menghubungkan keuangan, pengadaan, rantai pasok, operasional, alur kerja, dan pelaporan dalam satu ekosistem terintegrasi yang membantu organisasi bekerja lebih efisien.",
    },
    hero: {
        breadcrumb: "ERP dan Manajemen Bisnis",
        title: "ERP dan Manajemen Bisnis untuk Bisnis yang Terintegrasi",
        description: "Hubungkan proses bisnis, operasional, data, dan sistem enterprise dalam satu ekosistem yang membantu organisasi Anda bekerja lebih efisien.",
        primaryButton: "Hubungi Ahli Kami",
        secondaryButton: "Jelajahi Produk",
        imageAlt: "Aplikasi ERP dan manajemen bisnis ASYST",
    },
    sections: [
        {
            title: "Satu Ekosistem untuk Mengelola Bisnis yang Semakin Kompleks",
            paragraphs: [
                "Solusi ERP dan manajemen bisnis menyatukan berbagai proses ke dalam ekosistem yang lebih terhubung, sehingga organisasi dapat membangun satu sumber informasi bisnis dan mengurangi ketergantungan pada pekerjaan manual.",
            ],
            items: [
                { title: "Orang", description: "Berikan akses ke setiap fungsi berdasarkan peran, tanggung jawab, dan kebutuhan pekerjaan." },
                { title: "Proses", description: "Standarkan alur kerja, persetujuan, transaksi, dan proses operasional." },
                { title: "Data", description: "Satukan informasi bisnis menjadi data yang lebih mudah diakses dan dianalisis." },
                { title: "Integrasi", description: "Hubungkan ERP dengan aplikasi enterprise dan sistem operasional lainnya." },
            ],
        },
        {
            title: "Ketika Sistem Bisnis Tidak Terhubung",
            paragraphs: [
                "Kompleksitas bisnis tidak selalu berasal dari volume transaksi. Masalah sering muncul karena proses, aplikasi, dan data tidak terhubung dengan baik.",
            ],
            cards: [
                { tag: "Sistem Terfragmentasi", title: "Data Tersebar di Berbagai Aplikasi", description: "Keuangan, pengadaan, HR, operasional, CRM, dan aplikasi lain dapat menciptakan silo data jika tidak terintegrasi dengan baik." },
                { tag: "Proses Manual", title: "Terlalu Banyak Pekerjaan Administratif", description: "Input data berulang, spreadsheet, persetujuan via email, dan proses manual meningkatkan risiko kesalahan dan memperlambat bisnis." },
                { tag: "Visibilitas Terbatas", title: "Manajemen Sulit Memperoleh Jawaban", description: "Ketika data berasal dari banyak sumber, penyusunan dan analisis laporan membutuhkan waktu lebih lama." },
                { tag: "Proses Tidak Konsisten", title: "Setiap Unit Bekerja dengan Cara Berbeda", description: "Standardisasi alur kerja membantu organisasi meningkatkan kontrol dan konsistensi proses." },
                { tag: "Integrasi Sulit", title: "Berkomunikasi dengan Sistem Lama", description: "Enterprise tidak selalu dapat mengganti semua aplikasi sekaligus, sehingga kapabilitas integrasi menjadi bagian penting dari transformasi ERP." },
            ],
        },
        {
            title: "Kapabilitas ERP untuk Menghubungkan Proses Bisnis",
            description: "Solusi ERP dan manajemen bisnis dapat dirancang secara modular sesuai kebutuhan organisasi, dengan fokus pada proses bisnis, integrasi sistem, dan kebutuhan operasional.",
            items: [
                { title: "Manajemen Keuangan", description: "Bantu organisasi mengelola informasi keuangan dan proses bisnis terkait penganggaran, transaksi, pelaporan, dan visibilitas keuangan." },
                { title: "Manajemen Pengadaan", description: "Kelola permintaan pembelian, persetujuan, pemasok, dan purchase order dalam proses yang terhubung dengan anggaran dan keuangan." },
                { title: "Manajemen Rantai Pasok", description: "Koordinasikan inventaris, pergudangan, distribusi, dan permintaan agar material dan produk tersedia saat dibutuhkan." },
                { title: "Manajemen Operasional", description: "Rencanakan, jalankan, dan pantau aktivitas operasional harian dengan data yang konsisten di seluruh unit." },
                { title: "Alur Kerja dan Persetujuan", description: "Standarkan persetujuan dan alur kerja bisnis berdasarkan peran, kewenangan, dan kebijakan perusahaan." },
                { title: "Laporan dan Dashboard Manajemen", description: "Tampilkan kinerja keuangan dan operasional dalam laporan dan dashboard real-time untuk manajemen." },
            ],
        },
        {
            title: "Dari Transaksi Menuju Keputusan Bisnis",
            description: "ERP bukan sekadar tempat penyimpanan transaksi. Nilai sesungguhnya muncul ketika transaksi tersebut menghasilkan informasi yang dapat digunakan untuk mengendalikan operasional dan mengambil keputusan.",
            items: [
                { title: "Pengajuan", description: "Ajukan kebutuhan bisnis melalui proses yang terstruktur dan terdokumentasi." },
                { title: "Persetujuan", description: "Validasi dan setujui pengajuan berdasarkan aturan, kewenangan, dan kebijakan perusahaan." },
                { title: "Transaksi", description: "Catat setiap transaksi secara terpusat untuk menjaga konsistensi dan akurasi data." },
                { title: "Keputusan", description: "Ubah data transaksi menjadi laporan dan insight yang mendukung keputusan manajemen." },
            ],
        },
        {
            title: "Mengapa ASYST untuk Manajemen Bisnis Enterprise?",
            items: [
                { title: "Kapabilitas Enterprise", description: "ASYST berpengalaman membangun dan mengembangkan solusi teknologi untuk kebutuhan enterprise, termasuk manajemen, komersial, operasional, kargo, dan layanan TI." },
                { title: "Keahlian Integrasi", description: "Menghubungkan solusi baru dengan aplikasi, platform, sumber data, dan sistem yang sudah ada merupakan bagian penting dari pendekatan enterprise ASYST." },
                { title: "Keahlian Teknologi", description: "Pengalaman di lingkungan bisnis yang kompleks membantu ASYST memahami bahwa teknologi harus mengikuti proses bisnis, bukan sebaliknya." },
                { title: "Delivery", description: "ASYST berfokus pada lebih dari sekadar pembangunan sistem. Proyek SCM Fase 2, misalnya, menunjukkan pendekatan berkelanjutan yang dibangun di atas sistem yang telah ada." },
            ],
        },
    ],
    faq: {
        title: "Pertanyaan Umum tentang ERP dan Manajemen Bisnis",
        items: [
            { question: "Apa itu ERP dan manajemen bisnis?", answer: "ERP dan manajemen bisnis adalah pendekatan software enterprise yang membantu organisasi mengelola dan mengintegrasikan proses bisnis, data, alur kerja, operasional, dan sistem yang digunakan berbagai fungsi perusahaan." },
            { question: "Apa manfaat ERP bagi perusahaan?", answer: "ERP memberikan satu sumber data bisnis, proses yang terstandar, pekerjaan manual yang lebih sedikit, kontrol keuangan yang lebih kuat, serta pelaporan yang lebih cepat dan andal bagi manajemen." },
            { question: "Apakah sistem ERP harus menggantikan semua sistem yang ada?", answer: "Tidak. ERP dapat diterapkan secara bertahap dan diintegrasikan dengan aplikasi yang ada, sehingga organisasi dapat bermodernisasi tanpa mengganti semuanya sekaligus." },
            { question: "Apakah ASYST dapat mengembangkan solusi sesuai kebutuhan perusahaan?", answer: "Ya. ASYST merancang solusi modular dan pengembangan kustom yang mengikuti proses bisnis, struktur, dan kebutuhan integrasi setiap organisasi." },
            { question: "Apakah ERP dapat digunakan untuk manajemen rantai pasok?", answer: "Ya. ERP dapat mencakup pengadaan, inventaris, pergudangan, dan distribusi, serta menghubungkannya dengan keuangan dan operasional untuk visibilitas rantai pasok secara menyeluruh." },
            { question: "Industri apa saja yang dapat menggunakan solusi ERP?", answer: "Solusi ERP cocok untuk berbagai industri, termasuk penerbangan, transportasi, manufaktur, pemerintahan, BUMN, dan perusahaan jasa." },
        ],
    },
    cta: {
        title: "Bangun Enterprise yang Lebih Terhubung",
        description: "Setiap organisasi memiliki proses, sistem, dan tantangan yang unik. Bersama ASYST, Anda dapat merancang pendekatan ERP dan manajemen bisnis yang sesuai kebutuhan bisnis, terintegrasi dengan lanskap teknologi enterprise, dan menargetkan hasil bisnis yang jelas.",
        button: "Hubungi Ahli Kami",
    },
});
