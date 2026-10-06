import bannerBackground from 'assets/asyst/img/background/product/elea/elea-background.webp';

export const styles = {
    backNavContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 'auto',
        marginTop: '100px',
        zIndex: 1,
        text: {
            color: '#FFF',
            fontFamily: 'Source Sans Pro',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            marginLeft: '12px',
            paddingRight: '20px'
        }
    },
    mainBox: {
        position: 'relative',
        color: '#FFFFFF',
        height: '100vh',
        background: `url(${bannerBackground})`,
        backgroundSize: 'cover',
        display: 'flex',
    },
    text: {
        color: 'rgba(255, 255, 255, 0.75)',
        fontFamily: 'Source Sans Pro',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
        marginLeft: '12px',
        paddingRight: '20px',
    },
    subtext: {
        color: '#FFF',
        fontFamily: 'Source Sans Pro',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
        marginLeft: '12px',
        paddingRight: '20px',
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
        fontSize: '48px',
        fontWeight: 700,
        lineHeight: '64px',
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
        width: '150px',
        height: '40px',
        flexShrink: 0,
        borderRadius: '8px',
        background: '#89BA3A',
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
        color: '#2E2E2E',
        fontFamily: "Inter",
        fontSize: '15px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '32px',
    },
}