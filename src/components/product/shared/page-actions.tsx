import { useNavigate } from "react-router-dom";
import { bgsModal } from "@andrydharmawan/bgs-component";
import RequestDemoComponent from "components/home/components/request-demo";
import { AskAsystTopic } from "consts/ask-asyst.const";
import AskAsystModal from "./ask-asyst-modal";

export const CONTACT_US_LINK = "/contact-us";

/** Handler tombol "Talk to Expert": arahkan ke halaman Contact Us. */
export const useTalkToExpert = () => {
    const navigate = useNavigate();
    return () => navigate(CONTACT_US_LINK);
};

export const requestDemoModal = () => {
    bgsModal({
        isBlur: true,
        className: "customBgsModal",
        render: (e) => <RequestDemoComponent hide={e.hide} />
    })
};

/** Modal "Let's Discuss your Business Challenge" (desain revamp 2026). */
export const askAsystModal = (defaultTopic?: AskAsystTopic) => {
    bgsModal({
        isBlur: true,
        className: "askAsystBgsModal",
        render: (e) => <AskAsystModal hide={() => e.hide()}defaultTopic={defaultTopic} />
    })
};

/** Scroll halus ke section berdasarkan id (offset navbar diatur lewat scroll-margin-top di CSS). */
export const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const SECTION_IDS = {
    catalog: "product-catalog",
    lifecycle: "product-lifecycle",
};
