import { Typography } from "components/ui/typography";
import './index.scss';
import { Divider } from "components/ui/divider";
import { Paper } from "components/ui/paper";
import Amala from 'assets/img/icon/products/Group 33.webp';
import Auxoshift from 'assets/img/icon/products/Group 34.webp';
import Athena from 'assets/img/icon/products/Group 35.webp';
import Hermes from 'assets/img/icon/products/Group 36.webp';
import Elea from 'assets/img/icon/products/Group 37.webp';
import Apollo from 'assets/img/icon/products/Group 38.webp';
import { Button } from "components/ui/button";
import { useT } from 'shared/i18n';

export default function ProductComponent() {
    const t = useT();
    return (
        <>
            <div className="pt-[50px] pb-[50px]">
                <div className="[box-sizing:border-box] flex-row flex gap-[40px] pb-[32px]">
                    <Typography variant='h1'>{t("Aero Systems Indonesia Products for Airline", "Produk Aero Systems Indonesia untuk Maskapai")}</Typography>
                    <Typography variant='h2'>{t("Revitalize and accelerate digital transformation initiatives to recover lost time, lower the cost of customer service and de-risk traditional business models. ", "Hidupkan kembali dan percepat inisiatif transformasi digital untuk mengejar waktu yang hilang, menekan biaya layanan pelanggan, dan mengurangi risiko model bisnis tradisional. ")}</Typography>
                </div>
                <Divider />
                <div className="[box-sizing:border-box] flex-col flex gap-[48px] pt-[42px]">
                    {/* Line 1 */}
                    <div className="[box-sizing:border-box] flex-row flex gap-[48px]">
                        <Paper className="rounded-[20px] w-[392px] h-[392px]">
                            <div className="[box-sizing:border-box] flex-col pt-[28px] pr-[28px] pb-[28px] pl-[28px] flex gap-[74px]">
                                <div className="flex flex-row gap-[180px]">
                                    <div className="h-[28px] w-[84px] rounded-[55px] [background:#2775BB] text-center text-[color:white]">
                                        <Typography className="pt-[3.2px] text-[length:12px]">{t("Products", "Produk")}</Typography>
                                    </div>
                                    <img className='img-products' src={Amala} alt="" />
                                </div>
                                <div className="flex flex-col gap-[20px]">
                                    <Typography variant='h3'>Amala</Typography>
                                    <Typography variant='h4'>{t("a framework for rewarding and incentivizing customers to engage with a business repeatedly fostering long-term customer loyalty and retention", "kerangka untuk memberi reward dan insentif agar pelanggan terus berinteraksi dengan bisnis, membangun loyalitas dan retensi pelanggan jangka panjang")}</Typography>
                                    <Button className="w-[100px] h-[20px]">{t("Learn more", "Pelajari lebih lanjut")}</Button>
                                </div>
                            </div>
                        </Paper>
                        <Paper className="rounded-[20px] w-[392px] h-[392px]">
                            <div className="[box-sizing:border-box] flex-col pt-[28px] pr-[28px] pb-[28px] pl-[28px] flex gap-[74px]">
                                <div className="flex flex-row gap-[180px]">
                                    <div className="h-[28px] w-[84px] rounded-[55px] [background:#2775BB] text-center text-[color:white]">
                                        <Typography className="pt-[3.2px] text-[length:12px]">{t("Products", "Produk")}</Typography>
                                    </div>
                                    <img className='img-products' src={Auxoshift} alt="" />
                                </div>
                                <div className="flex flex-col gap-[20px]">
                                    <Typography variant='h3'>Auxoshift</Typography>
                                    <Typography variant='h4'>{t("manage and optimize various types of scheduling activities a centralized platform where users can schedule and coordinate resources, tasks, appointments, or events efficiently", "mengelola dan mengoptimalkan berbagai aktivitas penjadwalan dalam platform terpusat tempat pengguna dapat menjadwalkan dan mengoordinasikan sumber daya, tugas, janji temu, atau acara secara efisien")}</Typography>
                                    <Button className="w-[100px] h-[20px]">{t("Learn more", "Pelajari lebih lanjut")}</Button>
                                </div>
                            </div>
                        </Paper>
                        <Paper className="rounded-[20px] w-[392px] h-[392px]">
                            <div className="[box-sizing:border-box] flex-col pt-[28px] pr-[28px] pb-[28px] pl-[28px] flex gap-[74px]">
                                <div className="flex flex-row gap-[180px]">
                                    <div className="h-[28px] w-[84px] rounded-[55px] [background:#2775BB] text-center text-[color:white]">
                                        <Typography className="pt-[3.2px] text-[length:12px]">{t("Products", "Produk")}</Typography>
                                    </div>
                                    <img className='img-products' src={Athena} alt="" />
                                </div>
                                <div className="flex flex-col gap-[20px]">
                                    <Typography variant='h3'>Athena</Typography>
                                    <Typography variant='h4'>{t("Streamline and automate various aspects of travel planning, booking, expense management, and reporting for businesses and organizations", "Menyederhanakan dan mengotomatiskan berbagai aspek perencanaan perjalanan, pemesanan, pengelolaan biaya, dan pelaporan bagi bisnis dan organisasi")}</Typography>
                                    <Button className="w-[100px] h-[20px]">{t("Learn more", "Pelajari lebih lanjut")}</Button>
                                </div>
                            </div>
                        </Paper>
                    </div>
                    {/* Line 2 */}
                    <div className="[box-sizing:border-box] flex-row flex gap-[48px]">
                        <Paper className="rounded-[20px] w-[392px] h-[392px]">
                            <div className="[box-sizing:border-box] flex-col pt-[28px] pr-[28px] pb-[28px] pl-[28px] flex gap-[74px]">
                                <div className="flex flex-row gap-[180px]">
                                    <div className="h-[28px] w-[84px] rounded-[55px] [background:#2775BB] text-center text-[color:white]">
                                        <Typography className="pt-[3.2px] text-[length:12px]">{t("Products", "Produk")}</Typography>
                                    </div>
                                    <img className='img-products' src={Hermes} alt="" />
                                </div>
                                <div className="flex flex-col gap-[20px]">
                                    <Typography variant='h3'>Hermes</Typography>
                                    <Typography variant='h4'>{t("Manage and optimize various aspects of cargo and freight operations. Make it easy for companies to track shipments and order In real - time", "Mengelola dan mengoptimalkan berbagai aspek operasional kargo dan pengiriman barang. Memudahkan perusahaan melacak kiriman dan pesanan secara real-time")}</Typography>
                                    <Button className="w-[100px] h-[20px]">{t("Learn more", "Pelajari lebih lanjut")}</Button>
                                </div>
                            </div>
                        </Paper>
                        <Paper className="rounded-[20px] w-[392px] h-[392px]">
                            <div className="[box-sizing:border-box] flex-col pt-[28px] pr-[28px] pb-[28px] pl-[28px] flex gap-[74px]">
                                <div className="flex flex-row gap-[180px]">
                                    <div className="h-[28px] w-[84px] rounded-[55px] [background:#2775BB] text-center text-[color:white]">
                                        <Typography className="pt-[3.2px] text-[length:12px]">{t("Products", "Produk")}</Typography>
                                    </div>
                                    <img className='img-products' src={Elea} alt="" />
                                </div>
                                <div className="flex flex-col gap-[20px]">
                                    <Typography variant='h3'>Elea</Typography>
                                    <Typography variant='h4'>{t("Aligning IT services with the needs of the business, optimizing service delivery, and ensuring customer satisfaction to automate emails or actions", "Menyelaraskan layanan IT dengan kebutuhan bisnis, mengoptimalkan penyampaian layanan, dan memastikan kepuasan pelanggan melalui otomatisasi email atau tindakan")}</Typography>
                                    <Button className="w-[100px] h-[20px]">{t("Learn more", "Pelajari lebih lanjut")}</Button>
                                </div>
                            </div>
                        </Paper>
                        <Paper className="rounded-[20px] w-[392px] h-[392px]">
                            <div className="[box-sizing:border-box] flex-col pt-[28px] pr-[28px] pb-[28px] pl-[28px] flex gap-[74px]">
                                <div className="flex flex-row gap-[180px]">
                                    <div className="h-[28px] w-[84px] rounded-[55px] [background:#2775BB] text-center text-[color:white]">
                                        <Typography className="pt-[3.2px] text-[length:12px]">{t("Products", "Produk")}</Typography>
                                    </div>
                                    <img className='img-products' src={Apollo} alt="" />
                                </div>
                                <div className="flex flex-col gap-[20px]">
                                    <Typography variant='h3'>Apollo</Typography>
                                    <Typography variant='h4'>{t("Provides a centralized database and a suite of interconnected modules to streamline and automate business operations, improve efficiency, and enhance decision-making", "Menyediakan database terpusat dan rangkaian modul yang saling terhubung untuk menyederhanakan dan mengotomatiskan operasional bisnis, meningkatkan efisiensi, dan memperkuat pengambilan keputusan")}</Typography>
                                    <Button className="w-[100px] h-[20px]">{t("Learn more", "Pelajari lebih lanjut")}</Button>
                                </div>
                            </div>
                        </Paper>
                    </div>

                </div>
            </div>
        </>
    )
}