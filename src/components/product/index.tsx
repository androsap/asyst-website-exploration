import Grid from "@mui/material/Grid";
import { lazy, Suspense } from 'react';
import { MainLayoutSharedProps } from "shared/layout/main-layout";
import Container from '@mui/material/Container';
import './index.scss';
import { Element } from 'react-scroll';
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { styles } from './styled';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import subBackground from 'assets/img/background/product-page/background-sub.png';
import Anteros from 'assets/img/icon/page-product/Anteros.png';
import Auxoshift from 'assets/img/icon/page-product/Auxoshift.png';
import Athena from 'assets/img/icon/page-product/Athena.png';
import Hermes from 'assets/img/icon/page-product/Hermes.png';
import Chronus from 'assets/img/icon/page-product/Chronus.png';
import Elea from 'assets/img/icon/page-product/Elea.png';
import Apollo from 'assets/img/icon/page-product/Apollo.png';
import ApolloComponent from "./components/apollo";
import AthenaComponent from "./components/athena";
import AnterosComponent from "./components/anteros";
import AuxoshiftComponent from "./components/Auxoshift";
import ChronusComponent from "./components/chronus";
import EleaComponent from "./components/Elea";
import HermesComponent from "./components/hermes";
import NewsComponent from "./components/news";

const Loading = <Box width="100%" height="150px" display="flex" alignItems="center" justifyContent="center" position="relative">
    <CircularProgress color="inherit" size={40} />
</Box>

const styled = {
    paperContainerSatu: {
        backgroundImage: `url(${subBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '20px',
        width: '1056px',
        height: '490px',
    },

}

const TestimonialsComponent = lazy(() => import("./components/testimonials"));

export default function ProductComponent({ }: MainLayoutSharedProps) {

    return <Box>
        <Element name="home">
            <Box sx={styles.mainBox}>
                <Box component="image" />
                <div className="head-product" style={{ display: 'flex', flexDirection: 'column', padding: '150px', width: '200%', height: '100%', alignItems: 'center', gap: '65px' }}>
                    <Grid sx={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center', paddingTop: '20px' }}>
                        <Typography variant="h1">Aero Systems Indonesia Products</Typography>
                        <Typography variant="h2">a combination of products which gives you better to running your business, keep your customer and to open the opportunity of vision</Typography>
                    </Grid>
                    <Paper className="gambar-sub" sx={{ boxShadow: '0' }} style={styled.paperContainerSatu}>
                        <Grid sx={{ padding: '28px', paddingTop: '330px', display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '17px' }}>
                            <Typography variant="h1">Apollo</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Typography variant="h2">Apollo Soft ERP enables a business owner to make better decisions by providing an integrated business management system</Typography>
                                <Button sx={{ width: '200px' }} variant="outlined">More detail</Button>
                            </Box>
                            <Box className="component-icons" sx={{ display: 'flex', flexDirection: 'row', gap: '75px', alignItems:'center', paddingTop:'20px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
                                    <img className='img-products' src={Apollo} alt="" />
                                    <Typography variant="h1" >Apollo</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
                                    <img className='img-products' src={Athena} alt="" />
                                    <Typography variant="h1" >Athena</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
                                    <img className='img-products' src={Anteros} alt="" />
                                    <Typography variant="h1" >Anteros</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
                                    <img className='img-products' src={Auxoshift} alt="" />
                                    <Typography variant="h1" >Auxoshift</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
                                    <img className='img-products' src={Chronus} alt="" />
                                    <Typography variant="h1" >Chronus</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
                                    <img className='img-products' src={Elea} alt="" />
                                    <Typography variant="h1" >Elea</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
                                    <img className='img-products' src={Hermes} alt="" />
                                    <Typography variant="h1" >Hermes</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Paper>
                </div>
            </Box>
        </Element>
        {
            // !focus && 
            <Suspense fallback={Loading}>
                <Container maxWidth="xl" sx={{ display: "flex", gap: "85px", flexDirection: "column", padding:"400px" }}>
                    <ApolloComponent />
                    <AthenaComponent />
                    <AnterosComponent />
                    <AuxoshiftComponent />
                    <ChronusComponent />
                    <EleaComponent />
                    <HermesComponent />
                    <TestimonialsComponent />
                    <NewsComponent />
                </Container>
            </Suspense>
        }
    </Box>
}