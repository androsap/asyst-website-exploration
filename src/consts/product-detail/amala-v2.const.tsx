import { BusinessCenterOutlinedIcon, HandshakeOutlinedIcon, HubOutlinedIcon, WorkspacePremiumOutlinedIcon } from "components/ui/icons";

import imgHero from "assets/asyst/img/background/services-solutions/amala1.webp";
import imgAdmin from "assets/asyst/img/background/product/amala/device-A.webp";
import imgLaptop from "assets/asyst/img/background/services-solutions/amala2.webp";
import imgPlatform from "assets/asyst/img/background/product/athena/detail/integration.webp";
import imgArchitecture from "assets/asyst/img/background/product/athena/detail/diagram.webp";
import { EnterpriseProductContent } from "./enterprise.types";
import { localized } from "shared/i18n";

const amalaV2DetailEn: EnterpriseProductContent = {
    seo: {
        title: "Loyalty Management System for Enterprises | ASYST",
        description: "ASYST Loyalty Management System helps companies run loyalty programs that connect members, points, tiers, rewards, campaigns, partners and analytics in one enterprise platform.",
    },
    hero: {
        breadcrumb: "Loyalty Management System",
        title: "Run Loyalty Programs as a Connected Business Strategy",
        description: "Manage members, points, tiers, rewards, campaigns and partners in one enterprise platform that turns customer engagement into measurable business results.",
        primaryButton: "Talk to an Expert",
        secondaryButton: "Explore Loyalty Platform",
        image: imgHero,
        imageAlt: "ASYST loyalty management system on laptop and mobile",
    },
    sections: [
        {
            type: "challenge",
            title: "Loyalty Is About More Than Collecting Points",
            paragraphs: [
                "As loyalty programs grow to involve more members, partners, channels, campaigns and business rules, running them becomes increasingly complex. The challenge goes beyond simply giving rewards.",
            ],
            lead: "Organizations also need to manage:",
            items: [
                { title: "Members", description: "How can member data stay complete and consistent across every channel?" },
                { title: "Earning", description: "How can points be calculated correctly for each transaction and partner?" },
                { title: "Tiers", description: "How can tier rules and benefits be applied fairly and automatically?" },
                { title: "Rewards", description: "How can redemption run smoothly while keeping the cost of the program under control?" },
                { title: "Partners", description: "How can partner earning and redemption be settled accurately?" },
                { title: "Insights", description: "How can management measure the real business impact of the program?" },
            ],
        },
        {
            type: "overview",
            title: "What Is a Loyalty Management System?",
            paragraphs: [
                "A Loyalty Management System is a platform that helps companies manage loyalty programs centrally, including members, points, tiers, rewards, campaigns, partners, engagement and analytics.",
            ],
            image: imgAdmin,
            cards: [
                { title: "Member", description: "Joins the program, earns points and redeems rewards." },
                { title: "Program Team", description: "Designs rules, tiers, campaigns and rewards." },
                { title: "Partner", description: "Offers earning and redemption opportunities to members." },
                { title: "Finance", description: "Manages point liability, costs and partner settlement." },
                { title: "Management", description: "Monitors program performance and business impact." },
            ],
        },
        {
            type: "timeline",
            layout: "band",
            title: "From Member Activity to Business Insights",
            description: "ASYST Loyalty Management can be understood through five main stages.",
            image: imgPlatform,
            items: [
                { title: "Enrollment", description: "Customers join the program through digital channels, partners or service points." },
                { title: "Earning", description: "Members collect points from transactions and activities based on configured rules." },
                { title: "Tiering", description: "Member status is evaluated automatically to give the right benefits to the right members." },
                { title: "Redemption", description: "Members exchange points for rewards, vouchers or partner offers." },
                { title: "Insights", description: "Program data shows member behavior, campaign results and the value the program creates." },
            ],
        },
        {
            type: "capabilities",
            heading: "top",
            mediaFirst: true,
            title: "Built to Run Programs, Not Just Store Points",
            description: "The Loyalty Management System is designed from a multi-role perspective, bringing together the needs of members, program teams, partners and management in one connected platform.",
            image: imgLaptop,
            items: [
                { title: "Member Management", description: "Manage member registration, profiles, preferences and status in one central database.", highlight: "Every channel works from the same member record." },
                { title: "Points Engine", description: "Configure earning and burning rules by product, channel, partner, period and campaign.", highlight: "Points are calculated consistently and transparently." },
                { title: "Tier Management", description: "Define tier levels, qualification rules and benefits, and evaluate them automatically.", highlight: "Members receive the right benefits at the right time." },
                { title: "Rewards and Redemption", description: "Manage the reward catalog, vouchers and partner offers, with stock and cost control.", highlight: "Redemption is easy for members and controlled for the business." },
                { title: "Campaigns and Promotions", description: "Launch targeted campaigns, bonus points and promotions for specific segments.", highlight: "Campaigns reach the right members and can be measured." },
                { title: "Partner Management", description: "Connect partners for earning and redemption, and manage their transactions and settlement.", highlight: "The program can grow through a wider partner ecosystem." },
                { title: "Analytics and Reporting", description: "Monitor membership, engagement, point liability and campaign performance in dashboards.", highlight: "Decisions are based on complete program data." },
            ],
        },
        {
            type: "architecture",
            title: "One Platform for Diverse Business Needs and Loyalty Scenarios",
            tabs: [
                {
                    label: "Architecture",
                    title: "Loyalty Management in a Digital Enterprise Architecture",
                    paragraphs: [
                        "Loyalty programs should not stop at vanity metrics such as member counts. The ASYST Loyalty Management System can be configured to help companies monitor indicators that are more closely tied to business outcomes.",
                    ],
                    groups: [
                        { title: "Users", items: ["Member", "Program Team", "Partner", "Finance", "Management"] },
                        { title: "Loyalty Management", items: ["Members", "Points", "Tiers", "Rewards", "Campaigns", "Partners"] },
                        { title: "Integration", items: ["API / Integration Layer", "Workflow", "Data Exchange", "Enterprise Services"] },
                        { title: "Enterprise Systems", items: ["CRM", "POS and Booking", "Finance", "ERP", "Data Platform"] },
                        { title: "Business Intelligence", items: ["Member Analytics", "Campaign Performance", "Point Liability", "Management Reporting"] },
                    ],
                    image: imgArchitecture,
                },
                {
                    label: "Integration",
                    title: "Connected with Your Customer-Facing Systems",
                    paragraphs: ["Member activity comes from many systems. The platform connects them so points and benefits are always up to date."],
                    points: ["Booking, POS and e-commerce", "CRM and customer data platforms", "Mobile apps and websites", "Partner systems", "Finance and ERP"],
                    image: imgPlatform,
                },
                {
                    label: "Product Capability",
                    title: "Loyalty Capabilities Ready to Configure",
                    paragraphs: ["Core loyalty modules can be configured to match each company's program design and business rules."],
                    points: ["Earning and burning rules", "Multi-tier membership", "Reward catalog and vouchers", "Campaign management", "Partner settlement"],
                    image: imgAdmin,
                },
                {
                    label: "Business Scenarios",
                    title: "Support for Different Loyalty Scenarios",
                    paragraphs: ["The same platform can support many types of programs and industries."],
                    points: ["Airline frequent flyer programs", "Retail and hospitality rewards", "Coalition and co-branded programs", "Employee and B2B loyalty", "Multi-brand programs"],
                    image: imgLaptop,
                },
                {
                    label: "Business Data",
                    title: "Loyalty Data That Supports Business Decisions",
                    paragraphs: ["Every enrollment, transaction, redemption and campaign becomes data the business can act on."],
                    points: ["Active member rate", "Repeat purchase and retention", "Point issuance and liability", "Campaign return on investment", "Partner contribution"],
                    image: imgArchitecture,
                },
            ],
        },
        {
            type: "expertise",
            title: "Enterprise Technology Capability Behind Your Loyalty Strategy",
            description: "Choosing a loyalty platform is about more than selecting software. Companies need a partner that understands how a platform must work within a complex technology ecosystem.",
            items: [
                { icon: BusinessCenterOutlinedIcon, title: "Enterprise Capability", description: "ASYST builds and delivers a wide range of enterprise solutions as part of its digital product and solution portfolio." },
                { icon: HubOutlinedIcon, title: "Integration", description: "Loyalty programs can be designed as part of the enterprise ecosystem, so they are not isolated from other systems." },
                { icon: WorkspacePremiumOutlinedIcon, title: "Experience", description: "The ASYST approach combines product capability, technology, integration and an understanding of business needs." },
                { icon: HandshakeOutlinedIcon, title: "Long-Term Partnership", description: "The program needs to keep evolving with changes in customer behavior, business strategy, technology and the market." },
            ],
        },
    ],
    faq: {
        title: "FAQ about Loyalty Management",
        items: [
            { question: "What is a Loyalty Management System?", answer: "A Loyalty Management System is a platform that helps companies manage loyalty programs centrally, including members, points, tiers, rewards, campaigns, engagement and analytics." },
            { question: "What is the difference between a Loyalty Management System and a standard loyalty app?", answer: "A loyalty app is the channel members use. A Loyalty Management System is the platform behind it, managing rules, points, tiers, rewards, partners, integrations and analytics across every channel." },
            { question: "Can the ASYST Loyalty Management System be integrated with existing systems?", answer: "Yes. The platform can integrate with booking, POS, CRM, e-commerce, partner, finance and ERP systems through APIs and an integration layer." },
            { question: "Is loyalty only for retail companies?", answer: "No. Loyalty programs are used by airlines, travel, hospitality, banking, telecommunications, retail and B2B companies to build long-term customer relationships." },
            { question: "Can the platform support points and rewards?", answer: "Yes. Points earning and redemption, tier benefits, reward catalogs, vouchers and partner offers can all be configured in the platform." },
            { question: "Can a company create its own loyalty program?", answer: "Yes. Companies can design their own program structure, rules, tiers and rewards, and ASYST can help with program setup, integration and implementation." },
        ],
    },
    cta: {
        title: "Build a Loyalty Platform Around Your Business",
        description: "Every business has a unique customer journey, technology ecosystem and loyalty strategy. Discuss your needs with ASYST to find the right approach for product, integration, architecture and implementation.",
        button: "Talk to an Expert",
    },
};

