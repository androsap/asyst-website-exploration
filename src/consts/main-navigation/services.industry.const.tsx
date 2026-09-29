interface ServicesIndustryConstProps {
    category: string;
    subMenu: SubmenuProps[];
}

interface SubmenuProps {
    label: string;
    action: string;
    desc: string;
}

export const ServicesIndustryConst: ServicesIndustryConstProps[] = [{
    category: "Industries",
    subMenu: [
        {
            label: "Airline",
            action: "",
            desc: ""
        },
        {
            label: "Airport",
            action: "",
            desc: ""
        },
        {
            label: "Ground Handler",
            action: "",
            desc: ""
        },
        {
            label: "Loyalty",
            action: "",
            desc: ""
        },
        {
            label: "Industry Eco System",
            action: "",
            desc: ""
        }
    ]
}]