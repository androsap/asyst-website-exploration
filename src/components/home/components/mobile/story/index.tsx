import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { TitleDataInterface } from '../../story';
import Skeleton from '@mui/material/Skeleton';
import he from 'he';
import { styles } from './styled';

interface StoryMobileProps {
    titleData: TitleDataInterface | null;
}

const StoryMobileComponent: React.FC<StoryMobileProps> = ({ titleData }) => {
    const handleClickMore = () => {
        if (titleData?.section.link_en) window.location.href = titleData.section.link_en
    }
    return (
        <>
            <Box>
                <Box sx={styles.container}>
                    <Box sx={{
                        padding: '24px',
                    }}>
                        <Typography sx={styles.subtitle}>Asyst Story</Typography>
                        {titleData?.section.title_en ? (
                            <Typography sx={styles.title}>
                                {he.decode(titleData.section.title_en)}
                            </Typography>
                        ) : (
                            <Skeleton animation="wave" variant="text" width={300} height={26} />
                        )}
                        {titleData?.section.description_en ? (
                            <Typography
                                sx={styles.description}
                                dangerouslySetInnerHTML={{ __html: he.decode(titleData.section.description_en.substring(0, 175)) + '...' }}
                            />
                        ) : (
                            <Skeleton animation="wave" variant="text" width="100%" height={100} />
                        )}
                    </Box>
                    <Box
                        sx={styles.readMoreButton}
                        onClick={handleClickMore}
                    >
                        <Typography sx={styles.readMoreButton.text}>
                            Read More
                        </Typography>
                        <KeyboardArrowRightIcon sx={{ color: 'white' }} />
                    </Box>
                </Box>
            </Box>
        </>
    );
}


export default StoryMobileComponent;