import { BusinessCenterOutlinedIcon, HandshakeOutlinedIcon, HubOutlinedIcon, WorkspacePremiumOutlinedIcon } from "components/ui/icons";

import imgDashboard from "assets/asyst/img/background/product/athena/detail/dashboard.webp";
import imgRequest from "assets/asyst/img/background/product/athena/detail/request.webp";
import imgFlights from "assets/asyst/img/background/product/chronus/detail/business-1.webp";
import { EnterpriseProductContent } from "./enterprise.types";
import { localized } from "shared/i18n";

const athenaDetailEn: EnterpriseProductContent = {
    seo: {
        title: "Corporate Travel Management System | ASYST",
        description: "ASYST Corporate Travel Management System connects travel requests, approvals, bookings, expenses and reporting in one structured workflow for travelers, approvers, agents, finance and management.",
    },
    hero: {
        breadcrumb: "Corporate Travel Management",
        title: "Manage Business Travel as a Connected Business Process",
        description: "Help your organization manage business travel, from requests, approvals and bookings to expense management and reporting, within a more structured workflow.",
        primaryButton: "Talk to an Expert",
        secondaryButton: "Explore Corporate Travel",
        image: imgDashboard,
        imageAlt: "ASYST corporate travel management dashboard",
    },
    sections: [
        {
            type: "challenge",
            title: "Business Travel Is About More Than Just Booking",
            paragraphs: [
                "As business travel involves more employees, approvers, finance teams, travel agents, documents and company policies, the travel process can quickly become complex. The challenge goes beyond simply finding tickets or accommodation.",
            ],
            lead: "Organizations also need to manage:",
            items: [
                { title: "Submission", description: "How can employees submit travel requests consistently?" },
                { title: "Approval", description: "How can you ensure that requests are reviewed by the right people before the trip takes place?" },
                { title: "Booking", description: "How can the booking process stay aligned with company needs and policies?" },
                { title: "Expense", description: "How can travel expenses be recorded and processed in a more structured way?" },
                { title: "Data", description: "How can management obtain the travel and cost information needed for monitoring?" },
                { title: "Control", description: "How can the organization keep the travel process monitored from start to finish?" },
            ],
        },
        {
            type: "overview",
            title: "What Is a Corporate Travel Management System?",
            paragraphs: [
                "A Corporate Travel Management System is software that helps organizations manage business travel in a structured way, covering everything from travel requests and approvals to booking, expense management, documentation, reporting and monitoring.",
            ],
            image: imgRequest,
            cards: [
                { title: "Traveler", description: "Submits and manages travel requests." },
                { title: "Approver", description: "Reviews and approves travel in line with organizational processes." },
                { title: "Agent", description: "Supports the booking and travel management process." },
                { title: "Finance", description: "Manages cost information, expenses and required documents." },
                { title: "Management", description: "Gains visibility into travel activities and data." },
            ],
        },
        {
            type: "timeline",
            layout: "band",
            title: "From Travel Requests to Business Insights",
            description: "ASYST Travel Management can be understood through five main stages.",
            image: imgRequest,
            items: [
                { title: "Request", description: "Travelers submit travel requests based on destination, dates and business needs." },
                { title: "Approval", description: "Requests go through an approval workflow that follows the organizational structure." },
                { title: "Booking and Travel", description: "Travel is handled through booking activities and the management of travel requirements." },
                { title: "Expense and Reporting", description: "Travel and expense information can be used for administration, monitoring and reporting." },
                { title: "Insights", description: "Consolidated travel data helps management review spending, policy compliance and travel patterns." },
            ],
        },
        {
            type: "capabilities",
            heading: "top",
            mediaFirst: true,
            title: "Built to Manage Processes, Not Just Transactions",
            description: "Corporate Travel Management is designed from a multi-role perspective, so the needs of both travelers and the organization are brought together in a single, connected process.",
            image: imgDashboard,
            items: [
                { title: "Travel Request", description: "Digitize the travel request process so travel requirements are submitted through a more structured workflow.", highlight: "Requests are more consistent and easier to monitor." },
                { title: "Travel Approval", description: "Route each request to the right approvers based on organizational structure, budget and travel policy.", highlight: "Approvals are faster and fully traceable." },
                { title: "Travel Booking", description: "Manage flight, hotel and other travel bookings in line with approved requests and company policies.", highlight: "Bookings stay aligned with what was approved." },
                { title: "Expense Management", description: "Record travel expenses, advances and settlements in a single process connected to the trip.", highlight: "Expense reporting becomes more accurate and transparent." },
                { title: "Reporting and Dashboards", description: "Present travel volume, costs and policy compliance in reports and dashboards for management.", highlight: "Decisions are based on complete travel data." },
                { title: "Travel Document Management", description: "Store travel orders, tickets, invoices and supporting documents digitally and link them to each trip.", highlight: "Documents are easy to find during audits." },
                { title: "Audit and Monitoring", description: "Keep a full history of requests, approvals, changes and expenses for internal control.", highlight: "Every step of the travel process is accountable." },
            ],
        },
        {
            type: "architecture",
            title: "One Platform for Diverse Organizational Needs and Business Travel Scenarios",
            tabs: [
                {
                    label: "Architecture",
                    title: "Travel Management in a Digital Enterprise Architecture",
                    paragraphs: [
                        "Travel management should not stand alone as a booking tool. The ASYST platform can be configured as part of your enterprise architecture, connecting people, processes and data across the organization.",
                    ],
                    groups: [
                        { title: "Users", items: ["Traveler", "Manager", "Travel Agent", "Finance", "Management"] },
                        { title: "Travel Management", items: ["Request", "Approval", "Booking", "Expense", "Documents", "Reporting"] },
                        { title: "Integration", items: ["API / Integration Layer", "Workflow", "Data Exchange", "Enterprise Services"] },
                        { title: "Enterprise Systems", items: ["HR", "Finance", "ERP", "Identity", "Data Platform"] },
                        { title: "Business Intelligence", items: ["Travel Analytics", "Cost Monitoring", "Policy Monitoring", "Management Reporting"] },
                    ],
                    image: imgRequest,
                },
                {
                    label: "Integration",
                    title: "Connected with the Systems You Already Use",
                    paragraphs: ["The platform exchanges data with core enterprise systems so travel information does not have to be entered twice."],
                    points: ["HR and employee master data", "Finance, ERP and budgeting", "Identity and single sign-on", "Travel agents and suppliers", "Data platforms and analytics"],
                    image: imgDashboard,
                },
                {
                    label: "Product Capability",
                    title: "Product Capabilities Ready to Configure",
                    paragraphs: ["Core travel modules can be configured to match each organization's structure, policies and approval levels."],
                    points: ["Configurable request forms", "Multi-level approval workflows", "Travel policy rules", "Expense and settlement", "Document repository"],
                    image: imgFlights,
                },
                {
                    label: "Business Scenarios",
                    title: "Support for Different Business Travel Scenarios",
                    paragraphs: ["The same platform can handle the travel patterns of different units, locations and types of trips."],
                    points: ["Domestic and international trips", "Project and site visits", "Group and event travel", "Trip changes and cancellations", "Multi-entity organizations"],
                    image: imgRequest,
                },
                {
                    label: "Business Data",
                    title: "Travel Data That Supports Business Decisions",
                    paragraphs: ["Every request, approval, booking and expense becomes data the organization can analyze."],
                    points: ["Travel spend by unit and cost center", "Policy compliance rate", "Approval lead time", "Top routes and suppliers", "Budget versus actual cost"],
                    image: imgDashboard,
                },
            ],
        },
        {
            type: "expertise",
            title: "Enterprise Technology Capability Behind Your Travel Program",
            description: "Choosing a travel platform is about more than selecting software. Organizations need a partner that understands how a platform must work within a complex technology ecosystem.",
            items: [
                { icon: BusinessCenterOutlinedIcon, title: "Enterprise Capability", description: "ASYST builds and delivers a wide range of enterprise solutions as part of its digital product and solution portfolio." },
                { icon: HubOutlinedIcon, title: "Integration", description: "Travel management can be designed as part of the enterprise ecosystem, so it is not isolated from other systems." },
                { icon: WorkspacePremiumOutlinedIcon, title: "Experience", description: "The ASYST approach combines product capability, technology, integration and an understanding of business needs." },
                { icon: HandshakeOutlinedIcon, title: "Long-Term Partnership", description: "The platform continues to evolve with changes in travel policies, business strategy, technology and the market." },
            ],
        },
    ],
    faq: {
        title: "FAQ about Corporate Travel Management",
        items: [
            { question: "What is a Corporate Travel Management System?", answer: "A Corporate Travel Management System is software that helps organizations manage business travel, from requests and approvals to bookings, expenses, documentation and reporting, in one structured workflow." },
            { question: "Is it only a flight booking system?", answer: "No. The platform covers the entire business travel process, including requests, policy checks, approvals, bookings, expenses, reconciliation and reporting, and connects travelers, approvers, travel agents, finance and management." },
            { question: "Who is the platform designed for?", answer: "It is designed for organizations with many travelers, business units, locations or approval levels, such as private companies, state-owned enterprises and government institutions." },
            { question: "Does the platform support company travel policies?", answer: "Yes. Policy rules such as travel class, budget limits, approval levels and required documents can be configured and applied automatically to every request." },
            { question: "Can it be integrated with existing enterprise systems?", answer: "Yes. The platform can integrate with HR, ERP and finance, identity management, procurement and travel suppliers, depending on the integrations implemented." },
            { question: "Can the platform be customized?", answer: "Yes. Workflows, approval levels, policies, forms and reports can be adjusted to the structure and processes of each organization." },
        ],
    },
    cta: {
        title: "Build a More Connected Business Travel Process",
        description: "Every organization has its own travel policies, approval structures and systems. Discuss your needs with ASYST to find the right approach for product, integration, architecture and implementation.",
        button: "Talk to an Expert",
    },
};

