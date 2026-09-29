import {
    Box,
    Button,
    Container,
    Divider,
    Typography
} from "@mui/material";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import { MainLayoutSharedProps } from "shared/layout/main-layout";
import BackCircleIcon from "assets/asyst/img/icon/career/back-circle.png";
import profile from "../../../assets/asyst/img/background/career/profile.png";
import job1 from "../../../assets/asyst/img/background/career/job-1.png";
import job2 from "../../../assets/asyst/img/background/career/job-2.png";
import calendar from "../../../assets/asyst/img/icon/career/calendar-icon.png";
import point from "../../../assets/asyst/img/icon/career/point-icon.png";
import reverse from "../../../assets/asyst/img/icon/career/reverse.png";
import { styles } from './styled';

export default function CareerJobExploreComponent({ }: MainLayoutSharedProps) {
    return (
        <Box>
            <Element name="container-job-detail">
                <Container maxWidth="xl">
                    {/* Back Navigation */}
                    <Box sx={styles.backNavContainer}>
                        <Link to="https://www.asyst.co.id/career/">
                            <img src={BackCircleIcon} alt="Back" />
                        </Link>
                        <Box sx={styles.breadcrumb}>
                            {['Company', 'Career', 'UIUX Designs', 'Creative Design Manager'].map((label, idx) => (
                                <Typography key={idx} sx={idx === 0 ? styles.backText : styles.backTitle}>{label}</Typography>
                            ))}
                        </Box>
                    </Box>
                    <Divider />

                    {/* Job Detail */}
                    <Box sx={{ position: 'relative', width: '75%', mx: 'auto' }}>
                        <img
                            src={reverse}
                            alt="Reverse"
                            style={{
                                position: 'absolute',
                                left: '-15%',
                                top: '20%',
                                width: 48,
                                height: 102,
                            }} />
                        <Typography sx={styles.title}>Creative Design Manager</Typography>
                        <Box sx={styles.header}>
                            <Box sx={styles.profile}>
                                <img src={profile} alt="HR Staff" width={48} height={48} />
                                <Box>
                                    <Typography sx={styles.name}>HR Staff Name</Typography>
                                    <Typography sx={styles.department}>HR Department</Typography>
                                </Box>
                            </Box>
                            <Box sx={styles.dateInfo}>
                                <img src={calendar} alt="Calendar" width={36} height={36} />
                                <Typography sx={styles.time}>Oct 11, 2023 , 04:20am</Typography>
                                <img src={point} alt="Point" width={36} height={36} />
                            </Box>
                        </Box>

                        <Typography sx={styles.subtitle}>About the role</Typography>
                        <Typography sx={styles.description}>
                            As Creative Design Manager, you’ll lead our creative team across multiple brands (including Garuda Indonesia). You’ll drive omnichannel solutions that support business growth and elevate the brand. If you love mentoring teams, driving design quality, and working collaboratively—this is your opportunity to shine.
                            <br /><br />
                            Join our award-winning team to lead exceptional design work and empower top-tier designers.
                        </Typography>

                        <Typography sx={styles.subtitle}>In this role, you will:</Typography>
                        <ul style={{ paddingLeft: 20 }}>
                            {roles.map((item, idx) => (
                                <li key={idx}><Typography sx={styles.description}>{item}</Typography></li>
                            ))}
                        </ul>

                        <Typography sx={styles.subtitle}>Minimum requirements for the role:</Typography>
                        <ul style={{ paddingLeft: 20 }}>
                            {requirements.map((item, idx) => (
                                <li key={idx}><Typography sx={styles.description}>{item}</Typography></li>
                            ))}
                        </ul>

                        <Button sx={styles.button}>
                            <Typography sx={styles.buttonText}>Apply now</Typography>
                        </Button>

                        <Typography sx={styles.job}>Related Job Vacancies</Typography>
                        <Box sx={{ display: "flex", gap: 2, pt: 2 }}>
                            {[
                                { img: job1, title: "Chief Technology Officer" },
                                { img: job2, title: "GM Solution Development" }
                            ].map((job, idx) => (
                                <Box
                                    key={idx}
                                    sx={{
                                        flex: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 1
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={job.img}
                                        alt={job.title}
                                        sx={{
                                            width: "100%",
                                            height: "auto",
                                            objectFit: "cover",
                                            borderRadius: 1
                                        }}
                                    />
                                    <Typography sx={styles.position}>{job.title}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Container>
            </Element>
        </Box>
    );
}

const roles = [
    "Lead design of complex projects through development and launch",
    "Guide the team with omnichannel thinking aligned to brand strategy",
    "Collaborate with product & engineering to elevate quality",
    "Ensure designers understand customer segments and touchpoints",
    "Work directly with customers to validate solutions",
    "Champion team culture and global design standards",
    "Inspire and empower designers to deliver their best"
];

const requirements = [
    "Tertiary qualification in Design / Web Design",
    "5–8 years of full-stack design experience",
    "Experience in large-scale commercial projects",
    "Knowledge of English standards, design codes, and best practices",
    "Familiarity with Design Practitioner compliance",
    "Experience in procedural, structured environments",
    "Strong communication and stakeholder management skills"
];