import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import ViewTimelineOutlinedIcon from "@mui/icons-material/ViewTimelineOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

import imgDashboard from "assets/asyst/img/background/product/project-management/dashboard.webp";
import imgAiInsights from "assets/asyst/img/background/product/project-management/ai-insights.webp";
import imgCalendar from "assets/asyst/img/background/product/project-management/all-calendar.webp";
import imgDaily from "assets/asyst/img/background/product/project-management/daily.webp";
import imgDeliverables from "assets/asyst/img/background/product/project-management/deliverables.webp";
import imgReports from "assets/asyst/img/background/product/project-management/reports.webp";
import imgStreams from "assets/asyst/img/background/product/project-management/streams.webp";
import imgTimeline from "assets/asyst/img/background/product/project-management/timeline.webp";
import { ProductDetailContent } from "consts/product-detail.const";
import { localized } from "shared/i18n";

// Konten dua bahasa: konstanta `...En` = teks EN lengkap; ekspor `localized(...En, {...})` di bawah file = terjemahan ID
// (teks saja, struktur & urutan sama).
// Konten mengikuti apm.asyst.co.id/landing

const projectManagementDetailEn: ProductDetailContent = {
    hero: {
        title: "People and AI Agents, Working from One Plan",
        description: "Asyst Project Management keeps streams, deliverables, tasks and logged hours in one place, and lets AI agents do the status reporting so your team can focus on decisions",
        primaryButton: "Talk to Project Expert",
        secondaryButton: "Explore Project Management",
        stats: [
            { icon: WidgetsOutlinedIcon, value: "13", label: "Modules, One Source of Truth" },
            { icon: AutoAwesomeOutlinedIcon, value: "AI Agents", label: "Digest & Risk Detection" },
            { icon: SpeedOutlinedIcon, value: "Real-Time", label: "Deliverable Progress" },
            { icon: ViewTimelineOutlinedIcon, value: "Per Stream", label: "Timeline & Ownership" },
        ],
    },
    overview: {
        title: "Built for Programmes That Are Too Big for a Spreadsheet",
        paragraphs: [
            "Asyst Project Management is a delivery platform from PT Aero Systems Indonesia. Work is organised the way programmes actually run: streams own deliverables, deliverables hold tasks, and every hour is logged against the task it belongs to.",
            "Because the data is structured, progress, timeline and productivity views are generated, not assembled by hand every Monday. AI agents read the same data to write the digest, flag risks and propose the next move.",
        ],
        image: imgDashboard,
        challenges: [
            { icon: TrendingUpOutlinedIcon, title: "Real-Time Progress", description: "Deliverable and task status without a status meeting" },
            { icon: ScheduleOutlinedIcon, title: "Hours Where the Work Is", description: "Every activity logged against its task and deliverable" },
            { icon: TimelineOutlinedIcon, title: "Timeline per Stream", description: "Start to target date, grouped by the team that owns it" },
            { icon: PsychologyOutlinedIcon, title: "AI Digest & Risk", description: "Written from your data, with the risks named" },
        ],
    },
    lifecycle: {
        title: "One Plan from Stream to Steering Report",
        description: "Streams own deliverables, deliverables hold tasks, and every logged hour feeds the progress, productivity and AI views your stakeholders rely on",
        items: [
            { label: "Streams", title: "Every stream on one page", description: "Scope, member count and lead per stream, so no one has to chase owners to find out who reports what.", image: imgStreams },
            { label: "Deliverables", title: "Big-picture targets, tracked", description: "Deliverables with owner, status, progress and target date, filterable by stream, status and assignee, with custom fields for your process.", image: imgDeliverables },
            { label: "Timeline", title: "Cutover dates you can defend", description: "Deliverables plotted from start to target date, colour-coded not started, in progress, at risk and completed.", image: imgTimeline },
            { label: "Daily Activity", title: "Hours logged where the work is", description: "Daily activity is the source for every metric: hours, cycle time and the AI digest all read the same log.", image: imgDaily },
            { label: "Calendar", title: "Company calendar & approvals", description: "A company-wide month grid of check-ins, trips and leave, with a pending-approvals queue for leads.", image: imgCalendar },
            { label: "AI Insights", title: "Status digests written for you", description: "On-demand status digests and risk detection, company-wide or per stream, with wins, risks and recommendations backed by the underlying numbers.", image: imgAiInsights },
            { label: "Reports", title: "Reports that stay live", description: "Pick dimensions, metrics, filters and a chart, then save the report and share it with the company or keep it private.", image: imgReports },
        ],
    },
    features: {
        title: "Thirteen Modules, One Source of Truth",
        items: [
            { title: "AI Insights", description: "On-demand status digests and risk detection, company-wide or per stream. Wins, risks and recommendations come with the underlying numbers, so a steering update takes minutes instead of a morning", image: imgAiInsights },
            { title: "Dashboard Progress", description: "Deliverable progress, task completion and team activity at a glance, updated the moment your team logs work", image: imgDashboard },
            { title: "Task Management", description: "Tasks under a deliverable, with priority, assignee and status. Filter by status and see exactly what is blocked", image: imgDeliverables },
            { title: "Calendar & Leave Approval", description: "Company-wide month grid of check-ins, trips and leave, with a pending-approvals queue for leads", image: imgCalendar },
            { title: "Productivity Metrics", description: "Throughput, on-time rate, average cycle time, hours logged and active days per member, not just hours", image: imgDaily },
            { title: "Custom Report Builder", description: "Pick dimensions, metrics, filters and a chart, then save and share it with the company or keep it private. Reports stay live against the same data", image: imgReports },
            { title: "Streams Overview", description: "Scope, members and lead for every stream, so portfolio ownership is always clear", image: imgStreams },
            { title: "Timeline per Stream", description: "Deliverables plotted from start to target date and grouped by the stream that owns them", image: imgTimeline },
            { title: "Roles & Access", description: "Approve registrations, assign members to streams and set Admin, Stream Lead or Member roles", image: imgStreams },
        ],
    },
    howItWorks: {
        title: "Three Ways Teams Run Asyst Project Management",
        items: [
            { label: "SAP / ERP Implementation", title: "Keep an ERP rollout honest, stream by stream", description: "Functional, Technical, Data Migration, Integration and Change Management streams each own their deliverables and leads. Deliverables are plotted to their cutover dates, and blocked tasks or at-risk deliverables roll straight into the AI risk digest instead of a status email.", image: imgTimeline },
            { label: "Multi-Stream Programme & PMO", title: "Give the PMO one version of the truth", description: "Every stream sits on one page with its scope, members and lead. Build portfolio reports across streams by dimension and metric, then generate the digest company-wide or per stream, review it and send it.", image: imgStreams },
            { label: "Internal IT Projects", title: "Run internal IT work like a programme", description: "Track deliverables with owner, status, progress and target date. Add custom fields such as budget code, business owner, wave or regulatory impact, and keep roles and access under control.", image: imgDeliverables },
        ],
    },
    businessModels: {
        title: "What Changes When Reporting Is Automatic",
        items: [
            { icon: IntegrationInstructionsOutlinedIcon, title: "ERP Implementation", points: ["workstream ownership", "cutover timeline", "blocker detection", "AI risk digest"] },
            { icon: AccountTreeOutlinedIcon, title: "PMO & Portfolio", points: ["one view across streams", "portfolio reports", "steering packs", "shared metrics"] },
            { icon: ComputerOutlinedIcon, title: "Internal IT", points: ["deliverable tracking", "custom fields", "role-based access", "progress dashboards"] },
            { icon: EngineeringOutlinedIcon, title: "Delivery Teams", points: ["daily activity log", "hours per task", "cycle time", "on-time rate"] },
            { icon: GroupsOutlinedIcon, title: "Leadership", points: ["Monday status compiled for you", "less admin", "more decisions", "risks named early"] },
        ],
    },
    faq: {
        title: "Asyst Project Management FAQ",
        items: [
            { question: "What is Asyst Project Management?", answer: "Asyst Project Management is a delivery platform from PT Aero Systems Indonesia for multi-stream programmes. It keeps streams, deliverables, tasks and logged hours in one place, with AI agents handling status reporting." },
            { question: "What do the AI agents do?", answer: "AI agents read your project data to generate status digests company-wide or per stream, flag risks and propose the next move, with the underlying numbers attached." },
            { question: "How is work structured?", answer: "Streams own deliverables, deliverables hold tasks, and every hour is logged against the task it belongs to." },
            { question: "Can we build our own reports?", answer: "Yes. The custom report builder lets you choose dimensions, metrics, filters and a chart, then save the report and share it company-wide or keep it private." },
            { question: "Can we add fields specific to our process?", answer: "Yes. Add custom fields such as budget code, business owner, wave or regulatory impact, for all deliverables or a single stream." },
            { question: "How are roles and access managed?", answer: "Admins approve registrations, assign members to streams and set each member as Admin, Stream Lead or Member." },
        ],
    },
    cta: {
        title: "See Your Programme in One View",
        description: "Ask us for a walkthrough with your own stream structure",
        button: "Request a demo",
    },
}

