import Grid from '@mui/material/Grid'
import './index.scss'
import Typography from '@mui/material/Typography'
import OverViewA from 'assets/img/icon/overview/overview-image-1.png';
import OverViewB from 'assets/img/icon/overview/overview-image-2.png';
import Box from '@mui/material/Box'

export default function OverViewComponent() {
    return (
        <>
            <Grid className='overview'>
                <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '19px', paddingY:'80px' }}>
                        <Box>
                            <Typography variant='h1'>Overview</Typography>
                        </Box>
                        <Typography variant='h2' width={'622px'}>Improving performance and delivering a more seamless to airlines inddustry</Typography>
                        <Typography variant='h3' width={'622px'}>We invented field service management software and continued to grow in airlines industry by taking the successes of our Amala, and creating a new, more advanced solution. Aero systems indonesia create product solutions more robust, feature-rich service management software solution that enables you to increase profit performance and streamline your airline business all in one product.</Typography>
                    </Box>
                    <img className='img-overview-1' src={OverViewA} alt="" />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '80px' }}>
                    <img className='img-overview-2' src={OverViewB} alt="" />
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '19px' ,paddingTop:'30px' }}>
                        <Typography variant='h2' width={'622px'}>We made operational efficiency and perform large scale transformation</Typography>
                        <Typography variant='h3' width={'622px'}>Aero Systems Indonesia crafted a unique blend of services and solutions for the Airline Industry. Our services are based on the core technology pillars of Cloud computing, social computing, Mobility and Analytics that are best suited for the Airline industry</Typography>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}