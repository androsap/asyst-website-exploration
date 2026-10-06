// import "./index.scss"
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
import { BusinessSolutionConst1, BusinessSolutionConst2, BusinessSolutionConst3 } from 'consts/main-navigation/business-solution.const';
import { Children } from 'react';
import logoAsyst from "assets/img/logo/asyst-logo.svg";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from "@mui/material/Grid";

interface MenuBusinessComponentProps {
    openBusiness: boolean;
    setOpenBusiness: any;
    setOpen: any;
}

export default function MenuBusinessComponent({ openBusiness, setOpenBusiness, setOpen }: MenuBusinessComponentProps) {
    // const [open, setOpen] = useState(false);

    return <>
        <Drawer
            anchor="right"
            open={openBusiness}
            PaperProps={{ sx: { width: "100%" } }}
            // onClose={() => setOpenBusiness(false)}
            transitionDuration={1000}
        >
            <Box className="drawer-menu-content">
                <Box display="flex" flexDirection="row" alignItems="center" className="header-menu">
                    <IconButton color="inherit" onClick={() => { setOpen(false); setOpenBusiness(false) }}>
                        <CloseRoundedIcon sx={{ color: "white" }} />
                    </IconButton>
                    <Grid container display="flex" flexDirection="row" justifyContent="center">
                        <Box display="flex" component="img" src={logoAsyst} className="logo-asyst" />
                    </Grid>
                </Box>
                <Box className="box-back" >
                    <IconButton color="inherit" onClick={() => setOpenBusiness(false)} ><ArrowBackIcon sx={{ color: "#2775BB", height: "15px" }} /></IconButton>
                    <Typography className="back-button">Back</Typography>
                </Box>
                <Box className="box-menu">
                    <Typography className="title-menu">Business Solution</Typography>
                    <Divider sx={{ borderBottomWidth: 2 }} />
                </Box>
                <Box className="header-category">
                    <Link to="https://www.asyst.co.id/our-services/category/professional-services">
                        <Typography className="title-category">{BusinessSolutionConst1[0].category}</Typography>
                    </Link>
                    <ArrowForwardIcon sx={{ color: "#123554", height: "15px" }} />
                </Box>
                <Divider className="content-line" />
                <Box>
                    {Children.toArray(BusinessSolutionConst1.map(({ subMenu }) =>
                        <List>
                            {Children.toArray(subMenu.map(({ label, action }) => <List sx={{ padding: "2px 0px" }}>
                                <ListItem sx={{ padding: "0px" }}>
                                    <ListItemButton sx={{ padding: "0px" }}>
                                        <ListItemText sx={{ paddingLeft: "20px" }}>
                                            <Link to={action}><Typography className="title-link">{label}</Typography></Link>
                                            <Divider className="content-line" />
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                            ))}
                        </List>))}
                </Box>
                <Box>
                    <Box className="header-category">
                        <Link to="https://www.asyst.co.id/our-services/category/professional-services">
                            <Typography className="title-category">{BusinessSolutionConst2[0].category}</Typography>
                        </Link>
                        <ArrowForwardIcon sx={{ color: "#123554", height: "15px" }} />
                    </Box>
                    <Divider className="content-line" />
                    {Children.toArray(BusinessSolutionConst2.map(({ subMenu }) =>
                        <List>
                            {Children.toArray(subMenu.map(({ label, action }) => <List sx={{ padding: "2px 0px" }}>
                                <ListItem sx={{ padding: "0px" }}>
                                    <ListItemButton sx={{ padding: "0px" }}>
                                        <ListItemText sx={{ paddingLeft: "20px" }}>
                                            <Link to={action}><Typography className="title-link">{label}</Typography></Link>
                                            <Divider className="content-line" />
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                            ))}
                        </List>))}
                </Box>
                <Box>
                    <Box className="header-category">
                        <Link to="https://www.asyst.co.id/career"><Typography className="title-category">{BusinessSolutionConst3[0].category}</Typography></Link>
                        <ArrowForwardIcon sx={{ color: "#123554", height: "15px" }} />
                    </Box>
                    <Divider className="content-line" />
                </Box>
            </Box>
        </Drawer>
    </>
}