import { SvgIconComponent } from "@mui/icons-material";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";

import imgAwardAlibabaCloud from "assets/asyst/img/award/award-alibaba-cloud.png";
import imgAwardIrca from "assets/asyst/img/award/award-irca.png";
import imgAwardInsider from "assets/asyst/img/award/award-insider.png";

import logoKai from "assets/asyst/img/trusted-by/trusted-kai.png";
import logoPelindo from "assets/asyst/img/trusted-by/trusted-pelindo.png";
import logoXlAxiata from "assets/asyst/img/trusted-by/trusted-xl-axiata.png";
import logoPerseroBatam from "assets/asyst/img/trusted-by/trusted-persero-batam.png";
import logoGaruda from "assets/asyst/img/trusted-by/trusted-garuda-indonesia.png";
import logoSabre from "assets/asyst/img/trusted-by/trusted-sabre.png";
import logoAxa from "assets/asyst/img/trusted-by/trusted-axa.png";

import imgProductMockup1 from "assets/asyst/img/background/services-solutions/anteros1.png";
import imgProductMockup2 from "assets/asyst/img/background/services-solutions/hermes1.png";
import imgPartnerProduct from "assets/asyst/img/background/HBNR-3.jpg";
import imgPartnerIntegration from "assets/asyst/img/background/product/overview/background-product.png";
import imgPartnerImplementation from "assets/asyst/img/background/story/story-2.png";
import imgPartnerServices from "assets/asyst/img/background/HBNR-2.jpg";
import imgIndustryEnterprise from "assets/asyst/img/background/HBNR-3.jpg";
import imgIndustryAviation from "assets/asyst/img/background/HBNR-1.jpg";
import imgIndustryLogistic from "assets/asyst/img/background/services-solutions/cargo.png";

// Konten statis homepage (desain revamp 2026).
// Gambar & ikon sementara memakai aset yang sudah ada di repo; ganti dengan aset final dari desain.

export const HeroConst = {
    title: "Enterprise software that connects complex business operations",
    description: "Build, integrate, and operate the digital systems your business depends on, from enterprise applications and workflow automation to system integration and managed technology services.",
    primaryButton: { label: "Explore Products", link: "/product" },
    secondaryButton: { label: "Talk to Expert" },
}

export interface AwardItem {
    image: string;
    title: string;
    subtitle: string;
}

export const AwardsConst: AwardItem[] = [
    { image: imgAwardAlibabaCloud, title: "Indonet & Alibaba Cloud Award", subtitle: "Top-tier digital and IT" },
    { image: imgAwardIrca, title: "IRCA Award", subtitle: "Best Enterprise in Regulatory" },
    { image: imgAwardInsider, title: "Insider Award", subtitle: "The Most Breakthrough Growth" },
]

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

export const EnterpriseHighlightConst = {
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
}

export type ProductCategory = "Operations" | "Enterprise" | "Customer" | "Information and Technology";

export const ProductCategoryConst: ("All Products" | ProductCategory)[] = ["All Products", "Operations", "Enterprise", "Customer", "Information and Technology"]

export interface ProductItem {
    title: string;
    description: string;
    category: ProductCategory;
    image: string;
    link: string;
}

export const ProductsConst = {
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
}

export interface CapabilityItem {
    icon: SvgIconComponent;
    label: string;
    title: string;
    description: string;
    tags: string[];
}

export const CapabilitiesConst = {
    title: "Turn complex systems into measurable business progress",
    description: "Technology creates value when it helps people connect information, automate repetitive work, see what is happening, optimize decisions and scale operations",
    image: imgProductMockup2,
    items: [
        {
            icon: ViewInArOutlinedIcon,
            label: "Automate operations",
            title: "Automate Operations",
            description: "Turn repetitive and fragmented processes into connected digital workflows that help your teams work more efficiently, respond faster, and make better-informed decisions.",
            tags: ["Workflow Automation", "Enterprise Applications", "System Integration", "Operational Data"],
        },
        // TODO: desain hanya menampilkan isi "Automate Operations"; copy tab lain perlu dikonfirmasi
        {
            icon: GridViewOutlinedIcon,
            label: "Modernize legacy systems",
            title: "Modernize Legacy Systems",
            description: "Move critical business processes off aging platforms into modern, maintainable applications without disrupting day-to-day operations.",
            tags: ["Application Modernization", "Cloud Migration", "Enterprise Applications"],
        },
        {
            icon: ShareOutlinedIcon,
            label: "Connect enterprise systems",
            title: "Connect Enterprise Systems",
            description: "Link applications, APIs, data and infrastructure so information flows across departments instead of staying locked in separate systems.",
            tags: ["System Integration", "API Management", "Operational Data"],
        },
        {
            icon: AdsClickOutlinedIcon,
            label: "Improve customer experience",
            title: "Improve Customer Experience",
            description: "Give customers and members consistent, personalized digital journeys backed by connected data and reliable services.",
            tags: ["Loyalty", "Customer Engagement", "Digital Channels"],
        },
        {
            icon: DevicesOutlinedIcon,
            label: "Build new digital products",
            title: "Build New Digital Products",
            description: "Design, build and launch new digital products with a team that understands enterprise requirements from day one.",
            tags: ["Product Development", "Mobile & Web Apps", "Managed Services"],
        },
    ] as CapabilityItem[],
}

export interface PartnerItem {
    title: string;
    description: string;
    image: string;
}

export const PartnerConst = {
    title: "One technology partner from product to Implementation",
    items: [
        { title: "Product", description: "Start with proven enterprise software designed around specific business workflows", image: imgPartnerProduct },
        { title: "Integration", description: "Connect products with the systems, APIs, data and infrastructure already operating inside your organization.", image: imgPartnerIntegration },
        { title: "Implementation and Transform", description: "Redesign processes, operating models and digital workflows around measurable business priorities", image: imgPartnerImplementation },
        { title: "Services", description: "Extend your technology capability with implementation, professional services, infrastructure, managed services and operational support", image: imgPartnerServices },
    ] as PartnerItem[],
}

export interface IndustryItem {
    title: string;
    description: string;
    image: string;
    tags: string[];
}

const industryDescription = "Powerful solutions frequently act as the core digital infrastructure of a company, ensuring that various departments can operate efficiently together, share data securely, and uphold consistent operational benchmarks";

export const IndustriesConst = {
    title: "Built for industries where operations matter",
    description: "Explore how ASYST capabilities can be applied across industries with complex workflows, systems and operational requirements",
    allLink: "/industry",
    items: [
        { title: "Enterprise", description: industryDescription, image: imgIndustryEnterprise, tags: ["ERP", "ITSM", "Workforce"] },
        { title: "Aviation", description: industryDescription, image: imgIndustryAviation, tags: ["ERP", "ITSM", "Workforce"] },
        { title: "Logistic", description: industryDescription, image: imgIndustryLogistic, tags: ["ERP", "ITSM", "Workforce"] },
    ] as IndustryItem[],
}

export const CtaConst = {
    title: "Have a complex technology challenge?",
    description: "Tell us what you're trying to connect, automate, optimize or transform. Our team can help identify the right product, solution or technology approach for your organization.",
    button: "Talk to an Expert",
}
