import { BusinessCenterOutlinedIcon, CalendarTodayOutlinedIcon, FactCheckOutlinedIcon, FlightOutlinedIcon, HandshakeOutlinedIcon, Inventory2OutlinedIcon, LocalShippingOutlinedIcon, QueryStatsOutlinedIcon, SettingsSuggestOutlinedIcon, SwapHorizOutlinedIcon, WidgetsOutlinedIcon, WorkspacePremiumOutlinedIcon } from "components/ui/icons";

import imgHero from "assets/asyst/img/background/services-solutions/hermes1.webp";
import imgHermesApp from "assets/asyst/img/background/services-solutions/hermes2.webp";
import imgCargo from "assets/asyst/img/background/services-solutions/cargo.webp";
import imgFlight from "assets/asyst/img/background/product/chronus/detail/business-1.webp";
import imgFleet from "assets/asyst/img/background/product/chronus/detail/feature-1.webp";
import { EnterpriseProductContent } from "./enterprise.types";
import { localized } from "shared/i18n";

const hermesDetailEn: EnterpriseProductContent = {
    seo: {
        title: "Cargo Management System for Air Cargo Operations | ASYST",
        description: "ASYST Cargo Management System connects booking, acceptance, warehousing, build-up, flight coordination, delivery and reporting in one digital platform for airlines, ground handlers and forwarders.",
    },
    hero: {
        breadcrumb: "Cargo Management System",
        title: "Cargo Management System for More Connected Air Cargo Operations",
        description: "Integrate cargo processes, data and stakeholders into a single digital ecosystem to improve operational visibility, accelerate processes and enable data-driven decisions.",
        primaryButton: "Talk to an Expert",
        secondaryButton: "Explore Cargo Capabilities",
        image: imgHero,
        imageAlt: "ASYST Hermes cargo management system on laptop and mobile",
    },
    sections: [
        {
            type: "challenge",
            title: "As Cargo Operations Grow More Complex, Data Must Not Be Fragmented",
            paragraphs: [
                "Cargo operations involve many points of information exchange. Every process, from booking, shipment, warehousing and flight operations to handling, documentation and delivery, relies on consistent data so that all stakeholders can work from the same information.",
            ],
            items: [
                { title: "Fragmented Data", description: "Shipment data is scattered across systems, applications, spreadsheets and documents." },
                { title: "Limited Shipment Visibility", description: "Operations teams need more time to determine the full status of a shipment." },
                { title: "Manual Processes", description: "Data entry, validation, status updates and document exchange may still require manual intervention." },
                { title: "Disconnected Stakeholders", description: "Airlines, handlers, forwarders, warehouses and other stakeholders often work with different sources of information." },
                { title: "Slow Decision-Making", description: "Late or inconsistent operational data makes it difficult for management to get a quick picture of business conditions." },
                { title: "Difficult System Integration", description: "Legacy systems and partner platforms require an integration layer that can connect data and processes securely." },
            ],
        },
        {
            type: "overview",
            title: "From Cargo Operations to a Connected Cargo Ecosystem",
            paragraphs: [
                "A Cargo Management System is not simply about replacing manual processes with an application.",
                "Its real value lies in creating a digital operating layer that connects people, processes, systems and data, so the organization can operate with more consistent and measurable information.",
            ],
            image: imgCargo,
            cards: [
                { tag: "Connect", title: "Systems and Stakeholders", description: "Integrate cargo processes with internal systems and partner ecosystems through APIs and an integration architecture." },
                { tag: "Control", title: "Stronger Operational Control", description: "Structure the cargo process through workflows, statuses, validation and operational monitoring." },
                { tag: "Visibility", title: "Clearer Shipment Visibility", description: "Consolidate key information so teams can quickly understand the shipment journey and operational conditions." },
                { tag: "Optimize", title: "Data to Improve Performance", description: "Turn operational data into insights that help identify bottlenecks, improve efficiency and support business decisions." },
            ],
        },
        {
            type: "flow",
            title: "One Platform to Manage Cargo from Booking to Delivery",
            description: "The ASYST Cargo Management System is designed as a digital platform that supports every process across the cargo lifecycle.",
            steps: [
                { label: "Book", icon: CalendarTodayOutlinedIcon, title: "Book", description: "Manage cargo requests and bookings with structured shipment data from the very beginning of the process.", image: imgHero },
                { label: "Accept", icon: FactCheckOutlinedIcon, title: "Accept", description: "Validate shipment details, documents and physical acceptance before cargo enters the handling process.", image: imgHermesApp },
                { label: "Process", icon: SettingsSuggestOutlinedIcon, title: "Process", description: "Coordinate handling activities, status updates and screening requirements in a consistent workflow.", image: imgHero },
                { label: "Warehouse", icon: Inventory2OutlinedIcon, title: "Warehouse", description: "Track cargo location, storage and movement inside the warehouse in real time.", image: imgCargo },
                { label: "Build-up", icon: WidgetsOutlinedIcon, title: "Build-up", description: "Plan and record the build-up of cargo into ULDs according to flight and load requirements.", image: imgHermesApp },
                { label: "Flight", icon: FlightOutlinedIcon, title: "Flight", description: "Align cargo with flight schedules, capacity and manifests so departure information stays accurate.", image: imgFlight },
                { label: "Transfer", icon: SwapHorizOutlinedIcon, title: "Transfer", description: "Manage transit and transfer cargo between flights, stations and partners without losing visibility.", image: imgFleet },
                { label: "Delivery", icon: LocalShippingOutlinedIcon, title: "Delivery", description: "Complete arrival handling, notification and release of cargo to the consignee or the next party.", image: imgCargo },
                { label: "Report", icon: QueryStatsOutlinedIcon, title: "Report", description: "Turn operational data into reports and dashboards for performance monitoring and decision-making.", image: imgHero },
            ],
        },
        {
            type: "capabilities",
            heading: "column",
            title: "Cargo Management Capabilities Built for Enterprise Operations",
            description: "Modern cargo operations need more than applications. They need a data architecture that allows shipment information to be used by many stakeholders and systems.",
            image: imgHermesApp,
            items: [
                { title: "Cargo Booking Management", description: "Manage the cargo booking process in a more structured way, from requests and availability to shipment information and confirmation.", highlight: "Bookings are better controlled, and shipment data is ready for the next steps." },
                { title: "Shipment Management", description: "Maintain shipment data, routing and status in one place so every team works from the same record.", highlight: "Shipment information stays consistent from origin to destination." },
                { title: "Cargo Acceptance", description: "Record cargo acceptance, weight and dimension checks, and supporting documents before handling begins.", highlight: "Discrepancies are detected earlier in the process." },
                { title: "Warehouse Management", description: "Monitor cargo storage, location and movement within the warehouse, including special handling requirements.", highlight: "Warehouse teams can find and move cargo faster." },
                { title: "Flight & Cargo Coordination", description: "Connect cargo with flight schedules, capacity and load planning to support on-time departures.", highlight: "Load planning is based on up-to-date cargo information." },
                { title: "Cargo Tracking & Visibility", description: "Provide shipment status and milestones to internal teams and partners throughout the cargo journey.", highlight: "Stakeholders can track shipments without manual follow-up." },
                { title: "Documentation Management", description: "Manage air waybills, manifests and supporting documents digitally and link them to the related shipments.", highlight: "Documents are easier to find, verify and share." },
                { title: "Operational Dashboard", description: "Present key operational indicators such as volume, status and performance in a single dashboard.", highlight: "Management gets a faster overview of cargo operations." },
            ],
        },
        {
            type: "architecture",
            title: "One Technology Partner with Multiple Enterprise Capabilities",
            description: "The Cargo Management System can be developed together with other ASYST capabilities, from integration, data management and application modernization to infrastructure and managed services.",
            mediaFirst: true,
            tabs: [
                {
                    label: "Digital Cargo Data",
                    title: "Cargo Technology Must Deliver Business Impact",
                    paragraphs: [
                        "From fragmented information to connected logistics data.",
                        "ASYST helps organizations build a digital cargo foundation that is better prepared for:",
                    ],
                    points: ["API-based integration", "Standardized data exchange", "Shipment visibility", "Event-based information", "Partner connectivity", "Analytics", "Digital workflows", "Future ecosystem expansion"],
                    image: imgHero,
                },
                {
                    label: "Integration",
                    title: "Connect Cargo Systems with the Wider Ecosystem",
                    paragraphs: ["Cargo processes rarely run in a single application. ASYST connects the Cargo Management System with the systems and partners your operation depends on."],
                    points: ["Airline reservation and flight systems", "Ground handling and warehouse systems", "Customs and regulatory platforms", "Forwarder and partner portals", "Finance and billing systems"],
                    image: imgFlight,
                },
                {
                    label: "Enterprise Architecture",
                    title: "Built to Fit Your Enterprise Architecture",
                    paragraphs: ["The platform is designed as part of the organization's technology landscape, not as a standalone application."],
                    points: ["Modular services that grow with the operation", "Secure, role-based access", "Integration layer for legacy and modern systems", "Scalable infrastructure and managed services"],
                    image: imgFleet,
                },
                {
                    label: "Business Outcome",
                    title: "Measurable Results for Cargo Operations",
                    paragraphs: ["Connected cargo data helps organizations move from reactive operations to informed decisions."],
                    points: ["Faster processing from booking to delivery", "Fewer manual errors and rework", "Better use of capacity", "More reliable information for customers and partners", "Clearer performance reporting"],
                    image: imgCargo,
                },
            ],
        },
        {
            type: "expertise",
            title: "Why Build Cargo Technology with ASYST?",
            items: [
                { icon: BusinessCenterOutlinedIcon, title: "Enterprise Capability", description: "The ability to build and develop software for organizations with complex business processes." },
                { icon: FlightOutlinedIcon, title: "Industry Expertise", description: "A deep understanding of aviation and its ecosystem, including airlines, airports, ground operations, travel and cargo." },
                { icon: WorkspacePremiumOutlinedIcon, title: "Implementation Experience", description: "Experience implementing technology in enterprise environments helps bridge the gap between software and operational reality." },
                { icon: HandshakeOutlinedIcon, title: "Long-Term Partnership", description: "ASYST does not stop at software delivery. We support further development, improvement, integration and operational adoption." },
            ],
        },
    ],
    faq: {
        title: "FAQ about the Cargo Management System",
        items: [
            { question: "What is a Cargo Management System?", answer: "A Cargo Management System is software that helps organizations manage cargo processes digitally, from booking, shipment, acceptance, warehousing and flight coordination to tracking, documentation and reporting." },
            { question: "What are the benefits of a Cargo Management System for airlines?", answer: "Airlines gain consistent shipment data, faster acceptance and build-up, better use of cargo capacity, real-time visibility and reliable reporting for commercial and operational decisions." },
            { question: "Can the Cargo Management System be integrated with existing systems?", answer: "Yes. The platform can be connected to reservation, flight, warehouse, customs, finance and partner systems through APIs and an integration layer." },
            { question: "Can ground handlers use the system?", answer: "Yes. Ground handlers can use it to manage acceptance, warehousing, build-up and delivery activities, and to share status updates with airlines and other partners." },
            { question: "Does the Cargo Management System support shipment tracking?", answer: "Yes. Shipment milestones and statuses are recorded throughout the process, so internal teams and partners can monitor cargo from booking to delivery." },
            { question: "Is the Cargo Management System only for the aviation industry?", answer: "It is designed around air cargo processes, but the same approach to connected cargo data, workflows and integration can support other logistics and transportation operations." },
        ],
    },
    cta: {
        title: "Build More Connected Cargo Operations",
        description: "Every organization has unique cargo processes, systems and challenges. Discuss your needs with the ASYST team to find the technology, integration and digital transformation approach that suits your operating environment.",
        button: "Talk to a Cargo Technology Expert",
    },
};

