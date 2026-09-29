import './index.scss';
import { Children, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ReactComponent as ArrowUpRight } from "assets/asyst/img/icon/navbar/arrow-up-right.svg";
import LinkMui from '@mui/material/Link';
import { styles } from './styled';
import { MainNavbar } from "models/company.model";
import CompanyHelper from 'helper/CompanyHelper';
import { MainNavbarImage } from "models/companyimage.model";
import CompanyImageHelper from 'helper/CompanyImageHelper';

export default function CompanyComponent() {
    const [data, setData] = useState<MainNavbar | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [dataImage, setDataImage] = useState<MainNavbarImage | null>(null)
    const [loadingImage, setLoadingImage] = useState<boolean>(true)

    useEffect(() => {
        getData()
        getDataImage()
    }, [])

    const getData = () => {
        setLoading(true)
        CompanyHelper.get(({ status, data }) => {
            setLoading(false)
            if (status) setData(data.data)
            // console.log('ini', data)
        })
    }

    const getDataImage = () => {
        setLoadingImage(true)
        CompanyImageHelper.get(({ status, data }) => {
            setLoading(false)
            if (status) setDataImage(data.data)
            // console.log('ini gambar', data)
        })
    }

    return <Box className="submenu-company">
        <Container maxWidth="xl" className='main-container'>
            {!loading && data && (
                <Grid container columns={3} className="content-container">
                    {data?.sub_navbar_1.map(item => (
                        <Grid item xs={1} display="flex" gap="33px">
                            <Box width="1000px">
                                <Grid container gap={.5}>
                                    <Typography variant="body1">{item.title_id}</Typography>
                                    <ArrowUpRight className="arrow-icon" />
                                </Grid>
                                <Grid container columns={1}>
                                    <Grid item xs={1}>
                                        <Box className="submenu">
                                            {Children.toArray(item.sub_navbar_2.map(subItem => (
                                                <Link to={subItem.link}>
                                                    <Typography variant="body2">{subItem.title_id}</Typography>
                                                </Link>
                                            )))}
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    ))}
                    {loadingImage && dataImage?.sub_navbar_1.map(item => (
                        <Grid item xs={1} display="flex" gap="33px">
                            <LinkMui sx={{
                                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.43) 42.19%, #000 100%), url(${item.image})`,
                                backgroundSize: "cover",
                                width: '325px',
                                height: '118px',
                                marginTop: '35px',
                                borderRadius: '12px',
                                backgroundPosition: 'center',
                            }} href={item.link} underline='none'>
                                <Box sx={styles.boxContentCareer}>
                                    <Typography sx={styles.titleCareer}>{item.title_id}</Typography>
                                    <Typography sx={styles.contentCareer}>{item.subtitle_id}</Typography>
                                </Box>
                            </LinkMui>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    </Box>
}
