import './index.scss'
import Box from "@mui/material/Box";
import { styles } from "./styled";
import Typography from "@mui/material/Typography";
import StoryAboutUsConst from "../../../../consts/story-about-us.const";
import imageStory from "../../../../assets/asyst/img/background/about-us/image-story.webp";

export default function OurStoryComponent() {

    return <>
            <Typography sx={styles.title}>
                Our Story
            </Typography>
            <Box display='flex' flexDirection='row' justifyContent='space-between' gap='48px'>
                <Typography sx={styles.contentText}>
                    Asyst was founded in xxxx . Our mission is to collaboration and strives to create an environment of success.
                    Our experienced team of professionals is dedicated to delving into the complexities of business challenges and follow high-end technology .
                    <a style={{ color: '#F00' }}> ( change whole content , benchmark and how it will plan as their job experience and hands-on  proven expertise to analyst solution ux rsch. ux designer and eco )</a>
                </Typography>
                <Typography sx={styles.contentText}>
                    Asyst another profile. Our mission is to collaboration and strives to create an environment of success.
                    Our experienced team of professionals is dedicated to delving into the complexities of business challenges and follow high-end technology
                    <a style={{ color: '#F00' }}> (change whole content , benchmark and how it will plan as their job experience and hands-on  proven expertise to analyst solution ux rsch. ux designer and eco )</a>
                </Typography>
            </Box>
            <Box display='flex' flexDirection='row' justifyContent='space-between' gap='10px'>
                {StoryAboutUsConst.map((item) => (
                    <Box sx={styles.boxFrame}>
                        <Box display='flex' flexDirection='row' justifyContent='center' marginTop="40px">
                            <img style={{ width: '64px', height: '64px', flexShrink: 0 }} src={imageStory} />
                            <Box display='flex' flexDirection='column' >
                                <Typography sx={styles.year}>{item.year}</Typography>
                                <Typography sx={styles.text}>{item.text}</Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
            <Box sx={styles.buttonFrame}>
                <Box sx={styles.button}>
                    <Typography sx={styles.textButton}>View company profile</Typography>
                </Box>
            </Box>
    </>
}