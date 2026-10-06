import { SvgIconComponent } from "@mui/icons-material";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { ReactComponent as AutomateOperationsIcon } from "assets/asyst/img/icon/capabilities/automate-operations.svg";
import { ReactComponent as ModernizeLegacyIcon } from "assets/asyst/img/icon/capabilities/modernize-legacy.svg";
import { ReactComponent as ConnectEnterpriseIcon } from "assets/asyst/img/icon/capabilities/connect-enterprise.svg";
import { ReactComponent as ImproveCustomerIcon } from "assets/asyst/img/icon/capabilities/improve-customer.svg";
import { ReactComponent as BuildDigitalIcon } from "assets/asyst/img/icon/capabilities/build-digital.svg";
import { localized } from "shared/i18n";

import imgAwardAlibabaCloud from "assets/asyst/img/award/award-alibaba-cloud.webp";
import imgAwardIrca from "assets/asyst/img/award/award-irca.webp";
import imgAwardInsider from "assets/asyst/img/award/award-insider.webp";

import logoKai from "assets/asyst/img/trusted-by/trusted-kai.webp";
import logoPelindo from "assets/asyst/img/trusted-by/trusted-pelindo.webp";
import logoXlAxiata from "assets/asyst/img/trusted-by/trusted-xl-axiata.webp";
import logoPerseroBatam from "assets/asyst/img/trusted-by/trusted-persero-batam.webp";
import logoGaruda from "assets/asyst/img/trusted-by/trusted-garuda-indonesia.webp";
import logoSabre from "assets/asyst/img/trusted-by/trusted-sabre.webp";
import logoAxa from "assets/asyst/img/trusted-by/trusted-axa.webp";

import imgProductMockup1 from "assets/asyst/img/background/services-solutions/amala1.webp";
import imgProductMockup2 from "assets/asyst/img/background/services-solutions/hermes1.webp";
import imgCapAutomate from "assets/asyst/img/background/capabilities/automate-operations.webp";
import imgCapModernize from "assets/asyst/img/background/capabilities/modernize-legacy.webp";
import imgCapConnect from "assets/asyst/img/background/capabilities/connect-enterprise.webp";
import imgCapCustomer from "assets/asyst/img/background/capabilities/improve-customer.webp";
import imgCapBuild from "assets/asyst/img/background/capabilities/build-digital.webp";
import imgPartnerProduct from "assets/asyst/img/background/partner/partner-product.webp";
import imgPartnerIntegration from "assets/asyst/img/background/partner/partner-integration.webp";
import imgPartnerImplementation from "assets/asyst/img/background/partner/partner-implementation.webp";
import imgPartnerServices from "assets/asyst/img/background/partner/partner-services.webp";
import imgIndustryEnterprise from "assets/asyst/img/background/HBNR-3.webp";
import imgIndustryAviation from "assets/asyst/img/background/HBNR-1.webp";
import imgIndustryLogistic from "assets/asyst/img/background/services-solutions/cargo.webp";

// Konten statis homepage (desain revamp 2026).
// Gambar & ikon sementara memakai aset yang sudah ada di repo; ganti dengan aset final dari desain.
// Tiap konten dua bahasa: argumen pertama `localized` = EN (lengkap), kedua = terjemahan ID (teks saja).

export const HeroConst = localized({
    title: "Enterprise software that connects complex business operations",
    description: "Build, integrate, and operate the digital systems your business depends on, from enterprise applications and workflow automation to system integration and managed technology services.",
    primaryButton: { label: "Explore Products", link: "/product" },
    secondaryButton: { label: "Talk to Expert" },
}, {
    title: "Software enterprise yang menghubungkan operasional bisnis yang kompleks",
    description: "Bangun, integrasikan, dan operasikan sistem digital yang menjadi tumpuan bisnis Anda, mulai dari aplikasi enterprise dan otomatisasi alur kerja hingga integrasi sistem dan layanan teknologi terkelola.",
    primaryButton: { label: "Jelajahi Produk" },
    secondaryButton: { label: "Hubungi Ahli" },
})

export interface AwardItem {
    image: string;
    title: string;
    subtitle: string;
}

export const AwardsConst = localized<AwardItem[]>([
    { image: imgAwardAlibabaCloud, title: "Indonet & Alibaba Cloud Award", subtitle: "Top-tier digital and IT" },
    { image: imgAwardIrca, title: "IRCA Award", subtitle: "Best Enterprise in Regulatory" },
    { image: imgAwardInsider, title: "Insider Award", subtitle: "The Most Breakthrough Growth" },
], [
    { subtitle: "Digital dan IT kelas atas" },
    { subtitle: "Perusahaan Terbaik dalam Kepatuhan Regulasi" },
    { subtitle: "Pertumbuhan Paling Terobosan" },
])

