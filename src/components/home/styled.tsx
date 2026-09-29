export const styles = {
    buttonBox: {
        color: "#48BAFF",
        fontFamily: "Source Sans Pro",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal"
    },
    tittleDrawer: {
        color: "#FFF",
        fontFamily: "Inter",
        fontSize: "28px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "44px"
    },
    contentDrawer: {
        color: "#FFF",
        fontFamily: "Source Sans Pro",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "24px",
    },
    category: {
        display: "inline-flex",
        padding: "7px 15px",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        borderRadius: "55px",
        border: "1px solid #FFF",
        color: "#FFF",
        fontFamily: "Source Sans Pro",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        width: "fit-content",
    },
    customersTitle: {
        background: "rgba(0, 0, 0, 0.35)",
        // height: "50px",
        marginTop: "-100px",
        zIndex: "10",
        position: "absolute",
        left: "50px",
        borderRadius: '12px 12px 0px 0px',
        color: 'white',
        transform: 'translateY(-100%)',
        fontSize: '16px',
        fontFamily: 'Source Sans Pro',
        fontWeight: '400',
        wordWrap: 'break-word',
        paddingX: '21px',
        paddingY: '10px',
    },
    swiperPagination: {
        '&.swiper-pagination-bullets': {
            right: 'auto !important',
            left: '34px !important',
            top: '40vh !important',
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
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '50%',
                marginBottom: '24px !important',
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center'
            },
            '& .swiper-pagination-bullet-active': {
                backgroundColor: 'transparent',
                border: 'none',
                color: '#fff'
            }
        }
    }
}