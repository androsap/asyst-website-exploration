import { SvgIconComponent } from "@mui/icons-material";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import imgHero from "assets/asyst/img/background/career/env1.png";
import imgLife1 from "assets/asyst/img/background/career/env2.png";
import imgLife2 from "assets/asyst/img/background/career/env1.png";
import imgLife3 from "assets/asyst/img/background/career/teamwork.png";
import imgLife4 from "assets/asyst/img/background/story/story-6.png";
import imgLife5 from "assets/asyst/img/background/story/story-8.png";
import imgApply from "assets/asyst/img/background/career/env2.png";

// Konten statis halaman Career, daftar lowongan & detail lowongan (desain revamp 2026).
// Gambar sementara memakai aset yang sudah ada di repo; ganti dengan aset final dari desain.
// Lowongan belum dari API: tambah/ubah lowongan cukup di CareerJobsConst.

export const CAREER_BASE_PATH = "/career";
export const CAREER_JOBS_PATH = `${CAREER_BASE_PATH}/jobs`;

export const careerJobLink = (slug: string) => `${CAREER_JOBS_PATH}/${slug}`;

// TODO: ganti dengan portal/email rekrutmen resmi bila sudah ada
export const CAREER_APPLY_LINK = "/contact-us";

// ---------- SEO (title ≤ ~60 karakter, description ~120-160 karakter) ----------

export const CareerSeoConst = {
    career: {
        title: "Careers at ASYST | PT Aero Systems Indonesia",
        description: "Build your career at PT Aero Systems Indonesia (ASYST). Explore roles in software engineering, UI/UX, product, IT infrastructure and internships.",
    },
    jobs: {
        title: "Open Positions | ASYST Careers",
        description: "Browse open positions at ASYST. Filter jobs by department, skill, experience level, work location and employment type, then apply online.",
    },
    /** `{title}` diganti judul lowongan */
    jobDetail: {
        title: "{title} | ASYST Careers",
        fallbackTitle: "Job Not Found | ASYST Careers",
    },
}

// ---------- taksonomi filter ----------

/** Key = nama query param di /career/jobs (mis. `?department=UI%2FUX`) */
export type CareerFilterKey = "department" | "location" | "experience" | "type" | "skill";

export const CareerDepartmentsConst = [
    "Software Engineering",
    "UI/UX",
    "Business Analysis",
    "Project Management",
    "IT & Infrastructure",
    "IT Operations",
    "Internship",
    "Sales & Business Development",
    "Corporate Functions",
    "Product",
];

/** Filter berbentuk chip / dropdown; urutan = urutan tampil di sidebar */
export const CareerFilterGroupsConst: { key: Exclude<CareerFilterKey, "skill">; label: string; allLabel: string; options: string[] }[] = [
    { key: "experience", label: "Experience", allLabel: "All experience", options: ["Internship", "Entry-level", "Junior", "Mid-level", "Senior", "Lead/Manager"] },
    { key: "location", label: "Work location", allLabel: "All locations", options: ["On-site", "Hybrid", "Remote"] },
    { key: "type", label: "Employment type", allLabel: "All work types", options: ["Contract", "Full-time", "Internship"] },
    { key: "department", label: "Departments", allLabel: "All departments", options: CareerDepartmentsConst },
];

export const CareerPopularSkillsConst = [
    "Software Development", "API", "Enterprise Applications", "UI/UX", "Figma", "Prototyping", "Agile",
    "Networking", "IT Operations", "Stakeholder Management", "Analysis", "Project Delivery", "Infrastructure",
];

// ---------- lowongan ----------

export interface CareerJob {
    slug: string;
    title: string;
    department: string;
    summary: string;
    /** YYYY-MM-DD */
    postedDate: string;
    experience: string;
    employmentType: string;
    location: string;
    /** Chip yang tampil di kartu */
    skills: string[];
    /** Kata kunci tambahan untuk filter "Popular skills" (tidak ditampilkan) */
    tags: string[];
    about: string[];
    responsibilities: string[];
    requirements: string[];
}

