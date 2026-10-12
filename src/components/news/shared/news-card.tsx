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

export function NewsCardSkeleton({ className }: { className?: string }) {
    return <div className={`news-card news-card--skeleton ${className ?? ""}`} aria-hidden>
        <Skeleton variant="rectangular" className="news-card__media" />
        <div className="news-card__body">
            <Skeleton variant="text" height={34} width="90%" />
            <Skeleton variant="text" height={34} width="60%" />
            <div className="news-card__excerpt-skeleton">
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="80%" />
            </div>
            <div className="news-card__footer">
                <span className="news-card__date">
                    <Skeleton variant="rounded" width={18} height={18} />
                    <Skeleton variant="rounded" width={120} height={14} />
                </span>
                <Skeleton variant="rounded" width={112} height={20} />
            </div>
        </div>
    </div>
}