export const TrustedByConst: { name: string; logo: string }[] = [
    { name: "KAI", logo: logoKai },
    { name: "Pelindo", logo: logoPelindo },
    { name: "XL Axiata", logo: logoXlAxiata },
    { name: "Persero Batam", logo: logoPerseroBatam },
    { name: "Garuda Indonesia", logo: logoGaruda },
    { name: "Sabre", logo: logoSabre },
    { name: "AXA", logo: logoAxa },
]

export interface HighlightItem {
    icon: SvgIconComponent;
    title: string;
    description: string;
}

export const EnterpriseHighlightConst = localized({
    title: "Built for complex enterprise environments",
    description: "Enterprise technology is not only about building software. It requires the ability to understand business processes, connect systems, deliver reliably, and support technology throughout its lifecycle.",
    items: [
        {
            icon: DashboardCustomizeOutlinedIcon,
            title: "Enterprise software built around real operational",
            description: "ASYST publicly presents products spanning areas such as ERP, corporate travel, ITSM, loyalty, cargo and workforce/resource scheduling.",
        },
        {
            icon: HubOutlinedIcon,
            title: "Technology that connects the enterprise ecosystem",
            description: "Enterprise environments rarely run on a single system. ASYST combines applications, APIs, data, infrastructure and business workflows to help organizations more connected technology",
        },
        // TODO: kartu ke-3 terpotong di desain; copy di bawah perlu dikonfirmasi
        {
            icon: SupportAgentOutlinedIcon,
            title: "Delivery and support across the lifecycle",
            description: "From implementation to managed services, ASYST supports enterprise technology so it keeps running reliably as the business grows.",
        },
    ] as HighlightItem[],
}, {
    title: "Dibangun untuk lingkungan enterprise yang kompleks",
    description: "Teknologi enterprise bukan sekadar membangun software. Dibutuhkan kemampuan memahami proses bisnis, menghubungkan sistem, menghadirkan solusi secara andal, dan mendukung teknologi sepanjang siklus hidupnya.",
    items: [
        {
            title: "Software enterprise yang dibangun dari kebutuhan operasional nyata",
            description: "ASYST menghadirkan produk di berbagai area seperti ERP, perjalanan korporat, ITSM, loyalitas, kargo, serta penjadwalan tenaga kerja dan sumber daya.",
        },
        {
            title: "Teknologi yang menghubungkan ekosistem enterprise",
            description: "Lingkungan enterprise jarang berjalan di atas satu sistem saja. ASYST memadukan aplikasi, API, data, infrastruktur, dan alur kerja bisnis untuk membantu organisasi memiliki teknologi yang lebih terhubung.",
        },
        {
            title: "Implementasi dan dukungan di sepanjang siklus hidup",
            description: "Dari implementasi hingga layanan terkelola, ASYST mendukung teknologi enterprise agar tetap berjalan andal seiring pertumbuhan bisnis.",
        },
    ],
})

export type ProductCategory = "Operations" | "Enterprise" | "Customer" | "Information and Technology";

export const ProductCategoryConst: ("All Products" | ProductCategory)[] = ["All Products", "Operations", "Enterprise", "Customer", "Information and Technology"]

/** Label ID untuk kategori produk (nilai kategori tetap dipakai sebagai key filter) */
export const ProductCategoryTermsConst: Record<string, string> = {
    "All Products": "Semua Produk",
    "Operations": "Operasional",
    "Enterprise": "Enterprise",
    "Customer": "Pelanggan",
    "Information and Technology": "Informasi & Teknologi",
}

export interface ProductItem {
    title: string;
    description: string;
    category: ProductCategory;
    image: string;
    link: string;
}

