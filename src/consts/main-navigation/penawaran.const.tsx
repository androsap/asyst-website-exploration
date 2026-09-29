interface PenawaranConstProps {
    category: string;
    subMenu: SubmenuProps[];
}

interface SubmenuProps{
    label:string;
    action: string;
}

const PenawaranConst: PenawaranConstProps[] = [{
    category: "Penawaran",
    subMenu: [{
        label: "GarudaShop",
        action: "https://www.garuda-indonesia.com/garudamiles/id/news-and-offers/news/GarudaShop"
    }, {
        label: "Layanan Tambahan",
        action: "https://www.garuda-indonesia.com/id/id/special-offers/sales-promotion/ancillary"
    }, {
        label: "Harga Istimewa",
        action: "https://www.garuda-indonesia.com/flights/id/"
    }, {
        label: "Promo",
        action: "https://www.garuda-indonesia.com/id/id/special-offers/sales-promotion"
    }]
}, {
    category: "Penawaran",
    subMenu: [{
        label: "Corporate Privilege",
        action: "https://www.garuda-indonesia.com/id/id/corporate-partners/corporate-privilege"
    }, {
        label: "Penerbangan Charter",
        action: "https://www.garuda-indonesia.com/id/id/special-offers/sales-promotion/garuda-indonesia-charter"
    }, {
        label: "BPTV",
        action: "https://www.garuda-indonesia.com/id/id/special-offers/bptv"
    }, {
        label: "Garuda Simulator Experience",
        action: "https://www.garuda-indonesia.com/GASimulator"
    }, {
        label: "Tiket Kereta Api Bandara",
        action: "https://www.railink.co.id/"
    }]
}]

export default PenawaranConst;