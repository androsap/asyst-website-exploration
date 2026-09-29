import Box from "@mui/material/Box"
import "./index.scss"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import NewsConst, { NewsTypeConst } from "consts/news-asyst.const"
import { Children, useState } from "react"
import { Link } from "react-router-dom"
import useMediaQuery from "@mui/material/useMediaQuery"
// import Grid from "@mui/material/Grid"

export default function NewsHomeComponent() {
    const matches = useMediaQuery('(max-width:1023px)');
    // const matches = useMediaQuery('(max-width:1023px)');
    const [active, setActive] = useState<string>(NewsTypeConst[0])

    return <>
        {!matches && <Box className="news">
            <Box display="flex" flexDirection="column" gap={1}>
                <Typography className="heading-small">News and Announcements</Typography>
                <Typography className="heading-large">Aero Systems Indonesia Insight</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" sx={{ mt: "18px" }}>
                <Box className="button-categories">
                    {Children.toArray(NewsTypeConst.map((type) =>
                        <Button variant={type === active ? "contained" : "text"} onClick={() => setActive(type)}>{type}</Button>
                    ))}
                </Box>
                <Link to="https://www.asyst.co.id/news">
                    <Typography className="discover">Discover more</Typography>
                </Link>
            </Box>
            <Box display="flex" justifyContent='space-between' flexDirection="row" gap="24px">
                {Array.from({ length: Math.max(4, NewsConst.filter(x => !active || active === 'All' ? true : x.type === active).length) }).map((_, index) => {
                    const newsItem = NewsConst.filter(x => !active || active === 'All' ? true : x.type === active)[index];

                    return (
                        <Box key={index} className="card-news" onClick={() => { window.location.href = 'https://www.asyst.co.id/news' }} sx={{ flex: '1 1 0' }}>
                            {newsItem ? (
                                <>
                                    <Box className="box-images" sx={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.14) 48.96%, rgba(0, 0, 0, 0.67) 100%), url(${newsItem.img})` }}>
                                        <img src={newsItem.img} className='images' alt="news"></img>
                                        <Box className="tags-label"><Typography variant="subtitle2">{newsItem.type}</Typography></Box>
                                    </Box>
                                    <Typography className="title-news" variant="subtitle2">{newsItem.title}</Typography>
                                    <Box display="flex" justifyContent="space-between" sx={{ mt: "19px" }}>
                                        <Typography className="footer-news">{newsItem.date}</Typography>
                                        <Typography className="footer-news">{newsItem.author}</Typography>
                                    </Box>
                                </>
                            ) : (
                                <Box className="box-images placeholder" sx={{ width: '100%', height: '200px' }} />
                            )}
                        </Box>
                    );
                })}
            </Box>
        </Box>}
        {matches && <Box className="news-mobile">
            <Typography className="heading-small">News and Announcements</Typography>
            <Typography className="heading">Aero Systems Indonesia Insight</Typography>
            <Box display="flex" justifyContent="space-between" sx={{ mt: "18px" }}>
                <Box className="button-categories">
                    {Children.toArray(NewsTypeConst.map((type) =>
                        <Button variant={type === active ? "contained" : "text"} onClick={() => setActive(type)}>{type}</Button>
                    ))}
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" gap="24px">
                {Children.toArray(NewsConst.filter(x => !active || active === 'All' ? true : x.type === active).map(({ type, img, title, date, author }) =>
                    <Box className="card-news" onClick={() => { window.location.href = 'https://www.asyst.co.id/news' }}>
                        <Box className="box-images" sx={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.14) 48.96%, rgba(0, 0, 0, 0.67) 100%), url(${img})` }}>
                            <img src={img} className='images'></img>
                            <Box className="tags-label"><Typography variant="subtitle2">{type}</Typography></Box>
                        </Box>
                        <Typography className="title-news" variant="subtitle2">{title}</Typography>
                        <Box display="flex" justifyContent="space-between" sx={{ mt: "30px" }}>
                            <Typography className="footer-news">{date}</Typography>
                            <Typography className="footer-news">{author}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>}
    </>
}