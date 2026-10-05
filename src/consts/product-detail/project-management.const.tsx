import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import ViewTimelineOutlinedIcon from "@mui/icons-material/ViewTimelineOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

import imgDashboard from "assets/asyst/img/background/product/project-management/dashboard.png";
import imgAiInsights from "assets/asyst/img/background/product/project-management/ai-insights.png";
import imgCalendar from "assets/asyst/img/background/product/project-management/all-calendar.png";
import imgDaily from "assets/asyst/img/background/product/project-management/daily.png";
import imgDeliverables from "assets/asyst/img/background/product/project-management/deliverables.png";
import imgReports from "assets/asyst/img/background/product/project-management/reports.png";
import imgStreams from "assets/asyst/img/background/product/project-management/streams.png";
import imgTimeline from "assets/asyst/img/background/product/project-management/timeline.png";
import { ProductDetailContent } from "consts/product-detail.const";

// Konten mengikuti apm.asyst.co.id/landing

export const ProjectManagementDetailConst: ProductDetailContent = {
    hero: {
        title: "People and AI Agents, Working from One Plan",
        description: "Asyst Project Management keeps streams, deliverables, tasks and logged hours in one place, and lets AI agents do the status reporting so your team can focus on decisions",
        primaryButton: "Talk to Project Expert",
        secondaryButton: "Explore Project Management",
        stats: [
            { icon: WidgetsOutlinedIcon, value: "13", label: "Modules, One Source of Truth" },
            { icon: AutoAwesomeOutlinedIcon, value: "AI Agents", label: "Digest & Risk Detection" },
            { icon: SpeedOutlinedIcon, value: "Real-Time", label: "Deliverable Progress" },
            { icon: ViewTimelineOutlinedIcon, value: "Per Stream", label: "Timeline & Ownership" },
        ],
    },
    overview: {
        title: "Built for Programmes That Are Too Big for a Spreadsheet",
        paragraphs: [
            "Asyst Project Management is a delivery platform from PT Aero Systems Indonesia. Work is organised the way programmes actually run: streams own deliverables, deliverables hold tasks, and every hour is logged against the task it belongs to.",
            "Because the data is structured, progress, timeline and productivity views are generated, not assembled by hand every Monday. AI agents read the same data to write the digest, flag risks and propose the next move.",
        ],
        image: imgDashboard,
        challenges: [
            { icon: TrendingUpOutlinedIcon, title: "Real-Time Progress", description: "Deliverable and task status without a status meeting" },
            { icon: ScheduleOutlinedIcon, title: "Hours Where the Work Is", description: "Every activity logged against its task and deliverable" },
            { icon: TimelineOutlinedIcon, title: "Timeline per Stream", description: "Start to target date, grouped by the team that owns it" },
            { icon: PsychologyOutlinedIcon, title: "AI Digest & Risk", description: "Written from your data, with the risks named" },
        ],
    },
    lifecycle: {
        title: "One Plan from Stream to Steering Report",
        description: "Streams own deliverables, deliverables hold tasks, and every logged hour feeds the progress, productivity and AI views your stakeholders rely on",
        items: [
            { label: "Streams", title: "Every stream on one page", description: "Scope, member count and lead per stream, so no one has to chase owners to find out who reports what.", image: imgStreams },
            { label: "Deliverables", title: "Big-picture targets, tracked", description: "Deliverables with owner, status, progress and target date, filterable by stream, status and assignee, with custom fields for your process.", image: imgDeliverables },
            { label: "Timeline", title: "Cutover dates you can defend", description: "Deliverables plotted from start to target date, colour-coded not started, in progress, at risk and completed.", image: imgTimeline },
            { label: "Daily Activity", title: "Hours logged where the work is", description: "Daily activity is the source for every metric: hours, cycle time and the AI digest all read the same log.", image: imgDaily },
            { label: "Calendar", title: "Company calendar & approvals", description: "A company-wide month grid of check-ins, trips and leave, with a pending-approvals queue for leads.", image: imgCalendar },
            { label: "AI Insights", title: "Status digests written for you", description: "On-demand status digests and risk detection, company-wide or per stream, with wins, risks and recommendations backed by the underlying numbers.", image: imgAiInsights },
            { label: "Reports", title: "Reports that stay live", description: "Pick dimensions, metrics, filters and a chart, then save the report and share it with the company or keep it private.", image: imgReports },
        ],
    },
    features: {
        title: "Thirteen Modules, One Source of Truth",
        items: [
            { title: "AI Insights", description: "On-demand status digests and risk detection, company-wide or per stream. Wins, risks and recommendations come with the underlying numbers, so a steering update takes minutes instead of a morning", image: imgAiInsights },
            { title: "Dashboard Progress", description: "Deliverable progress, task completion and team activity at a glance, updated the moment your team logs work", image: imgDashboard },
            { title: "Task Management", description: "Tasks under a deliverable, with priority, assignee and status. Filter by status and see exactly what is blocked", image: imgDeliverables },
            { title: "Calendar & Leave Approval", description: "Company-wide month grid of check-ins, trips and leave, with a pending-approvals queue for leads", image: imgCalendar },
            { title: "Productivity Metrics", description: "Throughput, on-time rate, average cycle time, hours logged and active days per member, not just hours", image: imgDaily },
            { title: "Custom Report Builder", description: "Pick dimensions, metrics, filters and a chart, then save and share it with the company or keep it private. Reports stay live against the same data", image: imgReports },
            { title: "Streams Overview", description: "Scope, members and lead for every stream, so portfolio ownership is always clear", image: imgStreams },
            { title: "Timeline per Stream", description: "Deliverables plotted from start to target date and grouped by the stream that owns them", image: imgTimeline },
            { title: "Roles & Access", description: "Approve registrations, assign members to streams and set Admin, Stream Lead or Member roles", image: imgStreams },
        ],
    },
    howItWorks: {
        title: "Three Ways Teams Run Asyst Project Management",
        items: [
            { label: "SAP / ERP Implementation", title: "Keep an ERP rollout honest, stream by stream", description: "Functional, Technical, Data Migration, Integration and Change Management streams each own their deliverables and leads. Deliverables are plotted to their cutover dates, and blocked tasks or at-risk deliverables roll straight into the AI risk digest instead of a status email.", image: imgTimeline },
            { label: "Multi-Stream Programme & PMO", title: "Give the PMO one version of the truth", description: "Every stream sits on one page with its scope, members and lead. Build portfolio reports across streams by dimension and metric, then generate the digest company-wide or per stream, review it and send it.", image: imgStreams },
            { label: "Internal IT Projects", title: "Run internal IT work like a programme", description: "Track deliverables with owner, status, progress and target date. Add custom fields such as budget code, business owner, wave or regulatory impact, and keep roles and access under control.", image: imgDeliverables },
        ],
    },
    businessModels: {
        title: "What Changes When Reporting Is Automatic",
        items: [
            { icon: IntegrationInstructionsOutlinedIcon, title: "ERP Implementation", points: ["workstream ownership", "cutover timeline", "blocker detection", "AI risk digest"] },
            { icon: AccountTreeOutlinedIcon, title: "PMO & Portfolio", points: ["one view across streams", "portfolio reports", "steering packs", "shared metrics"] },
            { icon: ComputerOutlinedIcon, title: "Internal IT", points: ["deliverable tracking", "custom fields", "role-based access", "progress dashboards"] },
            { icon: EngineeringOutlinedIcon, title: "Delivery Teams", points: ["daily activity log", "hours per task", "cycle time", "on-time rate"] },
            { icon: GroupsOutlinedIcon, title: "Leadership", points: ["Monday status compiled for you", "less admin", "more decisions", "risks named early"] },
        ],
    },
    faq: {
        title: "Asyst Project Management FAQ",
        items: [
            { question: "What is Asyst Project Management?", answer: "Asyst Project Management is a delivery platform from PT Aero Systems Indonesia for multi-stream programmes. It keeps streams, deliverables, tasks and logged hours in one place, with AI agents handling status reporting." },
            { question: "What do the AI agents do?", answer: "AI agents read your project data to generate status digests company-wide or per stream, flag risks and propose the next move, with the underlying numbers attached." },
            { question: "How is work structured?", answer: "Streams own deliverables, deliverables hold tasks, and every hour is logged against the task it belongs to." },
            { question: "Can we build our own reports?", answer: "Yes. The custom report builder lets you choose dimensions, metrics, filters and a chart, then save the report and share it company-wide or keep it private." },
            { question: "Can we add fields specific to our process?", answer: "Yes. Add custom fields such as budget code, business owner, wave or regulatory impact, for all deliverables or a single stream." },
            { question: "How are roles and access managed?", answer: "Admins approve registrations, assign members to streams and set each member as Admin, Stream Lead or Member." },
        ],
    },
    cta: {
        title: "See Your Programme in One View",
        description: "Ask us for a walkthrough with your own stream structure",
        button: "Request a demo",
    },
}
