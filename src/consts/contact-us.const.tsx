// Konten statis halaman Contact Us (desain revamp 2026).

export interface ContactField {
    name: ContactFieldName;
    placeholder: string;
    type?: "text" | "email" | "tel";
    required?: boolean;
}

export type ContactFieldName = "fullName" | "jobTitle" | "companyName" | "email" | "phone" | "message";

export interface ContactOffice {
    title: string;
    address: string[];
    mapLink: string;
}

export const ContactHeroConst = {
    title: "How can we help?",
    description: [
        "As your dedicated technology partner, we're here to help.",
        "Tell us what you’re looking for and we’ll get you connected to the right people.",
    ],
};

export const ContactFormConst = {
    title: "Contact us",
    bookCall: "Book a Call",
    description: "or fill out the form below and we’ll get back to you once we’ve processed your request.",
    submit: "Submit",
    successMessage: "Thank you! Your request has been received. Our team will get back to you shortly.",
    // Baris form: tiap array = satu baris (maks. 2 kolom); "message" tampil sebagai textarea penuh
    rows: [
        [{ name: "fullName", placeholder: "Full name", required: true }],
        [
            { name: "jobTitle", placeholder: "Job Title" },
            { name: "companyName", placeholder: "Company Name", required: true },
        ],
        [
            { name: "email", placeholder: "Business email address", type: "email", required: true },
            { name: "phone", placeholder: "Phone", type: "tel" },
        ],
    ] as ContactField[][],
    message: { name: "message", placeholder: "What’s the idea, the background, and what are the challenges?", required: true } as ContactField,
};

export const ContactNextStepsConst = {
    title: "What next?",
    steps: [
        "Once we’ve received and processed your request form, we’ll get back with your project needs",
        "After examining your wants and needs, Asyst team will devise a project proposal with the scope of work, team size, time, and cost estimates.",
        "Asyst will arrange a meeting to discuss the offer and the details.",
        "We will sign a contract and start working on your project, Finally.",
    ],
};

export const ContactOfficeConst = {
    title: "Our Office Location",
    viewMap: "View Map",
    offices: [
        {
            title: "Registered Office",
            address: [
                "Gedung Garuda, 1st Floor",
                "Jl. Gunung Sahari Raya No. 52 Kemayoran Central Jakarta 10610 - Indonesia",
            ],
            mapLink: "https://www.google.com/maps/search/?api=1&query=Jl.+Gunung+Sahari+Raya+No.+52+Kemayoran+Jakarta+Pusat+10610",
        },
        {
            title: "Management Office",
            address: ["Information System Building, 3rd floor, RT.001/RW.010, Pajang, Benda, Tangerang City, Banten 15126"],
            mapLink: "https://www.google.com/maps/search/?api=1&query=Garuda+Information+System+Building+Pajang+Benda+Tangerang+15126",
        },
    ] as ContactOffice[],
};
