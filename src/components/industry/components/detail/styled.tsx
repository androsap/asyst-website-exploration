
import bannerBackground from 'assets/asyst/img/background/industry/industry-detail.jpeg';

export const styles = {
    backNavContainer: {
        paddingLeft: '122px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        marginBottom: 'auto',
        marginTop: '120px',
        zIndex: 1,
        text: {
            color: '#FFF',
            fontFamily: 'Source Sans Pro',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            marginLeft: '12px'
        }
    },
    mainBox: {
        position: 'relative',
        color: '#FFFFFF',
        height: '100vh',
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: 'cover',
        display: 'flex',
    },
    overlayBox: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `linear-gradient(180deg, rgba(16, 16, 16, 0.00) 0%, rgba(16, 16, 16, 0.78) 45.31%, #101010 100%);`,
    },
    mainDiv: {
        display: 'flex',
        flexDirection: 'column',
    },
    headerBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'pointer',
        marginBottom: 'auto',
        marginTop: '120px',
        zIndex: 1,
        paddingX: '20%'
    },
    headerTitle: {
        color: '#FFF',
        fontFamily: 'Inter',
        fontSize: '57px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '64px',
    },
    headerSubtitle: {
        color: '#F4F4F4',
        fontFamily: 'Inter',
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '32px',
        mt: '29px'
    },
    headerLinkIcon: {
        marginLeft: '12px'
    }

};

export const contentStyles = {
    logoContainer: { height: '90px', padddingBottom:'120px' },
    logoSwiperSlider: { width: 'auto', marginRight: '24px' },
    logo: { width: '100%', maxHeight: '38px' },
    logoTitle: {
        color: '#1A1A1A',
        fontFamily: 'Inter',
        fontSize: '36px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '44px',
    }
}