export const ProductsConst = localized({
    title: "Software built for complex business operations",
    description: "Explore enterprise products designed to digitize workflows, connect business functions, improve visibility and support operational decision-making",
    items: [
        {
            title: "Loyalty Management Platform",
            description: "Create and manage loyalty programs, rewards, member tiers, partner integrations and customer engagement",
            category: "Customer",
            image: imgProductMockup1,
            link: "/product",
        },
        {
            title: "Enterprise ERP & Business Management",
            description: "Integrated business management software designed to connect front- and back-office processes through shared, real-time information",
            category: "Enterprise",
            image: imgProductMockup2,
            link: "/product",
        },
        {
            title: "Intelligent Smart Document",
            description: "Integrated business document management software designed to connect documents through shared, real-time information",
            category: "Information and Technology",
            image: imgProductMockup1,
            link: "/product",
        },
        {
            title: "Integrated Cargo Management",
            description: "Connect cargo sales, reservation, regulated-agent and warehouse processes in an integrated cargo environment",
            category: "Operations",
            image: imgProductMockup2,
            link: "/product",
        },
    ] as ProductItem[],
}, {
    title: "Software untuk operasional bisnis yang kompleks",
    description: "Jelajahi produk enterprise yang dirancang untuk mendigitalkan alur kerja, menghubungkan fungsi bisnis, meningkatkan visibilitas, dan mendukung pengambilan keputusan operasional",
    items: [
        {
            title: "Platform Manajemen Loyalitas",
            description: "Buat dan kelola program loyalitas, reward, tingkatan member, integrasi mitra, dan keterlibatan pelanggan",
        },
        {
            title: "ERP Enterprise & Manajemen Bisnis",
            description: "Software manajemen bisnis terintegrasi yang menghubungkan proses front-office dan back-office melalui informasi bersama secara real-time",
        },
        {
            title: "Smart Document Cerdas",
            description: "Software manajemen dokumen bisnis terintegrasi yang menghubungkan dokumen melalui informasi bersama secara real-time",
        },
        {
            title: "Manajemen Kargo Terintegrasi",
            description: "Hubungkan proses penjualan kargo, reservasi, regulated agent, dan pergudangan dalam satu lingkungan kargo terintegrasi",
        },
    ],
})

export interface CapabilityItem {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
}

export const CapabilitiesConst = localized({
    title: "Turn complex systems into measurable business progress",
    description: "Technology creates value when it helps people connect information, automate repetitive work, see what is happening, optimize decisions and scale operations",
    items: [
        {
            icon: AutomateOperationsIcon,
            label: "Automate operations",
            title: "Automate Operations",
            description: "Turn repetitive and fragmented processes into connected digital workflows that help your teams work more efficiently, respond faster, and make better-informed decisions.",
            tags: ["Workflow Automation", "Enterprise Applications", "System Integration", "Operational Data"],
            image: imgCapAutomate,
        },
        // TODO: desain hanya menampilkan isi "Automate Operations"; copy tab lain perlu dikonfirmasi
        {
            icon: ModernizeLegacyIcon,
            label: "Modernize legacy systems",
            title: "Modernize Legacy Systems",
            description: "Move critical business processes off aging platforms into modern, maintainable applications without disrupting day-to-day operations.",
            tags: ["Application Modernization", "Cloud Migration", "Enterprise Applications"],
            image: imgCapModernize,
        },
        {
            icon: ConnectEnterpriseIcon,
            label: "Connect enterprise systems",
            title: "Connect Enterprise Systems",
            description: "Link applications, APIs, data and infrastructure so information flows across departments instead of staying locked in separate systems.",
            tags: ["System Integration", "API Management", "Operational Data"],
            image: imgCapConnect,
        },
        {
            icon: ImproveCustomerIcon,
            label: "Improve customer experience",
            title: "Improve Customer Experience",
            description: "Give customers and members consistent, personalized digital journeys backed by connected data and reliable services.",
            tags: ["Loyalty", "Customer Engagement", "Digital Channels"],
            image: imgCapCustomer,
        },
        {
            icon: BuildDigitalIcon,
            label: "Build new digital products",
            title: "Build New Digital Products",
            description: "Design, build and launch new digital products with a team that understands enterprise requirements from day one.",
            tags: ["Product Development", "Mobile & Web Apps", "Managed Services"],
            image: imgCapBuild,
        },
    ] as CapabilityItem[],
}, {
    title: "Ubah sistem yang kompleks menjadi kemajuan bisnis yang terukur",
    description: "Teknologi memberi nilai ketika membantu orang menghubungkan informasi, mengotomatiskan pekerjaan berulang, melihat apa yang sedang terjadi, mengoptimalkan keputusan, dan meningkatkan skala operasional",
    items: [
        {
            label: "Otomatisasi operasional",
            title: "Otomatisasi Operasional",
            description: "Ubah proses yang berulang dan terfragmentasi menjadi alur kerja digital yang terhubung, sehingga tim Anda bekerja lebih efisien, merespons lebih cepat, dan mengambil keputusan yang lebih tepat.",
            tags: ["Otomatisasi Alur Kerja", "Aplikasi Enterprise", "Integrasi Sistem", "Data Operasional"],
        },
        {
            label: "Modernisasi sistem lama",
            title: "Modernisasi Sistem Lama",
            description: "Pindahkan proses bisnis penting dari platform yang sudah usang ke aplikasi modern yang mudah dirawat tanpa mengganggu operasional sehari-hari.",
            tags: ["Modernisasi Aplikasi", "Migrasi Cloud", "Aplikasi Enterprise"],
        },
        {
            label: "Hubungkan sistem enterprise",
            title: "Hubungkan Sistem Enterprise",
            description: "Hubungkan aplikasi, API, data, dan infrastruktur agar informasi mengalir antardepartemen, bukan terkunci di sistem yang terpisah-pisah.",
            tags: ["Integrasi Sistem", "Manajemen API", "Data Operasional"],
        },
        {
            label: "Tingkatkan pengalaman pelanggan",
            title: "Tingkatkan Pengalaman Pelanggan",
            description: "Berikan perjalanan digital yang konsisten dan personal bagi pelanggan dan member, didukung data yang terhubung dan layanan yang andal.",
            tags: ["Loyalitas", "Keterlibatan Pelanggan", "Kanal Digital"],
        },
        {
            label: "Bangun produk digital baru",
            title: "Bangun Produk Digital Baru",
            description: "Rancang, bangun, dan luncurkan produk digital baru bersama tim yang memahami kebutuhan enterprise sejak hari pertama.",
            tags: ["Pengembangan Produk", "Aplikasi Mobile & Web", "Layanan Terkelola"],
        },
    ],
})

