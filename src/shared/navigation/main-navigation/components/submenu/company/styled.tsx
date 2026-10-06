import imgCareer from 'assets/asyst/img/icon/navbar/career.webp';
import imgContact from 'assets/asyst/img/icon/navbar/contact.webp';
import imgDemo from 'assets/asyst/img/icon/navbar/demo.webp';

export const styles = {
    imgCareer: {
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.43) 42.19%, #000 100%), url(${imgCareer})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '953px',
        height: '118px',
        marginTop: '35px',
        borderRadius: '12px',
    },
    imgContact: {
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.43) 42.19%, #000 100%), url(${imgContact})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '953px',
        height: '118px',
        marginTop: '35px',
        borderRadius: '12px'
    },
    imgDemo: {
        backgroundImage: `url(${imgDemo})`,
        backgroundSize: 'cover',
        width: '953px',
        height: '118px',
        marginTop: '35px',
        borderRadius: '12px'
    },
    boxContentCareer: {
        padding: '45px 15px 0px 15px',
        
        
    },
    titleCareer: {
        fontSize: '16px !important',
        fontWeight: 600,
        color: '#fff',
        fontFamily: 'Source Sans Pro'
    },
    contentCareer: {
        fontSize: '14px !important',
        fontWeight: "400 !important",
        color: '#fff',
        fontFamily: 'Source Sans Pro'
    }
}