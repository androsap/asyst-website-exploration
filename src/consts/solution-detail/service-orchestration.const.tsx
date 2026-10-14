import { AccountTreeOutlinedIcon, HubOutlinedIcon, SwapHorizOutlinedIcon, VerifiedOutlinedIcon } from "components/ui/icons";
import { localized } from "shared/i18n";
import { SolutionPageContent } from "./solution-page.types";

import imgDisconnected from "assets/asyst/img/background/capabilities/connect-enterprise.webp";
import imgIntegration from "assets/asyst/img/background/partner/partner-integration.webp";
import imgOrchestration from "assets/asyst/img/background/capabilities/automate-operations.webp";
import imgDataManagement from "assets/asyst/img/background/capabilities/build-digital.webp";
import imgAviation from "assets/asyst/img/background/industry/airline-airport/airport.webp";
import imgLogistics from "assets/asyst/img/background/services-solutions/cargo.webp";
import imgTransportation from "assets/asyst/img/background/kai.webp";
import imgGovernment from "assets/asyst/img/background/story/story-1-jpg.webp";
import imgConsultation from "assets/asyst/img/background/career/env1.webp";

const serviceOrchestrationEn: SolutionPageContent = {
    seo: {
        title: "Service Orchestration & Data Management | ASYST",
        description: "ASYST helps organizations manage the complexity of systems and information flows through integration, service orchestration and data management approaches tailored to operational needs.",
    },
    hero: {
        breadcrumb: "Service Orchestration",
        eyebrow: "Service Orchestration and Data Management",
        title: "Connect Systems. Align Data. Support More Integrated Business Operations.",
        description: "Help organizations manage the complexity of systems and information flows through integration, service orchestration, and data management approaches tailored to operational needs and business objectives.",
        primaryButton: "Discuss Your Needs",
        secondaryButton: "Explore Solutions",
    },
    sections: [
        {
            type: "list",
            layout: "aside",
            title: "When Systems Are Not Connected, Business Processes Become More Complex",
            paragraphs: ["Organizations may use multiple applications, platforms, and data sources to support operational activities. When these systems are not well integrated, teams can face challenges in aligning information, coordinating processes across applications, and maintaining data consistency."],
            image: imgDisconnected,
            items: [
                { title: "Separate systems and applications", description: "Information is spread across different technological environments" },
                { title: "Cross-system workflow", description: "Processes that depend on multiple applications require more complex coordination" },
                { title: "Differences in data formats and definitions", description: "Similar information may be represented differently between systems" },
                { title: "Limited process visibility", description: "Monitoring information flows and process dependencies can become more difficult" },
                { title: "Integration of existing systems", description: "Organizations need to consider the limitations of existing architectures, interfaces, and dependencies." },
            ],
        },
        {
            type: "cards",
            heading: "center",
            columns: 3,
            title: "An Integrated Approach to Connecting Services and Managing Data",
            description: "Service Orchestration and Data Management is designed as a solution category to discuss how systems, processes, and data flows can be managed in a more structured manner according to the needs of the organization.",
            items: [
                { title: "System and application integration", description: "Connecting relevant information sources and applications through an integration approach that aligns with the architecture and business needs.", image: imgIntegration },
                { title: "Service and process orchestration", description: "Describes process coordination, dependencies, and information exchange across systems to support more structured workflows.", image: imgOrchestration },
                { title: "Data management consistency", description: "Discusses how data from different sources can be mapped, aligned, and prepared for operational or analytical needs.", image: imgDataManagement },
            ],
        },
        {
            type: "cards",
            heading: "center",
            columns: 4,
            soft: true,
            title: "Capabilities That Need to be Evaluated According to Organizational Needs",
            items: [
                { icon: HubOutlinedIcon, title: "Application integration", description: "Connect applications and systems according to information exchange needs" },
                { icon: AccountTreeOutlinedIcon, title: "Service orchestration", description: "Managing the order and dependencies of processes across services" },
                { icon: SwapHorizOutlinedIcon, title: "Data integration", description: "Mapping and aligning data from different sources" },
                { icon: VerifiedOutlinedIcon, title: "Data quality governance", description: "Supports data consistency, definition, and management" },
            ],
        },
        {
            type: "cards",
            heading: "center",
            columns: 4,
            title: "Adapting the Approach to the Industry Context",
            items: [
                { title: "Aviation", description: "Evaluate the need for information exchange between operational applications, service support systems, and cross-process data dependencies.", image: imgAviation },
                { title: "Logistics", description: "Identify data alignment needs from operational systems that support goods movement, monitoring, or administration processes.", image: imgLogistics },
                { title: "Transportation", description: "Mapping of applications, data sources, and process dependencies required to support coordination between business units", image: imgTransportation },
                { title: "Government agencies", description: "Evaluate system interoperability, data consistency, governance, and documentation needs based on applicable organizational requirements.", image: imgGovernment },
            ],
        },
        {
            type: "timeline",
            layout: "split",
            title: "From Needs Mapping to Solution Evaluation",
            description: "A transparent consultation process helps decision makers understand what will be discussed and what needs to be prepared.",
            image: imgConsultation,
            items: [
                { title: "Discovery and needs mapping", description: "Identify the business objectives, systems involved, process owners, and key issues to be addressed." },
                { title: "Evaluation of architecture and data flow", description: "Map data sources, integration interfaces, process dependencies, and technology environment constraints." },
                { title: "Formulation of solution approach", description: "Define scope, integration priorities, governance requirements, and success criteria with stakeholders." },
                { title: "Implementation planning and validation", description: "Develop implementation plans, testing, acceptance criteria, and monitoring mechanisms according to the agreed scope." },
            ],
        },
    ],
    faq: {
        title: "Frequently Asked Questions about Service Orchestration and Data Management",
        items: [
            { question: "What is Service Orchestration and Data Management?", answer: "In general, services in this category address the coordination of processes or services across systems and the management of data flows so that information can be used according to the organization's needs. The scope of implementation needs to be tailored to the architecture and business needs." },
            { question: "What is the difference between data integration and data orchestration?", answer: "Data integration connects and aligns data from different sources. Orchestration coordinates the order, dependencies and timing of processes and data flows across multiple systems." },
            { question: "Can the solution be integrated with existing systems?", answer: "Yes. The approach considers existing architectures, interfaces and dependencies so that integration can be carried out alongside the systems that are already running." },
            { question: "What information needs to be prepared before the consultation?", answer: "It helps to prepare business objectives, a list of systems involved, key processes and their owners, known data issues, and any architecture or interface documentation available." },
            { question: "How do I start a discussion with Asyst?", answer: "Use the Discuss Your Solution Needs button or contact the ASYST team to schedule an initial discussion about your needs and evaluation scope." },
        ],
    },
    cta: {
        title: "Evaluating System Integration and Data Management?",
        description: "Discuss your organization's needs, technical challenges, and business objectives with the ASYST team to determine the relevant evaluation scope.",
        button: "Discuss Your Solution Needs",
    },
};

