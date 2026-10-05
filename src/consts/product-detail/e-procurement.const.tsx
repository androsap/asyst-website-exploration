import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";

import imgPlaceholder from "assets/asyst/img/background/product/overview/background-product.png";
import { ProductDetailContent } from "consts/product-detail.const";

// Belum ada halaman sumber untuk E-Procurement. Copy disusun dari deskripsi "eProcurement Solution" di
// product overview home.asyst.co.id dan poin procurement pada konten ERP.
// TODO: konfirmasi copy, statistik & FAQ dengan tim produk; ganti gambar placeholder dengan screenshot e-Procurement.

export const EProcurementDetailConst: ProductDetailContent = {
    hero: {
        title: "E-Procurement Platform for Transparent, Connected Purchasing",
        description: "A B2B digital platform that centralizes, automates and manages your organization's purchasing operations, connecting buyers and suppliers within a unified environment",
        primaryButton: "Talk to Procurement Expert",
        secondaryButton: "Explore E-Procurement",
        stats: [
            { icon: StorefrontOutlinedIcon, value: "B2B", label: "Buyer & Supplier Portal" },
            { icon: FactCheckOutlinedIcon, value: "End-to-End", label: "Source-to-Pay" },
            { icon: HubOutlinedIcon, value: "Integration", label: "ERP + API" },
            { icon: AutorenewOutlinedIcon, value: "Fullcycle", label: "Implementation" },
        ],
    },
    overview: {
        title: "Built for Procurement Teams That Manage Many Vendors",
        paragraphs: [
            "An e-procurement platform digitizes how organizations buy goods and services, from purchase requests and vendor registration to tenders, evaluation, purchase orders and invoicing.",
            "By bringing buyers and suppliers into one environment with automated approval workflows, ASYST E-Procurement helps organizations shorten purchasing cycles, improve transparency and keep every procurement decision auditable.",
        ],
        image: imgPlaceholder,
        challenges: [
            { icon: MailOutlineOutlinedIcon, title: "Manual Approvals", description: "Replace email and paper approvals with automated, rule-based workflows" },
            { icon: VisibilityOffOutlinedIcon, title: "Limited Spend Visibility", description: "See requests, commitments and spend across units in one place" },
            { icon: GroupsOutlinedIcon, title: "Fragmented Vendor Data", description: "Keep vendor profiles, documents and evaluations in a single register" },
            { icon: ReceiptLongOutlinedIcon, title: "Slow PO-to-Invoice Cycle", description: "Connect purchase orders, receipts and electronic invoices end to end" },
        ],
    },
    lifecycle: {
        title: "One Platform for the Procurement Lifecycle",
        description: "ASYST E-Procurement connects every stage of purchasing, from request to payment, so buyers, approvers and suppliers work from the same information",
        items: [
            { label: "Request", title: "Purchase requests", description: "Business units raise purchase requests that are checked against budgets and routed automatically to the right approvers.", image: imgPlaceholder },
            { label: "Register", title: "Vendor registration", description: "Suppliers register through a self-service portal, submit company documents and keep their profiles up to date for qualification.", image: imgPlaceholder },
            { label: "Source", title: "Sourcing & tender", description: "Publish requests for quotation and tenders to qualified vendors and receive bids electronically within a defined schedule.", image: imgPlaceholder },
            { label: "Evaluate", title: "Bid evaluation", description: "Compare offers on price, technical and administrative criteria with a documented, auditable evaluation process.", image: imgPlaceholder },
            { label: "Award", title: "Award & contract", description: "Award the winning vendor and manage the resulting contract, including terms, values and validity periods.", image: imgPlaceholder },
            { label: "Order", title: "Purchase orders", description: "Generate purchase orders from awarded bids and contracts, with automated approval workflows before release to suppliers.", image: imgPlaceholder },
            { label: "Invoice", title: "Receipt & electronic invoicing", description: "Match goods receipts with purchase orders and supplier e-invoices to speed up verification and payment.", image: imgPlaceholder },
            { label: "Analyze", title: "Spend & vendor analytics", description: "Monitor spend, cycle times and vendor performance from centralized reports and dashboards.", image: imgPlaceholder },
        ],
    },
    features: {
        title: "Everything You Need to Run Digital Procurement",
        items: [
            { title: "Vendor Management", description: "Manage vendor registration, qualification, documents and performance evaluations from one supplier register", image: imgPlaceholder },
            { title: "E-Sourcing & E-Tender", description: "Run requests for quotation, auctions and tenders online with transparent schedules and electronic bid submission", image: imgPlaceholder },
            { title: "Approval Workflow Engine", description: "Configure multi-level approval rules for requests, awards and purchase orders without custom development", image: imgPlaceholder },
            { title: "Purchase Order Management", description: "Create, approve, send and track purchase orders against contracts and budgets", image: imgPlaceholder },
            { title: "Contract Management", description: "Keep contract terms, values and validity periods in one place and act before contracts expire", image: imgPlaceholder },
            { title: "E-Invoicing", description: "Receive supplier invoices electronically and match them against purchase orders and receipts", image: imgPlaceholder },
            { title: "Supplier Portal", description: "Give suppliers one place to register, respond to tenders, receive orders and submit invoices", image: imgPlaceholder },
            { title: "Procurement Analytics", description: "Track spend, savings, cycle times and vendor performance through reports and dashboards", image: imgPlaceholder },
        ],
    },
    howItWorks: {
        title: "From Purchase Request to Payment",
        items: [
            { label: "Buyer Experience", title: "Built for procurement and business teams", description: "Requesters, buyers and approvers work in the same platform, with workflows that route each request, tender and purchase order to the right people automatically.", image: imgPlaceholder },
            { label: "Supplier Experience", title: "A single portal for suppliers", description: "Suppliers register, update their documents, respond to tenders, receive purchase orders and submit invoices through one self-service portal.", image: imgPlaceholder },
            { label: "Integration", title: "Integrates with your ERP and finance systems", description: "E-Procurement connects with ERP, budgeting and finance systems through APIs, so commitments, receipts and invoices flow without re-entry.", image: imgPlaceholder },
        ],
    },
    businessModels: {
        title: "One Procurement Platform for Multiple Industries",
        items: [
            { icon: FlightOutlinedIcon, title: "Aviation", points: ["maintenance & spare parts", "vendor qualification", "tender management", "contract tracking"] },
            { icon: ApartmentOutlinedIcon, title: "State-Owned Enterprises", points: ["transparent tenders", "regulatory compliance", "audit trail", "multi-entity procurement"] },
            { icon: AccountBalanceOutlinedIcon, title: "Banking & Financial", points: ["vendor risk", "approval governance", "budget control", "spend reporting"] },
            { icon: FactoryOutlinedIcon, title: "Manufacturing", points: ["direct material sourcing", "purchase orders", "supplier performance", "receipt matching"] },
            { icon: BoltOutlinedIcon, title: "Energy & Infrastructure", points: ["project procurement", "e-tender", "contract management", "e-invoicing"] },
        ],
    },
    faq: {
        title: "E-Procurement FAQ",
        items: [
            { question: "What is ASYST E-Procurement?", answer: "ASYST E-Procurement is a B2B digital platform that centralizes, automates and manages an organization's purchasing operations, connecting buyers and suppliers within a unified environment." },
            { question: "Which procurement processes are covered?", answer: "Purchase requests, vendor registration and qualification, sourcing and tenders, bid evaluation, awarding, purchase orders, contracts, receipts and electronic invoicing." },
            { question: "Can suppliers access the platform?", answer: "Yes. Suppliers use a self-service portal to register, maintain their documents, respond to tenders, receive purchase orders and submit invoices." },
            { question: "Can approval workflows be configured?", answer: "Yes. Multi-level approval rules can be configured for requests, awards and purchase orders." },
            { question: "Can E-Procurement integrate with our ERP?", answer: "Yes. The platform connects with ERP, budgeting and finance systems through APIs." },
            { question: "Can ASYST support implementation?", answer: "Yes. ASYST supports the full lifecycle, from process design and implementation to integration, go-live and ongoing support." },
        ],
    },
    cta: {
        title: "Ready to Digitize Your Procurement?",
        description: "Talk with our procurement and enterprise technology specialists about your purchasing process, vendors and existing systems",
        button: "Request product demo",
    },
}
