import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { ReactComponent as MetricsIcon } from "assets/asyst/img/icon/our-fact/our-fact-metrics.svg";
import { styles } from '../../our-fact/styled';
import CountUp from 'react-countup';
import { useState } from 'react';
import { OurFactInterface, numberToShortString } from '../../our-fact';

interface OurFactMobileProps {
    img: string;
    cardsOurFactData: OurFactInterface[] | null;
}

const OurFactMobileComponent: React.FC<OurFactMobileProps> = ({ img, cardsOurFactData }) => {
    const [showShortString, setShowShortString] = useState<boolean>(false)

    return (
        <>
            <Box mt="200px" mb="40px">
                <Box sx={{
                    ...styles.mainBox(img || ''), height: '168px', mb: '16px',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
                    <Box sx={{
                        ...styles.overlayBox,
                        backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.51) 0%, rgba(0, 0, 0, 0.51) 48%, black 100%)',
                    }} />
                    <Grid container sx={{ position: 'absolute', pl: '37px', mt: '28px' }}>
                        <Grid item xs={12}>
                            <Typography sx={{
                                fontFamily: 'Source Sans Pro',
                                fontSize: '14px',
                                fontWeight: 400,
                                lineHeight: '20px',
                            }}>Our Fact</Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography sx={{
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontWeight: 700,
                                lineHeight: '26px',
                            }}>We have experience in developing effective solutions to help our customers.</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Grid item xs={8} sx={{ paddingX: '16px' }}>
                    <Grid container spacing={'16px'}>
                        {cardsOurFactData ?
                            cardsOurFactData.sort((a, b) => {
                                return parseInt(a.sequence) - parseInt(b.sequence);
                            }).map((item, index) => (
                                <Grid item xs={6} key={index}>
                                    <Paper elevation={0} sx={{
                                        ...styles.contentPaper, border: '1px solid var(--nuted-extended-border-value, #E2EAF1)',
                                        background: '#FFF',
                                        width: 'auto',
                                        minHeight: index === 2 || index === 3 ? '250px' : '178px',
                                        paddingBottom: '10px'
                                    }}>
                                        <Grid container>
                                            <Grid item xs={3} sx={{ mr: '14px' }}>
                                                <MetricsIcon style={{ width: '30px', height: '30px' }} />
                                            </Grid>
                                            <Grid item xs={7}>
                                                <Typography sx={{ ...styles.contentNumber, fontSize: '24px', lineHeight: '32px' }}>
                                                    {!showShortString ?
                                                        <CountUp end={parseInt(item.title_en)} duration={5} separator="," onEnd={() => setShowShortString(true)} />
                                                        : numberToShortString(parseInt(item.title_en)) + '+'
                                                    }
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography sx={{ ...styles.contentDescription, color: '#42423B' }}>
                                                    {item.description_en}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            ))
                        : (
                            <></>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default OurFactMobileComponent;
