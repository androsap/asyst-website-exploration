// Saat `vite` dev server, lewat proxy /api/v1 (lihat vite.config.ts) karena API tidak mengizinkan CORS dari localhost
const URL_API_ASYST                  = import.meta.env.DEV ? "/api/v1/" : import.meta.env.VITE_API_URL_ASYST;

export const api = {
    mainBanner              : `${URL_API_ASYST}main-banner/retrieve`,
    navService              : `${URL_API_ASYST}navbar/service`,
    navSolution             : `${URL_API_ASYST}navbar/solutions`,
    navCompany              : `${URL_API_ASYST}navbar/company`,
    navCompanyImageSection  : `${URL_API_ASYST}navbar/companyImageSection`,
    banner                  : `${URL_API_ASYST}product-banner`,
    testimonial             : `${URL_API_ASYST}corporate-testimonial`,  
    scale                   : `${URL_API_ASYST}product-scale`,
    businessInformation     : `${URL_API_ASYST}business-information`,
    cardBusinessInformation : `${URL_API_ASYST}card-business-information`,
    promotion               : `${URL_API_ASYST}product-promotion`,
    promotionCards          : `${URL_API_ASYST}promotion-cards`,
    customers               : `${URL_API_ASYST}product-customers`,
    features                : `${URL_API_ASYST}product-features`,
    resources               : `${URL_API_ASYST}resources`,
    servicesSolutions       : `${URL_API_ASYST}home-section/our-services-solutions`,
    story                   : `${URL_API_ASYST}home-section/asyst-story`,
    milestoneStory          : `${URL_API_ASYST}home-section/milestones-asyst-story`,
    industries              : `${URL_API_ASYST}home-section-products/services-industries`,
    cardsProduct            : `${URL_API_ASYST}home-section-products/services-cardsproduct`,
    businessSolution        : `${URL_API_ASYST}home-section/business-solution`,
    cardsBusinessSolution   : `${URL_API_ASYST}home-section/cards-business-solution`,
    ourFact                 : `${URL_API_ASYST}home-section/our-fact`,
    cardsOurFact            : `${URL_API_ASYST}home-section/cards-our-fact`,
    cardsSolution           : `${URL_API_ASYST}home-section-products/services-cardssolution`,
    discoverMore            : `${URL_API_ASYST}home-section-products/services-discovermore`,
    customersWeServe        : `${URL_API_ASYST}customers-we-serve`,
    overviewBanner          : `${URL_API_ASYST}product-overview/overviewbanner`,
    productSlider           : `${URL_API_ASYST}product-overview/productslider`,
    allProduct              : `${URL_API_ASYST}product-overview/allproduct`,
    cardoverview            : `${URL_API_ASYST}product-overview/cardoverview`,
    industryOverview        : {
        mainBanner          : `${URL_API_ASYST}industry-overview/main-banner`,
        industries          : `${URL_API_ASYST}industry-overview/industries`,
        eachIndustries      : `${URL_API_ASYST}industry-overview/overview-each-industry`,
        howWeWork           : `${URL_API_ASYST}industry-overview/how-we-work`

    }
}