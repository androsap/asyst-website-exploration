import { IndustryCardsContent, IndustryHeroContent, IndustryIntroContent } from "./industry.const";
import { SolutionCtaContent, SolutionFaqContent, SolutionTabPanelItem } from "./solution.const";

import imgEnterprise from "assets/asyst/img/background/services-solutions/products-and-services.webp";
import imgChallengeConnected from "assets/img/background/solutions/image-solutions-1.webp";
import imgChallengeComplexity from "assets/img/background/solutions/image-solutions-2.webp";
import imgChallengeGoLive from "assets/img/background/solutions/image-solutions-3.webp";
import imgLayers from "assets/asyst/img/background/product/overview/background-product.webp";
import imgProducts from "assets/asyst/img/background/HBNR-1.webp";
import imgDashboard from "assets/asyst/img/background/product/amala/device-A.webp";
import imgAirline from "assets/asyst/img/background/industry/airline-airport/airline.webp";
import imgAirport from "assets/asyst/img/background/industry/airline-airport/airport.webp";
import imgLoyalty from "assets/asyst/img/background/services-solutions/amala2.webp";
import imgCargo from "assets/asyst/img/background/services-solutions/cargo.webp";
import imgTravel from "assets/asyst/img/background/HBNR-3.webp";
import { localized } from "shared/i18n";

// Konten halaman detail industri (desain revamp 2026). Satu objek per industri, dirender oleh components/industry/detail.
// Gambar sementara memakai aset yang sudah ada di repo; desain memakai diagram ekosistem aviasi.
// Konten dua bahasa: konstanta `...En` = teks EN lengkap; ekspor `localized(...En, {...})` di bawah file = terjemahan ID
// (teks saja, struktur & urutan sama).

export interface IndustryChallengeItem {
    label: string;
    title: string;
    description: string;
    points: string[];
    image: string;
}

export interface IndustryLayerItem {
    label: string;
    description: string;
    capabilities: string[];
    value: string;
}

/** Isi popover hover (judul + daftar poin) */
export interface IndustryPopoverContent {
    title: string;
    points: string[];
}

export interface IndustryDomainItem {
    title: string;
    description: string;
    points: string[];
    /** Tampil di atas kartu saat di-hover */
    popover?: IndustryPopoverContent;
}

/** Langkah value chain; `title` + `points` tampil sebagai popover saat langkah di-hover */
export interface IndustryValueChainStep {
    label: string;
    title?: string;
    points?: string[];
}

export interface IndustryPriorityItem {
    title: string;
    points: string[];
}

export interface IndustryDetailContent {
    hero: IndustryHeroContent;
    overview: IndustryIntroContent;
    challenges: {
        title: string;
        items: IndustryChallengeItem[];
    };
    layers: IndustryIntroContent & {
        items: IndustryLayerItem[];
    };
    valueChain: {
        title: string;
        description: string;
        steps: IndustryValueChainStep[];
    };
    domains: {
        title: string;
        items: IndustryDomainItem[];
    };
    products: IndustryIntroContent;
    solutions: IndustryCardsContent;
    connect: {
        title: string;
        description: string;
        items: SolutionTabPanelItem[];
    };
    priorities: {
        title: string;
        items: IndustryPriorityItem[];
        matrix: {
            columns: string[];
            rows: { label: string; values: boolean[] }[];
        };
    };
    faq: SolutionFaqContent;
    cta: SolutionCtaContent;
}

const aviationChallengeIntro = "Airline and aviation organizations often operate across multiple applications, operational environments, partners and data sources. Our products and Solutions will boost your business, to avoid bad impact in:";
const aviationChips = ["Commercial", "Operations", "Passenger", "Enterprise Systems", "Integration", "Data"];
// TODO: prototype memakai popover "Discover" sebagai placeholder untuk semua kartu domain; copy per kartu perlu dikonfirmasi
const domainPopover: IndustryPopoverContent = {
    title: "Connect commercial channels with the systems",
    points: ["Customer", "Digital Channels", "Search & Discovery", "Product / Schedule Information", "Commercial Systems"],
};

