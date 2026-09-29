import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styles } from './styled';
import moment from "moment";
import img1 from 'assets/asyst/img/background/product/anteros/resources-1.png';
import img2 from 'assets/asyst/img/background/product/anteros/resources-2.png';
import arrow from 'assets/asyst/img/background/product/anteros/vector.png';
import pdf from 'assets/asyst/img/background/product/anteros/pdf.png';
import divider from 'assets/asyst/img/background/product/anteros/divider.png';
import { Children, useState, useEffect } from "react";
import { ResourcesModel } from "models/anteros/resources.model";
import ResourcesHelper from 'helper/elea/ResourceHelper';
import { Link } from 'react-router-dom';

type Resources = {
    type: string;
    img: string;
    title: string;
    date: string;
    author: string;
}[]

const resources: Resources = [{
    type: "Loyalty",
    img: img1,
    title: "The inauguration of the BRI Liga 1 Fans Corner and the press release of the LIB Super Apps.",
    date: moment().format("MMMM DD, YYYY"),
    author: "Admin"
}, {
    type: "Expertise",
    img: img2,
    title: "Golden Loyalty Awards | Second place in the Excellence in Management category.",
    date: moment().format("MMMM DD, YYYY"),
    author: "Admin"
}]

export default function ResourcesComponent() {
    const [data, setData] = useState<ResourcesModel>({} as ResourcesModel)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getData()
        console.log(data, loading)
    }, [])

    const getData = () => {
        setLoading(true)
        ResourcesHelper.get(({ status, data }) => {
            setLoading(false)
            if (status) setData(data.data)
        })
    }

    const downloadBrochure = () => {
        fetch(data.product.section.file, {
            // method: 'GET',
            // mode: 'no-cors'
        }).then(response => {
            response.blob().then(blob => {
                let url = window.URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.href = url;
                a.download = 'anteros.pdf';
                a.click();
            });
        });
        window.open(data.product.section.file, '_blank');
    }

    return (
        <>
            <Typography sx={styles.title}>Resources</Typography>
            <Box display="flex" flexDirection="row" gap={3}>
                {Children.toArray(resources.map(({ type, img, title, date, author }) =>
                    <Link to="https://www.asyst.co.id/news" style={styles.boxImages}>
                        <Box>
                            <img src={img} style={{
                                backgroundSize: 'cover',
                                width: '100%',
                                height: 'auto',
                                textAlign: 'center',
                                borderRadius: '20px',
                            }}></img>
                            <Box sx={styles.tagsLabel}>
                                <Typography variant="subtitle2">{type}</Typography>
                            </Box>
                            <Box sx={{ height: '100px' }}>
                                <Typography sx={styles.titleNews} variant="subtitle2">{title}</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between" sx={{ mt: "19px" }}>
                                <Typography sx={styles.footerNews}>{date}</Typography>
                                <Typography sx={styles.footerNews}>{author}</Typography>
                            </Box>
                        </Box>
                    </Link>
                ))}
                <Box sx={styles.downloadBox}>
                    <Box sx={styles.vectorBox}><img src={arrow} style={{ marginLeft: '35px', marginTop: '25px' }}></img></Box>
                    <Box sx={{ padding: '30px' }}>
                        <Typography sx={styles.text1}>Download Free {data?.product?.product_name} Document</Typography>
                        <Box display='flex' flexDirection='row' gap='10px' paddingTop='20px' onClick={() => downloadBrochure()}>
                            <img src={pdf} style={{ width: '24px', height: '24px', cursor: 'pointer' }}></img>
                            <Typography sx={styles.text2}><u>{data?.product?.product_name} product information.pdf</u></Typography>
                        </Box>
                        <img src={divider} style={{ width: '332px', height: '1px', paddingBottom: '15px', paddingTop: '30px' }}></img>
                        <Typography sx={styles.text1}>Looking for another Asyst media resources?</Typography>
                        <Link to="https://www.asyst.co.id/news"><Typography sx={styles.text2} style={{ paddingTop: '30px' }}><u>View all media resources</u></Typography></Link>
                    </Box>
                </Box>
            </Box>
        </>
    )
}