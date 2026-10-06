// import bannerBackground from 'assets/asyst/img/background/about-us/background-about-us.webp';
import bannerBackgroundGradation from 'assets/asyst/img/background/about-us/background-gradation.webp';
import backgroundVector from 'assets/asyst/img/background/about-us/background-vector.webp'
import imageBanner from 'assets/asyst/img/background/about-us/image-banner.webp';

export const styles = {
    mainBox: {
        position: 'relative',
        height: '100vh',
        backgroundImage: `url(${bannerBackgroundGradation})`,
        backgroundSize: 'cover',
        display: 'flex',
    },
    footerBox: {
        backgroundImage: `url(${backgroundVector})`,
        backgroundSize: 'cover', 
        zIndex: "10", 
        position: "relative", 
        height: "277px", 
        marginTop: "-200px",
        flexShrink: 0
    },
    mainGrid: {
        position: 'absolute',
        paddingLeft: '180px',
        mt: '120px',
    },
    textContent: {
        width: '568px',
        height: '247px',
        flexShrink: 0,
    },
    header: {
        color: 'rgba(53, 53, 53, 0.50)',
        fontFamily: 'Inter',
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '28px',
        mb: '9px'
    },
    title: {
        color: '#1F1F1F',
        fontFamily: 'Inter',
        fontSize: '48px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '64px',
        mb: '25px'
    },
    text: {
        color: '#444',
        fontFamily: 'Inter',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '36px',
    },
    imageContent: {
        backgroundImage: `url(${imageBanner})`,
        backgroundSize: 'cover',
        width: '322px',
        height: '284px',
        flexSshrink: 0,
    }
}