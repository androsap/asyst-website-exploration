export const styles = {
    title: {
        color: '#1A1A1A',
        fontFamily: 'Inter',
        fontSize: '36px',
        fontWeight: 700,
        lineHeight: '44px',
    },
    description: {
        color: '#4A4A4A',
        fontFamily: 'Source Sans Pro',
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: '24px',
        paddingTop: '20px'
    }
}

export const stroyBoxStyles = (activeIndex: number) => ({
    prevButton: { position: 'absolute', bottom: '2.5%', left: '2.5%', color: 'white', transform: 'rotate(90deg)', cursor: activeIndex !== 0 ? 'pointer' : 'context-menu', opacity: activeIndex !== 0 ? '1' : '0.5' },
    nextButton: { position: 'absolute', bottom: '2.5%', right: '2.5%', color: 'white', transform: 'rotate(270deg)' }
})

export const contentStyles = {
    logoContainer: { height: '90px', padddingBottom: '120px' },
    logoSwiperSlider: { width: 'auto', marginRight: '24px' },
    // logo: { width: '100%', maxHeight: '38px' },
    logoTitle: {
        color: '#1A1A1A',
        fontFamily: 'Inter',
        fontSize: '36px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '44px',
    }
}