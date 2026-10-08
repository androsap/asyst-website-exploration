import './index.scss';
import { Typography } from "components/ui/typography";
import { Divider } from "components/ui/divider";
import { Paper } from "components/ui/paper";
import { Button } from "components/ui/button";
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
            <div className='Solution' >
                <div className="[box-sizing:border-box] flex-row flex gap-[40px] pb-[32px]">
                    <Typography variant='h1'>{t("Aero Systems Indonesia Solutions for Airline", "Solusi Aero Systems Indonesia untuk Maskapai")}</Typography>
                    <Typography variant='h2'>{t("Revitalize and accelerate digital transformation initiatives to recover lost time, lower the cost of customer service and de-risk traditional business models. ", "Hidupkan kembali dan percepat inisiatif transformasi digital untuk mengejar waktu yang hilang, menekan biaya layanan pelanggan, dan mengurangi risiko model bisnis tradisional. ")}</Typography>
                </div>
                <Divider />
                <div className="[box-sizing:border-box] flex-col flex gap-[48px] pt-[42px]">
                    {/* Line 1 */}
                    <div className="[box-sizing:border-box] flex-row flex gap-[48px]">
                        <Paper style={styles.paperContainerSatu}>
                            <div className="[box-sizing:border-box] flex-col pt-[28px] pr-[28px] pb-[28px] pl-[28px] flex gap-[200px]">
                                <div className="flex flex-row gap-[180px]">
                                    <div className="h-[28px] w-[131px] rounded-[55px] [background:#2775BB] text-center text-[color:white]">
                                        <Typography className="pt-[3.2px] text-[length:12px]">{t("Business Solutions", "Solusi Bisnis")}</Typography>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[20px]">
                                    <Typography variant='h3'>{t("Big Data and Analytics Solution", "Solusi Big Data dan Analitik")}</Typography>
                                    <Button className="w-[100px] h-[20px] text-[color:#fff]">{t("Learn more", "Pelajari lebih lanjut")}</Button>
                                </div>
                            </div>
                        </Paper>
                        <Paper style={styles.paperContainerDua}>
                            <div className="[box-sizing:border-box] flex-col pt-[28px] pr-[28px] pb-[28px] pl-[28px] flex gap-[200px]">
                                <div className="flex flex-row gap-[180px]">
                                    <div className="h-[28px] w-[131px] rounded-[55px] [background:#2775BB] text-center text-[color:white]">
                                        <Typography className="pt-[3.2px] text-[length:12px]">{t("Business Solutions", "Solusi Bisnis")}</Typography>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[20px]">
                                    <Typography variant='h3'>{t("Application Management Service", "Layanan Manajemen Aplikasi")}</Typography>
                                    <Button className="w-[100px] h-[20px] text-[color:#fff]">{t("Learn more", "Pelajari lebih lanjut")}</Button>
                                </div>
                            </div>
                        </Paper>
                        <Paper style={styles.paperContainerTiga}>
                            <div className="[box-sizing:border-box] flex-col pt-[28px] pr-[28px] pb-[28px] pl-[28px] flex gap-[200px]">
                                <div className="flex flex-row gap-[180px]">
                                    <div className="h-[28px] w-[131px] rounded-[55px] [background:#2775BB] text-center text-[color:white]">
                                        <Typography className="pt-[3.2px] text-[length:12px]">{t("Business Solutions", "Solusi Bisnis")}</Typography>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[20px]">
                                    <Typography variant='h3'>{t("Portal and Airline Information Delivery", "Portal dan Penyampaian Informasi Maskapai")}</Typography>
                                    <Button className="w-[100px] h-[20px] text-[color:#fff]">{t("Learn more", "Pelajari lebih lanjut")}</Button>
                                </div>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        </>
    )
}