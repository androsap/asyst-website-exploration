import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { styles } from './styled'

export default function JobComponent() {
    return <>
        <Box sx={styles.mainBox}>
            <Typography sx={styles.title}>
                Ready to Apply?
            </Typography>
            <Box width='842px'>
                <Typography sx={styles.description}>
                    Let’s shake things up and do things differently! With an optimistic, enthusiastic, and passionate attitude, we strive to exceed our customers' expectations
                </Typography>
            </Box>
            <Button sx={styles.buttonFrame}>
                <Box sx={styles.button}>
                    <Typography sx={styles.textButton}>Explore our vacancies</Typography>
                </Box>
            </Button>
        </Box>
    </>
}