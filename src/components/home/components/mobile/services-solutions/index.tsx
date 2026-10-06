import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import { ReactComponent as Icon1 } from "assets/asyst/img/icon/services-solutions/icon1.svg"
import { ReactComponent as Icon2 } from "assets/asyst/img/icon/services-solutions/icon2.svg"
import '../../services-solutions/index.scss'
import image from 'assets/asyst/img/background/services-solutions/cargo.webp'
import { ReactComponent as Icon6 } from "assets/asyst/img/icon/services-solutions/icon6.svg"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Divider from '@mui/material/Divider';
import ModalCargoComponent from './component/modal-cargo';
import ModalLoyaltyComponent from './component/modal-loyalty';
import { bgsModal } from "@andrydharmawan/bgs-component";
import Drawer from "@mui/material/Drawer";
import { styles } from "./styled";

export const cargoManagementModal = () => {
    bgsModal({
        isBlur: true,
        className: "customBgsModal",
        render: (e) => {
            return <ModalCargoComponent
                hide={e.hide}
            />
        }
    })
};

export const loyaltyManagementModal = () => {
    bgsModal({
        isBlur: true,
        className: "customBgsModal",
        render: (e) => {
            return <ModalLoyaltyComponent
                hide={e.hide}
            />
        }
    })
};
import { Link } from 'react-router-dom';
import Skeleton from "@mui/material/Skeleton"
import { CardsProductInterface, CardsProductSubSectionInterface, IndustriesDataInterface, cardsBusinessIconsMobile } from "../../services-solutions"
import he from "he"
import { useState } from "react"

