import './index.scss';

import { Children } from 'react';

import img1 from 'assets/img/background/menu-navigation/destination.jpeg';
import img2 from 'assets/img/background/menu-navigation/destination2.jpeg';
import DestinationConst from 'consts/main-navigation/destination.const';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function DestinationComponent() {

    return <Box className="submenu-destination">
        <Container maxWidth="xl" className='main-container'>
            <Box display="flex" justifyContent="space-between">
        <Grid container columns={2}>
            <Grid item xs={1} display="flex" gap="33px">
                <Box className="image" sx={{ backgroundImage: `url(${img1})` }} />
                <Box p="0px 10px" maxWidth="200px">
                    <Typography variant="body1">{DestinationConst[0].category}</Typography>
                    <Box className="submenu">
                        {Children.toArray(DestinationConst[0].subMenu.map(({ label, action }) => <Link to={action}><Typography variant="body2">{label}</Typography></Link>))}
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={1} display="flex" gap="33px">
                <Box className="image" sx={{ backgroundImage: `url(${img2})` }} />
                <Box p="0px 10px" maxWidth="200px">
                    <Typography variant="body1">{DestinationConst[1].category}</Typography>
                    <Box className="submenu">
                        {Children.toArray(DestinationConst[1].subMenu.map(({ label, action }) => <Link to={action}><Typography variant="body2">{label}</Typography></Link>))}
                    </Box>
                </Box>
            </Grid>
        </Grid>
        </Box>
        </Container>
    </Box>
}
