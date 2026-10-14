import { localized } from "shared/i18n";
import { HeaderLinkItem } from "./header.const";
import { SOLUTION_LINKS } from "./solution-links.const";

export interface FooterColumn {
    title?: string;
    link?: string;
    items: HeaderLinkItem[];
}

export const FooterCompanyConst = localized({
    title: "Company",
    address: "Information System Building, 3rd floor, RT.001/RW.010, Pajang, Benda, Tangerang City, Banten 15126",
    phone: "+62 21 29356070",
    email: "sales@asyst.co.id",
}, {
    title: "Perusahaan",
    address: "Gedung Information System, Lantai 3, RT.001/RW.010, Pajang, Benda, Kota Tangerang, Banten 15126",
})

export const FooterColumnsConst = localized<FooterColumn[]>([
    {
        items: [
            { label: "About Us", link: "/about" },
            { label: "Careers", link: "/career" },
            { label: "Help and Documents" },
            { label: "Contact Us", link: "/contact-us" },
        ],
    },
    {
        title: "Products",
        link: "/product",
        items: [
            { label: "Enterprise", link: "/product" },
            { label: "Travel Management", link: "/product/athena" },
            { label: "Commercial" },
            { label: "Operations", link: "/product/chronus" },
            { label: "IT Service Assistant", link: "/product/elea" },
        ],
    },
    {
        title: "Solutions",
        items: [
            { label: "Security Operation Center", link: SOLUTION_LINKS.soc },
            { label: "Digital Business Consulting", link: SOLUTION_LINKS.digitalConsulting },
            { label: "Infra, App, Platform Operation and ITSM", link: SOLUTION_LINKS.managedIt },
            { label: "Service Orchestration and Data management", link: SOLUTION_LINKS.serviceOrchestration },
            { label: "Application Modernization", link: SOLUTION_LINKS.appModernization },
        ],
    },
    {
        title: "Industries",
        items: [
            { label: "Enterprise", link: "/industry" },
            { label: "Government", link: "/industry" },
            { label: "Aviation", link: "/industry/aviation" },
            { label: "Transportation", link: "/industry" },
            { label: "Other industries", link: "/industry" },
        ],
    },
], [
    {
        items: [
            { label: "Tentang Kami" },
            { label: "Karier" },
            { label: "Bantuan & Dokumen" },
            { label: "Hubungi Kami" },
        ],
    },
    {
        title: "Produk",
        items: [
            { label: "Enterprise" },
            { label: "Manajemen Perjalanan" },
            { label: "Komersial" },
            { label: "Operasional" },
            { label: "Asisten Layanan IT" },
        ],
    },
    {
        title: "Solusi",
        items: [
            { label: "Security Operation Center" },
            { label: "Konsultasi Bisnis Digital" },
            { label: "Operasional Infra, Aplikasi, Platform & ITSM" },
            { label: "Orkestrasi Layanan & Manajemen Data" },
            { label: "Modernisasi Aplikasi" },
        ],
    },
    {
        title: "Industri",
        items: [
            { label: "Enterprise" },
            { label: "Pemerintahan" },
            { label: "Penerbangan" },
            { label: "Transportasi" },
            { label: "Industri lainnya" },
        ],
    },
])

export const FooterLegalConst = localized<HeaderLinkItem[]>([
    { label: "Privacy Policy" },
    { label: "Terms of Service" },
], [
    { label: "Kebijakan Privasi" },
    { label: "Ketentuan Layanan" },
])

export const FooterSocialConst = {
    linkedin: "https://www.linkedin.com/company/pt.-aero-systems-indonesia/",
    instagram: "https://instagram.com/asyst_official",
}
