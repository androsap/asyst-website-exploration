
import "./index.scss"
import IconButton from '@mui/material/IconButton';
import { ReactComponent as ChatIcon } from 'assets/img/icon/icon-whatsapp-live.svg';
import { ReactComponent as WhatsappIcon } from 'assets/img/icon/whatsapp.svg';
import { ReactComponent as ToTop } from 'assets/img/icon/to-top.svg';
import { useCallback, useState, useEffect } from "react";

export default function LiveChatButton() {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 250) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleChatClick = () => {
        const newWindow = window.open('', '_blank', 'width=298,height=580');
        if (newWindow) {
            newWindow.location.href = 'https://dtp-garudaindonesia.com/chat_garuda/Frontend/garuda.html';
        }
    };
    const handleWhatsappClick = () => {
        const url = 'https://api.whatsapp.com/send/?phone=628112807807&text&type=phone_number&app_absent=0';
        window.open(url, '_blank');
    };

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])

    return (<>
        <IconButton className="btn-whatsapp" onClick={handleWhatsappClick} disableRipple>
            <WhatsappIcon />
        </IconButton>
        <IconButton className="btn-live-chat" onClick={handleChatClick} disableRipple>
            <ChatIcon />
        </IconButton>
        {showScrollToTop && <IconButton className="btn-to-top" onClick={scrollToTop} disableRipple>
            <ToTop />
        </IconButton>}
    </>);
};