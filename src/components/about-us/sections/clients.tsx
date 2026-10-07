import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ClientsConst } from "consts/about-us.const";
import { useLocalized } from "shared/i18n";

export default function ClientsSection() {
    const clients = useLocalized(ClientsConst);

    return <Box component="section" className="home-section">
        <Container maxWidth="xl">
            <Box className="about-left-heading">
                <Typography variant="h2" className="home-heading__title">{clients.title}</Typography>
                <Typography className="about-left-heading__description">{clients.description}</Typography>
            </Box>
            <Box className="about-clients__marquee">
                {/* Track berisi 2 salinan logo agar animasi -50% bisa looping tanpa jeda */}
                <Box className="about-clients__track">
                    {[0, 1].map((copy) => clients.items.map(({ name, logo }) => (
                        <Box key={`${copy}-${name}`} className="about-clients__logo" aria-hidden={copy === 1}>
                            <img src={logo} alt={copy === 0 ? name : ""} loading="lazy" />
                        </Box>
                    )))}
                </Box>
            </Box>
        </Container>
    </Box>
}
