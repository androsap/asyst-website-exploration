import {
    AccountBalanceOutlinedIcon, AccountTreeOutlinedIcon, AutorenewOutlinedIcon, BusinessCenterOutlinedIcon, CloudOutlinedIcon,
    DashboardCustomizeOutlinedIcon, FlightOutlinedIcon, HubOutlinedIcon, LocalShippingOutlinedIcon, ManageSearchOutlinedIcon,
    RouteOutlinedIcon, SwapHorizOutlinedIcon,
} from "components/ui/icons";
import { localized } from "shared/i18n";
import { SolutionPageContent } from "./solution-page.types";

import imgIntro from "assets/asyst/img/background/capabilities/modernize-legacy.webp";
import imgReplace from "assets/asyst/img/background/partner/partner-product.webp";
import imgRearchitect from "assets/asyst/img/background/partner/partner-integration.webp";
import imgRefactor from "assets/img/background/solutions/image-solutions-3.webp";
import imgRetire from "assets/asyst/img/background/career/env2.webp";
import imgRetain from "assets/asyst/img/background/story/story-8.webp";
import imgRehost from "assets/asyst/img/background/partner/partner-implementation.webp";
import imgApproach from "assets/img/background/solutions/image-solutions-2.webp";
import imgArchitecture from "assets/asyst/img/background/capabilities/connect-enterprise.webp";
import imgIntegration from "assets/asyst/img/background/capabilities/automate-operations.webp";
import imgSecurity from "assets/asyst/img/background/story/story-2-jpg.webp";
import imgOutcomes from "assets/asyst/img/background/partner/partner-services.webp";

