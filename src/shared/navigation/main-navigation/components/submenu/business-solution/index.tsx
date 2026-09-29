import './index.scss';
import { Children, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ReactComponent as ArrowUpRight } from "assets/img/icon/navbar/arrow-up-right.svg";
import { MainNavbar } from "models/solution.model";
import SolutionHelper from 'helper/SolutionHelper';

export default function BusinessComponent() {
    const [data, setData] = useState<MainNavbar | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        setLoading(true)
        SolutionHelper.get(({ status, data }) => {
            setLoading(false)
            if (status) setData(data.data)
            console.log('ini', data)
        })
    }

    return <Box className="submenu-business">
        <Container maxWidth="xl">
            {!loading && data && (
                <Grid container spacing={0.5}>
                    {data?.sub_navbar_1.map(item => (
                        <Grid item key={item.title_id} xs={8} sm={6} md={6} lg={4}>
                            <Grid container gap={1.5}>
                                <Grid container item xs={12} gap={0.5}>
                                    <Grid container item gap={0.5} xs={12}>
                                        <Grid container item>
                                            <Typography variant="body1"><Link to="https://www.asyst.co.id/our-services/category/infrastructure-and-managed-services">{item.title_id}</Link></Typography>
                                            <ArrowUpRight className="arrow-icon" />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box className="submenu">
                                            {Children.toArray(item.sub_navbar_2.map(subItem => (
                                                <Link to={subItem.link}><Typography variant="body2">{subItem.title_id}</Typography>
                                                    {Children.toArray(subItem.sub_navbar_3.map(element => (
                                                        <Typography variant="body1">{element.title_id}</Typography>
                                                    )))}
                                                </Link>
                                            )))}
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>

            )}
        </Container>
    </Box >
}
