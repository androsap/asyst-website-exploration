import "./index.scss"
// import useMediaQuery from "@mui/material/useMediaQuery"
// import { styled } from '@mui/material/styles';
// import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import Container from "@mui/material/Container"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { FooterProducts, FooterServices, FooterIndustrialSegments, FooterAsyst } from "consts/footer-asyst.const";
import { Children } from "react";
import Divider from '@mui/material/Divider';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MessageIcon from "@mui/icons-material/Message";
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import { ReactComponent as TwitterX } from "assets/asyst/img/icon/footer/twitter.svg"
import { ReactComponent as PhonesIcon } from "assets/asyst/img/icon/footer/phones.svg"
import AsystLogo from "assets/asyst/img/logo/asyst-logo-white.png"
import AsystLogoMobile from "assets/asyst/img/logo/asyst-logo-white.png"
import useMediaQuery from "@mui/material/useMediaQuery";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from "@mui/material/AccordionDetails";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
interface FooterSharedProps {
    showDetail?: boolean;
}

export default function FooterShared({ }: FooterSharedProps) {
    const matches = useMediaQuery('(max-width:1023px)');
    // const matches = useMediaQuery('(max-width:1023px)');
    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // }
    // const Accordion = styled((props: AccordionProps) => (
    //     <MuiAccordion disableGutters elevation={0} square {...props} />
    // ))(({theme}) => ({backgroundColor:
    //     theme.palette.mode === 'dark'
    //       ? 'rgba(255, 255, 255, .05)'
    //       : 'rgba(0, 38, 76, 1)',
    //     padding: '0px !important',
    //     margin: '0px !important',
    //     '&:not(:last-child)': {
    //         borderBottom: 0,
    //     },
    //     '&:before': {
    //         display: 'none',
    //     },
    //     '.MuiSvgIcon-root': {
    //         color: 'white',
    //     },
    // }));
    return <>
        {!matches && <Box className="footer">
            <Box className="brand-footer" sx={{ mt: "185px" }}>
                <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={{ mt: "36px" }}>
                        <Grid container spacing={1} columns={5.5} justifyContent="space-between">
                            <Grid item xs={1.5}>
                                <Typography className="category-footer">Products and Services</Typography>
                                <Grid container columns={2} rowSpacing={.5} columnSpacing={1}>
                                    {Children.toArray(FooterProducts.map(({ text, link }) =>
                                        <Grid item xs={1} sm={1} md={1}>
                                            <a href={link}><Typography className="label-list-footer">{text}</Typography></a>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography className="category-footer">Business Solutions</Typography>
                                <Grid container columns={1} rowSpacing={.5}>
                                    {Children.toArray(FooterServices.map(({ text, link }) =>
                                        <Grid item xs={1} sm={1} md={1}>
                                            <a href={link}><Typography className="label-list-footer">{text}</Typography></a>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                            <Grid item xs={1.5}>
                                <Typography className="category-footer">Industries</Typography>
                                <Grid container columns={2} rowSpacing={.5}>
                                    {Children.toArray(FooterIndustrialSegments.map(({ text, link }) =>
                                        <Grid item xs={1} sm={1} md={1}>
                                            <a href={link}><Typography className="label-list-footer">{text}</Typography></a>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                            <Grid item xs={1.5}>
                                <Typography className="category-footer">Aero Systems Indonesia</Typography>
                                <Grid container columns={2} rowSpacing={.5}>
                                    {Children.toArray(FooterAsyst.map(({ text, link }) =>
                                        <Grid item xs={text == 'Customers' || text == 'Partners' ? 2 : 1} sm={text == 'Customers' || text == 'Partners' ? 2 : 1} md={text == 'Customers' || text == 'Partners' ? 2 : 1}>
                                            <a href={link}><Typography className="label-list-footer">{text}</Typography></a>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider textAlign="left" sx={{ color: "#fff", mt: "38px" }}>STAY CONNECTED ANYWHERE</Divider>
                    <Box display="flex" flexDirection="row" gap={5} justifyContent="space-between">
                        <Box display="flex" flexDirection="row" justifyContent="space-around" gap={4}>
                            <Box display="flex" alignItems="center" gap="20px" sx={{ mt: "31px", mb: "38px" }}>
                                <a href="https://www.linkedin.com/company/pt.-aero-systems-indonesia/"><LinkedInIcon className="sosmed-icon" /></a>
                                <a href="https://instagram.com/asyst_official"><InstagramIcon className="sosmed-icon" /></a>
                                <a href="https://youtube.com/@asystindonesia6175"><YouTubeIcon className="sosmed-icon" /></a>
                                <a href="https://www.facebook.com/PTAeroSystemsIndonesia"><FacebookRoundedIcon className="sosmed-icon" /></a>
                                <a href="https://twitter.com/"><TwitterX className="sosmed-icon" /></a>
                            </Box>
                            <Box display="flex" alignItems="center" gap="20px" sx={{ mt: "31px", mb: "38px" }}>
                                <a href="#">
                                    <Box display="flex" gap="10px">
                                        <MessageIcon className="sosmed-icon" /><Typography className="label-contact">Customer support</Typography>
                                    </Box>
                                </a>
                                <a href="mailto:marketing@asyst.co.id">
                                    <Box display="flex" gap="10px">
                                        <EmailIcon className="sosmed-icon" /><Typography className="label-contact">Business email</Typography>
                                    </Box>
                                </a>
                                <a href="https://wa.me/62881023759899">
                                    <Box display="flex" gap="10px">
                                        <PhonesIcon className="sosmed-icon" /><Typography className="label-contact">Business messenger</Typography>
                                    </Box>
                                </a>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="right" gap="20px" sx={{ mt: "31px", mb: "38px" }}>
                            <a href="#">
                                <Box display="flex" gap="10px">
                                    <LanguageIcon className="sosmed-icon" /><Typography className="label-contact">English</Typography>
                                </Box>
                            </a>
                        </Box>
                    </Box>
                </Container>
                <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column" }}>
                    <Box display="flex" flexDirection="row" gap={2} justifyContent="space-between">
                        <Box display="flex" gap="10px">
                            <Box display="flex" component="img" src={AsystLogo} className="logo-asyst" />
                            <Typography className="label-contact">© Aero Systems Indonesia | All Right Reserved</Typography>
                        </Box>
                        <Box display="flex" gap="10px">
                            <Typography className="label-contact">Privacy Policy | Terms of Service</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>}
        {matches && <Box className="footer-mobile" sx={{ mt: "86px" }}>
            <Box sx={{ mt: "36px", backgroundColor: "#006CAE" }}>
                <Accordion sx={{ boxShadow: "none" }}>
                    <AccordionSummary className="expand-footer" expandIcon={<ExpandMoreIcon />}>
                        <Typography className="summary-footer">Aero Systems Indonesia</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            {Children.toArray(FooterAsyst.map(({ text, link }) =>
                                <ListItem sx={{ paddingY: 0 }}>
                                    <a href={link}><Typography className="list-footer">{text}</Typography></a>
                                </ListItem>
                            ))}
                        </List>
                        {/* <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography> */}
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{ boxShadow: "none" }}>
                    <AccordionSummary className="expand-footer" expandIcon={<ExpandMoreIcon />}>
                        <Typography className="summary-footer">Products and Services</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            {Children.toArray(FooterProducts.map(({ text, link }) =>
                                <ListItem sx={{ paddingY: 0 }}>
                                    <a href={link}><Typography className="list-footer">{text}</Typography></a>
                                </ListItem>
                            ))}
                        </List>
                        {/* <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography> */}
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{ boxShadow: "none" }}>
                    <AccordionSummary className="expand-footer" expandIcon={<ExpandMoreIcon />}>
                        <Typography className="summary-footer">Business Solutions</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            {Children.toArray(FooterServices.map(({ text, link }) =>
                                <ListItem sx={{ paddingY: 0 }}>
                                    <a href={link}><Typography className="list-footer">{text}</Typography></a>
                                </ListItem>
                            ))}
                        </List>
                        {/* <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography> */}
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{ boxShadow: "none" }}>
                    <AccordionSummary className="expand-footer" expandIcon={<ExpandMoreIcon />}>
                        <Typography className="summary-footer">Industries</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            {Children.toArray(FooterIndustrialSegments.map(({ text, link }) =>
                                <ListItem sx={{ paddingY: 0 }}>
                                    <a href={link}><Typography className="list-footer">{text}</Typography></a>
                                </ListItem>
                            ))}
                        </List>
                        {/* <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography> */}
                    </AccordionDetails>
                </Accordion>
                <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", mt: "39px", pb: "57px" }}>
                    <Box display="flex" flexDirection="column" gap={1}>
                        <Box display="flex" justifyContent="center">
                            <Box display="flex" component="img" src={AsystLogoMobile} className="logo-asyst" />
                            {/* <Typography className="label-contact-mobile">© Aero Systems Indonesia | All Right Reserved</Typography> */}
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Typography className="label-contact-mobile">© Aero Systems Indonesia | All Right Reserved</Typography>
                        </Box>
                    </Box>
                    {/* </Box> */}
                </Container>
            </Box>
            {/* </Container> */}
        </Box>}
    </>
}