import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import FolderOffOutlinedIcon from "@mui/icons-material/FolderOffOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import EventBusyOutlinedIcon from "@mui/icons-material/EventBusyOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";

import imgDashboard from "assets/asyst/img/background/product/smart-document/dashboard.jpg";
import imgAskAi from "assets/asyst/img/background/product/smart-document/ask-ai.png";
import imgAskAiChat from "assets/asyst/img/background/product/smart-document/ask-ai-chat.png";
import imgDocument from "assets/asyst/img/background/product/smart-document/document.png";
import imgContract from "assets/asyst/img/background/product/smart-document/contract.png";
import imgGraph from "assets/asyst/img/background/product/smart-document/graph.png";
import imgAdmin from "assets/asyst/img/background/product/smart-document/admin.png";
import { ProductDetailContent } from "consts/product-detail.const";
import { localized } from "shared/i18n";

// Konten dua bahasa: konstanta `...En` = teks EN lengkap; ekspor `localized(...En, {...})` di bawah file = terjemahan ID
// (teks saja, struktur & urutan sama).
// Konten mengikuti smart-document.asyst.co.id/landing

const smartDocumentDetailEn: ProductDetailContent = {
    hero: {
        title: "Every Document Your Company Owns, Finally Answerable",
        description: "Asyst Smart Document parses, classifies and indexes every PDF you upload, then answers questions about them with citations, tracks contract expiries and keeps each answer inside the permissions your org chart already defines",
        primaryButton: "Talk to Document AI Expert",
        secondaryButton: "Explore Smart Document",
        stats: [
            { icon: DescriptionOutlinedIcon, value: "10.000+", label: "Documents per Deployment" },
            { icon: AdminPanelSettingsOutlinedIcon, value: "4-Level", label: "Access Control" },
            { icon: FormatQuoteOutlinedIcon, value: "Every Answer", label: "Cited to Source Page" },
            { icon: CloudOutlinedIcon, value: "Your Cloud", label: "Private Deployment" },
        ],
    },
    overview: {
        title: "Enterprise Knowledge Lives in Ten Years of PDFs, Not in a Chatbot",
        paragraphs: [
            "Contracts, tenders, SOPs, invoices and technical manuals are scattered across shared drives, readable only by whoever remembers the filename. Generic AI tools can summarize a file you hand them, but they can't tell you which of your 10.000 documents matters, and they happily leak what a staff member was never allowed to read.",
            "Asyst Smart Document is built the other way around. Every upload runs a real pipeline (parse, classify, extract fields, embed, graph) and every answer is retrieved only from documents the asker's department, division, section and position level allow. Deployed in your own cloud, with the model of your choice (OpenAI or Qwen).",
        ],
        image: imgDashboard,
        challenges: [
            { icon: FolderOffOutlinedIcon, title: "Scattered Archives", description: "Documents spread across shared drives and found only by filename" },
            { icon: ManageSearchOutlinedIcon, title: "Answers Buried in PDFs", description: "Simple questions mean opening several PDFs and a spreadsheet" },
            { icon: LockOpenOutlinedIcon, title: "Uncontrolled AI Access", description: "Generic AI tools ignore who is actually allowed to read what" },
            { icon: EventBusyOutlinedIcon, title: "Missed Renewal Dates", description: "Contract expiries tracked manually in spreadsheets, if at all" },
        ],
    },
    lifecycle: {
        title: "One Pipeline from Raw PDF to an Answer You Can Act On",
        description: "Every upload runs through the same pipeline, so each document becomes searchable, structured and answerable within the access rules of your organization",
        items: [
            { label: "Upload", title: "Scope every upload", description: "Restrict a document to a department, division, section or minimum position level at the moment it is uploaded. Re-upload a revised document and it becomes a new version, with watchers notified.", image: imgDocument },
            { label: "Parse", title: "Read every page with OCR", description: "Scanned and digital PDFs are parsed into text, headings and chunks, with the status, token cost and failures of each step reported per document.", image: imgDocument },
            { label: "Classify", title: "Self-discovering document types", description: "The first time a new kind of document arrives, its extraction schema is discovered automatically, with no template building and no field mapping project.", image: imgDocument },
            { label: "Extract", title: "Fields extracted on upload", description: "Counterparty, contract number, value, start and end dates are pulled from the document itself, so no one retypes them into a spreadsheet.", image: imgContract },
            { label: "Graph", title: "Knowledge graph, not a black box", description: "Every document breaks down into headings and chunks you can explore. When an answer looks surprising, trace it back through the graph to the exact section it came from.", image: imgGraph },
            { label: "Ask", title: "Ask AI, grounded in your own files", description: "Ask in Bahasa Indonesia or English. Answers come back with the source document attached, and only documents your role can see are ever retrieved.", image: imgAskAiChat },
        ],
    },
    features: {
        title: "Everything You Need to Put Your Document Archive to Work",
        items: [
            { title: "Ask AI", description: "Ask in Bahasa Indonesia or English and get answers with the source document attached. Pick a speed profile per question: Fast, Smart or Advanced", image: imgAskAi },
            { title: "Contract Radar", description: "Terms, counterparties, contract numbers and end dates are extracted on upload. Filter by expiring soon, expired or active before a renewal date surprises anyone", image: imgContract },
            { title: "Self-Discovering Document Types", description: "Extraction schemas for new kinds of documents are discovered automatically, with no template building or field mapping", image: imgDocument },
            { title: "Pipeline You Can Watch", description: "Parsing, classification, field extraction and embedding each report their own status, token cost and failures per document", image: imgDocument },
            { title: "Roles, Org Chart & Agents", description: "Permissions are fixed capabilities in code; admins compose roles, positions and custom Ask AI personas on top of them", image: imgAdmin },
            { title: "Versioning & Watchers", description: "Re-upload a revised document and it becomes a new version, and watchers get notified instead of hunting for the latest file", image: imgDocument },
            { title: "Knowledge Graph Explorer", description: "Explore every document as headings and chunks, and trace any answer back to the exact section it came from", image: imgGraph },
        ],
    },
    howItWorks: {
        title: "Whatever Your Team Is Drowning In, Smart Document Reads It First",
        items: [
            { label: "Contract & Procurement", title: "Never miss a renewal date again", description: "Contract terms are extracted on upload, every contract can be filtered by expiring soon, expired or active, and watchers are notified before the window closes. Ask which vendor offers the shortest SLA across six proposals and get the answer with each source document attached.", image: imgContract },
            { label: "Knowledge & Onboarding", title: "The answer is in the SOP. Now people can find it", description: "New staff ask in plain language and get a cited answer instead of a chat thread and a two-day wait. Admins add agent personas per team, such as a blunt reviewer or a compliance checker, and conversations stay saved so a long review can resume the next morning.", image: imgAskAiChat },
            { label: "Governance & Audit", title: "Access follows the org chart, not a folder name", description: "Each upload is scoped to a department, division, section or position level. Roles are built from real permissions defined in code, and invitation codes, member approval and per-company quotas keep multi-entity groups separated.", image: imgAdmin },
        ],
    },
    businessModels: {
        title: "Built with Teams Who Had the Document Problem First",
        items: [
            { icon: FlightOutlinedIcon, title: "Aviation Services", points: ["technical manuals", "cost estimates", "operational SOPs", "answers in minutes"] },
            { icon: ShoppingCartOutlinedIcon, title: "Procurement", points: ["tender comparison", "contract register", "expiry alerts", "zero manual trackers"] },
            { icon: ApartmentOutlinedIcon, title: "Shared Services", points: ["one portal for all entities", "per-company quotas", "member approval", "central search"] },
            { icon: SchoolOutlinedIcon, title: "Knowledge & HR", points: ["SOP search", "staff onboarding", "saved conversations", "team agents"] },
            { icon: GavelOutlinedIcon, title: "Legal & Compliance", points: ["role-scoped access", "version history", "audit-ready permissions", "cited answers"] },
        ],
    },
    faq: {
        title: "Smart Document FAQ",
        items: [
            { question: "What is Asyst Smart Document?", answer: "Asyst Smart Document is a role-aware document intelligence platform by ASYST. It parses, classifies and indexes your PDFs with RAG and OCR, then answers questions with citations to the source document and page." },
            { question: "Which languages can I ask in?", answer: "You can ask in Bahasa Indonesia or English." },
            { question: "Who can see which documents?", answer: "Each upload can be restricted to a department, division, section or minimum position level, and Ask AI only retrieves documents the asker's role is allowed to see." },
            { question: "Where is the platform deployed?", answer: "Smart Document is deployed privately in your own cloud, with OpenAI or Qwen models." },
            { question: "Can it track contract expiry dates?", answer: "Yes. Contract terms, counterparties, numbers and end dates are extracted on upload, and contracts can be filtered by expiring soon, expired or active, with watchers notified." },
            { question: "Do we need to build templates for each document type?", answer: "No. The extraction schema for a new kind of document is discovered automatically the first time it arrives." },
            { question: "How can we verify an answer?", answer: "Every answer is cited back to its source document, and the knowledge graph lets you trace it to the exact section it came from." },
        ],
    },
    cta: {
        title: "Put Your Document Archive to Work This Quarter",
        description: "Start with one folder of contracts. Upload, ask and see the citations for yourself",
        button: "Request a walkthrough",
    },
}

