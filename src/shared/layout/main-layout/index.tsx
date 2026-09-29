import Box from "@mui/material/Box";
import { PropsWithChildren, useEffect, useState } from "react";
import MainNavigationShared from "shared/navigation/main-navigation";
import LayoutShared, { LayoutSharedProps } from "..";
import "./index.scss";
import FooterShared from "shared/footer/index";
// import HomeProvider, { useHomeContext } from "components/home/components/provider";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import IconButton from "@mui/material/IconButton";

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
                {showMenuNavigation && <MainNavigationShared defaultNav={defaultNav} blurNav={blurNav}  />}
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

    useEffect(() => {
        if (!localStorage.getItem("cookies")) setShow(true)
    }, [])

    return <>
        <section>
            <Box width="100%" position="relative">
                {children}
            </Box>
        </section>
        {/* {!focus && <footer> */}
            <FooterShared></FooterShared>
            {/* <FooterShared showDetail={showDetailFooter} hideDetailLogo={hideDetailLogoFooter} /> */}
        {/* </footer>} */}
        <Slide in={show} direction="up" unmountOnExit>
            <Box position="fixed" bottom="0px" zIndex={9999} sx={{ width: "100%" }}>
                <Box bgcolor="#fff" p="5px 20px" position="relative" borderRadius="10px 10px 0px 0px">
                    <Typography fontSize="12px" sx={{ maxWidth: "96%", textAlign: "justify" }}>Untuk mematuhi hukum perlindungan data yang baru, kami telah menyesuaikan kebijakan privasi, syarat penggunaan, dan kebijakan cookies kami. Dengan menggunakan website ini, Anda mengerti dan setuju dengan <a href="#">kebijakan privasi</a>, <a href="#">syarat penggunaan</a>, dan <a href="#">kebijakan cookies</a> kami yang baru.</Typography>
                    <IconButton size="small" sx={{ position: "absolute", right: 0, top: "10%", transform: "translate(-15%, -0%)" }} onClick={() => (setShow(false), localStorage.setItem("cookies", "agree"))}><CloseRoundedIcon /></IconButton>
                </Box>
            </Box>
        </Slide>
    </>
}