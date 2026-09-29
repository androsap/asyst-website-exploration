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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from "react";
import PerjalananSebelumKeberangkatanComponent from "./perjalanan-sebelum";
import PerjalananDidalamPesawatComponent from "./perjalanan-di-dalam-pesawat";
import PerjalananFiturKabinComponent from "./perjalanan-fitur-kabin";
import PerjalananArmadaComponent from "./perjalanan-armada";
import PerjalananSkyPriorityComponent from "./perjalanan-sky-priority";
import PerjalananKonsepLayananComponent from "./perjalanan-konsep-layanan";

interface MenuPerjalananComponentProps {
    openPerjalanan: boolean;
    setOpenPerjalanan: any;
}

export default function MenuPerjalananComponent({ openPerjalanan, setOpenPerjalanan }: MenuPerjalananComponentProps) {
    const [openSebelumKeberangkatan, setOpenSebelumKeberangkatan] = useState(false);
    const [openDidalamPesawat, setOpenDidalamPesawat] = useState(false);
    const [openFiturKabin, setOpenFiturKabin] = useState(false);
    const [openArmada, setOpenArmada] = useState(false);
    const [openSkyPriority, setOpenSkyPriority] = useState(false);
    const [openKonsepLayanan, setOpenKonsepLayanan] = useState(false);


    return <>
        <Drawer
            anchor="right"
            open={openPerjalanan}
            PaperProps={{ sx: { width: "100%" } }}
            // onClose={() => setOpenPerjalanan(false)}
            transitionDuration={3000}
        >
            <Box className="drawer-menu-content">
                <Box className="header-menu" >
                    <IconButton color="inherit" onClick={() => setOpenPerjalanan(false)} ><ArrowBackIosIcon sx={{ color: "#fff", height: "15px", ml:"-5px"  }} /></IconButton>
                    <Typography className="title-menu">Kembali</Typography>
                </Box>
                <Box mb="18px">
                    <Divider className="content-line" />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText onClick={() => setOpenSebelumKeberangkatan(true)}>
                                    <Typography className="title-parent">Sebelum Keberangkatan</Typography>
                                </ListItemText>
                                <ArrowForwardIosIcon sx={{ color: "#fff", height: "15px" }} />
                            </ListItemButton>
                        </ListItem>
                        <Divider className="content-line" />
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText onClick={() => setOpenFiturKabin(true)}>
                                    <Typography className="title-parent">Di dalam Pesawat</Typography>
                                </ListItemText>
                                <ArrowForwardIosIcon sx={{ color: "#fff", height: "15px" }} />
                            </ListItemButton>
                        </ListItem>
                        <Divider className="content-line" />
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText onClick={() => setOpenDidalamPesawat(true)}>
                                    <Typography className="title-parent">Fitur Kabin</Typography>
                                </ListItemText>
                                <ArrowForwardIosIcon sx={{ color: "#fff", height: "15px" }} />
                            </ListItemButton>
                        </ListItem>
                        <Divider className="content-line" />
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText  onClick={() => setOpenArmada(true)}>
                                    <Typography className="title-parent">Armada</Typography>
                                </ListItemText>
                                <ArrowForwardIosIcon sx={{ color: "#fff", height: "15px" }} />
                            </ListItemButton>
                        </ListItem>
                        <Divider className="content-line" />
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText  onClick={() => setOpenSkyPriority(true)}>
                                    <Typography className="title-parent">Sky Priority</Typography>
                                </ListItemText>
                                <ArrowForwardIosIcon sx={{ color: "#fff", height: "15px" }} />
                            </ListItemButton>
                        </ListItem>
                        <Divider className="content-line" />
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText  onClick={() => setOpenKonsepLayanan(true)}>
                                    <Typography className="title-parent">Konsep Layanan</Typography>
                                </ListItemText>
                                <ArrowForwardIosIcon sx={{ color: "#fff", height: "15px" }} />
                            </ListItemButton>
                        </ListItem>
                        <Divider className="content-line" />
                    </List>
                </Box>
                {openSebelumKeberangkatan && <PerjalananSebelumKeberangkatanComponent openSebelumKeberangkatan={openSebelumKeberangkatan} setOpenSebelumKeberangkatan={setOpenSebelumKeberangkatan}/>}
                {openDidalamPesawat && <PerjalananDidalamPesawatComponent openDidalamPesawat={openDidalamPesawat} setOpenDidalamPesawat={setOpenDidalamPesawat}/>}
                {openFiturKabin && <PerjalananFiturKabinComponent openFiturKabin={openFiturKabin} setOpenFiturKabin={setOpenFiturKabin}/>}
                {openArmada && <PerjalananArmadaComponent openArmada={openArmada} setOpenArmada={setOpenArmada}/>}
                {openSkyPriority && <PerjalananSkyPriorityComponent openSkyPriority={openSkyPriority} setOpenSkyPriority={setOpenSkyPriority}/>}
                {openKonsepLayanan && <PerjalananKonsepLayananComponent openKonsepLayanan={openKonsepLayanan} setOpenKonsepLayanan={setOpenKonsepLayanan}/>}
            </Box>
        </Drawer>
    </>
}