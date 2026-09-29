import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { styles } from './styled'

export default function DescriptionTeamComponent() {
    return <>
        <Box display='flex' flexDirection='row' justifyContent='space-between' gap='50px' pt='50px'>
            <Box width='50%'>
                <Typography sx={styles.title}>
                    We are<br />Asyst Design Team
                </Typography>
            </Box>
            <Box width='50%'>
                <Typography sx={styles.content}>
                    At ASYST, we believe that quality of work is based on quality of people. As a result, our quality does not only consist of professionals with profound experience, but we also ensure that our solutions empower operational eficiency for our clients. Hence, setting benchmarks in every area of the business, cultivating cutting-edge products and applications. Working hand-in-hand with you, we develop first-class solutions, professional services and provide tailor-made support while enabling you to reduce costs and improve eficiency. We give you the competitive edge.
                </Typography>
            </Box>
        </Box >
    </>
}