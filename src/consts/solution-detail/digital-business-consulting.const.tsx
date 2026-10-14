import { AccountTreeOutlinedIcon, AutoAwesomeOutlinedIcon, GavelOutlinedIcon, InsightsOutlinedIcon, RouteOutlinedIcon, SettingsSuggestOutlinedIcon } from "components/ui/icons";
import { localized } from "shared/i18n";
import { SolutionPageContent } from "./solution-page.types";

import imgIntro from "assets/asyst/img/background/story/story-1-jpg.webp";
import imgChallenge from "assets/asyst/img/background/partner/partner-services.webp";
import imgMaturity from "assets/asyst/img/background/capabilities/build-digital.webp";
import imgRoadmap from "assets/asyst/img/background/career/env1.webp";
import imgAlignment from "assets/asyst/img/background/capabilities/improve-customer.webp";
import imgArchitecture from "assets/asyst/img/background/capabilities/connect-enterprise.webp";
import imgGovernance from "assets/asyst/img/background/story/story-3-jpg.webp";

const digitalBusinessConsultingEn: SolutionPageContent = {
    seo: {
        title: "Digital Business Consulting | ASYST",
        description: "ASYST Digital Business Consulting helps organizations understand their digital landscape, define transformation priorities, develop technology roadmaps and translate strategy into implementation.",
    },
    hero: {
        breadcrumb: "Digital Business Consulting",
        title: "Digital Business Consulting to Bridge Business Strategy and Technology",
        description: "Helps organizations understand the current digital landscape, define transformation priorities, develop technology roadmaps, and translate strategies into targeted implementation steps.",
        primaryButton: "Discuss Your Needs",
        secondaryButton: "See How We Work",
    },
    sections: [
        {
            type: "intro",
            title: "What Is Digital Business Consulting?",
            paragraphs: [
                "Digital Business Consulting is a service that helps organizations align business strategies, operational processes, digital capabilities, and technology investments to achieve a clear and actionable transformation direction.",
                "Encompassing an assessment of the current state, identification of gaps and opportunities, prioritization, roadmap development, target state design, and governance, through to support for implementation.",
            ],
            image: imgIntro,
        },
        {
            type: "list",
            layout: "stacked",
            title: "As Technology Evolves, Business Clarity Must Be Maintained",
            paragraphs: ["Digital Business consulting and transformation is not merely about selecting new technologies. Organizations need to understand the business problems they aim to solve, the readiness of their existing technology, investment priorities, and how these changes are implemented into daily operations."],
            image: imgChallenge,
            items: [
                { title: "Digital Strategy Lacks Priority", description: "Multiple digital initiatives can run concurrently without a clear sense of priority. We help map out opportunities and identify the initiatives most relevant to business goals." },
                { title: "Systems and Processes Are Becoming Increasingly Complex", description: "Applications, platforms, data, and processes that evolve in isolation can create complexity. Consulting helps organizations visualize the relationships between business processes, applications, data, and technology." },
                { title: "It Is Difficult to Link Technology Investments to Business Goals", description: "Technology decisions need to be grounded in a clear business context. We help align business needs with technology priorities and implementation roadmaps." },
                { title: "The Organization Is Not Yet Ready to Change", description: "Transformation requires more than technology deployment. Governance, operating model, stakeholder alignment, and change management need to be considered from the start." },
            ],
        },
        {
            type: "cards",
            heading: "center",
            columns: 3,
            title: "From Business Challenge to Technology Direction",
            items: [
                { icon: RouteOutlinedIcon, title: "Digital Strategy", description: "Determining the direction of digital transformation based on business goals, organizational priorities, customer needs, and available technology capabilities." },
                { icon: InsightsOutlinedIcon, title: "Technology Strategy", description: "Assessing the role of technology in supporting business strategy and determining the priority technology capabilities that need to be developed." },
                { icon: SettingsSuggestOutlinedIcon, title: "Business Process Transformation", description: "Identifying processes that need to be simplified, integrated, digitized, or redesigned to support a more effective operating model." },
                { icon: AutoAwesomeOutlinedIcon, title: "Digital Product & Innovation", description: "Exploring digital product and service opportunities by connecting customer needs, business models, technology capabilities, and execution priorities." },
                { icon: AccountTreeOutlinedIcon, title: "Enterprise Architecture", description: "Helping organizations understand the relationship between business capability, application, data, integration, infrastructure, and technology architecture" },
                { icon: GavelOutlinedIcon, title: "Governance & Change", description: "Establishing a governance structure and change management approach to ensure the transformation has clear ownership, a decision-making framework, and a clear implementation." },
            ],
        },
        {
            type: "tabs",
            variant: "boxed",
            title: "Our Capabilities for Enterprise Transformation",
            items: [
                {
                    label: "Digital Maturity Assessment",
                    title: "Starting with Understanding the Current Digital Landscape",
                    paragraphs: [
                        "Before determining the next technology, organizations need to understand their current state. A Digital Maturity Assessment helps establish a baseline to examine capabilities, gaps, dependencies, and transformation opportunities.",
                        "Understanding the organization's current digital state through an evaluation of the technology landscape, business processes, digital capabilities, governance, and transformation priority areas.",
                    ],
                    subtitle: "Potential deliverables",
                    points: ["Current-state assessment", "Capability assessment", "Maturity perspective", "Gap identification", "Priority opportunities", "Executive findings"],
                    image: imgMaturity,
                },
                {
                    label: "Strategic IT Roadmap",
                    title: "Turning Priorities Into an Executable Roadmap",
                    paragraphs: [
                        "A strategic IT roadmap translates business priorities into a sequence of technology initiatives that can be planned, funded and executed.",
                        "Initiatives are organized based on business value, dependencies, readiness and resources so the organization can move forward in clear phases.",
                    ],
                    subtitle: "Potential deliverables",
                    points: ["Initiative portfolio", "Priority matrix", "Phased roadmap", "Dependency map", "Resource considerations", "Investment overview"],
                    image: imgRoadmap,
                },
                {
                    label: "Business & Technology Alignment",
                    title: "Connecting Business Needs With Technology Decisions",
                    paragraphs: [
                        "Technology investments deliver the most value when they are grounded in a clear business context.",
                        "We help business and IT stakeholders agree on objectives, required capabilities and technology priorities so that decisions support the same direction.",
                    ],
                    subtitle: "Potential deliverables",
                    points: ["Business objective map", "Capability requirements", "Technology priorities", "Stakeholder alignment", "Decision criteria"],
                    image: imgAlignment,
                },
                {
                    label: "Architecture",
                    title: "Designing a Target State That Supports the Strategy",
                    paragraphs: [
                        "Enterprise architecture describes how business capabilities, applications, data, integration and infrastructure need to evolve to support the strategy.",
                        "A clear target state helps organizations reduce complexity and make consistent technology decisions over time.",
                    ],
                    subtitle: "Potential deliverables",
                    points: ["Current architecture view", "Target architecture", "Application landscape", "Integration and data view", "Transition architecture"],
                    image: imgArchitecture,
                },
                {
                    label: "Governance Management",
                    title: "Keeping Transformation on Track",
                    paragraphs: [
                        "Transformation needs clear ownership, decision-making mechanisms and ways to measure progress.",
                        "We help establish governance structures and change management practices so initiatives stay aligned with business objectives during implementation.",
                    ],
                    subtitle: "Potential deliverables",
                    points: ["Governance structure", "Roles and responsibilities", "Decision framework", "Progress metrics", "Change management approach"],
                    image: imgGovernance,
                },
            ],
        },
        {
            type: "cards",
            heading: "split",
            columns: 3,
            title: "Structured Digital Business Consulting Approach",
            description: "Every transformation begins with a clear understanding of the current business and technology landscape. ASYST employs a phased approach to align business objectives, digital capabilities, technology priorities, and the execution roadmap.",
            items: [
                { tag: "Discovery", title: "Understand Current State", description: "We understand business objectives, operational challenges, stakeholder needs, existing processes, and the technology landscape to establish a clear context for transformation.", points: ["Business Context", "Stakeholder Map", "Process Overview", "Technology Landscape"] },
                { tag: "Assessment", title: "Identify Gaps & Opportunities", description: "We evaluate existing capabilities and identify gaps, dependencies, and opportunities for improvement to determine the most relevant areas for transformation.", points: ["Capability Assessment", "Gap Analysis", "Maturity Assessment", "Opportunity Areas"] },
                { tag: "Strategy", title: "Define Strategic Direction", description: "Assessment findings are translated into a strategic direction that links business priorities with the required digital and technology capabilities.", points: ["Digital Strategy", "Technology Direction", "Strategic Priorities", "Technology Alignment"] },
                { tag: "Design", title: "Create Target State", description: "We design a target state that describes how business capabilities, operating models, architecture, governance, and technology need to evolve to support the strategy", points: ["Operating Model Target", "Architecture Target", "Capability Model", "Governance Framework"] },
                { tag: "Roadmap", title: "Prioritize Initiatives", description: "Strategic initiatives are organized into a roadmap based on business priorities, dependencies, complexity, readiness, and sequencing to enable a phased transformation.", points: ["Roadmap", "Initiative Portfolio", "Priority Matrix", "Implementation Phases"] },
                { tag: "Execution Alignment", title: "Align Technology & Implementation", description: "We connect the strategic roadmap with implementation needs through relevant solutions, platforms, applications, integration, and operational capabilities.", points: ["Solution Direction", "Implementation Approach", "Execution Priorities", "Technology Alignment"] },
            ],
        },
    ],
    faq: {
        title: "FAQ about Digital Business Consulting",
        items: [
            { question: "What is Digital Business Consulting?", answer: "Digital Business Consulting helps organizations align business strategies, processes, digital capabilities, and technology to define an actionable transformation path." },
            { question: "When does a company need Digital Business Consulting?", answer: "When digital initiatives lack clear priorities, systems and processes become increasingly complex, technology investments are hard to link to business goals, or the organization is preparing a major transformation." },
            { question: "What is the difference between digital business consulting and software development?", answer: "Consulting focuses on defining what needs to change and why — strategy, priorities, architecture and roadmap. Software development focuses on building the applications that implement those decisions." },
            { question: "What is a Digital Maturity Assessment?", answer: "A Digital Maturity Assessment evaluates the organization's current technology landscape, business processes, digital capabilities and governance to establish a baseline and identify gaps and priority opportunities." },
            { question: "Does Asyst only provide recommendations?", answer: "No. Beyond recommendations and roadmaps, ASYST can support implementation through its solutions, platforms, application development, integration and managed services." },
            { question: "Can consultants be used for government organizations?", answer: "Yes. The consulting approach can be adapted to the needs, regulations and governance requirements of government agencies and ministries." },
        ],
    },
    cta: {
        title: "Do You Already Have a Digital Transformation Agenda? Let's Determine the Next Steps.",
        description: "Discuss your business challenges, technology landscape, or transformation initiatives with the ASYST team to determine the most relevant consulting needs.",
        button: "Talk to an Expert",
    },
};

