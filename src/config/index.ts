const URL_API_ASYST = import.meta.env.DEV ? "/api/v1/" : import.meta.env.VITE_API_URL_ASYST;

export const api = {
    banner: `${URL_API_ASYST}product-banner`,
    testimonial: `${URL_API_ASYST}corporate-testimonial`,
    scale: `${URL_API_ASYST}product-scale`,
    businessInformation: `${URL_API_ASYST}business-information`,
    cardBusinessInformation: `${URL_API_ASYST}card-business-information`,
    promotion: `${URL_API_ASYST}product-promotion`,
    promotionCards: `${URL_API_ASYST}promotion-cards`,
    customers: `${URL_API_ASYST}product-customers`,
    features: `${URL_API_ASYST}product-features`,
    resources: `${URL_API_ASYST}resources`,
    news: `${URL_API_ASYST}news/`,
};
