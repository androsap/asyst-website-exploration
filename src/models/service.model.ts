interface SubNavbar3 {
    title_id: string;
    title_en: string;
    link: string;
}

export interface SubNavbar2 {
    title_id: string;
    title_en: string;
    link: string;
    image?: string | null;
    sub_navbar_3: SubNavbar3[];
}

interface SubNavbar1 {
    title_id: string;
    title_en: string;
    link: string;
    image?: string | null;
    sub_navbar_2: SubNavbar2[];
}

export interface MainNavbar {
    title_id: string;
    title_en: string;
    link: string;
    sub_navbar_1: SubNavbar1[];
}