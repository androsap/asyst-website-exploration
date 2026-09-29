import { styles } from './styled';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import image from "../../../../assets/asyst/img/background/about-us/jobs/staff.png"

export default function JobsComponent() {

    return <>
        <Box sx={styles.mainBox}>
            <Box sx={styles.overlayBox}>
                <img src={image} style={styles.image}/>
                <Box sx={styles.content}>
                    <Box sx={styles.frame}>
                            <Typography sx={styles.title}>We have jobs for you</Typography>
                            <Typography sx={styles.text}>Working at Aero Systems Indonesia is confronting challenges with IT innovation, dedication, and passion.</Typography>
                            <Box sx={styles.buttonFrame}>
                                <Box sx={styles.button}>
                                    <Typography sx={styles.textButton}>View opening jobs</Typography>
                                </Box>
                            </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
}