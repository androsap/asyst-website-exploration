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
            { label: "Leadership Team" },
            { label: "Case Studies", link: "/case-study" },
            { label: "News", link: "/news" },
            { label: "Careers", link: "/career" },
            { label: "Contact Us", link: "/contact-us" },
        ],
    },
    {
        title: "Explore",
        items: [
            { label: "Products", link: "/product" },
            { label: "Solutions", link: "/solution" },
            { label: "Industries", link: "/industry" },
        ],
    },
    {
        title: "IT Consulting",
        items: [
            { label: "IT Strategy" },
            { label: "IT Assessment" },
            { label: "Digital Transformation" },
            { label: "Enterprise Architecture" },
        ],
    },
    {
        title: "Services",
        items: [
            { label: "Professional Services" },
            { label: "Infrastructure" },
            { label: "Managed Services" },
        ],
    },
    {
        title: "Solutions",
        items: [
            { label: "Airline" },
            { label: "Loyalty" },
            { label: "Airport" },
            { label: "Ground Operations" },
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
