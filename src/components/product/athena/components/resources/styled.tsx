import download from 'assets/asyst/img/background/product/amala/intersect.png';

export const styles = {
    title: {
        color: '#1A1A1A',
        fontFamily: 'Inter',
        fontSize: '36px',
        fontWeight: 700,
        lineHeight: '44px',
        paddingBottom: '30px'
    },
    mainBox: {
        dispay: 'flex',
        flexDirection: 'row',
        gap: '5px',
    },
    boxImages: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
    },
    images: {
        backgroundSize: 'cover',
        width: '100%',
        height: 'auto',
        visibility: 'hidden'
    },
    tagsLabel: {
        borderRadius: '55px',
        position: 'absolute',
        marginTop: '-40px',
        marginLeft: '1.5%',
        background: 'rgba(244, 248, 255, 0.80)',
        paddingLeft: '15px',
        paddingRight: '15px',
        color: '#002663',
        fontSize: '12px',
        fontWeight: '400',
    },
    titleNews: {
        color: '#1A1A1A',
        fontSize: '22px',
        fontWeight: '700',
        minHeight: '90px',
    },
    footerNews: {
        color: '#909090',
        fontSize: '14px',
    },
    downloadBox: {
        borderRadius: '20px',
        background: 'linear-gradient(180deg, #057CC5 0%, #006CAE 100%)',
        width: '380px',
        height: 'auto',
        flexShrink: 0,
    },
    vectorBox: {
        position: 'absolute',
        background: `url(${download})`,
        marginLeft: '295px',
        width: '87px',
        height: '96px'
    },
    text1: {
        color: '#FFFFFF',
        fontFamily: 'Inter',
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '28px',
        // marginBottom: '30px'
    },
    text2: {
        color: '#FFFFFF',
        fontFamily: 'Inter',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '24px',
        cursor: 'pointer'
        // paddingTop: '15px'
    },
}