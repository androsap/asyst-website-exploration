import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import FolderOffOutlinedIcon from "@mui/icons-material/FolderOffOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import EventBusyOutlinedIcon from "@mui/icons-material/EventBusyOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";

import imgDashboard from "assets/asyst/img/background/product/smart-document/dashboard.jpg";
import imgAskAi from "assets/asyst/img/background/product/smart-document/ask-ai.png";
import imgAskAiChat from "assets/asyst/img/background/product/smart-document/ask-ai-chat.png";
import imgDocument from "assets/asyst/img/background/product/smart-document/document.png";
import imgContract from "assets/asyst/img/background/product/smart-document/contract.png";
import imgGraph from "assets/asyst/img/background/product/smart-document/graph.png";
import imgAdmin from "assets/asyst/img/background/product/smart-document/admin.png";
import { ProductDetailContent } from "consts/product-detail.const";

// Konten mengikuti smart-document.asyst.co.id/landing

export const SmartDocumentDetailConst: ProductDetailContent = {
    hero: {
        title: "Every Document Your Company Owns, Finally Answerable",
        description: "Asyst Smart Document parses, classifies and indexes every PDF you upload, then answers questions about them with citations, tracks contract expiries and keeps each answer inside the permissions your org chart already defines",
        primaryButton: "Talk to Document AI Expert",
        secondaryButton: "Explore Smart Document",
        stats: [
            { icon: DescriptionOutlinedIcon, value: "10.000+", label: "Documents per Deployment" },
            { icon: AdminPanelSettingsOutlinedIcon, value: "4-Level", label: "Access Control" },
            { icon: FormatQuoteOutlinedIcon, value: "Every Answer", label: "Cited to Source Page" },
            { icon: CloudOutlinedIcon, value: "Your Cloud", label: "Private Deployment" },
        ],
    },
    overview: {
        title: "Enterprise Knowledge Lives in Ten Years of PDFs, Not in a Chatbot",
        paragraphs: [
            "Contracts, tenders, SOPs, invoices and technical manuals are scattered across shared drives, readable only by whoever remembers the filename. Generic AI tools can summarize a file you hand them, but they can't tell you which of your 10.000 documents matters, and they happily leak what a staff member was never allowed to read.",
            "Asyst Smart Document is built the other way around. Every upload runs a real pipeline (parse, classify, extract fields, embed, graph) and every answer is retrieved only from documents the asker's department, division, section and position level allow. Deployed in your own cloud, with the model of your choice (OpenAI or Qwen).",
        ],
        image: imgDashboard,
        challenges: [
            { icon: FolderOffOutlinedIcon, title: "Scattered Archives", description: "Documents spread across shared drives and found only by filename" },
            { icon: ManageSearchOutlinedIcon, title: "Answers Buried in PDFs", description: "Simple questions mean opening several PDFs and a spreadsheet" },
            { icon: LockOpenOutlinedIcon, title: "Uncontrolled AI Access", description: "Generic AI tools ignore who is actually allowed to read what" },
            { icon: EventBusyOutlinedIcon, title: "Missed Renewal Dates", description: "Contract expiries tracked manually in spreadsheets, if at all" },
        ],
    },
    lifecycle: {
        title: "One Pipeline from Raw PDF to an Answer You Can Act On",
        description: "Every upload runs through the same pipeline, so each document becomes searchable, structured and answerable within the access rules of your organization",
        items: [
            { label: "Upload", title: "Scope every upload", description: "Restrict a document to a department, division, section or minimum position level at the moment it is uploaded. Re-upload a revised document and it becomes a new version, with watchers notified.", image: imgDocument },
            { label: "Parse", title: "Read every page with OCR", description: "Scanned and digital PDFs are parsed into text, headings and chunks, with the status, token cost and failures of each step reported per document.", image: imgDocument },
            { label: "Classify", title: "Self-discovering document types", description: "The first time a new kind of document arrives, its extraction schema is discovered automatically, with no template building and no field mapping project.", image: imgDocument },
            { label: "Extract", title: "Fields extracted on upload", description: "Counterparty, contract number, value, start and end dates are pulled from the document itself, so no one retypes them into a spreadsheet.", image: imgContract },
            { label: "Graph", title: "Knowledge graph, not a black box", description: "Every document breaks down into headings and chunks you can explore. When an answer looks surprising, trace it back through the graph to the exact section it came from.", image: imgGraph },
            { label: "Ask", title: "Ask AI, grounded in your own files", description: "Ask in Bahasa Indonesia or English. Answers come back with the source document attached, and only documents your role can see are ever retrieved.", image: imgAskAiChat },
        ],
    },
    features: {
        title: "Everything You Need to Put Your Document Archive to Work",
        items: [
            { title: "Ask AI", description: "Ask in Bahasa Indonesia or English and get answers with the source document attached. Pick a speed profile per question: Fast, Smart or Advanced", image: imgAskAi },
            { title: "Contract Radar", description: "Terms, counterparties, contract numbers and end dates are extracted on upload. Filter by expiring soon, expired or active before a renewal date surprises anyone", image: imgContract },
            { title: "Self-Discovering Document Types", description: "Extraction schemas for new kinds of documents are discovered automatically, with no template building or field mapping", image: imgDocument },
            { title: "Pipeline You Can Watch", description: "Parsing, classification, field extraction and embedding each report their own status, token cost and failures per document", image: imgDocument },
            { title: "Roles, Org Chart & Agents", description: "Permissions are fixed capabilities in code; admins compose roles, positions and custom Ask AI personas on top of them", image: imgAdmin },
            { title: "Versioning & Watchers", description: "Re-upload a revised document and it becomes a new version, and watchers get notified instead of hunting for the latest file", image: imgDocument },
            { title: "Knowledge Graph Explorer", description: "Explore every document as headings and chunks, and trace any answer back to the exact section it came from", image: imgGraph },
        ],
    },
    howItWorks: {
        title: "Whatever Your Team Is Drowning In, Smart Document Reads It First",
        items: [
            { label: "Contract & Procurement", title: "Never miss a renewal date again", description: "Contract terms are extracted on upload, every contract can be filtered by expiring soon, expired or active, and watchers are notified before the window closes. Ask which vendor offers the shortest SLA across six proposals and get the answer with each source document attached.", image: imgContract },
            { label: "Knowledge & Onboarding", title: "The answer is in the SOP. Now people can find it", description: "New staff ask in plain language and get a cited answer instead of a chat thread and a two-day wait. Admins add agent personas per team, such as a blunt reviewer or a compliance checker, and conversations stay saved so a long review can resume the next morning.", image: imgAskAiChat },
            { label: "Governance & Audit", title: "Access follows the org chart, not a folder name", description: "Each upload is scoped to a department, division, section or position level. Roles are built from real permissions defined in code, and invitation codes, member approval and per-company quotas keep multi-entity groups separated.", image: imgAdmin },
        ],
    },
    businessModels: {
        title: "Built with Teams Who Had the Document Problem First",
        items: [
            { icon: FlightOutlinedIcon, title: "Aviation Services", points: ["technical manuals", "cost estimates", "operational SOPs", "answers in minutes"] },
            { icon: ShoppingCartOutlinedIcon, title: "Procurement", points: ["tender comparison", "contract register", "expiry alerts", "zero manual trackers"] },
            { icon: ApartmentOutlinedIcon, title: "Shared Services", points: ["one portal for all entities", "per-company quotas", "member approval", "central search"] },
            { icon: SchoolOutlinedIcon, title: "Knowledge & HR", points: ["SOP search", "staff onboarding", "saved conversations", "team agents"] },
            { icon: GavelOutlinedIcon, title: "Legal & Compliance", points: ["role-scoped access", "version history", "audit-ready permissions", "cited answers"] },
        ],
    },
    faq: {
        title: "Smart Document FAQ",
        items: [
            { question: "What is Asyst Smart Document?", answer: "Asyst Smart Document is a role-aware document intelligence platform by ASYST. It parses, classifies and indexes your PDFs with RAG and OCR, then answers questions with citations to the source document and page." },
            { question: "Which languages can I ask in?", answer: "You can ask in Bahasa Indonesia or English." },
            { question: "Who can see which documents?", answer: "Each upload can be restricted to a department, division, section or minimum position level, and Ask AI only retrieves documents the asker's role is allowed to see." },
            { question: "Where is the platform deployed?", answer: "Smart Document is deployed privately in your own cloud, with OpenAI or Qwen models." },
            { question: "Can it track contract expiry dates?", answer: "Yes. Contract terms, counterparties, numbers and end dates are extracted on upload, and contracts can be filtered by expiring soon, expired or active, with watchers notified." },
            { question: "Do we need to build templates for each document type?", answer: "No. The extraction schema for a new kind of document is discovered automatically the first time it arrives." },
            { question: "How can we verify an answer?", answer: "Every answer is cited back to its source document, and the knowledge graph lets you trace it to the exact section it came from." },
        ],
    },
    cta: {
        title: "Put Your Document Archive to Work This Quarter",
        description: "Start with one folder of contracts. Upload, ask and see the citations for yourself",
        button: "Request a walkthrough",
    },
}
