import { FormEvent } from "react";
import { ButtonBase } from "components/ui/button-base";
import { InputBase } from "components/ui/input-base";
import { Typography } from "components/ui/typography";
import { SearchRoundedIcon, ArrowForwardRoundedIcon } from "components/ui/icons";
import { CareerDepartmentsConst, CareerFilterGroupsConst, CareerFilterKey, CareerSidebarConst, CareerTermsConst } from "consts/career.const";
import { useLocalized, useTerms } from "shared/i18n";
import { CareerFilters } from "./utils";

interface JobSidebarProps {
    filters: CareerFilters;
    /** value undefined = hapus filter */
    onFilterChange: (key: CareerFilterKey, value?: string) => void;
    keyword: string;
    onKeywordChange: (value: string) => void;
    /** Enter di kolom pencarian (dipakai halaman detail untuk pindah ke daftar lowongan) */
    onKeywordSubmit?: () => void;
}

/** Kartu "Browse" (departemen) + kartu "Filters" (pencarian & chip). Dipakai di halaman Jobs & detail. */
export default function JobSidebar({ filters, onFilterChange, keyword, onKeywordChange, onKeywordSubmit }: JobSidebarProps) {
    const sidebar = useLocalized(CareerSidebarConst);
    const filterGroups = useLocalized(CareerFilterGroupsConst);
    const term = useTerms(CareerTermsConst);
    const toggle = (key: CareerFilterKey, value: string) => onFilterChange(key, filters[key] === value ? undefined : value);

    const submit = (e: FormEvent) => {
        e.preventDefault();
        onKeywordSubmit?.();
    };

    return <aside className="cr-sidebar">
        <nav className="cr-panel" aria-label={sidebar.browse}>
            <Typography className="cr-panel__title">{sidebar.browse}</Typography>
            {CareerDepartmentsConst.map(department => (
                <ButtonBase
                    key={department}
                    aria-pressed={filters.department === department}
                    className={`cr-browse ${filters.department === department ? "active" : ""}`}
                    onClick={() => toggle("department", department)}
                >
                    {term(department)}
                    <ArrowForwardRoundedIcon />
                </ButtonBase>
            ))}
        </nav>

        <div className="cr-panel">
            <Typography className="cr-panel__title">{sidebar.filters}</Typography>
            <form className="cr-search cr-search--small" onSubmit={submit} role="search">
                <SearchRoundedIcon className="cr-search__icon" />
                <InputBase
                    className="cr-search__input"
                    placeholder={sidebar.searchPlaceholder}
                    value={keyword}
                    onChange={e => onKeywordChange(e.target.value)}
                    inputProps={{ "aria-label": sidebar.searchPlaceholder }}
                />
            </form>

            {filterGroups.map(({ key, label, options }) => (
                <div key={key} className="cr-filter-group" role="group" aria-label={label}>
                    <Typography className="cr-filter-group__title">{label}</Typography>
                    <div className="cr-chips">
                        {options.map(option => (
                            <ButtonBase
                                key={option}
                                aria-pressed={filters[key] === option}
                                className={`cr-chip ${filters[key] === option ? "active" : ""}`}
                                onClick={() => toggle(key, option)}
                            >
                                {term(option)}
                            </ButtonBase>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </aside>
}
