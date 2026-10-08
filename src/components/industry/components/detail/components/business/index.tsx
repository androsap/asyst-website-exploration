import { ReactNode } from "react";
import './index.scss';
import { Divider } from "components/ui/divider";
import { Typography } from "components/ui/typography";
import { Accordion as UiAccordion, AccordionDetails as UiAccordionDetails, AccordionSummary as UiAccordionSummary, AccordionProps } from "components/ui/accordion";
import { ExpandCircleDownIcon as ExpandMoreIcon } from "components/ui/icons";
import BusinessImage from 'assets/img/icon/Business/business.webp';
import React from "react";
import { useT } from "shared/i18n";
import { cn } from "@/lib/utils";

// Varian Accordion halaman ini (sebelumnya styled() MUI): tanpa gutters & bayangan, sudut siku, tanpa garis ::before
const Accordion = ({ className, ...props }: AccordionProps) =>
    <UiAccordion disableGutters elevation={0} square className={cn("[border-bottom:0px_solid_rgba(0,0,0,0.12)] [&:not(:last-child)]:[border-bottom:0] [&::before]:[display:none]", className)} {...props} />;

const AccordionDetails = ({ children }: { children: ReactNode }) =>
    <UiAccordionDetails className="p-4 w-[624px] text-[16px]">{children}</UiAccordionDetails>;

const AccordionSummary = ({ children }: { children: ReactNode; expandIcon?: ReactNode }) =>
    <UiAccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className="bg-white flex-row text-[#2775BB]"
        iconClassName="text-[#2775BB] data-[expanded=true]:text-[#123554]"
        contentClassName="data-[expanded=true]:ml-0 data-[expanded=true]:text-[#123554]"
    >
        {children}
    </UiAccordionSummary>;

export default function BusinessComponent() {
    const t = useT();

    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: unknown, newExpanded: boolean) => {
            console.log(event)
            setExpanded(newExpanded ? panel : false);
        };


    return (
        <>
            <div className='business'>
                <div className="[box-sizing:border-box] flex-row flex gap-[40px] pb-[32px]">
                    <Typography variant='h1'>{t("How we improve airline business", "Bagaimana kami meningkatkan bisnis maskapai")}</Typography>
                    <Typography variant='h2'>{t("The integration of technology in airlines has not only improved the passenger experience but also increased efficiency, and reduced costs", "Integrasi teknologi di maskapai tidak hanya meningkatkan pengalaman penumpang, tetapi juga meningkatkan efisiensi dan menekan biaya")}</Typography>
                </div>
                <Divider />
                <div className="[box-sizing:border-box] flex-row flex gap-[40px] pb-[32px]">
                    <div className="pt-[20px] pb-[20px]">
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography className="text-[length:22px] font-[700]">{t("Increase Revenue and Customer Experience", "Tingkatkan Pendapatan dan Pengalaman Pelanggan")}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h4">
                                    {t("The airline industry adopting new technologies and methods to improve its services, fascinate more customers and avoid various maintenance issues.", "Industri penerbangan mengadopsi teknologi dan metode baru untuk meningkatkan layanan, menarik lebih banyak pelanggan, dan menghindari berbagai masalah perawatan.")}
                                </Typography>
                            </AccordionDetails>
                            
                        </Accordion>
                        <Divider className="w-[609px] bg-[color:#E2EAF1] [border-bottom-width:1.5px]" variant="middle" />
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography className="text-[length:22px] font-[700]">{t("Improve Operational Efficiency", "Tingkatkan Efisiensi Operasional")}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Divider className="w-[609px] bg-[color:#E2EAF1] [border-bottom-width:1.5px]" variant="middle" />
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography className="text-[length:22px] font-[700]">{t("Manage Risk of Airlines Issues", "Kelola Risiko Permasalahan Maskapai")}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Divider className="w-[609px] bg-[color:#E2EAF1] [border-bottom-width:1.5px]" variant="middle" />
                        <Accordion className="pt-[0px] pr-[0px] pb-[0px] pl-[0px]">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography className="text-[length:22px] font-[700]">{t("Easy to auditing and reporting", "Audit dan pelaporan yang mudah")}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div>
                        <img className="image-business" src={BusinessImage} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}