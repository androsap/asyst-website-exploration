interface BusinessSolutionConstProps {
    category: string;
    subMenu: SubmenuProps[];
    action: string;
}

interface SubmenuProps {
    label: string;
    action: string;
}

export const BusinessSolutionConst1: BusinessSolutionConstProps[] = [{
    category: "Infrastructure and Managed Services",
    action:"",
    subMenu: [{
        label: "Application Management Service",
        action: ""
    }, {
        label: "24/7 Servicedesk",
        action: ""
    }, {
        label: "IT Infrastructures Services",
        action: ""
    }, {
        label: "Data Center Services",
        action: ""
    }, {
        label: "End User Computing Services",
        action: ""
    }, {
        label: "IT Service Management",
        action: ""
    }]
}]

export const BusinessSolutionConst2: BusinessSolutionConstProps[] =[{
    category: "Professional Services",
    action:"",
    subMenu: [ {
        label: "Enterprise Mobility",
        action: "https://www.asyst.co.id/our-services/category/professional-services"
    }, {
        label: "Digital Marketing and Analytics Platform",
        action: "https://www.asyst.co.id/our-services/category/professional-services"
    }, {
        label: "Big Data and Analytics",
        action: "https://www.asyst.co.id/our-services/category/professional-services"
    }, {
        label: "Portal and Information Delivery",
        action: "https://www.asyst.co.id/our-services/category/professional-services"
    }, {
        label: "SOA and ESB",
        action: "https://www.asyst.co.id/our-services/category/professional-services"
    }, {
        label: "Custom Application and Development",
        action: "https://www.asyst.co.id/our-services/category/professional-services"
    }]
}]

export const BusinessSolutionConst3: BusinessSolutionConstProps[] =[{
    category: "Business Process Outsourcing",
    action: "https://www.asyst.co.id/career",
    subMenu: [ {
        label: "Application Management Services",
        action: "https://www.asyst.co.id/our-services/category/infrastructure-and-managed-services"
    }, {
        label: "24/7 Services Desk",
        action: "https://www.asyst.co.id/our-services/category/infrastructure-and-managed-services"
    }, {
        label: "IT Infrastuctures Services",
        action: "https://www.asyst.co.id/our-services/category/infrastructure-and-managed-services"
    }, {
        label: "Data Center Services",
        action: "https://www.asyst.co.id/our-services/category/infrastructure-and-managed-services"
    }, {
        label: "End User Computing Services",
        action: "https://www.asyst.co.id/our-services/category/infrastructure-and-managed-services"
    }, {
        label: "IT Service Management",
        action: "https://www.asyst.co.id/our-services/category/infrastructure-and-managed-services"
    }]
}]


