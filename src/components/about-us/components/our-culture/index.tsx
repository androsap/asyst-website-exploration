import { styles } from './styled';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import image from "../../../../assets/asyst/img/background/about-us/our-culture/image.webp"

export default function OurPartnerComponent() {

    return <>
        <Typography sx={styles.title}>
            Our culture and values are something like that
        </Typography>
        <Box sx={styles.mainContent}>
            <Box sx={styles.text}>
                <Typography sx={styles.contentText}>Our purpose, our strategy and our culture drive us to achieve all within a safe, productive work environment, pro-workflow at each position functions and well organized division command as pro that empowers team members to grow and succeed. <a style={{ color: '#F00' }}>( change whole content , benchmark and how it will plan as their job experience and hands-on  proven expertise to analyst solution ux rsch. ux designer and eco )</a></Typography>
                <Typography sx={styles.contentText}>Our purpose, our strategy and our culture drive us to achieve all within a safe, productive work environment, pro-workflow at each position functions and well organized division command as pro that empowers team members to grow and succeed. <a style={{ color: '#F00' }}>( change whole content , benchmark and how it will plan as their job experience and hands-on  proven expertise to analyst solution ux rsch. ux designer and eco )</a></Typography>
            </Box>
            <img src={image} style={styles.image}/>
        </Box>

    </>
}