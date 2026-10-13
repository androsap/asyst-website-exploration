import { Container } from "components/ui/container";
import { ExpertiseBlock } from "consts/product-detail/enterprise.types";
import SectionHeading from "../../shared/section-heading";
import CardGrid from "./card-grid";

interface ExpertiseSectionProps {
    id?: string;
    content: ExpertiseBlock;
}

export default function ExpertiseSection({ id, content }: ExpertiseSectionProps) {
    return <section id={id} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            <SectionHeading title={content.title} description={content.description} />
            <CardGrid items={content.items} />
        </Container>
    </section>
}
