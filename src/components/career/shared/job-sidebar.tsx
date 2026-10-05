import { FormEvent } from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { CareerDepartmentsConst, CareerFilterGroupsConst, CareerFilterKey, CareerSidebarConst } from "consts/career.const";
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
    const toggle = (key: CareerFilterKey, value: string) => onFilterChange(key, filters[key] === value ? undefined : value);

    const submit = (e: FormEvent) => {
        e.preventDefault();
        onKeywordSubmit?.();
    };

    return <Box component="aside" className="cr-sidebar">
        <Box component="nav" className="cr-panel" aria-label={CareerSidebarConst.browse}>
            <Typography className="cr-panel__title">{CareerSidebarConst.browse}</Typography>
            {CareerDepartmentsConst.map(department => (
                <ButtonBase
                    key={department}
                    aria-pressed={filters.department === department}
                    className={`cr-browse ${filters.department === department ? "active" : ""}`}
                    onClick={() => toggle("department", department)}
                >
                    {department}
                    <ArrowForwardRoundedIcon />
                </ButtonBase>
            ))}
        </Box>

        <Box className="cr-panel">
            <Typography className="cr-panel__title">{CareerSidebarConst.filters}</Typography>
            <Box component="form" className="cr-search cr-search--small" onSubmit={submit} role="search">
                <SearchRoundedIcon className="cr-search__icon" />
                <InputBase
                    className="cr-search__input"
                    placeholder={CareerSidebarConst.searchPlaceholder}
                    value={keyword}
                    onChange={e => onKeywordChange(e.target.value)}
                    inputProps={{ "aria-label": CareerSidebarConst.searchPlaceholder }}
                />
            </Box>

            {CareerFilterGroupsConst.map(({ key, label, options }) => (
                <Box key={key} className="cr-filter-group" role="group" aria-label={label}>
                    <Typography className="cr-filter-group__title">{label}</Typography>
                    <Box className="cr-chips">
                        {options.map(option => (
                            <ButtonBase
                                key={option}
                                aria-pressed={filters[key] === option}
                                className={`cr-chip ${filters[key] === option ? "active" : ""}`}
                                onClick={() => toggle(key, option)}
                            >
                                {option}
                            </ButtonBase>
                        ))}
                    </Box>
                </Box>
            ))}
        </Box>
    </Box>
}
