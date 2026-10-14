import { Typography } from "components/ui/typography";
import SectionHeading from "components/product/shared/section-heading";

interface SplitHeadingProps {
    title: string;
    description?: string;
    split: boolean;
}

export default function SplitHeading({ title, description, split }: SplitHeadingProps) {
    if (!split) return <SectionHeading title={title} description={description} />;

    return <div className="sp-split-heading">
        <Typography variant="h2" className="pv-heading__title">{title}</Typography>
        {description && <Typography className="sp-split-heading__description">{description}</Typography>}
    </div>
}
