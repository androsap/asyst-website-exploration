export const stroyBoxStyles = (activeIndex: number, imgSrc: string, milestonesLength: number) => ({
    mainBox: { position: "relative", textAlign: "center" },
    bgImageBox: { backgroundImage: `url(${imgSrc})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20px" },
    contentBox: {
        position: 'absolute',
        top: '50%',
        left: '7%',
        right: '7%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '50%',
        textAlign: 'left',

        titleTypography: {
            color: '#fff',
            fontFamily: 'Inter',
            fontSize: 24,
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '32px',
            whiteSpace: 'nowrap',
        },

        contentTypography: {
            color: '#FFF',
            fontFamily: 'Source Sans Pro',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '24px',
            paddingLeft: '10px'
        },

        milestonesBox: { position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' },
        prevButton: { position: 'absolute', bottom: '2.5%', left: '2.5%', color: 'white', transform: 'rotate(90deg)', cursor: activeIndex !== 0 ? 'pointer' : 'context-menu', opacity: activeIndex !== 0 ? '1' : '0.5' },
        nextButton: { position: 'absolute', bottom: '2.5%', right: '2.5%', color: 'white', transform: 'rotate(270deg)', cursor: activeIndex !== milestonesLength - 1 ? 'pointer' : 'context-menu', opacity: activeIndex !== milestonesLength - 1 ? '1' : '0.5' }
    },
})

export const milestonesStyles = (activeIndex: number, milestoneIndex: number) => ({
    buttonYear: {
        width: '80px',
        height: '36px',
        margin: '5px',
        alignItems: 'center',
        backgroundColor: activeIndex === milestoneIndex ? '#fff' : 'transparent',
        color: activeIndex === milestoneIndex ? '#002561' : '#fff',
        border: '1px solid #FFF',
        borderRadius: '100px',
        cursor: 'pointer',
        fontFamily: 'Source Sans Pro',
        fontSize: 16,
        fontWeight: 400,
        lineHeight: '24px',
        '&:hover': {
            backgroundColor: activeIndex === milestoneIndex ? '#fff' : '#fff',
            color: activeIndex === milestoneIndex ? '#002561' : '#002561',
        },
        '&.active': {
            backgroundColor: '#fff',
            color: '#002561',
        },

        stepper: {
            width: '10px',
            height: '10px',
            backgroundColor: activeIndex === milestoneIndex ? '#006CAE' : '#fff',
            borderRadius: '50%',
            marginTop: '5px',
            cursor: 'pointer',
        }
    }
})