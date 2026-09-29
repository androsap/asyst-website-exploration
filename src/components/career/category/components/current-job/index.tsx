import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { styles } from './styled'
import arrow from '../../../../../assets/asyst/img/icon/career/arrow-icon.png'
import Divider from '@mui/material/Divider';

const currentJob = [
    {
        job: 'UX Researcher',
        desc: 'Greetings,  developers, & IT enthusiasts! Currently, We are looking for a "Project Manager"! Please kindly check the requirements as Aero Systems Indonesia required'
    },
    {
        job: 'UX Designer',
        desc: 'Greetings,  developers, & IT enthusiasts! Currently, We are looking for a "Project Manager"! Please kindly check the requirements as Aero Systems Indonesia required'
    },
    {
        job: 'UI Designer',
        desc: 'Greetings,  developers, & IT enthusiasts! Currently, We are looking for a "Project Manager"! Please kindly check the requirements as Aero Systems Indonesia required'
    },
    {
        job: 'Design Engineer',
        desc: 'Greetings,  developers, & IT enthusiasts! Currently, We are looking for a "Project Manager"! Please kindly check the requirements as Aero Systems Indonesia required'
    },
    {
        job: 'Design Lead',
        desc: 'Greetings,  developers, & IT enthusiasts! Currently, We are looking for a "Project Manager"! Please kindly check the requirements as Aero Systems Indonesia required'
    },
    {
        job: 'Design Manager',
        desc: 'Greetings,  developers, & IT enthusiasts! Currently, We are looking for a "Project Manager"! Please kindly check the requirements as Aero Systems Indonesia required'
    },
]

export default function CurrentJobComponent() {
    return <>
        <Typography sx={styles.title}>
            Current Job Vacancies at Design
        </Typography>
        {currentJob.map((item) =>
            <Box sx={styles.mainBox}>
                <Box sx={styles.boxContent} >
                    <Box width='20%'>
                        <Typography sx={styles.job}>{item.job}</Typography>
                    </Box>
                    <Box width='75%'>
                        <Typography sx={styles.desc}>{item.desc}</Typography>
                    </Box>
                    <img style={{ width: '24px', height: '24px' }} src={arrow} />
                </Box>
                <Box>
                    <Divider />
                </Box>
            </Box>
        )}
    </>
}