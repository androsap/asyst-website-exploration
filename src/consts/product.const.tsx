import imgHeroMockup from "assets/asyst/img/background/product/product-hero.webp";
import imgProductCard1 from "assets/asyst/img/background/services-solutions/hermes2.webp";
import imgProductCard2 from "assets/asyst/img/background/services-solutions/amala2.webp";
import imgSolveMockup from "assets/asyst/img/background/product/amala/device-A.webp";
import imgExperience from "assets/asyst/img/background/product/experience.svg";
import { localized } from "shared/i18n";

// Konten statis halaman Products (desain revamp 2026).
// Gambar sementara memakai aset yang sudah ada di repo; ganti dengan aset final dari desain.
// Konten dua bahasa: konstanta `...En` = teks EN lengkap; ekspor `localized(...En, {...})` di bawah file = terjemahan ID (teks saja,
// struktur & urutan sama).

const productHeroEn = {
    eyebrow: "Asyst Products",
    title: "Enterprise software built for complex business environments",
    description: "ASYST builds software products that connect people, processes, data, and technology. From enterprise resource planning and corporate travel to loyalty etc",
    primaryButton: { label: "Explore Products" },
    secondaryButton: { label: "Talk to Product Expert" },
    image: imgHeroMockup,
}

export interface CatalogProduct {
    name: string;
    title: string;
    description: string;
    image: string;
    link: string;
}

export interface CatalogCategory {
    label: string;
    title: string;
    description: string;
    products: CatalogProduct[];
    button: { label: string; link: string };
}

// TODO: desain hanya menampilkan isi tab "Enterprise Products" (deskripsi kartu masih placeholder).
// Isi tab lain dipetakan dari produk yang ada di menu navigasi; copy perlu dikonfirmasi.
const productCatalogEn = {
    title: "Products for the way your business works",
    description: "Different businesses have different operating models. ASYST products are designed around real business workflows helping organizations manage resources, travel, customers, assets, cargo, and technology operations through connected digital systems",
    categories: [
        {
            label: "Enterprise Products",
            title: "Build a stronger digital core",
            description: "Modular enterprise applications designed to support critical business processes, from resource management and loyalty to specialized operational workflows",
            products: [
                { name: "Apollo", title: "Enterprise Resource Planning", description: "Apollo brings core business processes into an integrated enterprise platform", image: imgProductCard1, link: "/product/apollo" },
                { name: "Amala", title: "Loyalty & Customer Engagement Platform", description: "Amala brings loyalty programs, rewards and customer engagement into one connected platform", image: imgProductCard2, link: "/product/amala" },
                { name: "Doc", title: "Smart Document with AI", description: "Doc brings business documents into an intelligent, searchable and connected workspace", image: imgProductCard1, link: "/product/smart-document" },
                { name: "Project Management", title: "AI Project Management", description: "Project Management keeps streams, deliverables, tasks and hours in one plan, with AI agents writing the status reports", image: imgProductCard2, link: "/product/project-management" },
                { name: "E-Procurement", title: "E-Procurement Solution", description: "E-Procurement centralizes and automates purchasing, connecting buyers and suppliers in one environment", image: imgProductCard1, link: "/product/e-procurement" },
            ],
            button: { label: "Explore Enterprise Products", link: "/product" },
        },
        {
            label: "Travel Management",
            title: "Simplify corporate travel",
            description: "Manage corporate travel bookings, approvals, policies and travel agent connectivity from one platform",
            products: [
                { name: "Athena", title: "Corporate Travel Solution", description: "Athena connects travel requests, approvals, bookings and ticket changes in one corporate travel workflow", image: imgProductCard2, link: "/product/athena" },
            ],
            button: { label: "Explore Travel Products", link: "/product/athena" },
        },
        {
            label: "Commercial",
            title: "Grow and retain your customers",
            description: "Commercial platforms that help organizations engage customers, run loyalty programs and manage direct channels",
            products: [
                { name: "Amala", title: "Enterprise Loyalty Platform", description: "Amala brings member management, tiers, points, rewards, promotions and partners into one loyalty platform", image: imgProductCard2, link: "/product/amala" },
            ],
            button: { label: "Explore Commercial Products", link: "/product/amala" },
        },
        {
            label: "Operations",
            title: "Run complex operations with confidence",
            description: "Operational systems for airlines and ground handling, from passenger services and fleet operations to resource scheduling",
            products: [
                { name: "Chronus", title: "Airline Operations Solution", description: "Chronus supports passenger services, fleet operations, briefing and on-time performance monitoring", image: imgProductCard1, link: "/product/chronus" },
                { name: "Auxoshift", title: "Ground Operations & Resource Scheduling", description: "Auxoshift schedules resources and connects flight information and meal monitoring for ground operations", image: imgProductCard2, link: "/product/auxoshift" },
            ],
            button: { label: "Explore Operations Products", link: "/product/chronus" },
        },
        {
            label: "Cargo",
            title: "Connect the cargo value chain",
            description: "Integrated cargo software that connects sales, reservation, regulated-agent and warehouse processes",
            products: [
                { name: "Hermes", title: "Integrated Cargo Solution", description: "Hermes connects cargo sales, reservation, regulated-agent and warehouse processes in one environment", image: imgProductCard1, link: "/product/hermes" },
            ],
            button: { label: "Explore Cargo Products", link: "/product/hermes" },
        },
        {
            label: "IT Service Assistant",
            title: "Deliver better IT services",
            description: "IT service management and contact center tools that help teams resolve requests faster and more consistently",
            products: [
                { name: "Elea", title: "ITSM & Intelligent Contact Center", description: "Elea brings IT service requests, incidents and contact center interactions into one intelligent workspace", image: imgProductCard2, link: "/product/elea" },
            ],
            button: { label: "Explore IT Service Products", link: "/product/elea" },
        },
    ] as CatalogCategory[],
}

