import './index.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ReactComponent as ArrowUpRight } from "assets/img/icon/navbar/arrow-up-right.svg";
import { MainNavbar, SubNavbar2 } from "models/service.model";
import ServiceHelper from 'helper/ServiceHelper';

export default function ServicesComponent() {
    const [data, setData] = useState<MainNavbar | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        setLoading(true)
        ServiceHelper.get(({ status, data }) => {
            setLoading(false)
            if (status) setData(data.data)
        })
    }

    const navigate = useNavigate()

    const handleSubitemClick = (link: string, title: string) => {
        if (title.toLowerCase() === 'commercial solutions') {
            navigate(link)
        } else {
            window.location.href = link;
        }
    }

    // Function to split array into chunks based on sub_navbar_3 length criteria
    const chunkSubNavbar = (subNavBar2: SubNavbar2[], maxCount: number) => {
        const chunks = [];
        let currentChunk: SubNavbar2[] = [];
        let currentCount = 0;

        subNavBar2.forEach(item => {
            const itemCount = item.sub_navbar_3.length;
            if (currentCount + itemCount > maxCount && currentChunk.length > 0) {
                chunks.push(currentChunk);
                currentChunk = [];
                currentCount = 0;
            }
            currentChunk.push(item);
            currentCount += itemCount;
        });

        if (currentChunk.length > 0) {
            chunks.push(currentChunk);
        }

        return chunks;
    };

    const calculateGridSpan = (length: number) => {
        if (length <= 2) return 3;
        if (length <= 4) return 6;
        if (length <= 6) return 9;
        return 9;
    };

    return <Box className="submenu-services">
        <Container maxWidth="xl" >
            {!loading && data && (
                <Grid container spacing={1}>
                    {data?.sub_navbar_1.map(item => {
                        const subNavbarChunks = item.sub_navbar_2.some(subItem => subItem.sub_navbar_3.length > 0)
                            ? chunkSubNavbar(item.sub_navbar_2, 9)
                            : [item.sub_navbar_2]

                        const gridSpan = item.sub_navbar_2.some(subItem => subItem.sub_navbar_3.length > 0)
                            ? calculateGridSpan(item.sub_navbar_2.length)
                            : 3

                        return (
                            <Grid className="first-grid" item key={item.title_id} xs={12} sm={6} md={4} lg={gridSpan}>
                                <Grid container item xs={12} gap={0.5}>
                                    <Button
                                        sx={{ padding: "0px" }}
                                        className='category-industry'
                                        onClick={() => window.location.assign("https://www.asyst.co.id/our-products")}
                                    >
                                        <Typography sx={{ color: "#002561" }} variant="body1">{item.title_id}</Typography>
                                    </Button>
                                    <ArrowUpRight className="arrow-icon" />
                                </Grid>
                                <Grid container columns={subNavbarChunks.length}>
                                    {subNavbarChunks.map((chunk, chunkIndex) => (
                                        <Grid item xs={1} key={chunkIndex}>
                                            <Box className="submenu">
                                                {chunk.map(subItem => (
                                                    <Box key={subItem.title_id} onClick={() => handleSubitemClick(subItem.link, subItem.title_id)} className="submenu-item">
                                                        <Typography variant="body2">{subItem.title_id}</Typography>
                                                        {subItem.sub_navbar_3.map(element => (
                                                            <Typography variant="body1" key={element.title_id}>{element.title_id}</Typography>
                                                        ))}
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        );
                    })}
                </Grid>
            )}

        </Container>
    </Box >
}