import "./index.scss"
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ServicesConst } from 'consts/main-navigation/services.const';
import { ServicesIndustryConst } from 'consts/main-navigation/services.industry.const';
import { Children } from 'react';
import logoAsyst from "assets/img/logo/asyst-logo.svg";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from "@mui/material/Grid";

interface MenuServicesComponentProps {
    openServices: boolean;
    setOpenServices: any;
    setOpen: any;
}

export default function MenuServicesComponent({ openServices, setOpenServices, setOpen }: MenuServicesComponentProps) {
    // const [open, setOpen] = useState(true);
    // console.log(openServices);
    
    const listZeroPadding = {paddingTop: "0px !important", paddingBottom: "0px !important"};

    return <>
        <Drawer
            anchor="right"
            open={openServices}
            PaperProps={{ sx: { width: "100%" } }}
            // onClose={() => setOpenPenawaran(false)}
            transitionDuration={1000}
        >
            <Box className="drawer-menu-content">
                <Box display="flex" flexDirection="row" alignItems="center" className="header-menu">
                    <IconButton color="inherit" onClick={() => { setOpen(false); setOpenServices(false) }}>
                        <CloseRoundedIcon sx={{ color: "white" }} />
                    </IconButton>
                    <Grid container display="flex" flexDirection="row" justifyContent="center">
                        <Box display="flex" component="img" src={logoAsyst} className="logo-asyst" />
                    </Grid>
                </Box>
                <Box className="box-back" >
                    <IconButton color="inherit" onClick={() => setOpenServices(false)} ><ArrowBackIcon sx={{ color: "#006CAE", height: "15px" }} /></IconButton>
                    <Typography className="back-button">Back</Typography>
                </Box>
                <Box className="box-menu">
                    <Typography className="title-menu">Services</Typography>
                    <Divider sx={{ borderBottomWidth: 2 }} />
                </Box>
                <Box className="header-category">
                    <Link to="https://www.asyst.co.id/our-products"><Typography className="title-category">{ServicesConst[0].category}</Typography></Link>
                    <ArrowForwardIcon sx={{ color: "#002561", height: "15px" }} />
                </Box>
                <Divider className="content-line"/>
                <Box>
                    {Children.toArray(ServicesConst.map(({ subMenu }) =>
                        <List sx={listZeroPadding}>
                            {Children.toArray(subMenu.map(({ label, action }) => <List sx={{ padding:"2px 0px" }}>
                                <ListItem sx={{ padding: "0px 20px" }}>
                                    <ListItemButton sx={{
                                        "&.MuiButtonBase-root:hover": {
                                            backgroundColor: "transparent"
                                        }, padding: "0px"
                                    }}>
                                        <ListItemText>
                                            <Link to={action}><Typography className="title-link">{label}</Typography></Link>
                                            <Divider sx={{ marginTop: "7px" }}/>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                            ))}
                        </List>))}
                </Box>
                <Box className="header-category">
                    <Typography className="title-category" onClick={() => window.location.reload()}>{ServicesIndustryConst[0].category}</Typography>
                    <ArrowForwardIcon sx={{ color: "#002561", height: "15px" }} />
                </Box>
                <Box>
                    <Divider className="content-line" />
                    {Children.toArray(ServicesIndustryConst.map(({ subMenu }) =>
                        <List sx={listZeroPadding}>
                            {Children.toArray(subMenu.map(({ label, action }) => <List sx={{ padding:"2px 0px" }}>
                                <ListItem sx={{ padding: "0px 20px" }}>
                                    <ListItemButton sx={{
                                        "&.MuiButtonBase-root:hover": {
                                            backgroundColor: "transparent"
                                        }, padding: "0px"
                                    }}>
                                        <ListItemText>
                                            <Link to={action}><Typography className="title-link">{label}</Typography></Link>
                                            <Divider sx={{ marginTop: "7px" }}/>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                            ))}
                        </List>))}
                </Box>
            </Box>
        </Drawer>
    </>
}