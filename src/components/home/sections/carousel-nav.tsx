import { IconButton } from "components/ui/icon-button";
import { ChevronLeftRoundedIcon, ChevronRightRoundedIcon, ArrowBackRoundedIcon, ArrowForwardRoundedIcon } from "components/ui/icons";
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
