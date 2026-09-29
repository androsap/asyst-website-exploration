export const styles = {
    solutionsBox: {
        position: 'relative',
        height: '270px',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',

        image: {
            position: 'absolute',
            width: '100%',
            height: '270px',
            'img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: '-1',
                borderRadius: '20px'
            }
        },

        content: {
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(2.5px)',
            width: '155px',
            height: '65px',
            marginLeft: '20px',
            marginBottom: '20px',
            cursor: 'pointer',
            '.title': {
                fontSize: '8px',
                color: '#4A4A4A',
                fontFamily: '"Source Sans Pro"',
            },
            '.highlight': {
                fontSize: '14px',
                fontWeight: 600,
                color: '#006CAE',
                fontFamily: '"Source Sans Pro"',
                '.icon6': {
                    paddingLeft: '40px',
                },
            },
        },

        button: { pr: "20px", display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }


    },
    productBox: {
        content: {
            borderRadius: '20px',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
            border: '1px solid var(--Primary, #006CAE)',
            width: 'auto',
            height: '225px',
            cursor: 'pointer',

            '&:hover': {
                backgroundColor: '#006CAE',
                '& .MuiTypography-root': {
                    color: '#fff',
                    // cursor: 'context-menu',
                },
            },
            title: { padding: '10px 15px', color: '#909090', fontFamily: 'Source Sans Pro', fontSize: '12px', fontStyle: 'normal' },
            name: { padding: '1px 15px', color: '#006CAE', fontFamily: 'Inter', fontSize: '20px', fontWeight: 600 },
            highlight: { padding: '0px 15px 0px 15px', color: '#4A4A4A', fontFamily: 'Source Sans Pro', fontSize: '14px', fontWeight: 400, lineHeight: '24px' }
        },
        footer: {
            backgroundColor: "#006CAE", color: "red", width: "100%", height: "45px", borderRadius: "0px 0px 19px 19px", position: "relative", cursor: 'pointer',
            title: { paddingTop: "10px", paddingLeft: "20px", color: "white", fontSize: "14px" }
        },
        roundedSvgContainer: {
            position: 'absolute',
            top: '1%',
            right: '10%',
            transform: 'translateY(-60%)',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: '#006CAE',
            border: '4px solid white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
                backgroundColor: '#fff',
            },
            '&:hover svg': {
                color: '#006CAE',
            },
        },
        arrowIcon: {
            color: '#fff',
        },
    },

    businessSolutionsBox: {
        borderRadius: '20px',
        border: '1px solid var(--Primary, #006CAE)',
        width: '200px',
        height: '105%',

        '&:hover': {
            backgroundColor: '#006CAE',
            '& .MuiTypography-root': {
                color: '#fff',
            },
        },
        '&:hover svg': {
            color: '#006CAE',
        },
        '&:hover .MuiBox-root': {
            bgcolor: 'white',
        },

        content: {
            color: 'var(--Primary, #006CAE)',
            fontFamily: 'Inter',
            fontSize: '19px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '28px',
            padding: '10px 14px',
            minHeight: '100px',
        },

        icon: {
            float: 'right',
            width: 24,
            height: 24,
            mr: '10px',
            mt: '10px',
            padding: '10px',
            borderRadius: '50%',
            bgcolor: '#006CAE',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            'svg': {
                color: 'white'
            },
        }
    },

    buttonBack: {
        color: 'var(--Primary, #006CAE)',
        fontFamily: "Source Sans Pro",
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
    },

    titleDrawer: {
        color: '#002663',
        fontFamily: "Inter",
        fontSize: '28px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '44px',
        marginBottom: '8px',
    },

    contentDrawer: {
        color: '#4A4A4A',
        fontFamily: "Source Sans Pro",
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '24px',
    }
}