const applicationModernizationEn: SolutionPageContent = {
    seo: {
        title: "Enterprise Application Modernization | ASYST",
        description: "Modernize legacy applications without disrupting established business processes. ASYST helps organizations assess application portfolios, define modernization strategies and update architectures and technology stacks.",
    },
    hero: {
        breadcrumb: "Application Modernization",
        eyebrow: "Application Modernization",
        title: "Enterprise Application Modernization for More Scalable, Secure, and Adaptive",
        description: "Modernize legacy applications without disrupting established business processes. We help organizations evaluate their application portfolios, define modernization strategies, and update architectures and technology stacks",
        primaryButton: "Discuss Your Needs",
        secondaryButton: "View Capabilities",
    },
    sections: [
        {
            type: "intro",
            title: "Application Modernization Begins with Understanding the Existing System",
            paragraphs: [
                "A legacy application does not necessarily mean an application that must be replaced. Many older systems continue to drive critical business processes, store historical data, interface with other enterprise systems, and remain integral to daily operations.",
                "Challenges arise when applications become difficult to develop or integrate, rely on increasingly scarce technologies or skill sets, or can no longer keep pace with business needs.",
                "Application modernization helps organizations determine which components should be retained, updated, integrated, migrated, or rebuilt, based on business value and the application's technical state.",
            ],
            image: imgIntro,
        },
        {
            type: "cards",
            heading: "split",
            columns: 3,
            title: "When Legacy Applications Become a Business Bottleneck",
            description: "Modernization is not merely about replacing technology. Its goal is to enable applications to better support business needs, operational changes, integration, security, scalability, and the development of new services.",
            items: [
                { title: "Technical debt continues to increase", description: "Legacy architecture and technology can cause even minor changes to require increasingly significant effort and risk." },
                { title: "Difficult to connect to the new system.", description: "Legacy applications often have limitations in providing APIs or modern integration mechanisms." },
                { title: "It is difficult to keep up with the growing workload.", description: "Legacy architecture can limit an application's ability to handle increases in transactions, users, or operational demands." },
                { title: "Security and compliance are becoming increasingly complex.", description: "Legacy components that no longer receive support can increase maintenance and security challenges." },
                { title: "Internal innovation is moving more slowly", description: "Reliance on legacy architecture and technology stacks can prolong development cycles." },
                { title: "The user experience no longer meets needs.", description: "Outdated interfaces and workflows can create complex processes for both employees and customers." },
            ],
        },
        {
            type: "matrix",
            title: "Asyst Application Modernization Capability",
            items: [
                { icon: ManageSearchOutlinedIcon, title: "Application Assessment", description: "Evaluate the application portfolio, architecture, technology stack, dependencies, data.", points: ["Application assessment", "Dependency mapping", "Technical assessment", "Modernization opportunity map"] },
                { icon: RouteOutlinedIcon, title: "Modernization Strategy", description: "Determining the modernization approach based on business priority, technical complexity etc", points: ["Modernization strategy", "Application prioritization", "Target state", "Modernization roadmap"] },
                { icon: SwapHorizOutlinedIcon, title: "Replatforming", description: "Migrating applications to a modern platform with controlled changes, while retaining the business logic", points: ["Platform assessment", "Migration plan", "Environment preparation", "Migration execution"] },
                { icon: AutorenewOutlinedIcon, title: "Refactoring", description: "Gradually improving the code structure and application architecture to enhance", points: ["Code assessment", "Refactoring plan", "Architecture improvement", "Technical debt reduction plan"] },
                { icon: AccountTreeOutlinedIcon, title: "Re-architecture", description: "Modifying the application architecture to support scalability, integration, and future development", points: ["Target architecture", "Architecture blueprint", "Service decomposition", "API architecture"] },
                { icon: CloudOutlinedIcon, title: "Cloud Modernization", description: "Preparing applications to run on cloud, hybrid, or modern infrastructure", points: ["Cloud readiness assessment", "Cloud architecture", "Migration strategy", "Deployment architecture"] },
                { icon: HubOutlinedIcon, title: "Integration Modernization", description: "Connecting legacy applications with enterprise applications, APIs, data platforms, and digital channels.", points: ["Integration architecture", "API strategy", "Interface modernization", "System dependency mapping"] },
                { icon: DashboardCustomizeOutlinedIcon, title: "UI/UX Modernization", description: "Updating the user experience of a legacy application without losing the business workflows", points: ["UX assessment", "User flow redesign", "Interface modernization", "Design system / UI specification"] },
            ],
        },
        {
            type: "carousel",
            title: "Not All Applications Need to Be Rebuilt",
            description: "Each application has distinct conditions, dependencies, business value, and risk levels. Therefore, a modernization strategy must be determined based on evidence from the application portfolio, rather than applying a one-size-fits-all approach to every system.",
            items: [
                { title: "Replace", description: "Replacing an application with a more suitable platform or solution when modernization is no longer the most effective", image: imgReplace },
                { title: "Re-architect", description: "Fundamentally transforming the architecture to meet needs regarding scalability, integration, and future", image: imgRearchitect },
                { title: "Refactor", description: "Refactoring the application structure to make it more maintainable and ready for further development.", image: imgRefactor },
                { title: "Retire", description: "Decommissioning applications that no longer provide business value or whose functions can be replaced by other systems.", image: imgRetire },
                { title: "Retain", description: "Keeping applications that remain stable and valuable, while improving their monitoring, support and integration.", image: imgRetain },
                { title: "Rehost", description: "Moving applications to new infrastructure with minimal changes to quickly reduce infrastructure risk.", image: imgRehost },
            ],
        },
        {
            type: "steps",
            title: "A Measured Modernization Approach",
            description: "Modernization is carried out in stages so that the organization can manage dependencies, the risks associated with change, and the impact on operations.",
            image: imgApproach,
            items: [
                { label: "Discover", description: "Understand application portfolio, stakeholders, business processes, technology stack and dependencies" },
                { label: "Assess", description: "Evaluate business value, technical condition, risks, and modernization readiness of each application" },
                { label: "Prioritize", description: "Determine which applications to modernize first based on business impact, complexity, and dependencies" },
                { label: "Architect", description: "Design the target architecture, integration patterns, data approach, and transition path" },
                { label: "Modernize", description: "Execute replatforming, refactoring, re-architecture, or integration work in controlled increments" },
                { label: "Validate", description: "Test functionality, performance, security, and integration to ensure business processes keep running" },
                { label: "Operate & Optimize", description: "Support the modernized applications in operation and continuously improve them based on usage and performance" },
            ],
        },
        {
            type: "tabs",
            variant: "pill",
            title: "From Legacy Applications to More Adaptive Enterprise Applications",
            items: [
                {
                    label: "Architecture",
                    title: "Modernization Connected to the Enterprise Ecosystem",
                    paragraphs: ["Application modernization does not stand alone. Enterprise applications usually interact with databases, ERP, CRM, integration platforms, external services, data platforms and various digital channels. Therefore, modernization needs to consider architecture and dependencies as a whole"],
                    image: imgArchitecture,
                },
                {
                    label: "Integration & Data",
                    title: "Applications That Exchange Data More Easily",
                    paragraphs: ["Modernized applications expose APIs and integration interfaces that make it easier to share data with other enterprise systems, partners and digital channels, while keeping data consistent across the landscape."],
                    image: imgIntegration,
                },
                {
                    label: "Security & Operational",
                    title: "More Secure and Easier to Operate",
                    paragraphs: ["Replacing unsupported components, improving access control and adding monitoring helps reduce security risk and makes applications easier to maintain, support and scale in daily operations."],
                    image: imgSecurity,
                },
                {
                    label: "Business Outcomes",
                    title: "Technology That Keeps Pace With the Business",
                    paragraphs: ["Modernization shortens development cycles, improves user experience and makes it easier to launch new services, so applications support business growth instead of slowing it down."],
                    image: imgOutcomes,
                },
            ],
        },
        {
            type: "cards",
            heading: "center",
            columns: 4,
            soft: true,
            title: "Application Modernization for Organizations with Complex Systems",
            items: [
                { icon: LocalShippingOutlinedIcon, title: "Transportation & Logistics", description: "Modernization of applications supporting operational processes, transactions, and data exchange." },
                { icon: FlightOutlinedIcon, title: "Aviation and related sectors", description: "Modernization of the application ecosystem, requiring integration, reliability, and operational" },
                { icon: AccountBalanceOutlinedIcon, title: "Government & Ministries", description: "Modernization of systems supporting public services, and operational workflows" },
                { icon: BusinessCenterOutlinedIcon, title: "Business Owners and IT Company", description: "Linking technology modernization with scalability, operational efficiency, and business growth." },
            ],
        },
    ],
    faq: {
        title: "FAQ about Application Modernization",
        items: [
            { question: "What is application modernization?", answer: "Application modernization is the process of updating existing or legacy applications to better align with current architectural, technological, security, integration, scalability, and business requirements." },
            { question: "Does application modernization mean rebuilding applications?", answer: "Not always. Depending on the application's condition and business value, modernization can mean retaining, rehosting, replatforming, refactoring, re-architecting, replacing or retiring an application." },
            { question: "When does a company need to undertake application modernization?", answer: "When applications become difficult to change or integrate, rely on unsupported technology, struggle with growing workloads, or no longer support business needs and user expectations." },
            { question: "Should legacy applications be migrated to the cloud?", answer: "Not necessarily. Cloud readiness should be assessed per application. Some applications benefit from cloud or hybrid infrastructure, while others are better kept on existing infrastructure or modernized in other ways." },
            { question: "What is the difference between application modernization and application migration?", answer: "Migration moves an application to a different environment, often with minimal change. Modernization is broader and can include changes to architecture, code, integration, data and user experience." },
            { question: "How long does the application modernization process take?", answer: "It depends on the number of applications, their complexity and dependencies, and the chosen approach. Modernization is usually carried out in phases so that business value can be delivered gradually." },
        ],
    },
    cta: {
        title: "Ready to Determine Your Application Modernization Strategy?",
        description: "Ranging from understanding the current state of applications and setting priorities to developing a modernization roadmap aligned with your organization's business needs and technology landscape.",
        button: "Consult on Application Modernization",
    },
};

