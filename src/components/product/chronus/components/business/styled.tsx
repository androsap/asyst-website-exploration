export const styles = {
    title: {
        color: '#1A1A1A',
        fontFamily: 'Inter',
        fontSize: '36px',
        fontWeight: 700,
        lineHeight: '44px',
        paddingTop: '60px',
    },
    subtitle: {
        color: '#4A4A4A',
        fontFamily: 'Source Sans Pro',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
        marginTop: '10px',
        marginBottom: '20px'
    },
    buttonBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '294px',
        height: '166px',
        borderRadius: '20px',
        boxShadow: '0px 6px 24px 0px rgba(0, 0, 0, 0.06)',
        background: '#FFF',
        padding: '20px',
        '&.active': {
            display: 'flex',
            backgroundColor: '#F6FBFF',
            borderRadius: '20px 20px 0px 0px',
            boxShadow: 'none',
            height: '166px',
        },
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '250px',
        height: '46px',
        borderRadius: '55px',
        background: 'var(--color-primary, #2775BB)',
        gap: '10px'
    },
    textButton: {
        color: '#FFF',
        fontFamily: 'Source Sans Pro',
        fontSize: '18px',
        fontWeight: 700,
        lineHeight: '28px',
        fontStyle: 'normal'
    },
    desc: {
        display: 'flex',
        color: '#4A4A4A',
        fontFamily: 'Source Sans Pro',
        fontSize: '15px',
        fontWeight: 400,
        // lineHeight: '28px',
        fontStyle: 'normal',
        textAlign: 'start',
        paddingTop: '5px'
    },
    contentBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        maxWidth: 'xl',
        height: 'auto',
        borderRadius: '0px 20px 20px 20px',
        background: '#F6FBFF',
        padding: '100px 30px 100px 30px',
        gap: 4
    },
    contentTitle: {
        color: '#123554',
        fontFamily: 'Inter',
        fontSize: '18px',
        fontWeight: 700,
        lineHeight: '28px',
        fontStyle: 'normal',
        paddingBottom: '10px' 
    },
    contentSubtitle: {
        color: '#4A4A4A',
        fontFamily: 'Source Sans Pro',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
        fontStyle: 'normal',
        // paddingBottom: '40px' 
    }
}