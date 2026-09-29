interface DestinationConstProps {
    category: string;
    subMenu: SubmenuProps[];
    categoryCode?: CategoryCodeDestination;
}

interface SubmenuProps{
    label:string;
    action: string;
}

export type CategoryCodeDestination = "DESTINATION" | "RUTE";

const DestinationConst: DestinationConstProps[] = [{
    category: "Destinasi",
    categoryCode:"DESTINATION",
    subMenu: [{
        label: "Jakarta",
        action: "https://www.garuda-indonesia.com/id/id/destination/jakarta"
    }, {
        label: "Kuala Lumpur",
        action: "https://www.garuda-indonesia.com/id/id/destination/kuala-lumpur"
    }, {
        label: "Bangkok",
        action: "https://www.garuda-indonesia.com/id/id/destination/bangkok"
    }, {
        label: "Sydney",
        action: "https://www.garuda-indonesia.com/id/id/destination/sydney"
    }, {
        label: "Guangzhou",
        action: "https://www.garuda-indonesia.com/id/id/destination/guangzhou"
    }, {
        label: "Selengkapnya",
        action: "https://www.garuda-indonesia.com/id/id/destination/index"
    }]
}, {
    category: "Rute",
    categoryCode:"RUTE",
    subMenu: [{
        label: "Rute Domestik",
        action: "https://www.garuda-indonesia.com/id/id/destination/route-map/index-domestic"
    }, {
        label: "Rute International",
        action: "https://www.garuda-indonesia.com/id/id/destination/route-map/index-international"
    }, {
        label: "Rute Codeshare",
        action: "https://www.garuda-indonesia.com/id/id/destination/route-map/rute-codeshare"
    }]
}]

export default DestinationConst;