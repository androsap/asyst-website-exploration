// Konten modal "Ask Asyst" / Request Demo (desain revamp 2026).
// Argumen pertama `localized` = EN (lengkap), kedua = terjemahan ID (teks saja).
import { localized } from "shared/i18n";

export type AskAsystTopic = "enterprise" | "it-solutions" | "product-demo";

export const ASK_ASYST_MESSAGE_MAX = 255;

export const AskAsystConst = localized({
    title: "Let’s Discuss your Business Challenge",
    topicLabel: "What do you need help with?",
    topics: [
        { value: "enterprise", label: "Enterprise products" },
        { value: "it-solutions", label: "IT Solutions" },
        { value: "product-demo", label: "Product demo" },
    ] as { value: AskAsystTopic; label: string }[],
    fullName: { label: "Fullname", placeholder: "Your full name" },
    email: { label: "Work E-mail", placeholder: "name@company.com" },
    phone: { label: "Mobile phone number", placeholder: "821289930666" },
    company: { label: "Company", placeholder: "Company name" },
    jobTitle: {
        label: "Job title",
        placeholder: "Select job title",
        options: ["C-Level / Executive", "Director / VP", "Manager", "Supervisor / Team Lead", "Staff / Specialist", "Other"],
    },
    subject: { label: "Subject", placeholder: "I want to ask about loyalty platform" },
    message: { label: "Business challenge", placeholder: "Type your business requirement" },
    submit: "Submit",
    close: "Close",
    successTitle: "Thank You, We’ve received your message",
    back: "Back",
    /** `{field}` diganti label kolom */
    requiredError: "{field} is required",
    emailError: "Please enter a valid email address",
    phoneError: "Please enter a valid phone number",
}, {
    title: "Mari Diskusikan Tantangan Bisnis Anda",
    topicLabel: "Apa yang bisa kami bantu?",
    topics: [
        { label: "Produk enterprise" },
        { label: "Solusi TI" },
        { label: "Demo produk" },
    ],
    fullName: { label: "Nama lengkap", placeholder: "Nama lengkap Anda" },
    email: { label: "E-mail kantor", placeholder: "nama@perusahaan.com" },
    phone: { label: "Nomor ponsel" },
    company: { label: "Perusahaan", placeholder: "Nama perusahaan" },
    jobTitle: {
        label: "Jabatan",
        placeholder: "Pilih jabatan",
        options: ["C-Level / Eksekutif", "Direktur / VP", "Manajer", "Supervisor / Team Lead", "Staf / Spesialis", "Lainnya"],
    },
    subject: { label: "Subjek", placeholder: "Saya ingin bertanya tentang platform loyalty" },
    message: { label: "Tantangan bisnis", placeholder: "Tuliskan kebutuhan bisnis Anda" },
    submit: "Kirim",
    close: "Tutup",
    successTitle: "Terima kasih, pesan Anda telah kami terima",
    back: "Kembali",
    requiredError: "{field} wajib diisi",
    emailError: "Masukkan alamat email yang valid",
    phoneError: "Masukkan nomor telepon yang valid",
});

/** Kode negara untuk nomor ponsel (tanpa "+") */
export const PHONE_COUNTRY_CODES = ["62", "65", "60", "66", "63", "84", "61", "81", "82", "86", "91", "1", "44"];
