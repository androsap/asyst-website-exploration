import img1 from "assets/asyst/img/background/bg-1.jpg";
import img2 from "assets/asyst/img/background/bg-2.jpg";
import img3 from "assets/asyst/img/background/bg-3.jpg";

interface MainSliderConstProps {
    img: string;
    title: string;
    content: string;
}

const MainSliderConst: MainSliderConstProps[] = [{
    img: img3,
    title: "We provide",
    content: "the most compelling IT Solutions for Aviation Ecosystems"
}, {
    img: img2,
    title: "Your IT Lifeline, 24/7, Anytime",
    content: "Welcome to the future of support, where the clock never stops, and your challenges never stand a chance."
}, {
    img: img1,
    title: "Stay, Play, and Earn Your Way!",
    content: "Unlock a world of rewards with our loyalty system, where your loyalty is the key to a treasure trove of exclusive benefits and special surprises."
}]

export default MainSliderConst;