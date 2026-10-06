
// import img from 'assets/asyst/img/background/our-fact/our-fact.jpeg';

export const backgroundColor = '#0f1011';

export const styles = {
    curvedLine: { fill: backgroundColor },
    mainBox: (img: string) => ({
        backgroundColor,
        padding: '16px',
        position: 'relative',
        color: '#FFFFFF',
        marginTop: '-160px',
        height: '800px',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
    }),
    overlayBox: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 1))`,
    },
    mainGrid: {
        position: 'relative',
        mt: '50px'
    },
    title: {
        color: '#FFF',
        fontFamily: 'Inter',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '36px',
    },
    subTitle: {
        color: '#FFF',
        fontFamily: 'Inter',
        fontSize: '45px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '52px',
    },
    descriptionGrid: { mt: '51px' },
    description: {
        color: '#FFF',
        fontFamily: 'Source Sans Pro',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '24px',
        bold: { fontWeight: 700 }
    },
    button: {
        width: '190px',
        height: '44px',
        background: 'linear-gradient(180deg, #2775BB 0%, #2775BB 100%)',
        borderRadius: '8px',
        color: '#FFF',
        '&:hover': {
            background: 'linear-gradient(180deg, #2775BB 0%, #2775BB 100%)',
        },
        mt: '32px'
    },
    contentPaper: {
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.09)',
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(7.5px)',
        p: 2,
        width: '80%',
        minHeight: '110px'
    },
    contentNumber: {
        fontFamily: 'Inter',
        fontSize: '45px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '52px',
        color: '#89BA3A'
    },
    contentDescription: {
        color: '#FFF',
        fontFamily: 'Source Sans Pro',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '24px',
    },
    contentArrowIcon: { display: 'flex', justifyContent: 'flex-end' },
    contentGrid: { mt: '51px', paddingLeft: '92px' }
}