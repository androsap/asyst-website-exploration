import './index.scss'
import Box from "@mui/material/Box";
import { styles } from "./styled";
import logo from 'assets/asyst/img/icon/industry/airline-airport/logo-asyst.webp';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import FormControl from "@mui/material/FormControl";
import { Children, useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import IndustryOverviewHelper from 'helper/industry/IndustryOverviewHelper';

interface OverviewEachIndustrySection {
    industries_code: string;
    title_id: string;
    title_en: string;
    subtitle_id: string;
    subtitle_en: string;
    link1: string;
    image1: string;
    sequence: string;
    sub_section_1: SubSection[];
}

interface SubSection {
    title_id: string;
    title_en: string;
    link1: string;
    sequence: string;
    image1: string;
}

export default function OverviewEachIndustryComponent() {
    const [loadingData, setLoadingData] = useState<boolean>(false);
    const [data, setData] = useState<OverviewEachIndustrySection[]>([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        setLoadingData(true);
        IndustryOverviewHelper.getEachIndustries(({ status, data }) => {
            setLoadingData(false);
            if (status && data?.data?.industries?.section) {
                setData(data?.data?.industries?.section);
            }
        });
    };

    const renderSkeleton = () => (
        <Box sx={{ marginTop: "155px" }}>
            <Skeleton variant="text" width="20%" height={40} />
            <Box display="flex" flexDirection="row" justifyContent="space-between" sx={{ marginBottom: "35px" }}>
                <Skeleton variant="text" width="30%" height={30} />
                <Skeleton variant="text" width="20%" height={30} />
            </Box>
            <Skeleton variant="rectangular" width="100%" height={200} />
            <Box display="flex" flexDirection="row" justifyContent="space-between" sx={{ marginTop: "21px", marginBottom: "42px", gap: "96px" }}>
                <Skeleton variant="text" width="40%" height={30} />
                <Skeleton variant="text" width="50%" height={30} />
            </Box>
            {[...Array(3)].map((_, index) => (
                <Box key={index}>
                    <Box display="flex" flexDirection="row" justifyContent="space-between">
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="text" width="50%" height={30} />
                        <Skeleton variant="rectangular" width={20} height={20} />
                    </Box>
                    <Divider sx={{ mt: "12px", mb: "12px" }} />
                </Box>
            ))}
        </Box>
    );

    const renderSubSections = (subSections: SubSection[]) => (
        subSections.map((subSection, index) => (
            <Box key={index}>
                <Box display="flex" flexDirection="row" justifyContent="space-between">
                    <Box sx={{ mr: "2%" }}><img src={subSection.image1} alt={subSection.title_en} className="logo" /></Box>
                    <Typography sx={styles.bodyText}>{subSection.title_en}</Typography>
                    <ArrowOutwardIcon sx={styles.outwardIcon} />
                </Box>
                <Divider sx={{ mt: "12px", mb: "12px" }} />
            </Box>
        ))
    );

    const renderIndustries = () => (
        data.map((industry, index) => (
            <Box key={index} sx={{ marginTop: index > 0 ? "155px" : "0" }}>
                <Typography sx={styles.industryHeading}>Industry</Typography>
                <Box display="flex" flexDirection="row" justifyContent="space-between" sx={{ marginBottom: "35px" }}>
                    <Typography sx={styles.industryHeading2}>{industry.industries_code}</Typography>
                    <Typography sx={styles.industryHeading}>View Products</Typography>
                </Box>
                <Divider className="bold-left" />
                <Divider className="thin-right" variant="middle" />
                <Box className="box-main-image" sx={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.21) 100%), url(${industry.image1})` }}>
                    <img src={industry.image1} alt={industry.industries_code} className='main-image' />
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="space-between" sx={{ marginTop: "21px", marginBottom: "42px", gap: "96px" }}>
                    <Typography sx={styles.subheading}>{industry.title_en}</Typography>
                    <Typography sx={styles.subheading2}>{industry.subtitle_en}</Typography>
                </Box>
                {renderSubSections(industry.sub_section_1)}
            </Box>
        ))
    );

    return (
        <Box className="airline-airport">
            <Box sx={styles.formDemo}>
                <Box sx={{ maxWidth: "367px" }}>
                    <Paper sx={styles.paper}>
                        <Box sx={styles.paper.heading}>
                            <img src={logo} style={styles.paper.logo} alt="Logo" />
                            <Box>
                                <Typography sx={styles.paper.heading.label}>We're here to give industry solutions</Typography>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <FormControl sx={styles.paper.form}>
                                <TextField label="E-mail address" variant="filled" />
                                <TextField label="Mobile phone number" variant="outlined" />
                                <TextField select label="Select industry sectors" variant="outlined">
                                    {Children.toArray(data.map(({ industries_code }) =>
                                        <MenuItem key={industries_code} value={industries_code}>{industries_code}</MenuItem>
                                    ))}
                                </TextField>
                                <FormControlLabel control={<Checkbox />} label="Our staff will contact you regarding your solutions request" />
                                <Button variant="contained" sx={styles.paper.button}>Request Free Demo</Button>
                            </FormControl>
                        </Box>
                    </Paper>
                </Box>
                <Box sx={{ width: "100%" }}>
                    {loadingData ? [...Array(2)].map((_,) => renderSkeleton()) : renderIndustries()}
                </Box>
            </Box>
        </Box>
    );
}
