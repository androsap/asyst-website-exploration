import quote from "assets/asyst/img/background/industry/testimonials-quote.webp"

// Class Tailwind hasil konversi style MUI `sx` sebelumnya (nilai identik).
export const styles = {
    title: "text-[color:#1A1A1A] font-['Inter'] text-[length:36px] font-[700] leading-[44px] pb-[30px] pt-[100px]",
    mainBox: "rounded-[20px] [border:1px_solid_var(--nuted-extended-border-value,_#E2EAF1)] w-[100%] h-[280px] relative pt-[20px] pl-[24px] pr-[24px] [background-repeat:no-repeat] [background-position:24px_20px] flex flex-col",
    quoteGrid: "pt-[22px]",
    quote: "text-[color:var(--nuted-extended-bodytext-value,_#42423B)] font-['Inter'] text-[length:22px] italic font-[500] leading-[28px]",
    profileContainer: "mt-[34px] mb-[34px]",
    profileImage: "rounded-[90px] w-[70px] h-[70px]",
    name: "text-[color:#123554] font-['Source_Sans_Pro'] text-[length:20px] not-italic font-[600] leading-[32px]",
    position: "text-[color:#3A3A3A] font-['Source_Sans_Pro'] text-[length:16px] not-italic font-[600] leading-[normal]",
    company: "text-[color:#4A4A4A] font-['Source_Sans_Pro'] text-[length:14px] not-italic font-[400] leading-[normal]",
};

// Ikon kutipan (sebelumnya backgroundImage di sx)
export const mainBoxStyle = { backgroundImage: `url(${quote})` };