// ---------- terjemahan ID (struktur & urutan sama dengan smartDocumentDetailEn) ----------

export const SmartDocumentDetailConst = localized(smartDocumentDetailEn, {
    hero: {
        title: "Setiap Dokumen Milik Perusahaan Anda, Akhirnya Bisa Ditanya",
        description: "Asyst Smart Document mengurai, mengklasifikasi, dan mengindeks setiap PDF yang Anda unggah, lalu menjawab pertanyaan tentang isinya lengkap dengan sitasi, memantau masa berlaku kontrak, dan menjaga setiap jawaban tetap dalam batas hak akses sesuai struktur organisasi Anda",
        primaryButton: "Hubungi Ahli Document AI",
        secondaryButton: "Jelajahi Smart Document",
        stats: [
            { label: "Dokumen per Deployment" },
            { value: "4 Tingkat", label: "Kontrol Akses" },
            { value: "Setiap Jawaban", label: "Bersitasi ke Halaman Sumber" },
            { value: "Cloud Anda", label: "Deployment Privat" },
        ],
    },
    overview: {
        title: "Pengetahuan Perusahaan Tersimpan di PDF Sepuluh Tahun Terakhir, Bukan di Chatbot",
        paragraphs: [
            "Kontrak, tender, SOP, faktur, dan manual teknis tersebar di berbagai shared drive dan hanya bisa ditemukan oleh orang yang ingat nama berkasnya. Tools AI umum memang bisa merangkum berkas yang Anda berikan, tetapi tidak tahu mana dari 10.000 dokumen Anda yang penting, dan bisa saja membocorkan isi yang seharusnya tidak boleh dibaca seorang karyawan.",
            "Asyst Smart Document dibangun dengan cara sebaliknya. Setiap unggahan melewati pipeline nyata (parse, klasifikasi, ekstraksi field, embedding, graph) dan setiap jawaban hanya diambil dari dokumen yang diizinkan untuk departemen, divisi, seksi, dan tingkat jabatan penanya. Di-deploy di cloud Anda sendiri, dengan model pilihan Anda (OpenAI atau Qwen).",
        ],
        challenges: [
            { title: "Arsip yang Tersebar", description: "Dokumen tersebar di berbagai shared drive dan hanya bisa ditemukan lewat nama berkas" },
            { title: "Jawaban Terkubur di PDF", description: "Pertanyaan sederhana berarti harus membuka beberapa PDF dan spreadsheet" },
            { title: "Akses AI yang Tidak Terkendali", description: "Tools AI umum mengabaikan siapa yang sebenarnya boleh membaca apa" },
            { title: "Tanggal Perpanjangan Terlewat", description: "Masa berlaku kontrak dipantau manual di spreadsheet, itu pun kalau ada" },
        ],
    },
    lifecycle: {
        title: "Satu Pipeline dari PDF Mentah hingga Jawaban yang Bisa Ditindaklanjuti",
        description: "Setiap unggahan melewati pipeline yang sama, sehingga setiap dokumen menjadi mudah dicari, terstruktur, dan bisa ditanya sesuai aturan akses organisasi Anda",
        items: [
            { label: "Unggah", title: "Atur cakupan setiap unggahan", description: "Batasi dokumen ke departemen, divisi, seksi, atau tingkat jabatan minimum saat diunggah. Unggah ulang dokumen revisi dan dokumen itu menjadi versi baru, dengan notifikasi ke para watcher." },
            { label: "Parse", title: "Baca setiap halaman dengan OCR", description: "PDF hasil pindaian maupun digital diurai menjadi teks, judul, dan potongan, dengan status, biaya token, dan kegagalan setiap langkah dilaporkan per dokumen." },
            { label: "Klasifikasi", title: "Jenis dokumen yang dikenali otomatis", description: "Saat jenis dokumen baru pertama kali masuk, skema ekstraksinya ditemukan secara otomatis, tanpa membuat template dan tanpa proyek pemetaan field." },
            { label: "Ekstraksi", title: "Field diekstraksi saat diunggah", description: "Pihak lawan kontrak, nomor kontrak, nilai, tanggal mulai, dan tanggal berakhir diambil langsung dari dokumen, sehingga tidak ada yang perlu mengetik ulang ke spreadsheet." },
            { label: "Graph", title: "Knowledge graph, bukan kotak hitam", description: "Setiap dokumen dipecah menjadi judul dan potongan yang dapat Anda telusuri. Saat jawaban terlihat janggal, telusuri kembali melalui graph hingga ke bagian persis asal jawabannya." },
            { label: "Tanya", title: "Tanya AI, berdasarkan berkas Anda sendiri", description: "Bertanya dalam Bahasa Indonesia atau Inggris. Jawaban disertai dokumen sumbernya, dan hanya dokumen yang boleh dilihat peran Anda yang akan diambil." },
        ],
    },
    features: {
        title: "Semua yang Anda Butuhkan agar Arsip Dokumen Benar-Benar Bermanfaat",
        items: [
            { title: "Tanya AI", description: "Bertanya dalam Bahasa Indonesia atau Inggris dan dapatkan jawaban beserta dokumen sumbernya. Pilih profil kecepatan per pertanyaan: Fast, Smart, atau Advanced" },
            { title: "Radar Kontrak", description: "Ketentuan, pihak lawan, nomor kontrak, dan tanggal berakhir diekstraksi saat diunggah. Filter berdasarkan segera berakhir, sudah berakhir, atau aktif sebelum tanggal perpanjangan mengejutkan siapa pun" },
            { title: "Jenis Dokumen yang Dikenali Otomatis", description: "Skema ekstraksi untuk jenis dokumen baru ditemukan secara otomatis, tanpa membuat template atau memetakan field" },
            { title: "Pipeline yang Bisa Dipantau", description: "Parsing, klasifikasi, ekstraksi field, dan embedding masing-masing melaporkan status, biaya token, dan kegagalannya per dokumen" },
            { title: "Peran, Struktur Organisasi & Agent", description: "Hak akses berupa kapabilitas tetap di dalam kode; admin menyusun peran, jabatan, dan persona Tanya AI kustom di atasnya" },
            { title: "Versi & Watcher", description: "Unggah ulang dokumen revisi dan dokumen itu menjadi versi baru, dan para watcher mendapat notifikasi tanpa perlu mencari berkas terbaru" },
            { title: "Penjelajah Knowledge Graph", description: "Telusuri setiap dokumen sebagai judul dan potongan, dan lacak jawaban apa pun hingga ke bagian persis asalnya" },
        ],
    },
    howItWorks: {
        title: "Apa pun Dokumen yang Menumpuk di Tim Anda, Smart Document Membacanya Lebih Dulu",
        items: [
            { label: "Kontrak & Pengadaan", title: "Tidak pernah lagi melewatkan tanggal perpanjangan", description: "Ketentuan kontrak diekstraksi saat diunggah, setiap kontrak dapat difilter berdasarkan segera berakhir, sudah berakhir, atau aktif, dan para watcher mendapat notifikasi sebelum tenggat lewat. Tanyakan vendor mana yang menawarkan SLA terpendek dari enam proposal dan dapatkan jawabannya lengkap dengan dokumen sumber masing-masing." },
            { label: "Pengetahuan & Onboarding", title: "Jawabannya ada di SOP. Kini orang bisa menemukannya", description: "Karyawan baru bertanya dengan bahasa sehari-hari dan mendapat jawaban bersitasi, bukan utas chat dan menunggu dua hari. Admin menambahkan persona agent per tim, seperti reviewer yang lugas atau pemeriksa kepatuhan, dan percakapan tersimpan sehingga review panjang dapat dilanjutkan keesokan paginya." },
            { label: "Tata Kelola & Audit", title: "Akses mengikuti struktur organisasi, bukan nama folder", description: "Setiap unggahan dibatasi ke departemen, divisi, seksi, atau tingkat jabatan. Peran disusun dari hak akses nyata yang didefinisikan dalam kode, sementara kode undangan, persetujuan anggota, dan kuota per perusahaan menjaga grup multi-entitas tetap terpisah." },
        ],
    },
    businessModels: {
        title: "Dibangun Bersama Tim yang Lebih Dulu Menghadapi Masalah Dokumen",
        items: [
            { title: "Layanan Penerbangan", points: ["manual teknis", "estimasi biaya", "SOP operasional", "jawaban dalam hitungan menit"] },
            { title: "Pengadaan", points: ["perbandingan tender", "daftar kontrak", "peringatan masa berlaku", "tanpa pelacak manual"] },
            { title: "Shared Services", points: ["satu portal untuk semua entitas", "kuota per perusahaan", "persetujuan anggota", "pencarian terpusat"] },
            { title: "Pengetahuan & SDM", points: ["pencarian SOP", "onboarding karyawan", "percakapan tersimpan", "agent per tim"] },
            { title: "Legal & Kepatuhan", points: ["akses sesuai peran", "riwayat versi", "hak akses siap audit", "jawaban bersitasi"] },
        ],
    },
    faq: {
        title: "FAQ Smart Document",
        items: [
            { question: "Apa itu Asyst Smart Document?", answer: "Asyst Smart Document adalah platform document intelligence berbasis peran dari ASYST. Platform ini mengurai, mengklasifikasi, dan mengindeks PDF Anda dengan RAG dan OCR, lalu menjawab pertanyaan dengan sitasi ke dokumen dan halaman sumbernya." },
            { question: "Dalam bahasa apa saya bisa bertanya?", answer: "Anda dapat bertanya dalam Bahasa Indonesia atau Inggris." },
            { question: "Siapa yang dapat melihat dokumen apa?", answer: "Setiap unggahan dapat dibatasi ke departemen, divisi, seksi, atau tingkat jabatan minimum, dan Tanya AI hanya mengambil dokumen yang boleh dilihat oleh peran penanya." },
            { question: "Di mana platform ini di-deploy?", answer: "Smart Document di-deploy secara privat di cloud Anda sendiri, dengan model OpenAI atau Qwen." },
            { question: "Apakah platform ini dapat memantau tanggal berakhirnya kontrak?", answer: "Bisa. Ketentuan kontrak, pihak lawan, nomor, dan tanggal berakhir diekstraksi saat diunggah, dan kontrak dapat difilter berdasarkan segera berakhir, sudah berakhir, atau aktif, dengan notifikasi ke para watcher." },
            { question: "Apakah kami perlu membuat template untuk setiap jenis dokumen?", answer: "Tidak. Skema ekstraksi untuk jenis dokumen baru ditemukan secara otomatis saat pertama kali masuk." },
            { question: "Bagaimana cara memverifikasi sebuah jawaban?", answer: "Setiap jawaban disertai sitasi ke dokumen sumbernya, dan knowledge graph memungkinkan Anda menelusurinya hingga ke bagian persis asal jawaban." },
        ],
    },
    cta: {
        title: "Manfaatkan Arsip Dokumen Anda Kuartal Ini",
        description: "Mulai dengan satu folder kontrak. Unggah, tanyakan, dan lihat sendiri sitasinya",
        button: "Minta walkthrough",
    },
});
