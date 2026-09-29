interface TripConstProps {
    category: string;
    action?: string;
    subMenu: SubmenuProps[];
    categoryCode?: CategoryCodePerjalanan;
}

interface SubmenuProps {
    label: string;
    action: string;
}

export type CategoryCodePerjalanan = "SEBELUM-KEBERANGKATAN" | "DI-DALAM-PESAWAT" | "FITUR-KABIN" | "ARMADA" | "SKY-PRIORITY"| "KONSEP-LAYANAN";


const TripConst: TripConstProps[] = [{
    category: "Sebelum Keberangkatan",
    categoryCode: "SEBELUM-KEBERANGKATAN",
    subMenu: [{
        label: "Check-In",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/on-ground/check-in/index"
    }, {
        label: "Layanan Premium",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/on-ground/premium-service/index"
    }, {
        label: "Bagasi",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/on-ground/baggage/index"
    }/**, {
        label: "Pemilihan Kursi",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/on-ground/seat-selection"
    } */, {
        label: "Kondisi Medis",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/on-ground/special-needs/index"
    }, {
        label: "Ibu Hamil",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/on-ground/traveling-procedures-for-expectant-mothers"
    }, {
        label: "Airport Map",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/on-ground/airport-map"
    }, {
        label: "Selengkapnya",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/on-ground/index"
    }]
}, {
    category: "Di dalam Pesawat",
    categoryCode: "DI-DALAM-PESAWAT",
    subMenu: [{
        label: "Kabin",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/in-flight/cabin/index"
    }, {
        label: "Hidangan Khusus",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/in-flight/special-meal/index"
    }, {
        label: "Hiburan dalam Pesawat",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/in-flight/in-flight-entertainment/index"
    }, {
        label: "Internet dalam Pesawat",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/in-flight/connectivity/index"
    }, {
        label: "Selengkapnya",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/in-flight/index"
    }]
}, {
    category: "Fitur Kabin",
    categoryCode: "FITUR-KABIN",
    subMenu: [{
        label: "First Class",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/first-class/index"
    }, {
        label: "Business Class",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/in-flight/cabin/business-class"
    }, {
        label: "Economy Class",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/in-flight/cabin/economy-class"
    }]
}, {
    category: "Armada",
    categoryCode: "ARMADA",
    subMenu: [{
        label: "Revitalisasi Armada",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/fleets/fleet-revitalization"
    }, {
        label: "Denah Tempat Duduk",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/fleets/seat-map"
    }]
}, {
    category: "Sky Priority",
    categoryCode: "SKY-PRIORITY",
    subMenu: [{
        label: "Daftar Bandara dengan Layanan Sky Priority",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/airport-list"
    }]
}, {
    category: "Konsep Layanan",
    categoryCode: "KONSEP-LAYANAN",
    action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/service-concept/index",
    subMenu: [{
        label: "Garuda Indonesia Experience",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/service-concept/index"
    }/**{
        label: "Penglihatan",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/service-concept/index"
    }, {
        label: "Suara",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/service-concept/index"
    }, {
        label: "Aroma",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/service-concept/index"
    }, {
        label: "Rasa",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/service-concept/index"
    }, {
        label: "Sentuhan",
        action: "https://www.garuda-indonesia.com/id/id/garuda-indonesia-experience/service-concept/index"
    }*/]
}]

export default TripConst;