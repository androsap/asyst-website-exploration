import bannerBackgroundGradation from 'assets/asyst/img/background/career/background.png';

export const styles = {
    mainBox: {
        backgroundImage: `url(${bannerBackgroundGradation})`,
        position: 'relative',
        minHeight: '100vh',
        backgroundSize: 'cover',
        display: 'flex',
        paddingBottom: '20px',
    },
    backNavContainer: {
        paddingBottom: '30px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 'auto',
        marginTop: '100px',
        zIndex: 1,
        text: {
            color: 'rgba(255, 255, 255, 0.51)',
            fontFamily: 'Source Sans Pro',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            marginLeft: '12px',
            paddingRight: '40px'
        },
        title: {
            color: '#FFF',
            fontFamily: 'Source Sans Pro',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
        }
    },
    product: {
        color: '#FFF',
        fontFamily: 'Inter',
        fontSize: '28px',
        fontWeight: 600,
        lineHeight: '36px',
        paddingTop: '25px'
    },
    title: {
        color: '#FFF',
        fontFamily: 'Inter',
        fontSize: '45px',
        fontWeight: 700,
        lineHeight: '52px',
        fontStyle: 'normal',
        paddingTop: '20px'
    },
    description: {
        color: '#FFF',
        fontFamily: 'Inter',
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: '32px',
        paddingTop: '20px',
        paddingRight: '150px'
    },
    buttonFrame: {
        width: '238px',
        height: '56px',
        flexShrink: 0,
        borderRadius: '8px',
        background: '#ED7D2B',
        marginTop: '20px',
        marginBottom: '30px',
        boxShadow: '0px 7px 16px 0px rgba(0, 0, 0, 0.10)',
        '&:hover': {
            background: 'white',
        },
    },
    button: {
        display: 'flex',
        justifyContent: 'center'
    },
    textButton: {
        color: '#FFF',
        fontFamily: "Inter",
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '26px',
    },
    curvedLineWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 2,
        pointerEvents: 'none'
    },
    titleEnvironment: {
        dcolor: '#1A1A1A',
        fontFamily: 'Inter',
        fontSize: '36px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '44px',
    }
}