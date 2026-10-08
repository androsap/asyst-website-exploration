import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { Link } from "react-router-dom";
import { SolutionLayersConst } from "consts/solution.const";
import SectionHeading from "components/product/shared/section-heading";
import { SOLUTION_SECTION_IDS } from "../shared/section-ids";
import { useLocalized } from "shared/i18n";

export default function LayersSection() {
    const layers = useLocalized(SolutionLayersConst);

    return <section id={SOLUTION_SECTION_IDS.layers} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            <SectionHeading title={layers.title} description={layers.description} />
            <div className="sv-layers">
                {layers.items.map(({ tag, title, description, link, image }, index) => (
                    <div key={index} className="sv-layer">
                        <div className="sv-layer__content">
                            <span className="sv-tag">{tag}</span>
                            <Typography className="sv-layer__title">{title}</Typography>
                            <Typography className="sv-layer__description">{description}</Typography>
                            <Link to={link.to} className="sv-layer__link">{link.label}</Link>
                        </div>
                        <div className="sv-layer__image" style={{ backgroundImage: `url(${image})` }} />
                    </div>
                ))}
            </div>
        </Container>
    </section>
}
