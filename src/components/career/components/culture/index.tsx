import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { styles } from './styled'

export default function CultureComponent() {
    return <>
        <Box display='flex' flexDirection='row' justifyContent='space-between' gap='50px' pt='50px'>
            <Box width='50%'>
                <Typography sx={styles.title}>
                    We are<br />Aero Systems Indonesia
                </Typography>
            </Box>
            <Box width='50%'>
                <Typography sx={styles.content}>
                    At ASYST, we believe that quality of work is based on quality of people. As a result, our quality does not only consist of professionals with profound experience, but we also ensure that our solutions empower operational eficiency for our clients. Hence, setting benchmarks in every area of the business, cultivating cutting-edge products and applications. Working hand-in-hand with you, we develop first-class solutions, professional services and provide tailor-made support while enabling you to reduce costs and improve eficiency. We give you the competitive edge.
                </Typography>
            </Box>
        </Box >
        <Box display='flex' flexDirection='row' justifyContent='space-between' gap='50px'>
            <Box width='50%'>
                <Typography sx={styles.title}>
                    Our Culture
                </Typography>
            </Box>
            <Box width='50%'>
                <Typography sx={styles.content}>
                Our innovative culture puts people first. We believe that happy, engaged employees make for better products. We’re looking for smart, creative people who enjoy building things.<br/><br/>
                There are few places where people come together in such a beautiful way to build something awesome. It's the energy of teamwork that makes us stand out. Because here at Betty Blocks, we're all about making progress together.<br/><br/>
                In this fast-paced, challenging environment, we support one another while working hard to build a strong company that helps us become better each day.
                </Typography>
            </Box>
        </Box >
    </>
}