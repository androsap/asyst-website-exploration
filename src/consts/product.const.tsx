import { SvgIconComponent } from "@mui/icons-material";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";

import imgHeroMockup from "assets/asyst/img/background/product/product-hero.png";
import imgProductCard1 from "assets/asyst/img/background/services-solutions/hermes2.png";
import imgProductCard2 from "assets/asyst/img/background/services-solutions/amala2.png";
import imgSolveMockup from "assets/asyst/img/background/product/amala/device-A.png";

// Konten statis halaman Products (desain revamp 2026).
// Gambar sementara memakai aset yang sudah ada di repo; ganti dengan aset final dari desain.

export const ProductHeroConst = {
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
export const ProductCatalogConst = {
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
    icon: SvgIconComponent;
    title: string;
    description: string;
}

export const ProductExperienceConst = {
    title: "Software built from real enterprise experience",
    description: "ASYST combines product development with decades of enterprise delivery experience. That means our products are shaped not only by technology, but by the operational realities, integration requirements, and business processes that organizations depend on every day",
    // TODO: desain memakai ilustrasi isometrik; sementara memakai ikon
    items: [
        { icon: WidgetsOutlinedIcon, title: "Product Capability", description: "Build software for real enterprise workflows" },
        { icon: HubOutlinedIcon, title: "Integration Enterprise", description: "Connect complex enterprise environments" },
        { icon: PsychologyOutlinedIcon, title: "Expertise", description: "Understand complex industries and solving" },
        { icon: RocketLaunchOutlinedIcon, title: "Enterprise Delivery", description: "Implement, support and evolve at scale" },
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

export const ProductSolveConst = {
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

export const ProductCtaConst = {
    title: "Have a complex technology challenge?",
    description: "Tell us what you're trying to connect, automate, optimize or transform. Our team can help identify the right product, solution or technology approach for your organization.",
    button: "Talk to an Expert",
}
