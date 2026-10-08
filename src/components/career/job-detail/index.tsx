import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { MainLayoutSharedProps } from "shared/layout/main-layout";
import "components/product/shared/product-v2.scss";
import "../shared/career.scss";
import { CAREER_APPLY_LINK, CAREER_BASE_PATH, CAREER_JOBS_PATH, CareerFilterKey, CareerJob, CareerJobDetailConst, CareerJobDetailFaqConst, CareerJobsConst, careerJobLink, CareerSeoConst, CareerTermsConst } from "consts/career.const";
import useSeo from "shared/head/seo";
import { useLocalized, useT, useTerms } from "shared/i18n";
import CareerBreadcrumb from "../shared/breadcrumb";
import { breadcrumbSchema, jobPostingSchema } from "../shared/seo";
import CareerFaq from "../shared/faq";
import JobSidebar from "../shared/job-sidebar";
import { careerJobsLink } from "../shared/utils";

/** Halaman detail lowongan (/career/jobs/:slug). Konten per lowongan ada di consts/career.const. */
export default function CareerJobDetailComponent({ }: MainLayoutSharedProps) {
    const { slug = "" } = useParams();
    const job = useLocalized(CareerJobsConst).find(item => item.slug === slug);

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [slug]);

    if (!job) return <Navigate to={CAREER_JOBS_PATH} replace />;

    return <JobDetail job={job} />;
}

function JobDetail({ job }: { job: CareerJob }) {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");
    const t = useT();
    const term = useTerms(CareerTermsConst);
    const detail = useLocalized(CareerJobDetailConst);
    const faqContent = useLocalized(CareerJobDetailFaqConst);
    const title = useLocalized(CareerSeoConst).jobDetail.title.replace("{title}", job.title);

    useSeo({
        title,
        description: job.summary,
        path: careerJobLink(job.slug),
        type: "article",
        jsonLd: [
            jobPostingSchema(job, detail),
            breadcrumbSchema([
                { name: t("Career", "Karier"), path: CAREER_BASE_PATH },
                { name: t("Jobs", "Lowongan"), path: CAREER_JOBS_PATH },
                { name: job.title, path: careerJobLink(job.slug) },
            ], t("Home", "Beranda")),
        ],
    });

    // filter di sidebar membuka daftar lowongan dengan filter tersebut
    const openJobs = (key: CareerFilterKey, value?: string) => navigate(careerJobsLink({ [key]: value }));

    const faq = {
        ...faqContent,
        items: faqContent.items.map(item => ({ ...item, question: item.question.replace("{title}", job.title) })),
    };

    return <div className="product-v2 career-v2">
        <DetailHero job={job} />

        <section className="pv-section">
            <Container maxWidth="xl" className="cr-layout cr-layout--detail">
                <DetailContent job={job} />
                <JobSidebar
                    filters={{}}
                    onFilterChange={openJobs}
                    keyword={keyword}
                    onKeywordChange={setKeyword}
                    onKeywordSubmit={() => navigate(careerJobsLink({ q: keyword }))}
                />
            </Container>
        </section>

        <CareerFaq {...faq} />

        <div className="cr-apply-bar">
            <Container maxWidth="xl" className="cr-apply-bar__inner">
                <div>
                    <Typography className="cr-apply-bar__title">{job.title}</Typography>
                    <Typography className="cr-apply-bar__meta">
                        {[job.experience, job.location, job.employmentType].map(text => <span key={text}>{term(text)}</span>)}
                    </Typography>
                </div>
                <Button asChild className="pv-btn pv-btn--primary"><Link to={CAREER_APPLY_LINK}>{detail.applyShort}</Link></Button>
            </Container>
        </div>
    </div>
}

function DetailHero({ job }: { job: CareerJob }) {
    const t = useT();
    const term = useTerms(CareerTermsConst);
    const { apply, meta } = useLocalized(CareerJobDetailConst);
    const items = [
        { label: meta.location, value: term(job.location) },
        { label: meta.type, value: term(job.employmentType) },
        { label: meta.experience, value: term(job.experience) },
    ];

    return <section className="cr-hero cr-hero--detail">
        <Container maxWidth="xl" className="cr-hero__inner">
            <CareerBreadcrumb items={[
                { label: t("Career", "Karier"), to: CAREER_BASE_PATH },
                { label: t("Jobs", "Lowongan"), to: CAREER_JOBS_PATH },
                { label: job.title },
            ]} />

            <span className="cr-badge cr-badge--neutral">{term(job.department)}</span>
            <Typography variant="h1" className="cr-hero__title">{job.title}</Typography>
            <Typography className="cr-hero__description">{job.summary}</Typography>

            <div className="cr-summary">
                {items.map(({ label, value }) => (
                    <div key={label}>
                        <Typography className="cr-summary__label">{label}</Typography>
                        <Typography className="cr-summary__value">{value}</Typography>
                    </div>
                ))}
            </div>

            <Button asChild className="pv-btn pv-btn--primary cr-hero__button"><Link to={CAREER_APPLY_LINK}>{apply}</Link></Button>
        </Container>
    </section>
}

function DetailContent({ job }: { job: CareerJob }) {
    const { about, whyMatters, responsibilities, requirements, benefits, why, beforeApply } = useLocalized(CareerJobDetailConst);

    return <div className="cr-layout__main cr-detail">
        <div>
            <Typography variant="h2" className="cr-detail__title">{about}</Typography>
            {job.about.map(text => <Typography key={text} className="cr-detail__text">{text}</Typography>)}
        </div>

        <div>
            <Typography variant="h2" className="cr-detail__title">{whyMatters.title}</Typography>
            {whyMatters.paragraphs.map(text => <Typography key={text} className="cr-detail__text">{text}</Typography>)}
        </div>

        <div className="cr-box">
            <Typography variant="h2" className="cr-detail__title">{responsibilities}</Typography>
            <BulletList items={job.responsibilities} />
        </div>

        <div className="cr-box">
            <Typography variant="h2" className="cr-detail__title">{requirements}</Typography>
            <BulletList items={job.requirements} />
        </div>

        <div className="cr-box">
            <Typography variant="h2" className="cr-detail__title">{benefits.title}</Typography>
            <BulletList items={benefits.items} />

            <Typography variant="h2" className="cr-detail__title cr-detail__title--spaced">{why.title}</Typography>
            <div className="cr-detail__grid">
                {why.items.map(({ title, description }) => (
                    <div key={title}>
                        <Typography variant="h3" className="cr-detail__subtitle">{title}</Typography>
                        <Typography className="cr-detail__text">{description}</Typography>
                    </div>
                ))}
            </div>
        </div>

        <div className="cr-box">
            <Typography variant="h2" className="cr-detail__title">{beforeApply.title}</Typography>
            <div className="cr-detail__grid">
                <BulletList items={beforeApply.items} />
                <Typography className="cr-detail__text">{beforeApply.note}</Typography>
                {beforeApply.groups.map(({ title, items }) => (
                    <div key={title}>
                        <Typography variant="h3" className="cr-detail__subtitle">{title}</Typography>
                        <Typography className="cr-detail__text">{beforeApply.requireLabel}</Typography>
                        <BulletList items={items} />
                    </div>
                ))}
            </div>
        </div>
    </div>
}

function BulletList({ items }: { items: string[] }) {
    return <ul className="cr-list">
        {items.map(item => <li key={item}>{item}</li>)}
    </ul>
}
