import { CSSProperties, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { AutorenewRoundedIcon } from "components/ui/icons";
import { MainLayoutSharedProps } from "shared/layout/main-layout";
import "components/product/shared/product-v2.scss";
import "../shared/career.scss";
import { CAREER_BASE_PATH, CAREER_JOBS_PATH, CareerFilterKey, CareerHeroConst, CareerJobListConst, CareerJobsConst, CareerJobsFaqConst, CareerSeoConst } from "consts/career.const";
import useSeo from "shared/head/seo";
import { useLocalized, useT } from "shared/i18n";
import CareerFaq from "../shared/faq";
import { breadcrumbSchema, faqSchema } from "../shared/seo";
import JobCard from "../shared/job-card";
import JobSidebar from "../shared/job-sidebar";
import { careerFilterParams, filterCareerJobs, readCareerFilters } from "../shared/utils";
import JobsHeroSection from "./sections/hero";
import ConnectsSection from "./sections/connects";
import ApplyStepsSection from "./sections/apply-steps";

/** Daftar lowongan (/career/jobs). Semua filter disimpan di query param agar bisa dibagikan & dipakai link dari halaman lain. */
export default function CareerJobsComponent({ }: MainLayoutSharedProps) {
    const t = useT();
    const { title, description, emptyText, resetFilter, loadMore, pageSize } = useLocalized(CareerJobListConst);
    const jobs = useLocalized(CareerJobsConst);
    const faq = useLocalized(CareerJobsFaqConst);
    const [searchParams, setSearchParams] = useSearchParams();
    const filters = useMemo(() => readCareerFilters(searchParams), [searchParams]);
    const results = useMemo(() => filterCareerJobs(jobs, filters), [jobs, filters]);
    const [visible, setVisible] = useState(pageSize);

    // canonical tanpa query param agar variasi filter tidak terindeks sebagai halaman terpisah
    useSeo({
        ...useLocalized(CareerSeoConst).jobs,
        path: CAREER_JOBS_PATH,
        image: CareerHeroConst.EN.image,
        jsonLd: [
            breadcrumbSchema([{ name: t("Career", "Karier"), path: CAREER_BASE_PATH }, { name: t("Jobs", "Lowongan"), path: CAREER_JOBS_PATH }], t("Home", "Beranda")),
            faqSchema(faq.items),
        ],
    });

    // setiap perubahan filter mulai lagi dari halaman pertama
    const query = searchParams.toString();
    useEffect(() => setVisible(pageSize), [query, pageSize]);

    const setFilter = (key: CareerFilterKey | "q", value?: string) =>
        setSearchParams(careerFilterParams({ ...filters, [key]: value }), { replace: true });

    return <div className="product-v2 career-v2">
        <JobsHeroSection filters={filters} onFilterChange={setFilter} />

        <section className="pv-section">
            <Container maxWidth="xl" className="cr-layout cr-layout--jobs">
                <JobSidebar
                    filters={filters}
                    onFilterChange={setFilter}
                    keyword={filters.q ?? ""}
                    onKeywordChange={value => setFilter("q", value)}
                />

                <div className="cr-layout__main">
                    <Typography variant="h2" className="cr-title">{title}</Typography>
                    <Typography className="cr-text">{description}</Typography>

                    {/* key = query: daftar di-mount ulang tiap filter berubah agar animasi masuk diputar lagi */}
                    {results.length
                        ? <div key={query} className="cr-job-list cr-job-list--animated">
                            {results.slice(0, visible).map((job, i) => (
                                <JobCard key={job.slug} job={job} variant="list" style={{ "--i": i % pageSize } as CSSProperties} />
                            ))}
                        </div>
                        : <div key={query} className="cr-empty cr-fade-in">
                            <Typography>{emptyText}</Typography>
                            <Button className="pv-btn pv-btn--outline cr-btn--small" onClick={() => setSearchParams({}, { replace: true })}>{resetFilter}</Button>
                        </div>}

                    {visible < results.length && <div className="cr-center">
                        <Button className="pv-btn pv-btn--outline cr-btn--pill" startIcon={<AutorenewRoundedIcon />} onClick={() => setVisible(v => v + pageSize)}>{loadMore}</Button>
                    </div>}
                </div>
            </Container>
        </section>

        <ConnectsSection />
        <ApplyStepsSection />
        <CareerFaq {...faq} />
    </div>
}
