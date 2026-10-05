import { CareerJob, careerJobLink } from "consts/career.const";
import { SITE_NAME, SITE_URL } from "shared/head/seo";

// Structured data (schema.org) halaman Career: JobPosting untuk Google for Jobs, BreadcrumbList & FAQPage.
// Validasi: https://search.google.com/test/rich-results

const ORGANIZATION = {
    "@type": "Organization",
    name: SITE_NAME,
    sameAs: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
};

// Sama dengan alamat di halaman Contact Us (consts/contact-us.const)
const OFFICE_ADDRESS = {
    "@type": "PostalAddress",
    streetAddress: "Information System Building, 3rd floor, RT.001/RW.010, Pajang, Benda",
    addressLocality: "Tangerang",
    addressRegion: "Banten",
    postalCode: "15126",
    addressCountry: "ID",
};

const EMPLOYMENT_TYPES: Record<string, string> = {
    "Full-time": "FULL_TIME",
    "Part-time": "PART_TIME",
    "Contract": "CONTRACTOR",
    "Internship": "INTERN",
};

const HTML_ENTITIES: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
const escapeHtml = (text: string) => text.replace(/[&<>"]/g, char => HTML_ENTITIES[char] ?? char);
const htmlList = (items: string[]) => `<ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;

export const jobPostingSchema = (job: CareerJob, labels: { responsibilities: string; requirements: string }) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: [
        ...job.about.map(text => `<p>${escapeHtml(text)}</p>`),
        `<h3>${escapeHtml(labels.responsibilities)}</h3>`, htmlList(job.responsibilities),
        `<h3>${escapeHtml(labels.requirements)}</h3>`, htmlList(job.requirements),
    ].join(""),
    identifier: { "@type": "PropertyValue", name: SITE_NAME, value: job.slug },
    datePosted: job.postedDate,
    employmentType: EMPLOYMENT_TYPES[job.employmentType] ?? "OTHER",
    hiringOrganization: ORGANIZATION,
    jobLocation: { "@type": "Place", address: OFFICE_ADDRESS },
    ...(job.location === "Remote" && {
        jobLocationType: "TELECOMMUTE",
        applicantLocationRequirements: { "@type": "Country", name: "Indonesia" },
    }),
    industry: job.department,
    skills: job.skills.join(", "),
    url: `${SITE_URL}${careerJobLink(job.slug)}`,
});

/** items: urutan dari Home; `path` item terakhir = halaman aktif */
export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map(({ name, path }, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
        item: `${SITE_URL}${path}`,
    })),
});

export const faqSchema = (items: { question: string; answer: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
    })),
});
