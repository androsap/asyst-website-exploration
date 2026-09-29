import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import CountUp from 'react-countup';
import he from 'he';

import { ReactComponent as MetricsIcon } from 'assets/asyst/img/icon/our-fact/our-fact-metrics.svg';
import { ReactComponent as ArrowIcon } from 'assets/asyst/img/icon/our-fact/our-fact-arrow.svg';

import { styles } from './styled';
import OurFactMobileComponent from '../mobile/our-fact';
import CardsOurFactHelper from 'helper/home/CardsOurFactHelper';


export interface OurFactInterface {
    title_id: string;
    title_en: string;
    description_id: string;
    description_en: string;
    image1: string;
    link_en: string;
    sequence: string;
}

export const numberToShortString = (num: number): string => {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + "B";
    } else if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + "M";
    } else {
        return num.toString();
    }
}

const OurFactComponent = ({ ourFactData, ourFactLoading }:
    { ourFactData: OurFactInterface | null, ourFactLoading: boolean }) => {
    const matches = useMediaQuery('(max-width:1023px)')
    const [showShortString, setShowShortString] = useState<boolean>(false)
    const [cardsOurFactData, setCardsOurFactData] = useState<OurFactInterface[] | null>(null)
    const [cardsOurFactLoading, setCardsOurFactLoading] = useState(true)

    const getCardsOurFact = () => {
        setCardsOurFactLoading(true)
        CardsOurFactHelper.get(({ status, data }) => {
            setCardsOurFactLoading(false)
            if (status && data?.data?.section) setCardsOurFactData(data?.data?.section)
        })
    }
    useEffect(() => {
        getCardsOurFact()
    }, [])

    return (
        <>
            {matches &&
                <OurFactMobileComponent img={ourFactData?.image1 || ''} cardsOurFactData={cardsOurFactData} />
            }
            {
                !matches &&
                <>
                    <Grid container sx={styles.mainGrid}>
                        <Grid item xs={12}>
                            <Typography sx={styles.title}>Our Fact</Typography>
                        </Grid>
                        <Grid item xs={10}>
                            {(ourFactData?.title_en && !ourFactLoading) ? (
                                <Typography sx={styles.subTitle}>
                                    {ourFactData.title_en}
                                </Typography>
                            ) : (
                                <Skeleton animation="wave" variant="text" width={'100%'} height={50} />
                            )}
                        </Grid>
                        <Grid item xs={4} sx={styles.descriptionGrid}>
                            {(ourFactData?.description_en && !ourFactLoading) ? (
                                <Typography sx={styles.description}
                                    dangerouslySetInnerHTML={{ __html: he.decode(ourFactData.description_en) }} />
                            ) : (
                                <Skeleton animation="wave" variant="text" width={'100%'} height={500} />
                            )}
                            <Button sx={styles.button} onClick={() => {
                                if (ourFactData?.link_en) {
                                    window.location.href = ourFactData.link_en;
                                }
                            }}>
                                More about expertise
                            </Button>
                        </Grid>
                        <Grid item xs={8} sx={styles.contentGrid}>
                            <Grid container spacing={2}>
                                {(cardsOurFactData && !cardsOurFactLoading) ?
                                    cardsOurFactData.sort((a, b) => {
                                        return parseInt(a.sequence) - parseInt(b.sequence);
                                    }).map((item, index) => (
                                        <Grid item xs={6} key={index}>
                                            <Paper elevation={0}
                                                sx={{
                                                    ...styles.contentPaper,
                                                    minHeight: index > 1 ? '130px' : styles.contentPaper.minHeight
                                                }}>
                                                <Grid container>
                                                    <Grid item xs={3}>
                                                        <MetricsIcon />
                                                    </Grid>
                                                    <Grid item xs={7}>
                                                        <Typography sx={styles.contentNumber}>
                                                            {!showShortString ?
                                                                <CountUp end={parseInt(item.title_en)} duration={10} separator="," onEnd={() => setShowShortString(true)} />
                                                                : numberToShortString(parseInt(item.title_en)) + '+'
                                                            }
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={2} sx={styles.contentArrowIcon}>
                                                        <ArrowIcon />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography sx={styles.contentDescription}>
                                                            {item.description_en}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                    ))
                                    : (
                                        [0, 1, 2, 3].map((_, index) => (
                                            <Grid item xs={6} key={index}>
                                                <Paper elevation={0} sx={styles.contentPaper}>
                                                    <Grid container>
                                                        <Grid item xs={3}>
                                                            <MetricsIcon />
                                                        </Grid>
                                                        <Grid item xs={7}>
                                                            <Skeleton animation="wave" variant="text" width={'70%'} height={50} />
                                                        </Grid>
                                                        <Grid item xs={2} sx={styles.contentArrowIcon}>
                                                            <ArrowIcon />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Skeleton animation="wave" variant="text" width={'100%'} height={50} />
                                                        </Grid>
                                                    </Grid>
                                                </Paper>
                                            </Grid>
                                        ))
                                    )}
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            }
        </>
    );
}

export default OurFactComponent