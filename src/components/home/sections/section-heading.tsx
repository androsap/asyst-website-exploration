import { Typography } from "components/ui/typography";

interface SectionHeadingProps {
    title: string;
    description?: string;
}

export default function SectionHeading({ title, description }: SectionHeadingProps) {
    return <div className="home-heading">
        <Typography variant="h2" className="home-heading__title">{title}</Typography>
        {description && <Typography className="home-heading__description">{description}</Typography>}
    </div>
}
