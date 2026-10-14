import { localized } from "shared/i18n";
import { SOLUTION_BASE_PATH } from "./solution-links.const";

import imgProducts from "assets/asyst/img/background/services-solutions/amala2.webp";
import imgSolutions from "assets/asyst/img/background/story/story-2-jpg.webp";
import imgExpert from "assets/asyst/img/background/story/story-1-jpg.webp";

export interface NotFoundCard {
    title: string;
    description: string;
    image: string;
    link?: string;
}

export const NotFoundConst = localized({
    seoTitle: "Page Not Found | ASYST",
    title: "404 Page not found",
    description: {
        before: "The page you are looking for doesn't seem to exist. You can go back to the ",
        link: "Homepage",
        after: ", or search for products, solutions and industries from ASYST",
    },
    searchLabel: "Find ASYST products, solutions and industries",
    searchPlaceholder: "Example: loyalty platform, security operations center",
    searchSubmit: "Search",
    cards: [
        { title: "Explore our products", description: "Discover ASYST enterprise products for loyalty, travel, operations and IT services", image: imgProducts, link: "/product" },
        { title: "Find the right solution", description: "See how ASYST solutions help modernize, connect and secure your technology environment", image: imgSolutions, link: SOLUTION_BASE_PATH },
        { title: "Talk to an expert", description: "Not sure where to start? Discuss your business challenge with the ASYST team", image: imgExpert },
    ] as NotFoundCard[],
}, {
    seoTitle: "Halaman Tidak Ditemukan | ASYST",
    title: "404 Halaman tidak ditemukan",
    description: {
        before: "Sepertinya halaman yang sedang Anda cari tidak ada. Anda dapat kembali ke ",
        link: "Beranda",
        after: ", atau mencari produk, solusi, dan industri dari ASYST",
    },
    searchLabel: "Temukan produk, solusi, dan industri ASYST",
    searchPlaceholder: "Contoh: platform loyalitas, security operations center",
    searchSubmit: "Cari",
    cards: [
        { title: "Jelajahi produk kami", description: "Temukan produk enterprise ASYST untuk loyalitas, perjalanan, operasional, dan layanan IT" },
        { title: "Temukan solusi yang tepat", description: "Lihat bagaimana solusi ASYST membantu memodernisasi, menghubungkan, dan mengamankan lingkungan teknologi Anda" },
        { title: "Hubungi ahli kami", description: "Bingung harus mulai dari mana? Diskusikan tantangan bisnis Anda bersama tim ASYST" },
    ],
});
