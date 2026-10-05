interface Section {
    title_id: string;
    title_en: string;
    subtitle_id: string;
    subtitle_en: string;
    sequence: string;
}

export interface PromotionCardsModel {
    product: {
        product_name: string;
        section: Section[];
    }
}