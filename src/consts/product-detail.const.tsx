import { SvgIconComponent } from "@mui/icons-material";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import RuleOutlinedIcon from "@mui/icons-material/RuleOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";

import imgAnterosAdmin from "assets/asyst/img/background/product/anteros/device-A.png";
import imgAnterosMobile from "assets/asyst/img/background/product/anteros/device-B.png";
import imgAnterosOverview from "assets/asyst/img/background/services-solutions/anteros1.png";
import imgLoyaltyMember from "assets/asyst/img/background/product/anteros/loyalty-member.png";
import imgMultiTier from "assets/asyst/img/background/product/anteros/multi-tier.png";
import imgPointExchange from "assets/asyst/img/background/product/anteros/point-exchange.png";
import imgPromoReward from "assets/asyst/img/background/product/anteros/promo-and-reward.png";
import imgBusinessOwner from "assets/asyst/img/background/product/anteros/business-owner.png";

// Konten halaman detail produk (desain revamp 2026). Satu objek per produk, dirender oleh components/product/detail.
// Gambar sementara memakai aset yang sudah ada di repo; ganti dengan aset final dari desain.

export interface IconTextItem {
    icon: SvgIconComponent;
    title: string;
    description: string;
}

export interface TabContentItem {
    label: string;
    title: string;
    description: string;
    image: string;
}

export interface ProductDetailContent {
    hero: {
        title: string;
        description: string;
        primaryButton: string;
        secondaryButton: string;
        stats: { icon: SvgIconComponent; value: string; label: string }[];
    };
    overview: {
        title: string;
        paragraphs: string[];
        image: string;
        challenges: IconTextItem[];
    };
    lifecycle: {
        title: string;
        description: string;
        items: TabContentItem[];
    };
    features: {
        title: string;
        items: { title: string; description: string; image: string }[];
    };
    howItWorks: {
        title: string;
        items: TabContentItem[];
    };
    businessModels: {
        title: string;
        items: { icon: SvgIconComponent; title: string; points: string[] }[];
    };
    faq: {
        title: string;
        items: { question: string; answer: string }[];
    };
    cta: {
        title: string;
        description: string;
        button: string;
    };
}

const lifecycleDescription = "Anteros brings core loyalty operations into a connected platform from member management and tiering to rewards, promotions, points, partner integration and analytics";

