import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface SectionHeadingProps {
    title: string;
    description?: string;
}

export default function SectionHeading({ title, description }: SectionHeadingProps) {
    return <Box className="home-heading">
        <Typography variant="h2" className="home-heading__title">{title}</Typography>
        {description && <Typography className="home-heading__description">{description}</Typography>}
    </Box>
}
