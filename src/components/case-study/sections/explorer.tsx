import { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { CaseStudiesConst, CaseStudyExplorerConst, CaseStudyFilterTabsConst, CaseStudyItem, CaseStudyFilterKey, CaseStudyTermsConst } from "consts/case-study.const";
import { useLocalized, useTerms } from "shared/i18n";
import TabBar from "components/product/shared/tab-bar";
import CaseCard from "../shared/case-card";
import { CASE_STUDY_SECTION_IDS } from "../shared/section-ids";

const matchesFilter = (item: CaseStudyItem, key: CaseStudyFilterKey, value: string) => {
    const field = item[key];
    return Array.isArray(field) ? field.includes(value) : field === value;
};

/** Tab dimensi (Industry/Solutions/Technology) + chip filter + pencarian + grid dengan "Load more". */
export default function ExplorerSection() {
    const { allLabel, searchPlaceholder, emptyText, loadMore, pageSize } = useLocalized(CaseStudyExplorerConst);
    const filterTabs = useLocalized(CaseStudyFilterTabsConst);
    const caseStudies = useLocalized(CaseStudiesConst);
    const term = useTerms(CaseStudyTermsConst);
    const [tabIndex, setTabIndex] = useState(0);
    const [filter, setFilter] = useState<string | null>(null);
    const [search, setSearch] = useState("");
    const [visible, setVisible] = useState(pageSize);

    const tab = filterTabs[tabIndex];

    const results = useMemo(() => {
        const keyword = search.trim().toLowerCase();
        return caseStudies.filter(item =>
            (!filter || matchesFilter(item, tab.key, filter)) &&
            (!keyword || [item.title, ...item.tags, ...item.tags.map(term)].some(text => text.toLowerCase().includes(keyword)))
        );
    }, [caseStudies, tab.key, filter, search, term]);

    // setiap perubahan filter mulai lagi dari halaman pertama
    const resetPaging = () => setVisible(pageSize);

    const changeTab = (index: number) => {
        setTabIndex(index);
        setFilter(null);
        resetPaging();
    };

    const changeFilter = (value: string | null) => {
        setFilter(value);
        resetPaging();
    };

    return <Box component="section" id={CASE_STUDY_SECTION_IDS.explorer} className="pv-section pv-anchor">
        <Container maxWidth="xl">
            <Box className="cs-explorer__toolbar">
                <TabBar variant="pill" labels={filterTabs.map(x => x.label)} active={tabIndex} onChange={changeTab} />
                <Box className="cs-search">
                    <SearchRoundedIcon className="cs-search__icon" />
                    <InputBase
                        className="cs-search__input"
                        placeholder={searchPlaceholder}
                        value={search}
                        onChange={e => { setSearch(e.target.value); resetPaging(); }}
                        inputProps={{ "aria-label": searchPlaceholder }}
                    />
                </Box>
            </Box>

            <Box className="cs-filters" role="group" aria-label={tab.label}>
                {[null, ...tab.options].map(option => (
                    <ButtonBase
                        key={option ?? allLabel}
                        aria-pressed={filter === option}
                        className={`cs-filter ${filter === option ? "active" : ""}`}
                        onClick={() => changeFilter(option)}
                    >
                        {option ? term(option) : allLabel}
                    </ButtonBase>
                ))}
            </Box>

            {results.length
                ? <Box className="cs-grid">
                    {results.slice(0, visible).map(item => <CaseCard key={item.slug} item={item} />)}
                </Box>
                : <Typography className="cs-empty">{emptyText}</Typography>}

            {visible < results.length && <Box className="cs-explorer__more">
                <Button className="pv-btn pv-btn--primary cs-btn--small" onClick={() => setVisible(v => v + pageSize)}>{loadMore}</Button>
            </Box>}
        </Container>
    </Box>
}
