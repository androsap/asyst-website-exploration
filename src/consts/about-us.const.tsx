import imgHero from "assets/asyst/img/background/story/story-1.jpg";
import imgVideoThumbnail from "assets/asyst/img/background/about-us/jobs/office.png";
import imgCareer1 from "assets/asyst/img/background/story/story-2.jpg";
import imgCareer2 from "assets/asyst/img/background/story/story-3.jpg";
import imgHengki from "assets/asyst/img/background/about-us/leadership-team/hengki-m-sihombing.png";
import imgReza from "assets/asyst/img/background/about-us/leadership-team/mohamad-reza-yunardi.png";
import imgRindra from "assets/asyst/img/background/about-us/leadership-team/rindra-putra.png";
import imgDitya from "assets/asyst/img/background/about-us/leadership-team/ditya-firmansyah.png";

import logoPerseroBatam from "assets/asyst/img/about-us/clients/client-persero-batam.png";
import logoSabre from "assets/asyst/img/about-us/clients/client-sabre.png";
import logoAxa from "assets/asyst/img/about-us/clients/client-axa.png";
import logoKai from "assets/asyst/img/about-us/clients/client-kai.png";
import logoPelindo from "assets/asyst/img/about-us/clients/client-pelindo.png";
import logoKemenparekraf from "assets/asyst/img/about-us/clients/client-kemenparekraf.png";
import logoCitilink from "assets/asyst/img/about-us/clients/client-citilink.png";
import logoGaruda from "assets/asyst/img/about-us/clients/client-garuda-indonesia.png";
import logoNokia from "assets/asyst/img/about-us/clients/client-nokia.png";
import logoOjk from "assets/asyst/img/about-us/clients/client-ojk.png";
import logoPelni from "assets/asyst/img/about-us/clients/client-pelni.png";
import logoXlAxiata from "assets/asyst/img/about-us/clients/client-xl-axiata.png";
import { localized } from "shared/i18n";

// Konten statis halaman About Us (desain revamp 2026).
// Gambar sementara memakai aset yang sudah ada di repo; ganti dengan aset final dari desain.
// Tiap konten dua bahasa: argumen pertama `localized` = EN (lengkap), kedua = terjemahan ID (teks saja).

export const AboutHeroConst = localized({
    title: "Your Strategic IT Consultant for Enterprise",
    description: "We transform complex challenges into secure, scalable and sustainable digital solutions.",
    button: { label: "Get In Touch", link: "/contact-us" },
    image: imgHero,
}, {
    title: "Konsultan IT Strategis untuk Enterprise Anda",
    description: "Kami mengubah tantangan yang kompleks menjadi solusi digital yang aman, skalabel, dan berkelanjutan.",
    button: { label: "Hubungi Kami" },
})

export const AboutIntroConst = localized({
    title: "We help businesses imagine their future and make it real with technology and people.",
    description: "Founded in 2005 as PT Lufthansa Systems Indonesia, PT Aero Systems Indonesia (Asyst) is now a proud member of the Garuda Indonesia Group, with PT Garuda Indonesia (Persero) holding 90% of shares and PT Aerowisata holding 10%. Our team's proven expertise and our global partnerships empower us to design, build, and support advanced information systems.",
}, {
    title: "Kami membantu bisnis membayangkan masa depannya dan mewujudkannya melalui teknologi dan manusia.",
    description: "Didirikan pada 2005 sebagai PT Lufthansa Systems Indonesia, PT Aero Systems Indonesia (Asyst) kini bangga menjadi bagian dari Garuda Indonesia Group, dengan kepemilikan saham PT Garuda Indonesia (Persero) sebesar 90% dan PT Aerowisata sebesar 10%. Keahlian tim kami yang telah terbukti serta kemitraan global kami memungkinkan kami merancang, membangun, dan mendukung sistem informasi yang canggih.",
})

export interface LeaderItem {
    name: string;
    position: string;
    image: string;
    linkedin?: string;
}

export const LeadersConst = localized({
    title: "The Leaders",
    description: "Discover behind our leadership, who guide our teams while upholding our vision and professional values to ensure your project meets expectations and delivers lasting impact",
    // TODO: URL LinkedIn belum ada; jabatan Mohamad Reza Yunardi di desain sama dengan Hengki (perlu dikonfirmasi)
    items: [
        { name: "Hengki M. Sihombing", position: "President Director of PT Aero Systems Indonesia", image: imgHengki },
        { name: "Mohamad Reza Yunardi", position: "President Director of PT Aero Systems Indonesia", image: imgReza },
        { name: "Rindra Putra", position: "Commissioner of Aero Systems Indonesia", image: imgRindra },
        { name: "Ditya Firmansyah", position: "President Commissioner of Aero Systems Indonesia", image: imgDitya },
    ] as LeaderItem[],
}, {
    title: "Jajaran Pimpinan",
    description: "Kenali jajaran pimpinan kami yang membimbing tim sekaligus menjaga visi dan nilai profesional kami, untuk memastikan proyek Anda sesuai harapan dan memberikan dampak jangka panjang",
    items: [
        { position: "Direktur Utama PT Aero Systems Indonesia" },
        { position: "Direktur Utama PT Aero Systems Indonesia" },
        { position: "Komisaris Aero Systems Indonesia" },
        { position: "Komisaris Utama Aero Systems Indonesia" },
    ],
})

