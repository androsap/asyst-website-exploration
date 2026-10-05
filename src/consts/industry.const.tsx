import { SvgIconComponent } from "@mui/icons-material";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { SolutionCtaContent, SolutionFaqContent, SolutionIconCard } from "./solution.const";

import imgIntro from "assets/asyst/img/background/services-solutions/cargo.png";
import imgAirline from "assets/asyst/img/background/industry/airline-airport/airline.jpeg";
import imgAirport from "assets/asyst/img/background/industry/airline-airport/airport.jpeg";
import imgGround from "assets/asyst/img/background/services-solutions/products-and-services.png";
import imgLoyalty from "assets/asyst/img/background/services-solutions/amala2.png";
import imgEcosystem from "assets/asyst/img/background/industry/industry-detail.jpeg";

// Konten statis halaman Industries (desain revamp 2026).
// Gambar sementara memakai aset yang sudah ada di repo; ganti dengan aset final dari desain.

export interface IndustryHeroContent {
    eyebrow?: string;
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton?: string;
    stats?: { icon: SvgIconComponent; value: string; label: string }[];
}

/** Section teks kiri + gambar kanan */
export interface IndustryIntroContent {
    title: string;
    paragraphs: string[];
    image: string;
}

export interface IndustryCard {
    /** Label hijau di kartu sekaligus kategori filter */
    tag: string;
    title: string;
    description: string;
    chips: string[];
    link: { label: string; to: string };
    image: string;
}

export interface IndustryCardsContent {
    title?: string;
    description?: string;
    items: IndustryCard[];
}

const AVIATION_LINK = "/industry/aviation";

export const IndustryHeroConst: IndustryHeroContent = {
    title: "Technology Solutions Built Around Your Industry",
    description: "Every industry operates differently. Business processes, regulations, customer expectations, operational workflows and technology create different challenges",
    primaryButton: "Explore Industry Solutions",
    secondaryButton: "Talk to an ASYST Expert",
    stats: [
        { icon: WorkspacePremiumOutlinedIcon, value: "21+", label: "Enterprise Journey" },
        { icon: WidgetsOutlinedIcon, value: "Enterprise", label: "Product Capability" },
        { icon: HubOutlinedIcon, value: "Integration", label: "Connected Technology" },
        { icon: PsychologyOutlinedIcon, value: "Expertise", label: "Industry Knowledge" },
    ],
}

export const IndustryIntroConst: IndustryIntroContent = {
    title: "Technology Works Better When It Understands the Business Behind It",
    paragraphs: [
        "A technology solution cannot be evaluated only by its technical architecture. It also needs to understand how people work, how processes operate, how services are delivered, how data moves, and what business outcomes matter.",
        "That's where domain expertise becomes valuable",
    ],
    image: imgIntro,
}

