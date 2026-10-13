import { Typography } from "components/ui/typography";
import { CardItem } from "consts/product-detail/enterprise.types";

interface CardGridProps {
    items: CardItem[];
}

export default function CardGrid({ items }: CardGridProps) {
    const columns = items.length % 3 === 0 && items.length > 3 ? 3 : Math.min(items.length, 5);

    return <ul className={`pe-cards pe-cards--${columns}`}>
        {items.map(({ tag, icon: Icon, title, description }) => (
            <li key={title} className="pe-card">
                {tag && <span className="pe-tag">{tag}</span>}
                {Icon && <span className="pe-icon-tile"><Icon /></span>}
                <Typography component="h3" className="pe-card__title">{title}</Typography>
                <Typography className="pe-card__description">{description}</Typography>
            </li>
        ))}
    </ul>
}
