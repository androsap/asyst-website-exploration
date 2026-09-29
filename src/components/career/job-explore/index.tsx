import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { MainLayoutSharedProps } from "shared/layout/main-layout";
import BackCircleIcon from 'assets/asyst/img/icon/career/back-circle.png';
import { Element } from 'react-scroll';
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField';
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import arrow from '../../../assets/asyst/img/icon/career/arrow-icon.png';
import { styles } from "./styled";

const jobGroups = [
    {
        title: 'Backend Developer', jobs: [
            { job: 'Backend Developer C#', desc: 'Greetings, developers! Currently hiring a "Project Manager". Check requirements at Aero Systems Indonesia.' },
            { job: 'Backend Developer Java', desc: 'Greetings, developers! Currently hiring a "Project Manager". Check requirements at Aero Systems Indonesia.' },
            { job: 'Backend Developer GraphQL', desc: 'Greetings, developers! Currently hiring a "Project Manager". Check requirements at Aero Systems Indonesia.' }
        ]
    },
    {
        title: 'Front End Developer', jobs: [
            { job: 'Front End Engineer (React)', desc: 'Greetings, developers! Currently hiring a "Project Manager". Check requirements at Aero Systems Indonesia.' },
            { job: 'Senior Front End Developer', desc: 'Greetings, developers! Currently hiring a "Project Manager". Check requirements at Aero Systems Indonesia.' },
            { job: 'Front End Manager', desc: 'Greetings, developers! Currently hiring a "Project Manager". Check requirements at Aero Systems Indonesia.' }
        ]
    },
    {
        title: 'Design', jobs: [
            { job: 'UX Researcher', desc: 'Greetings, developers! Currently hiring a "Project Manager". Check requirements at Aero Systems Indonesia.' },
            { job: 'UX Designer', desc: 'Greetings, developers! Currently hiring a "Project Manager". Check requirements at Aero Systems Indonesia.' },
            { job: 'UI Designer', desc: 'Greetings, developers! Currently hiring a "Project Manager". Check requirements at Aero Systems Indonesia.' },
            { job: 'Design Engineer', desc: 'Greetings, developers! Currently hiring a "Project Manager". Check requirements at Aero Systems Indonesia.' },
            { job: 'Design Manager', desc: 'Greetings, developers! Currently hiring a "Project Manager". Check requirements at Aero Systems Indonesia.' }
        ]
    },
    {
        title: 'Analyst Solution', jobs: [
            { job: 'Business Analyst', desc: 'Greetings, developers! Currently hiring a "Project Manager". Check requirements at Aero Systems Indonesia.' },
            { job: 'System Analyst', desc: 'Greetings, developers! Currently hiring a "Project Manager". Check requirements at Aero Systems Indonesia.' },
            { job: 'Data Analyst', desc: 'Greetings, developers! Currently hiring a "Project Manager". Check requirements at Aero Systems Indonesia.' },
            { job: 'Analyst Solution Manager', desc: 'Greetings, developers! Currently hiring a "Project Manager". Check requirements at Aero Systems Indonesia.' }
        ]
    },
];

const departments = [
    { value: "backend-developer", label: "Backend Developer" },
    { value: "frontend-developer", label: "Front End Developer" },
    { value: "design", label: "Design" },
    { value: "analyst-solution", label: "Analyst Solution" }
];

const types = [
    { value: 'trainee', label: 'Trainee' },
    { value: 'internship', label: 'Internship' },
    { value: 'onsite', label: 'Onsite' },
];

