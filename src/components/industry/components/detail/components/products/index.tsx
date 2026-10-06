import Typography from '@mui/material/Typography';
import './index.scss';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Amala from 'assets/img/icon/products/Group 33.png';
import Auxoshift from 'assets/img/icon/products/Group 34.png';
import Athena from 'assets/img/icon/products/Group 35.png';
import Hermes from 'assets/img/icon/products/Group 36.png';
import Elea from 'assets/img/icon/products/Group 37.png';
import Apollo from 'assets/img/icon/products/Group 38.png';
import Button from '@mui/material/Button';
import { useT } from 'shared/i18n';

export default function ProductComponent() {
    const t = useT();
    return (
        <>
            <Box sx={{paddingY:'50px'}}>
                <Grid sx={{ display: 'flex', flexDirection: 'row', gap: '40px', paddingBottom: '32px' }}>
                    <Typography variant='h1'>{t("Aero Systems Indonesia Products for Airline", "Produk Aero Systems Indonesia untuk Maskapai")}</Typography>
                    <Typography variant='h2'>{t("Revitalize and accelerate digital transformation initiatives to recover lost time, lower the cost of customer service and de-risk traditional business models. ", "Hidupkan kembali dan percepat inisiatif transformasi digital untuk mengejar waktu yang hilang, menekan biaya layanan pelanggan, dan mengurangi risiko model bisnis tradisional. ")}</Typography>
                </Grid>
                <Divider />
                <Grid sx={{ display: 'flex', flexDirection: 'column', gap: '48px', paddingTop: '42px' }}>
                    {/* Line 1 */}
                    <Grid sx={{ display: 'flex', flexDirection: 'row', gap: '48px' }}>
                        <Paper sx={{ borderRadius: '20px', width: '392px', height: '392px' }}>
                            <Grid sx={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '74px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '180px' }}>
                                    <Box sx={{ height: '28px', width: '84px', borderRadius: '55px', background: '#2775BB', textAlign: 'center', color: 'white' }}>
                                        <Typography fontSize={12} paddingTop={0.2}>{t("Products", "Produk")}</Typography>
                                    </Box>
                                    <img className='img-products' src={Amala} alt="" />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <Typography variant='h3'>Amala</Typography>
                                    <Typography variant='h4'>{t("a framework for rewarding and incentivizing customers to engage with a business repeatedly fostering long-term customer loyalty and retention", "kerangka untuk memberi reward dan insentif agar pelanggan terus berinteraksi dengan bisnis, membangun loyalitas dan retensi pelanggan jangka panjang")}</Typography>
                                    <Button sx={{ width:'100px',height:'20px' }}>{t("Learn more", "Pelajari lebih lanjut")}</Button>
                                </Box>
                            </Grid>
                        </Paper>
                        <Paper sx={{ borderRadius: '20px', width: '392px', height: '392px' }}>
                            <Grid sx={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '74px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '180px' }}>
                                    <Box sx={{ height: '28px', width: '84px', borderRadius: '55px', background: '#2775BB', textAlign: 'center', color: 'white' }}>
                                        <Typography fontSize={12} paddingTop={0.2}>{t("Products", "Produk")}</Typography>
                                    </Box>
                                    <img className='img-products' src={Auxoshift} alt="" />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <Typography variant='h3'>Auxoshift</Typography>
                                    <Typography variant='h4'>{t("manage and optimize various types of scheduling activities a centralized platform where users can schedule and coordinate resources, tasks, appointments, or events efficiently", "mengelola dan mengoptimalkan berbagai aktivitas penjadwalan dalam platform terpusat tempat pengguna dapat menjadwalkan dan mengoordinasikan sumber daya, tugas, janji temu, atau acara secara efisien")}</Typography>
                                    <Button sx={{ width:'100px',height:'20px' }}>{t("Learn more", "Pelajari lebih lanjut")}</Button>
                                </Box>
                            </Grid>
                        </Paper>
                        <Paper sx={{ borderRadius: '20px', width: '392px', height: '392px' }}>
                            <Grid sx={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '74px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '180px' }}>
                                    <Box sx={{ height: '28px', width: '84px', borderRadius: '55px', background: '#2775BB', textAlign: 'center', color: 'white' }}>
                                        <Typography fontSize={12} paddingTop={0.2}>{t("Products", "Produk")}</Typography>
                                    </Box>
                                    <img className='img-products' src={Athena} alt="" />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <Typography variant='h3'>Athena</Typography>
                                    <Typography variant='h4'>{t("Streamline and automate various aspects of travel planning, booking, expense management, and reporting for businesses and organizations", "Menyederhanakan dan mengotomatiskan berbagai aspek perencanaan perjalanan, pemesanan, pengelolaan biaya, dan pelaporan bagi bisnis dan organisasi")}</Typography>
                                    <Button sx={{ width:'100px',height:'20px' }}>{t("Learn more", "Pelajari lebih lanjut")}</Button>
                                </Box>
                            </Grid>
                        </Paper>
                    </Grid>
                    {/* Line 2 */}
                    <Grid sx={{ display: 'flex', flexDirection: 'row', gap: '48px' }}>
                        <Paper sx={{ borderRadius: '20px', width: '392px', height: '392px' }}>
                            <Grid sx={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '74px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '180px' }}>
                                    <Box sx={{ height: '28px', width: '84px', borderRadius: '55px', background: '#2775BB', textAlign: 'center', color: 'white' }}>
                                        <Typography fontSize={12} paddingTop={0.2}>{t("Products", "Produk")}</Typography>
                                    </Box>
                                    <img className='img-products' src={Hermes} alt="" />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <Typography variant='h3'>Hermes</Typography>
                                    <Typography variant='h4'>{t("Manage and optimize various aspects of cargo and freight operations. Make it easy for companies to track shipments and order In real - time", "Mengelola dan mengoptimalkan berbagai aspek operasional kargo dan pengiriman barang. Memudahkan perusahaan melacak kiriman dan pesanan secara real-time")}</Typography>
                                    <Button sx={{ width:'100px',height:'20px' }}>{t("Learn more", "Pelajari lebih lanjut")}</Button>
                                </Box>
                            </Grid>
                        </Paper>
                        <Paper sx={{ borderRadius: '20px', width: '392px', height: '392px' }}>
                            <Grid sx={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '74px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '180px' }}>
                                    <Box sx={{ height: '28px', width: '84px', borderRadius: '55px', background: '#2775BB', textAlign: 'center', color: 'white' }}>
                                        <Typography fontSize={12} paddingTop={0.2}>{t("Products", "Produk")}</Typography>
                                    </Box>
                                    <img className='img-products' src={Elea} alt="" />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <Typography variant='h3'>Elea</Typography>
                                    <Typography variant='h4'>{t("Aligning IT services with the needs of the business, optimizing service delivery, and ensuring customer satisfaction to automate emails or actions", "Menyelaraskan layanan IT dengan kebutuhan bisnis, mengoptimalkan penyampaian layanan, dan memastikan kepuasan pelanggan melalui otomatisasi email atau tindakan")}</Typography>
                                    <Button sx={{ width:'100px',height:'20px' }}>{t("Learn more", "Pelajari lebih lanjut")}</Button>
                                </Box>
                            </Grid>
                        </Paper>
                        <Paper sx={{ borderRadius: '20px', width: '392px', height: '392px' }}>
                            <Grid sx={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '74px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '180px' }}>
                                    <Box sx={{ height: '28px', width: '84px', borderRadius: '55px', background: '#2775BB', textAlign: 'center', color: 'white' }}>
                                        <Typography fontSize={12} paddingTop={0.2}>{t("Products", "Produk")}</Typography>
                                    </Box>
                                    <img className='img-products' src={Apollo} alt="" />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <Typography variant='h3'>Apollo</Typography>
                                    <Typography variant='h4'>{t("Provides a centralized database and a suite of interconnected modules to streamline and automate business operations, improve efficiency, and enhance decision-making", "Menyediakan database terpusat dan rangkaian modul yang saling terhubung untuk menyederhanakan dan mengotomatiskan operasional bisnis, meningkatkan efisiensi, dan memperkuat pengambilan keputusan")}</Typography>
                                    <Button sx={{ width:'100px',height:'20px' }}>{t("Learn more", "Pelajari lebih lanjut")}</Button>
                                </Box>
                            </Grid>
                        </Paper>
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}