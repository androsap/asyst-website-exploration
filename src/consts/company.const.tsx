import imgCareer from 'assets/img/icon/navbar/career.png';
import imgContact from 'assets/img/icon/navbar/contact.png';
import imgDemo from 'assets/img/icon/navbar/demo.png';

interface CompanyImgConstProps {
    img: string;
    title: string;
    highlight: string;
    link: string;
}

const CompanyImgConst: CompanyImgConstProps[] = [{
    img: imgCareer,
    title: "Career",
    highlight: "See opening positions and Join Action Team",
    link: "https://www.asyst.co.id/career"
}, {
    img: imgContact,
    title: "Contact and Support",
    highlight: "Got a questions about our product and services?",
    link: "https://www.asyst.co.id/contact-us"
}, {
    img: imgDemo,
    title: "Schedule a demo",
    highlight: "Our products and services ready to make your business growth ",
    link: ""
}]

export default CompanyImgConst;