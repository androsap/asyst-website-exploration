import { SITE_URL } from "./seo";

export const breadcrumbSchema = (items: { name: string; path: string }[], homeLabel = "Home") => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: homeLabel, path: "/" }, ...items].map(({ name, path }, index) => ({
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
