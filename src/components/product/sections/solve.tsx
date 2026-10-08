import { useEffect, useState } from "react";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { Link } from "react-router-dom";
import { ProductSolveConst } from "consts/product.const";
import { useLocalized } from "shared/i18n";
import SectionHeading from "../shared/section-heading";
import TabBar from "../shared/tab-bar";

export default function SolveSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const solve = useLocalized(ProductSolveConst);
    const active = solve.items[activeIndex];

    // Preload gambar semua tab supaya saat berpindah gambar tidak muncul terlambat
    useEffect(() => {
        solve.items.forEach(({ image }) => { new Image().src = image; });
    }, [solve.items]);

    return <section className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={solve.title} description={solve.description} align="left" />
            <div className="pv-solve">
                <TabBar
                    variant="segment"
                    labels={solve.items.map(x => x.label)}
                    active={activeIndex}
                    onChange={setActiveIndex}
                />
                <div key={activeIndex} className="pv-solve__panel" role="tabpanel">
                    <div>
                        <Typography className="pv-solve__title">{active.title}</Typography>
                        <Typography className="pv-solve__description">{active.description}</Typography>
                        <ul className="pv-list">
                            {active.points.map(point => <li key={point}>{point}</li>)}
                        </ul>
                        <Typography className="pv-solve__subtitle">{active.subtitle}</Typography>
                        <Typography className="pv-solve__description" dangerouslySetInnerHTML={{ __html: active.subDescription }} />
                        <div className="pv-chips">
                            {active.links.map(({ label, link }) => <Link key={label} to={link} className="pv-chip">{label}</Link>)}
                        </div>
                    </div>
                    <div className="pv-media">
                        <img src={active.image} alt={active.title} />
                    </div>
                </div>
            </div>
        </Container>
    </section>
}
