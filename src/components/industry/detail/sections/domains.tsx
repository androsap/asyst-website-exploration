import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { IndustryDetailContent } from "consts/industry-detail.const";
import SectionHeading from "components/product/shared/section-heading";
import HoverPopover from "components/industry/shared/hover-popover";
import { ReactComponent as DomainIcon } from "assets/asyst/img/icon/industry/domain.svg";

interface DomainsSectionProps {
    content: IndustryDetailContent["domains"];
}

export default function DomainsSection({ content }: DomainsSectionProps) {
    return <Box component="section" className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={content.title} />
            <Box className="iv-domains">
                {content.items.map(({ title, description, points, popover }) => (
                    <Box
                        key={title}
                        className={`pv-card pv-card--soft iv-domain${popover ? " iv-popover-trigger" : ""}`}
                        tabIndex={popover ? 0 : undefined}
                    >
                        <DomainIcon className="iv-domain__icon" aria-hidden />
                        <Typography className="pv-card__title">{title}</Typography>
                        <Typography className="iv-domain__description">{description}</Typography>
                        <ul className="iv-domain__points">
                            {points.map(point => <li key={point}>{point}</li>)}
                        </ul>
                        {popover && <HoverPopover {...popover} align="start" />}
                    </Box>
                ))}
            </Box>
        </Container>
    </Box>
}