export const AnterosDetailConst: ProductDetailContent = {
    hero: {
        title: "Enterprise Loyalty Platform for Customer Engagement & Growth",
        description: "Build personalized loyalty programs that connect customer data, rewards, promotions, partners and digital experiences in one scalable platform",
        primaryButton: "Talk to Loyalty Expert",
        secondaryButton: "Explore Loyalty Platform",
        stats: [
            { icon: GroupsOutlinedIcon, value: "9M+", label: "Members" },
            { icon: LoyaltyOutlinedIcon, value: "15+", label: "Loyalty Experience" },
            { icon: HubOutlinedIcon, value: "Integration", label: "API + Ecosystem" },
            { icon: AutorenewOutlinedIcon, value: "Fullcycle", label: "Implementation" },
        ],
    },
    overview: {
        title: "Built for Loyalty Programs That Operate at Enterprise Scale",
        paragraphs: [
            "An enterprise loyalty platform is software that helps organizations manage customer membership, loyalty rules, points, rewards, promotions, tiers, partner relationships and customer engagement across multiple channels.",
            "Unlike a simple rewards application, an enterprise loyalty platform typically needs to connect with existing business systems, transaction data and external partners. This makes integration, scalability, security, configurability and operational management important considerations when selecting a loyalty technology platform.",
        ],
        // TODO: ganti dengan diagram arsitektur "Enterprise Loyalty Platform" dari desain
        image: imgAnterosOverview,
        challenges: [
            { icon: PersonSearchOutlinedIcon, title: "Fragmented Customer Data", description: "Create a connected loyalty layer across customer and transaction ecosystems" },
            { icon: RuleOutlinedIcon, title: "Complex Program or Platform Rules", description: "Configure loyalty rules without rebuilding the entire platform bonuses and redemption rules" },
            { icon: HandshakeOutlinedIcon, title: "Growing Partner Ecosystem", description: "Connect partners through an integration-ready loyalty architecture" },
            { icon: InsightsOutlinedIcon, title: "Limited Platform Visibility", description: "Centralize reporting, analytics and loyalty intelligence members, points, campaigns and more" },
        ],
    },
    lifecycle: {
        title: "One Platform for the Loyalty Lifecycle",
        description: lifecycleDescription,
        // TODO: desain hanya menampilkan isi tab "Acquire"; copy & screenshot tab lain perlu dikonfirmasi
        items: [
            { label: "Acquire", title: "Acquire Member", description: lifecycleDescription, image: imgAnterosAdmin },
            { label: "Register", title: "Register Member", description: "Onboard new members through web, mobile and partner channels with consistent profile data and membership rules from day one.", image: imgAnterosAdmin },
            { label: "Engage", title: "Engage Member", description: "Reach members with relevant campaigns, promotions and communications based on their profile, tier and activity.", image: imgAnterosAdmin },
            { label: "Earn", title: "Earn Points", description: "Award points from purchases, flights, partner transactions and activities using configurable earning rules.", image: imgAnterosAdmin },
            { label: "Reward", title: "Reward Member", description: "Recognize members with tier benefits, bonuses and personalized rewards that strengthen their relationship with your brand.", image: imgAnterosAdmin },
            { label: "Reedem", title: "Redeem Rewards", description: "Let members redeem points for products, services, vouchers and partner rewards through connected redemption channels.", image: imgAnterosAdmin },
            { label: "Retain", title: "Retain Member", description: "Keep members active with tier qualification, retention campaigns and benefits that encourage continued engagement.", image: imgAnterosAdmin },
            { label: "Analyze", title: "Analyze Performance", description: "Monitor members, points, campaigns and partner performance from centralized reports and loyalty analytics.", image: imgAnterosAdmin },
        ],
    },
    features: {
        title: "Everything You Need to Operate a Modern Loyalty Program",
        // TODO: desain hanya menampilkan deskripsi "Member Management"; copy fitur lain perlu dikonfirmasi
        items: [
            { title: "Member Management", description: "Manage member profiles, loyalty status and customer information from a centralized loyalty environment", image: imgLoyaltyMember },
            { title: "Multi-Tier Loyalty", description: "Define membership tiers with their own qualification rules, benefits and upgrade or downgrade criteria", image: imgMultiTier },
            { title: "Points Management", description: "Configure how points are earned, transferred, expired and adjusted across products, channels and partners", image: imgPointExchange },
            { title: "Promotion & Rewards", description: "Create promotions, bonus campaigns and reward catalogs that can be targeted to specific members or segments", image: imgPromoReward },
            { title: "Partner & Merchant", description: "Onboard partners and merchants, manage their earning and redemption agreements and settle partner transactions", image: imgAnterosAdmin },
            { title: "Integration Platform", description: "Connect Anteros with existing business systems, transaction sources and partner platforms through APIs", image: imgAnterosAdmin },
            { title: "Elite Bonus Point", description: "Give higher-tier members additional bonus points and benefits to recognize and retain your most valuable customers", image: imgMultiTier },
            { title: "Business Analytics", description: "Track members, points liability, campaigns and partner performance through reports and dashboards", image: imgBusinessOwner },
            { title: "Mobile Loyalty", description: "Give members access to their profile, points, rewards and promotions through a mobile loyalty experience", image: imgAnterosMobile },
        ],
    },
    howItWorks: {
        title: "From Customer Activity to Meaningful Rewards",
        // TODO: desain hanya menampilkan isi tab "How it work"; copy tab lain perlu dikonfirmasi
        items: [
            { label: "How it work", title: "How loyalty software actually works", description: lifecycleDescription, image: imgAnterosAdmin },
            { label: "Business & Admin Experience", title: "Built for business and admin teams", description: "Program managers configure tiers, earning rules, promotions and rewards from an admin console, while operations teams handle member service, adjustments and approvals in the same platform.", image: imgAnterosAdmin },
            { label: "Integration", title: "Integrates with your existing systems", description: "Anteros connects to transaction systems, customer data sources and partner platforms through APIs, so loyalty activity is captured where it happens without rebuilding existing systems.", image: imgAnterosAdmin },
        ],
    },
    businessModels: {
        title: "One Loyalty Platform for Multiple Business Models",
        items: [
            { icon: FlightOutlinedIcon, title: "Airline & Travel", points: ["frequent flyer programs", "tier management", "partner rewards", "points redemption", "alliance integration"] },
            { icon: HotelOutlinedIcon, title: "Hospitality", points: ["guest loyalty", "membership tiers", "room/activity rewards", "partner benefits", "personalized promotions"] },
            { icon: AccountBalanceOutlinedIcon, title: "Banking & Financial", points: ["customer rewards", "transaction-based points", "partner rewards", "tier benefits", "campaign management"] },
            { icon: StorefrontOutlinedIcon, title: "Retail & Commerce", points: ["purchase rewards", "member segmentation", "promotional campaigns", "partner ecosystem", "customer retention"] },
            { icon: LocalHospitalOutlinedIcon, title: "Healthcare", points: ["member engagement", "wellness rewards", "partner ecosystem", "campaign-based engagement"] },
        ],
    },
    faq: {
        title: "Enterprise Loyalty platform FAQ",
        // TODO: desain hanya menampilkan jawaban pertanyaan pertama; jawaban lain perlu dikonfirmasi
        items: [
            { question: "What is Anteros?", answer: "Anteros is ASYST's enterprise loyalty platform designed to support customer membership, loyalty programs, points, rewards, promotions, partner ecosystems, analytics and digital loyalty experiences." },
            { question: "What industries can use Anteros?", answer: "Anteros can support loyalty programs across airline and travel, hospitality, banking and financial services, retail and commerce, healthcare and other industries that run membership or reward programs." },
            { question: "Can Anteros integrate with existing enterprise systems?", answer: "Yes. Anteros is designed to connect with existing business systems, transaction sources and partner platforms through APIs, so loyalty activity can be captured without replacing your current systems." },
            { question: "Can Anteros support different loyalty tiers?", answer: "Yes. Anteros supports multi-tier loyalty programs with configurable qualification rules, tier benefits and elite bonus points." },
            { question: "Can businesses manage promotions and rewards?", answer: "Yes. Business teams can create promotions, bonus campaigns and reward catalogs, and target them to specific members or segments from the admin console." },
            { question: "Can ASYST support implementation after creating the strategy?", answer: "Yes. ASYST supports the full lifecycle, from program design and implementation to integration, go-live and ongoing operational support." },
            { question: "Does Anteros support partner and merchant programs?", answer: "Yes. Anteros lets you onboard partners and merchants, manage earning and redemption agreements and track partner transactions." },
            { question: "Can loyalty members access the program through mobile?", answer: "Yes. Members can access their profile, points, rewards and promotions through a mobile loyalty experience." },
        ],
    },
    cta: {
        title: "Ready to Build a More Connected Loyalty Program?",
        description: "Talk with our loyalty and enterprise technology specialists about your business model, existing systems, customer journey and loyalty objectives",
        button: "Request product demo",
    },
}
