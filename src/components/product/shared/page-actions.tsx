import { lazy, Suspense } from "react";
import { openModal } from "components/ui/modal-host";
import { AskAsystTopic } from "consts/ask-asyst.const";

// Isi modal (form, radio group, dsb.) baru diunduh saat modal dibuka, supaya tidak ikut bundle awal header/halaman
const RequestDemoComponent = lazy(() => import("components/home/components/request-demo"));
const AskAsystModal = lazy(() => import("./ask-asyst-modal"));

export const CONTACT_US_LINK = "/contact-us";

/** Handler tombol "Talk to Expert": buka modal "Let's Discuss your Business Challenge". */
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

/** Modal "Let's Discuss your Business Challenge" (desain revamp 2026). */
export const askAsystModal = (defaultTopic?: AskAsystTopic) => {
    openModal({
        title: "Ask Asyst",
        className: "askAsystBgsModal",
        render: ({ hide }) => <Suspense fallback={null}><AskAsystModal hide={hide} defaultTopic={defaultTopic} /></Suspense>
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
