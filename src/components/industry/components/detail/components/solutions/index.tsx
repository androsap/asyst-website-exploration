import Box from '@mui/material/Box';
import './index.scss';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useT } from 'shared/i18n';
import Image1 from 'assets/img/background/solutions/image-solutions-1.webp';
import Image2 from 'assets/img/background/solutions/image-solutions-2.webp';
import Image3 from 'assets/img/background/solutions/image-solutions-3.webp';
// import Apollo from 'assets/img/icon/products/Group 38.webp';

const styles = {
    paperContainerSatu: {
        backgroundImage: `url(${Image1})`,
        backgroundPosition: 'center',
        backgroundSize: '500px',
        borderRadius: '20px',
        width: '392px',
        height: '392px',
    },

    paperContainerDua: {
        backgroundImage: `url(${Image2})`,
        backgroundPosition: 'center',
        backgroundSize: '500px',
        borderRadius: '20px',
        width: '392px',
        height: '392px',
    },

    paperContainerTiga: {
        backgroundImage: `url(${Image3})`,
        backgroundPosition: 'center',
        backgroundSize: '500px',
        borderRadius: '20px',
        width: '392px',
        height: '392px',
    },
}

export default function SolutionsComponent() {
    const t = useT();
    return (
        <>
            <Box className='Solution' >
                <Grid sx={{ display: 'flex', flexDirection: 'row', gap: '40px', paddingBottom: '32px' }}>
                    <Typography variant='h1'>{t("Aero Systems Indonesia Solutions for Airline", "Solusi Aero Systems Indonesia untuk Maskapai")}</Typography>
                    <Typography variant='h2'>{t("Revitalize and accelerate digital transformation initiatives to recover lost time, lower the cost of customer service and de-risk traditional business models. ", "Hidupkan kembali dan percepat inisiatif transformasi digital untuk mengejar waktu yang hilang, menekan biaya layanan pelanggan, dan mengurangi risiko model bisnis tradisional. ")}</Typography>
                </Grid>
                <Divider />
                <Grid sx={{ display: 'flex', flexDirection: 'column', gap: '48px', paddingTop: '42px' }}>
                    {/* Line 1 */}
                    <Grid sx={{ display: 'flex', flexDirection: 'row', gap: '48px' }}>
                        <Paper style={styles.paperContainerSatu}>
                            <Grid sx={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '200px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '180px' }}>
                                    <Box sx={{ height: '28px', width: '131px', borderRadius: '55px', background: '#2775BB', textAlign: 'center', color: 'white' }}>
                                        <Typography fontSize={12} paddingTop={0.2}>{t("Business Solutions", "Solusi Bisnis")}</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <Typography variant='h3'>{t("Big Data and Analytics Solution", "Solusi Big Data dan Analitik")}</Typography>
                                    <Button sx={{ width: '100px', height: '20px', color: '#fff' }}>{t("Learn more", "Pelajari lebih lanjut")}</Button>
                                </Box>
                            </Grid>
                        </Paper>
                        <Paper style={styles.paperContainerDua}>
                            <Grid sx={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '200px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '180px' }}>
                                    <Box sx={{ height: '28px', width: '131px', borderRadius: '55px', background: '#2775BB', textAlign: 'center', color: 'white' }}>
                                        <Typography fontSize={12} paddingTop={0.2}>{t("Business Solutions", "Solusi Bisnis")}</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <Typography variant='h3'>{t("Application Management Service", "Layanan Manajemen Aplikasi")}</Typography>
                                    <Button sx={{ width: '100px', height: '20px', color: '#fff' }}>{t("Learn more", "Pelajari lebih lanjut")}</Button>
                                </Box>
                            </Grid>
                        </Paper>
                        <Paper style={styles.paperContainerTiga}>
                            <Grid sx={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '200px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '180px' }}>
                                    <Box sx={{ height: '28px', width: '131px', borderRadius: '55px', background: '#2775BB', textAlign: 'center', color: 'white' }}>
                                        <Typography fontSize={12} paddingTop={0.2}>{t("Business Solutions", "Solusi Bisnis")}</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <Typography variant='h3'>{t("Portal and Airline Information Delivery", "Portal dan Penyampaian Informasi Maskapai")}</Typography>
                                    <Button sx={{ width: '100px', height: '20px', color: '#fff' }}>{t("Learn more", "Pelajari lebih lanjut")}</Button>
                                </Box>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}