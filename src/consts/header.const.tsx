// Menu header (desain revamp 2026). Sementara hardcode; nanti bisa diganti data dari API.
// `link` kosong = halaman tujuan belum ada (item tetap tampil tapi tidak bisa diklik).

import imgFeatured from "assets/asyst/img/background/services-solutions/amala1.png";

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
    /** Halaman overview grup (ditampilkan sebagai "View all" di panel). */
    link?: string;
    items: HeaderLinkItem[];
}

export const HeaderPanelSubtitle = "Enterprise software to modernize operations";

export const HeaderProductsLink = "/product";

export const HeaderProductsConst: HeaderProductCategory[] = [
    {
        label: "Enterprise Products",
        title: "Enterprise software for complex business operations",
        description: "ASYST develops modular enterprise software products that help organizations manage critical processes, connect operational data, and build more efficient digital workflows",
        items: [
            { name: "Amala", description: "Amala provides a configurable loyalty platform for organizations", link: "/product/amala" },
            { name: "Hermes", description: "Hermes brings cargo sales, shipment management", link: "/product/hermes" },
            { name: "Smart Document", description: "Smart Document makes every company document searchable and answerable with AI", link: "/product/smart-document" },
            { name: "Project Management", description: "Project Management keeps people and AI agents working from one plan", link: "/product/project-management" },
            { name: "E-Procurement", description: "E-Procurement connects buyers and suppliers in one purchasing platform", link: "/product/e-procurement" },
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
];

export const HeaderSolutionsConst: HeaderGroup[] = [
    {
        label: "Solutions",
        link: "/solution",
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
        items: [
            { label: "Enterprise", link: "/industry" },
            { label: "Aviation", link: "/industry/aviation" },
            { label: "Transportation", link: "/industry" },
            { label: "Logistics", link: "/industry" },
            { label: "Government", link: "/industry" },
            { label: "Other industries", link: "/industry" },
        ],
    },
];

export const HeaderCompanyConst: HeaderGroup = {
    label: "Aero Systems",
    items: [
        { label: "About us", link: "/about" },
        { label: "Case studies", link: "/case-study" },
        { label: "Careers", link: "/career" },
        { label: "Contact us", link: "/contact-us" },
        { label: "FAQ" },
        { label: "Support" },
        { label: "Help and Documentation" },
    ],
};

export const HeaderNewsLink = "/news";

/** Kartu "Featured" di menu mobile. */
export const HeaderFeaturedConst = {
    label: "Product",
    title: "Loyalty Platform",
    image: imgFeatured,
    link: "/product/amala",
};

export const HeaderLanguagesConst = ["ID", "EN"] as const;
