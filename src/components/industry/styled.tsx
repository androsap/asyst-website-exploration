export const styles = {
    backNavContainer: {
        paddingLeft: '122px',
        display: 'flex',
        alignItems: 'center',
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
        background: `linear-gradient(180deg, rgba(18, 53, 84, 0.95) 0%, rgba(39, 117, 187, 0.95) 59.9%, rgba(39, 117, 187, 0.95) 100%)`,
        backdropFilter: 'blur(4px)',
        backgroundSize: 'cover',
        display: 'flex',
    },
    overlayBox: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    mainDiv: {
        display: 'flex',
        flexDirection: 'column',
    },
    headerBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 'auto',
        marginTop: '60px',
        zIndex: 1,
        paddingX: '10%'
    },
    headerTitle: {
        color: '#FFF',
        fontFamily: 'Inter',
        fontSize: '57px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '64px',
        textAlign: 'center'
    },
    headerSubtitle: {
        color: '#F4F4F4',
        fontFamily: 'Inter',
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '32px',
        mt: '30px',
        textAlign: 'center'
    },
    headerLinkIcon: {
        marginLeft: '12px'
    },
    industryImage: {
        backgroundSize: "cover",
        height: "170px",
        borderRadius: "20px",
        overflow: "hidden"
    },
    tagsLabel: {
        borderRadius: "55px",
        border: "1px solid #fff",
        position: "absolute",
        marginTop: "180px",
        marginLeft: "6.3%",
        background: "none",
        paddingLeft: "15px",
        paddingRight: "15px",
        color: "#fff",
        fontSize: "12px",
        fontWeight: 900,
    },
    btnAll: {
        width: "271px",
        height: "56px",
        flexShrink: 0,
        borderRadius: "8px",
        background: "linear-gradient(180deg, #89BA3A 0%, #89BA3A 100%)",
        boxShadow: "0px 4px 16px 0px rgba(18, 53, 84, 0.35)",
    },
    textBtnAll: {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Inter",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "24px",
    }

};
