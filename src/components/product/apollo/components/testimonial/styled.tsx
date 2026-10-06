import quote from "assets/asyst/img/background/industry/testimonials-quote.webp"

export const styles = {
    title: {
        color: '#1A1A1A',
        fontFamily: 'Inter',
        fontSize: '36px',
        fontWeight: 700,
        lineHeight: '44px',
        paddingBottom: '30px',
        paddingTop: '100px'
    },
    mainBox: {
        borderRadius: '20px',
        border: '1px solid var(--nuted-extended-border-value, #E2EAF1)',
        width: '100%',
        // maxWidth: '552px',
        // maxHeight: '400px',
        height: '280px',
        position: 'relative !important',
        pt: '20px',
        paddingX: '24px',
        backgroundImage: `url(${quote})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '24px 20px',
        display: 'flex',
        flexDirection: 'column',
    },
    quoteGrid: {
        pt: '22px'
    },
    quote: {
        color: 'var(--nuted-extended-bodytext-value, #42423B)',
        fontFamily: 'Inter',
        fontSize: '22px',
        fontStyle: 'italic',
        fontWeight: 500,
        lineHeight: '28px',
    },
    profileContainer: {
        mt: "34px",
        mb: "34px"
    },
    profileImage: {
        borderRadius: '90px',
        width: '70px',
        height: '70px'
    },
    name: {
        color: '#123554',
        fontFamily: 'Source Sans Pro',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '32px',
    },
    position: {
        color: '#3A3A3A',
        fontFamily: 'Source Sans Pro',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
    },
    company: {
        color: '#4A4A4A',
        fontFamily: 'Source Sans Pro',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
    },
};
