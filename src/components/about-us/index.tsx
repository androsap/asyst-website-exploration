import Grid from "@mui/material/Grid";
import { Suspense } from 'react';
import { MainLayoutSharedProps } from "shared/layout/main-layout";
import Container from '@mui/material/Container';
import './index.scss';
import { Element } from 'react-scroll';
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { styles } from './styled';
import Typography from "@mui/material/Typography";
import OurStoryComponent from "./components/our-story";
import LeadershipTeam from "./components/leadership-team";
import OurCustomer from "./components/our-customer";
import OurPartner from "./components/our-partner";
import Jobs from "./components/jobs";
import OurCulture from "./components/our-culture";

const Loading = <Box width="100%" height="150px" display="flex" alignItems="center" justifyContent="center" position="relative">
    <CircularProgress color="inherit" size={40} />
</Box>



export default function AboutUsComponent({ }: MainLayoutSharedProps) {

    return <Box>
        <Element name="about-us">
            <Box sx={styles.mainBox}>
                <div className="head-product" style={{ display: 'flex', flexDirection: 'column', padding: '100px', width: '100%', height: '50%', alignItems: 'center', gap: '65px' }}>
                    <Grid sx={{ display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'center', paddingTop: '20px' }}>
                        <Grid item sx={styles.textContent}>
                            <Typography sx={styles.header}>Your new coworkers?</Typography>
                            <Typography sx={styles.title}>Aero Systems Indonesia</Typography>
                            <Typography sx={styles.text}>We offer leading IT solutions to Public services, Airlines etc to advance businesses into the digital era</Typography>
                        </Grid>
                        <Grid item>
                            <Box sx={styles.imageContent} />
                        </Grid>
                    </Grid>
                </div>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="center" sx={styles.footerBox}></Box>
        </Element>
        {
            <Suspense fallback={Loading}>
                <Container maxWidth="xl" sx={{ display: "flex", gap: "53px", flexDirection: "column" }}>
                    <OurStoryComponent />
                    <LeadershipTeam />
                    <OurCustomer />
                    <OurPartner />
                </Container>
                <Jobs />
                <Container maxWidth="xl" sx={{ display: "flex", gap: "53px", flexDirection: "column" }}>
                    <OurCulture />
                </Container>
            </Suspense>
        }
    </Box >
}