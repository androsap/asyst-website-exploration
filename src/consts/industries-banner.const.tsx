import img1 from "assets/asyst/img/background/industry/img1.png";
import img2 from "assets/asyst/img/background/industry/img2.png";
import img3 from "assets/asyst/img/background/industry/img3.png";
import img4 from "assets/asyst/img/background/industry/img4.png";

interface IndustryBannerConstProps {
    img: string;
    btn: string;
}

export const IndustryBannerConst: IndustryBannerConstProps[] = [{
    img: img1,
    btn: "Airline",
}, {
    img: img2,
    btn: "Airport",
}, {
    img: img3,
    btn: "Banking",
}, {
    img: img4,
    btn: "Travel",
}]
