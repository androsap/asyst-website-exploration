import AsystSymbol from "assets/asyst/img/logo/asyst-symbol.webp";
import { Fade } from "components/ui/transitions";
import { useT } from "shared/i18n";

interface PageLoaderProps {
    open?: boolean;
}

export default function PageLoader({ open = true }: PageLoaderProps) {
    const t = useT();

    return <Fade in={open} timeout={{ enter: 0, exit: 400 }} unmountOnExit>
        <div className="fixed top-0 left-0 w-full h-screen z-[99999] flex items-center justify-center bg-white">
            <div className="relative w-[96px] h-[96px] flex items-center justify-center">
                <div className="absolute inset-0 rounded-[50%] border-[3px] border-solid border-[rgba(18,53,84,0.1)] border-t-[#123554] border-r-[#89BA3A] animate-page-loader-spin" />
                <img src={AsystSymbol} alt={t("Loading", "Memuat")} className="w-[52px] h-auto animate-page-loader-pulse" />
            </div>
        </div>
    </Fade>
}
