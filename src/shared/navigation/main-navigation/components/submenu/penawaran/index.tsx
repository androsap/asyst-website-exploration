import './index.scss';

import { Children } from 'react';

import miles from 'assets/img/background/menu-navigation/miles-logo.png';
import img from 'assets/img/background/menu-navigation/penawaran.jpeg';
import PenawaranConst from 'consts/main-navigation/penawaran.const';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function PenawaranComponent() {

    return <Box className="submenu-penawaran">
        <Container maxWidth="xl" className='main-container'>
            <Grid container columns={1} className="content-container">
                <Grid item xs={1} display="flex" gap="33px">
                    <Box className="image" sx={{ backgroundImage: `url(${img})` }} />
                    <Box p="0px 10px" width="400px">
                        <Typography variant="body1">{PenawaranConst[0].category}</Typography>
                        <Grid container columns={2} spacing={2}>
                            <Grid item xs={1}>
                                <Box className="submenu">
                                    {Children.toArray(PenawaranConst[0].subMenu.map(({ label, action }) => <Link to={action}><Typography variant="body2">{label}</Typography></Link>))}
                                </Box>
                            </Grid>
                            <Grid item xs={1}>
                                <Box className="submenu">
                                    {Children.toArray(PenawaranConst[1].subMenu.map(({ label, action }) => <Link to={action}><Typography variant="body2">{label}</Typography></Link>))}
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    {false && <Box mt="40px">
                        <Link to="/"><Button variant="outlined">Selengkapnya</Button></Link>
                    </Box>}
                </Grid>
            </Grid>
        </Container>
        <Box className="footer-submenu" padding="0px 48px">
            <Container maxWidth="xl" className='main-container'>
                <Grid container columns={3} height="96px">
                    <Grid item xs={1.1} display="flex" alignItems="center" gap="10px" borderRight="1px solid #00aaec26">
                        <Box className="card-footer">
                            <Box component="img" src={miles} width="44px" />
                        </Box>
                        <Typography variant="subtitle1">Belum jadi Member GarudaMiles? <Link to="https://www.garuda-indonesia.com/id/id/web-service-form/register-member-garudamiles">Daftar gratis</Link></Typography>
                    </Grid>
                    <Grid item xs={1.9} display="flex" alignItems="center" gap="10px" pl="33px">
                        <Box className="card-footer">
                            <Typography variant="overline">Partner</Typography>
                        </Box>
                        <Typography variant="subtitle1">Jelajahi Peluang Bisnis baru bersama GarudaMiles. <Link to="https://www.garuda-indonesia.com/garudamiles/id/news-and-offers/news/perusahaan-anda-bersama-garudamiles">Gabung GarudaMiles Partner</Link></Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </Box>
}
