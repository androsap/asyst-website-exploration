interface Testimonial {
    name: string;
    position: string;
    company: string;
    review_id: string;
    review_en: string;
    image1: string;
    sequence: string;
}

interface Product {
    product_name: string;
    corporate_testimonial: Testimonial[];
}

export interface ProductTestimonialModel {
    product: Product[];
}
