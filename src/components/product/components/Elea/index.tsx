import Box from '@mui/material/Box';
import './index.scss'
import Grid from "@mui/material/Grid";
import Apollo from 'assets/img/icon/products/Group 37.png';
import apolloProfile from 'assets/img/icon/page-product/profile-elea.png';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

export default function EleaComponent() {
    return <>
        <Grid className='elea-page'>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '14px', alignItems: 'center' }}>
                <img className='img-elea' src={Apollo} alt="" />
                <Typography variant='h1'>Elea</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row-reverse', padding: '50px' }}>
                <img className='img-profile' src={apolloProfile} alt="" />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingRight: '200px' }}>
                    <Box className='paraf-overview' sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <Typography variant='h1'>Overview</Typography>
                        <Typography variant='h2' sx={{ width: '628px' }}>Elea can provides a centralized database and a suite of interconnected modules to streamline and automate business operations</Typography>
                    </Box>
                    <Box className='paraf-sub' sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <Typography variant='h1'>CRM</Typography>
                        <Typography variant='h2' sx={{ width: '628px' }}>ECO or UX writter find this out about the products data-spread</Typography>
                        <Divider sx={{ borderBottomWidth: 2, backgroundColor: '#E2EAF1' }} />
                    </Box>
                    <Box className='paraf-sub' sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <Typography variant='h1'>Point of Sale</Typography>
                        <Typography variant='h2' sx={{ width: '628px' }}>ECO or UX writter find this out about the products data-spread</Typography>
                        <Divider sx={{ borderBottomWidth: 2, backgroundColor: '#E2EAF1' }} />
                    </Box>
                    <Box className='paraf-sub' sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <Typography variant='h1'>Warehouse</Typography>
                        <Typography variant='h2' sx={{ width: '628px' }}>ECO or UX writter find this out about the products data-spread</Typography>
                        <Divider sx={{ borderBottomWidth: 2, backgroundColor: '#E2EAF1' }} />
                    </Box>
                    <Button variant='text' sx={{ width: '179px', height: '20px', borderWidth: 0, }}>Learn more about apollo</Button>
                </Box>
            </Box>
        </Grid>
    </>
}