export interface PrincipleItem {
    title: string;
    description: string;
}

export interface PrincipleTab {
    label: string;
    items: PrincipleItem[];
}

export const PrinciplesConst = localized({
    // TODO: video perusahaan belum ada; isi embed URL YouTube (https://www.youtube.com/embed/<id>) agar tombol play aktif
    videoEmbedUrl: "",
    videoThumbnail: imgVideoThumbnail,
    // TODO: desain hanya menampilkan isi tab "Values"; copy Vision & Mission perlu dikonfirmasi
    tabs: [
        {
            label: "Vision",
            items: [
                { title: "Trusted Digital Partner", description: "To be the most trusted IT consulting and solutions partner for enterprises in Indonesia and the region." },
                { title: "Sustainable Transformation", description: "Enabling organizations to grow through secure, scalable and sustainable digital transformation." },
            ],
        },
        {
            label: "Mission",
            items: [
                { title: "Deliver Measurable Value", description: "Design, build and operate technology solutions that solve real business challenges and deliver measurable outcomes." },
                { title: "Grow Our People", description: "Develop talented IT professionals who combine deep domain knowledge with modern engineering practices." },
                { title: "Partner for the Long Term", description: "Support our clients across the full technology lifecycle, from strategy to managed services." },
            ],
        },
        {
            label: "Values",
            items: [
                { title: "Innovation & Agility", description: "We leverage cutting-edge technology and agile methodologies to keep businesses ahead of evolving digital trends." },
                { title: "Client-Centric Excellence", description: "Your business objectives drive our technical solutions. We deliver measurable value through collaborative IT strategy and continuous optimization." },
                { title: "Integrity & Security First", description: "Trust is built on security. We prioritize enterprise-grade cybersecurity and ethical data stewardship in every project we execute." },
            ],
        },
    ] as PrincipleTab[],
    defaultTab: 2,
    videoTitle: "Asyst company profile",
    videoThumbnailAlt: "Asyst office",
    playVideo: "Play video",
}, {
    tabs: [
        {
            label: "Visi",
            items: [
                { title: "Mitra Digital Terpercaya", description: "Menjadi mitra konsultasi dan solusi IT paling tepercaya bagi perusahaan di Indonesia dan kawasan regional." },
                { title: "Transformasi Berkelanjutan", description: "Memungkinkan organisasi bertumbuh melalui transformasi digital yang aman, skalabel, dan berkelanjutan." },
            ],
        },
        {
            label: "Misi",
            items: [
                { title: "Memberikan Nilai yang Terukur", description: "Merancang, membangun, dan mengoperasikan solusi teknologi yang menjawab tantangan bisnis nyata dan memberikan hasil yang terukur." },
                { title: "Mengembangkan SDM Kami", description: "Mengembangkan profesional IT berbakat yang memadukan pemahaman domain yang mendalam dengan praktik rekayasa modern." },
                { title: "Bermitra untuk Jangka Panjang", description: "Mendukung klien kami di sepanjang siklus teknologi, dari strategi hingga layanan terkelola." },
            ],
        },
        {
            label: "Nilai",
            items: [
                { title: "Inovasi & Kelincahan", description: "Kami memanfaatkan teknologi mutakhir dan metodologi agile agar bisnis selalu selangkah lebih maju dari tren digital yang terus berkembang." },
                { title: "Keunggulan yang Berpusat pada Klien", description: "Tujuan bisnis Anda menjadi dasar solusi teknis kami. Kami memberikan nilai terukur melalui strategi IT yang kolaboratif dan optimasi berkelanjutan." },
                { title: "Integritas & Keamanan sebagai Prioritas", description: "Kepercayaan dibangun di atas keamanan. Kami mengutamakan keamanan siber kelas enterprise dan pengelolaan data yang etis di setiap proyek yang kami jalankan." },
            ],
        },
    ],
    videoTitle: "Profil perusahaan Asyst",
    videoThumbnailAlt: "Kantor Asyst",
    playVideo: "Putar video",
})