export const HermesDetailConst = localized(hermesDetailEn, {
    seo: {
        title: "Cargo Management System untuk Operasional Kargo Udara | ASYST",
        description: "Cargo Management System ASYST menghubungkan booking, acceptance, pergudangan, build-up, koordinasi penerbangan, pengiriman, dan pelaporan dalam satu platform digital untuk maskapai, ground handler, dan forwarder.",
    },
    hero: {
        title: "Cargo Management System untuk Operasional Kargo Udara yang Lebih Terhubung",
        description: "Integrasikan proses, data, dan pemangku kepentingan kargo ke dalam satu ekosistem digital untuk meningkatkan visibilitas operasional, mempercepat proses, dan mendukung keputusan berbasis data.",
        primaryButton: "Hubungi Ahli Kami",
        secondaryButton: "Jelajahi Kapabilitas Kargo",
        imageAlt: "Cargo management system ASYST Hermes di laptop dan ponsel",
    },
    sections: [
        {
            title: "Saat Operasional Kargo Semakin Kompleks, Data Tidak Boleh Terfragmentasi",
            paragraphs: [
                "Operasional kargo melibatkan banyak titik pertukaran informasi. Setiap proses, mulai dari booking, pengiriman, pergudangan, dan operasional penerbangan hingga handling, dokumentasi, dan delivery, membutuhkan data yang konsisten agar seluruh pemangku kepentingan bekerja dengan informasi yang sama.",
            ],
            items: [
                { title: "Data Terfragmentasi", description: "Data pengiriman tersebar di berbagai sistem, aplikasi, spreadsheet, dan dokumen." },
                { title: "Visibilitas Pengiriman Terbatas", description: "Tim operasional membutuhkan waktu lebih lama untuk mengetahui status pengiriman secara utuh." },
                { title: "Proses Manual", description: "Input data, validasi, pembaruan status, dan pertukaran dokumen masih dapat membutuhkan intervensi manual." },
                { title: "Pemangku Kepentingan Tidak Terhubung", description: "Maskapai, handler, forwarder, gudang, dan pihak lain sering bekerja dengan sumber informasi yang berbeda." },
                { title: "Pengambilan Keputusan Lambat", description: "Data operasional yang terlambat atau tidak konsisten menyulitkan manajemen memperoleh gambaran kondisi bisnis dengan cepat." },
                { title: "Integrasi Sistem yang Sulit", description: "Sistem lama dan platform mitra membutuhkan lapisan integrasi yang mampu menghubungkan data dan proses secara aman." },
            ],
        },
        {
            title: "Dari Operasional Kargo Menuju Ekosistem Kargo yang Terhubung",
            paragraphs: [
                "Cargo Management System bukan sekadar mengganti proses manual dengan aplikasi.",
                "Nilai utamanya terletak pada terciptanya lapisan operasional digital yang menghubungkan orang, proses, sistem, dan data, sehingga organisasi dapat beroperasi dengan informasi yang lebih konsisten dan terukur.",
            ],
            cards: [
                { tag: "Hubungkan", title: "Sistem dan Pemangku Kepentingan", description: "Integrasikan proses kargo dengan sistem internal dan ekosistem mitra melalui API dan arsitektur integrasi." },
                { tag: "Kendalikan", title: "Kontrol Operasional yang Lebih Kuat", description: "Susun proses kargo melalui alur kerja, status, validasi, dan pemantauan operasional." },
                { tag: "Visibilitas", title: "Visibilitas Pengiriman yang Lebih Jelas", description: "Satukan informasi penting agar tim dapat cepat memahami perjalanan pengiriman dan kondisi operasional." },
                { tag: "Optimalkan", title: "Data untuk Meningkatkan Kinerja", description: "Ubah data operasional menjadi insight untuk mengidentifikasi hambatan, meningkatkan efisiensi, dan mendukung keputusan bisnis." },
            ],
        },
        {
            title: "Satu Platform untuk Mengelola Kargo dari Booking hingga Delivery",
            description: "ASYST Cargo Management System dirancang sebagai platform digital yang mendukung setiap proses dalam siklus kargo.",
            steps: [
                { label: "Booking", title: "Booking", description: "Kelola permintaan dan pemesanan kargo dengan data pengiriman yang terstruktur sejak awal proses." },
                { label: "Acceptance", title: "Acceptance", description: "Validasi detail pengiriman, dokumen, dan penerimaan fisik sebelum kargo masuk ke proses handling." },
                { label: "Proses", title: "Proses", description: "Koordinasikan aktivitas handling, pembaruan status, dan kebutuhan screening dalam alur kerja yang konsisten." },
                { label: "Gudang", title: "Gudang", description: "Pantau lokasi, penyimpanan, dan pergerakan kargo di dalam gudang secara real-time." },
                { label: "Build-up", title: "Build-up", description: "Rencanakan dan catat build-up kargo ke dalam ULD sesuai kebutuhan penerbangan dan muatan." },
                { label: "Penerbangan", title: "Penerbangan", description: "Selaraskan kargo dengan jadwal, kapasitas, dan manifes penerbangan agar informasi keberangkatan tetap akurat." },
                { label: "Transfer", title: "Transfer", description: "Kelola kargo transit dan transfer antarpenerbangan, stasiun, dan mitra tanpa kehilangan visibilitas." },
                { label: "Delivery", title: "Delivery", description: "Selesaikan penanganan kedatangan, notifikasi, dan penyerahan kargo kepada penerima atau pihak berikutnya." },
                { label: "Laporan", title: "Laporan", description: "Ubah data operasional menjadi laporan dan dashboard untuk memantau kinerja dan mengambil keputusan." },
            ],
        },
        {
            title: "Kapabilitas Cargo Management untuk Operasional Enterprise",
            description: "Operasional kargo modern membutuhkan lebih dari sekadar aplikasi. Dibutuhkan arsitektur data yang memungkinkan informasi pengiriman dimanfaatkan oleh berbagai pemangku kepentingan dan sistem.",
            items: [
                { title: "Manajemen Booking Kargo", description: "Kelola proses booking kargo secara lebih terstruktur, mulai dari permintaan dan ketersediaan hingga informasi pengiriman dan konfirmasi.", highlight: "Booking lebih terkendali, dan data pengiriman siap untuk tahap berikutnya." },
                { title: "Manajemen Pengiriman", description: "Kelola data, rute, dan status pengiriman di satu tempat agar setiap tim bekerja dari catatan yang sama.", highlight: "Informasi pengiriman tetap konsisten dari asal hingga tujuan." },
                { title: "Cargo Acceptance", description: "Catat penerimaan kargo, pemeriksaan berat dan dimensi, serta dokumen pendukung sebelum handling dimulai.", highlight: "Ketidaksesuaian terdeteksi lebih awal dalam proses." },
                { title: "Manajemen Gudang", description: "Pantau penyimpanan, lokasi, dan pergerakan kargo di gudang, termasuk kebutuhan penanganan khusus.", highlight: "Tim gudang dapat menemukan dan memindahkan kargo lebih cepat." },
                { title: "Koordinasi Penerbangan & Kargo", description: "Hubungkan kargo dengan jadwal penerbangan, kapasitas, dan perencanaan muatan untuk mendukung keberangkatan tepat waktu.", highlight: "Perencanaan muatan didasarkan pada informasi kargo terkini." },
                { title: "Pelacakan & Visibilitas Kargo", description: "Sajikan status dan milestone pengiriman kepada tim internal dan mitra sepanjang perjalanan kargo.", highlight: "Pemangku kepentingan dapat melacak pengiriman tanpa tindak lanjut manual." },
                { title: "Manajemen Dokumentasi", description: "Kelola air waybill, manifes, dan dokumen pendukung secara digital serta hubungkan dengan pengiriman terkait.", highlight: "Dokumen lebih mudah dicari, diverifikasi, dan dibagikan." },
                { title: "Dashboard Operasional", description: "Tampilkan indikator operasional utama seperti volume, status, dan kinerja dalam satu dashboard.", highlight: "Manajemen memperoleh gambaran operasional kargo lebih cepat." },
            ],
        },
        {
            title: "Satu Mitra Teknologi dengan Beragam Kapabilitas Enterprise",
            description: "Cargo Management System dapat dikembangkan bersama kapabilitas ASYST lainnya, mulai dari integrasi, manajemen data, dan modernisasi aplikasi hingga infrastruktur dan managed services.",
            tabs: [
                {
                    label: "Data Kargo Digital",
                    title: "Teknologi Kargo Harus Memberikan Dampak Bisnis",
                    paragraphs: [
                        "Dari informasi yang terfragmentasi menuju data logistik yang terhubung.",
                        "ASYST membantu organisasi membangun fondasi kargo digital yang lebih siap untuk:",
                    ],
                    points: ["Integrasi berbasis API", "Pertukaran data terstandar", "Visibilitas pengiriman", "Informasi berbasis event", "Konektivitas mitra", "Analitik", "Alur kerja digital", "Perluasan ekosistem di masa depan"],
                },
                {
                    label: "Integrasi",
                    title: "Hubungkan Sistem Kargo dengan Ekosistem yang Lebih Luas",
                    paragraphs: ["Proses kargo jarang berjalan dalam satu aplikasi. ASYST menghubungkan Cargo Management System dengan sistem dan mitra yang dibutuhkan operasional Anda."],
                    points: ["Sistem reservasi dan penerbangan maskapai", "Sistem ground handling dan gudang", "Platform kepabeanan dan regulasi", "Portal forwarder dan mitra", "Sistem keuangan dan penagihan"],
                },
                {
                    label: "Arsitektur Enterprise",
                    title: "Dirancang Sesuai Arsitektur Enterprise Anda",
                    paragraphs: ["Platform dirancang sebagai bagian dari lanskap teknologi organisasi, bukan aplikasi yang berdiri sendiri."],
                    points: ["Layanan modular yang tumbuh bersama operasional", "Akses aman berbasis peran", "Lapisan integrasi untuk sistem lama dan modern", "Infrastruktur dan managed services yang skalabel"],
                },
                {
                    label: "Hasil Bisnis",
                    title: "Hasil Terukur untuk Operasional Kargo",
                    paragraphs: ["Data kargo yang terhubung membantu organisasi beralih dari operasional reaktif ke keputusan yang lebih tepat."],
                    points: ["Proses lebih cepat dari booking hingga delivery", "Lebih sedikit kesalahan manual dan pekerjaan ulang", "Pemanfaatan kapasitas yang lebih baik", "Informasi yang lebih andal bagi pelanggan dan mitra", "Pelaporan kinerja yang lebih jelas"],
                },
            ],
        },
        {
            title: "Mengapa Membangun Teknologi Kargo bersama ASYST?",
            items: [
                { title: "Kapabilitas Enterprise", description: "Kemampuan membangun dan mengembangkan software untuk organisasi dengan proses bisnis yang kompleks." },
                { title: "Keahlian Industri", description: "Pemahaman mendalam tentang penerbangan dan ekosistemnya, termasuk maskapai, bandara, operasional darat, perjalanan, dan kargo." },
                { title: "Pengalaman Implementasi", description: "Pengalaman menerapkan teknologi di lingkungan enterprise membantu menjembatani software dengan realitas operasional." },
                { title: "Kemitraan Jangka Panjang", description: "ASYST tidak berhenti pada penyerahan software. Kami mendukung pengembangan lanjutan, peningkatan, integrasi, dan adopsi operasional." },
            ],
        },
    ],
    faq: {
        title: "Pertanyaan Umum tentang Cargo Management System",
        items: [
            { question: "Apa itu Cargo Management System?", answer: "Cargo Management System adalah software yang membantu organisasi mengelola proses kargo secara digital, mulai dari booking, pengiriman, acceptance, pergudangan, dan koordinasi penerbangan hingga pelacakan, dokumentasi, dan pelaporan." },
            { question: "Apa manfaat Cargo Management System bagi maskapai?", answer: "Maskapai memperoleh data pengiriman yang konsisten, proses acceptance dan build-up yang lebih cepat, pemanfaatan kapasitas kargo yang lebih baik, visibilitas real-time, dan pelaporan yang andal untuk keputusan komersial maupun operasional." },
            { question: "Apakah Cargo Management System dapat diintegrasikan dengan sistem yang sudah ada?", answer: "Ya. Platform dapat dihubungkan dengan sistem reservasi, penerbangan, gudang, kepabeanan, keuangan, dan mitra melalui API dan lapisan integrasi." },
            { question: "Apakah sistem ini dapat digunakan oleh ground handler?", answer: "Ya. Ground handler dapat menggunakannya untuk mengelola acceptance, pergudangan, build-up, dan delivery, serta membagikan pembaruan status kepada maskapai dan mitra lainnya." },
            { question: "Apakah Cargo Management System mendukung pelacakan pengiriman?", answer: "Ya. Milestone dan status pengiriman dicatat di sepanjang proses sehingga tim internal dan mitra dapat memantau kargo dari booking hingga delivery." },
            { question: "Apakah Cargo Management System hanya untuk industri penerbangan?", answer: "Sistem ini dirancang berdasarkan proses kargo udara, tetapi pendekatan data, alur kerja, dan integrasi kargo yang terhubung juga dapat mendukung operasional logistik dan transportasi lainnya." },
        ],
    },
    cta: {
        title: "Bangun Operasional Kargo yang Lebih Terhubung",
        description: "Setiap organisasi memiliki proses, sistem, dan tantangan kargo yang berbeda. Diskusikan kebutuhan Anda bersama tim ASYST untuk menemukan pendekatan teknologi, integrasi, dan transformasi digital yang sesuai dengan lingkungan operasional Anda.",
        button: "Hubungi Ahli Teknologi Kargo",
    },
});
