import { useState } from "react";
import { Container } from "components/ui/container";
import { CheckCircleRoundedIcon, RemoveRoundedIcon } from "components/ui/icons";
import { IndustryDetailContent } from "consts/industry-detail.const";
import SectionHeading from "components/product/shared/section-heading";
import AccordionItem from "components/product/shared/accordion";
import { useT } from "shared/i18n";

interface PrioritiesSectionProps {
    content: IndustryDetailContent["priorities"];
}

/** Accordion prioritas bisnis di kiri + matriks kapabilitas per segmen di kanan. */
export default function PrioritiesSection({ content }: PrioritiesSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const t = useT();
    const { columns, rows } = content.matrix;

    return <section className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={content.title} />
            <div className="iv-priority">
                <div className="iv-priority__list">
                    {content.items.map(({ title, points }, index) => (
                        <AccordionItem
                            key={index}
                            title={title}
                            icon="circle"
                            open={index === openIndex}
                            onToggle={() => setOpenIndex(index === openIndex ? null : index)}
                        >
                            <ul className="pv-list iv-priority__points">
                                {points.map(point => <li key={point}>{point}</li>)}
                            </ul>
                        </AccordionItem>
                    ))}
                </div>
                <div className="iv-priority__matrix">
                    <table className="iv-matrix">
                        <thead>
                            <tr>
                                <th>{t("Capability", "Kapabilitas")}</th>
                                {columns.map(column => <th key={column}>{column}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map(({ label, values }, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td>{label}</td>
                                    {values.map((value, index) => (
                                        <td key={index}>
                                            {value
                                                ? <CheckCircleRoundedIcon className="iv-matrix__check" aria-label={t("Yes", "Ya")} />
                                                : <RemoveRoundedIcon className="iv-matrix__empty" aria-label={t("No", "Tidak")} />}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Container>
    </section>
}
