import { Typography } from "components/ui/typography";
import { Link } from "react-router-dom";
import { CaseStudyItem, caseStudyLink, CaseStudyTermsConst, hasCaseStudyDetail } from "consts/case-study.const";
import { useTerms } from "shared/i18n";

interface CaseCardProps {
    item: CaseStudyItem;
}

/** Kartu case study (grid explorer & related cases). Tanpa halaman detail = tidak bisa diklik. */
export default function CaseCard({ item }: CaseCardProps) {
    const { slug, title, image, tags } = item;
    const term = useTerms(CaseStudyTermsConst);

    const content = <>
        <div className="cs-card__image" style={{ backgroundImage: `url(${image})` }} />
        <Typography className="cs-card__title">{title}</Typography>
        <div className="cs-tags">
            {tags.map(tag => <span key={tag} className="cs-tag">{term(tag)}</span>)}
        </div>
    </>;

    return hasCaseStudyDetail(slug)
        ? <Link to={caseStudyLink(slug)} className="cs-card cs-card--link">{content}</Link>
        : <div className="cs-card">{content}</div>
}
