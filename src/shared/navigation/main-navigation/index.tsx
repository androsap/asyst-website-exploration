import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logoAsyst from "assets/asyst/img/logo/asyst-logo-white.png";
import logoAsystColor from "assets/asyst/img/logo/asyst-logo-color.png";
// import logo from "assets/img/logo/logo.svg";
// import flagIDN from "assets/img/icon/flag-IDN.svg";
// import { ReactComponent as SearchIcon } from "assets/img/icon/search.svg";
// import { ReactComponent as GarudaMilesIcon } from "assets/img/icon/garuda-miles.svg";
import { ReactComponent as UserIcon } from "assets/img/icon/user.svg";
// import { ReactComponent as CartIcon } from "assets/img/icon/cart.svg";
import { ReactComponent as LogoutIcon } from "assets/img/icon/logout.svg";
import "./index.scss";
// import { MenuConst1, MenuConst2 } from "consts/menu.const";
import { MenuConst1, MenuConst2 } from "consts/menu.const";
// import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import SubmenuNavigationShared from "./components/submenu";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { useRouter } from "@andrydharmawan/bgs-component";
import AuthenticationModel from "models/authentication.model";
import AuthenticationDixie from "dixies/authentication.dixie";
import { snackbar } from "lib";
// import PopUpLoginComponent from 'components/home/components/pop-up-login';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ReactComponent as GAIcon } from "assets/img/icon/ga-logo.svg";
import { ReactComponent as GAWhiteIcon } from "assets/img/icon/ga-logo-white.svg";
// import { ReactComponent as SearchIcon } from "assets/img/icon/search.svg";
import useMediaQuery from '@mui/material/useMediaQuery';
import NavigationMobileComponent from "./components/navigation-mobile";
import Link from '@mui/material/Link';
// import { useNavigate } from "react-router-dom";

export interface MainNavigationSharedProps {
    defaultNav?: boolean;
    blurNav?: boolean;
}