// TODO: desain hanya menampilkan isi tab/accordion pertama di tiap section; copy lainnya perlu dikonfirmasi
const aviationDetailEn: IndustryDetailContent = {
    hero: {
        eyebrow: "Aviation Industry",
        title: "Technology That Connects the Aviation Enterprise",
        description: "ASYST combines enterprise software, integration, digital solutions and aviation domain expertise to help organizations connect operations",
        primaryButton: "Explore Aviation Solutions",
    },
    overview: {
        title: "Aviation Is a Connected Business, Not a Single System",
        paragraphs: [
            "An airline does not operate through one application. Commercial systems, passenger services, flight operations, ground operations, cargo, finance, infrastructure, data and external partners all contribute to the same customer and operational journey.",
            "Technology therefore needs to work as an interconnected ecosystem.",
        ],
        image: imgEnterprise,
    },
    challenges: {
        title: "Technology Challenges Aviation Organizations Face",
        items: [
            {
                label: "Disconnected Systems",
                title: "Aviation Operations Depend on Connected Systems",
                description: aviationChallengeIntro,
                points: ["Disconnected Systems", "Manual Handoffs", "Data Silos", "Limited Visibility", "Slower Decisions"],
                image: imgChallengeConnected,
            },
            {
                label: "Operational Complexity",
                title: "Every Flight Involves Many Teams, Partners and Processes",
                description: "Commercial, flight, ground, airport, cargo and enterprise functions must coordinate in time-critical conditions. When processes are not supported by connected technology, organizations face:",
                points: ["Time-Critical Coordination", "Complex Workflows", "Multiple Stakeholders", "Operational Disruption", "Higher Operating Cost"],
                image: imgChallengeComplexity,
            },
            {
                label: "Technology Must Deliver Beyond Go-Live",
                title: "Value Is Created After the System Goes Live",
                description: "Aviation technology must keep running, adapt to change and continue to improve. Without long-term support, organizations risk:",
                points: ["Low User Adoption", "Unstable Operations", "Unsupported Integrations", "Outdated Processes", "Unrealized Business Value"],
                image: imgChallengeGoLive,
            },
        ],
    },
    layers: {
        title: "Connecting the Technology Behind Aviation",
        paragraphs: [
            "Aviation depends on more than individual applications. Passenger experiences, commercial processes, airline operations, ground handling, cargo, airport services and enterprise functions all rely on technology working together.",
            "ASYST connects these layers through enterprise products, integration capabilities, digital solutions and aviation domain expertise helping organizations build a more connected technology ecosystem.",
        ],
        image: imgLayers,
        items: [
            {
                label: "Business & Customer Experience",
                description: "Every technology ecosystem ultimately serves a business or customer experience. In aviation, this includes digital travel experiences, commercial interactions, operational teams and enterprise users.",
                capabilities: ["System Connectivity", "Data Exchange", "Workflow Integration", "Enterprise Integration"],
                value: "Make complex enterprise processes easier to access, understand and act on",
            },
            {
                label: "Business Applications",
                description: "Enterprise and operational applications support the processes behind commercial, operations, cargo, loyalty, travel and corporate functions.",
                capabilities: ["Enterprise Software", "Operational Applications", "Loyalty & Travel Platforms", "Cargo Systems"],
                value: "Support critical business processes with applications designed around aviation workflows",
            },
            {
                label: "Integration",
                description: "Integration connects applications, partners and data sources so information can move across the aviation ecosystem.",
                capabilities: ["API Management", "Service Orchestration", "Partner Connectivity", "Legacy Integration"],
                value: "Reduce manual handoffs and keep information consistent across systems",
            },
            {
                label: "Data & Insight",
                description: "Operational, commercial and customer data become more valuable when they are connected and turned into insight.",
                capabilities: ["Data Management", "Operational Dashboards", "Reporting & Analytics", "Data Quality"],
                value: "Give teams the visibility they need to make faster, better informed decisions",
            },
            {
                label: "Platform & Cloud",
                description: "Application platforms and cloud environments provide the foundation for scalable, reliable and secure aviation services.",
                capabilities: ["Cloud Environments", "Application Platforms", "Scalability", "Platform Management"],
                value: "Scale digital services as business volume and complexity grow",
            },
            {
                label: "Infrastructure",
                description: "Network, compute, storage and end-user infrastructure keep aviation technology available across offices, airports and operational sites.",
                capabilities: ["Network", "Compute & Storage", "Endpoints", "Data Center"],
                value: "Keep the technology foundation available for time-critical operations",
            },
            {
                label: "IT Operations",
                description: "IT operations and service management keep applications, platforms and infrastructure running and support users when issues occur.",
                capabilities: ["Monitoring", "IT Service Management", "Incident Management", "Service Level Management"],
                value: "Maintain reliable services and respond to issues before they disrupt operations",
            },
            {
                label: "Security and Resilience",
                description: "Security operations and resilience practices protect critical aviation systems, data and services across the ecosystem.",
                capabilities: ["Security Monitoring", "Threat Detection", "Incident Response", "Business Continuity"],
                value: "Protect critical operations and recover quickly when incidents happen",
            },
        ],
    },
    valueChain: {
        title: "Technology Across the Aviation Value Chain",
        description: "Aviation is not a single operation. It is a connected value chain where commercial, passenger, operational, airport, ground, cargo, technology and service functions continuously interact",
        steps: [
            { label: "Discover", title: "Connect commercial channels with the systems", points: ["Customer", "Digital Channels", "Search & Discovery", "Product / Schedule Information", "Commercial Systems"] },
            { label: "Book", title: "Connect booking experiences with the enterprise systems", points: ["Customer", "Booking Interface", "Booking / Reservation System", "Inventory", "Pricing", "Payment / Ancillary"] },
            { label: "Pay", title: "Connect commercial transactions with downstream", points: ["Booking", "Payment", "Transaction", "Financial System", "Reconciliation", "Customer / Corporate Record"] },
            { label: "Prepare", title: "Connected experience between customer information", points: ["Customer Data", "Booking Data", "Operational Data", "Digital Channels"] },
            { label: "Check-in", title: "Connects the customer journey with operational readiness", points: ["Check-in", "Passenger Information", "Airport Systems", "Ground Operations", "Departure Readiness"] },
            { label: "Board", title: "Improve operational visibility by connecting customer", points: ["Boarding Information", "Gate", "Passenger Status", "Flight Information", "Ground Operations", "Departure Readiness"] },
            { label: "Fly", title: "Connects enterprise technology with the operational", points: ["Operational Data", "Flight Information", "Crew / Resource Information", "Customer Information", "Connected Systems", "Operational Visibility"] },
            { label: "Ground", title: "Connects Ground Operation to outcome", points: ["Passenger", "Baggage", "Ground Crew", "Equipment", "Airport", "Flight Schedule", "Ground Operations"] },
            { label: "Baggage", title: "Create greater visibility across passenger and ground", points: ["Passenger Data", "Flight Data", "Baggage Data", "Ground Operations", "Connected Baggage Process"] },
            { label: "Cargo", title: "Connect cargo across the operational", points: ["Booking", "Cargo Acceptance", "Warehouse", "Documentation", "Flight", "Ground Handling", "Delivery"] },
            { label: "Loyalty", title: "Become longer customer relationship", points: ["Travel", "Customer Interaction", "Transaction", "Loyalty Data", "Personalized Engagement", "Future Travel"] },
            { label: "Service", title: "Effectively information can move when conditions change", points: ["Change", "Delay", "Disruption", "Refund", "Customer Request", "Operational Response", "Customer Resolution"] },
        ],
    },
    domains: {
        title: "From Aviation Operations to Enterprise Technology",
        items: [
            {
                title: "Commercial & Travel Technology",
                description: "Support customer-facing and travel-related business processes",
                points: ["Travel management", "Commercial systems", "Customer-facing applications", "Digital channels", "Booking-related processes"],
            },
            {
                title: "Airline Operations",
                description: "Connect technology with operational processes that support airline execution",
                points: ["operational applications", "flight-related workflows", "operational data", "workforce processes", "integration"],
            },
            {
                title: "Ground Operations",
                description: "Support time-sensitive ground processes and coordination",
                points: ["ground handling", "turnaround workflows", "operational coordination", "workforce mobility", "system integration"],
            },
            {
                title: "Air Cargo",
                description: "Connect cargo processes, systems and operational information",
                points: ["cargo operations", "shipment processes", "operational systems", "integration", "data visibility"],
            },
            {
                title: "Infrastructure & IT Operations",
                description: "Keep the technology foundation supporting business services reliable and manageable",
                points: ["infrastructure", "cloud", "IT service management", "security operations", "system integration", "data visibility"],
            },
            {
                title: "Professional & Digital Services",
                description: "Support organizations from technology strategy through implementation and operational adoption",
                points: ["consulting", "custom development", "implementation", "integration", "user adoption", "continuous improvement"],
            },
        ].map(item => ({ ...item, popover: domainPopover })),
    },
    products: {
        title: "Enterprise Products Built Around Aviation Workflows",
        paragraphs: [
            "Aviation organizations need technology that understands the operational context behind the process.",
            "ASYST combines product-based capabilities with integration and domain knowledge to support different parts of the aviation ecosystem",
        ],
        image: imgProducts,
    },
    // TODO: desain memakai kartu placeholder (Loyalty/Cargo/Travel dengan copy sama); copy & link per kartu perlu dikonfirmasi
    solutions: {
        items: [
            {
                tag: "Airline",
                title: "Connected Technology for Airline Operations",
                description: "Support airline operations with integrated technology across commercial processes, passenger services, operational workflows and data",
                chips: aviationChips,
                link: { label: "Explore Fleet Operations", to: "/product/chronus" },
                image: imgAirline,
            },
            {
                tag: "Airport",
                title: "Technology for Connected Airport Operations",
                description: "Connect airport processes, operational systems, stakeholders and data to support coordinated airport operations",
                chips: ["Airport Operations", "Passenger", "Infrastructure", "Data", "Integration", "Service Management"],
                link: { label: "Explore Airport Solutions", to: "/solution" },
                image: imgAirport,
            },
            {
                tag: "Ground Handler",
                title: "Connected Technology to Ground Operations",
                description: "Enable ground handling organizations to connect operational processes, workforce, systems and information",
                chips: ["operational workflows", "workforce coordination", "turnaround processes", "system integration"],
                link: { label: "Explore Ground Handler Solutions", to: "/solution" },
                image: imgEnterprise,
            },
            {
                tag: "Loyalty",
                title: "Digital Technology for Customer Loyalty",
                description: "Build connected loyalty experiences that bring customer data, engagement, rewards and digital touchpoints closer together",
                chips: aviationChips,
                link: { label: "Explore Loyalty Platform", to: "/product/amala" },
                image: imgLoyalty,
            },
            {
                tag: "Cargo",
                title: "Connected Technology for Air Cargo",
                description: "Bring cargo sales, reservations, shipment processes and operational visibility into one connected platform",
                chips: ["Commercial", "Operations", "Shipment", "Enterprise Systems", "Integration", "Data"],
                link: { label: "Explore Cargo Platform", to: "/product/hermes" },
                image: imgCargo,
            },
            {
                tag: "Travel",
                title: "Digital Technology for Corporate Travel",
                description: "Digitize travel requests, approvals, booking and reporting through a connected corporate travel experience",
                chips: ["Commercial", "Booking", "Approval", "Enterprise Systems", "Integration", "Data"],
                link: { label: "Explore Travel Management", to: "/product/athena" },
                image: imgTravel,
            },
        ],
    },
    connect: {
        title: "Connect the Systems Behind Aviation",
        description: "ASYST helps connect applications, data, infrastructure, cloud environments and external systems so organizations can create a more integrated technology ecosystem",
        items: [
            {
                label: "Data and Visibility",
                title: "Turn Aviation Data Into Operational Visibility",
                description: "Aviation generates information across commercial, operational, customer and infrastructure environments. Connecting that information can help teams see what is happening, understand dependencies and make more informed operational decisions",
                points: ["Passenger", "Flight", "Ground", "Cargo", "Commercial", "Infrastructure"],
                image: imgDashboard,
            },
            {
                label: "Digital Experience",
                title: "Create Connected Digital Experiences",
                description: "Passengers, partners and employees expect consistent digital experiences. Connecting front-end channels with the systems behind them helps deliver accurate information and smoother journeys",
                points: ["Web & Mobile Channels", "Self-Service", "Personalized Offers", "Partner Portals", "Employee Applications"],
                image: imgLoyalty,
            },
            {
                label: "Security and Resilience",
                title: "Protect Critical Aviation Operations",
                description: "As aviation systems become more connected, security and resilience need to cover applications, infrastructure, data and partners across the ecosystem",
                points: ["Security Monitoring", "Threat Detection", "Incident Response", "Business Continuity", "Infrastructure Resilience"],
                image: imgChallengeConnected,
            },
            {
                label: "Aviation Operating Model",
                title: "Align Technology With the Aviation Operating Model",
                description: "Technology delivers the most value when it reflects how the organization actually operates, from commercial and flight operations to ground, cargo and enterprise functions",
                points: ["Process Alignment", "Operational Governance", "Technology Roadmap", "Service Management", "Continuous Improvement"],
                image: imgChallengeComplexity,
            },
        ],
    },
    priorities: {
        title: "Explore by Business Priority",
        items: [
            { title: "Connect technology to business growth", points: ["Business outcomes", "Enterprise transformation", "Technology strategy"] },
            { title: "Build a scalable technology foundation", points: ["Platform & cloud", "Infrastructure", "Enterprise architecture"] },
            { title: "Improve operational visibility and efficiency", points: ["Operational data", "Process integration", "IT operations"] },
            { title: "Create better digital customer experiences", points: ["Digital channels", "Loyalty", "Customer data"] },
            { title: "Build accountable, scalable technology partnerships", points: ["Managed services", "Service levels", "Continuous improvement"] },
        ],
        matrix: {
            columns: ["Airline", "Airport", "Ecosystem"],
            rows: [
                { label: "Enterprise Software", values: [true, true, true] },
                { label: "Integration", values: [true, true, true] },
                { label: "Digital Solutions", values: [true, true, true] },
                { label: "Data & Analytics", values: [true, true, true] },
                { label: "Infrastructure", values: [true, true, true] },
                { label: "IT Operations", values: [true, true, true] },
                { label: "Professional Services", values: [true, true, true] },
            ],
        },
    },
    faq: {
        title: "Aviation Industry FAQ",
        items: [
            { question: "What does an aviation technology company do?", answer: "Aviation technology companies design, integrate, implement and support technology systems used across aviation business and operational environments. Depending on the organization, this can include enterprise software, integration, data, infrastructure, digital channels and operational systems" },
            { question: "What aviation solutions does ASYST provide?", answer: "ASYST provides enterprise products, integration, digital solutions, infrastructure, IT operations and professional services across airline, airport, ground handling, cargo, loyalty and travel functions" },
            { question: "Does ASYST only work with airlines?", answer: "No. ASYST works across the aviation ecosystem, including airports, ground handlers, cargo operators and loyalty programs, as well as organizations outside aviation" },
            { question: "Can ASYST integrate existing aviation systems?", answer: "Yes. ASYST connects existing commercial, operational, partner and enterprise systems through APIs, service orchestration and data integration" },
            { question: "Does ASYST support technology after implementation?", answer: "Yes. ASYST provides managed services, IT operations, service management and continuous improvement after go-live" },
            { question: "Can ASYST support digital transformation beyond aviation?", answer: "Yes. The same enterprise technology, integration and consulting capabilities are applied to organizations in other industries and connected business ecosystems" },
        ],
    },
    cta: {
        title: "Build the Technology Behind Your Next Aviation Transformation",
        description: "Whether you're modernizing an existing system, connecting fragmented platforms, improving operational visibility or building a new digital capability, ASYST brings together enterprise technology, integration and aviation domain expertise to help move the initiative from strategy to operation",
        button: "Discuss Your Aviation Challenge",
    },
}

