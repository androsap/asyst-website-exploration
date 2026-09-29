import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import icon from "../../../../assets/asyst/img/icon/career/join-icon.png";
import { styles } from "./styled";

const departments = [
    "UIUX Design",
    "Software Developer",
    "IT Business Analyst",
    "Sales & Marketing",
    "IT Infrastructure",
    "Project Manager",
    "Internship",
    "Human Resources",
];

const DepartmentCard = ({ name }: { name: string }) => (
    <Box sx={styles.mainBox}>
        <Box display="flex" flexDirection="column" padding="24px" gap="24px">
            <img width="65px" height="65px" src={icon} />
            <Box display="flex" justifyContent="space-between">
                <Typography sx={styles.text}>{name}</Typography>
                <KeyboardArrowRightIcon sx={{ color: "#006CAE" }} />
            </Box>
        </Box>
    </Box>
);

export default function DepartmentComponent() {
    return (
        <>
            <Typography sx={styles.title}>
                Join our departments and become a team
            </Typography>
            <Box display="flex" flexDirection="column" gap="32px">
                {[0, 1].map((rowIndex) => (
                    <Box key={rowIndex} display="flex" flexDirection="row" gap="32px">
                        {departments
                            .slice(rowIndex * 4, rowIndex * 4 + 4)
                            .map((name, index) => (
                                <DepartmentCard key={index} name={name} />
                            ))}
                    </Box>
                ))}
            </Box>
        </>
    );
}
