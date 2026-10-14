import { SvgIconComponent } from "components/ui/svg-icon";
import { TimelineBlock } from "consts/product-detail/enterprise.types";

export interface SolutionTextItem {
    title: string;
    description: string;
}

export interface SolutionDetailGroup {
    label: string;
    text?: string;
    points?: string[];
}

export interface IntroBlock {
    type: "intro";
    title: string;
    paragraphs: string[];
    image: string;
}

export interface CardsBlock {
    type: "cards";
    heading: "center" | "split";
    title: string;
    description?: string;
    columns: 3 | 4;
    soft?: boolean;
    items: (SolutionTextItem & {
        tag?: string;
        icon?: SvgIconComponent;
        points?: string[];
        groups?: SolutionDetailGroup[];
        footnote?: string;
        image?: string;
    })[];
}

export interface MatrixBlock {
    type: "matrix";
    title: string;
    description?: string;
    items: (SolutionTextItem & { icon?: SvgIconComponent; points?: string[] })[];
}

export interface CarouselBlock {
    type: "carousel";
    title: string;
    description: string;
    items: (SolutionTextItem & { image: string })[];
}

export interface StepsBlock {
    type: "steps";
    title: string;
    description: string;
    image: string;
    items: {
        label: string;
        title?: string;
        description: string;
        groups?: SolutionDetailGroup[];
    }[];
}

export interface TabsBlock {
    type: "tabs";
    variant: "pill" | "boxed";
    title: string;
    description?: string;
    items: {
        label: string;
        title: string;
        paragraphs: string[];
        subtitle?: string;
        points?: string[];
        image: string;
    }[];
}

export interface ListBlock {
    type: "list";
    layout: "stacked" | "aside";
    title: string;
    paragraphs: string[];
    image: string;
    items: SolutionTextItem[];
}

export type SolutionBlock = IntroBlock | CardsBlock | MatrixBlock | CarouselBlock | StepsBlock | TabsBlock | ListBlock | TimelineBlock;

export interface SolutionPageContent {
    seo: {
        title: string;
        description: string;
    };
    hero: {
        breadcrumb: string;
        eyebrow?: string;
        title: string;
        description: string;
        primaryButton: string;
        secondaryButton: string;
    };
    sections: SolutionBlock[];
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