// ---------- terjemahan ID (struktur & urutan sama dengan projectManagementDetailEn) ----------

export const ProjectManagementDetailConst = localized(projectManagementDetailEn, {
    hero: {
        title: "Manusia dan AI Agent, Bekerja dari Satu Rencana",
        description: "Asyst Project Management menyatukan stream, deliverable, tugas, dan jam kerja di satu tempat, serta membiarkan AI agent menyusun laporan status agar tim Anda dapat fokus mengambil keputusan",
        primaryButton: "Hubungi Ahli Proyek",
        secondaryButton: "Jelajahi Project Management",
        stats: [
            { label: "Modul, Satu Sumber Kebenaran" },
            { label: "Ringkasan & Deteksi Risiko" },
            { label: "Progres Deliverable" },
            { value: "Per Stream", label: "Timeline & Kepemilikan" },
        ],
    },
    overview: {
        title: "Dibangun untuk Program yang Terlalu Besar untuk Spreadsheet",
        paragraphs: [
            "Asyst Project Management adalah platform delivery dari PT Aero Systems Indonesia. Pekerjaan diatur sesuai cara program benar-benar berjalan: stream memiliki deliverable, deliverable berisi tugas, dan setiap jam kerja dicatat pada tugas terkait.",
            "Karena datanya terstruktur, tampilan progres, timeline, dan produktivitas dihasilkan otomatis, bukan disusun manual setiap Senin. AI agent membaca data yang sama untuk menulis ringkasan, menandai risiko, dan mengusulkan langkah berikutnya.",
        ],
        challenges: [
            { title: "Progres Real-Time", description: "Status deliverable dan tugas tanpa perlu rapat status" },
            { title: "Jam Kerja di Tempat Pekerjaannya", description: "Setiap aktivitas dicatat pada tugas dan deliverable terkait" },
            { title: "Timeline per Stream", description: "Dari tanggal mulai hingga target, dikelompokkan berdasarkan tim pemiliknya" },
            { title: "Ringkasan & Risiko oleh AI", description: "Ditulis dari data Anda, lengkap dengan risiko yang teridentifikasi" },
        ],
    },
    lifecycle: {
        title: "Satu Rencana dari Stream hingga Laporan Steering",
        description: "Stream memiliki deliverable, deliverable berisi tugas, dan setiap jam yang dicatat menjadi dasar tampilan progres, produktivitas, dan AI yang diandalkan stakeholder Anda",
        items: [
            { label: "Stream", title: "Semua stream dalam satu halaman", description: "Ruang lingkup, jumlah anggota, dan lead per stream, sehingga tidak perlu lagi mengejar pemilik untuk tahu siapa melaporkan apa." },
            { label: "Deliverable", title: "Target besar yang terpantau", description: "Deliverable lengkap dengan pemilik, status, progres, dan tanggal target, dapat difilter berdasarkan stream, status, dan penanggung jawab, serta custom field sesuai proses Anda." },
            { label: "Timeline", title: "Tanggal cutover yang dapat dipertanggungjawabkan", description: "Deliverable dipetakan dari tanggal mulai hingga target, dengan kode warna belum dimulai, berjalan, berisiko, dan selesai." },
            { label: "Aktivitas Harian", title: "Jam kerja dicatat di tempat pekerjaannya", description: "Aktivitas harian menjadi sumber setiap metrik: jam kerja, cycle time, dan ringkasan AI semuanya membaca log yang sama." },
            { label: "Kalender", title: "Kalender perusahaan & persetujuan", description: "Tampilan bulanan seluruh perusahaan untuk check-in, perjalanan dinas, dan cuti, dengan antrean persetujuan untuk para lead." },
            { label: "AI Insights", title: "Ringkasan status yang ditulis untuk Anda", description: "Ringkasan status dan deteksi risiko sesuai kebutuhan, untuk seluruh perusahaan atau per stream, berisi capaian, risiko, dan rekomendasi yang didukung angka di baliknya." },
            { label: "Laporan", title: "Laporan yang selalu terkini", description: "Pilih dimensi, metrik, filter, dan grafik, lalu simpan laporan dan bagikan ke seluruh perusahaan atau simpan secara privat." },
        ],
    },
    features: {
        title: "Tiga Belas Modul, Satu Sumber Kebenaran",
        items: [
            { title: "AI Insights", description: "Ringkasan status dan deteksi risiko sesuai kebutuhan, untuk seluruh perusahaan atau per stream. Capaian, risiko, dan rekomendasi disertai angka pendukungnya, sehingga update steering cukup beberapa menit, bukan satu pagi penuh" },
            { title: "Dashboard Progres", description: "Progres deliverable, penyelesaian tugas, dan aktivitas tim dalam sekali lihat, diperbarui begitu tim mencatat pekerjaannya" },
            { title: "Manajemen Tugas", description: "Tugas di bawah deliverable, lengkap dengan prioritas, penanggung jawab, dan status. Filter berdasarkan status dan lihat persis apa yang terhambat" },
            { title: "Kalender & Persetujuan Cuti", description: "Tampilan bulanan seluruh perusahaan untuk check-in, perjalanan dinas, dan cuti, dengan antrean persetujuan untuk para lead" },
            { title: "Metrik Produktivitas", description: "Throughput, tingkat ketepatan waktu, rata-rata cycle time, jam kerja tercatat, dan hari aktif per anggota, bukan sekadar jam kerja" },
            { title: "Pembuat Laporan Kustom", description: "Pilih dimensi, metrik, filter, dan grafik, lalu simpan dan bagikan ke perusahaan atau simpan secara privat. Laporan selalu terkini dengan data yang sama" },
            { title: "Ringkasan Stream", description: "Ruang lingkup, anggota, dan lead untuk setiap stream, sehingga kepemilikan portofolio selalu jelas" },
            { title: "Timeline per Stream", description: "Deliverable dipetakan dari tanggal mulai hingga target dan dikelompokkan berdasarkan stream pemiliknya" },
            { title: "Peran & Akses", description: "Setujui pendaftaran, tempatkan anggota ke stream, dan tetapkan peran Admin, Stream Lead, atau Member" },
        ],
    },
    howItWorks: {
        title: "Tiga Cara Tim Menjalankan Asyst Project Management",
        items: [
            { label: "Implementasi SAP / ERP", title: "Jaga rollout ERP tetap transparan, stream demi stream", description: "Stream Functional, Technical, Data Migration, Integration, dan Change Management masing-masing memiliki deliverable dan lead sendiri. Deliverable dipetakan ke tanggal cutover, dan tugas yang terhambat atau deliverable berisiko langsung masuk ke ringkasan risiko AI, bukan ke email status." },
            { label: "Program Multi-Stream & PMO", title: "Beri PMO satu versi kebenaran", description: "Setiap stream ditampilkan dalam satu halaman dengan ruang lingkup, anggota, dan lead-nya. Susun laporan portofolio lintas stream berdasarkan dimensi dan metrik, lalu buat ringkasan untuk seluruh perusahaan atau per stream, tinjau, dan kirimkan." },
            { label: "Proyek IT Internal", title: "Jalankan pekerjaan IT internal seperti sebuah program", description: "Pantau deliverable dengan pemilik, status, progres, dan tanggal target. Tambahkan custom field seperti kode anggaran, business owner, wave, atau dampak regulasi, serta jaga peran dan akses tetap terkendali." },
        ],
    },
    businessModels: {
        title: "Apa yang Berubah Saat Pelaporan Berjalan Otomatis",
        items: [
            { title: "Implementasi ERP", points: ["kepemilikan workstream", "timeline cutover", "deteksi hambatan", "ringkasan risiko AI"] },
            { title: "PMO & Portofolio", points: ["satu tampilan lintas stream", "laporan portofolio", "materi steering", "metrik bersama"] },
            { title: "IT Internal", points: ["pelacakan deliverable", "custom field", "akses berbasis peran", "dashboard progres"] },
            { title: "Tim Delivery", points: ["log aktivitas harian", "jam kerja per tugas", "cycle time", "tingkat ketepatan waktu"] },
            { title: "Pimpinan", points: ["status Senin tersusun otomatis", "lebih sedikit administrasi", "lebih banyak keputusan", "risiko teridentifikasi lebih awal"] },
        ],
    },
    faq: {
        title: "FAQ Asyst Project Management",
        items: [
            { question: "Apa itu Asyst Project Management?", answer: "Asyst Project Management adalah platform delivery dari PT Aero Systems Indonesia untuk program multi-stream. Platform ini menyatukan stream, deliverable, tugas, dan jam kerja di satu tempat, dengan AI agent yang menangani pelaporan status." },
            { question: "Apa yang dilakukan AI agent?", answer: "AI agent membaca data proyek Anda untuk membuat ringkasan status untuk seluruh perusahaan atau per stream, menandai risiko, dan mengusulkan langkah berikutnya, lengkap dengan angka pendukungnya." },
            { question: "Bagaimana pekerjaan distrukturkan?", answer: "Stream memiliki deliverable, deliverable berisi tugas, dan setiap jam kerja dicatat pada tugas terkait." },
            { question: "Bisakah kami membuat laporan sendiri?", answer: "Bisa. Pembuat laporan kustom memungkinkan Anda memilih dimensi, metrik, filter, dan grafik, lalu menyimpan laporan dan membagikannya ke seluruh perusahaan atau menyimpannya secara privat." },
            { question: "Bisakah kami menambahkan field khusus untuk proses kami?", answer: "Bisa. Tambahkan custom field seperti kode anggaran, business owner, wave, atau dampak regulasi, untuk semua deliverable atau satu stream tertentu." },
            { question: "Bagaimana peran dan akses dikelola?", answer: "Admin menyetujui pendaftaran, menempatkan anggota ke stream, dan menetapkan setiap anggota sebagai Admin, Stream Lead, atau Member." },
        ],
    },
    cta: {
        title: "Lihat Program Anda dalam Satu Tampilan",
        description: "Minta demo dengan struktur stream milik Anda sendiri",
        button: "Minta demo",
    },
});
