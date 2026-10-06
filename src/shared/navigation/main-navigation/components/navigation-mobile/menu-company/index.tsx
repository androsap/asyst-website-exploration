// import "./index.scss"
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CompanyConst from 'consts/main-navigation/company.const';
import { Children } from 'react';
import logoAsyst from "assets/img/logo/asyst-logo.svg";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from "@mui/material/Grid";
import { requestDemoModal } from 'components/home';

interface MenuCompanyComponentProps {
    openCompany: boolean;
    setOpenCompany: any;
    setOpen: any;
}

export default function MenuCompanyComponent({ openCompany, setOpenCompany, setOpen }: MenuCompanyComponentProps) {
    // const [open, setOpen] = useState(false);
    // console.log(open)

    return <>
        <Drawer
            anchor="right"
            open={openCompany}
            PaperProps={{ sx: { width: "100%" } }}
            // onClose={() => setOpenPenawaran(false)}
            transitionDuration={1000}
        >
            <Box className="drawer-menu-content">
                <Box display="flex" flexDirection="row" alignItems="center" className="header-menu">
                    <IconButton color="inherit" onClick={() => { setOpen(false); setOpenCompany(false) }}>
                        <CloseRoundedIcon sx={{ color: "white" }} />
                    </IconButton>
                    <Grid container display="flex" flexDirection="row" justifyContent="center">
                        <Box display="flex" component="img" src={logoAsyst} className="logo-asyst" />
                    </Grid>
                </Box>
                <Box className="box-back" >
                    <IconButton color="inherit" onClick={() => setOpenCompany(false)} ><ArrowBackIcon sx={{ color: "#2775BB", height: "15px" }} /></IconButton>
                    <Typography className="back-button">Back</Typography>
                </Box>
                <Box className="box-menu">
                    <Typography className="title-menu">Company</Typography>
                    <Divider sx={{ borderBottomWidth: 2 }} />
                </Box>
                <Box className="header-category">
                    <Typography className="title-category">{CompanyConst[0].category}</Typography>
                    <ArrowForwardIcon sx={{ color: "#123554", height: "15px" }} />
                </Box>
                <Divider sx={{ paddingTop: "10px", ml: "10px", mr: "15px" }} />
                <Box>
                    {Children.toArray(CompanyConst.map(({ subMenu }) =>
                    <List>
                        {Children.toArray(subMenu.map(({ label, action }) =>
                        <>
                            <ListItem>
                                <ListItemText>
                                    <Link to={action}><Typography className="title-link">{label}</Typography></Link>
                                </ListItemText>
                            </ListItem>
                            <Divider sx={{ ml: "35px", mr: "15px" }}/>
                            </>
                        ))}
                    </List>
                    ))}
                </Box>
                <Box className="header-category">
                    <Link to="https://www.asyst.co.id/career"><Typography className="title-category">Career</Typography></Link>
                    <ArrowForwardIcon sx={{ color: "#123554", height: "15px" }} />
                </Box>
                <Divider sx={{ paddingTop: "10px", ml: "10px", mr: "15px" }} />
                <Box className="header-category">
                    <Link to="https://www.asyst.co.id/contact-us"><Typography className="title-category">Contact and Support</Typography></Link>
                    <ArrowForwardIcon sx={{ color: "#123554", height: "15px" }} />
                </Box>
                <Divider sx={{ paddingTop: "10px", ml: "10px", mr: "15px" }} />
                <Box className="header-category">
                    <Typography className="title-category" onClick={requestDemoModal}>Schedule a Demo</Typography>
                    <ArrowForwardIcon sx={{ color: "#123554", height: "15px" }} />
                </Box>
            </Box>
        </Drawer>
    </>
}