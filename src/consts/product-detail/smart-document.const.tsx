import { AdminPanelSettingsOutlinedIcon, AutoAwesomeOutlinedIcon, ContentPasteOffOutlinedIcon, DescriptionOutlinedIcon, EngineeringOutlinedIcon, FactCheckOutlinedIcon, FolderOffOutlinedIcon, HubOutlinedIcon, IntegrationInstructionsOutlinedIcon, LinkOffOutlinedIcon, ManageSearchOutlinedIcon, RuleOutlinedIcon, StorageOutlinedIcon, TimelineOutlinedIcon, VerifiedUserOutlinedIcon, ViewTimelineOutlinedIcon, VisibilityOffOutlinedIcon, WidgetsOutlinedIcon } from "components/ui/icons";

import imgDashboard from "assets/asyst/img/background/product/smart-document/dashboard.webp";
import imgDocument from "assets/asyst/img/background/product/smart-document/document.webp";
import imgContract from "assets/asyst/img/background/product/smart-document/contract.webp";
import imgGraph from "assets/asyst/img/background/product/smart-document/graph.webp";
import { EnterpriseProductContent } from "./enterprise.types";
import { localized } from "shared/i18n";

const smartDocumentDetailEn: EnterpriseProductContent = {
    seo: {
        title: "Document Management System for Enterprises | ASYST",
        description: "ASYST Document Management System helps organizations store, classify, search, approve, secure and track digital documents across their lifecycle, and connect them with the business systems they already use.",
    },
    hero: {
        breadcrumb: "Document Management System",
        title: "Manage Documents, Accelerate Business Processes",
        description: "Help your company and organization manage digital documents in a structured, secure and searchable way.",
        primaryButton: "Talk to an Expert",
        secondaryButton: "Explore Product",
        image: imgDashboard,
        imageAlt: "ASYST document management system dashboard",
    },
    sections: [
        {
            type: "challenge",
            title: "Documents Are More Than Files. They Are Part of Your Business Processes",
            paragraphs: [
                "In enterprise organizations, documents are often scattered across folders, emails, applications, shared drives and business systems. As a result, organizations face problems such as:",
            ],
            items: [
                { icon: FolderOffOutlinedIcon, title: "Documents Are Hard to Find", description: "Finding important information takes a long time because the storage structure is inconsistent." },
                { icon: ContentPasteOffOutlinedIcon, title: "Multiple Document Versions", description: "Users work with different versions of the same document, which increases the risk of errors." },
                { icon: RuleOutlinedIcon, title: "Unstructured Approvals", description: "In many companies, approvals still rely on email, chat or manual processes." },
                { icon: VisibilityOffOutlinedIcon, title: "Access Is Difficult to Control", description: "Not every document should be available to every user or department." },
                { icon: ViewTimelineOutlinedIcon, title: "Document History Is Hard to Track", description: "Organizations need visibility into who creates, modifies, approves or accesses each document." },
                { icon: LinkOffOutlinedIcon, title: "Systems Are Not Connected", description: "Documents often become isolated information, disconnected from the business processes they support." },
            ],
        },
        {
            type: "overview",
            title: "One Platform to Manage the Document Lifecycle",
            paragraphs: [
                "The ASYST Document Management System is built on a document lifecycle approach, so every document can be managed from creation through to archiving.",
            ],
            image: imgDocument,
            cards: [
                { tag: "Classify", title: "Version Control", description: "Reduce the risk of using the wrong version." },
                { tag: "Store", title: "Workflow", description: "Run documents through a more structured process." },
                { tag: "Review", title: "Access Control", description: "Keep information better controlled." },
                { tag: "Approve", title: "Audit Trail", description: "Make activity history more transparent." },
                { tag: "Publish", title: "Integration", description: "Connect documents to your business systems." },
            ],
        },
        {
            type: "capabilities",
            heading: "column",
            mediaFirst: true,
            title: "Everything You Need to Manage Digital Information at Enterprise Level",
            description: "With an enterprise software approach and integration capabilities, the platform can be designed to work as part of your organization's technology ecosystem rather than as a standalone system.",
            image: imgContract,
            items: [
                { icon: StorageOutlinedIcon, title: "Centralized Document Repository", description: "Store all organizational documents in one secure repository with a consistent folder and metadata structure." },
                { icon: AutoAwesomeOutlinedIcon, title: "Intelligent Document Classification", description: "Classify documents automatically by type, content and metadata so they are filed correctly from the start." },
                {
                    icon: ManageSearchOutlinedIcon,
                    title: "Document Search",
                    description: "Users can find information based on:",
                    points: ["Document name", "Document type", "Metadata", "Department", "Owner", "Date", "Status", "Project", "Document number"],
                },
                { icon: TimelineOutlinedIcon, title: "Version Control", description: "Keep every revision of a document, compare changes and make sure users always work with the latest approved version." },
                { icon: FactCheckOutlinedIcon, title: "Approval Workflow", description: "Route documents for review and approval based on document type, value and organizational structure." },
                { icon: AdminPanelSettingsOutlinedIcon, title: "Role-Based Access", description: "Set access rights by role, department or project so sensitive documents are only available to the right people." },
                { icon: VerifiedUserOutlinedIcon, title: "Audit Trail", description: "Record who created, viewed, changed, approved or shared each document for compliance and internal audits." },
                { icon: DescriptionOutlinedIcon, title: "Document Lifecycle Management", description: "Manage retention, archiving and disposal rules so documents are handled correctly from creation to the end of their lifecycle." },
            ],
        },
        {
            type: "overview",
            title: "Connect Documents with the Systems That Run Your Business",
            paragraphs: [
                "ASYST can act as an integration layer that connects document-centric processes with the enterprise systems your organization already uses, helping to:",
            ],
            points: [
                "Reduce duplicate data entry",
                "Link documents to business transactions",
                "Speed up information retrieval",
                "Support cross-system workflows",
                "Improve visibility",
                "Support digital transformation",
            ],
            closing: "ASYST develops and delivers products, solutions, integration services and custom development as part of the capabilities offered through consultation with its team.",
            image: imgGraph,
            cards: [
                { title: "Connect", description: "Integrate documents with business systems." },
                { title: "Automate", description: "Reduce manual work through digital workflows." },
                { title: "Control", description: "Manage document access, versions and approvals." },
                { title: "Accelerate", description: "Shorten search and approval times." },
                { title: "Measure", description: "Use document activity data to improve processes." },
            ],
        },
        {
            type: "expertise",
            title: "The ASYST Difference",
            description: "Reducing information fragmentation and improving access to the right documents.",
            items: [
                { icon: WidgetsOutlinedIcon, title: "Product", description: "Enterprise software capability focused on developing and supporting information systems." },
                { icon: IntegrationInstructionsOutlinedIcon, title: "Integration Capability", description: "The ability to connect the product with your existing enterprise ecosystem." },
                { icon: EngineeringOutlinedIcon, title: "Technology Expertise", description: "Experience in understanding complex business processes, particularly in enterprise environments." },
                { icon: HubOutlinedIcon, title: "Delivery", description: "Capabilities in implementation, support, training and continuous improvement." },
            ],
        },
    ],
    faq: {
        title: "Document Management System FAQ",
        items: [
            { question: "What is a Document Management System?", answer: "A Document Management System is software for storing, organizing, managing, searching, controlling and tracking digital documents throughout their lifecycle." },
            { question: "What are the benefits of a Document Management System for a company?", answer: "Companies can find documents faster, avoid version errors, control access to sensitive information, speed up approvals and keep a complete audit trail for compliance." },
            { question: "Can a Document Management System be integrated with enterprise systems?", answer: "Yes. Documents can be linked to ERP, HR, procurement, finance and other business systems through APIs and integration services, so they stay connected to the related transactions." },
            { question: "Is a DMS suitable for government institutions?", answer: "Yes. Structured approvals, role-based access, retention rules and a full audit trail support the accountability and record-keeping requirements of government institutions." },
            { question: "What is the difference between a DMS and cloud storage?", answer: "Cloud storage keeps files. A DMS also manages metadata, versions, approval workflows, access rights, audit trails and the document lifecycle, and connects documents to business processes." },
            { question: "Can ASYST build custom integrations?", answer: "Yes. ASYST provides integration services and custom development to connect the Document Management System with your existing applications and processes." },
        ],
    },
    cta: {
        title: "Make Every Document Part of Your Business Process",
        description: "Don't let critical information stay scattered across disconnected folders, emails and systems. Build a document management system that is structured, integrated and ready to scale with your enterprise.",
        button: "Talk to an Expert",
    },
};