export const CareerJobsConst: CareerJob[] = [
    {
        slug: "business-development-representative",
        title: "Business Development Representative",
        department: "Sales & Business Development",
        summary: "Act as the first point of contact for prospective partners, introducing them to our innovative branded content solutions.",
        postedDate: "2026-08-20",
        experience: "Mid-level",
        employmentType: "Full-time",
        location: "On-site",
        skills: ["Strategic & Analytical", "Proactive & Organized", "Collaborative Team Player", "Stakeholder"],
        tags: ["Stakeholder Management", "Analysis"],
        about: [
            "You will open conversations with organizations that need enterprise technology, understand their business challenges and connect them with the right ASYST solutions and specialists.",
            "The role combines research, outreach and relationship building, working closely with solution, consulting and delivery teams to turn early interest into qualified opportunities.",
        ],
        responsibilities: [
            "Identify and research prospective clients across aviation, enterprise and public sectors",
            "Reach out to prospects through calls, email, events and referrals",
            "Qualify opportunities and hand them over to account managers and solution teams",
            "Prepare introduction materials and meeting summaries",
            "Maintain accurate pipeline records in the CRM",
        ],
        requirements: [
            "Bachelor degree in Business, Marketing, Information Systems or a related field",
            "3+ years of experience in B2B sales or business development, preferably in IT services",
            "Strong communication and presentation skills in Indonesian and English",
            "Comfortable working with targets and structured sales processes",
        ],
    },
    {
        slug: "product-manager-platform-automation",
        title: "Product Manager - Platform & Automation",
        department: "Product",
        summary: "Define product direction, establish clear product health and success indicators, and partner closely with engineering and cross-functional teams.",
        postedDate: "2026-08-20",
        experience: "Junior",
        employmentType: "Full-time",
        location: "On-site",
        skills: ["APIs", "SDKs", "Cloud infrastructure", "AI tools"],
        tags: ["API", "Agile", "Enterprise Applications"],
        about: [
            "You will shape the roadmap of our internal platform and automation products, the shared services that help ASYST teams build, deploy and operate enterprise applications faster.",
            "Working with engineering, design and operations, you will turn user needs into clear priorities and measure whether what we ship actually improves the way teams work.",
        ],
        responsibilities: [
            "Gather and prioritise requirements from engineering, delivery and operations teams",
            "Write clear product requirements, user stories and acceptance criteria",
            "Define success metrics and track product health after release",
            "Run sprint planning and reviews together with the engineering team",
            "Communicate roadmap and release updates to stakeholders",
        ],
        requirements: [
            "1-3 years of experience in product management, business analysis or a technical role",
            "Understanding of APIs, cloud services and the software development lifecycle",
            "Structured thinking and the ability to make trade-offs with incomplete information",
            "Experience working in Agile teams",
        ],
    },
    {
        slug: "full-stack-software-engineer",
        title: "Full-Stack Software Engineer",
        department: "Software Engineering",
        summary: "Build end-to-end across our stack, working heavily with AI coding tools. We value adaptability, ownership, and a strong learning attitude.",
        postedDate: "2026-08-20",
        experience: "Senior",
        employmentType: "Full-time",
        location: "Hybrid",
        skills: ["React.js", "Next.js", "MongoDB", "Redis"],
        tags: ["Software Development", "API", "Enterprise Applications"],
        about: [
            "You will design, build and maintain web applications end to end, from user interfaces to APIs, data storage and integrations with enterprise systems.",
            "You will use modern tooling, including AI-assisted coding, to deliver reliable software for clients in aviation and other enterprise environments.",
        ],
        responsibilities: [
            "Develop features across the frontend (React.js / Next.js) and backend (Node.js)",
            "Design APIs and data models, and integrate with internal and third-party systems",
            "Write automated tests and review code from other engineers",
            "Monitor, troubleshoot and improve application performance in production",
            "Mentor other engineers and contribute to technical decisions",
        ],
        requirements: [
            "5+ years of professional software development experience",
            "Strong experience with JavaScript/TypeScript, React.js and Node.js",
            "Experience with MongoDB, Redis or other databases and caching layers",
            "Familiarity with CI/CD, containers and cloud environments",
            "Comfortable using AI coding tools as part of daily work",
        ],
    },
    {
        slug: "business-analyst",
        title: "Business Analyst",
        department: "Business Analysis",
        summary: "Build and maintain enterprise applications that connect business processes, systems and data.",
        postedDate: "2026-08-20",
        experience: "Mid-level",
        employmentType: "Contract",
        location: "On-site",
        skills: ["Java", "SQL", "API", "Integration"],
        tags: ["Analysis", "Enterprise Applications", "Stakeholder Management"],
        about: [
            "You will translate business needs into clear requirements for enterprise applications, working between business users, engineers and project managers.",
            "The role combines process analysis with a solid technical understanding of how systems, data and integrations work together.",
        ],
        responsibilities: [
            "Run workshops and interviews to understand current processes and pain points",
            "Document business requirements, process flows and functional specifications",
            "Analyse data with SQL to validate requirements and support decisions",
            "Define integration needs between applications through APIs",
            "Support user acceptance testing and go-live activities",
        ],
        requirements: [
            "3-6 years of experience as a Business Analyst or System Analyst",
            "Good understanding of SQL, APIs and system integration",
            "Familiarity with Java-based enterprise applications is a plus",
            "Strong documentation and stakeholder communication skills",
        ],
    },
    {
        slug: "ux-researcher",
        title: "UX Researcher",
        department: "UI/UX",
        summary: "Conduct end-to-end research on complex client and internal workflows, turning findings into actionable insights that improve our digital experiences.",
        postedDate: "2026-08-20",
        experience: "Entry-level",
        employmentType: "Internship",
        location: "Remote",
        skills: ["Usability", "Surveys", "User Journey"],
        tags: ["UI/UX", "Figma", "Prototyping", "Analysis"],
        about: [
            "You will work with cross-functional teams to understand requirements, design technical solutions, develop software, integrate systems and improve application performance and reliability. The role combines technical execution with an understanding of how software is used in real operational environments.",
            "At Asyst, we \"Focus on the user and all else will follow.\" Our UX Researchers transform complex tasks into intuitive, easy-to-use experiences for billions of people. From creating user flows and wireframes to building mockups and prototypes, you will envision and bring product experiences to life with an inspired, refined, and magical feel. You will join our multi-disciplinary UX team, collaborating with Engineering and Product Management, leveraging user insights to create industry-leading products.",
            "As a UX Researcher, you'll apply user-centered design methods to craft industry-leading user experiences from concept to execution, working with design partners to evolve the Asyst design language to build beautiful, innovative products.",
        ],
        responsibilities: [
            "Understand product specifications and user psychology",
            "Work closely with marketing and product management teams to identify research topics",
            "Plan and implement the overall user research strategy and methods",
            "Participate in recruitment activities for user research",
            "Manage and conduct user research with various qualitative and quantitative research methodologies",
            "Analyze and interpret existing data (for example web analytics, user surveys, customer support calls) and other supporting previous user research data",
            "Interpret and articulate data from research into meaningful insight that turns into a solution, for example: Empathy Maps, Personas, User Stories, User Journey Maps, and other tools that support those activities",
            "Build reports and present all research processes and results to the business/product owner and related teams",
            "Choose evaluation methods and conduct usability studies (in-person vs remote, remote moderated vs remote unmoderated, usability testing vs A/B testing, heuristic evaluation, etc.), then analyze and produce recommendations based on the results",
            "Work closely with and be involved in sketching, prototyping and occasional user testing within a multidisciplinary team, including UI Designers, UX Designers and Business/Product Owners, before passing the design on to the development team",
        ],
        requirements: [
            "Bachelor degree in Computer Science, Psychology, Management, or a subject related to Statistics and Research Methods",
            "3-5 years of proven experience as a UX Research Specialist or a similar role",
            "Good understanding of and experience in designing and conducting quantitative and qualitative research approaches, for discovery and evaluation",
            "Ability to understand user needs, behaviour, experience and motivation through various research methods",
            "Ability to build the criteria, requirements and needs (product requirements) so the product can create the expected user experience journey",
            "Ability to design, plan and carry out usability testing with end-users to test hypotheses about the design, features and workflow of a product",
            "Comfortable launching and iterating quickly and using data",
            "Critical thinker and problem-solving skills",
            "Team player with good time management",
            "Great interpersonal and communication skills",
            "Soft skills: analytical thinking, problem solving, communication, empathy",
            "Tools familiarity: TreeJack, etc.",
            "Portfolio is mandatory",
        ],
    },
    {
        slug: "it-project-manager",
        title: "IT Project Manager",
        department: "Project Management",
        summary: "Lead and coordinate IT projects to ensure timely delivery, budget adherence, and alignment with business objectives.",
        postedDate: "2026-08-20",
        experience: "Lead/Manager",
        employmentType: "Full-time",
        location: "On-site",
        skills: ["Plan", "Coordinate", "Risks", "Stakeholder"],
        tags: ["Project Delivery", "Agile", "Stakeholder Management"],
        about: [
            "You will lead enterprise IT projects from initiation to handover, coordinating engineers, analysts, designers and client stakeholders.",
            "You will keep scope, schedule, budget and quality under control while making sure every project delivers the business outcome it was started for.",
        ],
        responsibilities: [
            "Plan project scope, timeline, resources and budget",
            "Lead project teams using Agile or hybrid delivery methods",
            "Identify, track and mitigate project risks and issues",
            "Report progress to clients and internal management",
            "Manage change requests and ensure proper project documentation",
        ],
        requirements: [
            "6+ years of experience in IT projects, with at least 3 years as a project manager",
            "Experience delivering enterprise software or system integration projects",
            "PMP, PRINCE2 or Scrum certification is a plus",
            "Strong leadership, negotiation and stakeholder management skills",
        ],
    },
    {
        slug: "it-operations-engineer",
        title: "IT Operations Engineer",
        department: "IT Operations",
        summary: "Keep critical enterprise systems running reliably by monitoring, maintaining and improving infrastructure and services.",
        postedDate: "2026-08-18",
        experience: "Mid-level",
        employmentType: "Full-time",
        location: "On-site",
        skills: ["Monitoring", "Linux", "Networking", "ITIL"],
        tags: ["IT Operations", "Infrastructure", "Networking"],
        about: [
            "You will operate and support infrastructure and applications that airlines and enterprises depend on every day.",
            "The role focuses on stability, fast incident response and continuous improvement of operational processes.",
        ],
        responsibilities: [
            "Monitor servers, networks and applications and respond to alerts",
            "Handle incidents and service requests according to agreed SLAs",
            "Perform routine maintenance, patching and backups",
            "Document procedures and contribute to problem management",
        ],
        requirements: [
            "2-4 years of experience in IT operations or system administration",
            "Good knowledge of Linux/Windows servers and networking fundamentals",
            "Familiarity with ITIL practices",
            "Willing to work in shifts when needed",
        ],
    },
    {
        slug: "software-engineering-intern",
        title: "Software Engineering Intern",
        department: "Internship",
        summary: "Learn by building real features alongside experienced engineers on enterprise applications used by real customers.",
        postedDate: "2026-08-15",
        experience: "Internship",
        employmentType: "Internship",
        location: "Hybrid",
        skills: ["JavaScript", "Git", "REST API"],
        tags: ["Software Development", "API"],
        about: [
            "You will join an engineering team for several months and contribute to real projects, guided by a mentor.",
            "It is a chance to learn how enterprise software is planned, built, tested and released.",
        ],
        responsibilities: [
            "Develop and test small features under the guidance of a mentor",
            "Fix bugs and write documentation",
            "Join team ceremonies such as stand-ups, planning and reviews",
            "Present your work at the end of the internship",
        ],
        requirements: [
            "Final-year student or fresh graduate in Computer Science or a related field",
            "Basic knowledge of programming (JavaScript, Java or similar)",
            "Familiarity with Git",
            "Eager to learn and comfortable asking questions",
        ],
    },
];

