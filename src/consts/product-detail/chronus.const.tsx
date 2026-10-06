import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";

import imgBanner from "assets/asyst/img/background/product/chronus/detail/banner-1.webp";
import imgBusiness from "assets/asyst/img/background/product/chronus/detail/business-1.webp";
import imgFeature from "assets/asyst/img/background/product/chronus/detail/feature-1.webp";
import imgPromotion from "assets/asyst/img/background/product/chronus/detail/promotion-1.webp";
import { ProductDetailContent } from "consts/product-detail.const";
import { localized } from "shared/i18n";

// Konten dua bahasa: konstanta `...En` = teks EN lengkap; ekspor `localized(...En, {...})` di bawah file = terjemahan ID
// (teks saja, struktur & urutan sama).
// Konten mengikuti home.asyst.co.id/product/chronus (Managed SOC & Cyber Defense).
// TODO: gambar masih screenshot CMS lama (GESITS); ganti dengan visual SOC/SIEM dari desain.

const chronusDetailEn: ProductDetailContent = {
    hero: {
        title: "Safeguard Mission-Critical Assets with 24/7 Managed Cyber Defense",
        description: "Empower your enterprise with round-the-clock threat monitoring, real-time SIEM analytics and proactive incident response, defending against sophisticated cyber threats while maintaining seamless operational flexibility",
        primaryButton: "Talk to Security Expert",
        secondaryButton: "Explore Chronus",
        stats: [
            { icon: ShieldOutlinedIcon, value: "24/7/365", label: "Threat Monitoring" },
            { icon: SupportAgentOutlinedIcon, value: "L1 & L2", label: "Dedicated Analysts" },
            { icon: QueryStatsOutlinedIcon, value: "Real-Time", label: "SIEM Analytics" },
            { icon: TimerOutlinedIcon, value: "Minutes", label: "Incident Containment" },
        ],
    },
    overview: {
        title: "Modern Threats Require Modern Defenses",
        paragraphs: [
            "In an always-on digital economy, ASYST delivers an end-to-end Security Operations Center (SOC) designed to balance stringent security controls with business agility.",
            "By uniting advanced SIEM technology, global threat intelligence and dedicated L1/L2 analysts, Chronus detects, contains and neutralizes vulnerabilities before they make an impact, protecting national infrastructure, corporate enterprises and aviation ecosystems with battle-tested security expertise.",
        ],
        image: imgBanner,
        challenges: [
            { icon: NotificationsActiveOutlinedIcon, title: "Alert Fatigue", description: "Filter false positives swiftly so analysts focus on high-risk anomalies" },
            { icon: AccountTreeOutlinedIcon, title: "Stealthy Multi-Stage Attacks", description: "Correlate disparate security events to reveal attack chains in real time" },
            { icon: SwapHorizOutlinedIcon, title: "Lateral Threat Movement", description: "Isolate compromised endpoints before threats spread across the network" },
            { icon: VisibilityOffOutlinedIcon, title: "Fragmented Visibility", description: "Unify logs from operating systems, databases, cloud and hybrid infrastructure" },
        ],
    },
    lifecycle: {
        title: "Comprehensive Cyber Protection Across Your Enterprise",
        description: "Delivering targeted security governance, rapid operational remediation and end-to-end visibility for every business stakeholder",
        items: [
            { label: "Collect", title: "Centralized multi-source aggregation", description: "Unified log collection across diverse operating systems, databases, cloud-native stacks and hybrid enterprise infrastructure.", image: imgFeature },
            { label: "Correlate", title: "Intelligent event processing", description: "Advanced correlation rules connect disparate security events to detect stealthy multi-stage attack chains in real time.", image: imgFeature },
            { label: "Detect", title: "Instant anomaly & intrusion recognition", description: "Continuous behavioral baselining flags abnormal data exfiltration, lateral movement and unauthorized privilege escalation instantly.", image: imgFeature },
            { label: "Triage", title: "24/7/365 real-time alert triage", description: "Continuous surveillance of incoming security alarms eliminates alert fatigue by swiftly separating false positives from high-risk anomalies.", image: imgBusiness },
            { label: "Contain", title: "Rapid containment & initial response", description: "Immediate intervention and automated playbook execution isolate compromised host endpoints and prevent lateral threat movement.", image: imgBusiness },
            { label: "Supervise", title: "Active access & perimeter supervision", description: "Administrative logins, privileged identity behavior and unauthorized perimeter access attempts are monitored around the clock.", image: imgBusiness },
        ],
    },
    features: {
        title: "Unparalleled Network Visibility Through Real-Time SIEM",
        items: [
            { title: "Centralized Multi-Source Aggregation", description: "Unified log collection across diverse operating systems, databases, cloud-native stacks and hybrid enterprise infrastructure", image: imgFeature },
            { title: "Intelligent Event Processing", description: "Algorithmic correlation rules that ingest and analyze millions of security events per second to reveal hidden anomalies", image: imgFeature },
            { title: "Instant Anomaly & Intrusion Recognition", description: "Behavioral profiling that flags abnormal data exfiltration, lateral movement and unauthorized escalation instantly", image: imgFeature },
            { title: "Real-Time Alert Triage", description: "Dedicated analysts monitor incoming alarms 24/7/365 and filter false positives from high-risk anomalies", image: imgBusiness },
            { title: "Containment & Initial Response", description: "Automated playbooks and immediate intervention isolate compromised hosts before threats spread", image: imgBusiness },
            { title: "Access & Perimeter Supervision", description: "Proactive monitoring of administrative logins, privileged identities and perimeter access attempts", image: imgPromotion },
            { title: "Unified Log & SIEM Analytics", description: "Complete infrastructure visibility through centralized log aggregation, behavioral analytics and predictive threat modeling", image: imgPromotion },
        ],
    },
    howItWorks: {
        title: "How ASYST Delivers World-Class Cybersecurity",
        items: [
            { label: "Always-On Defense", title: "Always-on 24/7 human-in-the-loop defense", description: "Seasoned cybersecurity engineers work round-the-clock shifts, so your enterprise is never unguarded for a single second.", image: imgBusiness },
            { label: "Rapid Response", title: "Rapid time-to-detect & time-to-respond", description: "Streamlined alert correlation and automated response mechanisms shrink incident containment time from hours down to minutes.", image: imgFeature },
            { label: "Scalability & Resilience", title: "Enterprise scalability & resilience", description: "Built to handle petabytes of log telemetry without data loss, meeting strict sovereign and enterprise-grade reliability benchmarks.", image: imgPromotion },
        ],
    },
    businessModels: {
        title: "Mission-Critical Defense for Every Environment",
        items: [
            { icon: FlightOutlinedIcon, title: "Aviation", points: ["airline & airport systems", "operational continuity", "24/7 monitoring", "incident response"] },
            { icon: GavelOutlinedIcon, title: "Government & State-Owned", points: ["national infrastructure", "sovereign-grade protection", "security governance", "audit trail"] },
            { icon: AccountBalanceOutlinedIcon, title: "Banking & Financial", points: ["privileged access monitoring", "fraud-related anomalies", "data exfiltration detection", "compliance reporting"] },
            { icon: BusinessOutlinedIcon, title: "Corporate Enterprise", points: ["endpoint containment", "perimeter supervision", "alert triage", "threat intelligence"] },
            { icon: CloudOutlinedIcon, title: "Hybrid & Cloud", points: ["cloud-native log ingestion", "hybrid infrastructure", "unified SIEM", "behavioral analytics"] },
        ],
    },
    faq: {
        title: "Chronus Managed Cyber Defense FAQ",
        items: [
            { question: "What is Chronus?", answer: "Chronus is ASYST's managed Security Operations Center service, combining real-time SIEM technology, global threat intelligence and dedicated L1/L2 analysts to protect enterprise environments 24/7." },
            { question: "What does the SIEM platform monitor?", answer: "It aggregates and correlates logs from operating systems, databases, cloud-native stacks and hybrid infrastructure, analyzing millions of security events per second to reveal hidden anomalies." },
            { question: "Who monitors the alerts?", answer: "Dedicated L1 and L2 cyber defense analysts monitor and triage alerts around the clock, so your enterprise is never unguarded." },
            { question: "How fast can incidents be contained?", answer: "Streamlined alert correlation and automated response playbooks shrink containment time from hours down to minutes." },
            { question: "Can Chronus scale with our infrastructure?", answer: "Yes. The platform is built to handle petabytes of log telemetry without data loss and meets sovereign and enterprise-grade reliability benchmarks." },
            { question: "Which industries does Chronus protect?", answer: "Chronus protects national infrastructure, aviation hubs, corporate enterprises and other mission-critical platforms." },
        ],
    },
    cta: {
        title: "Ready to Strengthen Your Cyber Resilience?",
        description: "Talk with our cybersecurity specialists about your infrastructure, threat landscape and security operations objectives",
        button: "Request product demo",
    },
}

