import img from 'assets/asyst/img/background/about-us/jobs/office.webp';

export const styles = {
    mainBox: {
        marginTop: '50px',
        position: 'relative',
        backgroundSize: 'cover',
        height: '608px !important',
        backgroundImage: `url(${img}), lightgray 50% / cover no-repeat, linear-gradient(208deg, #123554 17.16%, #2775BB 89.13%)`,

    },
    overlayBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: '40px 40px 0px 40px',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '608px',
        opacity: 0.9,
        backgroundImage: `linear-gradient(208deg, #123554 17.16%, #2775BB 89.13%)`,
    },
    image: {
        height: '100%',
        marginLeft: '30px',
        flexShrink: 0
    },
    content: {
        marginTop: '138px',
        justifyContent: 'flex-end',
        borderRadius: '80px 0px 0px 0px',
        background: '#89BA3A',
        // width: '450px',
        height: '470px',
        flexShrink: 0
    },
    frame: {
        marginTop: '90px',
        marginRight: '100px',
        width: '761px',
        height: '306px',
        flexShrink: 0,
        borderRadius: '40px',
        background: 'rgba(255, 255, 255, 0.89)',
        backdropFilter: 'blur(8px)',
        paddingLeft: '50px'
    },
    title: {
        color: '#1A1A1A',
        fontFamily: 'Inter',
        fontSize: '36px',
        fontWeight: 700,
        lineHeight: '44px',
        paddingTop: '50px'
    },
    text: {
        color: 'var(--Title-Mid, #3A3A3A)',
        fontFamily: 'Inter',
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: '26px',
        paddingTop: '30px'
    },
    buttonFrame: {
        width: '240px',
        height: '56px',
        flexShrink: 0,
        borderRadius: '8px',
        background: 'var(--color-primary, #2775BB)',
        marginTop: '30px'
    },
    button: {
        display: 'flex',
        justifyContent: 'center'
    },
    textButton: {
        color: '#FFF',
        fontFamily: "Source Sans Pro",
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '24px',
        marginTop: '15px'
    },
}