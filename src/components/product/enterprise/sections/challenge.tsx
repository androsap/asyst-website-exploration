import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { ChallengeBlock } from "consts/product-detail/enterprise.types";
import SectionHeading from "../../shared/section-heading";

interface ChallengeSectionProps {
    id?: string;
    content: ChallengeBlock;
}

export default function ChallengeSection({ id, content }: ChallengeSectionProps) {
    const { title, paragraphs, lead, items } = content;
    const columns = items.length % 3 === 0 ? 3 : 4;

    return <section id={id} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            <div className="pe-panel">
                <div className="pe-panel__intro">
                    <SectionHeading title={title} align="left" />
                    {paragraphs.map(text => <Typography key={text} className="pv-paragraph">{text}</Typography>)}
                    {lead && <Typography className="pv-paragraph pe-panel__lead">{lead}</Typography>}
                </div>
                <ul className={`pe-matrix pe-matrix--${columns}`}>
                    {items.map(({ icon: Icon, title, description }) => (
                        <li key={title} className="pe-matrix__item">
                            {Icon && <span className="pe-icon-tile pe-icon-tile--outlined"><Icon /></span>}
                            <Typography component="h3" className="pe-matrix__title">{title}</Typography>
                            <Typography className="pe-matrix__description">{description}</Typography>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    </section>
}
