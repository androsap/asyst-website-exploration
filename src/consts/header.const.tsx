// Menu header (desain revamp 2026). Sementara hardcode; nanti bisa diganti data dari API.
// `link` kosong = halaman tujuan belum ada (item tetap tampil tapi tidak bisa diklik).

import imgFeatured from "assets/asyst/img/background/services-solutions/amala1.webp";
import { LANGUAGES, localized } from "shared/i18n";

export interface HeaderLinkItem {
    label: string;
    link?: string;
}

export interface HeaderProductItem {
    name: string;
    description: string;
    link?: string;
}

export interface HeaderProductCategory {
    label: string;
    /** Label singkat untuk badge di menu mobile. */
    shortLabel?: string;
    title: string;
    description: string;
    items: HeaderProductItem[];
}

export interface HeaderGroup {
    label: string;
    /** Halaman overview grup (judul panel jadi link ke sini). */
    link?: string;
    /** Label tombol primary di sidebar panel (ke `link`). */
    linkLabel?: string;
    items: HeaderLinkItem[];
}

export const HeaderPanelSubtitle = localized("Enterprise software to modernize operations", "Software enterprise untuk memodernisasi operasional");

export const HeaderProductsLink = "/product";

export const HeaderProductsConst = localized<HeaderProductCategory[]>([
    {
        label: "Enterprise Products",
        title: "Enterprise software for complex business operations",
        description: "ASYST develops modular enterprise software products that help organizations manage critical processes, connect operational data, and build more efficient digital workflows",
        items: [
            { name: "Apollo", description: "Apollo brings core business processes integrate platform", link: "/product/apollo" },
            // Amala = platform loyalty
            { name: "Amala", description: "Amala provides a configurable loyalty platform for organizations", link: "/product/amala" },
            { name: "Chronus", description: "Chronus brings fleet acquisition, maintenance, operational monitoring", link: "/product/chronus" },
            { name: "Hermes", description: "Hermes brings cargo sales, shipment management", link: "/product/hermes" },
            { name: "Elea", description: "Elea helps IT teams manage requests, tickets", link: "/product/elea" },
            { name: "Document System", description: "Document helps IT teams and corporate to manage files", link: "/product/smart-document" },
        ],
    },
    {
        label: "Travel Management",
        title: "Make business travel easier to manage",
        description: "Digitize travel requests, approvals, booking, expense management, reporting, and travel data through a connected corporate travel experience",
        items: [
            { name: "Travel management", description: "Athena currently covers travel approval, booking travel information", link: "/product/athena" },
        ],
    },
    {
        label: "Commercial Solutions",
        shortLabel: "Commercial",
        title: "Turn commercial processes into connected digital workflows",
        description: "Support sales, customer, transaction, and commercial processes with technology designed around your organization's operating model",
        items: [
            { name: "Commercial", description: "Support sales, customer, transaction, and commercial" },
        ],
    },
    {
        label: "Operations Solutions",
        shortLabel: "Operations",
        title: "Run complex operations with better visibility",
        description: "Connect operational processes, assets, people, schedules, and data to help teams monitor performance and make informed decisions",
        items: [
            { name: "Chronus", description: "combines fleet acquisition, maintenance and operational monitoring", link: "/product/chronus" },
        ],
    },
    {
        label: "Cargo Solutions",
        shortLabel: "Cargo",
        title: "Connect cargo operations from booking to delivery",
        description: "Digitize cargo sales, reservations, regulated-agent processes, warehouse management, shipment tracking, and operational visibility",
        items: [
            { name: "Hermes", description: "end-to-end cargo platform covering cargo sales and reservation, regulated-agent workflows", link: "/product/hermes" },
        ],
    },
    {
        label: "IT Service Assistant",
        shortLabel: "IT Assistant",
        title: "Make IT service management simpler",
        description: "Automate service requests, tickets, SLAs, support workflows, knowledge management, and service analytics through an integrated ITSM experience",
        items: [
            { name: "Elea", description: "product material includes ticket management, multi-channel ticket creation", link: "/product/elea" },
        ],
    },
], [
    {
        label: "Produk Enterprise",
        title: "Software enterprise untuk operasional bisnis yang kompleks",
        description: "ASYST mengembangkan produk software enterprise modular yang membantu organisasi mengelola proses penting, menghubungkan data operasional, dan membangun alur kerja digital yang lebih efisien",
        items: [
            { description: "Apollo mengintegrasikan proses bisnis inti dalam satu platform" },
            { description: "Amala menyediakan platform loyalitas yang dapat dikonfigurasi untuk organisasi" },
            { description: "Chronus mencakup akuisisi armada, perawatan, dan pemantauan operasional" },
            { description: "Hermes mencakup penjualan kargo dan manajemen pengiriman" },
            { description: "Elea membantu tim IT mengelola permintaan dan tiket" },
            { name: "Sistem Dokumen", description: "Membantu tim IT dan perusahaan mengelola berkas" },
        ],
    },
    {
        label: "Manajemen Perjalanan",
        title: "Perjalanan dinas jadi lebih mudah dikelola",
        description: "Digitalisasi pengajuan perjalanan, persetujuan, pemesanan, pengelolaan biaya, pelaporan, dan data perjalanan melalui pengalaman perjalanan korporat yang terhubung",
        items: [
            { name: "Manajemen perjalanan", description: "Athena mencakup persetujuan perjalanan dan informasi pemesanan perjalanan" },
        ],
    },
    {
        label: "Solusi Komersial",
        shortLabel: "Komersial",
        title: "Ubah proses komersial menjadi alur kerja digital yang terhubung",
        description: "Dukung proses penjualan, pelanggan, transaksi, dan komersial dengan teknologi yang dirancang sesuai model operasional organisasi Anda",
        items: [
            { name: "Komersial", description: "Mendukung proses penjualan, pelanggan, transaksi, dan komersial" },
        ],
    },
    {
        label: "Solusi Operasional",
        shortLabel: "Operasional",
        title: "Jalankan operasional yang kompleks dengan visibilitas lebih baik",
        description: "Hubungkan proses operasional, aset, SDM, jadwal, dan data agar tim dapat memantau kinerja dan mengambil keputusan yang tepat",
        items: [
            { description: "menggabungkan akuisisi armada, perawatan, dan pemantauan operasional" },
        ],
    },
    {
        label: "Solusi Kargo",
        shortLabel: "Kargo",
        title: "Hubungkan operasional kargo dari pemesanan hingga pengiriman",
        description: "Digitalisasi penjualan kargo, reservasi, proses regulated agent, manajemen gudang, pelacakan kiriman, dan visibilitas operasional",
        items: [
            { description: "platform kargo end-to-end yang mencakup penjualan dan reservasi kargo serta alur kerja regulated agent" },
        ],
    },
    {
        label: "Asisten Layanan IT",
        shortLabel: "Asisten IT",
        title: "Pengelolaan layanan IT jadi lebih sederhana",
        description: "Otomatisasi permintaan layanan, tiket, SLA, alur dukungan, manajemen pengetahuan, dan analitik layanan melalui pengalaman ITSM yang terintegrasi",
        items: [
            { description: "mencakup manajemen tiket dan pembuatan tiket dari berbagai kanal" },
        ],
    },
]);

