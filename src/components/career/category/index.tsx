import './index.scss';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { MainLayoutSharedProps } from "shared/layout/main-layout";
import { Element } from 'react-scroll';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import { styles } from './styled';
import { Link } from 'react-router-dom';
import { ReactComponent as BackCircleIcon } from 'assets/asyst/img/icon/industry/back-circle.svg';
import { Suspense } from "react";
import TeamComponent from './components/team';
import DescriptionTeamComponent from './components/description-team';
import CircularProgress from "@mui/material/CircularProgress";
import CurrentJobComponent from './components/current-job';
import { ReactComponent as CurvedLine1 } from 'assets/asyst/img/background/career/curved-line.svg';

const Loading = <Box width="100%" height="150px" display="flex" alignItems="center" justifyContent="center" position="relative">
    <CircularProgress color="inherit" size={40} />
</Box>

export default function CareerCategoryComponent({ }: MainLayoutSharedProps) {

    return <Box>
        <Element name="container-career-category">
            <Box sx={styles.mainBox}>
                <Container maxWidth="xl">
                    <Box sx={styles.backNavContainer}>
                        <Link to="https://www.asyst.co.id/career/">
                            <BackCircleIcon />
                        </Link>
                        <Typography sx={styles.backNavContainer.text}>
                            Company
                        </Typography>
                        <Typography sx={styles.backNavContainer.title}>
                            Career
                        </Typography>
                    </Box>
                    <Box display='flex' flexDirection='column' gap='50px' padding='70px'>
                        <Typography sx={styles.title}>
                            Diverse and dynamic asyst<br />design team
                        </Typography>
                        <Typography sx={styles.description}>
                            We firmly believe that our company's success depends on its people, and we're proud and lucky to have a team that loves to work together, shares insights and supports, and celebrates each other's victories
                        </Typography>
                    </Box>
                </Container>

                <Box sx={styles.curvedLineWrapper}>
                    <CurvedLine1 />
                </Box>
            </Box>
        </Element >
        <Suspense fallback={Loading}>
            <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", gap: '70px' }}>
                <DescriptionTeamComponent />
                <CurrentJobComponent />
            </Container>
            <Grid mt='100px' mb='100px'>
                <TeamComponent />
            </Grid>
        </Suspense>
    </Box>
}