export interface PartnerItem {
    title: string;
    description: string;
    image: string;
}

export const PartnerConst = localized({
    title: "One technology partner from product to Implementation",
    items: [
        { title: "Product", description: "Start with proven enterprise software designed around specific business workflows", image: imgPartnerProduct },
        { title: "Integration", description: "Connect products with the systems, APIs, data and infrastructure already operating inside your organization.", image: imgPartnerIntegration },
        { title: "Implementation and Transform", description: "Redesign processes, operating models and digital workflows around measurable business priorities", image: imgPartnerImplementation },
        { title: "Services", description: "Extend your technology capability with implementation, professional services, infrastructure, managed services and operational support", image: imgPartnerServices },
    ] as PartnerItem[],
}, {
    title: "Satu mitra teknologi dari produk hingga implementasi",
    items: [
        { title: "Produk", description: "Mulai dengan software enterprise teruji yang dirancang untuk alur kerja bisnis tertentu" },
        { title: "Integrasi", description: "Hubungkan produk dengan sistem, API, data, dan infrastruktur yang sudah berjalan di organisasi Anda." },
        { title: "Implementasi & Transformasi", description: "Rancang ulang proses, model operasional, dan alur kerja digital berdasarkan prioritas bisnis yang terukur" },
        { title: "Layanan", description: "Perluas kapabilitas teknologi Anda dengan implementasi, layanan profesional, infrastruktur, layanan terkelola, dan dukungan operasional" },
    ],
})

export interface IndustryItem {
    title: string;
    description: string;
    image: string;
    tags: string[];
}

const industryDescription = localized(
    "Powerful solutions frequently act as the core digital infrastructure of a company, ensuring that various departments can operate efficiently together, share data securely, and uphold consistent operational benchmarks",
    "Solusi yang andal sering menjadi infrastruktur digital inti perusahaan, memastikan berbagai departemen dapat bekerja sama secara efisien, berbagi data dengan aman, dan menjaga standar operasional yang konsisten",
);

export const IndustriesConst = localized({
    title: "Built for industries where operations matter",
    description: "Explore how ASYST capabilities can be applied across industries with complex workflows, systems and operational requirements",
    allLink: "/industry",
    items: [
        { title: "Enterprise", description: industryDescription.EN, image: imgIndustryEnterprise, tags: ["ERP", "ITSM", "Workforce"] },
        { title: "Aviation", description: industryDescription.EN, image: imgIndustryAviation, tags: ["ERP", "ITSM", "Workforce"] },
        { title: "Logistic", description: industryDescription.EN, image: imgIndustryLogistic, tags: ["ERP", "ITSM", "Workforce"] },
    ] as IndustryItem[],
}, {
    title: "Dibangun untuk industri yang mengandalkan operasional",
    description: "Lihat bagaimana kapabilitas ASYST diterapkan di berbagai industri dengan alur kerja, sistem, dan kebutuhan operasional yang kompleks",
    items: [
        { title: "Enterprise", description: industryDescription.ID, tags: ["ERP", "ITSM", "Tenaga Kerja"] },
        { title: "Penerbangan", description: industryDescription.ID, tags: ["ERP", "ITSM", "Tenaga Kerja"] },
        { title: "Logistik", description: industryDescription.ID, tags: ["ERP", "ITSM", "Tenaga Kerja"] },
    ],
})

export const CtaConst = localized({
    title: "Have a complex technology challenge?",
    description: "Tell us what you're trying to connect, automate, optimize or transform. Our team can help identify the right product, solution or technology approach for your organization.",
    button: "Talk to an Expert",
}, {
    title: "Punya tantangan teknologi yang kompleks?",
    description: "Ceritakan apa yang ingin Anda hubungkan, otomatiskan, optimalkan, atau transformasikan. Tim kami siap membantu menentukan produk, solusi, atau pendekatan teknologi yang tepat untuk organisasi Anda.",
    button: "Hubungi Ahli Kami",
})
