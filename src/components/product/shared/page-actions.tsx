import { openModal } from "components/ui/modal-host";
import RequestDemoComponent from "components/home/components/request-demo";
import { AskAsystTopic } from "consts/ask-asyst.const";
import AskAsystModal from "./ask-asyst-modal";

export const CONTACT_US_LINK = "/contact-us";

/** Handler tombol "Talk to Expert": buka modal "Let's Discuss your Business Challenge". */
export const useTalkToExpert = (defaultTopic?: AskAsystTopic) => {
    return () => askAsystModal(defaultTopic);
};

export const requestDemoModal = () => {
    openModal({
        title: "Request Demo",
        className: "customBgsModal",
        render: ({ hide }) => <RequestDemoComponent hide={hide} />
    })
};

/** Modal "Let's Discuss your Business Challenge" (desain revamp 2026). */
export const askAsystModal = (defaultTopic?: AskAsystTopic) => {
    openModal({
        title: "Ask Asyst",
        className: "askAsystBgsModal",
        render: ({ hide }) => <AskAsystModal hide={hide} defaultTopic={defaultTopic} />
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
