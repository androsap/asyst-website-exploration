import { Button } from "components/ui/button";
import { Container } from "components/ui/container";
import { Typography } from "components/ui/typography";
import { ArrowForwardRoundedIcon } from "components/ui/icons";
import { CaseStudyCtaConst } from "consts/case-study.const";
import { useTalkToExpert } from "components/product/shared/page-actions";
import { useLocalized } from "shared/i18n";

export default function CaseStudyCta() {
    const { title, subtitle, description, button } = useLocalized(CaseStudyCtaConst);
    const talkToExpert = useTalkToExpert();

    return <section className="cs-cta">
        <Container maxWidth="xl" className="cs-cta__inner">
            <div>
                <Typography variant="h2" className="cs-cta__title">{title}</Typography>
                <Typography className="cs-cta__description">{subtitle}<br />{description}</Typography>
            </div>
            <Button className="pv-btn pv-btn--primary" endIcon={<ArrowForwardRoundedIcon />} onClick={talkToExpert}>{button}</Button>
        </Container>
    </section>
}
