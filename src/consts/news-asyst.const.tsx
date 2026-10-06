import img5 from "assets/asyst/img/background/news/v2ultah.png"
import img6 from "assets/asyst/img/background/news/v2ibm.png";
import img7 from "assets/asyst/img/background/news/v2lib.png";
import img8 from "assets/asyst/img/background/news/v2baggage.png";
import moment from "moment";
import { localized } from "shared/i18n";

type NewsType = "All" | "Company" | "Technology" | "Events" | "Expertise" | "Logistics";

export const NewsTypeConst: NewsType[] = ["All", "Company", "Technology", "Events", "Expertise", "Logistics"]

interface NewsConstProps {
    type: NewsType;
    img: string;
    title: string;
    date?: string;
    author?: string;
}

const NewsConst: NewsConstProps[] = [{
    type: "Company",
    img: img5,
    title: "Asyst's 18th anniversary, as well as welcoming the new CEO",
    date: moment().format("MMMM DD, YYYY"),
    author: "Admin"
}, {
    type: "Logistics",
    img: img8,
    title: "Site Visit for Baggage Tracking Project with Gapura Angkasa",
    date: moment().format("MMMM DD, YYYY"),
    author: "Admin"
}, {
    type: "Expertise",
    img: img7,
    title: "Asyst is ready to support LIB programs through Super Apps applications",
    date: moment().format("MMMM DD, YYYY"),
    author: "Admin"
}, {
    type: "Events",
    img: img6,
    title: "IBM Workshop Garuda Indonesia Group",
    date: moment().format("MMMM DD, YYYY"),
    author: "Admin"
}]

export default NewsConst;

/** NewsConst dua bahasa (dipakai section News di homepage; `type` tetap key kategori) */
export const HomeNewsConst = localized(NewsConst, [
    { title: "HUT ke-18 Asyst sekaligus menyambut CEO baru" },
    { title: "Kunjungan Lapangan Proyek Baggage Tracking bersama Gapura Angkasa" },
    { title: "Asyst siap mendukung program LIB melalui aplikasi Super Apps" },
    { title: "Workshop IBM Garuda Indonesia Group" },
]);
