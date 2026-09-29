import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styles } from "./styled";

interface ModalCargoProps {
    hide: Function;
}

const ModalCargoComponent: React.FC<ModalCargoProps> = ({ }) => {
    return (
        <Box sx={styles.paper}>
            <Box sx={styles.paper.box}>
                <Box sx={styles.paper.box.rectangle} />
            </Box>
            <Box sx={styles.paper.boxContent}>
                <Typography sx={styles.paper.boxContent.title}>Loyalty Apps</Typography>
                <Typography sx={styles.paper.boxContent.text}>Loyalty Platform Solution can increase repeat sales for your company by engaging and build strong customer interaction. Create and manage personalized loyalty programs to boost your revenue.</Typography>
                <Box sx={styles.paper.boxContent.boxImage}>
                    <Box sx={styles.paper.boxContent.boxImage.anteros1} />
                    <Box sx={styles.paper.boxContent.boxImage.anteros2} />
                </Box>
            </Box>
        </Box>
    );
};

export default ModalCargoComponent;
