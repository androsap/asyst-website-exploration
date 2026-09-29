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
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from "react";
import GarudaMilesPromoComponent from "./garudamiles-promo";
import GarudaMilesPerolehanComponent from "./garudamiles-perolehan";
import GarudaMilesPenukaranComponent from "./garudamiles-penukaran";
import GarudaMilesTentangComponent from "./garudamiles-tentang";
import GarudaMilesLainnyaComponent from "./garudamiles-lainnya";

interface MenuGarudaMilesComponentProps {
    openGarudaMiles: boolean;
    setOpenGarudaMiles: any;
}

export default function MenuGarudaMilesComponent({ openGarudaMiles, setOpenGarudaMiles }: MenuGarudaMilesComponentProps) {
    const [openPromo, setOpenPromo] = useState(false);
    const [openPenukaran, setOpenPenukaran] = useState(false);
    const [openPerolehan, setOpenPerolehan] = useState(false);
    const [openTentang, setOpenTentang] = useState(false);
    const [openLainnya, setOpenLainnya] = useState(false);


    return <>
        <Drawer
            anchor="right"
            open={openGarudaMiles}
            PaperProps={{ sx: { width: "100%" } }}
            // onClose={() => setOpenGarudaMiles(false)}
            transitionDuration={3000}
        >
            <Box className="drawer-menu-content">
                <Box className="header-menu" >
                    <IconButton color="inherit" onClick={() => setOpenGarudaMiles(false)} ><ArrowBackIosIcon sx={{ color: "#fff", height: "15px", ml:"-5px"  }} /></IconButton>
                    <Typography className="title-menu">Kembali</Typography>
                </Box>
                <Box mb="18px">
                    <Divider className="content-line" />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText onClick={() => setOpenPromo(true)}>
                                    <Typography className="title-parent">Promo dan Info</Typography>
                                </ListItemText>
                                <ArrowForwardIosIcon sx={{ color: "#fff", height: "15px" }} />
                            </ListItemButton>
                        </ListItem>
                        <Divider className="content-line" />
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText onClick={() => setOpenPerolehan(true)}>
                                    <Typography className="title-parent">Perolehan Miles</Typography>
                                </ListItemText>
                                <ArrowForwardIosIcon sx={{ color: "#fff", height: "15px" }} />
                            </ListItemButton>
                        </ListItem>
                        <Divider className="content-line" />
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText onClick={() => setOpenPenukaran(true)}>
                                    <Typography className="title-parent">Penukaran Miles</Typography>
                                </ListItemText>
                                <ArrowForwardIosIcon sx={{ color: "#fff", height: "15px" }} />
                            </ListItemButton>
                        </ListItem>
                        <Divider className="content-line" />
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText  onClick={() => setOpenTentang(true)}>
                                    <Typography className="title-parent">Tentang Garuda Miles</Typography>
                                </ListItemText>
                                <ArrowForwardIosIcon sx={{ color: "#fff", height: "15px" }} />
                            </ListItemButton>
                        </ListItem>
                        <Divider className="content-line" />
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText  onClick={() => setOpenLainnya(true)}>
                                    <Typography className="title-parent">Lainnya</Typography>
                                </ListItemText>
                                <ArrowForwardIosIcon sx={{ color: "#fff", height: "15px" }} />
                            </ListItemButton>
                        </ListItem>
                        <Divider className="content-line" />
                        <ListItem disablePadding>
                            <ArrowForwardIosIcon sx={{ color: "#fff", height: "12px", marginLeft: "8px" }} />
                            <ListItemButton>
                                <ListItemText>
                                    <Link to="https://www.garuda-indonesia.com/id/id/web-service-form/register-member-garudamiles"><Typography className="title-link"> Daftar Garudamiles</Typography></Link>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <Divider className="content-line" />
                        <ListItem disablePadding>
                            <ArrowForwardIosIcon sx={{ color: "#fff", height: "12px", marginLeft: "8px" }} />
                            <ListItemButton>
                                <ListItemText>
                                    <Link to="https://www.garuda-indonesia.com/garudamiles/id/news-and-offers/news/perusahaan-anda-bersama-garudamiles"><Typography className="title-link"> Gabung Garudamiles Partner</Typography></Link>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <Divider className="content-line" />
                    </List>
                </Box>
                {openPromo && <GarudaMilesPromoComponent openPromo={openPromo} setOpenPromo={setOpenPromo}/>}
                {openPenukaran && <GarudaMilesPenukaranComponent openPenukaran={openPenukaran} setOpenPenukaran={setOpenPenukaran}/>}
                {openPerolehan && <GarudaMilesPerolehanComponent openPerolehan={openPerolehan} setOpenPerolehan={setOpenPerolehan}/>}
                {openTentang && <GarudaMilesTentangComponent openTentang={openTentang} setOpenTentang={setOpenTentang}/>}
                {openLainnya && <GarudaMilesLainnyaComponent openLainnya={openLainnya} setOpenLainnya={setOpenLainnya}/>}
            </Box>
        </Drawer>
    </>
}