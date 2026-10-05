import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import CallSplitOutlinedIcon from "@mui/icons-material/CallSplitOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import LinkOffOutlinedIcon from "@mui/icons-material/LinkOffOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

import imgBanner from "assets/asyst/img/background/product/elea/detail/banner-1.png";
import imgBusiness from "assets/asyst/img/background/product/elea/detail/business-1.png";
import imgPromotion from "assets/asyst/img/background/product/elea/detail/promotion-1.png";
import { ProductDetailContent } from "consts/product-detail.const";

// Konten mengikuti home.asyst.co.id/product/elea (ERP Solution).
// TODO: gambar masih screenshot CMS lama (Eleasoft); ganti dengan visual ERP dari desain.

export const EleaDetailConst: ProductDetailContent = {
    hero: {
        title: "Unify Core Operations and Accelerate Enterprise Growth with Next-Gen ERP",
        description: "Break down operational silos and integrate finance, supply chain, HCM and CRM into a single source of truth, driving automation, compliance and end-to-end operational excellence",
        primaryButton: "Talk to ERP Expert",
        secondaryButton: "Explore Elea",
        stats: [
            { icon: VerifiedOutlinedIcon, value: "SAP · Oracle · Odoo", label: "Certified Expertise" },
            { icon: HubOutlinedIcon, value: "Single Source", label: "Finance, SCM, HCM & CRM" },
            { icon: SupportAgentOutlinedIcon, value: "24/7", label: "Managed Support" },
            { icon: AutorenewOutlinedIcon, value: "Fullcycle", label: "Implementation" },
        ],
    },
    overview: {
        title: "The Core of Enterprise Operations",
        paragraphs: [
            "ASYST delivers comprehensive ERP solutions that connect strategic planning, procurement, manufacturing and analytics onto an intelligent digital backbone.",
            "Modernize workflows, streamline compliance and make confident, data-driven decisions with architectures proven in mission-critical aviation, corporate and sovereign asset environments.",
        ],
        image: imgBanner,
        challenges: [
            { icon: CallSplitOutlinedIcon, title: "Operational Silos", description: "Integrate finance, supply chain, HCM and CRM into a single source of truth" },
            { icon: ReceiptLongOutlinedIcon, title: "Slow Financial Close", description: "Accelerate monthly closing with seamless reconciliation across subsidiaries" },
            { icon: GppGoodOutlinedIcon, title: "Compliance Pressure", description: "Stay aligned with local tax laws, IFRS standards and audit mandates" },
            { icon: LinkOffOutlinedIcon, title: "Legacy Systems", description: "Connect the new ERP with legacy systems, banking gateways and suppliers" },
        ],
    },
    lifecycle: {
        title: "Comprehensive Enterprise Capabilities for Every Function",
        description: "Connecting departments, automating repetitive processes and empowering teams across the entire organization",
        items: [
            { label: "Inventory", title: "End-to-end inventory & warehouse visibility", description: "Real-time tracking of raw materials and finished goods across multi-location warehouses, reducing carrying costs and eliminating stockouts.", image: imgBusiness },
            { label: "Manufacturing", title: "Lean manufacturing & resource planning", description: "Optimize production scheduling, capacity planning and shop-floor tracking for consistent delivery times and superior output quality.", image: imgBusiness },
            { label: "Procurement", title: "Automated procurement & vendor management", description: "Streamline purchase orders, vendor evaluations and contract management with automated approval workflows and electronic invoicing.", image: imgBusiness },
            { label: "Finance", title: "Single source of financial truth", description: "Consolidate general ledgers, accounts payable, accounts receivable and fixed assets with seamless reconciliation across all subsidiaries.", image: imgBusiness },
            { label: "Governance", title: "Audit-ready financial integrity & governance", description: "Maintain continuous compliance with local tax laws, IFRS standards and institutional audit mandates through automated governance logs.", image: imgBusiness },
            { label: "Budgeting", title: "Strategic budgeting & cash-flow forecasting", description: "Accelerate monthly financial close cycles and leverage predictive cash-flow forecasting for informed capital allocation.", image: imgBusiness },
            { label: "Payroll", title: "Streamlined payroll & attendance automation", description: "Ensure accurate, error-free payroll calculations, tax withholding and attendance tracking integrated directly with enterprise finance.", image: imgBusiness },
            { label: "Talent", title: "Comprehensive talent lifecycle management", description: "Digitize recruitment, onboarding, performance evaluations, development plans and succession tracking within a unified portal.", image: imgBusiness },
            { label: "Self-Service", title: "Employee self-service & workforce analytics", description: "Give employees self-service mobile tools for leave requests and pay slips, while HR managers get real-time turnover analytics.", image: imgBusiness },
        ],
    },
    features: {
        title: "Cloud & Hybrid ERP Ecosystems",
        items: [
            { title: "SAP Implementation & Advisory", description: "Industry-leading enterprise application software providing robust, highly scalable architectures built for complex, high-volume operations", image: imgBusiness },
            { title: "Oracle Fusion Cloud ERP", description: "A modern, agile SaaS application suite engineered for connected financial management, supply chain resilience and global workforce agility", image: imgBusiness },
            { title: "Odoo Enterprise Suite", description: "Highly customizable, modular business apps designed to automate core functions rapidly and cost-effectively for growing enterprises", image: imgBusiness },
            { title: "Advisory, Deployment & Managed Services", description: "Whether you need Tier-1 global enterprise software or agile open suites, ASYST delivers certified advisory, deployment and 24/7 managed services", image: imgPromotion },
            { title: "Custom Business Technology Platforms", description: "End-to-end implementation and custom platforms that extend your ERP for industry-specific processes", image: imgPromotion },
        ],
    },
    howItWorks: {
        title: "How ASYST Makes Enterprise Modernization Simple and Reliable",
        items: [
            { label: "User Experience", title: "Intuitive user experience & adoption", description: "Clean, role-based dashboards and a streamlined UI reduce employee training time, boost data accuracy and foster rapid company-wide adoption.", image: imgPromotion },
            { label: "System Resilience", title: "Robust architecture & system resilience", description: "Enterprise-grade security protocols, multi-layer data redundancy and high-availability infrastructure support non-stop 24/7 business operations.", image: imgBusiness },
            { label: "Integration", title: "Effortless API & legacy integration", description: "Flexible integration middleware connects your new ERP with legacy systems, banking gateways, CRM platforms and external suppliers.", image: imgBanner },
        ],
    },
    businessModels: {
        title: "ERP Built Around Your Operating Model",
        items: [
            { icon: FlightOutlinedIcon, title: "Aviation", points: ["mission-critical operations", "multi-entity finance", "maintenance procurement", "workforce management"] },
            { icon: AccountBalanceOutlinedIcon, title: "Sovereign & State-Owned", points: ["strict financial integrity", "governance compliance", "investment fund reporting", "audit readiness"] },
            { icon: FactoryOutlinedIcon, title: "Manufacturing & Distribution", points: ["production scheduling", "capacity planning", "multi-warehouse inventory", "vendor management"] },
            { icon: BusinessOutlinedIcon, title: "Corporate Enterprise", points: ["consolidated ledgers", "budgeting & forecasting", "payroll & HCM", "employee self-service"] },
            { icon: TrendingUpOutlinedIcon, title: "Growing Enterprise", points: ["modular Odoo apps", "rapid automation", "cost-effective rollout", "scalable foundation"] },
        ],
    },
    faq: {
        title: "Elea ERP Solution FAQ",
        items: [
            { question: "What is Elea?", answer: "Elea is ASYST's ERP solution that integrates finance, supply chain, human capital management and CRM into a single source of truth for enterprise operations." },
            { question: "Which ERP platforms does ASYST support?", answer: "ASYST delivers certified advisory, deployment and managed services across SAP, Oracle Fusion Cloud ERP and Odoo Enterprise." },
            { question: "Which business functions are covered?", answer: "Supply chain and operations, finance and accounting, and human capital management, including inventory, manufacturing, procurement, ledgers, budgeting, payroll and talent management." },
            { question: "Can Elea integrate with our legacy systems?", answer: "Yes. Integration middleware connects the ERP with legacy systems, banking gateways, CRM platforms and external suppliers." },
            { question: "Does Elea support regulatory compliance?", answer: "Yes. Automated governance logs help maintain compliance with local tax laws, IFRS standards and institutional audit mandates." },
            { question: "Does ASYST provide support after go-live?", answer: "Yes. ASYST provides end-to-end implementation and 24/7 managed support across SAP, Oracle Fusion and Odoo ecosystems." },
        ],
    },
    cta: {
        title: "Ready to Modernize Your Enterprise Core?",
        description: "Talk with our ERP specialists about your business functions, existing systems and transformation roadmap",
        button: "Request product demo",
    },
}
