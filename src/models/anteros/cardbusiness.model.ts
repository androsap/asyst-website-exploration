interface SubSection1 {
    title_id: string;
    title_en: string;
    description_id: string;
    description_en: string;
}

interface Section {
    title_id: string;
    title_en: string;
    subtitle_id: string;
    subtitle_en: string;
    image1: string;
    image2: string;
    sequence: string;
    sub_section_1: SubSection1[];
}

export interface CardBusinessModel {
    product: {
        product_name: string;
        section: Section[];
    }
}