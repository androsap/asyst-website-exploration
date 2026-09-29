interface ServicesConstProps {
    category: string;
    subMenu: SubmenuProps[];
}

interface SubmenuProps {
    label: string;
    action: string;
    desc: desc[];
}

interface desc {
    label: string;
}

interface ServiceConstProps2 {
    category: string;
    subMenu: SubmenuProps2[];
}

interface SubmenuProps2 {
    label: string;
    link: string;
    desc: string[];
}

export const ServiceConst2: ServiceConstProps2 = {
    category: "Products and Services",
    subMenu: [{
        label: "Management Solutions",
        link: "https://www.asyst.co.id/our-products/category/apollo",
        desc: ["ERP Solution", "POS Point of Sales System", "Finance Information System"]
    }, {
        label: "Commercial Solutions",
        link: "https://www.asyst.co.id/our-products/category/anteros",
        desc: [ "Loyalty Platform Solution", "Full Package Direct Channel-", "Single Platform", "Recon-Refund"]
    }, {
        label: "Travel Management",
        link: "https://www.asyst.co.id/our-products/category/athena",
        desc: ["Corporate Travel Solution", "Automatic Ticket Changer", "Middleware Travel Agent", "Connection API"]
    }, {
        label: "Airline Solutions",
        link: "https://www.asyst.co.id/our-products/category/chronus",
        desc: ["Passenger Service System", "Fleet Operational System", "Aviator Briefing", "Digital Exceess Baggage", "Monitoring On-Time Performance"]
    }, {
        label: "Air Cargo Solutions",
        link: "https://www.asyst.co.id/our-products/category/hermes",
        desc: ["Integrated Cargo Solution"]
    }, {
        label: "Ground Operation Solutions",
        link: "https://www.asyst.co.id/our-products/category/auxoshift",
        desc: ["Resource Scheduling Platform", "Flight Information Departure System", "Meal Monitoring System"]
    }, {
        label: "IT Service Assistant",
        link: "https://www.asyst.co.id/our-products/category/elea",
        desc: ["ITSM System and Intelligent", "Contact Center"]
    }]
};

export const ServicesConst: ServicesConstProps[] = [{
    category: "Products and Services",
    subMenu: [{
        label: "Management Solutions",
        action: "https://www.asyst.co.id/our-products/category/apollo",

        desc: [{
            label: "ERP Solution",
        }, {
            label: "POS Custom Point of Sales System",
        }, {
            label: "Finance Information System",
        }, {
            label: "Procurement Solution",
        }, {
            label: "Mobile Banking",
        }]
    }, {
        label: "Commercial Solutions",
        action: "https://www.asyst.co.id/our-products/category/anteros",
        desc: [{
            label: "Loyalty Platform Solution",
        }, {
            label: "Full Package Direct Channel-Single Platform",
        }, {
            label: "Recon-Refund",
        }]
    }]
}, {
    category: "Products and Services",
    subMenu: [{
        label: "Travel Management",
        action: "https://www.asyst.co.id/our-products/category/athena",
        desc: [{
            label: "Corporate Travel Solution",
        }, {
            label: "Automatic Ticket Changer",
        }, {
            label: "Middleware Travel Agent",
        }, {
            label: "Connection API",
        }]
    }, {
        label: "Airline Solutions",
        action: "https://www.asyst.co.id/our-products/category/chronus",
        desc: [{
            label: "Passenger Service System",
        }, {
            label: "Fleet Operational System",
        }, {
            label: "Aviator Briefing",
        }, {
            label: "Digital Excess Baggage",
        }, {
            label: "Monitoring On-Time Performance",
        }]
    }]
}, {
    category: "Products and Services",
    subMenu: [{
        label: "Air Cargo Solutions",
        action: "https://www.asyst.co.id/our-products/category/hermes",
        desc: [{
            label: "Integrated Cargo Solution",
        }]
    }, {
        label: "Ground Operation Solutions",
        action: "https://www.asyst.co.id/our-products/category/auxoshift",
        desc: [{
            label: "Resource Scheduling Platform",
        }, {
            label: "Flight Information Departure System",
        }, {
            label: "Meal Monitoring System",
        }]
    }, {
        label: "IT Service Asistant",
        action: "https://www.asyst.co.id/our-products/category/elea",
        desc: [{
            label: "ITSM System and Intelligent",
        }, {
            label: "Contact Center",
        }]
    }]
}]
