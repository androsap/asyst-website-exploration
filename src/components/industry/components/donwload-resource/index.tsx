import Box from "@mui/material/Box";
import './index.scss'
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import DownloadIcon from "@mui/icons-material/Download";
import Dec from "assets/img/icon/dec-download-resource.svg";
import backgroundImage from "assets/img/background/bg-download-resource.webp";
import Typography from "@mui/material/Typography";

export default function DownloadResourceComponent() {
    return (
        <>
            <Paper sx={{ height: '222px', borderRadius: '20px', background: 'linear-gradient(to right bottom, #89BA3A, #89BA3AE5, #89BA3AD4)' }}>
                <Box>
                    <img style={{ height: '222px', opacity: '0.05', borderRadius: '0px 20px 20px 0px', position: 'absolute', left: '49.8%', backdropFilter:''}} src={backgroundImage} alt="img" />
                    <img style={{ height: '222px',  borderRadius: '0px 20px 20px 0px', position: 'absolute', top:'87.5%', left: '54.5%' }} src={Dec} alt="Deco" />
                </Box>
                <Box sx={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '41px' }}>
                    <Typography variant="h1">How Aero Systems Indonesia can we improve your entire company’s operations</Typography>
                    <Button sx={{ width: '410px', height: '48px', color: 'white', background: 'linear-gradient(to right bottom, #89BA3A, #89BA3A)', }} startIcon={<DownloadIcon />}>Download Resources of Asyst Product and Services</Button>
                </Box>
            </Paper>
        </>
    );
};