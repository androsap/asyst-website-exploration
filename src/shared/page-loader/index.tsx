import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { keyframes } from "@emotion/react";
import AsystSymbol from "assets/asyst/img/logo/asyst-symbol.webp";
import { useT } from "shared/i18n";

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const pulse = keyframes`
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(0.88); opacity: 0.75; }
`;

interface PageLoaderProps {
    open?: boolean;
}

export default function PageLoader({ open = true }: PageLoaderProps) {
    const t = useT();

    return <Fade in={open} timeout={{ enter: 0, exit: 400 }} unmountOnExit>
        <Box
            position="fixed"
            top={0}
            left={0}
            width="100%"
            height="100vh"
            zIndex={99999}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgcolor="#fff"
        >
            <Box position="relative" width={96} height={96} display="flex" alignItems="center" justifyContent="center">
                <Box
                    position="absolute"
                    sx={{
                        inset: 0,
                        borderRadius: "50%",
                        border: "3px solid rgba(18, 53, 84, 0.1)",
                        borderTopColor: "#123554",
                        borderRightColor: "#89BA3A",
                        animation: `${spin} 1s linear infinite`
                    }}
                />
                <Box
                    component="img"
                    src={AsystSymbol}
                    alt={t("Loading", "Memuat")}
                    sx={{ width: 52, height: "auto", animation: `${pulse} 1.4s ease-in-out infinite` }}
                />
            </Box>
        </Box>
    </Fade>
}
