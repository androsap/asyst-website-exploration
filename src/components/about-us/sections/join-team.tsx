import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { JoinTeamConst } from "consts/about-us.const";

export default function JoinTeamSection() {
    const { title, description, link, images } = JoinTeamConst;

    return <Box component="section" className="home-section home-section--last">
        <Container maxWidth="xl">
            <Box className="about-join">
                {images.map(image => (
                    <Box key={image} className="about-join__image" sx={{ backgroundImage: `url(${image})` }} />
                ))}
                <Box className="about-join__card">
                    <Typography variant="h2" className="about-join__title">{title}</Typography>
                    {description.map(text => (
                        <Typography key={text} className="about-join__description">{text}</Typography>
                    ))}
                    <Link to={link.to} className="home-link about-join__link">{link.label}</Link>
                </Box>
            </Box>
        </Container>
    </Box>
}
