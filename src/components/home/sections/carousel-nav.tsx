import IconButton from "@mui/material/IconButton";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useT } from "shared/i18n";

interface CarouselNavProps {
    onPrev: () => void;
    onNext: () => void;
    isBeginning: boolean;
    isEnd: boolean;
    variant?: "chevron" | "arrow";
    size?: "small" | "large";
}

export default function CarouselNav({ onPrev, onNext, isBeginning, isEnd, variant = "chevron", size = "small" }: CarouselNavProps) {
    const Prev = variant === "arrow" ? ArrowBackRoundedIcon : ChevronLeftRoundedIcon;
    const Next = variant === "arrow" ? ArrowForwardRoundedIcon : ChevronRightRoundedIcon;
    const t = useT();

    return <div className={`home-carousel-nav home-carousel-nav--${size}`}>
        <IconButton aria-label={t("Previous", "Sebelumnya")} onClick={onPrev} disabled={isBeginning}><Prev /></IconButton>
        <IconButton aria-label={t("Next", "Berikutnya")} onClick={onNext} disabled={isEnd}><Next /></IconButton>
    </div>
}
