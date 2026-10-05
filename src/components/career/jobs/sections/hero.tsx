import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { CAREER_BASE_PATH, CareerFilterGroupsConst, CareerFilterKey, CareerHeroConst, CareerJobsHeroConst, CareerPopularSkillsConst } from "consts/career.const";
import CareerBreadcrumb from "../../shared/breadcrumb";
import { CareerFilters } from "../../shared/utils";

/** Urutan dropdown di hero (berbeda dengan urutan chip di sidebar) */
const SELECT_ORDER: CareerFilterKey[] = ["department", "location", "experience", "type"];
const SELECTS = CareerFilterGroupsConst
    .filter(group => SELECT_ORDER.includes(group.key))
    .sort((a, b) => SELECT_ORDER.indexOf(a.key) - SELECT_ORDER.indexOf(b.key));

interface JobsHeroSectionProps {
    filters: CareerFilters;
    onFilterChange: (key: CareerFilterKey | "q", value?: string) => void;
}

/** Hero halaman Jobs: pencarian, dropdown filter & chip "Popular skills". */
export default function JobsHeroSection({ filters, onFilterChange }: JobsHeroSectionProps) {
    const { title, description, searchPlaceholder, popularSkills, allSkills } = CareerJobsHeroConst;

    return <Box component="section" className="cr-hero cr-hero--jobs">
        <Box className="cr-hero__backdrop" sx={{ backgroundImage: `url(${CareerHeroConst.image})` }} aria-hidden />
        <Container maxWidth="xl" className="cr-hero__inner">
            <CareerBreadcrumb items={[{ label: "Career", to: CAREER_BASE_PATH }, { label: "Jobs" }]} />

            <Typography variant="h1" className="cr-hero__title">{title}</Typography>
            <Typography className="cr-hero__description">{description}</Typography>

            <Box className="cr-search cr-search--hero" role="search">
                <SearchRoundedIcon className="cr-search__icon" />
                <InputBase
                    className="cr-search__input"
                    placeholder={searchPlaceholder}
                    value={filters.q ?? ""}
                    onChange={e => onFilterChange("q", e.target.value)}
                    inputProps={{ "aria-label": searchPlaceholder }}
                />
            </Box>

            <Box className="cr-selects">
                {SELECTS.map(({ key, allLabel, options }) => (
                    <Select
                        key={key}
                        value={filters[key] ?? ""}
                        displayEmpty
                        onChange={e => onFilterChange(key, e.target.value || undefined)}
                        input={<InputBase className="cr-select" />}
                        IconComponent={KeyboardArrowDownRoundedIcon}
                        inputProps={{ "aria-label": allLabel }}
                    >
                        <MenuItem value="">{allLabel}</MenuItem>
                        {options.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
                    </Select>
                ))}
            </Box>

            <Typography className="cr-popular__title">{popularSkills}</Typography>
            <Box className="cr-popular" role="group" aria-label={popularSkills}>
                {[null, ...CareerPopularSkillsConst].map(skill => {
                    const active = (filters.skill ?? null) === skill;
                    return <ButtonBase
                        key={skill ?? allSkills}
                        aria-pressed={active}
                        className={`cr-chip ${active ? "active" : ""}`}
                        onClick={() => onFilterChange("skill", skill ?? undefined)}
                    >
                        {skill ?? allSkills}
                    </ButtonBase>
                })}
            </Box>
        </Container>
    </Box>
}
