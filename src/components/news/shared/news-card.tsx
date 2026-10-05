import { useMemo } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import NewsModel from "models/news.model";
import { formatNewsDate, newsDetailPath, newsPlainText } from "./utils";

interface NewsCardProps {
    item: NewsModel;
}

export default function NewsCard({ item }: NewsCardProps) {
    const { slug, title, image, content, created_date } = item;
    const link = newsDetailPath(slug);
    // API belum punya field ringkasan; pakai potongan awal isi berita
    const excerpt = useMemo(() => newsPlainText(content), [content]);

    return <Box component="article" className="news-card">
        <Link to={link} className="news-card__media" tabIndex={-1} aria-hidden>
            <img src={image} alt="" loading="lazy" />
        </Link>
        <Box className="news-card__body">
            <Link to={link} className="news-card__title">{title}</Link>
            <Typography className="news-card__excerpt">{excerpt}</Typography>
            <Box className="news-card__footer">
                <span className="news-card__date">
                    <CalendarTodayOutlinedIcon />
                    {formatNewsDate(created_date)}
                </span>
                <Link to={link} className="news-card__read">
                    Read the post <ArrowForwardRoundedIcon />
                </Link>
            </Box>
        </Box>
    </Box>
}

export function NewsCardSkeleton() {
    return <Box className="news-card" aria-hidden>
        <Skeleton variant="rectangular" className="news-card__media" />
        <Box className="news-card__body">
            <Skeleton variant="text" height={32} width="85%" />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="70%" />
            <Skeleton variant="text" width="50%" sx={{ mt: 2 }} />
        </Box>
    </Box>
}