// ---------- halaman utama /career ----------

export const CareerHeroConst = {
    title: "Build Technology That Matters",
    description: "Join a team where software, design, data, infrastructure and business expertise come together to create technology that makes a difference",
    button: "Explore Open Positions",
    image: imgHero,
}

export const CareerValuesConst: { title: string; items: { title: string; subtitle: string; description: string; icon: SvgIconComponent }[] } = {
    title: "How We Work Together",
    items: [
        { title: "Accountability", subtitle: "Own the outcome.", description: "We take responsibility for our decisions, actions and results", icon: AssignmentTurnedInOutlinedIcon },
        { title: "Respect", subtitle: "Room for different perspectives.", description: "Good technology depends on people who listen, communicate and collaborate", icon: HandshakeOutlinedIcon },
        { title: "Integrity", subtitle: "Do the right thing.", description: "Trust is essential when working with customers, colleagues, systems and information", icon: VerifiedUserOutlinedIcon },
        { title: "Teamwork", subtitle: "Build together.", description: "Complex technology problems rarely have one-person solutions", icon: GroupsOutlinedIcon },
        { title: "Excellence", subtitle: "Keep improving.", description: "We challenge assumptions, learn from experience and continuously improve what we build", icon: EmojiEventsOutlinedIcon },
    ],
}

