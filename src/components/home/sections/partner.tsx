import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { PartnerConst } from "consts/home.const";
import SectionHeading from "./section-heading";

export default function PartnerSection() {
    return <Box component="section" className="home-section">
        <Container maxWidth="xl">
            <SectionHeading title={PartnerConst.title} />
            <Box className="home-partner">
                {PartnerConst.items.map(({ title, description, image }) => (
                    <Box key={title} className="home-partner__card" sx={{ backgroundImage: `url(${image})` }}>
                        <Box className="home-partner__caption">
                            <Typography className="home-partner__title">{title}</Typography>
                            <Typography className="home-partner__description">{description}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Container>
    </Box>
}
