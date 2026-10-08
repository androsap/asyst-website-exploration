import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Button } from "components/ui/button";
import { Typography } from "components/ui/typography";
import { CareerJob, careerJobLink, CareerTermsConst } from "consts/career.const";
import { useLanguage, useT, useTerms } from "shared/i18n";
import { formatJobDate } from "./utils";

interface JobCardProps {
    job: CareerJob;
    /** grid = kartu 3 kolom (halaman Career), list = baris lebar (halaman Jobs) */
    variant?: "grid" | "list";
    style?: CSSProperties;
}

export default function JobCard({ job, variant = "grid", style }: JobCardProps) {
    const { slug, title, department, summary, postedDate, skills } = job;
    const link = careerJobLink(slug);
    const t = useT();
    const term = useTerms(CareerTermsConst);
    const language = useLanguage();
    const date = <Typography className="cr-job__date">{formatJobDate(postedDate, language)}</Typography>;

    return <article className={`cr-job cr-job--${variant}`} style={style}>
        {variant === "grid" && date}
        <div className="cr-job__header">
            <span className="cr-badge">{term(department)}</span>
            {variant === "list" && date}
        </div>
        <h3 className="cr-job__title"><Link to={link}>{title}</Link></h3>
        <Typography className="cr-job__summary">{summary}</Typography>
        <JobMeta job={job} />
        <div className="cr-skills">
            {skills.map(skill => <span key={skill} className="cr-skill">{term(skill)}</span>)}
        </div>
        <Button
            asChild
            className={`pv-btn cr-btn--small ${variant === "grid" ? "pv-btn--outline" : "pv-btn--primary"} cr-job__button`}
        ><Link to={link}>
            {variant === "grid" ? t("View Details", "Lihat Detail") : t("View Position", "Lihat Posisi")}
        </Link></Button>
    </article>
}

export function JobMeta({ job }: { job: CareerJob }) {
    const t = useT();
    const term = useTerms(CareerTermsConst);
    const items = [
        { label: t("Experience", "Pengalaman"), value: term(job.experience) },
        { label: t("Employment Type", "Tipe Pekerjaan"), value: term(job.employmentType) },
        { label: t("Location", "Lokasi"), value: term(job.location) },
    ];

    return <div className="cr-job__meta">
        {items.map(({ label, value }) => (
            <div key={label}>
                <Typography className="cr-job__meta-label">{label}</Typography>
                <Typography className="cr-job__meta-value">{value}</Typography>
            </div>
        ))}
    </div>
}
