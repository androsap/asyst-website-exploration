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
import DestinationComponent from "./destination";
import RuteComponent from "./rute";

interface MenuDestinationComponentProps {
    openDestination: boolean;
    setOpenDestination: any;
}

export default function MenuDestinationComponent({ openDestination, setOpenDestination }: MenuDestinationComponentProps) {
    const [openDestinationDestination, setOpenDestinationDestination] = useState(false);
    const [openDestinationRute, setOpenDestinationRute] = useState(false);

    return <>
        <Drawer
            anchor="right"
            open={openDestination}
            PaperProps={{ sx: { width: "100%" } }}
            // onClose={() => setOpenDestination(false)}
            transitionDuration={3000}
        >
            <Box className="drawer-menu-content">
                <Box className="header-menu" >
                    <IconButton color="inherit" onClick={() => setOpenDestination(false)} ><ArrowBackIosIcon sx={{ color: "#fff", height: "15px", ml:"-5px"  }} /></IconButton>
                    <Typography className="title-menu">Kembali</Typography>
                </Box>
                <Box mb="18px">
                    <Divider className="content-line" />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText onClick={() => setOpenDestinationDestination(true)}>
                                    <Typography className="title-parent">Destination</Typography>
                                </ListItemText>
                                <ArrowForwardIosIcon sx={{ color: "#fff", height: "15px" }} />
                            </ListItemButton>
                        </ListItem>
                        <Divider className="content-line" />
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText onClick={() => setOpenDestinationRute(true)}>
                                    <Typography className="title-parent">Rute</Typography>
                                </ListItemText>
                                <ArrowForwardIosIcon sx={{ color: "#fff", height: "15px" }} />
                            </ListItemButton>
                        </ListItem>
                        <Divider className="content-line" />
                    </List>
                </Box>
                {openDestinationDestination && <DestinationComponent openDestinationDestination={openDestinationDestination} setOpenDestinationDestination={setOpenDestinationDestination}/>}
                {openDestinationRute && <RuteComponent openDestinationRute={openDestinationRute} setOpenDestinationRute={setOpenDestinationRute}/>}
                </Box>
        </Drawer>
    </>
}