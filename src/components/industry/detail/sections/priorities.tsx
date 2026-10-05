import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { IndustryDetailContent } from "consts/industry-detail.const";
import SectionHeading from "components/product/shared/section-heading";
import AccordionItem from "components/product/shared/accordion";

interface PrioritiesSectionProps {
    content: IndustryDetailContent["priorities"];
}

/** Accordion prioritas bisnis di kiri + matriks kapabilitas per segmen di kanan. */
export default function PrioritiesSection({ content }: PrioritiesSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const { columns, rows } = content.matrix;

    return <Box component="section" className="pv-section">
        <Container maxWidth="xl">
            <SectionHeading title={content.title} />
            <Box className="iv-priority">
                <Box className="iv-priority__list">
                    {content.items.map(({ title, points }, index) => (
                        <AccordionItem
                            key={title}
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
                </Box>
                <Box className="iv-priority__matrix">
                    <table className="iv-matrix">
                        <thead>
                            <tr>
                                <th>Capability</th>
                                {columns.map(column => <th key={column}>{column}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map(({ label, values }) => (
                                <tr key={label}>
                                    <td>{label}</td>
                                    {values.map((value, index) => (
                                        <td key={columns[index]}>
                                            {value
                                                ? <CheckCircleRoundedIcon className="iv-matrix__check" aria-label="Yes" />
                                                : <RemoveRoundedIcon className="iv-matrix__empty" aria-label="No" />}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Box>
            </Box>
        </Container>
    </Box>
}
