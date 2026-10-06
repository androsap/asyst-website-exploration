import img1 from "assets/asyst/img/background/industry/img1.webp";
import img2 from "assets/asyst/img/background/industry/img2.webp";
import img3 from "assets/asyst/img/background/industry/img3.webp";
import img4 from "assets/asyst/img/background/industry/img4.webp";

interface CustomerConstProps {
    img: string;
    btn: string;
}

export const CustomerConstProps: CustomerConstProps[] = [{
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