export const CareerOpportunityConst = {
    title: "Your Next Opportunity",
    description: "Explore open positions across technology, product, design, business and project delivery. Find a role that matches your skills, experience and the kind of problems you want to solve",
    button: "Find Your Next Career at ASYST",
    limit: 6,
}

export const CareerLifeConst = {
    title: "Life at Asyst",
    description: "Work is only part of the experience. From collaborative workshops and team activities to company celebrations and industry visits, our people have opportunities to connect beyond their day-to-day roles",
    images: [imgLife1, imgLife2, imgLife3, imgLife4, imgLife5],
}

export const CareerWhyConst = {
    title: "Why Build Your Career at ASYST?",
    description: "Depending on your role, you may work on enterprise applications, digital experiences, system integration, data, infrastructure, and IT operations",
    items: [
        { title: "Build Enterprise Technology", description: "Work on technology designed to support real business processes—not just isolated demos or prototypes" },
        { title: "Solve Complex Problems", description: "Enterprise environments require people who can understand complexity, ask the right questions and turn problems into workable solutions" },
        { title: "Learn Across Disciplines", description: "Collaborate with engineers, designers, analysts, project teams, operations and business stakeholders" },
        { title: "Grow With Mentorship", description: "Learn from experienced colleagues through code reviews, pairing, knowledge sharing and on-the-job guidance" },
        { title: "Work on Critical Systems", description: "Contribute to platforms that airlines, airports and enterprises rely on every day" },
    ],
}

