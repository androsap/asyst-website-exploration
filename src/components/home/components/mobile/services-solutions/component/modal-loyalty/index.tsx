import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styles } from "./styled";

interface ModalLoyaltyProps {
    hide: Function;
}

const ModalLoyaltyComponent: React.FC<ModalLoyaltyProps> = ({ }) => {
    return (
        <Box sx={styles.paper}>
            <Box sx={styles.paper.box}>
                <Box sx={styles.paper.box.rectangle} />
            </Box>
            <Box sx={styles.paper.boxContent}>
                <Typography sx={styles.paper.boxContent.title}>Logistic Apps</Typography>
                <Typography sx={styles.paper.boxContent.text}>Cargo Management is a robust cargo platform and empowers freight forwarders through technology and allows them to evolve into the digital forwarders that the future needs.</Typography>
                <Box sx={styles.paper.boxContent.boxImage}>
                    <Box sx={styles.paper.boxContent.boxImage.anteros1} />
                    <Box sx={styles.paper.boxContent.boxImage.anteros2} />
                </Box>
            </Box>
        </Box>
    );
};

export default ModalLoyaltyComponent;
