import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Skeleton } from "components/ui/skeleton";
import { Typography } from "components/ui/typography";
import { CalendarTodayOutlinedIcon, ArrowForwardRoundedIcon } from "components/ui/icons";
import NewsModel from "models/news.model";
import { useLanguage, useT } from "shared/i18n";
import { formatNewsDate, newsDetailPath, newsPlainText } from "./utils";

interface NewsCardProps {
    item: NewsModel;
}

export default function NewsCard({ item }: NewsCardProps) {
    const { slug, title, image, content, created_date } = item;
    const t = useT();
    const language = useLanguage();
    const link = newsDetailPath(slug);
    // API belum punya field ringkasan; pakai potongan awal isi berita
    const excerpt = useMemo(() => newsPlainText(content), [content]);

    return <article className="news-card">
        <Link to={link} className="news-card__media" tabIndex={-1} aria-hidden>
            <img src={image} alt="" loading="lazy" />
        </Link>
        <div className="news-card__body">
            <Link to={link} className="news-card__title">{title}</Link>
            <Typography className="news-card__excerpt">{excerpt}</Typography>
            <div className="news-card__footer">
                <span className="news-card__date">
                    <CalendarTodayOutlinedIcon />
                    {formatNewsDate(created_date, language)}
                </span>
                <Link to={link} className="news-card__read">
                    {t("Read the post", "Baca selengkapnya")} <ArrowForwardRoundedIcon />
                </Link>
            </div>
        </div>
    </article>
}

export function NewsCardSkeleton() {
    return <div className="news-card" aria-hidden>
        <Skeleton variant="rectangular" className="news-card__media" />
        <div className="news-card__body">
            <Skeleton variant="text" height={32} width="85%" />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="70%" />
            <Skeleton variant="text" width="50%" className="mt-8" />
        </div>
    </div>
}
