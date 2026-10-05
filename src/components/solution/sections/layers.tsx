import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { SolutionLayersConst } from "consts/solution.const";
import SectionHeading from "components/product/shared/section-heading";
import { SOLUTION_SECTION_IDS } from "../shared/section-ids";

export default function LayersSection() {
    return <Box component="section" id={SOLUTION_SECTION_IDS.layers} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            <SectionHeading title={SolutionLayersConst.title} description={SolutionLayersConst.description} />
            <Box className="sv-layers">
                {SolutionLayersConst.items.map(({ tag, title, description, link, image }) => (
                    <Box key={title} className="sv-layer">
                        <Box className="sv-layer__content">
                            <span className="sv-tag">{tag}</span>
                            <Typography className="sv-layer__title">{title}</Typography>
                            <Typography className="sv-layer__description">{description}</Typography>
                            <Link to={link.to} className="sv-layer__link">{link.label}</Link>
                        </Box>
                        <Box className="sv-layer__image" sx={{ backgroundImage: `url(${image})` }} />
                    </Box>
                ))}
            </Box>
        </Container>
    </Box>
}
