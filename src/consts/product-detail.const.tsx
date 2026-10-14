import { SvgIconComponent } from "components/ui/svg-icon";

export interface IconTextItem {
    icon: SvgIconComponent;
    title: string;
    description: string;
}

export interface TabContentItem {
    label: string;
    title: string;
    description: string;
    image: string;
}

export interface ProductDetailContent {
    hero: {
        title: string;
        description: string;
        primaryButton: string;
        secondaryButton: string;
        statsCaption?: string;
        stats: { icon: SvgIconComponent; value: string; label: string }[];
    };
    overview: {
        title: string;
        paragraphs: string[];
        image: string;
        challenges: IconTextItem[];
    };
    lifecycle: {
        title: string;
        description?: string;
        items: TabContentItem[];
    };
    features: {
        title: string;
        items: { title: string; description: string; image: string }[];
    };
    howItWorks: {
        title: string;
        items: TabContentItem[];
    };
    businessModels: {
        title: string;
        items: { icon: SvgIconComponent; title: string; points: string[] }[];
    };
    faq: {
        title: string;
        items: { question: string; answer: string }[];
    };
    cta: {
        title: string;
        description: string;
        button: string;
    };
}
