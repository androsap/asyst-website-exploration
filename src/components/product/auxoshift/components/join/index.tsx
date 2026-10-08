import { Typography } from "components/ui/typography";
import { Button } from "components/ui/button";
import { styles } from './styled';
import { useT } from 'shared/i18n';

export default function JoinComponent() {
    const t = useT();

    return (
        <>
            <div className={styles.mainBox}>
                <div className={styles.contentBox}>
                    <div className={styles.textBox}>
                        <Typography className={styles.title}>{t("Ready to join the future?", "Siap melangkah ke masa depan?")}</Typography>
                        <Typography className={styles.subtitle}>{t("Get more loyal customers who'd stick with your business for a long time", "Dapatkan lebih banyak pelanggan setia yang bertahan lama bersama bisnis Anda")}</Typography>
                    </div>
                    <div className={styles.buttonFrame}>
                        <Button className={styles.button}>
                            <Typography component="span" className={`block ${styles.textButton}`}>{t("Schedule Meeting", "Jadwalkan Pertemuan")}</Typography>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}