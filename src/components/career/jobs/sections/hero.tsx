import { ButtonBase } from "components/ui/button-base";
import { Container } from "components/ui/container";
import { InputBase } from "components/ui/input-base";
import { Select } from "components/ui/select";
import { Typography } from "components/ui/typography";
import { SearchRoundedIcon, KeyboardArrowDownRoundedIcon } from "components/ui/icons";
import { CAREER_BASE_PATH, CareerFilterGroupsConst, CareerFilterKey, CareerHeroConst, CareerJobsHeroConst, CareerPopularSkillsConst, CareerTermsConst } from "consts/career.const";
import { useLanguage, useLocalized, useT, useTerms } from "shared/i18n";
import CareerBreadcrumb from "../../shared/breadcrumb";
import { CareerFilters } from "../../shared/utils";

/** Urutan dropdown di hero (berbeda dengan urutan chip di sidebar) */
const SELECT_ORDER: CareerFilterKey[] = ["department", "location", "experience", "type"];
const sortSelects = (groups: typeof CareerFilterGroupsConst.EN) => groups
    .filter(group => SELECT_ORDER.includes(group.key))
    .sort((a, b) => SELECT_ORDER.indexOf(a.key) - SELECT_ORDER.indexOf(b.key));

interface JobsHeroSectionProps {
    filters: CareerFilters;
    onFilterChange: (key: CareerFilterKey | "q", value?: string) => void;
}

/** Hero halaman Jobs: pencarian, dropdown filter & chip "Popular skills". */
export default function JobsHeroSection({ filters, onFilterChange }: JobsHeroSectionProps) {
    const { title, description, searchPlaceholder, popularSkills, allSkills } = useLocalized(CareerJobsHeroConst);
    const t = useT();
    const term = useTerms(CareerTermsConst);
    const language = useLanguage();
    const selects = sortSelects(CareerFilterGroupsConst[language]);

    return <section className="cr-hero cr-hero--jobs">
        <div className="cr-hero__backdrop" style={{ backgroundImage: `url(${CareerHeroConst.EN.image})` }} aria-hidden />
        <Container maxWidth="xl" className="cr-hero__inner">
            <CareerBreadcrumb items={[{ label: t("Career", "Karier"), to: CAREER_BASE_PATH }, { label: t("Jobs", "Lowongan") }]} />

            <Typography variant="h1" className="cr-hero__title">{title}</Typography>
            <Typography className="cr-hero__description">{description}</Typography>

            <div className="cr-search cr-search--hero" role="search">
                <SearchRoundedIcon className="cr-search__icon" />
                <InputBase
                    className="cr-search__input"
                    placeholder={searchPlaceholder}
                    value={filters.q ?? ""}
                    onChange={e => onFilterChange("q", e.target.value)}
                    inputProps={{ "aria-label": searchPlaceholder }}
                />
            </div>

            <div className="cr-selects">
                {selects.map(({ key, allLabel, options }) => (
                    <Select
                        key={key}
                        variant="standard"
                        className="cr-select"
                        value={filters[key] ?? ""}
                        onChange={value => onFilterChange(key, value || undefined)}
                        IconComponent={KeyboardArrowDownRoundedIcon}
                        aria-label={allLabel}
                        options={[{ value: "", label: allLabel }, ...options.map(option => ({ value: option, label: term(option) }))]}
                    />
                ))}
            </div>

            <Typography className="cr-popular__title">{popularSkills}</Typography>
            <div className="cr-popular" role="group" aria-label={popularSkills}>
                {[null, ...CareerPopularSkillsConst].map(skill => {
                    const active = (filters.skill ?? null) === skill;
                    return <ButtonBase
                        key={skill ?? allSkills}
                        aria-pressed={active}
                        className={`cr-chip ${active ? "active" : ""}`}
                        onClick={() => onFilterChange("skill", skill ?? undefined)}
                    >
                        {skill ? term(skill) : allSkills}
                    </ButtonBase>
                })}
            </div>
        </Container>
    </section>
}