export interface ExperienceItem {
    image: string;
    title: string;
    description: string;
}

const productExperienceEn = {
    title: "Software built from real enterprise experience",
    description: "ASYST combines product development with decades of enterprise delivery experience. That means our products are shaped not only by technology, but by the operational realities, integration requirements, and business processes that organizations depend on every day",
    // Sementara satu ilustrasi untuk semua kartu; ganti per kartu kalau aset final sudah ada
    items: [
        { image: imgExperience, title: "Product Capability", description: "Build software for real enterprise workflows" },
        { image: imgExperience, title: "Integration Enterprise", description: "Connect complex enterprise environments" },
        { image: imgExperience, title: "Expertise", description: "Understand complex industries and solving" },
        { image: imgExperience, title: "Enterprise Delivery", description: "Implement, support and evolve at scale" },
    ] as ExperienceItem[],
}

export interface SolveItem {
    label: string;
    title: string;
    description: string;
    points: string[];
    subtitle: string;
    /** Boleh berisi <strong> untuk penekanan */
    subDescription: string;
    links: { label: string; link: string }[];
    image: string;
}

const productFamilyLinks = [
    { label: "Enterprise Products", link: "/product" },
    { label: "Commercial Products", link: "/product/amala" },
    { label: "Operations Products", link: "/product/chronus" },
];