// ---------- terjemahan ID (struktur & urutan sama dengan aviationDetailEn) ----------

const aviationChallengeIntroId = "Organisasi maskapai dan penerbangan sering beroperasi di atas banyak aplikasi, lingkungan operasional, mitra, dan sumber data. Produk dan Solusi kami akan mendorong bisnis Anda sekaligus menghindari dampak buruk berupa:";
const aviationChipsId = ["Komersial", "Operasional", "Penumpang", "Sistem Enterprise", "Integrasi", "Data"];
const domainPopoverId = {
    title: "Hubungkan kanal komersial dengan sistem",
    points: ["Pelanggan", "Kanal Digital", "Pencarian & Penemuan", "Informasi Produk / Jadwal", "Sistem Komersial"],
};

export const AviationDetailConst = localized(aviationDetailEn, {
    hero: {
        eyebrow: "Industri Penerbangan",
        title: "Teknologi yang Menghubungkan Enterprise Penerbangan",
        description: "ASYST memadukan software enterprise, integrasi, solusi digital, dan keahlian domain penerbangan untuk membantu organisasi menghubungkan operasionalnya",
        primaryButton: "Jelajahi Solusi Penerbangan",
    },
    overview: {
        title: "Penerbangan adalah Bisnis yang Terhubung, Bukan Satu Sistem",
        paragraphs: [
            "Maskapai tidak beroperasi hanya dengan satu aplikasi. Sistem komersial, layanan penumpang, operasional penerbangan, operasional darat, kargo, keuangan, infrastruktur, data, dan mitra eksternal semuanya berkontribusi pada perjalanan pelanggan dan operasional yang sama.",
            "Karena itu, teknologi harus bekerja sebagai ekosistem yang saling terhubung.",
        ],
    },
    challenges: {
        title: "Tantangan Teknologi yang Dihadapi Organisasi Penerbangan",
        items: [
            {
                label: "Sistem Terputus",
                title: "Operasional Penerbangan Bergantung pada Sistem yang Terhubung",
                description: aviationChallengeIntroId,
                points: ["Sistem yang Terputus", "Serah Terima Manual", "Silo Data", "Visibilitas Terbatas", "Keputusan Lebih Lambat"],
            },
            {
                label: "Kompleksitas Operasional",
                title: "Setiap Penerbangan Melibatkan Banyak Tim, Mitra, dan Proses",
                description: "Fungsi komersial, penerbangan, darat, bandara, kargo, dan enterprise harus berkoordinasi dalam kondisi yang sangat bergantung pada waktu. Ketika proses tidak didukung teknologi yang terhubung, organisasi menghadapi:",
                points: ["Koordinasi yang Mendesak", "Alur Kerja Kompleks", "Banyak Stakeholder", "Gangguan Operasional", "Biaya Operasional Lebih Tinggi"],
            },
            {
                label: "Teknologi Harus Bernilai Setelah Go-Live",
                title: "Nilai Tercipta Setelah Sistem Berjalan",
                description: "Teknologi penerbangan harus terus berjalan, beradaptasi dengan perubahan, dan terus berkembang. Tanpa dukungan jangka panjang, organisasi berisiko mengalami:",
                points: ["Adopsi Pengguna Rendah", "Operasional Tidak Stabil", "Integrasi Tanpa Dukungan", "Proses yang Usang", "Nilai Bisnis yang Tidak Tercapai"],
            },
        ],
    },
    layers: {
        title: "Menghubungkan Teknologi di Balik Penerbangan",
        paragraphs: [
            "Penerbangan bergantung pada lebih dari sekadar aplikasi individual. Pengalaman penumpang, proses komersial, operasional maskapai, ground handling, kargo, layanan bandara, dan fungsi enterprise semuanya mengandalkan teknologi yang bekerja bersama.",
            "ASYST menghubungkan lapisan-lapisan ini melalui produk enterprise, kapabilitas integrasi, solusi digital, dan keahlian domain penerbangan, membantu organisasi membangun ekosistem teknologi yang lebih terhubung.",
        ],
        items: [
            {
                label: "Pengalaman Bisnis & Pelanggan",
                description: "Setiap ekosistem teknologi pada akhirnya melayani pengalaman bisnis atau pelanggan. Di industri penerbangan, ini mencakup pengalaman perjalanan digital, interaksi komersial, tim operasional, dan pengguna enterprise.",
                capabilities: ["Konektivitas Sistem", "Pertukaran Data", "Integrasi Alur Kerja", "Integrasi Enterprise"],
                value: "Membuat proses enterprise yang kompleks lebih mudah diakses, dipahami, dan ditindaklanjuti",
            },
            {
                label: "Aplikasi Bisnis",
                description: "Aplikasi enterprise dan operasional mendukung proses di balik fungsi komersial, operasional, kargo, loyalitas, perjalanan, dan korporat.",
                capabilities: ["Software Enterprise", "Aplikasi Operasional", "Platform Loyalitas & Perjalanan", "Sistem Kargo"],
                value: "Mendukung proses bisnis kritis dengan aplikasi yang dirancang sesuai alur kerja penerbangan",
            },
            {
                label: "Integrasi",
                description: "Integrasi menghubungkan aplikasi, mitra, dan sumber data sehingga informasi dapat bergerak di seluruh ekosistem penerbangan.",
                capabilities: ["Manajemen API", "Orkestrasi Layanan", "Konektivitas Mitra", "Integrasi Sistem Lama"],
                value: "Mengurangi serah terima manual dan menjaga konsistensi informasi antarsistem",
            },
            {
                label: "Data & Insight",
                description: "Data operasional, komersial, dan pelanggan menjadi lebih bernilai ketika terhubung dan diolah menjadi insight.",
                capabilities: ["Manajemen Data", "Dashboard Operasional", "Pelaporan & Analitik", "Kualitas Data"],
                value: "Memberi tim visibilitas yang dibutuhkan untuk mengambil keputusan lebih cepat dan tepat",
            },
            {
                label: "Platform & Cloud",
                description: "Platform aplikasi dan lingkungan cloud menjadi fondasi bagi layanan penerbangan yang skalabel, andal, dan aman.",
                capabilities: ["Lingkungan Cloud", "Platform Aplikasi", "Skalabilitas", "Manajemen Platform"],
                value: "Mengembangkan layanan digital seiring bertambahnya volume dan kompleksitas bisnis",
            },
            {
                label: "Infrastruktur",
                description: "Infrastruktur jaringan, komputasi, penyimpanan, dan perangkat pengguna menjaga teknologi penerbangan tetap tersedia di kantor, bandara, dan lokasi operasional.",
                capabilities: ["Jaringan", "Komputasi & Penyimpanan", "Endpoint", "Data Center"],
                value: "Menjaga fondasi teknologi tetap tersedia untuk operasional yang sangat bergantung pada waktu",
            },
            {
                label: "Operasional IT",
                description: "Operasional IT dan manajemen layanan menjaga aplikasi, platform, dan infrastruktur tetap berjalan serta mendukung pengguna saat terjadi masalah.",
                capabilities: ["Pemantauan", "Manajemen Layanan IT", "Manajemen Insiden", "Manajemen Tingkat Layanan"],
                value: "Menjaga layanan tetap andal dan menangani masalah sebelum mengganggu operasional",
            },
            {
                label: "Keamanan dan Ketahanan",
                description: "Operasional keamanan dan praktik ketahanan melindungi sistem, data, dan layanan penerbangan yang kritis di seluruh ekosistem.",
                capabilities: ["Pemantauan Keamanan", "Deteksi Ancaman", "Respons Insiden", "Kelangsungan Bisnis"],
                value: "Melindungi operasional kritis dan pulih dengan cepat saat terjadi insiden",
            },
        ],
    },
    valueChain: {
        title: "Teknologi di Seluruh Rantai Nilai Penerbangan",
        description: "Penerbangan bukan satu operasi tunggal. Ini adalah rantai nilai yang terhubung, tempat fungsi komersial, penumpang, operasional, bandara, darat, kargo, teknologi, dan layanan terus berinteraksi",
        steps: [
            { label: "Temukan", title: "Hubungkan kanal komersial dengan sistem", points: ["Pelanggan", "Kanal Digital", "Pencarian & Penemuan", "Informasi Produk / Jadwal", "Sistem Komersial"] },
            { label: "Pesan", title: "Hubungkan pengalaman pemesanan dengan sistem enterprise", points: ["Pelanggan", "Antarmuka Pemesanan", "Sistem Pemesanan / Reservasi", "Inventori", "Harga", "Pembayaran / Layanan Tambahan"] },
            { label: "Bayar", title: "Hubungkan transaksi komersial dengan proses lanjutan", points: ["Pemesanan", "Pembayaran", "Transaksi", "Sistem Keuangan", "Rekonsiliasi", "Catatan Pelanggan / Korporat"] },
            { label: "Persiapan", title: "Pengalaman yang terhubung antarinformasi pelanggan", points: ["Data Pelanggan", "Data Pemesanan", "Data Operasional", "Kanal Digital"] },
            { label: "Check-in", title: "Menghubungkan perjalanan pelanggan dengan kesiapan operasional", points: ["Check-in", "Informasi Penumpang", "Sistem Bandara", "Operasional Darat", "Kesiapan Keberangkatan"] },
            { label: "Boarding", title: "Tingkatkan visibilitas operasional dengan menghubungkan pelanggan", points: ["Informasi Boarding", "Gate", "Status Penumpang", "Informasi Penerbangan", "Operasional Darat", "Kesiapan Keberangkatan"] },
            { label: "Terbang", title: "Menghubungkan teknologi enterprise dengan operasional", points: ["Data Operasional", "Informasi Penerbangan", "Informasi Kru / Sumber Daya", "Informasi Pelanggan", "Sistem Terhubung", "Visibilitas Operasional"] },
            { label: "Darat", title: "Menghubungkan operasional darat dengan hasil", points: ["Penumpang", "Bagasi", "Kru Darat", "Peralatan", "Bandara", "Jadwal Penerbangan", "Operasional Darat"] },
            { label: "Bagasi", title: "Ciptakan visibilitas lebih luas di seluruh penumpang dan operasional darat", points: ["Data Penumpang", "Data Penerbangan", "Data Bagasi", "Operasional Darat", "Proses Bagasi Terhubung"] },
            { label: "Kargo", title: "Hubungkan kargo di seluruh operasional", points: ["Pemesanan", "Penerimaan Kargo", "Gudang", "Dokumentasi", "Penerbangan", "Ground Handling", "Pengantaran"] },
            { label: "Loyalitas", title: "Membangun hubungan pelanggan yang lebih panjang", points: ["Perjalanan", "Interaksi Pelanggan", "Transaksi", "Data Loyalitas", "Keterlibatan Personal", "Perjalanan Berikutnya"] },
            { label: "Layanan", title: "Informasi bergerak efektif saat kondisi berubah", points: ["Perubahan", "Keterlambatan", "Gangguan", "Refund", "Permintaan Pelanggan", "Respons Operasional", "Penyelesaian Pelanggan"] },
        ],
    },
    domains: {
        title: "Dari Operasional Penerbangan hingga Teknologi Enterprise",
        items: [
            {
                title: "Teknologi Komersial & Perjalanan",
                description: "Mendukung proses bisnis yang berhubungan dengan pelanggan dan perjalanan",
                points: ["Manajemen perjalanan", "Sistem komersial", "Aplikasi untuk pelanggan", "Kanal digital", "Proses terkait pemesanan"],
            },
            {
                title: "Operasional Maskapai",
                description: "Menghubungkan teknologi dengan proses operasional yang mendukung pelaksanaan maskapai",
                points: ["aplikasi operasional", "alur kerja penerbangan", "data operasional", "proses tenaga kerja", "integrasi"],
            },
            {
                title: "Operasional Darat",
                description: "Mendukung proses dan koordinasi darat yang sensitif terhadap waktu",
                points: ["ground handling", "alur kerja turnaround", "koordinasi operasional", "mobilitas tenaga kerja", "integrasi sistem"],
            },
            {
                title: "Kargo Udara",
                description: "Menghubungkan proses, sistem, dan informasi operasional kargo",
                points: ["operasional kargo", "proses pengiriman", "sistem operasional", "integrasi", "visibilitas data"],
            },
            {
                title: "Infrastruktur & Operasional IT",
                description: "Menjaga fondasi teknologi yang mendukung layanan bisnis tetap andal dan terkelola",
                points: ["infrastruktur", "cloud", "manajemen layanan IT", "operasional keamanan", "integrasi sistem", "visibilitas data"],
            },
            {
                title: "Layanan Profesional & Digital",
                description: "Mendukung organisasi dari strategi teknologi hingga implementasi dan adopsi operasional",
                points: ["konsultasi", "pengembangan khusus", "implementasi", "integrasi", "adopsi pengguna", "perbaikan berkelanjutan"],
            },
        ].map(item => ({ ...item, popover: domainPopoverId })),
    },
    products: {
        title: "Produk Enterprise yang Dibangun Sesuai Alur Kerja Penerbangan",
        paragraphs: [
            "Organisasi penerbangan membutuhkan teknologi yang memahami konteks operasional di balik setiap proses.",
            "ASYST memadukan kapabilitas berbasis produk dengan integrasi dan pengetahuan domain untuk mendukung berbagai bagian ekosistem penerbangan",
        ],
    },
    solutions: {
        items: [
            {
                tag: "Maskapai",
                title: "Teknologi Terhubung untuk Operasional Maskapai",
                description: "Dukung operasional maskapai dengan teknologi terintegrasi di seluruh proses komersial, layanan penumpang, alur kerja operasional, dan data",
                chips: aviationChipsId,
                link: { label: "Jelajahi Operasional Armada" },
            },
            {
                tag: "Bandara",
                title: "Teknologi untuk Operasional Bandara yang Terhubung",
                description: "Hubungkan proses bandara, sistem operasional, stakeholder, dan data untuk mendukung operasional bandara yang terkoordinasi",
                chips: ["Operasional Bandara", "Penumpang", "Infrastruktur", "Data", "Integrasi", "Manajemen Layanan"],
                link: { label: "Jelajahi Solusi Bandara" },
            },
            {
                tag: "Ground Handler",
                title: "Teknologi Terhubung untuk Operasional Darat",
                description: "Mampukan organisasi ground handling menghubungkan proses operasional, tenaga kerja, sistem, dan informasi",
                chips: ["alur kerja operasional", "koordinasi tenaga kerja", "proses turnaround", "integrasi sistem"],
                link: { label: "Jelajahi Solusi Ground Handler" },
            },
            {
                tag: "Loyalitas",
                title: "Teknologi Digital untuk Loyalitas Pelanggan",
                description: "Bangun pengalaman loyalitas yang terhubung dengan mendekatkan data pelanggan, keterlibatan, reward, dan titik kontak digital",
                chips: aviationChipsId,
                link: { label: "Jelajahi Platform Loyalitas" },
            },
            {
                tag: "Kargo",
                title: "Teknologi Terhubung untuk Kargo Udara",
                description: "Satukan penjualan kargo, reservasi, proses pengiriman, dan visibilitas operasional dalam satu platform yang terhubung",
                chips: ["Komersial", "Operasional", "Pengiriman", "Sistem Enterprise", "Integrasi", "Data"],
                link: { label: "Jelajahi Platform Kargo" },
            },
            {
                tag: "Perjalanan",
                title: "Teknologi Digital untuk Perjalanan Korporat",
                description: "Digitalisasi pengajuan perjalanan, persetujuan, pemesanan, dan pelaporan melalui pengalaman perjalanan korporat yang terhubung",
                chips: ["Komersial", "Pemesanan", "Persetujuan", "Sistem Enterprise", "Integrasi", "Data"],
                link: { label: "Jelajahi Manajemen Perjalanan" },
            },
        ],
    },
    connect: {
        title: "Hubungkan Sistem di Balik Penerbangan",
        description: "ASYST membantu menghubungkan aplikasi, data, infrastruktur, lingkungan cloud, dan sistem eksternal sehingga organisasi dapat menciptakan ekosistem teknologi yang lebih terintegrasi",
        items: [
            {
                label: "Data dan Visibilitas",
                title: "Ubah Data Penerbangan Menjadi Visibilitas Operasional",
                description: "Penerbangan menghasilkan informasi di seluruh lingkungan komersial, operasional, pelanggan, dan infrastruktur. Menghubungkan informasi tersebut membantu tim melihat apa yang terjadi, memahami ketergantungan, dan mengambil keputusan operasional yang lebih tepat",
                points: ["Penumpang", "Penerbangan", "Darat", "Kargo", "Komersial", "Infrastruktur"],
            },
            {
                label: "Pengalaman Digital",
                title: "Ciptakan Pengalaman Digital yang Terhubung",
                description: "Penumpang, mitra, dan karyawan mengharapkan pengalaman digital yang konsisten. Menghubungkan kanal front-end dengan sistem di baliknya membantu menghadirkan informasi yang akurat dan perjalanan yang lebih lancar",
                points: ["Kanal Web & Mobile", "Layanan Mandiri", "Penawaran Personal", "Portal Mitra", "Aplikasi Karyawan"],
            },
            {
                label: "Keamanan dan Ketahanan",
                title: "Lindungi Operasional Penerbangan yang Kritis",
                description: "Seiring sistem penerbangan semakin terhubung, keamanan dan ketahanan harus mencakup aplikasi, infrastruktur, data, dan mitra di seluruh ekosistem",
                points: ["Pemantauan Keamanan", "Deteksi Ancaman", "Respons Insiden", "Kelangsungan Bisnis", "Ketahanan Infrastruktur"],
            },
            {
                label: "Model Operasional Penerbangan",
                title: "Selaraskan Teknologi dengan Model Operasional Penerbangan",
                description: "Teknologi memberi nilai terbesar ketika mencerminkan cara organisasi benar-benar beroperasi, dari operasional komersial dan penerbangan hingga fungsi darat, kargo, dan enterprise",
                points: ["Penyelarasan Proses", "Tata Kelola Operasional", "Roadmap Teknologi", "Manajemen Layanan", "Perbaikan Berkelanjutan"],
            },
        ],
    },
    priorities: {
        title: "Jelajahi Berdasarkan Prioritas Bisnis",
        items: [
            { title: "Hubungkan teknologi dengan pertumbuhan bisnis", points: ["Hasil bisnis", "Transformasi enterprise", "Strategi teknologi"] },
            { title: "Bangun fondasi teknologi yang skalabel", points: ["Platform & cloud", "Infrastruktur", "Arsitektur enterprise"] },
            { title: "Tingkatkan visibilitas dan efisiensi operasional", points: ["Data operasional", "Integrasi proses", "Operasional IT"] },
            { title: "Ciptakan pengalaman pelanggan digital yang lebih baik", points: ["Kanal digital", "Loyalitas", "Data pelanggan"] },
            { title: "Bangun kemitraan teknologi yang akuntabel dan skalabel", points: ["Layanan terkelola", "Tingkat layanan", "Perbaikan berkelanjutan"] },
        ],
        matrix: {
            columns: ["Maskapai", "Bandara", "Ekosistem"],
            rows: [
                { label: "Software Enterprise" },
                { label: "Integrasi" },
                { label: "Solusi Digital" },
                { label: "Data & Analitik" },
                { label: "Infrastruktur" },
                { label: "Operasional IT" },
                { label: "Layanan Profesional" },
            ],
        },
    },
    faq: {
        title: "FAQ Industri Penerbangan",
        items: [
            { question: "Apa yang dilakukan perusahaan teknologi penerbangan?", answer: "Perusahaan teknologi penerbangan merancang, mengintegrasikan, mengimplementasikan, dan mendukung sistem teknologi yang digunakan di lingkungan bisnis dan operasional penerbangan. Tergantung organisasinya, ini dapat mencakup software enterprise, integrasi, data, infrastruktur, kanal digital, dan sistem operasional" },
            { question: "Solusi penerbangan apa saja yang disediakan ASYST?", answer: "ASYST menyediakan produk enterprise, integrasi, solusi digital, infrastruktur, operasional IT, dan layanan profesional untuk fungsi maskapai, bandara, ground handling, kargo, loyalitas, dan perjalanan" },
            { question: "Apakah ASYST hanya bekerja dengan maskapai?", answer: "Tidak. ASYST bekerja di seluruh ekosistem penerbangan, termasuk bandara, ground handler, operator kargo, dan program loyalitas, serta organisasi di luar penerbangan" },
            { question: "Apakah ASYST dapat mengintegrasikan sistem penerbangan yang sudah ada?", answer: "Ya. ASYST menghubungkan sistem komersial, operasional, mitra, dan enterprise yang ada melalui API, orkestrasi layanan, dan integrasi data" },
            { question: "Apakah ASYST mendukung teknologi setelah implementasi?", answer: "Ya. ASYST menyediakan layanan terkelola, operasional IT, manajemen layanan, dan perbaikan berkelanjutan setelah go-live" },
            { question: "Apakah ASYST dapat mendukung transformasi digital di luar penerbangan?", answer: "Ya. Kapabilitas teknologi enterprise, integrasi, dan konsultasi yang sama diterapkan pada organisasi di industri lain dan ekosistem bisnis yang terhubung" },
        ],
    },
    cta: {
        title: "Bangun Teknologi di Balik Transformasi Penerbangan Anda Berikutnya",
        description: "Baik Anda sedang memodernisasi sistem yang ada, menghubungkan platform yang terfragmentasi, meningkatkan visibilitas operasional, atau membangun kapabilitas digital baru, ASYST menghadirkan teknologi enterprise, integrasi, dan keahlian domain penerbangan untuk membawa inisiatif Anda dari strategi hingga operasional",
        button: "Diskusikan Tantangan Penerbangan Anda",
    },
});
