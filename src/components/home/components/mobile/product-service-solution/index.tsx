import Box from "@mui/material/Box"
import "./index.scss"
import Typography from "@mui/material/Typography"
import serviceIcon from "assets/asyst/img/icon/product-service-solution/service-icon.svg"
import solutionIcon from "assets/asyst/img/icon/product-service-solution/solution-icon.svg"
import expertiseIcon from "assets/asyst/img/icon/product-service-solution/expertise-icon.svg"
import newsIcon from "assets/asyst/img/icon/product-service-solution/news-icon.svg"
import companyIcon from "assets/asyst/img/icon/product-service-solution/company-icon.svg"
import Link from "@mui/material/Link"

export default function ServiceProductSolutionComponent() {
    return <>
        <Box className="service-product-solution" sx={{ mb: "-50px" }}>
            <Typography className="title-icons">Our Services, Products and IT Solutions</Typography>
            <Box className="card" gap={1}>
                <Link href="https://www.asyst.co.id/our-products">
                    <Box className="card-content" display="flex" flexDirection="column" justifyContent="center" gap={.5}>
                        <Box><center><img src={serviceIcon}></img></center></Box>
                        <Typography sx={{ textAlign: "center" }} className="label">Services</Typography>
                    </Box>
                </Link>
                <Link href="https://www.asyst.co.id/our-services">
                    <Box className="card-content" display="flex" flexDirection="column" justifyContent="center" gap={.5}>
                        <Box><center><img src={solutionIcon}></img></center></Box>
                        <Typography sx={{ textAlign: "center" }} className="label">Solutions</Typography>
                    </Box>
                </Link>
                <Link href="https://www.asyst.co.id">
                    <Box className="card-content" display="flex" flexDirection="column" justifyContent="center" gap={.5}>
                        <Box><center><img src={expertiseIcon}></img></center></Box>
                        <Typography sx={{ textAlign: "center" }} className="label">Expertise</Typography>
                    </Box>
                </Link>
                <Link href="https://www.asyst.co.id/news">
                    <Box className="card-content" display="flex" flexDirection="column" justifyContent="center" gap={.5}>
                        <Box><center><img src={newsIcon}></img></center></Box>
                        <Typography sx={{ textAlign: "center" }} className="label">News</Typography>
                    </Box>
                </Link>
                <Link href="https://www.asyst.co.id/about-us">
                    <Box className="card-content" display="flex" flexDirection="column" justifyContent="center" gap={.5}>
                        <Box><center><img src={companyIcon}></img></center></Box>
                        <Typography sx={{ textAlign: "center" }} className="label">Company</Typography>
                    </Box>
                </Link>
            </Box>
            {/* <Grid></Grid> */}
        </Box>
    </>
}