const productSolveEn = {
    title: "Solve the business problem and Build what comes next",
    description: "Complex business problems rarely belong to a single system. Asyst combines enterprise products, integration expertise, domain knowledge, and long-term delivery experience to help organizations connect processes, automate operations, improve visibility, and scale with confidence",
    items: [
        {
            label: "Connect",
            title: "Connect fragmented systems",
            description: "Critical business processes often span multiple applications, teams, and data sources. When those systems do not work together, employees compensate with manual work, duplicated data, and disconnected workflows.",
            points: [
                "Multiple systems hold different versions of the same information",
                "Manual data transfer between applications",
                "Repetitive reconciliation",
                "Limited end-to-end visibility",
                "Difficult integration between legacy and newer platforms",
            ],
            subtitle: "Connect the enterprise before adding more complexity",
            subDescription: "Asyst can position its value around <strong>Product + Integration + Enterprise Delivery</strong> rather than presenting integration as an isolated technical service. Our Relevant product families:",
            links: productFamilyLinks,
            image: imgSolveMockup,
        },
        // TODO: desain hanya menampilkan isi tab "Connect"; copy tab lain perlu dikonfirmasi
        {
            label: "Automate",
            title: "Automate repetitive work",
            description: "Many operational processes still depend on spreadsheets, emails and manual approvals. Automation turns these steps into reliable digital workflows so teams can focus on higher-value work.",
            points: [
                "Approvals routed manually by email or paper",
                "Repeated data entry across applications",
                "Slow turnaround on routine requests",
                "Errors caused by manual handovers",
            ],
            subtitle: "Automate the process, not just the task",
            subDescription: "Asyst combines <strong>Product + Integration + Enterprise Delivery</strong> to digitize workflows end to end. Our Relevant product families:",
            links: productFamilyLinks,
            image: imgSolveMockup,
        },
        {
            label: "Visualize",
            title: "See what is happening across the business",
            description: "Decisions are slower when information is spread across systems and reports are assembled by hand. Connected data gives leaders and teams a shared, up-to-date view of operations.",
            points: [
                "Reports compiled manually from several sources",
                "Delayed or inconsistent operational data",
                "No single view of performance across units",
                "Limited insight into customer and operational trends",
            ],
            subtitle: "Turn operational data into shared visibility",
            subDescription: "Asyst connects <strong>Product + Integration + Enterprise Delivery</strong> so data flows into dashboards people can trust. Our Relevant product families:",
            links: productFamilyLinks,
            image: imgSolveMockup,
        },
        {
            label: "Optimize",
            title: "Optimize resources and decisions",
            description: "When processes are connected and visible, organizations can use resources, schedules and inventory more efficiently and respond faster to change.",
            points: [
                "Under- or over-utilized resources",
                "Scheduling done without real-time information",
                "High operational cost from inefficient workflows",
                "Slow response to changing demand",
            ],
            subtitle: "Optimize with connected information",
            subDescription: "Asyst brings <strong>Product + Integration + Enterprise Delivery</strong> together to improve how operations use time, people and assets. Our Relevant product families:",
            links: productFamilyLinks,
            image: imgSolveMockup,
        },
        {
            label: "Scale",
            title: "Scale without adding complexity",
            description: "Growth adds users, transactions, partners and locations. Platforms built for enterprise scale help organizations grow without multiplying manual work or fragile integrations.",
            points: [
                "Systems that slow down as volume grows",
                "New partners or units require custom work each time",
                "Inconsistent processes across locations",
                "Rising support effort as the business expands",
            ],
            subtitle: "Build a foundation that grows with you",
            subDescription: "Asyst supports growth through <strong>Product + Integration + Enterprise Delivery</strong> across the full lifecycle. Our Relevant product families:",
            links: productFamilyLinks,
            image: imgSolveMockup,
        },
        {
            label: "Modernize",
            title: "Modernize legacy platforms",
            description: "Aging systems can be hard to maintain, integrate and extend. Modernization moves critical processes onto maintainable platforms without disrupting day-to-day operations.",
            points: [
                "Legacy systems that are costly to maintain",
                "Limited ability to integrate with newer platforms",
                "Dependence on a few people who know the old system",
                "Difficulty adding new digital capabilities",
            ],
            subtitle: "Modernize step by step",
            subDescription: "Asyst modernizes with <strong>Product + Integration + Enterprise Delivery</strong> so critical operations keep running during the transition. Our Relevant product families:",
            links: productFamilyLinks,
            image: imgSolveMockup,
        },
    ] as SolveItem[],
}

const productCtaEn = {
    title: "Have a complex technology challenge?",
    description: "Tell us what you're trying to connect, automate, optimize or transform. Our team can help identify the right product, solution or technology approach for your organization.",
    button: "Talk to an Expert",
}

// ---------- konten dua bahasa (EN di atas, terjemahan ID di bawah) ----------

export const ProductHeroConst = localized(productHeroEn, {
    eyebrow: "Produk Asyst",
    title: "Software enterprise untuk lingkungan bisnis yang kompleks",
    description: "ASYST membangun produk software yang menghubungkan orang, proses, data, dan teknologi. Mulai dari enterprise resource planning dan perjalanan korporat hingga loyalitas dan lainnya",
    primaryButton: { label: "Jelajahi Produk" },
    secondaryButton: { label: "Hubungi Ahli Produk" },
});

