import { useRef, useState, type CSSProperties } from "react";
import { ButtonBase } from "components/ui/button-base";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { Link } from "react-router-dom";
import { ProductCategoryConst, ProductCategoryTermsConst, ProductsConst } from "consts/home.const";
import { useLocalized, useTerms } from "shared/i18n";
import SectionHeading from "./section-heading";
import useNearViewport from "./use-near-viewport";

export default function ProductsSection() {
    const [active, setActive] = useState<typeof ProductCategoryConst[number]>("All Products");
    const products = useLocalized(ProductsConst);
    const categoryLabel = useTerms(ProductCategoryTermsConst);
    const items = products.items.filter(x => active === "All Products" || x.category === active);
    // `loading="lazy"` bawaan browser memuat gambar dari jarak ~1250-2500px; ditunda sampai section dekat viewport
    const sectionRef = useRef<HTMLElement>(null);
    const nearViewport = useNearViewport(sectionRef);

    return <section ref={sectionRef} className="home-section">
        <Container maxWidth="xl">
            <SectionHeading title={products.title} description={products.description} />
            <div className="home-tabs" role="tablist">
                {ProductCategoryConst.map(category => (
                    <ButtonBase
                        key={category}
                        role="tab"
                        aria-selected={category === active}
                        className={`home-tabs__item ${category === active ? "active" : ""}`}
                        onClick={() => setActive(category)}
                    >
                        {categoryLabel(category)}
                    </ButtonBase>
                ))}
            </div>
            {/* key = kategori aktif: grid di-remount tiap ganti tab supaya animasi masuk kartu diputar ulang */}
            <div key={active} className="home-products">
                {items.map(({ title, description, image, link }, i) => (
                    <Link key={i} to={link} className="home-product" style={{ "--i": i } as CSSProperties}>
                        <Typography className="home-product__title">{title}</Typography>
                        <Typography className="home-product__description">{description}</Typography>
                        <div className="home-product__preview">
                            <div className="home-product__frame">
                                <div className="home-product__window-bar"><span /><span /></div>
                                <img src={nearViewport ? image : undefined} alt={title} loading="lazy" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Container>
    </section>
}