export const CareerIndonesiaConst = {
    title: "Build Your Career From Indonesia, Work on Enterprise Technology",
    description: "ASYST is based in Indonesia and works within an enterprise technology ecosystem shaped by local expertise, international technology partnerships and complex business environments",
    items: [
        { label: "Location", value: "Information Central Building 3rd Floor of Garuda Indonesia\nSoekarno-Hatta International Airport Area, Cengkareng, Indonesia" },
        { label: "Work Environment", value: "On-site, hybrid or remote depending on the role" },
        { label: "Language", value: "Indonesian / English depending on role" },
        { label: "Career Scope", value: "Software · Design · Data · Integration · Infrastructure · Business" },
    ],
}

export const CareerInternshipConst = {
    title: "Start Your Technology Career",
    description: "Starting your career does not mean starting with small problems. At ASYST, interns and early-career talent can be introduced to real technology environments, collaborative teams and business challenges",
    button: "Explore Internship Opportunities",
    /** filter yang dipakai tombol di atas */
    filter: { key: "type" as CareerFilterKey, value: "Internship" },
}

export const CareerFaqConst = {
    title: "Frequently Asked Questions",
    items: [
        { question: "What careers are available at ASYST?", answer: "ASYST's current Career page highlights opportunities including Software Developer, Analyst, UI/UX Design, Project Management and Internship. Open roles change based on current recruitment needs, so check the job list for the latest vacancies." },
        { question: "Does ASYST only hire for aviation technology roles?", answer: "No. Aviation is one of our key industries, but our teams also build enterprise applications, digital solutions, infrastructure and IT services for other sectors." },
        { question: "What technology roles are available at ASYST?", answer: "Roles span software engineering, UI/UX, business analysis, project management, IT infrastructure, IT operations, product and business functions." },
        { question: "Does ASYST offer internships?", answer: "Yes. Internship opportunities are published together with other vacancies. Use the Internship filter on the job list to see what is currently open." },
        { question: "Where is ASYST located?", answer: "Our office is at the Information Central Building, 3rd floor, Garuda Indonesia, Soekarno-Hatta International Airport Area, Cengkareng, Indonesia. Some roles may be hybrid or remote." },
        { question: "How do I apply for an ASYST job?", answer: "Open the job you are interested in, review the requirements, then click \"Apply for This Position\" and follow the instructions provided." },
    ],
}

