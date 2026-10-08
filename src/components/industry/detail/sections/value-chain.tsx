import { Container } from "components/ui/container";
import { IndustryDetailContent } from "consts/industry-detail.const";
import SectionHeading from "components/product/shared/section-heading";
import HoverPopover from "components/industry/shared/hover-popover";

interface ValueChainSectionProps {
    content: IndustryDetailContent["valueChain"];
}

/** Popover di ujung kiri/kanan dirapatkan ke sisi langkah supaya tidak keluar layar */
const EDGE_STEPS = 2;

export default function ValueChainSection({ content }: ValueChainSectionProps) {
    const { steps } = content;

    return <section className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={content.title} description={content.description} />
            <ol className="iv-chain">
                {steps.map(({ label, title, points }, index) => {
                    const hasPopover = Boolean(title || points?.length);
                    const align = index < EDGE_STEPS ? "start" : index >= steps.length - EDGE_STEPS ? "end" : "center";

                    return <li
                        key={label}
                        className={`iv-chain__step${hasPopover ? " iv-popover-trigger" : ""}`}
                        tabIndex={hasPopover ? 0 : undefined}
                    >
                        {label}
                        {hasPopover && <HoverPopover title={title} points={points} align={align} />}
                    </li>;
                })}
            </ol>
        </Container>
    </section>
}
