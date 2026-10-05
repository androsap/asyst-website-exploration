import { IndustryCardsContent, IndustryHeroContent, IndustryIntroContent } from "./industry.const";
import { SolutionCtaContent, SolutionFaqContent, SolutionTabPanelItem } from "./solution.const";

import imgEnterprise from "assets/asyst/img/background/services-solutions/products-and-services.png";
import imgChallengeConnected from "assets/img/background/solutions/image-solutions-1.png";
import imgChallengeComplexity from "assets/img/background/solutions/image-solutions-2.png";
import imgChallengeGoLive from "assets/img/background/solutions/image-solutions-3.png";
import imgLayers from "assets/asyst/img/background/product/overview/background-product.png";
import imgProducts from "assets/asyst/img/background/HBNR-1.jpg";
import imgDashboard from "assets/asyst/img/background/product/amala/device-A.png";
import imgAirline from "assets/asyst/img/background/industry/airline-airport/airline.jpeg";
import imgAirport from "assets/asyst/img/background/industry/airline-airport/airport.jpeg";
import imgLoyalty from "assets/asyst/img/background/services-solutions/amala2.png";
import imgCargo from "assets/asyst/img/background/services-solutions/cargo.png";
import imgTravel from "assets/asyst/img/background/HBNR-3.jpg";

// Konten halaman detail industri (desain revamp 2026). Satu objek per industri, dirender oleh components/industry/detail.
// Gambar sementara memakai aset yang sudah ada di repo; desain memakai diagram ekosistem aviasi.

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

export interface IndustryDomainItem {
    title: string;
    description: string;
    points: string[];
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
        steps: string[];
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

// TODO: desain hanya menampilkan isi tab/accordion pertama di tiap section; copy lainnya perlu dikonfirmasi
export const AviationDetailConst: IndustryDetailContent = {
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
        steps: ["Discover", "Book", "Pay", "Prepare", "Check-in", "Board", "Fly", "Ground", "Baggage", "Cargo", "Loyalty", "Service"],
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
        ],
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
