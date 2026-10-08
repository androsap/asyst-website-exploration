import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { Link } from "react-router-dom";
import { CaseStudyFeaturedConst, CaseStudyIntroConst, caseStudyLink } from "consts/case-study.const";
import { useLocalized } from "shared/i18n";
import SectionHeading from "components/product/shared/section-heading";

/** Intro "Case Study" + kartu Featured Case Study. */
export default function FeaturedSection() {
    const { title, description, slug, client, caseTitle, summary, tags, image, details, button } = useLocalized(CaseStudyFeaturedConst);
    const intro = useLocalized(CaseStudyIntroConst);

    return <section className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading align="left" title={intro.title} description={intro.description} />
            <div className="cs-featured">
                <SectionHeading align="left" title={title} description={description} />
                <div className="cs-featured__card">
                    <div className="cs-featured__image" style={{ backgroundImage: `url(${image})` }} />
                    <div>
                        <Typography className="cs-eyebrow cs-eyebrow--dark">{client}</Typography>
                        <Typography className="cs-featured__title">{caseTitle}</Typography>
                        <Typography className="cs-featured__text">{summary}</Typography>
                        <div className="cs-tags cs-tags--outline">
                            {tags.map(tag => <span key={tag} className="cs-tag">{tag}</span>)}
                        </div>
                        {details.map(({ label, value }, index) => (
                            <div key={index} className="cs-featured__detail">
                                <Typography className="cs-featured__label">{label}</Typography>
                                <Typography className="cs-featured__text">{value}</Typography>
                            </div>
                        ))}
                        <Button asChild className="pv-btn pv-btn--outline cs-btn--small"><Link to={caseStudyLink(slug)}>{button}</Link></Button>
                    </div>
                </div>
            </div>
        </Container>
    </section>
}
