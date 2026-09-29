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
import PerjalananConstProps from 'consts/main-navigation/trip.const';
import { Children } from 'react';

interface PerjalananSebelumComponentProps {
    openArmada: boolean;
    setOpenArmada: any;
}

export default function PerjalananArmadaComponent({ openArmada, setOpenArmada }: PerjalananSebelumComponentProps) {

    return <>
        <Drawer
            anchor="right"
            open={openArmada}
            PaperProps={{ sx: { width: "100%" } }}
            // onClose={() => setOpenArmada(false)}
            transitionDuration={3000}
        >
            <Box className="drawer-menu-content">
                <Box className="header-menu" >
                    <IconButton color="inherit" onClick={() => setOpenArmada(false)} ><ArrowBackIosIcon sx={{ color: "#fff", height: "15px", ml:"-5px" }} /></IconButton>
                    <Typography className="title-menu">Kembali</Typography>
                </Box>
                <Box mb="18px">
                    <Divider className="content-line" />
                    {Children.toArray(PerjalananConstProps.map(({ subMenu, categoryCode }) =>
                        <List>
                         {categoryCode === "ARMADA" && Children.toArray(subMenu.map(({ label, action }) => <List>
                            <ListItem disablePadding>
                            <ArrowForwardIosIcon sx={{ color: "#fff", height: "12px", marginLeft: "8px" }} />
                                <ListItemButton>
                                    <ListItemText> 
                                    <Link to={action}><Typography className="title-link">{label}</Typography></Link>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <Divider className="content-line" />
                        </List>
                        ))}
                        </List>))}
                </Box>
            </Box>
        </Drawer>
    </>
}