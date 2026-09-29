import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import './index.scss';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styles } from "./styled";
import TextField from '@mui/material/TextField';
import FormControl from "@mui/material/FormControl";

interface RequestDemoProps {
    hide: Function;
}

const RequestDemoComponent: React.FC<RequestDemoProps> = ({ hide }) => {

    return (
        <Box alignItems="center" justifyContent="center">
            <Paper>
                <Box sx={styles.paper.heading}>
                    <Typography sx={styles.paper.title}>Request Demo</Typography>
                </Box>
                <Box display="flex" flexDirection="column" sx={styles.paper}>
                    <Typography>Complete the details below to request demo</Typography>
                    <FormControl sx={styles.paper.form}>
                        <TextField label="Fullname" variant="outlined" />
                        <TextField label="Company" variant="outlined" />
                        <TextField label="Email" variant="outlined" />
                        <TextField label="Phone Number" variant="outlined" />
                        <TextField label="Message" variant="outlined" />
                        <Grid container mt={2} justifyContent="flex-end">
                            <Button variant="contained" sx={styles.paper.buttonRequest}>Request</Button>
                            <Button variant="contained" sx={styles.paper.buttonCancel} onClick={() => hide()}>Cancel</Button>
                        </Grid>
                    </FormControl>
                </Box>
            </Paper>
        </Box>
    );
};

export default RequestDemoComponent;