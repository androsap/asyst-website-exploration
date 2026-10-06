export const styles = {
    mainBox: {
        borderRadius: '20px',
        border: '1px solid var(--nuted-extended-border-value, #E2EAF1)',
        width: '100%',
        height: '154px',
        background: '#F6FBFF'
    },
    contentBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: '32px'
    },
    textBox: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        gap: '10px'
    },
    title: {
        color: '#1A1A1A',
        fontFamily: 'Inter',
        fontSize: '36px',
        fontWeight: 700,
        lineHeight: '44px',
    },
    subtitle: {
        color: 'var(--Title-Mid, #3A3A3A)',
        fontFamily: 'Inter',
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: '28px',
    },
    buttonFrame: {
        width: 'auto',
        height: '56px',
        flexShrink: 0,
        borderRadius: '8px',
        background: 'var(--color-primary, #2775BB)',
    },
    button: {
        display: 'flex', 
        justifyContent: 'center',
        padding: '15px 50px 20px 50px'
    },
    textButton: {
        color: '#FFF',
        fontFamily: "Inter",
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '24px',
    }
}