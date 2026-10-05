import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { MainLayoutSharedProps } from "shared/layout/main-layout";
import "components/product/shared/product-v2.scss";
import "../shared/career.scss";
import { CAREER_APPLY_LINK, CAREER_BASE_PATH, CAREER_JOBS_PATH, CareerFilterKey, CareerJob, CareerJobDetailConst, CareerJobDetailFaqConst, CareerJobsConst, careerJobLink } from "consts/career.const";
import useSeo from "shared/head/seo";
import CareerBreadcrumb from "../shared/breadcrumb";
import { breadcrumbSchema, jobPostingSchema } from "../shared/seo";
import CareerFaq from "../shared/faq";
import JobSidebar from "../shared/job-sidebar";
import { careerJobsLink } from "../shared/utils";

/** Halaman detail lowongan (/career/jobs/:slug). Konten per lowongan ada di consts/career.const. */
export default function CareerJobDetailComponent({ title }: MainLayoutSharedProps) {
    const { slug = "" } = useParams();
    const job = CareerJobsConst.find(item => item.slug === slug);

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [slug]);

    if (!job) return <Navigate to={CAREER_JOBS_PATH} replace />;

    return <JobDetail job={job} title={title} />;
}

function JobDetail({ job, title }: { job: CareerJob; title: string }) {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");

    useSeo({
        title,
        description: job.summary,
        path: careerJobLink(job.slug),
        type: "article",
        jsonLd: [
            jobPostingSchema(job, CareerJobDetailConst),
            breadcrumbSchema([
                { name: "Career", path: CAREER_BASE_PATH },
                { name: "Jobs", path: CAREER_JOBS_PATH },
                { name: job.title, path: careerJobLink(job.slug) },
            ]),
        ],
    });

    // filter di sidebar membuka daftar lowongan dengan filter tersebut
    const openJobs = (key: CareerFilterKey, value?: string) => navigate(careerJobsLink({ [key]: value }));

    const faq = {
        ...CareerJobDetailFaqConst,
        items: CareerJobDetailFaqConst.items.map(item => ({ ...item, question: item.question.replace("{title}", job.title) })),
    };

    return <Box className="product-v2 career-v2">
        <DetailHero job={job} />

        <Box component="section" className="pv-section">
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
        </Box>

        <CareerFaq {...faq} />

        <Box className="cr-apply-bar">
            <Container maxWidth="xl" className="cr-apply-bar__inner">
                <Box>
                    <Typography className="cr-apply-bar__title">{job.title}</Typography>
                    <Typography className="cr-apply-bar__meta">
                        {[job.experience, job.location, job.employmentType].map(text => <span key={text}>{text}</span>)}
                    </Typography>
                </Box>
                <Button component={Link} to={CAREER_APPLY_LINK} className="pv-btn pv-btn--primary">{CareerJobDetailConst.applyShort}</Button>
            </Container>
        </Box>
    </Box>
}

function DetailHero({ job }: { job: CareerJob }) {
    const { apply, meta } = CareerJobDetailConst;
    const items = [
        { label: meta.location, value: job.location },
        { label: meta.type, value: job.employmentType },
        { label: meta.experience, value: job.experience },
    ];

    return <Box component="section" className="cr-hero cr-hero--detail">
        <Container maxWidth="xl" className="cr-hero__inner">
            <CareerBreadcrumb items={[
                { label: "Career", to: CAREER_BASE_PATH },
                { label: "Jobs", to: CAREER_JOBS_PATH },
                { label: job.title },
            ]} />

            <span className="cr-badge cr-badge--neutral">{job.department}</span>
            <Typography variant="h1" className="cr-hero__title">{job.title}</Typography>
            <Typography className="cr-hero__description">{job.summary}</Typography>

            <Box className="cr-summary">
                {items.map(({ label, value }) => (
                    <Box key={label}>
                        <Typography className="cr-summary__label">{label}</Typography>
                        <Typography className="cr-summary__value">{value}</Typography>
                    </Box>
                ))}
            </Box>

            <Button component={Link} to={CAREER_APPLY_LINK} className="pv-btn pv-btn--primary cr-hero__button">{apply}</Button>
        </Container>
    </Box>
}

function DetailContent({ job }: { job: CareerJob }) {
    const { about, whyMatters, responsibilities, requirements, benefits, why, beforeApply } = CareerJobDetailConst;

    return <Box className="cr-layout__main cr-detail">
        <Box>
            <Typography variant="h2" className="cr-detail__title">{about}</Typography>
            {job.about.map(text => <Typography key={text} className="cr-detail__text">{text}</Typography>)}
        </Box>

        <Box>
            <Typography variant="h2" className="cr-detail__title">{whyMatters.title}</Typography>
            {whyMatters.paragraphs.map(text => <Typography key={text} className="cr-detail__text">{text}</Typography>)}
        </Box>

        <Box className="cr-box">
            <Typography variant="h2" className="cr-detail__title">{responsibilities}</Typography>
            <BulletList items={job.responsibilities} />
        </Box>

        <Box className="cr-box">
            <Typography variant="h2" className="cr-detail__title">{requirements}</Typography>
            <BulletList items={job.requirements} />
        </Box>

        <Box className="cr-box">
            <Typography variant="h2" className="cr-detail__title">{benefits.title}</Typography>
            <BulletList items={benefits.items} />

            <Typography variant="h2" className="cr-detail__title cr-detail__title--spaced">{why.title}</Typography>
            <Box className="cr-detail__grid">
                {why.items.map(({ title, description }) => (
                    <Box key={title}>
                        <Typography variant="h3" className="cr-detail__subtitle">{title}</Typography>
                        <Typography className="cr-detail__text">{description}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>

        <Box className="cr-box">
            <Typography variant="h2" className="cr-detail__title">{beforeApply.title}</Typography>
            <Box className="cr-detail__grid">
                <BulletList items={beforeApply.items} />
                <Typography className="cr-detail__text">{beforeApply.note}</Typography>
                {beforeApply.groups.map(({ title, items }) => (
                    <Box key={title}>
                        <Typography variant="h3" className="cr-detail__subtitle">{title}</Typography>
                        <Typography className="cr-detail__text">{beforeApply.requireLabel}</Typography>
                        <BulletList items={items} />
                    </Box>
                ))}
            </Box>
        </Box>
    </Box>
}

function BulletList({ items }: { items: string[] }) {
    return <Box component="ul" className="cr-list">
        {items.map(item => <li key={item}>{item}</li>)}
    </Box>
}