export const ClientsConst = localized({
    title: "Trusted clients for tech leaders",
    description: "With 10+ years of expertise, Asyst empowers companies with custom software solutions, driving innovation, seamless integration, and business growth in a dynamic digital landscape.",
    items: [
        { name: "Persero Batam", logo: logoPerseroBatam },
        { name: "Sabre", logo: logoSabre },
        { name: "AXA", logo: logoAxa },
        { name: "KAI", logo: logoKai },
        { name: "Pelindo", logo: logoPelindo },
        { name: "Kemenparekraf/Baparekraf", logo: logoKemenparekraf },
        { name: "Citilink", logo: logoCitilink },
        { name: "Garuda Indonesia", logo: logoGaruda },
        { name: "Nokia", logo: logoNokia },
        { name: "OJK", logo: logoOjk },
        { name: "PELNI", logo: logoPelni },
        { name: "XL Axiata", logo: logoXlAxiata },
    ] as { name: string; logo: string }[],
}, {
    title: "Klien tepercaya para pemimpin teknologi",
    description: "Dengan pengalaman lebih dari 10 tahun, Asyst memberdayakan perusahaan melalui solusi software yang disesuaikan, mendorong inovasi, integrasi yang mulus, dan pertumbuhan bisnis di lanskap digital yang dinamis.",
})

export interface ConsultingAreaItem {
    title: string;
    description: string;
}

export const ConsultingAreasConst = localized({
    title: "IT Consulting areas we can help you with",
    description: "We deliver high-impact IT consulting, cloud transformation, cybersecurity, and managed IT services tailored to meet complex regulatory and operational demands across key vertical sectors.",
    items: [
        { title: "Financial Services", description: "Modernize core banking systems, accelerate cloud adoption, and secure sensitive financial data. We help banks, insurance firms, and fintech startups achieve SOC 2 and PCI-DSS compliance while building resilient infrastructure." },
        { title: "Manufacturing & Industrial", description: "Connect OT and IT environments safely to enable Industry 4.0 automation. We optimize ERP systems, implement IoT edge computing, and defend operational networks against ransomware threats." },
        { title: "Retail & E-Commerce", description: "Deliver frictionless, high-speed customer experiences. We design scalable cloud backbones that handle peak shopping loads, protect POS transactions, and unify online and in-store inventory systems." },
        // TODO: kartu di luar layar tidak terlihat di desain; copy di bawah perlu dikonfirmasi
        { title: "Aviation & Transportation", description: "Digitize airline, airport and logistics operations with integrated systems for reservations, ground handling, cargo and crew management that keep every journey on schedule." },
        { title: "Public Sector & SOE", description: "Help government institutions and state-owned enterprises modernize public services with secure, compliant and interoperable digital platforms." },
    ] as ConsultingAreaItem[],
}, {
    title: "Area konsultasi IT yang dapat kami bantu",
    description: "Kami menghadirkan konsultasi IT berdampak tinggi, transformasi cloud, keamanan siber, dan layanan IT terkelola yang disesuaikan dengan tuntutan regulasi dan operasional yang kompleks di berbagai sektor utama.",
    items: [
        { title: "Layanan Keuangan", description: "Modernisasi sistem core banking, percepat adopsi cloud, dan amankan data keuangan yang sensitif. Kami membantu bank, perusahaan asuransi, dan startup fintech mencapai kepatuhan SOC 2 dan PCI-DSS sambil membangun infrastruktur yang tangguh." },
        { title: "Manufaktur & Industri", description: "Hubungkan lingkungan OT dan IT secara aman untuk mewujudkan otomatisasi Industri 4.0. Kami mengoptimalkan sistem ERP, menerapkan IoT edge computing, dan melindungi jaringan operasional dari ancaman ransomware." },
        { title: "Ritel & E-Commerce", description: "Hadirkan pengalaman pelanggan yang cepat dan tanpa hambatan. Kami merancang fondasi cloud skalabel yang sanggup menangani lonjakan belanja, melindungi transaksi POS, serta menyatukan sistem inventaris online dan toko fisik." },
        { title: "Penerbangan & Transportasi", description: "Digitalisasi operasional maskapai, bandara, dan logistik dengan sistem terintegrasi untuk reservasi, ground handling, kargo, dan manajemen kru agar setiap perjalanan tetap tepat waktu." },
        { title: "Sektor Publik & BUMN", description: "Membantu instansi pemerintah dan badan usaha milik negara memodernisasi layanan publik dengan platform digital yang aman, patuh regulasi, dan dapat saling terhubung." },
    ],
})

export const JoinTeamConst = localized({
    title: "Want to join our team?",
    description: [
        "Asyst is a team of passionate people who deliver, support, inspire, and learn from one another. Be part of a team of IT professionals who develop meaningful solutions for clients worldwide.",
        "You'll find room to grow, take on exciting challenges, and do what you love.",
    ],
    link: { label: "Career Opportunities", to: "/career" },
    images: [imgCareer1, imgCareer2],
}, {
    title: "Ingin bergabung dengan tim kami?",
    description: [
        "Asyst adalah tim berisi orang-orang penuh semangat yang saling memberi hasil, mendukung, menginspirasi, dan belajar satu sama lain. Jadilah bagian dari tim profesional IT yang mengembangkan solusi bermakna bagi klien di seluruh dunia.",
        "Anda akan menemukan ruang untuk berkembang, menghadapi tantangan menarik, dan melakukan apa yang Anda sukai.",
    ],
    link: { label: "Peluang Karier" },
})