// TODO: baru Aviation yang punya halaman detail; Loyalty diarahkan ke produk Amala, Industry Ecosystem sementara ke halaman ini
export const IndustryExpertiseConst: IndustryCardsContent = {
    title: "Explore Our Industry Expertise",
    description: "From aviation and airport operations to loyalty and connected industry ecosystems, ASYST applies enterprise technology, software, integration and operational expertise to industry-specific challenges",
    items: [
        {
            tag: "Airline",
            title: "Connected Technology for Airline Operations",
            description: "Support airline operations with integrated technology across commercial processes, passenger services, operational workflows, data and enterprise systems",
            chips: ["Commercial", "Operations", "Passenger", "Enterprise Systems", "Integration", "Data"],
            link: { label: "Explore Airline Solutions", to: AVIATION_LINK },
            image: imgAirline,
        },
        {
            tag: "Airport",
            title: "Technology for Connected Airport Operations",
            description: "Connect airport processes, operational systems, stakeholders and data to support efficient and coordinated airport operations",
            chips: ["Airport Operations", "Passenger", "Infrastructure", "Data", "Integration", "Service Management"],
            link: { label: "Explore Airport Solutions", to: AVIATION_LINK },
            image: imgAirport,
        },
        {
            tag: "Ground Handler",
            title: "Connected Technology to Ground Operations",
            description: "Enable ground handling organizations to connect operational processes, workforce, systems and information across time-critical activities",
            chips: ["operational workflows", "workforce coordination", "turnaround processes", "system integration"],
            link: { label: "Explore Ground Handler Solutions", to: AVIATION_LINK },
            image: imgGround,
        },
        {
            tag: "Loyalty",
            title: "Digital Technology for Customer Loyalty",
            description: "Build connected loyalty experiences that bring customer data, engagement, rewards and digital touchpoints closer together",
            chips: ["Commercial", "Operations", "Passenger", "Enterprise Systems", "Integration", "Data"],
            link: { label: "Explore Loyalty Solutions", to: "/product/amala" },
            image: imgLoyalty,
        },
        {
            tag: "Industry Ecosystem",
            title: "Connect the Ecosystem Behind the Business",
            description: "Modern businesses rarely operate through a single organization or system. Customers, partners, suppliers, service providers and technology platforms must work together",
            chips: ["Commercial", "Operations", "Passenger", "Enterprise Systems", "Integration", "Data"],
            link: { label: "Explore Ecosystem Solutions", to: "/industry" },
            image: imgEcosystem,
        },
    ],
}

export const IndustryFoundationConst = {
    title: "One Technology Foundation for Multiple Industry Applications",
    description: "Across industries, ASYST combines products, integration, digital solutions, infrastructure and professional services to address different business environments while maintaining a connected technology foundation",
    items: [
        { icon: WidgetsOutlinedIcon, title: "Enterprise Product Capability", description: "Build on technology capabilities designed around real operational requirements" },
        { icon: HubOutlinedIcon, title: "Product Integration Capability", description: "Connect products, applications, data, infrastructure and third-party systems" },
        { icon: PsychologyOutlinedIcon, title: "Expertise in enterprise platform", description: "Understand the processes, stakeholders and operational context behind the technology" },
        { icon: SupportAgentOutlinedIcon, title: "Long-Term Support Delivery", description: "Support the journey beyond implementation from adoption and operation to improvement" },
    ] as SolutionIconCard[],
}

export const IndustryFaqConst: SolutionFaqContent = {
    title: "Industry FAQ",
    items: [
        { question: "What industries does ASYST serve?", answer: "ASYST's current public website identifies Airline, Airport, Ground Handler, Loyalty and Industry Ecosystem as industry areas" },
        { question: "Does ASYST only provide technology for aviation?", answer: "No. Aviation is where ASYST has long-running domain experience, but its enterprise software, integration, infrastructure and professional services are applied to other industries and connected business ecosystems as well" },
        { question: "Can Amala integrate with existing enterprise systems?", answer: "Yes. Amala is designed to connect with existing customer, commercial, partner and enterprise systems through APIs and integration services" },
        { question: "Can ASYST integrate existing enterprise systems?", answer: "Yes. ASYST connects applications, data, infrastructure and third-party platforms so existing systems can work together as a more connected technology environment" },
        { question: "Does ASYST provide custom technology solutions?", answer: "Yes. Alongside its products, ASYST provides custom development and professional services for requirements that are specific to an organization or industry" },
        { question: "Can ASYST support implementation after creating the strategy?", answer: "Yes. ASYST supports the journey from technology strategy and architecture through implementation, integration and operational adoption" },
        { question: "Can ASYST support technology beyond implementation?", answer: "Yes. ASYST provides managed services, IT operations and continuous improvement to keep technology reliable after go-live" },
    ],
}

export const IndustryCtaConst: SolutionCtaContent = {
    title: "Discuss Your Technology Challenge",
    description: "ASYST combines local business and domain understanding with enterprise technology capabilities and global technology partnerships to deliver solutions designed around each organization's context",
    button: "Talk to Expert",
}
