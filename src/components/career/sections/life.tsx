import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { CareerLifeConst } from "consts/career.const";
import SectionHeading from "components/product/shared/section-heading";

/** Galeri: 2 foto di baris pertama (kiri lebih lebar), 3 foto di baris kedua. */
export default function LifeSection() {
    const { title, description, images } = CareerLifeConst;

    return <Box component="section" className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={title} description={description} />
            <Box className="cr-gallery">
                {images.map((image, index) => (
                    <Box key={index} className="cr-gallery__item" sx={{ backgroundImage: `url(${image})` }} role="img" aria-label={`${title} ${index + 1}`} />
                ))}
            </Box>
        </Container>
    </Box>
}
