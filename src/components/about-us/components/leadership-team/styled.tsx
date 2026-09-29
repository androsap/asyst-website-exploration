import imageCEO from '../../../../assets/asyst/img/background/about-us/leadership-team/image-ceo.png'
import imageCTO from '../../../../assets/asyst/img/background/about-us/leadership-team/image-cto.png'

export const styles = {
    title: {
        color: '#1A1A1A',
        fontFamily: 'Inter',
        fontSize: '36px',
        fontWeight: 700,
        lineHeight: '44px',
        marginTop: '50px'
    },
    imageCEO: {
        backgroundImage: `url(${imageCEO})`,
        backgroundSize: 'cover',
        width: '200px',
        height: '200px',
        flexShrink: 0
    },
    imageCTO: {
        backgroundImage: `url(${imageCTO})`,
        backgroundSize: 'cover',
        width: '500px',
        height: '500px',
        flexShrink: 0
    },
    name: {
        color: 'var(--Primary, #006CAE)',
        fontFamily: 'Inter',
        fontSize: '28px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '36px'
    },
    position: {
        color: 'var(--Title- Mid, #3A3A3A)',
        fontFamily: 'Inter',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '26px'
    },
    logo: {
        width: '48px',
        height: '48px',
        flexShrink: 0,
        borderRadius: '12px',
        // background: 'var(--Primary, #006CAE)'
    },
    paragraph: {
        color: 'var(--nuted-extended-Bodytext-value, #42423B)',
        fontFamily: 'Source Sans Pro',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '24px'
    },    
    buttonFrame: {
        width: '240px',
        height: '56px',
        flexShrink: 0,
        borderRadius: '8px',
        background: 'var(--Primary, #006CAE)',
    },
    button: {
        display: 'flex', 
        justifyContent: 'center',
        marginTop: '15px'
    },
    textButton: {
        color: '#FFF',
        fontFamily: "Source Sans Pro",
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '24px',
    }

}