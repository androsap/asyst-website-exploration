import { CloudOutlinedIcon, ComputerOutlinedIcon, DashboardCustomizeOutlinedIcon, FactCheckOutlinedIcon, StorageOutlinedIcon, SupportAgentOutlinedIcon } from "components/ui/icons";
import { localized } from "shared/i18n";
import { SolutionPageContent } from "./solution-page.types";

import imgOperate from "assets/asyst/img/background/about-us/jobs/office.webp";

const capabilities = "Key capabilities :";
const businessValue = "Business value :";
const keyActivities = "Key Activities:";
const outcome = "Outcome:";

const managedItServicesEn: SolutionPageContent = {
    seo: {
        title: "Managed IT Services, Infrastructure & ITSM | ASYST",
        description: "ASYST provides managed infrastructure, application operations, service desk and IT service management capabilities designed to keep enterprise IT operations stable, supported and ready for business.",
    },
    hero: {
        breadcrumb: "Managed IT Service",
        eyebrow: "ITSM",
        title: "Managed IT Services, Infrastructure & ITSM",
        description: "Keep your critical IT operations stable, supported and ready for business. Asyst provides managed infrastructure, application operations, service desk and IT service management capabilities designed to support enterprise technology environments",
        primaryButton: "Discuss Your IT Operations",
        secondaryButton: "Explore Service Scope",
    },
    sections: [
        {
            type: "matrix",
            title: "When IT Operations Become Too Complex to Manage Alone",
            items: [
                { title: "Infrastructure complexity", description: "Various infrastructure components require continuous monitoring and operational management." },
                { title: "Application dependency", description: "Business processes increasingly depend on applications that require reliable support and maintenance." },
                { title: "IT support demands", description: "The internal team needs a structured way to manage incidents, requests, and escalations." },
                { title: "Service governance", description: "Technology operations require defined ownership, processes, reporting and service management" },
            ],
        },
        {
            type: "cards",
            heading: "split",
            columns: 3,
            soft: true,
            title: "What Asyst Manages",
            description: "Manage the technology layers behind your business with integrated application, infrastructure, data center, user support, and IT service management capabilities",
            items: [
                {
                    icon: DashboardCustomizeOutlinedIcon,
                    title: "Application Management",
                    description: "Keep business-critical applications supported, maintained, and aligned with operational requirements",
                    groups: [
                        { label: capabilities, points: ["Application Support", "Application Operations", "Maintenance & Issue Resolution", "Business-Critical Application Management"] },
                        { label: businessValue, text: "Improve application reliability while reducing the operational burden on internal IT teams" },
                    ],
                    footnote: "· Application Management Services · Application Support · Application Operations",
                },
                {
                    icon: StorageOutlinedIcon,
                    title: "IT Infrastructure Services",
                    description: "Manage the infrastructure supporting your applications, users, and day-to-day business operations",
                    groups: [
                        { label: capabilities, points: ["Infrastructure Management", "Computing Environment", "Network Infrastructure", "Cloud Infrastructure"] },
                        { label: businessValue, text: "Maintain a stable technology foundation that can support evolving business and operational needs" },
                    ],
                    footnote: "· IT Infrastructure Services · IT Infrastructure Management · Managed Infrastructure Services",
                },
                {
                    icon: CloudOutlinedIcon,
                    title: "Cloud & Data Center Services",
                    description: "Support data center environments across computing, storage, networking, and infrastructure operations",
                    groups: [
                        { label: capabilities, points: ["Data Center Operations", "Storage Management", "Network Management", "Compute Management"] },
                        { label: businessValue, text: "Support infrastructure efficiency, scalability, and operational continuity across your technology environment" },
                    ],
                    footnote: "· Data Center Services · Data Center Operations · Cloud Infrastructure Services",
                },
                {
                    icon: ComputerOutlinedIcon,
                    title: "End User Computing",
                    description: "Support the technology, devices, and computing environments employees rely on to perform their daily work",
                    groups: [
                        { label: capabilities, points: ["End User Computing", "Computer Management", "User Support", "Workplace IT Support"] },
                        { label: businessValue, text: "Help employees access the technology services they need while giving IT teams greater visibility" },
                    ],
                    footnote: "· End User Computing Services · EUC Services · IT User Support",
                },
                {
                    icon: SupportAgentOutlinedIcon,
                    title: "24/7 IT Service Desk",
                    description: "Provide a central point of contact for IT incidents, service requests, support, and escalation with professional handling",
                    groups: [
                        { label: capabilities, points: ["24/7 Service Desk", "Incident Management", "Service Requests", "Issue Escalation"] },
                        { label: businessValue, text: "Give users a structured support channel while helping IT teams manage incidents and service requests" },
                    ],
                    footnote: "· IT Service Desk · 24/7 Service Desk · IT Support Services · Managed Service Desk",
                },
                {
                    icon: FactCheckOutlinedIcon,
                    title: "IT Service Management",
                    description: "Structure IT services around defined processes, requirements, implementation, service management, and continual improvement",
                    groups: [
                        { label: capabilities, points: ["ITSM Assessment", "Process Design", "ITSM Implementation", "ITIL-Based Practices"] },
                        { label: businessValue, text: "Create greater structure and visibility across how IT services are designed, delivered, and managed" },
                    ],
                    footnote: "· IT Service Management · ITSM Services · ITIL · ITSM Implementation",
                },
            ],
        },
        {
            type: "steps",
            title: "How We Operate Your IT Environment",
            description: "A structured operating model for managing, supporting, and continuously improving your IT environment—from initial assessment to ongoing service operations",
            image: imgOperate,
            items: [
                {
                    label: "Assess",
                    title: "Understand Your IT Environment",
                    description: "We assess your applications, infrastructure, services, operational requirements, and business needs to define the right service scope",
                    groups: [
                        { label: keyActivities, points: ["IT Environment Assessment", "Service Requirement Analysis", "Operational Needs", "Current-State Review"] },
                        { label: outcome, text: "A clear understanding of priorities, service scope, and operational requirements." },
                    ],
                },
                {
                    label: "Plan",
                    title: "Define the Service Model",
                    description: "We define the operating model, service levels, responsibilities, and support structure that fit your organization",
                    groups: [
                        { label: keyActivities, points: ["Service Scope Definition", "Service Level Design", "Roles & Responsibilities", "Escalation Model"] },
                        { label: outcome, text: "An agreed service model with clear scope, service levels, and ownership." },
                    ],
                },
                {
                    label: "Transition",
                    title: "Move Operations Into Managed Service",
                    description: "We transfer knowledge, set up tools and processes, and onboard the team so operations continue without disruption",
                    groups: [
                        { label: keyActivities, points: ["Knowledge Transfer", "Tooling & Process Setup", "Documentation", "Service Readiness Check"] },
                        { label: outcome, text: "A controlled handover into day-to-day managed operations." },
                    ],
                },
                {
                    label: "Operate",
                    title: "Run Day-to-Day IT Operations",
                    description: "We manage applications, infrastructure, user support, and the service desk according to the agreed service levels",
                    groups: [
                        { label: keyActivities, points: ["Incident & Request Handling", "Infrastructure Operations", "Application Support", "User Support"] },
                        { label: outcome, text: "Stable and supported IT services for your users and business." },
                    ],
                },
                {
                    label: "Monitor",
                    title: "Maintain Visibility Over Service Performance",
                    description: "We monitor systems, service levels, and recurring issues and report operational status regularly",
                    groups: [
                        { label: keyActivities, points: ["System Monitoring", "Service Level Tracking", "Periodic Reporting", "Trend Analysis"] },
                        { label: outcome, text: "Transparent insight into service performance and operational risks." },
                    ],
                },
                {
                    label: "Improve",
                    title: "Continuously Improve IT Services",
                    description: "We use operational data and lessons learned to reduce recurring issues and improve processes and service quality",
                    groups: [
                        { label: keyActivities, points: ["Problem Management", "Process Improvement", "Service Review", "Improvement Plan"] },
                        { label: outcome, text: "IT services that become more reliable and efficient over time." },
                    ],
                },
            ],
        },
        {
            type: "cards",
            heading: "center",
            columns: 4,
            soft: true,
            title: "Service Governance Built Around Visibility and Accountability",
            items: [
                { title: "Service Level", description: "Defined service expectations and escalation mechanisms" },
                { title: "Incident Management", description: "Structured handling from issue identification to resolution" },
                { title: "Reporting", description: "Operational visibility through periodic service reporting" },
                { title: "Ownership", description: "Clear responsibilities across customer and service provider" },
            ],
        },
    ],
    faq: {
        title: "Frequently Asked Questions about ITSM",
        items: [
            { question: "What are Managed IT Services?", answer: "Managed IT Services is a service model in which some or all IT operational activities are managed by a service provider based on an agreed-upon scope, processes, and service agreement." },
            { question: "What can be managed through Asyst services?", answer: "ASYST can manage applications, IT infrastructure, cloud and data center environments, end user computing, the IT service desk and IT service management processes." },
            { question: "Can the service be tailored to the company's needs?", answer: "Yes. The service scope, service levels and operating model are defined based on your environment, operational requirements and business priorities." },
            { question: "What is the relationship between ITSM and managed IT services?", answer: "ITSM provides the processes and practices for designing, delivering and managing IT services. Managed IT services apply those practices to operate your IT environment on your behalf." },
            { question: "Does Asyst provide 24/7 support?", answer: "Yes. ASYST provides a 24/7 IT service desk for incidents, service requests and escalation, according to the agreed service scope." },
        ],
    },
    cta: {
        title: "Ready to Strengthen Your IT Operations?",
        description: "Discuss your infrastructure, application, service desk, and IT service management needs with Asyst. We can help define the right operating model and service scope for your organization.",
        button: "Discuss Your IT Operations",
    },
};

