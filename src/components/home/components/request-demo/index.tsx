import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import './index.scss';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styles } from "./styled";
import TextField from '@mui/material/TextField';
import FormControl from "@mui/material/FormControl";
import { useT } from "shared/i18n";

interface RequestDemoProps {
    hide: Function;
}

const RequestDemoComponent: React.FC<RequestDemoProps> = ({ hide }) => {
    const t = useT();

    return (
        <Box alignItems="center" justifyContent="center">
            <Paper>
                <Box sx={styles.paper.heading}>
                    <Typography sx={styles.paper.title}>{t("Request Demo", "Minta Demo")}</Typography>
                </Box>
                <Box display="flex" flexDirection="column" sx={styles.paper}>
                    <Typography>{t("Complete the details below to request demo", "Lengkapi data di bawah ini untuk meminta demo")}</Typography>
                    <FormControl sx={styles.paper.form}>
                        <TextField label={t("Full name", "Nama lengkap")} variant="outlined" />
                        <TextField label={t("Company", "Perusahaan")} variant="outlined" />
                        <TextField label="Email" variant="outlined" />
                        <TextField label={t("Phone Number", "Nomor Telepon")} variant="outlined" />
                        <TextField label={t("Message", "Pesan")} variant="outlined" />
                        <Grid container mt={2} justifyContent="flex-end">
                            <Button variant="contained" sx={styles.paper.buttonRequest}>{t("Request", "Kirim")}</Button>
                            <Button variant="contained" sx={styles.paper.buttonCancel} onClick={() => hide()}>{t("Cancel", "Batal")}</Button>
                        </Grid>
                    </FormControl>
                </Box>
            </Paper>
        </Box>
    );
};

export default RequestDemoComponent;