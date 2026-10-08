import { Paper } from "components/ui/paper";
import { Typography } from "components/ui/typography";
import './index.scss';
import { Button } from "components/ui/button";
import { styles } from "./styled";
import { formControlClass, TextField } from "components/ui/text-field";
import { cn } from "@/lib/utils";
import { useT } from "shared/i18n";

interface RequestDemoProps {
    hide: Function;
}

const RequestDemoComponent: React.FC<RequestDemoProps> = ({ hide }) => {
    const t = useT();

    return (
        <div className="items-center justify-center">
            <Paper>
                <div className={styles.heading}>
                    <Typography className={styles.title}>{t("Request Demo", "Minta Demo")}</Typography>
                </div>
                <div className={cn("flex flex-col", styles.paper)}>
                    <Typography>{t("Complete the details below to request demo", "Lengkapi data di bawah ini untuk meminta demo")}</Typography>
                    <div className={cn(formControlClass, styles.form)}>
                        <TextField label={t("Full name", "Nama lengkap")} />
                        <TextField label={t("Company", "Perusahaan")} />
                        <TextField label="Email" />
                        <TextField label={t("Phone Number", "Nomor Telepon")} />
                        <TextField label={t("Message", "Pesan")} />
                        {/* Grid container (spacing theme modal 8 -> mt 16px) */}
                        <div className="box-border flex flex-wrap w-full flex-row mt-[16px] justify-end">
                            <Button variant="contained" className={styles.buttonRequest}>{t("Request", "Kirim")}</Button>
                            <Button variant="contained" className={styles.buttonCancel} onClick={() => hide()}>{t("Cancel", "Batal")}</Button>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    );
};

export default RequestDemoComponent;