function MainNavigationShared({ defaultNav = false, blurNav = false }: MainNavigationSharedProps) {
    const matches = useMediaQuery('(max-width:1023px)');
    const router = useRouter();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [session, setSession] = React.useState<AuthenticationModel | null>(null)
    const [hover, setHover] = React.useState<string>("");
    const [showLogout, setShowLogout] = React.useState<boolean>(false);
    // const navigate = useNavigate();


    const isScroll = useScrollTrigger({
        disableHysteresis: true,
        threshold: window.innerHeight - 10,
        target: undefined,
    });

    const isScrollZero = !defaultNav ? useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
        target: undefined,
    }) : true;

    const isScrollZero2 = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
        target: undefined,
    });

    React.useEffect(() => {
        AuthenticationDixie.get().then(data => data && setSession(data))
    }, [])

    const logout = async () => {
        await AuthenticationDixie.remove()
        snackbar({ message: "Logout Success", severity: "success" })
        router.push("/login")
    }

    // const handleClickGarudaShop = () => {
    //     window.location.href = "https://garudashop.garuda-indonesia.com/?_ga=2.137843248.1470265293.1692069906-9995656.1692069905"
    // }

    // const popUpLoginModal = () => {
    //     bgsModal({
    //         render: ({ hide }) => <PopUpLoginComponent
    //             hide={hide}
    //         />
    //     })
    // };

    const trigger = useScrollTrigger({
        target: undefined,
    });

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Slide appear={false} direction="down" in={!isScroll || !trigger}>
                <AppBar className={`app-bar-nav ${!!hover && "hover"}  ${blurNav ? "blur" : ""} ${isScrollZero ? "active" : ""}`} elevation={defaultNav ? (isScrollZero2 ? 4 : 0) : (isScrollZero ? 4 : 0)}>
                    <Container maxWidth="xl" className="menu-nav-container">
                        <Toolbar disableGutters sx={matches ? { display: "flex", justifyContent: "space-between", alignItems: "center" } : {}}>
                            <Box sx={{ display: "flex" }}>
                                {matches && <NavigationMobileComponent />}
                            </Box>
                            <Box className="main-logo" onClick={() => router.push("/")} component="img" src={isScrollZero && !hover ? logoAsystColor : isScrollZero && hover ? logoAsystColor : hover ? logoAsystColor : logoAsyst} sx={{ textAlign: "center", cursor: "pointer" }} />
                            {false && <Box className="app-bar-logo" onClick={() => router.push("/")}>{isScrollZero && !hover ? <GAIcon /> : <GAWhiteIcon />}</Box>}

                            {!matches && <Box sx={{ flexGrow: 1, display: "flex", gap: .3, alignItems: "center", height: "85px", justifyContent: "flex-end" }} className="menu-bar">
                                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "flex-start" }} className="menu-list">
                                    <Button onClick={() => router.push("/")}>Home</Button>
                                    {React.Children.toArray(MenuConst1.map(({ label, to, menuCode }) =>
                                        <Button onClick={() =>
                                            setHover(hover ? "" : menuCode)}
                                            onMouseEnter={() => setHover(menuCode)} 
                                            onMouseLeave={() => setHover("")}
                                            className={`${!to && hover ? "btn-submenu" : ""} ${menuCode === hover ? "menu-hover" : ""}`}
                                            // onMouseEnter={() => setHover(!to ? menuCode : "")}
                                            // onMouseLeave={() => setHover("")}
                                            sx={{
                                                my: 2, color: 'white', display: 'flex', alignItems: "center",
                                                "& svg.arrow": {
                                                    transitionDuration: "10ms",
                                                    WebkitTransitionDuration: "10ms",
                                                    transform: "rotate(-180deg)",
                                                    transition: "transform .3s ease",
                                                },
                                                "& svg.arrow-active": {
                                                    transform: "translateZ(0)",
                                                },
                                            }}>
                                            {label} {!to && <><ExpandLessRoundedIcon className={`arrow ${menuCode === hover ? "arrow-active" : ""}`} /></>}
                                        </Button>
                                    ))}
            
                                    <Button  onClick={() => window.location.reload()}>Expertise</Button>
                                    <Button onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = 'https://www.asyst.co.id/news';
                                    }}>News</Button>
                                    {React.Children.toArray(MenuConst2.map(({ label, to, menuCode }) =>
                                        <Button onClick={() =>
                                            setHover(hover ? "" : menuCode)}
                                            onMouseEnter={() => setHover(menuCode)} 
                                            onMouseLeave={() => setHover("")}
                                            className={`${!to && hover ? "btn-submenu" : ""} ${menuCode === hover ? "menu-hover" : ""}`}
                                            // onMouseEnter={() => setHover(!to ? menuCode : "")}
                                            // onMouseLeave={() => setHover("")}
                                            sx={{
                                                my: 2, color: 'white', display: 'flex', alignItems: "center",
                                                "& svg.arrow": {
                                                    transitionDuration: "10ms",
                                                    WebkitTransitionDuration: "10ms",
                                                    transform: "rotate(-180deg)",
                                                    transition: "transform .3s ease",
                                                },
                                                "& svg.arrow-active": {
                                                    transform: "translateZ(0)",
                                                },
                                            }}>
                                            {label} {!to && <><ExpandLessRoundedIcon className={`arrow ${menuCode === hover ? "arrow-active" : ""}`} /></>}
                                        </Button>))}
                                    {/* temporarily hide search button */}
                                    {/* <Button className={`${hover ? "btn-submenu" : ""} ${"cari" === hover ? "menu-hover" : ""}`} sx={{ minWidth: "90px !important" }} color="inherit" variant="text" onClick={() => setHover(hover ? "" : "cari")} onMouseEnter={() => setHover("cari")}
                                        onMouseLeave={() => setHover("")}>
                                        <SearchIcon style={{ marginRight: "7px" }} /> Cari
                                    </Button> */}

                                    <Menu
                                        MenuListProps={{ sx: { width: "120px" } }}
                                        anchorEl={anchorEl}
                                        open={!!anchorEl}
                                        PaperProps={{ sx: { bgcolor: "#002561" } }}
                                        onClose={handleClose}
                                    >
                                        <MenuItem sx={{ color: "#fff" }} onClick={handleClose}>Indonesian</MenuItem>
                                        <MenuItem sx={{ color: "#fff" }} onClick={() => window.location.href = "https://www.garuda-indonesia.com/id/en/index"}>English</MenuItem>
                                    </Menu>
                                </Box>
                                {/*<Button variant="text" color="inherit" sx={{ pt: "10px" }} onClick={handleClickGarudaShop}>
                                    <Box component="img" src={isScrollZero && !hover ? GarudaShopIcon : GarudaShopWhiteIcon} height="21px" />
                                    {/* <GarudaShopIcon /> */}
                                {/* <Box sx={{ borderRadius: "100%", mr: "9px", border: `1px solid #${isScrollZero && !hover ? "0069B3" : "fff"}`, width: "36px", minWidth: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}><CartIcon /></Box>
                                    GarudaShop
                                </Button>
                                 <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "flex-end" }} className="menu-list">
                                    <Button sx={{ minWidth: "90px !important", position: "relative" }} className={`${hover ? "btn-submenu" : ""} ${"garudamiles" === hover ? "menu-hover" : ""}`} color="inherit" variant="text" onClick={() => setHover(hover ? "" : "garudamiles")} onMouseEnter={() => setHover("garudamiles")}
                                        onMouseLeave={() => setHover("")}>
                                        <Box component="img" src={isScrollZero && !hover ? GarudaMilesIcon : GarudaMilesWhiteIcon} height="15px" />
                                        <Box className={`rounded-btn ${isScrollZero && !hover ? "zero" : ""}`} sx={{ borderRadius: "100%", mr: "9px", width: "36px", minWidth: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}><GarudaMilesIcon /></Box> GarudaMiles
                                    </Button>
                                </Box> */}
                                {session?.login.data.username
                                    ? <>
                                        <Button variant="text" onMouseEnter={() => setShowLogout(true)} onMouseLeave={() => setShowLogout(false)} sx={{ whiteSpace: "nowrap" }} color="inherit" onClick={() => !session?.login.data.username && router.push("/login")}>
                                            <Box display="flex" flexDirection="column" position="relative" overflow="hidden" minWidth="130px" onClick={logout}>
                                                <Slide direction="down" in={!showLogout} unmountOnExit>
                                                    <Box display="flex" alignItems="center">
                                                        <Box sx={{ borderRadius: "100%", mr: "9px", border: `1px solid #${isScrollZero && !hover ? "0069B3" : "fff"}`, width: "28px", minWidth: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center" }}><UserIcon /></Box>
                                                        {session?.login.data.username}
                                                    </Box>
                                                </Slide>
                                                <Slide direction="up" in={showLogout} unmountOnExit>
                                                    <Box display="flex" alignItems="center">
                                                        <Box sx={{ borderRadius: "100%", mr: "9px", border: `1px solid #${isScrollZero && !hover ? "0069B3" : "fff"}`, width: "36px", minWidth: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}><LogoutIcon /></Box>
                                                        Logout
                                                    </Box>
                                                </Slide>
                                            </Box>
                                        </Button>
                                    </>
                                    : <>
                                        {/* <Button variant="text" sx={{ whiteSpace: "nowrap" }} color="inherit" onClick={() => !session?.login.data.username && router.push("/login")}>
                                            <Box sx={{ borderRadius: "100%", mr: "9px", border: `1px solid #${isScrollZero && !hover ? "0069B3" : "fff"}`, width: "36px", minWidth: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}><UserIcon /></Box>
                                            Daftar atau Masuk
                                        </Button> */}

                                        {/* <SearchIcon /> */}
                                        {/* <Button variant="text" color="inherit" sx={{ paddingLeft: "10px", maxWidth: "90px" }} onClick={event => setAnchorEl(event.currentTarget)}>
                                            <Box sx={{ bgcolor: "#fff", borderRadius: "100%", width: "18px", height: "18px", mr: .5, border: `1px solid #${isScrollZero && !hover ? "0069B3" : "fff"}` }}><img src={flagIDN} alt="IDN" width="18px" /></Box> ID <ExpandMoreRoundedIcon sx={{ ml: .1 }} />
                                        </Button> */}
                                        <Link href='https://www.asyst.co.id/contact-us'>
                                            <Button className={isScrollZero && !hover ? "btn-contact-us-hover" : isScrollZero && hover ? "btn-contact-us-hover" : hover ? "btn-contact-us-hover" : "btn-contact-us"} variant="text" sx={{ whiteSpace: "nowrap" }} color="inherit">
                                                {/* <Box sx={{ borderRadius: "100%", mr: "9px", border: `1px solid #${isScrollZero && !hover ? "0069B3" : "fff"}`, width: "28px", minWidth: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center" }}></Box> */}
                                                Contact Us
                                            </Button>
                                        </Link>
                                    </>}
                            </Box>}
                            {matches && <IconButton
                                size="medium"
                                color="inherit"
                            >
                                {/* <UserIcon /> */}
                            </IconButton>}
                        </Toolbar>
                    </Container>
                    <SubmenuNavigationShared menuCode={hover} setHover={setHover} />
                </AppBar>
            </Slide >
        </>
    );
}
export default MainNavigationShared;