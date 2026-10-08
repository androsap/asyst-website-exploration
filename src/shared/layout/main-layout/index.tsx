import { PropsWithChildren, useEffect, useState } from "react";
import HeaderShared from "shared/navigation/header";
import LayoutShared, { LayoutSharedProps } from "..";
import "./index.scss";
import SiteFooterShared from "shared/site-footer";
// import HomeProvider, { useHomeContext } from "components/home/components/provider";
import { Typography } from "components/ui/typography";
import { IconButton } from "components/ui/icon-button";
import { Slide } from "components/ui/transitions";
import { CloseRoundedIcon } from "components/ui/icons";
import { useLanguage } from "shared/i18n";

export interface MainLayoutSharedProps extends LayoutSharedProps {
    showDetailFooter?: boolean;
    hideDetailLogoFooter?: boolean;
    showMenuNavigation?: boolean;
    defaultNav?: boolean;
    showLiveChat?: boolean;
    blurNav?: boolean;
}

export default function MainLayoutShared({ showMenuNavigation = true, defaultNav = false, showLiveChat = true, blurNav = false, ...others }: PropsWithChildren<MainLayoutSharedProps>) {
    return <LayoutShared
        {...others}
        render={() => <>
            {/* <HomeProvider> */}
                {/* Navbar lama (shared/navigation/main-navigation) diganti header revamp 2026 */}
                {showMenuNavigation && <HeaderShared />}
                <ChildComponent {...others} />
            {/* </HomeProvider> */}
            {/* {showLiveChat && <LiveChat />} */}
        </>}
    />
}

interface ChildComponentProps extends MainLayoutSharedProps {
}

const ChildComponent = ({ children }: PropsWithChildren<ChildComponentProps>) => {
    const [show, setShow] = useState<boolean>(false);
    const language = useLanguage();

    useEffect(() => {
        if (!localStorage.getItem("cookies")) setShow(true)
    }, [])

    return <>
        <section>
            <div className="w-full relative">
                {children}
            </div>
        </section>
        {/* {!focus && <footer> */}
            <SiteFooterShared />

            {/* <FooterShared showDetail={showDetailFooter} hideDetailLogo={hideDetailLogoFooter} /> */}
        {/* </footer>} */}
        <Slide in={show} direction="up" unmountOnExit>
            <div className="fixed bottom-0 z-[9999] w-full">
                <div className="bg-white py-[5px] px-5 relative rounded-[10px_10px_0px_0px]">
                    <Typography className="text-[12px] max-w-[96%] text-justify">
                        {language === "ID"
                            ? <>Untuk mematuhi hukum perlindungan data yang baru, kami telah menyesuaikan kebijakan privasi, syarat penggunaan, dan kebijakan cookies kami. Dengan menggunakan website ini, Anda mengerti dan setuju dengan <a href="#">kebijakan privasi</a>, <a href="#">syarat penggunaan</a>, dan <a href="#">kebijakan cookies</a> kami yang baru.</>
                            : <>To comply with new data protection laws, we have updated our privacy policy, terms of use and cookie policy. By using this website, you understand and agree to our new <a href="#">privacy policy</a>, <a href="#">terms of use</a> and <a href="#">cookie policy</a>.</>}
                    </Typography>
                    <IconButton size="small" aria-label={language === "ID" ? "Tutup" : "Close"} className="absolute right-0 top-[10%] [transform:translate(-15%,-0%)]" onClick={() => (setShow(false), localStorage.setItem("cookies", "agree"))}><CloseRoundedIcon /></IconButton>
                </div>
            </div>
        </Slide>
    </>
}