export interface BannerModel {
    product: {
        product_name: string;
        section: {
            title_id: string;
            title_en: string;
            description_id: string;
            description_en: string;
            image1: string;
            image2: string;
            link_en: string;
        }
    };
}