const capabilitiesId = "Kapabilitas utama :";
const businessValueId = "Nilai bisnis :";
const keyActivitiesId = "Aktivitas Utama:";
const outcomeId = "Hasil:";

export const ManagedItServicesConst = localized(managedItServicesEn, {
    seo: {
        title: "Managed IT Services, Infrastruktur & ITSM | ASYST",
        description: "ASYST menyediakan layanan infrastruktur terkelola, operasional aplikasi, service desk, dan manajemen layanan IT untuk menjaga operasional IT enterprise tetap stabil, didukung, dan siap untuk bisnis.",
    },
    hero: {
        breadcrumb: "Managed IT Service",
        title: "Managed IT Services, Infrastruktur & ITSM",
        description: "Jaga operasional IT kritis Anda tetap stabil, didukung, dan siap untuk bisnis. Asyst menyediakan kapabilitas infrastruktur terkelola, operasional aplikasi, service desk, dan manajemen layanan IT yang dirancang untuk mendukung lingkungan teknologi enterprise",
        primaryButton: "Diskusikan Operasional IT Anda",
        secondaryButton: "Jelajahi Cakupan Layanan",
    },
    sections: [
        {
            title: "Ketika Operasional IT Terlalu Kompleks untuk Dikelola Sendiri",
            items: [
                { title: "Kompleksitas infrastruktur", description: "Berbagai komponen infrastruktur membutuhkan pemantauan dan pengelolaan operasional yang berkelanjutan." },
                { title: "Ketergantungan aplikasi", description: "Proses bisnis semakin bergantung pada aplikasi yang memerlukan dukungan dan pemeliharaan yang andal." },
                { title: "Kebutuhan dukungan IT", description: "Tim internal membutuhkan cara terstruktur untuk mengelola insiden, permintaan, dan eskalasi." },
                { title: "Tata kelola layanan", description: "Operasional teknologi membutuhkan kepemilikan, proses, pelaporan, dan manajemen layanan yang jelas" },
            ],
        },
        {
            title: "Apa yang Dikelola Asyst",
            description: "Kelola lapisan teknologi di balik bisnis Anda dengan kapabilitas aplikasi, infrastruktur, data center, dukungan pengguna, dan manajemen layanan IT yang terintegrasi",
            items: [
                {
                    title: "Manajemen Aplikasi",
                    description: "Menjaga aplikasi kritis bisnis tetap didukung, terpelihara, dan selaras dengan kebutuhan operasional",
                    groups: [
                        { label: capabilitiesId, points: ["Dukungan Aplikasi", "Operasional Aplikasi", "Pemeliharaan & Penyelesaian Masalah", "Pengelolaan Aplikasi Kritis Bisnis"] },
                        { label: businessValueId, text: "Meningkatkan keandalan aplikasi sekaligus mengurangi beban operasional tim IT internal" },
                    ],
                },
                {
                    title: "Layanan Infrastruktur IT",
                    description: "Mengelola infrastruktur yang mendukung aplikasi, pengguna, dan operasional bisnis sehari-hari",
                    groups: [
                        { label: capabilitiesId, points: ["Manajemen Infrastruktur", "Lingkungan Komputasi", "Infrastruktur Jaringan", "Infrastruktur Cloud"] },
                        { label: businessValueId, text: "Menjaga fondasi teknologi yang stabil untuk mendukung kebutuhan bisnis dan operasional yang terus berkembang" },
                    ],
                },
                {
                    title: "Layanan Cloud & Data Center",
                    description: "Mendukung lingkungan data center mencakup komputasi, penyimpanan, jaringan, dan operasional infrastruktur",
                    groups: [
                        { label: capabilitiesId, points: ["Operasional Data Center", "Manajemen Penyimpanan", "Manajemen Jaringan", "Manajemen Komputasi"] },
                        { label: businessValueId, text: "Mendukung efisiensi infrastruktur, skalabilitas, dan kelangsungan operasional di seluruh lingkungan teknologi Anda" },
                    ],
                },
                {
                    title: "End User Computing",
                    description: "Mendukung teknologi, perangkat, dan lingkungan komputasi yang diandalkan karyawan dalam pekerjaan sehari-hari",
                    groups: [
                        { label: capabilitiesId, points: ["End User Computing", "Manajemen Komputer", "Dukungan Pengguna", "Dukungan IT Tempat Kerja"] },
                        { label: businessValueId, text: "Membantu karyawan mengakses layanan teknologi yang dibutuhkan sekaligus memberi tim IT visibilitas yang lebih baik" },
                    ],
                },
                {
                    title: "IT Service Desk 24/7",
                    description: "Menyediakan titik kontak terpusat untuk insiden IT, permintaan layanan, dukungan, dan eskalasi yang ditangani secara profesional",
                    groups: [
                        { label: capabilitiesId, points: ["Service Desk 24/7", "Manajemen Insiden", "Permintaan Layanan", "Eskalasi Masalah"] },
                        { label: businessValueId, text: "Memberi pengguna kanal dukungan yang terstruktur sekaligus membantu tim IT mengelola insiden dan permintaan layanan" },
                    ],
                },
                {
                    title: "Manajemen Layanan IT",
                    description: "Menyusun layanan IT berdasarkan proses, kebutuhan, implementasi, manajemen layanan, dan perbaikan berkelanjutan yang terdefinisi",
                    groups: [
                        { label: capabilitiesId, points: ["Asesmen ITSM", "Desain Proses", "Implementasi ITSM", "Praktik Berbasis ITIL"] },
                        { label: businessValueId, text: "Menciptakan struktur dan visibilitas yang lebih baik atas cara layanan IT dirancang, diberikan, dan dikelola" },
                    ],
                },
            ],
        },
        {
            title: "Bagaimana Kami Mengoperasikan Lingkungan IT Anda",
            description: "Model operasional terstruktur untuk mengelola, mendukung, dan terus meningkatkan lingkungan IT Anda—mulai dari asesmen awal hingga operasional layanan berkelanjutan",
            items: [
                {
                    label: "Asesmen",
                    title: "Memahami Lingkungan IT Anda",
                    description: "Kami menilai aplikasi, infrastruktur, layanan, kebutuhan operasional, dan kebutuhan bisnis Anda untuk menentukan cakupan layanan yang tepat",
                    groups: [
                        { label: keyActivitiesId, points: ["Asesmen Lingkungan IT", "Analisis Kebutuhan Layanan", "Kebutuhan Operasional", "Tinjauan Kondisi Saat Ini"] },
                        { label: outcomeId, text: "Pemahaman yang jelas tentang prioritas, cakupan layanan, dan kebutuhan operasional." },
                    ],
                },
                {
                    label: "Perencanaan",
                    title: "Menetapkan Model Layanan",
                    description: "Kami menetapkan model operasional, tingkat layanan, tanggung jawab, dan struktur dukungan yang sesuai dengan organisasi Anda",
                    groups: [
                        { label: keyActivitiesId, points: ["Definisi Cakupan Layanan", "Desain Tingkat Layanan", "Peran & Tanggung Jawab", "Model Eskalasi"] },
                        { label: outcomeId, text: "Model layanan yang disepakati dengan cakupan, tingkat layanan, dan kepemilikan yang jelas." },
                    ],
                },
                {
                    label: "Transisi",
                    title: "Memindahkan Operasional ke Layanan Terkelola",
                    description: "Kami melakukan transfer pengetahuan, menyiapkan tools dan proses, serta melakukan onboarding tim agar operasional tetap berjalan tanpa gangguan",
                    groups: [
                        { label: keyActivitiesId, points: ["Transfer Pengetahuan", "Penyiapan Tools & Proses", "Dokumentasi", "Pemeriksaan Kesiapan Layanan"] },
                        { label: outcomeId, text: "Serah terima yang terkendali menuju operasional terkelola sehari-hari." },
                    ],
                },
                {
                    label: "Operasional",
                    title: "Menjalankan Operasional IT Sehari-hari",
                    description: "Kami mengelola aplikasi, infrastruktur, dukungan pengguna, dan service desk sesuai tingkat layanan yang disepakati",
                    groups: [
                        { label: keyActivitiesId, points: ["Penanganan Insiden & Permintaan", "Operasional Infrastruktur", "Dukungan Aplikasi", "Dukungan Pengguna"] },
                        { label: outcomeId, text: "Layanan IT yang stabil dan didukung bagi pengguna dan bisnis Anda." },
                    ],
                },
                {
                    label: "Pemantauan",
                    title: "Menjaga Visibilitas atas Kinerja Layanan",
                    description: "Kami memantau sistem, tingkat layanan, dan masalah berulang serta melaporkan status operasional secara berkala",
                    groups: [
                        { label: keyActivitiesId, points: ["Pemantauan Sistem", "Pelacakan Tingkat Layanan", "Pelaporan Berkala", "Analisis Tren"] },
                        { label: outcomeId, text: "Wawasan yang transparan tentang kinerja layanan dan risiko operasional." },
                    ],
                },
                {
                    label: "Peningkatan",
                    title: "Terus Meningkatkan Layanan IT",
                    description: "Kami memanfaatkan data operasional dan pembelajaran untuk mengurangi masalah berulang serta meningkatkan proses dan kualitas layanan",
                    groups: [
                        { label: keyActivitiesId, points: ["Manajemen Masalah", "Perbaikan Proses", "Tinjauan Layanan", "Rencana Peningkatan"] },
                        { label: outcomeId, text: "Layanan IT yang semakin andal dan efisien dari waktu ke waktu." },
                    ],
                },
            ],
        },
        {
            title: "Tata Kelola Layanan yang Dibangun di Atas Visibilitas dan Akuntabilitas",
            items: [
                { title: "Tingkat Layanan", description: "Ekspektasi layanan dan mekanisme eskalasi yang terdefinisi" },
                { title: "Manajemen Insiden", description: "Penanganan terstruktur dari identifikasi masalah hingga penyelesaian" },
                { title: "Pelaporan", description: "Visibilitas operasional melalui pelaporan layanan berkala" },
                { title: "Kepemilikan", description: "Tanggung jawab yang jelas antara pelanggan dan penyedia layanan" },
            ],
        },
    ],
    faq: {
        title: "Pertanyaan Umum tentang ITSM",
        items: [
            { question: "Apa itu Managed IT Services?", answer: "Managed IT Services adalah model layanan di mana sebagian atau seluruh aktivitas operasional IT dikelola oleh penyedia layanan berdasarkan cakupan, proses, dan perjanjian layanan yang disepakati." },
            { question: "Apa saja yang dapat dikelola melalui layanan Asyst?", answer: "ASYST dapat mengelola aplikasi, infrastruktur IT, lingkungan cloud dan data center, end user computing, IT service desk, serta proses manajemen layanan IT." },
            { question: "Apakah layanan dapat disesuaikan dengan kebutuhan perusahaan?", answer: "Ya. Cakupan layanan, tingkat layanan, dan model operasional ditetapkan berdasarkan lingkungan, kebutuhan operasional, dan prioritas bisnis Anda." },
            { question: "Apa hubungan antara ITSM dan managed IT services?", answer: "ITSM menyediakan proses dan praktik untuk merancang, memberikan, dan mengelola layanan IT. Managed IT services menerapkan praktik tersebut untuk mengoperasikan lingkungan IT atas nama Anda." },
            { question: "Apakah Asyst menyediakan dukungan 24/7?", answer: "Ya. ASYST menyediakan IT service desk 24/7 untuk insiden, permintaan layanan, dan eskalasi sesuai cakupan layanan yang disepakati." },
        ],
    },
    cta: {
        title: "Siap Memperkuat Operasional IT Anda?",
        description: "Diskusikan kebutuhan infrastruktur, aplikasi, service desk, dan manajemen layanan IT Anda bersama Asyst. Kami dapat membantu menetapkan model operasional dan cakupan layanan yang tepat untuk organisasi Anda.",
        button: "Diskusikan Operasional IT Anda",
    },
});
