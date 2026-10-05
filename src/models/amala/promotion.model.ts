interface SubSection1 {
    title_id: string;
    title_en: string;
    description_id: string;
    description_en: string;
}

export interface PromotionModel {
    product: {
        product_name: string;
        section: {
            title_id: string;
            title_en: string;
            description_id: string;
            description_en: string;
            image1: string;
            sub_section_1: SubSection1[];
        };
    }
}