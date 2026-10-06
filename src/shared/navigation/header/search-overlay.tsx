import { FormEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Zoom from "@mui/material/Zoom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useLocalized } from "shared/i18n";
import { SEARCH_QUICK_GROUP_LIMIT, SEARCH_QUICK_GROUPS, SearchIndexConst, SearchPageConst } from "consts/search.const";
import { searchEntries, searchPageLink } from "components/search/shared/search-utils";
import "./search-overlay.scss";

export interface SearchOverlayProps {
    open: boolean;
    /** Titik tengah tombol search (koordinat viewport); kotak membesar dari titik ini */
    origin: { x: number; y: number };
    onClose: () => void;
}

/** Pencarian cepat dari tombol search di header. Di-lazy-load agar index pencarian tidak ikut bundle header. */
export default function SearchOverlay({ open, origin, onClose }: SearchOverlayProps) {
    const navigate = useNavigate();
    const content = useLocalized(SearchPageConst);
    const index = useLocalized(SearchIndexConst);
    const [query, setQuery] = useState("");
    const [active, setActive] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);

    const groups = useMemo(() => {
        const matches = searchEntries(index, query);
        return SEARCH_QUICK_GROUPS
            .map(category => ({ category, items: matches.filter(entry => entry.category === category).slice(0, SEARCH_QUICK_GROUP_LIMIT) }))
            .filter(group => group.items.length);
    }, [index, query]);
    const flatItems = groups.flatMap(group => group.items);
    const hasQuery = !!query.trim();

    useEffect(() => setActive(-1), [query]);

    const go = (link: string) => {
        onClose();
        navigate(link);
    };

    const submit = (e: FormEvent) => {
        e.preventDefault();
        if (active >= 0 && flatItems[active]) go(flatItems[active].link);
        else if (hasQuery) go(searchPageLink(query));
    };

    const onKeyDown = (e: KeyboardEvent) => {
        if (!flatItems.length || (e.key !== "ArrowDown" && e.key !== "ArrowUp")) return;
        e.preventDefault();
        // -1 = belum ada item terpilih; panah berputar: -1 → 0 → ... → terakhir → -1
        const step = e.key === "ArrowDown" ? 1 : -1;
        const slots = flatItems.length + 1;
        setActive(i => (i + 1 + step + slots) % slots - 1);
    };

    // Transform origin = posisi tombol relatif terhadap kotak (offset tidak terpengaruh transform scale)
    const setOrigin = (node: HTMLElement) => {
        node.style.transformOrigin = `${origin.x - node.offsetLeft}px ${origin.y - node.offsetTop}px`;
    };

    let itemIndex = -1;

    return <Modal
        open={open}
        onClose={onClose}
        closeAfterTransition
        className="search-overlay"
        slots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { className: "search-overlay__backdrop", timeout: 250 } as object }}
    >
        <Fade in={open} timeout={250}>
            <Zoom
                in={open}
                timeout={{ enter: 320, exit: 220 }}
                onEnter={setOrigin}
                onEntered={() => inputRef.current?.focus()}
                onExited={() => setQuery("")}
            >
                <div className="search-overlay__glass">
                    <div className={`search-overlay__panel ${hasQuery ? "has-query" : ""}`}>
                        <form role="search" className="search-overlay__input" onSubmit={submit}>
                            <SearchRoundedIcon className="search-overlay__input-icon" />
                            <input
                                ref={inputRef}
                                type="search"
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                onKeyDown={onKeyDown}
                                placeholder={content.quickPlaceholder}
                                aria-label={content.quickPlaceholder}
                                aria-controls="search-overlay-results"
                                aria-activedescendant={active >= 0 ? `search-overlay-item-${active}` : undefined}
                                autoComplete="off"
                                autoFocus
                            />
                        </form>

                        {hasQuery && <div id="search-overlay-results" className="search-overlay__results" role="listbox" aria-label={content.title}>
                            {groups.map(group => (
                                <div key={group.category} className="search-overlay__group" role="group" aria-label={content.categories[group.category]}>
                                    <span className="search-overlay__chip">{content.categories[group.category]}</span>
                                    <ul>
                                        {group.items.map(entry => {
                                            const i = ++itemIndex;
                                            return <li key={`${entry.link}-${entry.title}`}>
                                                <a
                                                    id={`search-overlay-item-${i}`}
                                                    role="option"
                                                    aria-selected={i === active}
                                                    href={entry.link}
                                                    className={`search-overlay__item ${i === active ? "active" : ""}`}
                                                    onMouseEnter={() => setActive(i)}
                                                    onClick={e => { e.preventDefault(); go(entry.link); }}
                                                >
                                                    <span>{entry.title}</span>
                                                    <ChevronRightRoundedIcon className="search-overlay__item-icon" />
                                                </a>
                                            </li>;
                                        })}
                                    </ul>
                                </div>
                            ))}

                            {!groups.length && <p className="search-overlay__empty">{content.quickNoResult.replace("{q}", query.trim())}</p>}

                            <div className="search-overlay__footer">
                                <Button className="search-overlay__see-all" onClick={() => go(searchPageLink(query))}>{content.seeAll}</Button>
                            </div>
                        </div>}
                    </div>
                </div>
            </Zoom>
        </Fade>
    </Modal>
}
