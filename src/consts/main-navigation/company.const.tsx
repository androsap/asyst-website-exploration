interface CompanyConstProps {
    category: string;
    subMenu: SubmenuProps[];
}

interface SubmenuProps{
    label:string;
    action: string;
}

const CompanyConst: CompanyConstProps[] = [{
    category: "Aero Systems Indonesia",
    subMenu: [{
        label: "About us",
        action: "https://www.asyst.co.id/about-us"
    }, {
        label: "Leadership and Team",
        action: "https://www.asyst.co.id/about-us"
    }, 
    // {
    //     label: "Customers",
    //     action: "https://www.garuda-indonesia.com/flights/id/"
    // }, {
    //     label: "Partners",
    //     action: "https://www.garuda-indonesia.com/id/id/special-offers/sales-promotion"
    // }
]
}]

export default CompanyConst;