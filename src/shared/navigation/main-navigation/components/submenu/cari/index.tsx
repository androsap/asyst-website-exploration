import './index.scss';

import { Children } from 'react';

import { Link } from 'react-router-dom';

import { useRouter } from '@andrydharmawan/bgs-component';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function PenawaranComponent() {
    const router = useRouter();

    const quickLinks = [{ label: "Route", action: "#" }, { label: "Special Price", action: "#" }, { label: "Garuda Indonesia promo", action: "#" }]
    const popularLinks = [{ label: "GarudaMiles", action: "#" }, { label: "Booking", action: "#" }, { label: "Support and Help", action: "#" }, { label: "Charter Flight", action: "#" }, { label: "Corporate Privilege", action: "#" }]

    return <Box className="submenu-cari">
        <Container maxWidth="xl" className='main-container'>
        <Box>
            <TextField placeholder="Search Garuda Indonesia" InputProps={{
                endAdornment: <InputAdornment position="end" >
                    <Button variant="contained" onClick={() => router.push("/search")}>Search</Button>
                </InputAdornment>
            }} />
            <Box mt="37px">
                <Typography variant="body1">Quick links : {Children.toArray(quickLinks.map(({ label, action }) => <Link to={action}>{label}</Link>))}</Typography>
                <Typography variant="body1" mt="25px">Popular Search : {Children.toArray(popularLinks.map(({ label, action }) => <Link to={action}>{label}</Link>))}</Typography>
            </Box>
        </Box>
        </Container>
    </Box>
}
