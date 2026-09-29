import { MainLayoutSharedProps } from 'shared/layout/main-layout';
import Box from '@mui/material/Box';
import { Suspense, lazy } from 'react';
import Container from '@mui/material/Container';
import { Element } from 'react-scroll';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import ProductComponent from './components/products';
import GetinTouchComponent from './components/getin';
import OverViewComponent from './components/overview';
import BusinessComponent from './components/business';
import SolutionsComponent from './components/solutions';
import { styles } from './styled';
import './index.scss';

import { ReactComponent as BackCircleIcon } from "assets/asyst/img/icon/industry/back-circle.svg";
import { ReactComponent as LinkCircleIcon } from "assets/asyst/img/icon/industry/link-orange-circle.svg";

const ContentComponent = lazy(() => import("./content"));

const Loading = <Box width="100%" height="150px" display="flex" alignItems="center" justifyContent="center" position="relative">
    <CircularProgress color="inherit" size={40} />
</Box>

export default function IndustryDetailComponent({ }: MainLayoutSharedProps) {
    return <Box className="container-industry-detail">
        <Element name="industry-detail">
            <Box sx={styles.mainBox}>
                <Box component="image" sx={styles.overlayBox} />
                <div style={{ display: 'flex', flexDirection: 'column', }}>
                    <Box sx={styles.backNavContainer}>
                        <BackCircleIcon />
                        <Typography sx={styles.backNavContainer.text}>
                            Airline
                        </Typography>
                    </Box>
                    <Box sx={styles.headerBox}>
                        <div>
                            <Typography sx={styles.headerTitle}>
                                Aero Systems Indonesia for Airlines
                            </Typography>
                            <Typography sx={styles.headerSubtitle}>
                                The right balance of innovative technology and unrivalled understanding of industry, to develop and manage integrated solutions and services
                            </Typography>
                        </div>
                        <LinkCircleIcon style={styles.headerLinkIcon} />
                    </Box>
                </div>
            </Box>
        </Element>
        <Suspense fallback={Loading}>
            <Container maxWidth="xl" sx={{ display: "flex", gap: "53px", flexDirection: "column", paddingTop: '0px' }}>
                <OverViewComponent />
                <BusinessComponent />
                <SolutionsComponent />
                <ProductComponent />
                <ContentComponent />
                <GetinTouchComponent />
            </Container>
        </Suspense>
    </Box>
};
