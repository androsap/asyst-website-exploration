import Box from "@mui/material/Box";
import './index.scss'
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Dec from "assets/img/icon/dec-download-resource.svg";
import backgroundImage from "assets/img/background/bg-download-resource.png";
import Typography from "@mui/material/Typography";
import { useT } from "shared/i18n";

export default function GetinTouchComponent() {
    const t = useT();
    return (
        <>
            <Paper sx={{ height: '222px', borderRadius: '20px', background: 'linear-gradient(to right bottom, #89BA3A, #89BA3AE5, #89BA3AD4)' }}>
                <Box>
                    <img style={{ height: '222px', opacity: '0.05', borderRadius: '0px 20px 20px 0px', position: 'absolute', left: '49.8%', backdropFilter:''}} src={backgroundImage} alt="img" />
                    <img style={{ height: '222px',  borderRadius: '0px 20px 20px 0px', position: 'absolute', top:'94%', left: '54.5%' }} src={Dec} alt="Deco" />
                </Box>
                <Box sx={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '41px' }}>
                    <Typography variant="h6">{t("How Aero Systems Indonesia can we improve your entire company’s operations", "Bagaimana Aero Systems Indonesia dapat meningkatkan seluruh operasional perusahaan Anda")}</Typography>
                    <Button sx={{ width: '126px', height: '48px', color: 'white', background: 'linear-gradient(to right bottom, #89BA3A, #89BA3A)', }}>{t("Get in Touch", "Hubungi Kami")}</Button>
                </Box>
            </Paper>
        </>
    );
};