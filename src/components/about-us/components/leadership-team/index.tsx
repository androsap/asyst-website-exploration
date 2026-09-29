import { styles } from './styled';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function LeadershipTeamComponent() {

    return <>
        <Typography sx={styles.title}>
            Meet our leadership team
        </Typography>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
            <Box display='flex' flexDirection='column'>
                <Typography sx={styles.name}>Syahmudrian Lubis</Typography>
                <Typography sx={styles.position}>Chief Executive Officer</Typography>
            </Box>
            <LinkedInIcon color='primary' sx={styles.logo} />
            <Box display='flex' flexDirection='column'>
                <Typography sx={styles.name}>Wiwik Widyastatin</Typography>
                <Typography sx={styles.position}>Chief Technology Officer</Typography>
            </Box>
            <LinkedInIcon color='primary' sx={styles.logo} />
        </Box>
        <Box display='flex' flexDirection='row' justifyContent='space-between' gap={7}>
            <Typography sx={styles.paragraph}>As the seasoned CEO of local and multinational companies since year 2005, I've gone through the position as Country Director, Managing Director</Typography>
            <Typography sx={styles.paragraph}>Experienced Senior Information Technology Audit Manager with a demonstrated history of working in the airlines/aviation industry</Typography>
        </Box>
        <Box sx={styles.buttonFrame}>
            <Box sx={styles.button}>
                <Typography sx={styles.textButton}>View all Leadearship</Typography>
            </Box>
        </Box>
    </>

}