import bannerBackground from 'assets/asyst/img/background/industry/industry-detail.webp';

// Class Tailwind hasil konversi style MUI `sx` sebelumnya (nilai identik).
export const styles = {
    backNavContainer: "pl-[122px] flex items-center cursor-pointer mb-[auto] mt-[120px] z-[1]",
    backNavText: "text-[color:#FFF] font-['Source_Sans_Pro'] text-[length:16px] not-italic font-[400] leading-[normal] ml-[12px]",
    mainBox: "relative text-[color:#FFFFFF] h-[100vh] [background-size:cover] flex",
    overlayBox: "absolute top-[0px] left-[0px] w-[100%] h-[100%] [background-image:linear-gradient(180deg,_rgba(16,_16,_16,_0.00)_0%,_rgba(16,_16,_16,_0.78)_45.31%,_#101010_100%)]",
    headerBox: "flex flex-row items-center cursor-pointer mb-[auto] mt-[120px] z-[1] pl-[20%] pr-[20%]",
    headerTitle: "text-[color:#FFF] font-['Inter'] text-[length:57px] not-italic font-[700] leading-[64px]",
    headerSubtitle: "text-[color:#F4F4F4] font-['Inter'] text-[length:22px] not-italic font-[500] leading-[32px] mt-[29px]",
};

// Gambar banner (sebelumnya backgroundImage di sx)
export const mainBoxStyle = { backgroundImage: `url(${bannerBackground})` };

// Dipakai langsung sebagai inline style pada ikon SVG
export const headerLinkIconStyle = { marginLeft: '12px' };

// Dipakai langsung sebagai inline style pada logo slider (nilai sama dengan sebelumnya)
export const contentStyles = {
    logoContainer: { height: '90px', padddingBottom: '120px' },
    logoSwiperSlider: { width: 'auto', marginRight: '24px' },
    logo: { width: '100%', maxHeight: '38px' },
};

export const logoTitleClass = "text-[color:#1A1A1A] font-['Inter'] text-[length:36px] not-italic font-[700] leading-[44px]";
