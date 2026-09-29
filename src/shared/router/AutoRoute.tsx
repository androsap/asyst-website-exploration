import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import { Suspense } from "react";
import Box from "@mui/material/Box";
// import { ReactComponent as GarudaIcon } from "assets/img/icon/garuda.svg";

interface AutoRouteProps {
    Component: React.LazyExoticComponent<() => JSX.Element>;
}

export default function AutoRoute({ Component }: AutoRouteProps) {
    try {
        return <Suspense fallback={<Backdrop open sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
            <Box height="100vh" width="100%" display="flex" alignItems="center" justifyContent="center" position="relative">
                <CircularProgress color="info" size={60} />
                {/* <GarudaIcon style={{ height: 18, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} /> */}
            </Box>
        </Backdrop>}>
            <Component />
        </Suspense>
    } catch (error) {
        return <>Error</>
    }
}