export const DigitalBusinessConsultingConst = localized(digitalBusinessConsultingEn, {
    seo: {
        title: "Konsultasi Bisnis Digital | ASYST",
        description: "Konsultasi Bisnis Digital ASYST membantu organisasi memahami lanskap digitalnya, menetapkan prioritas transformasi, menyusun roadmap teknologi, dan menerjemahkan strategi menjadi implementasi.",
    },
    hero: {
        breadcrumb: "Konsultasi Bisnis Digital",
        title: "Konsultasi Bisnis Digital untuk Menjembatani Strategi Bisnis dan Teknologi",
        description: "Membantu organisasi memahami lanskap digital saat ini, menetapkan prioritas transformasi, menyusun roadmap teknologi, dan menerjemahkan strategi menjadi langkah implementasi yang terarah.",
        primaryButton: "Diskusikan Kebutuhan Anda",
        secondaryButton: "Lihat Cara Kerja Kami",
    },
    sections: [
        {
            title: "Apa Itu Konsultasi Bisnis Digital?",
            paragraphs: [
                "Konsultasi Bisnis Digital adalah layanan yang membantu organisasi menyelaraskan strategi bisnis, proses operasional, kapabilitas digital, dan investasi teknologi untuk mencapai arah transformasi yang jelas dan dapat dijalankan.",
                "Mencakup asesmen kondisi saat ini, identifikasi kesenjangan dan peluang, prioritisasi, penyusunan roadmap, desain target state, dan tata kelola, hingga dukungan implementasi.",
            ],
        },
        {
            title: "Seiring Teknologi Berkembang, Kejelasan Bisnis Harus Tetap Terjaga",
            paragraphs: ["Konsultasi dan transformasi bisnis digital bukan sekadar memilih teknologi baru. Organisasi perlu memahami masalah bisnis yang ingin diselesaikan, kesiapan teknologi yang ada, prioritas investasi, dan bagaimana perubahan tersebut diterapkan dalam operasional sehari-hari."],
            items: [
                { title: "Strategi Digital Belum Memiliki Prioritas", description: "Berbagai inisiatif digital dapat berjalan bersamaan tanpa prioritas yang jelas. Kami membantu memetakan peluang dan mengidentifikasi inisiatif yang paling relevan dengan tujuan bisnis." },
                { title: "Sistem dan Proses Semakin Kompleks", description: "Aplikasi, platform, data, dan proses yang berkembang secara terpisah dapat menciptakan kompleksitas. Konsultasi membantu organisasi memvisualisasikan hubungan antara proses bisnis, aplikasi, data, dan teknologi." },
                { title: "Sulit Menghubungkan Investasi Teknologi dengan Tujuan Bisnis", description: "Keputusan teknologi perlu berlandaskan konteks bisnis yang jelas. Kami membantu menyelaraskan kebutuhan bisnis dengan prioritas teknologi dan roadmap implementasi." },
                { title: "Organisasi Belum Siap Berubah", description: "Transformasi membutuhkan lebih dari technology deployment. Governance, operating model, stakeholder alignment, dan change management perlu dipertimbangkan sejak awal." },
            ],
        },
        {
            title: "Dari Tantangan Bisnis Menuju Arah Teknologi",
            items: [
                { title: "Strategi Digital", description: "Menentukan arah transformasi digital berdasarkan tujuan bisnis, prioritas organisasi, kebutuhan pelanggan, dan kapabilitas teknologi yang tersedia." },
                { title: "Strategi Teknologi", description: "Menilai peran teknologi dalam mendukung strategi bisnis dan menentukan kapabilitas teknologi prioritas yang perlu dikembangkan." },
                { title: "Transformasi Proses Bisnis", description: "Mengidentifikasi proses yang perlu disederhanakan, diintegrasikan, didigitalkan, atau dirancang ulang untuk mendukung model operasional yang lebih efektif." },
                { title: "Produk Digital & Inovasi", description: "Mengeksplorasi peluang produk dan layanan digital dengan menghubungkan kebutuhan pelanggan, model bisnis, kapabilitas teknologi, dan prioritas eksekusi." },
                { title: "Arsitektur Enterprise", description: "Membantu organisasi memahami hubungan antara kapabilitas bisnis, aplikasi, data, integrasi, infrastruktur, dan arsitektur teknologi" },
                { title: "Tata Kelola & Perubahan", description: "Membangun struktur tata kelola dan pendekatan manajemen perubahan agar transformasi memiliki kepemilikan yang jelas, kerangka pengambilan keputusan, dan implementasi yang terarah." },
            ],
        },
        {
            title: "Kapabilitas Kami untuk Transformasi Enterprise",
            items: [
                {
                    label: "Asesmen Kematangan Digital",
                    title: "Dimulai dengan Memahami Lanskap Digital Saat Ini",
                    paragraphs: [
                        "Sebelum menentukan teknologi berikutnya, organisasi perlu memahami kondisinya saat ini. Asesmen Kematangan Digital membantu menetapkan baseline untuk menelaah kapabilitas, kesenjangan, dependensi, dan peluang transformasi.",
                        "Memahami kondisi digital organisasi saat ini melalui evaluasi lanskap teknologi, proses bisnis, kapabilitas digital, tata kelola, dan area prioritas transformasi.",
                    ],
                    subtitle: "Potensi deliverable",
                    points: ["Asesmen kondisi saat ini", "Asesmen kapabilitas", "Perspektif kematangan", "Identifikasi kesenjangan", "Peluang prioritas", "Temuan untuk eksekutif"],
                },
                {
                    label: "Roadmap IT Strategis",
                    title: "Mengubah Prioritas Menjadi Roadmap yang Dapat Dijalankan",
                    paragraphs: [
                        "Roadmap IT strategis menerjemahkan prioritas bisnis menjadi rangkaian inisiatif teknologi yang dapat direncanakan, didanai, dan dijalankan.",
                        "Inisiatif disusun berdasarkan nilai bisnis, dependensi, kesiapan, dan sumber daya agar organisasi dapat bergerak maju dalam tahapan yang jelas.",
                    ],
                    subtitle: "Potensi deliverable",
                    points: ["Portofolio inisiatif", "Matriks prioritas", "Roadmap bertahap", "Peta dependensi", "Pertimbangan sumber daya", "Gambaran investasi"],
                },
                {
                    label: "Keselarasan Bisnis & Teknologi",
                    title: "Menghubungkan Kebutuhan Bisnis dengan Keputusan Teknologi",
                    paragraphs: [
                        "Investasi teknologi memberikan nilai terbesar ketika berlandaskan konteks bisnis yang jelas.",
                        "Kami membantu stakeholder bisnis dan IT menyepakati tujuan, kapabilitas yang dibutuhkan, dan prioritas teknologi agar setiap keputusan mendukung arah yang sama.",
                    ],
                    subtitle: "Potensi deliverable",
                    points: ["Peta tujuan bisnis", "Kebutuhan kapabilitas", "Prioritas teknologi", "Keselarasan stakeholder", "Kriteria keputusan"],
                },
                {
                    label: "Arsitektur",
                    title: "Merancang Target State yang Mendukung Strategi",
                    paragraphs: [
                        "Arsitektur enterprise menggambarkan bagaimana kapabilitas bisnis, aplikasi, data, integrasi, dan infrastruktur perlu berkembang untuk mendukung strategi.",
                        "Target state yang jelas membantu organisasi mengurangi kompleksitas dan mengambil keputusan teknologi yang konsisten dari waktu ke waktu.",
                    ],
                    subtitle: "Potensi deliverable",
                    points: ["Gambaran arsitektur saat ini", "Target arsitektur", "Lanskap aplikasi", "Gambaran integrasi dan data", "Arsitektur transisi"],
                },
                {
                    label: "Manajemen Tata Kelola",
                    title: "Menjaga Transformasi Tetap Terarah",
                    paragraphs: [
                        "Transformasi membutuhkan kepemilikan yang jelas, mekanisme pengambilan keputusan, dan cara mengukur kemajuan.",
                        "Kami membantu membangun struktur tata kelola dan praktik manajemen perubahan agar inisiatif tetap selaras dengan tujuan bisnis selama implementasi.",
                    ],
                    subtitle: "Potensi deliverable",
                    points: ["Struktur tata kelola", "Peran dan tanggung jawab", "Kerangka keputusan", "Metrik kemajuan", "Pendekatan manajemen perubahan"],
                },
            ],
        },
        {
            title: "Pendekatan Konsultasi Bisnis Digital yang Terstruktur",
            description: "Setiap transformasi dimulai dengan pemahaman yang jelas tentang lanskap bisnis dan teknologi saat ini. ASYST menggunakan pendekatan bertahap untuk menyelaraskan tujuan bisnis, kapabilitas digital, prioritas teknologi, dan roadmap eksekusi.",
            items: [
                { tag: "Discovery", title: "Memahami Kondisi Saat Ini", description: "Kami memahami tujuan bisnis, tantangan operasional, kebutuhan stakeholder, proses yang ada, dan lanskap teknologi untuk membangun konteks transformasi yang jelas.", points: ["Konteks Bisnis", "Peta Stakeholder", "Gambaran Proses", "Lanskap Teknologi"] },
                { tag: "Asesmen", title: "Identifikasi Kesenjangan & Peluang", description: "Kami mengevaluasi kapabilitas yang ada dan mengidentifikasi kesenjangan, dependensi, serta peluang perbaikan untuk menentukan area transformasi yang paling relevan.", points: ["Asesmen Kapabilitas", "Analisis Kesenjangan", "Asesmen Kematangan", "Area Peluang"] },
                { tag: "Strategi", title: "Menetapkan Arah Strategis", description: "Temuan asesmen diterjemahkan menjadi arah strategis yang menghubungkan prioritas bisnis dengan kapabilitas digital dan teknologi yang dibutuhkan.", points: ["Strategi Digital", "Arah Teknologi", "Prioritas Strategis", "Keselarasan Teknologi"] },
                { tag: "Desain", title: "Menyusun Target State", description: "Kami merancang target state yang menggambarkan bagaimana kapabilitas bisnis, model operasional, arsitektur, tata kelola, dan teknologi perlu berkembang untuk mendukung strategi", points: ["Target Model Operasional", "Target Arsitektur", "Model Kapabilitas", "Kerangka Tata Kelola"] },
                { tag: "Roadmap", title: "Memprioritaskan Inisiatif", description: "Inisiatif strategis disusun menjadi roadmap berdasarkan prioritas bisnis, dependensi, kompleksitas, kesiapan, dan urutan pelaksanaan untuk transformasi bertahap.", points: ["Roadmap", "Portofolio Inisiatif", "Matriks Prioritas", "Fase Implementasi"] },
                { tag: "Keselarasan Eksekusi", title: "Menyelaraskan Teknologi & Implementasi", description: "Kami menghubungkan roadmap strategis dengan kebutuhan implementasi melalui solusi, platform, aplikasi, integrasi, dan kapabilitas operasional yang relevan.", points: ["Arah Solusi", "Pendekatan Implementasi", "Prioritas Eksekusi", "Keselarasan Teknologi"] },
            ],
        },
    ],
    faq: {
        title: "FAQ tentang Konsultasi Bisnis Digital",
        items: [
            { question: "Apa itu Konsultasi Bisnis Digital?", answer: "Konsultasi Bisnis Digital membantu organisasi menyelaraskan strategi bisnis, proses, kapabilitas digital, dan teknologi untuk menetapkan jalur transformasi yang dapat dijalankan." },
            { question: "Kapan perusahaan membutuhkan Konsultasi Bisnis Digital?", answer: "Ketika inisiatif digital tidak memiliki prioritas yang jelas, sistem dan proses semakin kompleks, investasi teknologi sulit dikaitkan dengan tujuan bisnis, atau organisasi sedang mempersiapkan transformasi besar." },
            { question: "Apa perbedaan konsultasi bisnis digital dan pengembangan software?", answer: "Konsultasi berfokus pada apa yang perlu diubah dan mengapa — strategi, prioritas, arsitektur, dan roadmap. Pengembangan software berfokus pada pembangunan aplikasi yang mewujudkan keputusan tersebut." },
            { question: "Apa itu Asesmen Kematangan Digital?", answer: "Asesmen Kematangan Digital mengevaluasi lanskap teknologi, proses bisnis, kapabilitas digital, dan tata kelola organisasi saat ini untuk menetapkan baseline serta mengidentifikasi kesenjangan dan peluang prioritas." },
            { question: "Apakah Asyst hanya memberikan rekomendasi?", answer: "Tidak. Selain rekomendasi dan roadmap, ASYST dapat mendukung implementasi melalui solusi, platform, pengembangan aplikasi, integrasi, dan layanan terkelola." },
            { question: "Apakah layanan konsultasi dapat digunakan oleh organisasi pemerintah?", answer: "Ya. Pendekatan konsultasi dapat disesuaikan dengan kebutuhan, regulasi, dan persyaratan tata kelola instansi pemerintah dan kementerian." },
        ],
    },
    cta: {
        title: "Sudah Punya Agenda Transformasi Digital? Mari Tentukan Langkah Berikutnya.",
        description: "Diskusikan tantangan bisnis, lanskap teknologi, atau inisiatif transformasi Anda bersama tim ASYST untuk menentukan kebutuhan konsultasi yang paling relevan.",
        button: "Hubungi Ahli Kami",
    },
});