// ---------- daftar lowongan /career/jobs ----------

export const CareerJobsHeroConst = {
    title: "Explore Career Opportunities at ASYST",
    description: "Discover opportunities to build enterprise software, design digital experiences, connect business systems and solve complex technology challenges",
    searchPlaceholder: "Search by role, skill or keyword...",
    popularSkills: "Popular skills",
    allSkills: "All tags",
}

export const CareerJobListConst = {
    title: "Open Position",
    description: "Explore current opportunities across our teams. Each role includes its key responsibilities, required skills, experience level and work location to help you make an informed decision",
    emptyText: "No open position matches your filter.",
    resetFilter: "Reset filter",
    loadMore: "Load More",
    pageSize: 6,
}

export const CareerSidebarConst = {
    browse: "Browse",
    filters: "Filters",
    searchPlaceholder: "Roles, Keywords...",
}

export const CareerConnectsConst = {
    title: "Build Technology That Connects Business",
    paragraphs: [
        "At ASYST, technology is connected to the way businesses operate. Our work spans enterprise products, digital solutions, system integration and technology services, with experience in complex environments such as aviation.",
        "Our portfolio includes management solutions, travel management, commercial solutions, airline and ground operations, air cargo, IT Service Assistant, infrastructure and managed services, and professional services.",
    ],
    items: [
        { title: "Enterprise Products", description: "Build and evolve software that supports business processes.", icon: Inventory2OutlinedIcon },
        { title: "Digital solutions", description: "Create technology that addresses evolving business needs.", icon: DevicesOutlinedIcon },
        { title: "Technology Services", description: "Support implementation, operations and improvement.", icon: SettingsSuggestOutlinedIcon },
        { title: "Integration", description: "Connect applications, information and workflows", icon: HubOutlinedIcon },
    ],
}

export const CareerApplyStepsConst = {
    title: "What to Expect When You Apply",
    description: "Every role has its own requirements. The vacancy details will guide you through the relevant application steps and what information to prepare",
    image: imgApply,
    steps: [
        { title: "Explore a role", description: "Review the responsibilities, required skills, experience level and location" },
        { title: "Submit your application", description: "Follow the instructions in the specific vacancy and provide relevant information" },
        { title: "Connect with the recruitment team", description: "If shortlisted, learn more about the position and the next steps in the process" },
        { title: "Discuss your experience", description: "Share your skills, work experience and approach to solving problems through the relevant assessment stages" },
        { title: "Review the outcome", description: "Receive further information about the recruitment decision and next steps" },
    ],
}

export const CareerJobsFaqConst = {
    title: "Frequently Asked Questions",
    items: [
        { question: "What positions are available at ASYST?", answer: "Available positions depend on current recruitment needs. ASYST's existing Career page highlights disciplines such as Software Developer, Analyst, UI/UX Design, Project Management and Internship. Candidates should refer to the live vacancy list for confirmed openings." },
        { question: "Can I search for jobs by skills?", answer: "Yes. Type a skill or keyword in the search bar, or pick one of the popular skills to narrow down the list." },
        { question: "Where are ASYST jobs located?", answer: "Most roles are based at our office in the Soekarno-Hatta International Airport area, Cengkareng. Each vacancy states whether it is on-site, hybrid or remote." },
        { question: "Does ASYST offer internships?", answer: "Yes. Choose \"Internship\" in the employment type filter to see open internship positions." },
        { question: "How do I apply for a job at ASYST?", answer: "Open the vacancy, review the details and click \"Apply for This Position\". The vacancy explains what to prepare." },
        { question: "Can I apply if I don't have aviation experience?", answer: "Yes. Aviation experience is helpful for some roles but not required for most. We look for relevant skills and willingness to learn the domain." },
    ],
}

