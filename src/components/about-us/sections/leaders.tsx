import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { LeadersConst } from "consts/about-us.const";
import SectionHeading from "components/home/sections/section-heading";

export default function LeadersSection() {
    return <Box component="section" className="home-section">
        <Container maxWidth="xl">
            <SectionHeading title={LeadersConst.title} description={LeadersConst.description} />
            <Box className="about-leaders">
                {LeadersConst.items.map(({ name, position, image, linkedin }) => (
                    <Box key={name} className="about-leader">
                        <Box className="about-leader__photo">
                            <img src={image} alt={name} loading="lazy" />
                        </Box>
                        <Box className="about-leader__info">
                            <Typography className="about-leader__name">{name}</Typography>
                            <Typography className="about-leader__position">{position}</Typography>
                            {linkedin
                                ? <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn ${name}`} className="about-leader__linkedin"><LinkedInIcon /></a>
                                : <span className="about-leader__linkedin"><LinkedInIcon /></span>
                            }
                        </Box>
                    </Box>
                ))}
            </Box>
        </Container>
    </Box>
}
