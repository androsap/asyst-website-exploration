import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styles } from './styled';

export default function JoinComponent() {
    return (
        <>
            <Box sx={styles.mainBox}>
                <Box sx={styles.contentBox}>
                    <Box sx={styles.textBox}>
                        <Typography sx={styles.title}>Ready to join the future?</Typography>
                        <Typography sx={styles.subtitle}>Get more loyal customers who'd stick with your business for a long time</Typography>
                    </Box>
                    <Box sx={styles.buttonFrame}>
                        <Button sx={styles.button}>
                            <Typography sx={styles.textButton}>Schedule Meeting</Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}