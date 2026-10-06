import { useState, type CSSProperties } from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ProductCategoryConst, ProductsConst } from "consts/home.const";
import SectionHeading from "./section-heading";

export default function ProductsSection() {
    const [active, setActive] = useState<typeof ProductCategoryConst[number]>("All Products");
    const items = ProductsConst.items.filter(x => active === "All Products" || x.category === active);

    return <Box component="section" className="home-section">
        <Container maxWidth="xl">
            <SectionHeading title={ProductsConst.title} description={ProductsConst.description} />
            <Box className="home-tabs" role="tablist">
                {ProductCategoryConst.map(category => (
                    <ButtonBase
                        key={category}
                        role="tab"
                        aria-selected={category === active}
                        className={`home-tabs__item ${category === active ? "active" : ""}`}
                        onClick={() => setActive(category)}
                    >
                        {category}
                    </ButtonBase>
                ))}
            </Box>
            {/* key = kategori aktif: grid di-remount tiap ganti tab supaya animasi masuk kartu diputar ulang */}
            <Box key={active} className="home-products">
                {items.map(({ title, description, image, link }, i) => (
                    <Link key={title} to={link} className="home-product" style={{ "--i": i } as CSSProperties}>
                        <Typography className="home-product__title">{title}</Typography>
                        <Typography className="home-product__description">{description}</Typography>
                        <Box className="home-product__preview">
                            <Box className="home-product__frame">
                                <Box className="home-product__window-bar"><span /><span /></Box>
                                <img src={image} alt={title} loading="lazy" />
                            </Box>
                        </Box>
                    </Link>
                ))}
            </Box>
        </Container>
    </Box>
}