export const AmalaV2DetailConst = localized(amalaV2DetailEn, {
    seo: {
        title: "Loyalty Management System untuk Enterprise | ASYST",
        description: "Loyalty Management System ASYST membantu perusahaan menjalankan program loyalitas yang menghubungkan member, poin, tier, reward, kampanye, mitra, dan analitik dalam satu platform enterprise.",
    },
    hero: {
        title: "Jalankan Program Loyalitas sebagai Strategi Bisnis yang Terhubung",
        description: "Kelola member, poin, tier, reward, kampanye, dan mitra dalam satu platform enterprise yang mengubah keterlibatan pelanggan menjadi hasil bisnis yang terukur.",
        primaryButton: "Hubungi Ahli Kami",
        secondaryButton: "Jelajahi Platform Loyalitas",
        imageAlt: "Loyalty management system ASYST di laptop dan ponsel",
    },
    sections: [
        {
            title: "Loyalitas Lebih dari Sekadar Mengumpulkan Poin",
            paragraphs: [
                "Ketika program loyalitas berkembang dan melibatkan lebih banyak member, mitra, kanal, kampanye, dan aturan bisnis, pengelolaannya menjadi semakin kompleks. Tantangannya bukan sekadar memberikan reward.",
            ],
            lead: "Organisasi juga perlu mengelola:",
            items: [
                { title: "Member", description: "Bagaimana data member tetap lengkap dan konsisten di setiap kanal?" },
                { title: "Perolehan Poin", description: "Bagaimana poin dihitung dengan benar untuk setiap transaksi dan mitra?" },
                { title: "Tier", description: "Bagaimana aturan dan manfaat tier diterapkan secara adil dan otomatis?" },
                { title: "Reward", description: "Bagaimana penukaran berjalan lancar sambil menjaga biaya program tetap terkendali?" },
                { title: "Mitra", description: "Bagaimana perolehan dan penukaran poin di mitra diselesaikan secara akurat?" },
                { title: "Insight", description: "Bagaimana manajemen mengukur dampak bisnis program yang sesungguhnya?" },
            ],
        },
        {
            title: "Apa Itu Loyalty Management System?",
            paragraphs: [
                "Loyalty Management System adalah platform yang membantu perusahaan mengelola program loyalitas secara terpusat, termasuk member, poin, tier, reward, kampanye, mitra, keterlibatan, dan analitik.",
            ],
            cards: [
                { title: "Member", description: "Bergabung dalam program, mengumpulkan poin, dan menukarkan reward." },
                { title: "Tim Program", description: "Merancang aturan, tier, kampanye, dan reward." },
                { title: "Mitra", description: "Menawarkan kesempatan perolehan dan penukaran poin kepada member." },
                { title: "Keuangan", description: "Mengelola liabilitas poin, biaya, dan penyelesaian dengan mitra." },
                { title: "Manajemen", description: "Memantau kinerja program dan dampak bisnisnya." },
            ],
        },
        {
            title: "Dari Aktivitas Member hingga Insight Bisnis",
            description: "ASYST Loyalty Management dapat dipahami melalui lima tahap utama.",
            items: [
                { title: "Pendaftaran", description: "Pelanggan bergabung dalam program melalui kanal digital, mitra, atau titik layanan." },
                { title: "Perolehan Poin", description: "Member mengumpulkan poin dari transaksi dan aktivitas berdasarkan aturan yang dikonfigurasi." },
                { title: "Penentuan Tier", description: "Status member dievaluasi otomatis untuk memberikan manfaat yang tepat kepada member yang tepat." },
                { title: "Penukaran", description: "Member menukarkan poin dengan reward, voucher, atau penawaran mitra." },
                { title: "Insight", description: "Data program menunjukkan perilaku member, hasil kampanye, dan nilai yang diciptakan program." },
            ],
        },
        {
            title: "Dirancang untuk Menjalankan Program, Bukan Sekadar Menyimpan Poin",
            description: "Loyalty Management System dirancang dari perspektif multi-peran, menyatukan kebutuhan member, tim program, mitra, dan manajemen dalam satu platform yang terhubung.",
            items: [
                { title: "Manajemen Member", description: "Kelola registrasi, profil, preferensi, dan status member dalam satu database terpusat.", highlight: "Setiap kanal bekerja dari data member yang sama." },
                { title: "Mesin Poin", description: "Konfigurasikan aturan perolehan dan penukaran poin berdasarkan produk, kanal, mitra, periode, dan kampanye.", highlight: "Poin dihitung secara konsisten dan transparan." },
                { title: "Manajemen Tier", description: "Tentukan level tier, aturan kualifikasi, dan manfaatnya, lalu evaluasi secara otomatis.", highlight: "Member menerima manfaat yang tepat pada waktu yang tepat." },
                { title: "Reward dan Penukaran", description: "Kelola katalog reward, voucher, dan penawaran mitra dengan kontrol stok dan biaya.", highlight: "Penukaran mudah bagi member dan terkendali bagi bisnis." },
                { title: "Kampanye dan Promosi", description: "Jalankan kampanye tertarget, bonus poin, dan promosi untuk segmen tertentu.", highlight: "Kampanye menjangkau member yang tepat dan dapat diukur." },
                { title: "Manajemen Mitra", description: "Hubungkan mitra untuk perolehan dan penukaran poin, serta kelola transaksi dan penyelesaiannya.", highlight: "Program dapat tumbuh melalui ekosistem mitra yang lebih luas." },
                { title: "Analitik dan Pelaporan", description: "Pantau keanggotaan, keterlibatan, liabilitas poin, dan kinerja kampanye dalam dashboard.", highlight: "Keputusan didasarkan pada data program yang lengkap." },
            ],
        },
        {
            title: "Satu Platform untuk Beragam Kebutuhan Bisnis dan Skenario Loyalitas",
            tabs: [
                {
                    label: "Arsitektur",
                    title: "Loyalty Management dalam Arsitektur Enterprise Digital",
                    paragraphs: [
                        "Program loyalitas tidak seharusnya berhenti pada metrik semu seperti jumlah member. Loyalty Management System ASYST dapat dikonfigurasi untuk membantu perusahaan memantau indikator yang lebih erat kaitannya dengan hasil bisnis.",
                    ],
                    groups: [
                        { title: "Pengguna", items: ["Member", "Tim Program", "Mitra", "Keuangan", "Manajemen"] },
                        { title: "Loyalty Management", items: ["Member", "Poin", "Tier", "Reward", "Kampanye", "Mitra"] },
                        { title: "Integrasi", items: ["API / Lapisan Integrasi", "Alur Kerja", "Pertukaran Data", "Layanan Enterprise"] },
                        { title: "Sistem Enterprise", items: ["CRM", "POS dan Booking", "Keuangan", "ERP", "Platform Data"] },
                        { title: "Business Intelligence", items: ["Analitik Member", "Kinerja Kampanye", "Liabilitas Poin", "Laporan Manajemen"] },
                    ],
                },
                {
                    label: "Integrasi",
                    title: "Terhubung dengan Sistem yang Berinteraksi dengan Pelanggan",
                    paragraphs: ["Aktivitas member berasal dari banyak sistem. Platform menghubungkannya agar poin dan manfaat selalu terbarui."],
                    points: ["Booking, POS, dan e-commerce", "CRM dan customer data platform", "Aplikasi mobile dan website", "Sistem mitra", "Keuangan dan ERP"],
                },
                {
                    label: "Kapabilitas Produk",
                    title: "Kapabilitas Loyalitas yang Siap Dikonfigurasi",
                    paragraphs: ["Modul loyalitas inti dapat dikonfigurasi sesuai desain program dan aturan bisnis setiap perusahaan."],
                    points: ["Aturan perolehan dan penukaran poin", "Keanggotaan multi-tier", "Katalog reward dan voucher", "Manajemen kampanye", "Penyelesaian dengan mitra"],
                },
                {
                    label: "Skenario Bisnis",
                    title: "Mendukung Berbagai Skenario Loyalitas",
                    paragraphs: ["Platform yang sama dapat mendukung berbagai jenis program dan industri."],
                    points: ["Program frequent flyer maskapai", "Reward ritel dan hospitality", "Program koalisi dan co-branded", "Loyalitas karyawan dan B2B", "Program multi-brand"],
                },
                {
                    label: "Data Bisnis",
                    title: "Data Loyalitas yang Mendukung Keputusan Bisnis",
                    paragraphs: ["Setiap pendaftaran, transaksi, penukaran, dan kampanye menjadi data yang dapat ditindaklanjuti bisnis."],
                    points: ["Tingkat member aktif", "Pembelian ulang dan retensi", "Penerbitan dan liabilitas poin", "Return on investment kampanye", "Kontribusi mitra"],
                },
            ],
        },
        {
            title: "Kapabilitas Teknologi Enterprise di Balik Strategi Loyalitas Anda",
            description: "Memilih platform loyalitas lebih dari sekadar memilih software. Perusahaan membutuhkan mitra yang memahami bagaimana platform harus berjalan di dalam ekosistem teknologi yang kompleks.",
            items: [
                { title: "Kapabilitas Enterprise", description: "ASYST membangun dan menghadirkan beragam solusi enterprise sebagai bagian dari portofolio produk dan solusi digitalnya." },
                { title: "Integrasi", description: "Program loyalitas dapat dirancang sebagai bagian dari ekosistem enterprise sehingga tidak terisolasi dari sistem lain." },
                { title: "Pengalaman", description: "Pendekatan ASYST menggabungkan kapabilitas produk, teknologi, integrasi, dan pemahaman kebutuhan bisnis." },
                { title: "Kemitraan Jangka Panjang", description: "Program perlu terus berkembang mengikuti perubahan perilaku pelanggan, strategi bisnis, teknologi, dan pasar." },
            ],
        },
    ],
    faq: {
        title: "Pertanyaan Umum tentang Loyalty Management",
        items: [
            { question: "Apa itu Loyalty Management System?", answer: "Loyalty Management System adalah platform yang membantu perusahaan mengelola program loyalitas secara terpusat, termasuk member, poin, tier, reward, kampanye, keterlibatan, dan analitik." },
            { question: "Apa perbedaan Loyalty Management System dengan aplikasi loyalitas biasa?", answer: "Aplikasi loyalitas adalah kanal yang digunakan member. Loyalty Management System adalah platform di baliknya yang mengelola aturan, poin, tier, reward, mitra, integrasi, dan analitik di seluruh kanal." },
            { question: "Apakah Loyalty Management System ASYST dapat diintegrasikan dengan sistem yang sudah ada?", answer: "Ya. Platform dapat terintegrasi dengan sistem booking, POS, CRM, e-commerce, mitra, keuangan, dan ERP melalui API dan lapisan integrasi." },
            { question: "Apakah program loyalitas hanya untuk perusahaan ritel?", answer: "Tidak. Program loyalitas digunakan oleh maskapai, perjalanan, hospitality, perbankan, telekomunikasi, ritel, dan perusahaan B2B untuk membangun hubungan pelanggan jangka panjang." },
            { question: "Apakah platform mendukung poin dan reward?", answer: "Ya. Perolehan dan penukaran poin, manfaat tier, katalog reward, voucher, dan penawaran mitra dapat dikonfigurasi di platform." },
            { question: "Apakah perusahaan dapat membuat program loyalitasnya sendiri?", answer: "Ya. Perusahaan dapat merancang struktur, aturan, tier, dan reward programnya sendiri, dan ASYST dapat membantu penyiapan program, integrasi, serta implementasinya." },
        ],
    },
    cta: {
        title: "Bangun Platform Loyalitas yang Sesuai dengan Bisnis Anda",
        description: "Setiap bisnis memiliki perjalanan pelanggan, ekosistem teknologi, dan strategi loyalitas yang unik. Diskusikan kebutuhan Anda bersama ASYST untuk menemukan pendekatan produk, integrasi, arsitektur, dan implementasi yang tepat.",
        button: "Hubungi Ahli Kami",
    },
});
