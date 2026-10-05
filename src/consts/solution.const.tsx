import { SvgIconComponent } from "@mui/icons-material";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";

import imgHero from "assets/asyst/img/background/services-solutions/products-and-services.png";
import imgSecurity from "assets/img/background/solutions/image-solutions-1.png";
import imgOperate from "assets/img/background/solutions/image-solutions-2.png";
import imgConnect from "assets/img/background/solutions/image-solutions-3.png";
import imgModernize from "assets/asyst/img/background/product/overview/background-product.png";
import imgTransform from "assets/asyst/img/background/industry/industry-detail.jpeg";
import imgSeat from "assets/asyst/img/background/industry/airline-airport/airline.jpeg";

// Konten statis halaman Solutions (desain revamp 2026).
// Gambar sementara memakai aset yang sudah ada di repo; ganti dengan aset final dari desain.

export interface SolutionHeroContent {
    eyebrow: string;
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
    image: string;
}

export interface SolutionIconCard {
    icon: SvgIconComponent;
    title: string;
    description: string;
}

export interface SolutionTabPanelItem {
    label: string;
    title: string;
    description: string;
    points: string[];
    /** Daftar kedua opsional di bawah poin utama (mis. "Security Event Output") */
    subtitle?: string;
    subPoints?: string[];
    tags?: string[];
    image: string;
}

export interface SolutionFaqContent {
    title: string;
    items: { question: string; answer: string }[];
}

export interface SolutionCtaContent {
    title: string;
    description: string;
    button: string;
}

const SOC_LINK = "/solution/security-operations-center";

export const SolutionHeroConst: SolutionHeroContent = {
    eyebrow: "Asyst Solutions",
    title: "Enterprise Technology Solutions That Connect, Modernize & Scale Your Business",
    description: "From cybersecurity and IT operations to application modernization, data orchestration and digital business transformation, ASYST helps enterprises connect technology",
    primaryButton: "Discuss Your Challenge",
    secondaryButton: "Explore Solutions",
    // TODO: desain memakai ilustrasi isometrik
    image: imgHero,
}

export const SolutionCapabilitiesConst = {
    title: "Technology Solutions Built Around the Enterprise",
    description: "ASYST combines software capability, integration expertise, domain knowledge and long-running enterprise delivery experience to connect technology initiatives with operational needs",
    items: [
        { icon: WidgetsOutlinedIcon, title: "Enterprise Software Capability", description: "Build on configurable products and technology capabilities rather than starting every solution from zero" },
        { icon: HubOutlinedIcon, title: "Connect the Technology Landscape", description: "Integrate applications, infrastructure, data, APIs and business systems into a more connected environment" },
        { icon: PsychologyOutlinedIcon, title: "Understand Complex Operations", description: "Apply technology expertise together with experience in complex, operationally demanding environments" },
        { icon: RouteOutlinedIcon, title: "From Strategy to Operation", description: "Move from consulting and architecture through implementation, operation and continuous improvement" },
    ] as SolutionIconCard[],
}

export interface SolutionLayerItem {
    tag: string;
    title: string;
    description: string;
    link: { label: string; to: string };
    image: string;
}

// TODO: hanya Security Operations Center yang sudah punya halaman detail; link lain sementara ke halaman Solutions
export const SolutionLayersConst = {
    title: "Solutions for Every Layer of Your Technology Environment",
    description: "Whether the challenge is protecting infrastructure, improving IT operations, connecting fragmented data, modernizing legacy applications or transforming business processes, ASYST provides solution capabilities designed around enterprise needs",
    items: [
        {
            tag: "Protect",
            title: "Detect Threats, Respond Faster, Protect Critical Operations",
            description: "Security Operation Center capabilities help organizations continuously monitor their digital environment, identify suspicious activity and coordinate security response across critical systems",
            link: { label: "Explore Security Operations", to: SOC_LINK },
            image: imgSecurity,
        },
        {
            tag: "Operate",
            title: "Keep Infrastructure, Applications and IT Services Running",
            description: "Enterprise IT requires more than infrastructure availability. Applications, platforms, users and service processes need to work together reliably. ASYST combines technology operations",
            link: { label: "Explore Infra, App, Platform Operation & ITSM", to: "/solution" },
            image: imgOperate,
        },
        {
            tag: "Connect",
            title: "Connect Services, Systems and Data Into One Operational Flow",
            description: "Business processes often span multiple applications, databases, APIs and operational teams. Service orchestration helps coordinate these systems, while data management creates",
            link: { label: "Explore Service Orchestration & Data Management", to: "/solution" },
            image: imgConnect,
        },
        {
            tag: "Modernize",
            title: "Modernize Legacy Applications Without Losing Business Continuity",
            description: "Legacy applications can contain years of business logic and operational knowledge. Modernization is therefore not simply replacing old technology it is evolving the application landscape",
            link: { label: "Explore Application Modernization", to: "/solution" },
            image: imgModernize,
        },
        {
            tag: "Transform",
            title: "Turn Business Challenges Into Digital Transformation Roadmaps",
            description: "Digital transformation is most effective when business strategy, operating models, technology architecture and execution move together",
            link: { label: "Explore Digital Business Consulting", to: "/solution" },
            image: imgTransform,
        },
        {
            tag: "Enable",
            title: "Optimize Seat Inventory, Availability and Operational Control",
            description: "Seat management solutions help organizations manage seat inventory, availability, allocation and operational information across relevant business processes",
            link: { label: "Explore Seat Management", to: "/solution" },
            image: imgSeat,
        },
    ] as SolutionLayerItem[],
}

