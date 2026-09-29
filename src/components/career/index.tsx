import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { MainLayoutSharedProps } from "shared/layout/main-layout";
import { Element } from 'react-scroll';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import { styles } from './styled';
import './index.scss';
import { ReactComponent as BackCircleIcon } from 'assets/asyst/img/icon/industry/back-circle.svg';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import image from "../../../src/assets/asyst/img/background/career/image-banner.png"
import { Suspense } from "react";
import CultureComponent from "./components/culture";
import ValueComponent from "./components/value";
import EnvironmentComponent from "./components/environment";
import DepartmentComponent from "./components/department";
import JobComponent from "./components/job";
import { ReactComponent as CurvedLine1 } from 'assets/asyst/img/background/career/curved-line.svg';

const Loading = <Box width="100%" height="150px" display="flex" alignItems="center" justifyContent="center" position="relative">
    <CircularProgress color="inherit" size={40} />
</Box>

export default function CareerComponent({ }: MainLayoutSharedProps) {

    return <Box mb='-185px'>
        <Element name="about-us">
            <Box sx={styles.mainBox}>
                <Container maxWidth="xl">
                    <Box sx={styles.backNavContainer}>
                        <Link to="https://www.asyst.co.id/">
                            <BackCircleIcon />
                        </Link>
                        <Typography sx={styles.backNavContainer.text}>Company</Typography>
                        <Typography sx={styles.backNavContainer.title}>Career</Typography>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="space-between" height="70vh">
                        <Box className="left-banner" display="flex" flexDirection="column"
                            justifyContent="flex-start" gap="5%">
                            <Typography sx={styles.title}>
                                Grow your career with<br />Aero Systems Indonesia
                            </Typography>
                            <Button sx={styles.buttonFrame}>
                                <Box sx={styles.button}>
                                    <Typography sx={styles.textButton}>Explore Our Jobs</Typography>
                                </Box>
                            </Button>
                        </Box>
                        <Box className="right-banner">
                            <img className="image1" src={image}
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: 'auto'
                                }} />
                        </Box>
                    </Box>
                </Container>

                <Box sx={styles.curvedLineWrapper}>
                    <CurvedLine1 />
                </Box>
            </Box>
        </Element >
        <Suspense fallback={Loading}>
            <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", gap: '70px' }}>
                <CultureComponent />
                <ValueComponent />
            </Container>
            <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", gap: '70px', mt: '100px', mb: '45px' }}>
                <Typography sx={styles.titleEnvironment}>
                    Asyst Environment
                </Typography>
            </Container>
            <Grid mb='100px'>
                <EnvironmentComponent />
            </Grid>
            <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", gap: '26px' }}>
                <DepartmentComponent />
            </Container>
            <Grid mt='100px'>
                <JobComponent />
            </Grid>
        </Suspense>
    </Box >
}