export const HeaderSolutionsConst = localized<HeaderGroup[]>([
    {
        label: "Solutions",
        link: "/solution",
        linkLabel: "All Solutions",
        // Baru SOC yang punya halaman detail; lainnya ke halaman Solutions (sama seperti consts/solution.const)
        items: [
            { label: "Security Operation Center", link: "/solution/security-operations-center" },
            { label: "Infra, App, Platform Operation and ITSM", link: "/solution" },
            { label: "Service Orchestration and Data Management", link: "/solution" },
            { label: "Application Modernization", link: "/solution" },
            { label: "Digital Business Consulting", link: "/solution" },
            { label: "Seat Management", link: "/solution" },
        ],
    },
    {
        label: "Industries",
        link: "/industry",
        linkLabel: "All Industries",
        items: [
            { label: "Enterprise", link: "/industry" },
            { label: "Aviation", link: "/industry/aviation" },
            { label: "Transportation", link: "/industry" },
            { label: "Logistics", link: "/industry" },
            { label: "Government", link: "/industry" },
            { label: "Other industries", link: "/industry" },
        ],
    },
], [
    {
        label: "Solusi",
        linkLabel: "Semua Solusi",
        items: [
            { label: "Security Operation Center" },
            { label: "Operasional Infra, Aplikasi, Platform & ITSM" },
            { label: "Orkestrasi Layanan & Manajemen Data" },
            { label: "Modernisasi Aplikasi" },
            { label: "Konsultasi Bisnis Digital" },
            { label: "Manajemen Kursi" },
        ],
    },
    {
        label: "Industri",
        linkLabel: "Semua Industri",
        items: [
            { label: "Enterprise" },
            { label: "Penerbangan" },
            { label: "Transportasi" },
            { label: "Logistik" },
            { label: "Pemerintahan" },
            { label: "Industri lainnya" },
        ],
    },
]);

export const HeaderCompanyConst = localized<HeaderGroup>({
    label: "Aero Systems",
    items: [
        { label: "About us", link: "/about" },
        { label: "Careers", link: "/career" },
        { label: "FAQ" },
        { label: "Support" },
        { label: "Help and Documentation" },
    ],
}, {
    items: [
        { label: "Tentang kami" },
        { label: "Karier" },
        { label: "FAQ" },
        { label: "Dukungan" },
        { label: "Bantuan & Dokumentasi" },
    ],
});

export const HeaderNewsLink = "/news";

/** Kartu "Featured" di menu mobile. */
export const HeaderFeaturedConst = localized({
    label: "Product",
    title: "Loyalty Platform",
    image: imgFeatured,
    link: "/product/amala",
}, {
    label: "Produk",
    title: "Platform Loyalitas",
});

export const HeaderLanguagesConst = LANGUAGES;
