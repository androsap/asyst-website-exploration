import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { styles } from './styled'
import accountability from "../../../../assets/asyst/img/background/career/accountability.png"
import respect from "../../../../assets/asyst/img/background/career/respect.png"
import integrity from "../../../../assets/asyst/img/background/career/integrity.png"
import teamwork from "../../../../assets/asyst/img/background/career/teamwork.png"
import exellence from "../../../../assets/asyst/img/background/career/exellence.png"

export default function ValueComponent() {
    return <>
        <Typography sx={styles.title}>
            What We Stand For
        </Typography>
        <Box sx={styles.mainBox}>
            <Box sx={styles.contentBox}>
                <Box width='50%'>
                    <img width='100%' src={accountability}></img>
                </Box>
                <Box sx={styles.textContentBox}>
                    <Typography sx={styles.subtitle}>Accountability</Typography>
                    <Typography sx={styles.content}>At ASYST, we believe that quality of work is based on quality of people. As a result, our quality does not only consist of professionals with profound experience, but we also ensure that our solutions empower operational eficiency for our clients. Hence, setting benchmarks in every area of the business, cultivating cutting-edge products and applications. Working hand-in-hand with you, we develop first-class solutions, professional services and provide tailor-made support while enabling you to reduce costs and improve eficiency. We give you the competitive edge.</Typography>
                </Box>
            </Box>
        </Box>
        <Box sx={styles.mainBox}>
            <Box sx={styles.contentBox}>
                <Box sx={styles.textContentBox}>
                    <Typography sx={styles.subtitle}>Respect</Typography>
                    <Typography sx={styles.content}>At ASYST, we believe that quality of work is based on quality of people. As a result, our quality does not only consist of professionals with profound experience, but we also ensure that our solutions empower operational eficiency for our clients. Hence, setting benchmarks in every area of the business, cultivating cutting-edge products and applications. Working hand-in-hand with you, we develop first-class solutions, professional services and provide tailor-made support while enabling you to reduce costs and improve eficiency. We give you the competitive edge.</Typography>
                </Box>
                <Box width='50%'>
                    <img width='100%' src={respect}></img>
                </Box>
            </Box>
        </Box>
        <Box sx={styles.mainBox}>
            <Box sx={styles.contentBox}>
                <Box width='50%'>
                    <img width='100%' src={integrity}></img>
                </Box>
                <Box sx={styles.textContentBox}>
                    <Typography sx={styles.subtitle}>Integrity</Typography>
                    <Typography sx={styles.content}>At ASYST, we believe that quality of work is based on quality of people. As a result, our quality does not only consist of professionals with profound experience, but we also ensure that our solutions empower operational eficiency for our clients. Hence, setting benchmarks in every area of the business, cultivating cutting-edge products and applications. Working hand-in-hand with you, we develop first-class solutions, professional services and provide tailor-made support while enabling you to reduce costs and improve eficiency. We give you the competitive edge.</Typography>
                </Box>
            </Box>
        </Box>
        <Box sx={styles.mainBox}>
            <Box sx={styles.contentBox}>
                <Box sx={styles.textContentBox}>
                    <Typography sx={styles.subtitle}>Teamwork</Typography>
                    <Typography sx={styles.content}>At ASYST, we believe that quality of work is based on quality of people. As a result, our quality does not only consist of professionals with profound experience, but we also ensure that our solutions empower operational eficiency for our clients. Hence, setting benchmarks in every area of the business, cultivating cutting-edge products and applications. Working hand-in-hand with you, we develop first-class solutions, professional services and provide tailor-made support while enabling you to reduce costs and improve eficiency. We give you the competitive edge.</Typography>
                </Box>
                <Box width='50%'>
                    <img width='100%' src={teamwork}></img>
                </Box>
            </Box>
        </Box>
        <Box sx={styles.mainBox}>
            <Box sx={styles.contentBox}>
                <Box width='50%'>
                    <img width='100%' src={exellence}></img>
                </Box>
                <Box sx={styles.textContentBox}>
                    <Typography sx={styles.subtitle}>Exellence</Typography>
                    <Typography sx={styles.content}>At ASYST, we believe that quality of work is based on quality of people. As a result, our quality does not only consist of professionals with profound experience, but we also ensure that our solutions empower operational eficiency for our clients. Hence, setting benchmarks in every area of the business, cultivating cutting-edge products and applications. Working hand-in-hand with you, we develop first-class solutions, professional services and provide tailor-made support while enabling you to reduce costs and improve eficiency. We give you the competitive edge.</Typography>
                </Box>
            </Box>
        </Box>
    </>
}