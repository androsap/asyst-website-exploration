export const styles = {
    mainBackground: {
        height: "100vh",

    },
    feature: {
        color: 'rgba(255, 255, 255, 0.50)',
        fontFamily: 'Inter',
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: 'normal',
        fontStyle: 'normal',
        paddingBottom: '10px'
    },
    featureBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        // height: 'auto',
        // gap: '30px'
    },
    title: {
        color: '#FFF',
        fontFamily: 'Inter',
        fontSize: '36px',
        fontWeight: 700,
        lineHeight: '44px',
        fontStyle: 'normal',
        paddingBottom: '15px'
    },
    subtitle: {
        color: '#F2F2F2',
        fontFamily: 'Source Sans Pro',
        fontSize: '22px',
        fontWeight: 600,
        lineHeight: '28px',
        fontStyle: 'normal',
        paddingBottom: '15px'
    },
    description: {
        color: '#FFF',
        fontFamily: 'Inter',
        fontSize: '24px',
        fontWeight: 700,
        lineHeight: '32px',
        fontStyle: 'normal',
        paddingBottom: '15px'
    },
    subdescription: {
        color: '#F2F2F2',
        fontFamily: 'Source Sans Pro',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
        fontStyle: 'normal',
        paddingBottom: '15px'
    },
    swiperPagination: {
        '&.swiper-pagination-bullets': {
            right: 'auto !important',
            left: '34px !important',
            top: '53% !important',
            '& .pagination-number': {
                fontFamily: 'Source Sans Pro',
                fontSize: '12px',
                fontWeight: '400',
                lineHeight: 'normal'
            },
            '& .swiper-pagination-bullet': {
                display: 'flex !important',
                width: '24px',
                height: '24px',
                color: '#fff',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '50%',
                marginBottom: '24px !important',
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 1
            },
            '& .swiper-pagination-bullet-active': {
                backgroundColor: '#fff',
                border: '1px solid #fff',
                color: '#2775BB'
            }
        }
    }
}