export default function CareerJobExploreComponent({ }: MainLayoutSharedProps) {
    const [search, setSearch] = useState('');
    const [department, setDepartment] = useState('');
    const [type, setType] = useState('');

    // Filtered jobGroups based on search & department (type currently no effect)
    const filteredJobGroups = jobGroups
        .map(group => {
            // If department filter active, skip groups that don't match exactly group.title === selected department label
            if (department && group.title !== departments.find(d => d.value === department)?.label) {
                return null;
            }

            // Filter jobs by search keyword (in job title)
            const filteredJobs = group.jobs.filter(({ job }) =>
                job.toLowerCase().includes(search.toLowerCase())
            );

            // Only return group if it has filtered jobs
            if (filteredJobs.length === 0) {
                return null;
            }

            return {
                ...group,
                jobs: filteredJobs,
            };
        })
        .filter(Boolean); // remove nulls

    return (
        <Box>
            <Element name="container-job-explore">
                <Container maxWidth="xl">
                    <Box sx={styles.backNavContainer}>
                        <Link to="https://www.asyst.co.id/career/">
                            <img src={BackCircleIcon} alt="Back" />
                        </Link>
                        <Typography sx={styles.backNavText}>Company</Typography>
                        <Typography sx={styles.backNavTitle}>Career</Typography>
                        <Typography sx={styles.backNavTitle}>Job Vacancies</Typography>
                    </Box>

                    <Typography sx={styles.title}>Aero Systems Indonesia Job Vacancies</Typography>

                    <Box sx={{ ...styles.headerBox, display: 'flex', gap: 1 }}>
                        {/* Search Field - 45% */}
                        <Box sx={{ width: '45%' }}>
                            <Typography sx={styles.header}>Search opening positions</Typography>
                            <FormControl fullWidth>
                                <TextField
                                    placeholder="Example: UIUX"
                                    variant="outlined"
                                    size="small"
                                    sx={{ backgroundColor: '#FFF', borderRadius: '8px' }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon color="action" />
                                            </InputAdornment>
                                        ),
                                    }}
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </FormControl>
                        </Box>

                        {/* Department Filter - 25% */}
                        <Box sx={{ width: '25%' }}>
                            <Typography sx={styles.header}>Filter by</Typography>
                            <FormControl fullWidth>
                                <TextField
                                    select
                                    variant="outlined"
                                    size="small"
                                    sx={{ backgroundColor: '#FFF', borderRadius: '8px' }}
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                >
                                    <MenuItem value="">All Departments</MenuItem>
                                    {departments.map(({ value, label }) => (
                                        <MenuItem key={value} value={value}>{label}</MenuItem>
                                    ))}
                                </TextField>
                            </FormControl>
                        </Box>

                        {/* Type Filter - 25% */}
                        <Box sx={{ width: '25%', alignSelf: 'flex-end' }}>
                            <FormControl fullWidth>
                                <TextField
                                    select
                                    variant="outlined"
                                    size="small"
                                    sx={{ backgroundColor: '#FFF', borderRadius: '8px' }}
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <MenuItem value="">All Types</MenuItem>
                                    {types.map(({ value, label }) => (
                                        <MenuItem key={value} value={value}>{label}</MenuItem>
                                    ))}
                                </TextField>
                            </FormControl>
                        </Box>
                    </Box>

                    {filteredJobGroups.length === 0 && (
                        <Typography sx={{ mt: 4, textAlign: 'center' }}>No job vacancies found.</Typography>
                    )}

                    {filteredJobGroups.map(group => (
                        <Box key={group?.title}>
                            <Typography sx={styles.position}>{group?.title}</Typography>
                            {group?.jobs.map(({ job, desc }, index) => (
                                <Box sx={styles.mainBox} key={`${group?.title}-${index}`}>
                                    <Box sx={styles.boxContent}>
                                        <Box sx={{ flex: 1 }}>
                                            <Typography sx={styles.job}>{job}</Typography>
                                        </Box>
                                        <Box sx={{ flex: 2 }}>
                                            <Typography sx={styles.desc}>{desc}</Typography>
                                        </Box>
                                        <img style={{ width: '24px', height: '24px' }} src={arrow} alt="Arrow" />
                                    </Box>
                                    <Divider />
                                </Box>
                            ))}
                        </Box>
                    ))}

                    <Box display='flex' justifyContent='center'>
                        <Button sx={styles.button}>Load more</Button>
                    </Box>
                </Container>
            </Element>
        </Box>
    );
}