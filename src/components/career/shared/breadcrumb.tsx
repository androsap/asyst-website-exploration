import { Fragment } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useT } from "shared/i18n";

interface CareerBreadcrumbProps {
    /** item terakhir = halaman aktif (tanpa link) */
    items: { label: string; to?: string }[];
}

export default function CareerBreadcrumb({ items }: CareerBreadcrumbProps) {
    const t = useT();

    return <Box component="nav" className="cr-breadcrumb" aria-label="Breadcrumb">
        <Link to="/" aria-label={t("Home", "Beranda")}><HomeOutlinedIcon /></Link>
        {items.map(({ label, to }) => (
            <Fragment key={label}>
                <ChevronRightRoundedIcon className="cr-breadcrumb__separator" />
                {to
                    ? <Link to={to}>{label}</Link>
                    : <span className="cr-breadcrumb__current" aria-current="page">{label}</span>}
            </Fragment>
        ))}
    </Box>
}