interface ServicesSolutionsMobileProps {
    title: string | null;
    loading: boolean;
    activeIndustry: string;
    industriesData: IndustriesDataInterface[] | null;
    activeProducts: CardsProductInterface | undefined | null;
    businessSolutionData: CardsProductSubSectionInterface | null;
    cardsBusinessSolutionData: CardsProductSubSectionInterface[] | null;
    handleIndustryClick: Function;
    activeSolutions: CardsProductInterface | undefined | null;
}
const ServicesSolutionsMobileComponent: React.FC<ServicesSolutionsMobileProps> = ({
    title, loading, industriesData, activeIndustry, handleIndustryClick,
    activeProducts, businessSolutionData, cardsBusinessSolutionData,
    activeSolutions
}) => {    
    const [selectedSolution, setSelectedSolution] = useState('')
    const selectedSolutionData: CardsProductSubSectionInterface | undefined | null = activeSolutions && (activeSolutions.sub_section_1 || []).find(subSection => subSection.title_en === selectedSolution);

    const handleClose = () => {
        setSelectedSolution('')
    }
    
    return (
        <>
            <Box className="solutions-container-mobile">
                <Typography className="title-solutions-mobile">
                    Our Services and Solutions
                </Typography>
                {(title && !loading) ? (
                    <Typography className="highlight-solutions">
                        {title}
                    </Typography>
                ) : (
                    <Skeleton animation="wave" variant="text" width={'50%'} height={50} />
                )}
                <Button sx={{ display: "flex", justifyContent: "flex-start" }} className="btn-solutions custom">
                    <Box sx={{ borderRadius: "100%", mr: "9px", border: `1px solid #123554`, width: "23px", minWidth: "23px", height: "23px", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon2 /></Box>
                    Products and Services
                </Button>
                <Box className="btn-industries" display="flex" justifyContent="space-between">
                    {(industriesData) ? (
                        industriesData.sort((a, b) => {
                            return parseInt(a.sequence) - parseInt(b.sequence);
                        }).map((industry) => (
                            <Button
                                key={industry.title_en}
                                className={`${activeIndustry === industry.title_en ? 'active' : ''}`}
                                onClick={() => handleIndustryClick(industry.title_en)}
                            >
                                {industry.title_en}
                            </Button>
                        ))
                    ) : (
                        [0, 1, 2, 3, 4].map(() => (
                            <>
                                <Button className="btn-industries" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                                    <Skeleton animation="wave" variant="text" width={70} height={20} />
                                </Button>
                            </>
                        ))
                    )}
                </Box>
                <Box className="card-img">
                    <Box className="box-img" sx={{ backgroundImage: `url(${image})` }}>
                        {(activeSolutions) &&
                            activeSolutions.sub_section_1.sort((a: { sequence: string }, b: { sequence: string }) => {
                                return parseInt(a.sequence) - parseInt(b.sequence);
                            }).map((subSection) => (
                                <Box className="box-content" onClick={() => setSelectedSolution(subSection.title_en)}>
                                    <Grid container display="flex" direction="row" justifyContent="space-between">
                                        <Grid className="content">
                                            <Typography className="title">SOLUTION</Typography>
                                            <Typography className="highlight">{subSection.title_en}</Typography>
                                        </Grid>
                                        <Grid item className="icon">
                                            <Icon6 />
                                        </Grid>
                                    </Grid>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
                <Box display="flex" flexDirection="row" gap={1} mb="36px">
                    {(activeProducts) && activeProducts.sub_section_1.sort((a: { sequence: string }, b: { sequence: string }) => {
                        return parseInt(a.sequence) - parseInt(b.sequence);
                    }).map((subSection) => (
                        <Box className="box-product">
                            <Box onClick={() => window.location.assign("https://www.asyst.co.id/our-products/category/anteros")} className="box-title">
                                <Typography className="title">Product</Typography>
                                <Typography className="highlight">{subSection.title_en}</Typography>
                            </Box>
                            <Box className="box-apps">
                                <Typography className="name-apps">{subSection.subtitle_en}</Typography>
                                <KeyboardArrowRightIcon className="arrow-right" />
                            </Box>
                        </Box>

                    ))}
                </Box>
                <Button sx={{ display: "flex", justifyContent: "flex-start" }} className="btn-solutions custom">
                    <Box sx={{ borderRadius: "100%", mr: "9px", border: `1px solid #123554`, width: "23px", minWidth: "23px", height: "23px", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon1 /></Box>
                    Business Solution
                </Button>
                <Box>
                    {(businessSolutionData) ? (
                        <>
                            <Typography className="business-desc"
                                dangerouslySetInnerHTML={{ __html: he.decode(businessSolutionData.description_en) }}
                            />
                            <Button onClick={() => window.location.href = businessSolutionData.link_en} className="btn-more">
                                <Typography className="btn-text-more">More Business Solution</Typography>
                            </Button>
                        </>
                    ) : (
                        <>
                            <Skeleton animation="wave" variant="text" width={400} height={50} />
                            <Skeleton animation="wave" variant="text" width={400} height={100} />
                        </>
                    )}
                    {(cardsBusinessSolutionData) ? (
                        cardsBusinessSolutionData.sort((a, b) => {
                            return parseInt(a.sequence) - parseInt(b.sequence);
                        }).map((card, index) => (
                            <>
                                <Box className="box-solution">
                                    <Box className="box-icon" sx={{ backgroundImage: `url(${cardsBusinessIconsMobile[index]})` }}></Box>
                                    <Link to={card.link_en}>
                                        <Typography className="box-desc">{he.decode(card.title_en)}</Typography>
                                    </Link>
                                </Box>
                                <Divider />
                            </>
                        ))
                    ) : (
                        <>
                            <Box className="box-solution">
                                <Box className="box-icon" sx={{ backgroundImage: `url()` }}></Box>
                                <Link to="https://www.asyst.co.id/our-services/category/infrastructure-and-managed-services"><Typography className="box-desc">Infrastructure & Managed Services</Typography></Link>
                            </Box>
                            <Divider />
                        </>
                    )}
                </Box>
            </Box>
            <Drawer
                anchor="bottom"
                open={(selectedSolution && selectedSolutionData) ? true : false}
                PaperProps={{ sx: { width: "100%", height: "296px", borderRadius: "20px 20px 0px 0px", background: "#F3F3F3" } }}
                onClose={handleClose}
            >
                <Box sx={styles.box}>
                    <Box sx={styles.box.rectangle} />
                </Box>
                <Box sx={styles.boxContent}>
                    <Typography sx={styles.boxContent.title}>{selectedSolutionData?.subtitle_en}</Typography>
                    <Typography sx={styles.boxContent.text}>{selectedSolutionData?.description_en}</Typography>
                    <Box sx={styles.boxContent.boxImageAmala}>
                        <Box sx={styles.boxContent.boxImageAmala.amala1} />
                        <Box sx={styles.boxContent.boxImageAmala.amala2} />
                    </Box>
                </Box>
            </Drawer>
        </>
    )
}

export default ServicesSolutionsMobileComponent