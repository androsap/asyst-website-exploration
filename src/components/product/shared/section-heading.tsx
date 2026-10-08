import { Typography } from "components/ui/typography";

interface SectionHeadingProps {
    title: string;
    description?: string;
    align?: "center" | "left";
}

export default function SectionHeading({ title, description, align = "center" }: SectionHeadingProps) {
    return <div className={`pv-heading pv-heading--${align}`}>
        <Typography variant="h2" className="pv-heading__title">{title}</Typography>
        {description && <Typography className="pv-heading__description">{description}</Typography>}
    </div>
}
