import './index.scss';

import { Children } from 'react';

import TripConstProps from 'consts/main-navigation/trip.const';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function TripComponent() {

    return <Box className="submenu-trip">
        <Container maxWidth="xl" className='main-container'>
            <Box display="flex" justifyContent="space-between">
                {Children.toArray(TripConstProps.map(({ subMenu, category, action }) => <Box p="0px 10px" maxWidth="200px">
                    {action ? <>
                        <Link to={action}><Typography variant="body1">{category}</Typography></Link>
                    </> : <>
                        <Typography variant="body1">{category}</Typography>
                    </>}
                    <Box className="submenu">
                        {Children.toArray(subMenu.map(({ label, action }) => <Link to={action}><Typography variant="body2">{label}</Typography></Link>))}
                    </Box>
                </Box>))}
                {false && <Box minWidth="100px">
                    {false && <Link to="/"><Button variant="outlined">Selengkapnya</Button></Link>}
                </Box>}
            </Box>
        </Container>
    </Box>
}
