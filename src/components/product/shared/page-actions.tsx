import { lazy, Suspense } from "react";
import { openModal } from "components/ui/modal-host";
import { AskAsystTopic } from "consts/ask-asyst.const";

const RequestDemoComponent = lazy(() => import("components/home/components/request-demo"));
const AskAsystModal = lazy(() => import("./ask-asyst-modal"));


export const useTalkToExpert = (defaultTopic?: AskAsystTopic) => {
    return () => askAsystModal(defaultTopic);
};

export const requestDemoModal = () => {
    openModal({
        title: "Request Demo",
        className: "customBgsModal",
        render: ({ hide }) => <Suspense fallback={null}><RequestDemoComponent hide={hide} /></Suspense>
    })
};

export const askAsystModal = (defaultTopic?: AskAsystTopic) => {
    openModal({
        title: "Ask Asyst",
        className: "askAsystBgsModal",
        render: ({ hide }) => <Suspense fallback={null}><AskAsystModal hide={hide} defaultTopic={defaultTopic} /></Suspense>
    })
};

export const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const SECTION_IDS = {
    catalog: "product-catalog",
    lifecycle: "product-lifecycle",
};