export const ApplicationModernizationConst = localized(applicationModernizationEn, {
    seo: {
        title: "Modernisasi Aplikasi Enterprise | ASYST",
        description: "Modernisasi aplikasi lama tanpa mengganggu proses bisnis yang sudah berjalan. ASYST membantu organisasi menilai portofolio aplikasi, menetapkan strategi modernisasi, serta memperbarui arsitektur dan technology stack.",
    },
    hero: {
        breadcrumb: "Modernisasi Aplikasi",
        eyebrow: "Modernisasi Aplikasi",
        title: "Modernisasi Aplikasi Enterprise yang Lebih Skalabel, Aman, dan Adaptif",
        description: "Modernisasi aplikasi lama tanpa mengganggu proses bisnis yang sudah berjalan. Kami membantu organisasi mengevaluasi portofolio aplikasi, menetapkan strategi modernisasi, serta memperbarui arsitektur dan technology stack",
        primaryButton: "Diskusikan Kebutuhan Anda",
        secondaryButton: "Lihat Kapabilitas",
    },
    sections: [
        {
            title: "Modernisasi Aplikasi Dimulai dengan Memahami Sistem yang Ada",
            paragraphs: [
                "Aplikasi lama tidak selalu berarti aplikasi yang harus diganti. Banyak sistem lama yang masih menjalankan proses bisnis kritis, menyimpan data historis, terhubung dengan sistem enterprise lain, dan tetap menjadi bagian penting dari operasional harian.",
                "Tantangan muncul ketika aplikasi menjadi sulit dikembangkan atau diintegrasikan, bergantung pada teknologi atau keahlian yang semakin langka, atau tidak lagi mampu mengikuti kebutuhan bisnis.",
                "Modernisasi aplikasi membantu organisasi menentukan komponen mana yang perlu dipertahankan, diperbarui, diintegrasikan, dimigrasikan, atau dibangun ulang berdasarkan nilai bisnis dan kondisi teknis aplikasi.",
            ],
        },
        {
            title: "Ketika Aplikasi Lama Menjadi Hambatan Bisnis",
            description: "Modernisasi bukan sekadar mengganti teknologi. Tujuannya adalah agar aplikasi dapat lebih mendukung kebutuhan bisnis, perubahan operasional, integrasi, keamanan, skalabilitas, dan pengembangan layanan baru.",
            items: [
                { title: "Technical debt terus bertambah", description: "Arsitektur dan teknologi lama dapat membuat perubahan kecil pun membutuhkan upaya dan risiko yang semakin besar." },
                { title: "Sulit terhubung dengan sistem baru", description: "Aplikasi lama sering memiliki keterbatasan dalam menyediakan API atau mekanisme integrasi modern." },
                { title: "Sulit mengikuti beban kerja yang terus bertambah", description: "Arsitektur lama dapat membatasi kemampuan aplikasi menangani peningkatan transaksi, pengguna, atau kebutuhan operasional." },
                { title: "Keamanan dan kepatuhan semakin kompleks", description: "Komponen lama yang tidak lagi mendapat dukungan dapat meningkatkan tantangan pemeliharaan dan keamanan." },
                { title: "Inovasi internal bergerak lebih lambat", description: "Ketergantungan pada arsitektur dan technology stack lama dapat memperpanjang siklus pengembangan." },
                { title: "Pengalaman pengguna tidak lagi memadai", description: "Antarmuka dan alur kerja yang usang dapat menciptakan proses yang rumit bagi karyawan maupun pelanggan." },
            ],
        },
        {
            title: "Kapabilitas Modernisasi Aplikasi Asyst",
            items: [
                { title: "Asesmen Aplikasi", description: "Mengevaluasi portofolio aplikasi, arsitektur, technology stack, dependensi, dan data.", points: ["Asesmen aplikasi", "Pemetaan dependensi", "Asesmen teknis", "Peta peluang modernisasi"] },
                { title: "Strategi Modernisasi", description: "Menentukan pendekatan modernisasi berdasarkan prioritas bisnis, kompleksitas teknis, dan faktor lainnya", points: ["Strategi modernisasi", "Prioritisasi aplikasi", "Target state", "Roadmap modernisasi"] },
                { title: "Replatforming", description: "Memigrasikan aplikasi ke platform modern dengan perubahan terkendali sambil mempertahankan logika bisnis", points: ["Asesmen platform", "Rencana migrasi", "Persiapan environment", "Eksekusi migrasi"] },
                { title: "Refactoring", description: "Memperbaiki struktur kode dan arsitektur aplikasi secara bertahap untuk meningkatkan kualitasnya", points: ["Asesmen kode", "Rencana refactoring", "Perbaikan arsitektur", "Rencana pengurangan technical debt"] },
                { title: "Re-arsitektur", description: "Mengubah arsitektur aplikasi untuk mendukung skalabilitas, integrasi, dan pengembangan di masa depan", points: ["Target arsitektur", "Blueprint arsitektur", "Dekomposisi layanan", "Arsitektur API"] },
                { title: "Modernisasi Cloud", description: "Menyiapkan aplikasi agar dapat berjalan di cloud, hybrid, atau infrastruktur modern", points: ["Asesmen kesiapan cloud", "Arsitektur cloud", "Strategi migrasi", "Arsitektur deployment"] },
                { title: "Modernisasi Integrasi", description: "Menghubungkan aplikasi lama dengan aplikasi enterprise, API, platform data, dan kanal digital.", points: ["Arsitektur integrasi", "Strategi API", "Modernisasi antarmuka", "Pemetaan dependensi sistem"] },
                { title: "Modernisasi UI/UX", description: "Memperbarui pengalaman pengguna aplikasi lama tanpa kehilangan alur kerja bisnis", points: ["Asesmen UX", "Desain ulang alur pengguna", "Modernisasi antarmuka", "Design system / spesifikasi UI"] },
            ],
        },
        {
            title: "Tidak Semua Aplikasi Perlu Dibangun Ulang",
            description: "Setiap aplikasi memiliki kondisi, dependensi, nilai bisnis, dan tingkat risiko yang berbeda. Karena itu, strategi modernisasi harus ditentukan berdasarkan bukti dari portofolio aplikasi, bukan dengan menerapkan satu pendekatan yang sama untuk semua sistem.",
            items: [
                { title: "Replace", description: "Mengganti aplikasi dengan platform atau solusi yang lebih sesuai ketika modernisasi tidak lagi menjadi pilihan paling efektif" },
                { title: "Re-architect", description: "Mentransformasi arsitektur secara mendasar untuk memenuhi kebutuhan skalabilitas, integrasi, dan pengembangan ke depan" },
                { title: "Refactor", description: "Merapikan struktur aplikasi agar lebih mudah dirawat dan siap dikembangkan lebih lanjut." },
                { title: "Retire", description: "Menghentikan aplikasi yang tidak lagi memberikan nilai bisnis atau fungsinya dapat digantikan sistem lain." },
                { title: "Retain", description: "Mempertahankan aplikasi yang masih stabil dan bernilai, sambil meningkatkan pemantauan, dukungan, dan integrasinya." },
                { title: "Rehost", description: "Memindahkan aplikasi ke infrastruktur baru dengan perubahan minimal untuk mengurangi risiko infrastruktur dengan cepat." },
            ],
        },
        {
            title: "Pendekatan Modernisasi yang Terukur",
            description: "Modernisasi dilakukan secara bertahap agar organisasi dapat mengelola dependensi, risiko perubahan, dan dampaknya terhadap operasional.",
            items: [
                { label: "Discover", description: "Memahami portofolio aplikasi, stakeholder, proses bisnis, technology stack, dan dependensi" },
                { label: "Assess", description: "Mengevaluasi nilai bisnis, kondisi teknis, risiko, dan kesiapan modernisasi setiap aplikasi" },
                { label: "Prioritize", description: "Menentukan aplikasi yang dimodernisasi lebih dulu berdasarkan dampak bisnis, kompleksitas, dan dependensi" },
                { label: "Architect", description: "Merancang target arsitektur, pola integrasi, pendekatan data, dan jalur transisi" },
                { label: "Modernize", description: "Menjalankan replatforming, refactoring, re-arsitektur, atau integrasi secara bertahap dan terkendali" },
                { label: "Validate", description: "Menguji fungsionalitas, performa, keamanan, dan integrasi untuk memastikan proses bisnis tetap berjalan" },
                { label: "Operate & Optimize", description: "Mendukung operasional aplikasi yang telah dimodernisasi dan terus menyempurnakannya berdasarkan penggunaan dan performa" },
            ],
        },
        {
            title: "Dari Aplikasi Lama Menuju Aplikasi Enterprise yang Lebih Adaptif",
            items: [
                {
                    label: "Arsitektur",
                    title: "Modernisasi yang Terhubung dengan Ekosistem Enterprise",
                    paragraphs: ["Modernisasi aplikasi tidak berdiri sendiri. Aplikasi enterprise umumnya berinteraksi dengan database, ERP, CRM, platform integrasi, layanan eksternal, platform data, dan berbagai kanal digital. Karena itu, modernisasi perlu mempertimbangkan arsitektur dan dependensi secara menyeluruh"],
                },
                {
                    label: "Integrasi & Data",
                    title: "Aplikasi yang Lebih Mudah Bertukar Data",
                    paragraphs: ["Aplikasi yang telah dimodernisasi menyediakan API dan antarmuka integrasi yang memudahkan pertukaran data dengan sistem enterprise lain, mitra, dan kanal digital, sambil menjaga konsistensi data di seluruh lanskap."],
                },
                {
                    label: "Keamanan & Operasional",
                    title: "Lebih Aman dan Lebih Mudah Dioperasikan",
                    paragraphs: ["Mengganti komponen yang tidak lagi didukung, memperbaiki kontrol akses, dan menambahkan pemantauan membantu mengurangi risiko keamanan serta membuat aplikasi lebih mudah dirawat, didukung, dan dikembangkan dalam operasional harian."],
                },
                {
                    label: "Hasil Bisnis",
                    title: "Teknologi yang Mampu Mengikuti Laju Bisnis",
                    paragraphs: ["Modernisasi mempersingkat siklus pengembangan, meningkatkan pengalaman pengguna, dan memudahkan peluncuran layanan baru, sehingga aplikasi mendukung pertumbuhan bisnis alih-alih menghambatnya."],
                },
            ],
        },
        {
            title: "Modernisasi Aplikasi untuk Organisasi dengan Sistem yang Kompleks",
            items: [
                { title: "Transportasi & Logistik", description: "Modernisasi aplikasi yang mendukung proses operasional, transaksi, dan pertukaran data." },
                { title: "Penerbangan dan sektor terkait", description: "Modernisasi ekosistem aplikasi yang membutuhkan integrasi, keandalan, dan kesinambungan operasional" },
                { title: "Pemerintahan & Kementerian", description: "Modernisasi sistem yang mendukung layanan publik dan alur kerja operasional" },
                { title: "Pemilik Bisnis dan Perusahaan IT", description: "Menghubungkan modernisasi teknologi dengan skalabilitas, efisiensi operasional, dan pertumbuhan bisnis." },
            ],
        },
    ],
    faq: {
        title: "FAQ tentang Modernisasi Aplikasi",
        items: [
            { question: "Apa itu modernisasi aplikasi?", answer: "Modernisasi aplikasi adalah proses memperbarui aplikasi yang ada atau aplikasi lama agar lebih selaras dengan kebutuhan arsitektur, teknologi, keamanan, integrasi, skalabilitas, dan bisnis saat ini." },
            { question: "Apakah modernisasi aplikasi berarti membangun ulang aplikasi?", answer: "Tidak selalu. Tergantung kondisi dan nilai bisnis aplikasi, modernisasi dapat berarti mempertahankan, rehost, replatform, refactor, re-arsitektur, mengganti, atau menghentikan aplikasi." },
            { question: "Kapan perusahaan perlu melakukan modernisasi aplikasi?", answer: "Ketika aplikasi sulit diubah atau diintegrasikan, bergantung pada teknologi yang tidak lagi didukung, kesulitan menangani beban kerja yang bertambah, atau tidak lagi mendukung kebutuhan bisnis dan ekspektasi pengguna." },
            { question: "Apakah aplikasi lama harus dimigrasikan ke cloud?", answer: "Belum tentu. Kesiapan cloud perlu dinilai per aplikasi. Sebagian aplikasi diuntungkan oleh infrastruktur cloud atau hybrid, sementara yang lain lebih baik tetap di infrastruktur yang ada atau dimodernisasi dengan cara lain." },
            { question: "Apa perbedaan modernisasi aplikasi dan migrasi aplikasi?", answer: "Migrasi memindahkan aplikasi ke environment lain, sering kali dengan perubahan minimal. Modernisasi lebih luas dan dapat mencakup perubahan arsitektur, kode, integrasi, data, dan pengalaman pengguna." },
            { question: "Berapa lama proses modernisasi aplikasi?", answer: "Tergantung jumlah aplikasi, kompleksitas dan dependensinya, serta pendekatan yang dipilih. Modernisasi umumnya dilakukan bertahap agar nilai bisnis dapat dirasakan secara bertahap pula." },
        ],
    },
    cta: {
        title: "Siap Menentukan Strategi Modernisasi Aplikasi Anda?",
        description: "Mulai dari memahami kondisi aplikasi saat ini dan menetapkan prioritas hingga menyusun roadmap modernisasi yang selaras dengan kebutuhan bisnis dan lanskap teknologi organisasi Anda.",
        button: "Konsultasikan Modernisasi Aplikasi",
    },
});
