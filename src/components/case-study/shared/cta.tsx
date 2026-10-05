import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { CaseStudyCtaConst } from "consts/case-study.const";
import { requestDemoModal } from "components/product/shared/page-actions";

/** CTA berlatar abu-abu terang di atas footer (halaman Case Study & detail). */
export default function CaseStudyCta() {
    const { title, subtitle, description, button } = CaseStudyCtaConst;

    return <Box component="section" className="cs-cta">
        <Container maxWidth="xl" className="cs-cta__inner">
            <Box>
                <Typography variant="h2" className="cs-cta__title">{title}</Typography>
                <Typography className="cs-cta__description">{subtitle}<br />{description}</Typography>
            </Box>
            <Button className="pv-btn pv-btn--primary" endIcon={<ArrowForwardRoundedIcon />} onClick={requestDemoModal}>{button}</Button>
        </Container>
    </Box>
}
