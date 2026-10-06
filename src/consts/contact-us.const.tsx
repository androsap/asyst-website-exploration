// Konten statis halaman Contact Us (desain revamp 2026).
// Tiap konten dua bahasa: argumen pertama `localized` = EN (lengkap), kedua = terjemahan ID (teks saja).
import { localized } from "shared/i18n";

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

export const ContactHeroConst = localized({
    title: "How can we help?",
    description: [
        "As your dedicated technology partner, we're here to help.",
        "Tell us what you’re looking for and we’ll get you connected to the right people.",
    ],
}, {
    title: "Apa yang bisa kami bantu?",
    description: [
        "Sebagai mitra teknologi Anda, kami siap membantu.",
        "Ceritakan kebutuhan Anda dan kami akan menghubungkan Anda dengan orang yang tepat.",
    ],
});

export const ContactFormConst = localized({
    title: "Contact us",
    bookCall: "Book a Call",
    description: "or fill out the form below and we’ll get back to you once we’ve processed your request.",
    submit: "Submit",
    successMessage: "Thank you! Your request has been received. Our team will get back to you shortly.",
    /** `{field}` diganti placeholder kolom */
    requiredError: "{field} is required",
    emailError: "Please enter a valid email address",
    phoneError: "Please enter a valid phone number",
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
}, {
    title: "Hubungi kami",
    bookCall: "Jadwalkan Panggilan",
    description: "atau isi formulir di bawah ini dan kami akan menghubungi Anda setelah permintaan Anda diproses.",
    submit: "Kirim",
    successMessage: "Terima kasih! Permintaan Anda telah kami terima. Tim kami akan segera menghubungi Anda.",
    requiredError: "{field} wajib diisi",
    emailError: "Masukkan alamat email yang valid",
    phoneError: "Masukkan nomor telepon yang valid",
    rows: [
        [{ placeholder: "Nama lengkap" }],
        [
            { placeholder: "Jabatan" },
            { placeholder: "Nama perusahaan" },
        ],
        [
            { placeholder: "Alamat email bisnis" },
            { placeholder: "Telepon" },
        ],
    ],
    message: { placeholder: "Apa idenya, bagaimana latar belakangnya, dan apa saja tantangannya?" },
});

export const ContactNextStepsConst = localized({
    title: "What next?",
    steps: [
        "Once we’ve received and processed your request form, we’ll get back with your project needs",
        "After examining your wants and needs, Asyst team will devise a project proposal with the scope of work, team size, time, and cost estimates.",
        "Asyst will arrange a meeting to discuss the offer and the details.",
        "We will sign a contract and start working on your project, Finally.",
    ],
}, {
    title: "Langkah selanjutnya?",
    steps: [
        "Setelah formulir permintaan Anda kami terima dan proses, kami akan menghubungi Anda terkait kebutuhan proyek",
        "Setelah mempelajari keinginan dan kebutuhan Anda, tim Asyst akan menyusun proposal proyek berisi ruang lingkup pekerjaan, ukuran tim, waktu, dan estimasi biaya.",
        "Asyst akan mengatur pertemuan untuk membahas penawaran beserta detailnya.",
        "Terakhir, kita menandatangani kontrak dan mulai mengerjakan proyek Anda.",
    ],
});

export const ContactOfficeConst = localized({
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
}, {
    title: "Lokasi Kantor Kami",
    viewMap: "Lihat Peta",
    offices: [
        {
            title: "Kantor Terdaftar",
            address: [
                "Gedung Garuda, Lantai 1",
                "Jl. Gunung Sahari Raya No. 52 Kemayoran, Jakarta Pusat 10610 - Indonesia",
            ],
        },
        {
            title: "Kantor Manajemen",
            address: ["Gedung Information System, Lantai 3, RT.001/RW.010, Pajang, Benda, Kota Tangerang, Banten 15126"],
        },
    ],
});
