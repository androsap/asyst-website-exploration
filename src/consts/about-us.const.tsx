import imgHero from "assets/asyst/img/background/story/story-1.jpg";
import imgVideoThumbnail from "assets/asyst/img/background/about-us/jobs/office.png";
import imgCareer1 from "assets/asyst/img/background/story/story-2.jpg";
import imgCareer2 from "assets/asyst/img/background/story/story-3.jpg";
import imgHengki from "assets/asyst/img/background/about-us/leadership-team/hengki-m-sihombing.png";
import imgReza from "assets/asyst/img/background/about-us/leadership-team/mohamad-reza-yunardi.png";
import imgRindra from "assets/asyst/img/background/about-us/leadership-team/rindra-putra.png";
import imgDitya from "assets/asyst/img/background/about-us/leadership-team/ditya-firmansyah.png";

import logoGaruda from "assets/asyst/img/logo/ga-logo-color.png";
import logoCitilink from "assets/asyst/img/logo/citilink-logo-color.png";
import logoPelni from "assets/asyst/img/logo/pelni-logo.png";
import logoKai from "assets/asyst/img/logo/kai-logo.png";
import logoBukopin from "assets/asyst/img/logo/bukopin-logo.png";
import logoAxa from "assets/asyst/img/logo/axa-logo.png";
import logoPelitaAir from "assets/asyst/img/logo/pelita-air-logo-color.png";
import logoLufthansa from "assets/asyst/img/logo/lufthansa-logo-color.png";
import logoAirFrance from "assets/asyst/img/logo/airfrance-logo-color.png";
import logoSouthwest from "assets/asyst/img/logo/southwest-logo-color.png";

// Konten statis halaman About Us (desain revamp 2026).
// Gambar sementara memakai aset yang sudah ada di repo; ganti dengan aset final dari desain.

export const AboutHeroConst = {
    title: "Your Strategic IT Consultant for Enterprise",
    description: "We transform complex challenges into secure, scalable and sustainable digital solutions.",
    button: { label: "Get In Touch", link: "/contact-us" },
    image: imgHero,
}

export const AboutIntroConst = {
    title: "We help businesses imagine their future and make it real with technology and people.",
    description: "Founded in 2005 as PT Lufthansa Systems Indonesia, PT Aero Systems Indonesia (Asyst) is now a proud member of the Garuda Indonesia Group, with PT Garuda Indonesia (Persero) holding 90% of shares and PT Aerowisata holding 10%. Our team's proven expertise and our global partnerships empower us to design, build, and support advanced information systems.",
}

export interface LeaderItem {
    name: string;
    position: string;
    image: string;
    linkedin?: string;
}

export const LeadersConst = {
    title: "The Leaders",
    description: "Discover behind our leadership, who guide our teams while upholding our vision and professional values to ensure your project meets expectations and delivers lasting impact",
    // TODO: URL LinkedIn belum ada; jabatan Mohamad Reza Yunardi di desain sama dengan Hengki (perlu dikonfirmasi)
    items: [
        { name: "Hengki M. Sihombing", position: "Direktur Utama PT Aero Systems Indonesia", image: imgHengki },
        { name: "Mohamad Reza Yunardi", position: "Direktur Utama PT Aero Systems Indonesia", image: imgReza },
        { name: "Rindra Putra", position: "Commissioner Aero Systems Indonesia", image: imgRindra },
        { name: "Ditya Firmansyah", position: "President Commissioner Aero Systems Indonesia", image: imgDitya },
    ] as LeaderItem[],
}

export interface PrincipleItem {
    title: string;
    description: string;
}

export interface PrincipleTab {
    label: string;
    items: PrincipleItem[];
}

export const PrinciplesConst = {
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
}

export const ClientsConst = {
    title: "Trusted clients for tech leaders",
    description: "With 10+ years of expertise, Asyst empowers companies with custom software solutions, driving innovation, seamless integration, and business growth in a dynamic digital landscape.",
    // TODO: logo Nokia, OJK, XL Axiata & instansi pemerintah di desain belum ada di repo
    items: [
        { name: "Garuda Indonesia", logo: logoGaruda },
        { name: "Citilink", logo: logoCitilink },
        { name: "PELNI", logo: logoPelni },
        { name: "KAI", logo: logoKai },
        { name: "Bukopin", logo: logoBukopin },
        { name: "AXA", logo: logoAxa },
        { name: "Pelita Air", logo: logoPelitaAir },
        { name: "Lufthansa", logo: logoLufthansa },
        { name: "Air France", logo: logoAirFrance },
        { name: "Southwest", logo: logoSouthwest },
    ] as { name: string; logo: string }[],
}

export interface ConsultingAreaItem {
    title: string;
    description: string;
}

export const ConsultingAreasConst = {
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
}

export const JoinTeamConst = {
    title: "Want to join our team?",
    description: [
        "Asyst is a team of passionate people who deliver, support, inspire, and learn from one another. Be part of a team of IT professionals who develop meaningful solutions for clients worldwide.",
        "You'll find room to grow, take on exciting challenges, and do what you love.",
    ],
    link: { label: "Career Opportunities", to: "/career" },
    images: [imgCareer1, imgCareer2],
}
