interface GarudamilesConstProps {
    category: string;
    subMenu: SubmenuProps[];
    action?:string;
    categoryCode?: CategoryCodeGarudaMiles;
}

interface SubmenuProps {
    label: string;
    action: string;
}

export type CategoryCodeGarudaMiles = "PROMO" | "PENUKARAN-MILES" | "PEROLEHAN-MILES" | "TENTANG-GARUDA-MILES" | "LAINNYA";

const GarudamilesConst: GarudamilesConstProps[] = [{
    category: "Promo dan Info", 
    categoryCode: "PROMO",
    action:"https://www.garuda-indonesia.com/garudamiles/id/news-and-offers/index",
    subMenu: [{
        label: "Promo", action: "https://www.garuda-indonesia.com/id/id/special-offers/sales-promotion?tabno=2.html"
    }, {
        label: "Info", action: "https://www.garuda-indonesia.com/garudamiles/id/news-and-offers/news/index"
    }, {
        label: "Kalkulator Bagasi Berlebih", action: "https://www.garuda-indonesia.com/garudamiles/id/excess-baggage-rate-calculator"
    }
    // , {
    //     label: "Lebih banyak", action: "https://www.garuda-indonesia.com/garudamiles/id/news-and-offers/index"
    // }
]
}, {
    category: "Penukaran Miles", action:"https://www.garuda-indonesia.com/garudamiles/id/penukaran-miles/index",
    categoryCode: "PENUKARAN-MILES",
    subMenu: [{
        label: "Terbang", action: "https://www.garuda-indonesia.com/garudamiles/id/penukaran-miles/terbang"
    }, {
        label: "Donasi", action: "https://www.garuda-indonesia.com/garudamiles/id/penukaran-miles/donasi"
    }, {
        label: "Hotel", action: "https://www.garuda-indonesia.com/garudamiles/id/penukaran-miles/Hotel"
    }, {
    //     label: "E-Commerce", action: "https://www.garuda-indonesia.com/garudamiles/id/penukaran-miles/shop-e-commerce"
    // }, {
        label: "Selengkapnya", action: "https://www.garuda-indonesia.com/garudamiles/id/penukaran-miles/index"
    }]
}, {
    category: "Perolehan Miles", action: "https://www.garuda-indonesia.com/garudamiles/id/perolehan-miles/index",
    categoryCode: "PEROLEHAN-MILES",
    subMenu: [{
        label: "Terbang", action: "https://www.garuda-indonesia.com/garudamiles/id/perolehan-miles/terbang"
    }, {
        label: "Menginap", action: "https://www.garuda-indonesia.com/garudamiles/id/perolehan-miles/menginap"
    }, {
        label: "Perbankan & Keuangan", action: "https://www.garuda-indonesia.com/garudamiles/id/perolehan-miles/perbankan-dan-keuangan"
    }, {
        label: "Beli Miles", action: "https://www.garuda-indonesia.com/garudamiles/id/perolehan-miles/beli-miles"
    }, {
    //     label: "Lifestyle", action: "https://www.garuda-indonesia.com/garudamiles/id/perolehan-miles/lifestyle"
    // }, {
        label: "Selengkapnya", action: "https://www.garuda-indonesia.com/garudamiles/id/perolehan-miles/index"
    }]
},
//  {
//     category: "Extra",
//     subMenu: [{
//         label: "Ajukan Kartu Kredit Garuda Indonesia Citi", action: "https://www.garuda-indonesia.com/garudamiles/id/tentang-garudamiles/co-brand-citibank"
//     }, {
//         label: "Ajukan Kartu Kredit Garuda Indonesia BNI", action: "https://www.garuda-indonesia.com/garudamiles/id/tentang-garudamiles/co-brand-kredit-bni" 
//     }]
// }, 
{
    category: "Tentang GarudaMiles", action:"https://www.garuda-indonesia.com/garudamiles/id/tentang-garudamiles/index",
    categoryCode: "TENTANG-GARUDA-MILES",
    subMenu: [{
    //     label: "GarudaMiles Gold", action: "https://www.garuda-indonesia.com/garudamiles/id/tentang-garudamiles/garudamiles-ec"
    // }, {
        label: "GarudaMiles Reguler", action: "https://www.garuda-indonesia.com/garudamiles/id/tentang-garudamiles/garudamiles-regular"
    }, {
        label: "GarudaMiles Junior", action: "https://www.garuda-indonesia.com/garudamiles/id/tentang-garudamiles/garudamiles-junior"
    }, {
        label: "Selengkapnya", action: "https://www.garuda-indonesia.com/garudamiles/id/tentang-garudamiles/index"
    }]
},{
    category:"Lainnya", action:"https://www.garuda-indonesia.com/garudamiles/id/others/index",
    categoryCode: "LAINNYA",
    subMenu: [{
        label: "Hubungi Kami", action: "https://www.garuda-indonesia.com/garudamiles/id/hubungi-kami"
    }, {
        label: "Unduhan", action: "https://www.garuda-indonesia.com/garudamiles/id/unduhan"
    }, {
        label: "Selengkapnya", action: "https://www.garuda-indonesia.com/garudamiles/id/others/index"
    }]
}]

export default GarudamilesConst;