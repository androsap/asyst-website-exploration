import icon1 from "assets/asyst/img/icon/industry/work/icon-work-1.svg"
import icon11 from "assets/asyst/img/icon/industry/work/icon-work-1.1.svg"
import icon2 from "assets/asyst/img/icon/industry/work/icon-work-2.svg"
import icon22 from "assets/asyst/img/icon/industry/work/icon-work-2.2.svg"
import icon3 from "assets/asyst/img/icon/industry/work/icon-work-3.svg"
import icon33 from "assets/asyst/img/icon/industry/work/icon-work-3.3.svg"
import icon4 from "assets/asyst/img/icon/industry/work/icon-work-4.svg"
import icon44 from "assets/asyst/img/icon/industry/work/icon-work-4.4.svg"
import img1 from "assets/asyst/img/background/industry/work1.webp"

type WorkType = "discovery" | "design" | "development" | "test";

export const WorkTypeConst: WorkType[] = ["discovery", "design" , "development" , "test"]

interface WorkConstProps {
    type: WorkType;
    sequence: string;
    label: string;
    icon: string;
    icon2?: string;
    img?: string;
    title?: string;
    content?: string;
    step? :string;
}

const WorkConst: WorkConstProps[] = [{
    type: "discovery",
    sequence: "1",
    label: "Discovery and business requirement",
    icon: icon1,
    icon2: icon11,
    img: img1,
    title: "Discovery Phase",
    content: "We conduct thorough business analysis research on the client's business to identify areas for improvement , data and apps/product architecture before beginning any design and development work. Our planning phase is crucial to ensuring successful outcomes and delivering better results.",
    step: "01 We analyze through our business solution 02 We strategize through our engineering 03 We aim for an optimized result"
}, {
    type: "design",
    sequence: "2",
    label: "UI UX Design and Conceptual",
    icon: icon2,
    icon2: icon22,
    img: "",
    title: "",
    content: "",
    step: ""
}, {
    type: "development",
    sequence: "3",
    label: "Web and mobile development",
    icon: icon3,
    icon2: icon33,
    img: "",
    title: "",
    content: "",
    step: ""
}, {
    type: "test",
    sequence: "4",
    label: "Test and Security engineering",
    icon: icon4,
    icon2: icon44,
    img: "",
    title: "",
    content: "",
    step: ""
}]

export default WorkConst;