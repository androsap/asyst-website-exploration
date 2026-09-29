import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import './index.scss';
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

interface PopUpLoginProps {
    hide: Function;
}

const PopUpLoginComponent: React.FC<PopUpLoginProps> = ({ }) => {
    const [countdown, setCountdown] = useState(5); // Initial countdown value
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    const matches = useMediaQuery('(max-width:1023px)');

    const handleSendFeedback = () => {
        window.location.href = "mailto:webfeedback@garuda-indonesia.com";
    };

    const handlePrevClick = () => {
        window.location.href = "https://www.garuda-indonesia.com/id/id/index-alternate";
    };

    useEffect(() => {
        if (countdown > 0) {
            console.log(timer)
            // Start the countdown timer
            const newTimer = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);
            setTimer(newTimer);

            // Clear the timer when unmounting
            return () => {
                if (newTimer) {
                    clearInterval(newTimer);
                }
            };
        } else {
            handlePrevClick();
        }
    }, [countdown]);

    return (
        <Grid className={`login-modal-container  ${matches ? "mode-mobile" : ""}`} container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
            <Paper className="login-modal-paper">
                <Grid container>
                    <Grid item xs={12} pt={1} container justifyContent="flex-end">
                        <Typography className="countdown-text">
                            You will be redirected in {countdown} seconds
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} pt={1} container alignItems="center" justifyContent="center">
                        <Typography className="text">
                            Dear our valued customer, thank you for visiting Garuda Indonesia's new homepage, some features will be redirected to the previous version site.
                        </Typography>
                        <Typography className="text" mt={7}>
                            Pelanggan yang kami hormati, terima kasih telah mengunjungi beranda baru Garuda Indonesia, beberapa fitur akan dialihkan ke situs versi sebelumnya.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} columns={matches ? 1 : 2} gap={matches?2:0} pl={5} pr={5} mt={5} container justifyContent={matches?"center":"space-between"}>
                        <Button className={matches?"btn-new-mobile": "btn-new"} onClick={handleSendFeedback}>Give us feedback</Button>
                        <Button className={matches?"btn-old-mobile": "btn-old"} onClick={handlePrevClick}>Go to previous version</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default PopUpLoginComponent;