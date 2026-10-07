import img5 from "assets/asyst/img/background/news/v2ultah.webp"
import img6 from "assets/asyst/img/background/news/v2ibm.webp";
import img7 from "assets/asyst/img/background/news/v2lib.webp";
import img8 from "assets/asyst/img/background/news/v2baggage.webp";
import moment from "moment";

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