// TODO: desain hanya menampilkan isi tab "Secure"; copy tab lain perlu dikonfirmasi
export const SolutionValueConst = {
    title: "Technology Is Only Valuable When It Improves the Business",
    items: [
        {
            label: "Secure",
            title: "Need better security visibility",
            description: "Security Operation Center capabilities help organizations continuously monitor their digital environment, identify suspicious activity and coordinate security response across critical systems",
            points: ["24/7 Monitoring", "Threat Detection", "Security Analytics", "Incident Response", "Security Operations", "Infrastructure Visibility"],
            tags: ["Security Monitoring", "Threat Detection", "Response Readiness", "Operational Resilience"],
            image: imgSecurity,
        },
        {
            label: "Stabilize",
            title: "Need more reliable IT operations",
            description: "Infrastructure, application and platform operations combined with IT service management help keep critical services available and support teams responsive",
            points: ["Infrastructure Operations", "Application Support", "Platform Monitoring", "IT Service Management", "Service Level Management"],
            tags: ["Service Availability", "Faster Resolution", "Operational Stability"],
            image: imgOperate,
        },
        {
            label: "Connect",
            title: "Need systems and data to work together",
            description: "Service orchestration and data management connect applications, APIs and data sources so business processes can flow across systems",
            points: ["Service Orchestration", "API Integration", "Data Management", "Workflow Automation", "Data Quality"],
            tags: ["Connected Processes", "Trusted Data", "Less Manual Work"],
            image: imgConnect,
        },
        {
            label: "Modernize",
            title: "Need to evolve legacy applications",
            description: "Application modernization moves critical systems to maintainable platforms while preserving business logic and operational continuity",
            points: ["Application Assessment", "Re-platforming", "Re-architecture", "Legacy Integration", "Phased Migration"],
            tags: ["Business Continuity", "Lower Maintenance", "Future-Ready Platforms"],
            image: imgModernize,
        },
        {
            label: "Transform",
            title: "Need a clear transformation roadmap",
            description: "Digital business consulting aligns strategy, operating models and technology architecture into a roadmap that can be executed",
            points: ["IT Strategy", "Enterprise Architecture", "Operating Model Design", "Transformation Roadmap", "Execution Support"],
            tags: ["Strategic Alignment", "Clear Priorities", "Measurable Outcomes"],
            image: imgTransform,
        },
        {
            label: "Scale",
            title: "Need operations that grow with the business",
            description: "Seat management and operational platforms help organizations manage capacity, availability and control as volume and complexity increase",
            points: ["Seat Inventory", "Availability Control", "Allocation Management", "Operational Reporting"],
            tags: ["Capacity Control", "Operational Efficiency", "Scalable Operations"],
            image: imgSeat,
        },
    ] as SolutionTabPanelItem[],
}

export const SolutionFaqConst: SolutionFaqContent = {
    title: "IT Solution FAQ",
    items: [
        { question: "What technology solutions does ASYST provide?", answer: "ASYST provides enterprise technology solutions covering security operations, IT infrastructure and application operations, IT service management, service orchestration, data management, application modernization, digital business consulting and seat management" },
        { question: "Does ASYST provide ITSM solutions?", answer: "Yes. ASYST combines infrastructure, application and platform operations with IT service management to help organizations manage incidents, requests and service levels more consistently" },
        { question: "What is application modernization?", answer: "Application modernization is the process of evolving legacy applications onto maintainable, integrable platforms while preserving the business logic and operational knowledge they contain" },
        { question: "Does ASYST provide application integration?", answer: "Yes. Through service orchestration and data management, ASYST connects applications, APIs, databases and business systems into a more connected operational flow" },
        { question: "Does ASYST provide digital transformation consulting?", answer: "Yes. ASYST digital business consulting helps organizations align business strategy, operating models and technology architecture into an executable transformation roadmap" },
        { question: "Does ASYST work outside aviation?", answer: "Yes. While ASYST has long-running experience in aviation, its solutions are designed for enterprises in any industry with complex technology and operational needs" },
    ],
}

export const SolutionCtaConst: SolutionCtaContent = {
    title: "Have a Technology Challenge to Solve?",
    description: "Tell us where your organization is today. We'll help you explore the technology, integration and delivery approach that fits your business environment",
    button: "Talk to an Expert",
}
