import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IndustryLayerItem } from "consts/industry-detail.const";
import AccordionItem from "components/product/shared/accordion";
import { useT } from "shared/i18n";

interface LayersAccordionProps {
    items: IndustryLayerItem[];
}

/** Accordion layer teknologi dua kolom; hanya satu item terbuka di kedua kolom. Dirender di dalam IntroSplitSection. */
export default function LayersAccordion({ items }: LayersAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const t = useT();
    const half = Math.ceil(items.length / 2);
    const columns = [items.slice(0, half), items.slice(half)];

    return <Box className="iv-layers">
        {columns.map((column, columnIndex) => (
            <Box key={columnIndex} className="iv-layers__column">
                {column.map(({ label, description, capabilities, value }, itemIndex) => {
                    const index = columnIndex * half + itemIndex;
                    return <Box key={index} className="iv-layer">
                        <AccordionItem
                            title={label}
                            icon="circle"
                            open={index === openIndex}
                            onToggle={() => setOpenIndex(index === openIndex ? null : index)}
                        >
                            <Typography className="iv-layer__description">{description}</Typography>
                            <Box className="iv-layer__details">
                                <Box>
                                    <Typography className="iv-layer__label">{t("Capabilities:", "Kapabilitas:")}</Typography>
                                    <ul className="pv-list">
                                        {capabilities.map(item => <li key={item}>{item}</li>)}
                                    </ul>
                                </Box>
                                <Box>
                                    <Typography className="iv-layer__label">{t("Business Value:", "Nilai Bisnis:")}</Typography>
                                    <Typography className="iv-layer__value">{value}</Typography>
                                </Box>
                            </Box>
                        </AccordionItem>
                    </Box>
                })}
            </Box>
        ))}
    </Box>
}
