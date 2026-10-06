import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styles } from './styled';
import { useT } from 'shared/i18n';

export default function JoinComponent() {
    const t = useT();

    return (
        <>
            <Box sx={styles.mainBox}>
                <Box sx={styles.contentBox}>
                    <Box sx={styles.textBox}>
                        <Typography sx={styles.title}>{t("Ready to join the future?", "Siap melangkah ke masa depan?")}</Typography>
                        <Typography sx={styles.subtitle}>{t("Get more loyal customers who'd stick with your business for a long time", "Dapatkan lebih banyak pelanggan setia yang bertahan lama bersama bisnis Anda")}</Typography>
                    </Box>
                    <Box sx={styles.buttonFrame}>
                        <Button sx={styles.button}>
                            <Typography sx={styles.textButton}>{t("Schedule Meeting", "Jadwalkan Pertemuan")}</Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}