// ---------- detail lowongan /career/jobs/:slug ----------

export const CareerJobDetailConst = {
    apply: "Apply for This Position",
    applyShort: "Apply Now",
    meta: { location: "Work Location", type: "Employment Type", experience: "Experience" },
    about: "About the Role",
    whyMatters: {
        title: "Why This Role Matters",
        paragraphs: [
            "Enterprise software is rarely an isolated application. It becomes part of a larger environment where people, processes, data and systems need to work together.",
            "Your work at ASYST can contribute to technology that connects business processes, improves operational workflows and helps organizations make better use of digital systems",
        ],
    },
    responsibilities: "What You'll Do",
    requirements: "What We're Looking For",
    benefits: {
        title: "Benefits",
        items: [
            "Attractive compensation package consisting of base salary and the potential to earn a significant bonus for top performance",
            "Opportunity to have a real impact in a high-growth global category leader",
            "Health insurance",
            "Responsibility from day one and professional and personal growth",
            "Great work environment with a young, international team of talented people to work with",
        ],
    },
    why: {
        title: "Why Build Your Career at ASYST?",
        items: [
            { title: "Enterprise Technology", description: "Work within an environment where technology is connected to real business processes" },
            { title: "Domain Expertise", description: "Learn from complex operational environments, including aviation" },
            { title: "Product Capability", description: "Build and improve solutions that form part of enterprise technology environments" },
            { title: "Long-Term Delivery", description: "ASYST has been developing its technology capabilities for more than two decades" },
            { title: "Integration", description: "Understand how systems, applications and processes work together" },
            { title: "Collaboration", description: "Build alongside people from different technical, business and operational disciplines" },
        ],
    },
    beforeApply: {
        title: "Before You Apply",
        items: ["Updated CV / resume", "Relevant portfolio, where applicable", "Relevant project experience", "Technical or professional certifications, if requested", "Contact information"],
        note: "Recruitment steps may vary depending on the role. The recruitment team will provide the relevant next steps if your application progresses.",
        requireLabel: "Require:",
        groups: [
            { title: "For UI/UX roles", items: ["Portfolio", "Design process", "Figma / prototype links, if relevant"] },
            { title: "For Engineering roles", items: ["GitHub / code samples", "Technical project examples", "Architecture or system examples"] },
        ],
    },
}

/** FAQ detail lowongan; `{title}` diganti judul lowongan */
export const CareerJobDetailFaqConst = {
    title: "Frequently Asked Questions",
    items: [
        { question: "What does a {title} at ASYST do?", answer: "The exact responsibilities depend on the vacancy. Software engineering roles can involve developing enterprise applications, working with APIs and integrations, collaborating with cross-functional teams and improving technology solutions." },
        { question: "Do I need aviation experience to work at ASYST?", answer: "Not for most roles. Aviation knowledge is a plus for some positions, and you will learn the domain from experienced colleagues." },
        { question: "What technologies does ASYST use?", answer: "Our teams work with technologies such as React.js, Next.js, Node.js, Java, Flutter, SQL and NoSQL databases, cloud platforms and enterprise integration tools. The vacancy lists the skills needed for each role." },
        { question: "Does ASYST hire UI/UX Designers?", answer: "Yes. UI/UX roles are published under the UI/UX department whenever there are openings." },
        { question: "Does ASYST offer internship opportunities?", answer: "Yes. Internship vacancies are listed on the job page under the Internship employment type." },
        { question: "Where is this position based?", answer: "The work location is shown at the top of this page. On-site roles are based at our office in the Soekarno-Hatta International Airport area, Cengkareng." },
    ],
}