// ---------- terjemahan ID (struktur & urutan sama dengan chronusDetailEn) ----------

export const ChronusDetailConst = localized(chronusDetailEn, {
    hero: {
        title: "Lindungi Aset Penting dengan Pertahanan Siber Terkelola 24/7",
        description: "Perkuat perusahaan Anda dengan pemantauan ancaman sepanjang waktu, analitik SIEM real-time, dan respons insiden proaktif untuk menghadapi ancaman siber yang canggih sambil tetap menjaga kelancaran operasional",
        primaryButton: "Hubungi Ahli Keamanan",
        secondaryButton: "Jelajahi Chronus",
        stats: [
            { label: "Pemantauan Ancaman" },
            { label: "Analis Khusus" },
            { label: "Analitik SIEM" },
            { value: "Hitungan Menit", label: "Penanganan Insiden" },
        ],
    },
    overview: {
        title: "Ancaman Modern Membutuhkan Pertahanan Modern",
        paragraphs: [
            "Di era ekonomi digital yang selalu aktif, ASYST menghadirkan Security Operations Center (SOC) end-to-end yang menyeimbangkan kontrol keamanan yang ketat dengan kelincahan bisnis.",
            "Dengan memadukan teknologi SIEM canggih, intelijen ancaman global, dan analis L1/L2 khusus, Chronus mendeteksi, menahan, dan menetralkan kerentanan sebelum berdampak, melindungi infrastruktur nasional, perusahaan, dan ekosistem penerbangan dengan keahlian keamanan yang telah teruji.",
        ],
        challenges: [
            { title: "Kelelahan Alert", description: "Saring false positive dengan cepat agar analis fokus pada anomali berisiko tinggi" },
            { title: "Serangan Bertahap yang Tersembunyi", description: "Korelasikan berbagai event keamanan untuk mengungkap rantai serangan secara real-time" },
            { title: "Pergerakan Ancaman Lateral", description: "Isolasi endpoint yang terkompromi sebelum ancaman menyebar ke seluruh jaringan" },
            { title: "Visibilitas yang Terfragmentasi", description: "Satukan log dari sistem operasi, database, cloud, dan infrastruktur hybrid" },
        ],
    },
    lifecycle: {
        title: "Perlindungan Siber Menyeluruh di Seluruh Perusahaan Anda",
        description: "Menghadirkan tata kelola keamanan yang terarah, remediasi operasional yang cepat, dan visibilitas end-to-end bagi setiap stakeholder bisnis",
        items: [
            { label: "Kumpulkan", title: "Agregasi multi-sumber terpusat", description: "Pengumpulan log terpadu dari berbagai sistem operasi, database, stack cloud-native, dan infrastruktur enterprise hybrid." },
            { label: "Korelasikan", title: "Pemrosesan event yang cerdas", description: "Aturan korelasi canggih menghubungkan berbagai event keamanan untuk mendeteksi rantai serangan bertahap yang tersembunyi secara real-time." },
            { label: "Deteksi", title: "Pengenalan anomali & intrusi seketika", description: "Baseline perilaku yang berkelanjutan langsung menandai eksfiltrasi data abnormal, pergerakan lateral, dan eskalasi hak akses yang tidak sah." },
            { label: "Triase", title: "Triase alert real-time 24/7/365", description: "Pengawasan terus-menerus atas alarm keamanan yang masuk menghilangkan kelelahan alert dengan cepat memisahkan false positive dari anomali berisiko tinggi." },
            { label: "Tahan", title: "Penahanan cepat & respons awal", description: "Intervensi segera dan eksekusi playbook otomatis mengisolasi endpoint host yang terkompromi dan mencegah pergerakan ancaman lateral." },
            { label: "Awasi", title: "Pengawasan akses & perimeter aktif", description: "Login administratif, perilaku identitas istimewa, dan upaya akses perimeter yang tidak sah dipantau sepanjang waktu." },
        ],
    },
    features: {
        title: "Visibilitas Jaringan Tanpa Tanding melalui SIEM Real-Time",
        items: [
            { title: "Agregasi Multi-Sumber Terpusat", description: "Pengumpulan log terpadu dari berbagai sistem operasi, database, stack cloud-native, dan infrastruktur enterprise hybrid" },
            { title: "Pemrosesan Event yang Cerdas", description: "Aturan korelasi algoritmik yang menyerap dan menganalisis jutaan event keamanan per detik untuk mengungkap anomali tersembunyi" },
            { title: "Pengenalan Anomali & Intrusi Seketika", description: "Profil perilaku yang langsung menandai eksfiltrasi data abnormal, pergerakan lateral, dan eskalasi yang tidak sah" },
            { title: "Triase Alert Real-Time", description: "Analis khusus memantau alarm yang masuk 24/7/365 dan memisahkan false positive dari anomali berisiko tinggi" },
            { title: "Penahanan & Respons Awal", description: "Playbook otomatis dan intervensi segera mengisolasi host yang terkompromi sebelum ancaman menyebar" },
            { title: "Pengawasan Akses & Perimeter", description: "Pemantauan proaktif atas login administratif, identitas istimewa, dan upaya akses perimeter" },
            { title: "Analitik Log & SIEM Terpadu", description: "Visibilitas infrastruktur menyeluruh melalui agregasi log terpusat, analitik perilaku, dan pemodelan ancaman prediktif" },
        ],
    },
    howItWorks: {
        title: "Bagaimana ASYST Menghadirkan Keamanan Siber Kelas Dunia",
        items: [
            { label: "Pertahanan Selalu Aktif", title: "Pertahanan 24/7 dengan keterlibatan manusia", description: "Engineer keamanan siber berpengalaman bekerja dalam shift sepanjang waktu, sehingga perusahaan Anda tidak pernah tanpa penjagaan sedetik pun." },
            { label: "Respons Cepat", title: "Waktu deteksi & respons yang cepat", description: "Korelasi alert yang efisien dan mekanisme respons otomatis memangkas waktu penanganan insiden dari hitungan jam menjadi menit." },
            { label: "Skalabilitas & Ketahanan", title: "Skalabilitas & ketahanan kelas enterprise", description: "Dibangun untuk menangani telemetri log berukuran petabyte tanpa kehilangan data, memenuhi standar keandalan kelas negara dan enterprise yang ketat." },
        ],
    },
    businessModels: {
        title: "Pertahanan Kritis untuk Setiap Lingkungan",
        items: [
            { title: "Penerbangan", points: ["sistem maskapai & bandara", "kelangsungan operasional", "pemantauan 24/7", "respons insiden"] },
            { title: "Pemerintah & BUMN", points: ["infrastruktur nasional", "perlindungan kelas negara", "tata kelola keamanan", "jejak audit"] },
            { title: "Perbankan & Keuangan", points: ["pemantauan akses istimewa", "anomali terkait fraud", "deteksi eksfiltrasi data", "pelaporan kepatuhan"] },
            { title: "Perusahaan Korporat", points: ["penahanan endpoint", "pengawasan perimeter", "triase alert", "intelijen ancaman"] },
            { title: "Hybrid & Cloud", points: ["penyerapan log cloud-native", "infrastruktur hybrid", "SIEM terpadu", "analitik perilaku"] },
        ],
    },
    faq: {
        title: "FAQ Chronus Managed Cyber Defense",
        items: [
            { question: "Apa itu Chronus?", answer: "Chronus adalah layanan Security Operations Center terkelola dari ASYST yang memadukan teknologi SIEM real-time, intelijen ancaman global, dan analis L1/L2 khusus untuk melindungi lingkungan enterprise 24/7." },
            { question: "Apa yang dipantau oleh platform SIEM?", answer: "Platform ini mengumpulkan dan mengorelasikan log dari sistem operasi, database, stack cloud-native, dan infrastruktur hybrid, serta menganalisis jutaan event keamanan per detik untuk mengungkap anomali tersembunyi." },
            { question: "Siapa yang memantau alert?", answer: "Analis pertahanan siber L1 dan L2 khusus memantau dan melakukan triase alert sepanjang waktu, sehingga perusahaan Anda tidak pernah tanpa penjagaan." },
            { question: "Seberapa cepat insiden dapat ditangani?", answer: "Korelasi alert yang efisien dan playbook respons otomatis memangkas waktu penanganan dari hitungan jam menjadi menit." },
            { question: "Apakah Chronus dapat berkembang seiring infrastruktur kami?", answer: "Ya. Platform ini dibangun untuk menangani telemetri log berukuran petabyte tanpa kehilangan data dan memenuhi standar keandalan kelas negara dan enterprise." },
            { question: "Industri apa saja yang dilindungi Chronus?", answer: "Chronus melindungi infrastruktur nasional, pusat penerbangan, perusahaan korporat, dan platform kritis lainnya." },
        ],
    },
    cta: {
        title: "Siap Memperkuat Ketahanan Siber Anda?",
        description: "Diskusikan infrastruktur, lanskap ancaman, dan tujuan operasional keamanan Anda bersama spesialis keamanan siber kami",
        button: "Minta demo produk",
    },
});
