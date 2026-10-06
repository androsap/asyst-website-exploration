import Grid from "@mui/material/Grid";
import './index.scss';
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandCircleDown';
import BusinessImage from 'assets/img/icon/Business/business.png';
import { styled } from '@mui/material/styles';
import React from "react";
import { useT } from "shared/i18n";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    borderBottom: `0px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));


const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(1),
    width: '624px',
    fontSize: '16px'
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        {...props}
        expandIcon={<ExpandMoreIcon />}
    />
))(({ theme }) => ({
    backgroundColor: '#fff',
    flexDirection: 'row',
    color: '#2775BB',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(180deg)',
        color: '#123554'
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
        color: '#2775BB',
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
        marginLeft: theme.spacing(0),
        color: '#123554',
    },
}));

export default function BusinessComponent() {
    const t = useT();

    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            console.log(event)
            setExpanded(newExpanded ? panel : false);
        };


    return (
        <>
            <Box className='business'>
                <Grid sx={{ display: 'flex', flexDirection: 'row', gap: '40px', paddingBottom: '32px' }}>
                    <Typography variant='h1'>{t("How we improve airline business", "Bagaimana kami meningkatkan bisnis maskapai")}</Typography>
                    <Typography variant='h2'>{t("The integration of technology in airlines has not only improved the passenger experience but also increased efficiency, and reduced costs", "Integrasi teknologi di maskapai tidak hanya meningkatkan pengalaman penumpang, tetapi juga meningkatkan efisiensi dan menekan biaya")}</Typography>
                </Grid>
                <Divider />
                <Grid sx={{ display: 'flex', flexDirection: 'row', gap: '40px', paddingBottom: '32px' }}>
                    <Box sx={{ paddingY: '20px' }}>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                aria-controls="panel1d-content" id="panel1d-header"
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography sx={{ fontSize: '22px', fontWeight: '700', }}>{t("Increase Revenue and Customer Experience", "Tingkatkan Pendapatan dan Pengalaman Pelanggan")}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h4">
                                    {t("The airline industry adopting new technologies and methods to improve its services, fascinate more customers and avoid various maintenance issues.", "Industri penerbangan mengadopsi teknologi dan metode baru untuk meningkatkan layanan, menarik lebih banyak pelanggan, dan menghindari berbagai masalah perawatan.")}
                                </Typography>
                            </AccordionDetails>
                            
                        </Accordion>
                        <Divider variant="middle" sx={{ width: '609px', backgroundColor: '#E2EAF1', borderBottomWidth: '1.5px' }} />
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography sx={{ fontSize: '22px', fontWeight: '700', }}>{t("Improve Operational Efficiency", "Tingkatkan Efisiensi Operasional")}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Divider variant="middle" sx={{ width: '609px', backgroundColor: '#E2EAF1', borderBottomWidth: '1.5px' }} />
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography sx={{ fontSize: '22px', fontWeight: '700', }}>{t("Manage Risk of Airlines Issues", "Kelola Risiko Permasalahan Maskapai")}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Divider variant="middle" sx={{ width: '609px', backgroundColor: '#E2EAF1', borderBottomWidth: '1.5px' }} />
                        <Accordion sx={{ padding: '0px' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography sx={{ fontSize: '22px', fontWeight: '700', }}>{t("Easy to auditing and reporting", "Audit dan pelaporan yang mudah")}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <Box>
                        <img className="image-business" src={BusinessImage} alt="" />
                    </Box>
                </Grid>
            </Box>
        </>
    )
}