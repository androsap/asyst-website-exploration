// Footer (desain revamp 2026). Sementara hardcode.
// `link` kosong = halaman tujuan belum ada (tampil sebagai teks biasa).
import { HeaderLinkItem } from "./header.const";

export interface FooterColumn {
    title?: string;
    items: HeaderLinkItem[];
}

export const FooterCompanyConst = {
    title: "Company",
    address: "Information System Building, 3rd floor, RT.001/RW.010, Pajang, Benda, Tangerang City, Banten 15126",
    phone: "+62 21 29356070",
    email: "sales@asyst.co.id",
}

export const FooterColumnsConst: FooterColumn[] = [
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
        // Baru SOC yang punya halaman detail; lainnya ke halaman Solutions (sama seperti header.const)
        items: [
            { label: "Security Operation Center", link: "/solution/security-operations-center" },
            { label: "Digital Business Consulting", link: "/solution" },
            { label: "Infra, App, Platform Operation and ITSM", link: "/solution" },
            { label: "Service Orchestration and Data management", link: "/solution" },
            { label: "Application Modernization", link: "/solution" },
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
]

export const FooterLegalConst: HeaderLinkItem[] = [
    { label: "Privacy Policy" },
    { label: "Terms of Service" },
]

export const FooterSocialConst = {
    linkedin: "https://www.linkedin.com/company/pt.-aero-systems-indonesia/",
    instagram: "https://instagram.com/asyst_official",
}