export const AthenaDetailConst = localized(athenaDetailEn, {
    seo: {
        title: "Corporate Travel Management System | ASYST",
        description: "Corporate Travel Management System ASYST menghubungkan pengajuan, persetujuan, pemesanan, biaya, dan pelaporan perjalanan dinas dalam satu alur kerja terstruktur untuk pelaku perjalanan, pemberi persetujuan, agen, keuangan, dan manajemen.",
    },
    hero: {
        title: "Kelola Perjalanan Dinas sebagai Proses Bisnis yang Terhubung",
        description: "Bantu organisasi Anda mengelola perjalanan dinas, mulai dari pengajuan, persetujuan, dan pemesanan hingga pengelolaan biaya dan pelaporan, dalam alur kerja yang lebih terstruktur.",
        primaryButton: "Hubungi Ahli Kami",
        secondaryButton: "Jelajahi Corporate Travel",
        imageAlt: "Dashboard corporate travel management ASYST",
    },
    sections: [
        {
            title: "Perjalanan Dinas Lebih dari Sekadar Pemesanan",
            paragraphs: [
                "Ketika perjalanan dinas melibatkan lebih banyak karyawan, pemberi persetujuan, tim keuangan, travel agent, dokumen, dan kebijakan perusahaan, prosesnya dapat dengan cepat menjadi kompleks. Tantangannya bukan sekadar mencari tiket atau akomodasi.",
            ],
            lead: "Organisasi juga perlu mengelola:",
            items: [
                { title: "Pengajuan", description: "Bagaimana karyawan dapat mengajukan perjalanan secara konsisten?" },
                { title: "Persetujuan", description: "Bagaimana memastikan pengajuan ditinjau oleh pihak yang tepat sebelum perjalanan dilakukan?" },
                { title: "Pemesanan", description: "Bagaimana proses pemesanan tetap selaras dengan kebutuhan dan kebijakan perusahaan?" },
                { title: "Biaya", description: "Bagaimana biaya perjalanan dicatat dan diproses secara lebih terstruktur?" },
                { title: "Data", description: "Bagaimana manajemen memperoleh informasi perjalanan dan biaya yang dibutuhkan untuk pemantauan?" },
                { title: "Kontrol", description: "Bagaimana organisasi memastikan proses perjalanan terpantau dari awal hingga akhir?" },
            ],
        },
        {
            title: "Apa Itu Corporate Travel Management System?",
            paragraphs: [
                "Corporate Travel Management System adalah software yang membantu organisasi mengelola perjalanan dinas secara terstruktur, mulai dari pengajuan dan persetujuan hingga pemesanan, pengelolaan biaya, dokumentasi, pelaporan, dan pemantauan.",
            ],
            cards: [
                { title: "Pelaku Perjalanan", description: "Mengajukan dan mengelola permintaan perjalanan." },
                { title: "Pemberi Persetujuan", description: "Meninjau dan menyetujui perjalanan sesuai proses organisasi." },
                { title: "Agen", description: "Mendukung proses pemesanan dan pengelolaan perjalanan." },
                { title: "Keuangan", description: "Mengelola informasi biaya, pengeluaran, dan dokumen yang diperlukan." },
                { title: "Manajemen", description: "Memperoleh visibilitas atas aktivitas dan data perjalanan." },
            ],
        },
        {
            title: "Dari Pengajuan Perjalanan hingga Insight Bisnis",
            description: "ASYST Travel Management dapat dipahami melalui lima tahap utama.",
            items: [
                { title: "Pengajuan", description: "Pelaku perjalanan mengajukan permintaan berdasarkan tujuan, tanggal, dan kebutuhan bisnis." },
                { title: "Persetujuan", description: "Pengajuan diproses melalui alur persetujuan yang mengikuti struktur organisasi." },
                { title: "Pemesanan dan Perjalanan", description: "Perjalanan ditangani melalui aktivitas pemesanan dan pengelolaan kebutuhan perjalanan." },
                { title: "Biaya dan Pelaporan", description: "Informasi perjalanan dan biaya dapat digunakan untuk administrasi, pemantauan, dan pelaporan." },
                { title: "Insight", description: "Data perjalanan yang terkonsolidasi membantu manajemen meninjau pengeluaran, kepatuhan kebijakan, dan pola perjalanan." },
            ],
        },
        {
            title: "Dirancang untuk Mengelola Proses, Bukan Sekadar Transaksi",
            description: "Corporate Travel Management dirancang dari perspektif multi-peran, sehingga kebutuhan pelaku perjalanan dan organisasi tersatukan dalam satu proses yang terhubung.",
            items: [
                { title: "Pengajuan Perjalanan", description: "Digitalisasi proses pengajuan agar kebutuhan perjalanan diajukan melalui alur kerja yang lebih terstruktur.", highlight: "Pengajuan lebih konsisten dan mudah dipantau." },
                { title: "Persetujuan Perjalanan", description: "Arahkan setiap pengajuan ke pemberi persetujuan yang tepat berdasarkan struktur organisasi, anggaran, dan kebijakan perjalanan.", highlight: "Persetujuan lebih cepat dan dapat ditelusuri sepenuhnya." },
                { title: "Pemesanan Perjalanan", description: "Kelola pemesanan tiket pesawat, hotel, dan kebutuhan perjalanan lainnya sesuai pengajuan yang disetujui dan kebijakan perusahaan.", highlight: "Pemesanan tetap selaras dengan yang telah disetujui." },
                { title: "Pengelolaan Biaya", description: "Catat biaya perjalanan, uang muka, dan penyelesaiannya dalam satu proses yang terhubung dengan perjalanan.", highlight: "Pelaporan biaya menjadi lebih akurat dan transparan." },
                { title: "Laporan dan Dashboard", description: "Tampilkan volume, biaya, dan kepatuhan kebijakan perjalanan dalam laporan dan dashboard untuk manajemen.", highlight: "Keputusan didasarkan pada data perjalanan yang lengkap." },
                { title: "Manajemen Dokumen Perjalanan", description: "Simpan surat tugas, tiket, invoice, dan dokumen pendukung secara digital serta hubungkan dengan setiap perjalanan.", highlight: "Dokumen mudah ditemukan saat audit." },
                { title: "Audit dan Pemantauan", description: "Simpan riwayat lengkap pengajuan, persetujuan, perubahan, dan biaya untuk kebutuhan kontrol internal.", highlight: "Setiap tahap proses perjalanan dapat dipertanggungjawabkan." },
            ],
        },
        {
            title: "Satu Platform untuk Beragam Kebutuhan Organisasi dan Skenario Perjalanan Dinas",
            tabs: [
                {
                    label: "Arsitektur",
                    title: "Travel Management dalam Arsitektur Enterprise Digital",
                    paragraphs: [
                        "Pengelolaan perjalanan tidak seharusnya berdiri sendiri sebagai alat pemesanan. Platform ASYST dapat dikonfigurasi sebagai bagian dari arsitektur enterprise yang menghubungkan orang, proses, dan data di seluruh organisasi.",
                    ],
                    groups: [
                        { title: "Pengguna", items: ["Pelaku Perjalanan", "Manajer", "Travel Agent", "Keuangan", "Manajemen"] },
                        { title: "Travel Management", items: ["Pengajuan", "Persetujuan", "Pemesanan", "Biaya", "Dokumen", "Pelaporan"] },
                        { title: "Integrasi", items: ["API / Lapisan Integrasi", "Alur Kerja", "Pertukaran Data", "Layanan Enterprise"] },
                        { title: "Sistem Enterprise", items: ["HR", "Keuangan", "ERP", "Identitas", "Platform Data"] },
                        { title: "Business Intelligence", items: ["Analitik Perjalanan", "Pemantauan Biaya", "Pemantauan Kebijakan", "Laporan Manajemen"] },
                    ],
                },
                {
                    label: "Integrasi",
                    title: "Terhubung dengan Sistem yang Sudah Anda Gunakan",
                    paragraphs: ["Platform bertukar data dengan sistem enterprise utama sehingga informasi perjalanan tidak perlu dimasukkan dua kali."],
                    points: ["Data induk HR dan karyawan", "Keuangan, ERP, dan penganggaran", "Identitas dan single sign-on", "Travel agent dan pemasok", "Platform data dan analitik"],
                },
                {
                    label: "Kapabilitas Produk",
                    title: "Kapabilitas Produk yang Siap Dikonfigurasi",
                    paragraphs: ["Modul perjalanan inti dapat dikonfigurasi sesuai struktur, kebijakan, dan tingkat persetujuan setiap organisasi."],
                    points: ["Formulir pengajuan yang dapat dikonfigurasi", "Alur persetujuan bertingkat", "Aturan kebijakan perjalanan", "Biaya dan penyelesaian", "Repositori dokumen"],
                },
                {
                    label: "Skenario Bisnis",
                    title: "Mendukung Berbagai Skenario Perjalanan Dinas",
                    paragraphs: ["Platform yang sama dapat menangani pola perjalanan dari berbagai unit, lokasi, dan jenis perjalanan."],
                    points: ["Perjalanan domestik dan internasional", "Kunjungan proyek dan lapangan", "Perjalanan grup dan acara", "Perubahan dan pembatalan perjalanan", "Organisasi multi-entitas"],
                },
                {
                    label: "Data Bisnis",
                    title: "Data Perjalanan yang Mendukung Keputusan Bisnis",
                    paragraphs: ["Setiap pengajuan, persetujuan, pemesanan, dan biaya menjadi data yang dapat dianalisis organisasi."],
                    points: ["Biaya perjalanan per unit dan cost center", "Tingkat kepatuhan kebijakan", "Waktu proses persetujuan", "Rute dan pemasok utama", "Anggaran dibandingkan biaya aktual"],
                },
            ],
        },
        {
            title: "Kapabilitas Teknologi Enterprise di Balik Program Perjalanan Anda",
            description: "Memilih platform perjalanan lebih dari sekadar memilih software. Organisasi membutuhkan mitra yang memahami bagaimana platform harus berjalan di dalam ekosistem teknologi yang kompleks.",
            items: [
                { title: "Kapabilitas Enterprise", description: "ASYST membangun dan menghadirkan beragam solusi enterprise sebagai bagian dari portofolio produk dan solusi digitalnya." },
                { title: "Integrasi", description: "Travel management dapat dirancang sebagai bagian dari ekosistem enterprise sehingga tidak terisolasi dari sistem lain." },
                { title: "Pengalaman", description: "Pendekatan ASYST menggabungkan kapabilitas produk, teknologi, integrasi, dan pemahaman kebutuhan bisnis." },
                { title: "Kemitraan Jangka Panjang", description: "Platform terus berkembang mengikuti perubahan kebijakan perjalanan, strategi bisnis, teknologi, dan pasar." },
            ],
        },
    ],
    faq: {
        title: "Pertanyaan Umum tentang Corporate Travel Management",
        items: [
            { question: "Apa itu Corporate Travel Management System?", answer: "Corporate Travel Management System adalah software yang membantu organisasi mengelola perjalanan dinas, mulai dari pengajuan dan persetujuan hingga pemesanan, biaya, dokumentasi, dan pelaporan, dalam satu alur kerja yang terstruktur." },
            { question: "Apakah ini hanya sistem pemesanan tiket pesawat?", answer: "Tidak. Platform ini mencakup seluruh proses perjalanan dinas, termasuk pengajuan, pemeriksaan kebijakan, persetujuan, pemesanan, biaya, rekonsiliasi, dan pelaporan, serta menghubungkan pelaku perjalanan, pemberi persetujuan, travel agent, keuangan, dan manajemen." },
            { question: "Untuk siapa platform ini dirancang?", answer: "Untuk organisasi dengan banyak pelaku perjalanan, unit bisnis, lokasi, atau tingkat persetujuan, seperti perusahaan swasta, BUMN, dan instansi pemerintah." },
            { question: "Apakah platform ini mendukung kebijakan perjalanan perusahaan?", answer: "Ya. Aturan kebijakan seperti kelas perjalanan, batas anggaran, tingkat persetujuan, dan dokumen wajib dapat dikonfigurasi dan diterapkan otomatis pada setiap pengajuan." },
            { question: "Apakah dapat diintegrasikan dengan sistem enterprise yang sudah ada?", answer: "Ya. Platform dapat terintegrasi dengan HR, ERP dan keuangan, manajemen identitas, pengadaan, dan pemasok perjalanan, sesuai integrasi yang diterapkan." },
            { question: "Apakah platform dapat dikustomisasi?", answer: "Ya. Alur kerja, tingkat persetujuan, kebijakan, formulir, dan laporan dapat disesuaikan dengan struktur dan proses setiap organisasi." },
        ],
    },
    cta: {
        title: "Bangun Proses Perjalanan Dinas yang Lebih Terhubung",
        description: "Setiap organisasi memiliki kebijakan perjalanan, struktur persetujuan, dan sistem yang berbeda. Diskusikan kebutuhan Anda bersama ASYST untuk menemukan pendekatan produk, integrasi, arsitektur, dan implementasi yang tepat.",
        button: "Hubungi Ahli Kami",
    },
});