export const ServiceOrchestrationConst = localized(serviceOrchestrationEn, {
    seo: {
        title: "Orkestrasi Layanan & Manajemen Data | ASYST",
        description: "ASYST membantu organisasi mengelola kompleksitas sistem dan alur informasi melalui pendekatan integrasi, orkestrasi layanan, dan manajemen data yang disesuaikan dengan kebutuhan operasional.",
    },
    hero: {
        breadcrumb: "Orkestrasi Layanan",
        eyebrow: "Orkestrasi Layanan dan Manajemen Data",
        title: "Hubungkan Sistem. Selaraskan Data. Dukung Operasional Bisnis yang Lebih Terintegrasi.",
        description: "Membantu organisasi mengelola kompleksitas sistem dan alur informasi melalui pendekatan integrasi, orkestrasi layanan, dan manajemen data yang disesuaikan dengan kebutuhan operasional dan tujuan bisnis.",
        primaryButton: "Diskusikan Kebutuhan Anda",
        secondaryButton: "Jelajahi Solusi",
    },
    sections: [
        {
            title: "Ketika Sistem Tidak Terhubung, Proses Bisnis Menjadi Lebih Kompleks",
            paragraphs: ["Organisasi dapat menggunakan berbagai aplikasi, platform, dan sumber data untuk mendukung aktivitas operasional. Ketika sistem-sistem ini tidak terintegrasi dengan baik, tim dapat menghadapi tantangan dalam menyelaraskan informasi, mengoordinasikan proses lintas aplikasi, dan menjaga konsistensi data."],
            items: [
                { title: "Sistem dan aplikasi yang terpisah", description: "Informasi tersebar di berbagai lingkungan teknologi yang berbeda" },
                { title: "Alur kerja lintas sistem", description: "Proses yang bergantung pada banyak aplikasi membutuhkan koordinasi yang lebih kompleks" },
                { title: "Perbedaan format dan definisi data", description: "Informasi yang serupa dapat direpresentasikan secara berbeda antar sistem" },
                { title: "Visibilitas proses yang terbatas", description: "Pemantauan alur informasi dan dependensi proses dapat menjadi lebih sulit" },
                { title: "Integrasi sistem yang sudah ada", description: "Organisasi perlu mempertimbangkan keterbatasan arsitektur, antarmuka, dan dependensi yang ada." },
            ],
        },
        {
            title: "Pendekatan Terintegrasi untuk Menghubungkan Layanan dan Mengelola Data",
            description: "Orkestrasi Layanan dan Manajemen Data dirancang sebagai kategori solusi untuk membahas bagaimana sistem, proses, dan alur data dapat dikelola secara lebih terstruktur sesuai kebutuhan organisasi.",
            items: [
                { title: "Integrasi sistem dan aplikasi", description: "Menghubungkan sumber informasi dan aplikasi yang relevan melalui pendekatan integrasi yang selaras dengan arsitektur dan kebutuhan bisnis." },
                { title: "Orkestrasi layanan dan proses", description: "Menggambarkan koordinasi proses, dependensi, dan pertukaran informasi lintas sistem untuk mendukung alur kerja yang lebih terstruktur." },
                { title: "Konsistensi manajemen data", description: "Membahas bagaimana data dari berbagai sumber dapat dipetakan, diselaraskan, dan disiapkan untuk kebutuhan operasional atau analitik." },
            ],
        },
        {
            title: "Kapabilitas yang Perlu Dievaluasi Sesuai Kebutuhan Organisasi",
            items: [
                { title: "Integrasi aplikasi", description: "Menghubungkan aplikasi dan sistem sesuai kebutuhan pertukaran informasi" },
                { title: "Orkestrasi layanan", description: "Mengelola urutan dan dependensi proses lintas layanan" },
                { title: "Integrasi data", description: "Memetakan dan menyelaraskan data dari berbagai sumber" },
                { title: "Tata kelola kualitas data", description: "Mendukung konsistensi, definisi, dan pengelolaan data" },
            ],
        },
        {
            title: "Menyesuaikan Pendekatan dengan Konteks Industri",
            items: [
                { title: "Penerbangan", description: "Mengevaluasi kebutuhan pertukaran informasi antara aplikasi operasional, sistem pendukung layanan, dan dependensi data lintas proses." },
                { title: "Logistik", description: "Mengidentifikasi kebutuhan penyelarasan data dari sistem operasional yang mendukung pergerakan barang, pemantauan, atau proses administrasi." },
                { title: "Transportasi", description: "Memetakan aplikasi, sumber data, dan dependensi proses yang dibutuhkan untuk mendukung koordinasi antar unit bisnis" },
                { title: "Instansi pemerintah", description: "Mengevaluasi interoperabilitas sistem, konsistensi data, tata kelola, dan kebutuhan dokumentasi sesuai persyaratan organisasi yang berlaku." },
            ],
        },
        {
            title: "Dari Pemetaan Kebutuhan hingga Evaluasi Solusi",
            description: "Proses konsultasi yang transparan membantu pengambil keputusan memahami apa yang akan dibahas dan apa yang perlu disiapkan.",
            items: [
                { title: "Discovery dan pemetaan kebutuhan", description: "Mengidentifikasi tujuan bisnis, sistem yang terlibat, pemilik proses, dan isu utama yang perlu ditangani." },
                { title: "Evaluasi arsitektur dan alur data", description: "Memetakan sumber data, antarmuka integrasi, dependensi proses, dan batasan lingkungan teknologi." },
                { title: "Perumusan pendekatan solusi", description: "Menetapkan cakupan, prioritas integrasi, kebutuhan tata kelola, dan kriteria keberhasilan bersama stakeholder." },
                { title: "Perencanaan dan validasi implementasi", description: "Menyusun rencana implementasi, pengujian, kriteria penerimaan, dan mekanisme pemantauan sesuai cakupan yang disepakati." },
            ],
        },
    ],
    faq: {
        title: "Pertanyaan Umum tentang Orkestrasi Layanan dan Manajemen Data",
        items: [
            { question: "Apa itu Orkestrasi Layanan dan Manajemen Data?", answer: "Secara umum, layanan dalam kategori ini menangani koordinasi proses atau layanan lintas sistem serta pengelolaan alur data agar informasi dapat digunakan sesuai kebutuhan organisasi. Cakupan implementasinya perlu disesuaikan dengan arsitektur dan kebutuhan bisnis." },
            { question: "Apa perbedaan integrasi data dan orkestrasi data?", answer: "Integrasi data menghubungkan dan menyelaraskan data dari berbagai sumber. Orkestrasi mengoordinasikan urutan, dependensi, dan waktu eksekusi proses serta alur data di berbagai sistem." },
            { question: "Apakah solusi dapat diintegrasikan dengan sistem yang sudah ada?", answer: "Ya. Pendekatan ini mempertimbangkan arsitektur, antarmuka, dan dependensi yang ada sehingga integrasi dapat dilakukan berdampingan dengan sistem yang sudah berjalan." },
            { question: "Informasi apa yang perlu disiapkan sebelum konsultasi?", answer: "Sebaiknya siapkan tujuan bisnis, daftar sistem yang terlibat, proses utama dan pemiliknya, isu data yang diketahui, serta dokumentasi arsitektur atau antarmuka yang tersedia." },
            { question: "Bagaimana cara memulai diskusi dengan Asyst?", answer: "Gunakan tombol Diskusikan Kebutuhan Solusi Anda atau hubungi tim ASYST untuk menjadwalkan diskusi awal mengenai kebutuhan dan cakupan evaluasi Anda." },
        ],
    },
    cta: {
        title: "Sedang Mengevaluasi Integrasi Sistem dan Manajemen Data?",
        description: "Diskusikan kebutuhan, tantangan teknis, dan tujuan bisnis organisasi Anda bersama tim ASYST untuk menentukan cakupan evaluasi yang relevan.",
        button: "Diskusikan Kebutuhan Solusi Anda",
    },
});