export const SmartDocumentDetailConst = localized(smartDocumentDetailEn, {
    seo: {
        title: "Document Management System untuk Enterprise | ASYST",
        description: "Document Management System ASYST membantu organisasi menyimpan, mengklasifikasikan, mencari, menyetujui, mengamankan, dan melacak dokumen digital sepanjang siklus hidupnya, serta menghubungkannya dengan sistem bisnis yang sudah digunakan.",
    },
    hero: {
        title: "Kelola Dokumen, Percepat Proses Bisnis",
        description: "Bantu perusahaan dan organisasi Anda mengelola dokumen digital secara terstruktur, aman, dan mudah dicari.",
        primaryButton: "Hubungi Ahli Kami",
        secondaryButton: "Jelajahi Produk",
        imageAlt: "Dashboard document management system ASYST",
    },
    sections: [
        {
            title: "Dokumen Lebih dari Sekadar File. Dokumen Adalah Bagian dari Proses Bisnis",
            paragraphs: [
                "Di organisasi enterprise, dokumen sering tersebar di berbagai folder, email, aplikasi, shared drive, dan sistem bisnis. Akibatnya, organisasi menghadapi masalah seperti:",
            ],
            items: [
                { title: "Dokumen Sulit Ditemukan", description: "Mencari informasi penting membutuhkan waktu lama karena struktur penyimpanan tidak konsisten." },
                { title: "Banyak Versi Dokumen", description: "Pengguna bekerja dengan versi dokumen yang berbeda sehingga meningkatkan risiko kesalahan." },
                { title: "Persetujuan Tidak Terstruktur", description: "Di banyak perusahaan, persetujuan masih bergantung pada email, chat, atau proses manual." },
                { title: "Akses Sulit Dikendalikan", description: "Tidak semua dokumen boleh diakses oleh semua pengguna atau departemen." },
                { title: "Riwayat Dokumen Sulit Dilacak", description: "Organisasi membutuhkan visibilitas atas siapa yang membuat, mengubah, menyetujui, atau mengakses setiap dokumen." },
                { title: "Sistem Tidak Terhubung", description: "Dokumen sering menjadi informasi yang terisolasi dan tidak terhubung dengan proses bisnis yang didukungnya." },
            ],
        },
        {
            title: "Satu Platform untuk Mengelola Siklus Hidup Dokumen",
            paragraphs: [
                "ASYST Document Management System dibangun dengan pendekatan siklus hidup dokumen, sehingga setiap dokumen dapat dikelola sejak dibuat hingga diarsipkan.",
            ],
            cards: [
                { tag: "Klasifikasi", title: "Kontrol Versi", description: "Kurangi risiko menggunakan versi yang salah." },
                { tag: "Simpan", title: "Alur Kerja", description: "Jalankan dokumen melalui proses yang lebih terstruktur." },
                { tag: "Tinjau", title: "Kontrol Akses", description: "Jaga informasi agar lebih terkendali." },
                { tag: "Setujui", title: "Jejak Audit", description: "Riwayat aktivitas menjadi lebih transparan." },
                { tag: "Publikasi", title: "Integrasi", description: "Hubungkan dokumen dengan sistem bisnis Anda." },
            ],
        },
        {
            title: "Semua yang Dibutuhkan untuk Mengelola Informasi Digital di Tingkat Enterprise",
            description: "Dengan pendekatan software enterprise dan kapabilitas integrasi, platform dapat dirancang sebagai bagian dari ekosistem teknologi organisasi, bukan sistem yang berdiri sendiri.",
            items: [
                { title: "Repositori Dokumen Terpusat", description: "Simpan seluruh dokumen organisasi dalam satu repositori aman dengan struktur folder dan metadata yang konsisten." },
                { title: "Klasifikasi Dokumen Cerdas", description: "Klasifikasikan dokumen secara otomatis berdasarkan jenis, isi, dan metadata agar tersimpan dengan benar sejak awal." },
                {
                    title: "Pencarian Dokumen",
                    description: "Pengguna dapat menemukan informasi berdasarkan:",
                    points: ["Nama dokumen", "Jenis dokumen", "Metadata", "Departemen", "Pemilik", "Tanggal", "Status", "Proyek", "Nomor dokumen"],
                },
                { title: "Kontrol Versi", description: "Simpan setiap revisi dokumen, bandingkan perubahan, dan pastikan pengguna selalu bekerja dengan versi terbaru yang telah disetujui." },
                { title: "Alur Persetujuan", description: "Arahkan dokumen untuk ditinjau dan disetujui berdasarkan jenis dokumen, nilai, dan struktur organisasi." },
                { title: "Akses Berbasis Peran", description: "Atur hak akses berdasarkan peran, departemen, atau proyek agar dokumen sensitif hanya tersedia bagi pihak yang tepat." },
                { title: "Jejak Audit", description: "Catat siapa yang membuat, melihat, mengubah, menyetujui, atau membagikan setiap dokumen untuk kepatuhan dan audit internal." },
                { title: "Manajemen Siklus Hidup Dokumen", description: "Kelola aturan retensi, pengarsipan, dan pemusnahan agar dokumen ditangani dengan benar dari awal hingga akhir siklus hidupnya." },
            ],
        },
        {
            title: "Hubungkan Dokumen dengan Sistem yang Menjalankan Bisnis Anda",
            paragraphs: [
                "ASYST dapat berperan sebagai lapisan integrasi yang menghubungkan proses berbasis dokumen dengan sistem enterprise yang sudah digunakan organisasi, untuk membantu:",
            ],
            points: [
                "Mengurangi input data ganda",
                "Menghubungkan dokumen dengan transaksi bisnis",
                "Mempercepat pencarian informasi",
                "Mendukung alur kerja lintas sistem",
                "Meningkatkan visibilitas",
                "Mendukung transformasi digital",
            ],
            closing: "ASYST mengembangkan dan menghadirkan produk, solusi, layanan integrasi, serta pengembangan kustom sebagai bagian dari kapabilitas yang ditawarkan melalui konsultasi bersama timnya.",
            cards: [
                { title: "Hubungkan", description: "Integrasikan dokumen dengan sistem bisnis." },
                { title: "Otomatiskan", description: "Kurangi pekerjaan manual melalui alur kerja digital." },
                { title: "Kendalikan", description: "Kelola akses, versi, dan persetujuan dokumen." },
                { title: "Percepat", description: "Persingkat waktu pencarian dan persetujuan." },
                { title: "Ukur", description: "Gunakan data aktivitas dokumen untuk memperbaiki proses." },
            ],
        },
        {
            title: "Keunggulan ASYST",
            description: "Mengurangi fragmentasi informasi dan meningkatkan akses ke dokumen yang tepat.",
            items: [
                { title: "Produk", description: "Kapabilitas software enterprise yang berfokus pada pengembangan dan dukungan sistem informasi." },
                { title: "Kapabilitas Integrasi", description: "Kemampuan menghubungkan produk dengan ekosistem enterprise yang sudah ada." },
                { title: "Keahlian Teknologi", description: "Pengalaman memahami proses bisnis yang kompleks, khususnya di lingkungan enterprise." },
                { title: "Delivery", description: "Kapabilitas implementasi, dukungan, pelatihan, dan peningkatan berkelanjutan." },
            ],
        },
    ],
    faq: {
        title: "Pertanyaan Umum tentang Document Management System",
        items: [
            { question: "Apa itu Document Management System?", answer: "Document Management System adalah software untuk menyimpan, mengatur, mengelola, mencari, mengendalikan, dan melacak dokumen digital sepanjang siklus hidupnya." },
            { question: "Apa manfaat Document Management System bagi perusahaan?", answer: "Perusahaan dapat menemukan dokumen lebih cepat, menghindari kesalahan versi, mengendalikan akses ke informasi sensitif, mempercepat persetujuan, dan menyimpan jejak audit lengkap untuk kepatuhan." },
            { question: "Apakah Document Management System dapat diintegrasikan dengan sistem enterprise?", answer: "Ya. Dokumen dapat dihubungkan dengan ERP, HR, pengadaan, keuangan, dan sistem bisnis lainnya melalui API dan layanan integrasi, sehingga tetap terhubung dengan transaksi terkait." },
            { question: "Apakah DMS cocok untuk instansi pemerintah?", answer: "Ya. Persetujuan terstruktur, akses berbasis peran, aturan retensi, dan jejak audit lengkap mendukung kebutuhan akuntabilitas dan kearsipan instansi pemerintah." },
            { question: "Apa perbedaan DMS dan cloud storage?", answer: "Cloud storage menyimpan file. DMS juga mengelola metadata, versi, alur persetujuan, hak akses, jejak audit, dan siklus hidup dokumen, serta menghubungkan dokumen dengan proses bisnis." },
            { question: "Apakah ASYST dapat membangun integrasi kustom?", answer: "Ya. ASYST menyediakan layanan integrasi dan pengembangan kustom untuk menghubungkan Document Management System dengan aplikasi dan proses yang sudah Anda miliki." },
        ],
    },
    cta: {
        title: "Jadikan Setiap Dokumen Bagian dari Proses Bisnis Anda",
        description: "Jangan biarkan informasi penting tetap tersebar di folder, email, dan sistem yang tidak terhubung. Bangun document management system yang terstruktur, terintegrasi, dan siap berkembang bersama enterprise Anda.",
        button: "Hubungi Ahli Kami",
    },
});
