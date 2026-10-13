import { SvgIconComponent } from "components/ui/svg-icon";

export interface TextItem {
    title: string;
    description: string;
}

export interface CardItem extends TextItem {
    tag?: string;
    icon?: SvgIconComponent;
}

export interface IconCardItem extends TextItem {
    icon: SvgIconComponent;
}

export interface ChallengeBlock {
    type: "challenge";
    title: string;
    paragraphs: string[];
    lead?: string;
    items: CardItem[];
}

export interface OverviewBlock {
    type: "overview";
    title: string;
    paragraphs: string[];
    points?: string[];
    closing?: string;
    image: string;
    cards: CardItem[];
}

export interface FlowStep {
    label: string;
    icon: SvgIconComponent;
    title: string;
    description: string;
    image: string;
}

export interface FlowBlock {
    type: "flow";
    title: string;
    description: string;
    steps: FlowStep[];
}

export interface TimelineItem {
    title: string;
    lead?: string;
    description: string;
}

export interface TimelineBlock {
    type: "timeline";
    layout: "band" | "split";
    mediaFirst?: boolean;
    title: string;
    description?: string;
    image: string;
    items: TimelineItem[];
}

export interface CapabilityItem {
    title: string;
    description: string;
    highlight?: string;
    points?: string[];
    icon?: SvgIconComponent;
}

export interface CapabilityBlock {
    type: "capabilities";
    heading: "top" | "column";
    mediaFirst?: boolean;
    title: string;
    description: string;
    image: string;
    items: CapabilityItem[];
}

export interface ArchitectureTab {
    label: string;
    title: string;
    paragraphs: string[];
    points?: string[];
    groups?: { title: string; items: string[] }[];
    roles?: TextItem[];
    image: string;
}

export interface ArchitectureBlock {
    type: "architecture";
    mediaFirst?: boolean;
    title: string;
    description?: string;
    tabs: ArchitectureTab[];
}

export interface ExpertiseBlock {
    type: "expertise";
    title: string;
    description?: string;
    items: IconCardItem[];
}

export type EnterpriseBlock = ChallengeBlock | OverviewBlock | FlowBlock | TimelineBlock | CapabilityBlock | ArchitectureBlock | ExpertiseBlock;

export interface EnterpriseProductContent {
    seo: {
        title: string;
        description: string;
    };
    hero: {
        breadcrumb: string;
        title: string;
        description: string;
        primaryButton: string;
        secondaryButton: string;
        image: string;
        imageAlt: string;
    };
    sections: EnterpriseBlock[];
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
