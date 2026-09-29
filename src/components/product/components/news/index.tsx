import Box from "@mui/material/Box"
import "./index.scss"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import NewsConst, { NewsTypeConst } from "consts/news-asyst.const"
import { Children, useEffect, useState } from "react"
import Grid from "@mui/material/Grid"

export default function NewsComponent() {
    const [active, setActive] = useState<string>(NewsTypeConst[0])

    useEffect(() => {
        setActive('All')
    }, []);

    return <>
        <Grid sx={{display:'flex',flexDirection:'column',gap:'15px'}}>
            <Box sx={{display:'flex',flexDirection:'row', gap:'750px'}}>
                <Typography className="heading-large">Product News</Typography>

                <Button variant="text" >Discover more news</Button>
            </Box>
            <Box display="flex" flexDirection="row" gap="24px">
                {Children.toArray(NewsConst.filter(x => !active || active === 'All' ? true : x.type === active).map(({ type, img, title, date, author }) =>
                    <Box className="card-news">
                        <Box className="images" sx={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.14) 48.96%, rgba(0, 0, 0, 0.67) 100%), url(${img})` }}>
                            <Box className="tags-label"><Typography variant="subtitle2">{type}</Typography></Box>
                        </Box>
                        <Typography className="title-news" variant="subtitle2">{title}</Typography>
                        <Box display="flex" justifyContent="space-between" sx={{ mt: "19px" }}>
                            <Typography className="footer-news">{date}</Typography>
                            <Typography className="footer-news">{author}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Grid>
    </>
}