export const ProductCatalogConst = localized(productCatalogEn, {
    title: "Produk yang sesuai dengan cara bisnis Anda bekerja",
    description: "Setiap bisnis punya model operasional yang berbeda. Produk ASYST dirancang berdasarkan alur kerja bisnis nyata untuk membantu organisasi mengelola sumber daya, perjalanan, pelanggan, aset, kargo, dan operasional teknologi melalui sistem digital yang terhubung",
    categories: [
        {
            label: "Produk Enterprise",
            title: "Bangun inti digital yang lebih kuat",
            description: "Aplikasi enterprise modular yang mendukung proses bisnis penting, mulai dari manajemen sumber daya dan loyalitas hingga alur kerja operasional khusus",
            products: [
                { title: "Enterprise Resource Planning", description: "Apollo mengintegrasikan proses bisnis inti dalam satu platform enterprise" },
                { title: "Platform Loyalitas & Keterlibatan Pelanggan", description: "Amala menyatukan program loyalitas, reward, dan keterlibatan pelanggan dalam satu platform yang terhubung" },
                { title: "Smart Document dengan AI", description: "Doc mengubah dokumen bisnis menjadi ruang kerja yang cerdas, mudah dicari, dan terhubung" },
                { title: "Manajemen Proyek berbasis AI", description: "Project Management menyatukan stream, deliverable, tugas, dan jam kerja dalam satu rencana, dengan AI agent yang menulis laporan status" },
                { title: "Solusi E-Procurement", description: "E-Procurement memusatkan dan mengotomatiskan pengadaan, menghubungkan pembeli dan pemasok dalam satu lingkungan" },
            ],
            button: { label: "Jelajahi Produk Enterprise" },
        },
        {
            label: "Manajemen Perjalanan",
            title: "Sederhanakan perjalanan korporat",
            description: "Kelola pemesanan, persetujuan, kebijakan perjalanan korporat, dan konektivitas agen perjalanan dari satu platform",
            products: [
                { title: "Solusi Perjalanan Korporat", description: "Athena menghubungkan pengajuan, persetujuan, pemesanan, dan perubahan tiket perjalanan dalam satu alur kerja perjalanan korporat" },
            ],
            button: { label: "Jelajahi Produk Perjalanan" },
        },
        {
            label: "Komersial",
            title: "Kembangkan dan pertahankan pelanggan Anda",
            description: "Platform komersial yang membantu organisasi melibatkan pelanggan, menjalankan program loyalitas, dan mengelola kanal langsung",
            products: [
                { title: "Platform Loyalitas Enterprise", description: "Amala menyatukan manajemen member, tingkatan, poin, reward, promosi, dan mitra dalam satu platform loyalitas" },
            ],
            button: { label: "Jelajahi Produk Komersial" },
        },
        {
            label: "Operasional",
            title: "Jalankan operasional yang kompleks dengan percaya diri",
            description: "Sistem operasional untuk maskapai dan ground handling, mulai dari layanan penumpang dan operasional armada hingga penjadwalan sumber daya",
            products: [
                { title: "Solusi Operasional Maskapai", description: "Chronus mendukung layanan penumpang, operasional armada, briefing, dan pemantauan on-time performance" },
                { title: "Operasional Darat & Penjadwalan Sumber Daya", description: "Auxoshift menjadwalkan sumber daya serta menghubungkan informasi penerbangan dan pemantauan katering untuk operasional darat" },
            ],
            button: { label: "Jelajahi Produk Operasional" },
        },
        {
            label: "Kargo",
            title: "Hubungkan rantai nilai kargo",
            description: "Software kargo terintegrasi yang menghubungkan proses penjualan, reservasi, regulated agent, dan pergudangan",
            products: [
                { title: "Solusi Kargo Terintegrasi", description: "Hermes menghubungkan proses penjualan kargo, reservasi, regulated agent, dan pergudangan dalam satu lingkungan" },
            ],
            button: { label: "Jelajahi Produk Kargo" },
        },
        {
            label: "Asisten Layanan IT",
            title: "Hadirkan layanan IT yang lebih baik",
            description: "Tools manajemen layanan IT dan contact center yang membantu tim menyelesaikan permintaan lebih cepat dan konsisten",
            products: [
                { title: "ITSM & Contact Center Cerdas", description: "Elea menyatukan permintaan layanan IT, insiden, dan interaksi contact center dalam satu ruang kerja yang cerdas" },
            ],
            button: { label: "Jelajahi Produk Layanan IT" },
        },
    ],
});

