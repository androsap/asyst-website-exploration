import "./index.scss"
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuServicesComponent from "./menu-services";
import MenuBusinessComponent from "./menu-business";
import MenuCompanyComponent from "./menu-company";
import Grid from "@mui/material/Grid";
import logoAsyst from "assets/asyst/img/logo/asyst-logo-white.webp";

export default function NavigationMobileComponent() {
    const [open, setOpen] = useState(false);
    const [openServices, setOpenServices] = useState(false);
    const [openBusiness, setOpenBusiness] = useState(false);
    const [openCompany, setOpenCompany] = useState(false);

    return <>
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={() => setOpen(true)}
        >
            <MenuIcon />
        </IconButton>

        <Drawer
            anchor="left"
            open={open}
            PaperProps={{ sx: { width: "100%" } }}
            onClose={() => setOpen(false)}
        >
            <Box className="drawer-menu-content">
                <Box display="flex" flexDirection="row" alignItems="center" className="header-menu">
                    <IconButton color="inherit" onClick={() => setOpen(false)}>
                        <CloseRoundedIcon sx={{ color: "white" }} />
                    </IconButton>
                    <Grid container display="flex" flexDirection="row" justifyContent="center">
                        <Box display="flex" component="img" src={logoAsyst} className="logo-asyst" />
                    </Grid>
                </Box>
                <Box >
                    <List>
                        <ListItem sx={{ padding: "0px" }}>
                            <ListItemButton sx={{"&.MuiButtonBase-root:hover": {
                                        backgroundColor: "transparent"
                                    }, paddingTop: "0px" }}>
                                <ListItemText onClick={() => setOpenServices(true)}>
                                    <Typography className="title-parent">Services</Typography>
                                    <Divider />
                                </ListItemText>
                                <ArrowForwardIosIcon sx={{ color: "#2775BB", height: "15px" }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ padding: "0px" }}>
                            <ListItemButton sx={{ "&.MuiButtonBase-root:hover": {
                                        backgroundColor: "transparent"
                                    }, paddingTop: "0px" }}>
                                <ListItemText onClick={() => setOpenBusiness(true)}>
                                    <Typography className="title-parent">Business Solution</Typography>
                                    <Divider />
                                </ListItemText>
                                <ArrowForwardIosIcon sx={{ color: "#2775BB", height: "15px" }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ padding: "0px" }}>
                            <ListItemButton sx={{ paddingTop: "0px" }}>
                                <ListItemText onClick={() => window.location.reload()}>
                                    <Typography className="title-parent">Expertise</Typography>
                                    <Divider />
                                </ListItemText>
                                <ArrowForwardIosIcon sx={{ color: "#fff", height: "15px" }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ padding: "0px" }}>
                            <ListItemButton sx={{ paddingTop: "0px" }}>
                                <ListItemText onClick={() => window.location.assign("https://www.asyst.co.id/news")}>
                                    <Typography className="title-parent">News</Typography>
                                    <Divider />
                                </ListItemText>
                                <ArrowForwardIosIcon sx={{ color: "#fff", height: "15px" }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ padding: "0px" }}>
                            <ListItemButton sx={{ paddingTop: "0px" }}>
                                <ListItemText onClick={() => setOpenCompany(true)}>
                                    <Typography className="title-parent">Company</Typography>
                                    <Divider />
                                </ListItemText>
                                <ArrowForwardIosIcon sx={{ color: "#2775BB", height: "15px" }} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
                {openServices && <MenuServicesComponent openServices={openServices} setOpenServices={setOpenServices} setOpen={setOpen} />}
                {openBusiness && <MenuBusinessComponent openBusiness={openBusiness} setOpenBusiness={setOpenBusiness} setOpen={setOpen} />}
                {openCompany && <MenuCompanyComponent openCompany={openCompany} setOpenCompany={setOpenCompany} setOpen={setOpen} />}
            </Box>
        </Drawer>
    </>
}