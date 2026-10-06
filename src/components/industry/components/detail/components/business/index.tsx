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
                    <Typography variant='h1'>How we improve airline business</Typography>
                    <Typography variant='h2'>The integration of technology in airlines has not only improved the passenger experience but also increased efficiency, and reduced costs</Typography>
                </Grid>
                <Divider />
                <Grid sx={{ display: 'flex', flexDirection: 'row', gap: '40px', paddingBottom: '32px' }}>
                    <Box sx={{ paddingY: '20px' }}>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                aria-controls="panel1d-content" id="panel1d-header"
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography sx={{ fontSize: '22px', fontWeight: '700', }}>Increase Revenue and Customer Experience</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h4">
                                    The airline industry adopting new technologies and methods to improve its services, fascinate more customers and avoid various maintenance issues.
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
                                <Typography sx={{ fontSize: '22px', fontWeight: '700', }}>Improve Operational Efficiency</Typography>
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
                                <Typography sx={{ fontSize: '22px', fontWeight: '700', }}>Manage Risk of Airlines Issues</Typography>
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
                                <Typography sx={{ fontSize: '22px', fontWeight: '700', }}>Easy to auditing and reporting</Typography>
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