export const ProductExperienceConst = localized(productExperienceEn, {
    title: "Software yang lahir dari pengalaman enterprise nyata",
    description: "ASYST memadukan pengembangan produk dengan pengalaman delivery enterprise selama puluhan tahun. Artinya, produk kami dibentuk bukan hanya oleh teknologi, tetapi juga oleh realitas operasional, kebutuhan integrasi, dan proses bisnis yang diandalkan organisasi setiap hari",
    items: [
        { title: "Kapabilitas Produk", description: "Membangun software untuk alur kerja enterprise yang nyata" },
        { title: "Integrasi Enterprise", description: "Menghubungkan lingkungan enterprise yang kompleks" },
        { title: "Keahlian", description: "Memahami industri yang kompleks dan menyelesaikan masalahnya" },
        { title: "Delivery Enterprise", description: "Mengimplementasikan, mendukung, dan mengembangkan dalam skala besar" },
    ],
});

const productFamilyLinksId = [
    { label: "Produk Enterprise" },
    { label: "Produk Komersial" },
    { label: "Produk Operasional" },
];

export const ProductSolveConst = localized(productSolveEn, {
    title: "Selesaikan masalah bisnis dan bangun langkah berikutnya",
    description: "Masalah bisnis yang kompleks jarang hanya melibatkan satu sistem. Asyst memadukan produk enterprise, keahlian integrasi, pengetahuan domain, dan pengalaman delivery jangka panjang untuk membantu organisasi menghubungkan proses, mengotomatiskan operasional, meningkatkan visibilitas, dan bertumbuh dengan percaya diri",
    items: [
        {
            label: "Hubungkan",
            title: "Hubungkan sistem yang terfragmentasi",
            description: "Proses bisnis penting sering melibatkan banyak aplikasi, tim, dan sumber data. Ketika sistem tersebut tidak saling terhubung, karyawan harus menutupinya dengan pekerjaan manual, data ganda, dan alur kerja yang terputus.",
            points: [
                "Beberapa sistem menyimpan versi berbeda dari informasi yang sama",
                "Pemindahan data secara manual antaraplikasi",
                "Rekonsiliasi yang berulang",
                "Visibilitas end-to-end yang terbatas",
                "Sulitnya integrasi antara platform lama dan baru",
            ],
            subtitle: "Hubungkan enterprise sebelum menambah kompleksitas",
            subDescription: "Asyst memosisikan nilainya sebagai <strong>Produk + Integrasi + Delivery Enterprise</strong>, bukan menyajikan integrasi sebagai layanan teknis yang terpisah. Kelompok produk kami yang relevan:",
            links: productFamilyLinksId,
        },
        {
            label: "Otomatisasi",
            title: "Otomatiskan pekerjaan berulang",
            description: "Banyak proses operasional masih bergantung pada spreadsheet, email, dan persetujuan manual. Otomatisasi mengubah langkah-langkah ini menjadi alur kerja digital yang andal sehingga tim dapat fokus pada pekerjaan bernilai lebih tinggi.",
            points: [
                "Persetujuan diteruskan secara manual lewat email atau kertas",
                "Input data berulang di berbagai aplikasi",
                "Penyelesaian permintaan rutin yang lambat",
                "Kesalahan akibat serah terima manual",
            ],
            subtitle: "Otomatiskan prosesnya, bukan hanya tugasnya",
            subDescription: "Asyst memadukan <strong>Produk + Integrasi + Delivery Enterprise</strong> untuk mendigitalkan alur kerja secara end-to-end. Kelompok produk kami yang relevan:",
            links: productFamilyLinksId,
        },
        {
            label: "Visualisasi",
            title: "Lihat apa yang terjadi di seluruh bisnis",
            description: "Keputusan menjadi lambat ketika informasi tersebar di berbagai sistem dan laporan disusun secara manual. Data yang terhubung memberi pimpinan dan tim gambaran operasional yang sama dan selalu terkini.",
            points: [
                "Laporan disusun manual dari berbagai sumber",
                "Data operasional yang terlambat atau tidak konsisten",
                "Tidak ada satu tampilan kinerja lintas unit",
                "Insight tren pelanggan dan operasional yang terbatas",
            ],
            subtitle: "Ubah data operasional menjadi visibilitas bersama",
            subDescription: "Asyst menghubungkan <strong>Produk + Integrasi + Delivery Enterprise</strong> agar data mengalir ke dashboard yang dapat dipercaya. Kelompok produk kami yang relevan:",
            links: productFamilyLinksId,
        },
        {
            label: "Optimalkan",
            title: "Optimalkan sumber daya dan keputusan",
            description: "Ketika proses terhubung dan terlihat, organisasi dapat menggunakan sumber daya, jadwal, dan inventaris dengan lebih efisien serta merespons perubahan lebih cepat.",
            points: [
                "Sumber daya yang kurang atau berlebih dimanfaatkan",
                "Penjadwalan tanpa informasi real-time",
                "Biaya operasional tinggi akibat alur kerja yang tidak efisien",
                "Respons lambat terhadap perubahan permintaan",
            ],
            subtitle: "Optimalkan dengan informasi yang terhubung",
            subDescription: "Asyst menyatukan <strong>Produk + Integrasi + Delivery Enterprise</strong> untuk meningkatkan cara operasional memanfaatkan waktu, SDM, dan aset. Kelompok produk kami yang relevan:",
            links: productFamilyLinksId,
        },
        {
            label: "Skalakan",
            title: "Bertumbuh tanpa menambah kompleksitas",
            description: "Pertumbuhan menambah pengguna, transaksi, mitra, dan lokasi. Platform yang dibangun untuk skala enterprise membantu organisasi bertumbuh tanpa melipatgandakan pekerjaan manual atau integrasi yang rapuh.",
            points: [
                "Sistem melambat seiring bertambahnya volume",
                "Mitra atau unit baru selalu butuh pengerjaan khusus",
                "Proses yang tidak konsisten antarlokasi",
                "Beban dukungan meningkat seiring ekspansi bisnis",
            ],
            subtitle: "Bangun fondasi yang tumbuh bersama Anda",
            subDescription: "Asyst mendukung pertumbuhan melalui <strong>Produk + Integrasi + Delivery Enterprise</strong> di sepanjang siklus hidup. Kelompok produk kami yang relevan:",
            links: productFamilyLinksId,
        },
        {
            label: "Modernisasi",
            title: "Modernisasi platform lama",
            description: "Sistem yang sudah usang bisa sulit dirawat, diintegrasikan, dan dikembangkan. Modernisasi memindahkan proses penting ke platform yang mudah dirawat tanpa mengganggu operasional sehari-hari.",
            points: [
                "Sistem lama yang mahal perawatannya",
                "Kemampuan terbatas untuk terintegrasi dengan platform baru",
                "Bergantung pada segelintir orang yang memahami sistem lama",
                "Sulit menambahkan kapabilitas digital baru",
            ],
            subtitle: "Modernisasi secara bertahap",
            subDescription: "Asyst melakukan modernisasi dengan <strong>Produk + Integrasi + Delivery Enterprise</strong> sehingga operasional penting tetap berjalan selama masa transisi. Kelompok produk kami yang relevan:",
            links: productFamilyLinksId,
        },
    ],
});

export const ProductCtaConst = localized(productCtaEn, {
    title: "Punya tantangan teknologi yang kompleks?",
    description: "Ceritakan apa yang ingin Anda hubungkan, otomatiskan, optimalkan, atau transformasikan. Tim kami siap membantu menentukan produk, solusi, atau pendekatan teknologi yang tepat untuk organisasi Anda.",
    button: "Hubungi Ahli Kami",
});
