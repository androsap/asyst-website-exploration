import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface SectionHeadingProps {
    title: string;
    description?: string;
    align?: "center" | "left";
}

export default function SectionHeading({ title, description, align = "center" }: SectionHeadingProps) {
    return <Box className={`pv-heading pv-heading--${align}`}>
        <Typography variant="h2" className="pv-heading__title">{title}</Typography>
        {description && <Typography className="pv-heading__description">{description}</Typography>}
    </Box>
}
