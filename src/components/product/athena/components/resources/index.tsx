import { Typography } from "components/ui/typography";
import { boxImagesStyle, styles, vectorBoxStyle } from './styled';

import img1 from 'assets/asyst/img/background/product/amala/resources-1.webp';
import img2 from 'assets/asyst/img/background/product/amala/resources-2.webp';
import arrow from 'assets/asyst/img/background/product/amala/vector.webp';
import pdf from 'assets/asyst/img/background/product/amala/pdf.webp';
import divider from 'assets/asyst/img/background/product/amala/divider.webp';
import { Children, useState, useEffect } from "react";
import { ResourcesModel } from "models/amala/resources.model";
import ResourcesHelper from 'helper/athena/ResourceHelper';
import { Link } from 'react-router-dom';
import './index.scss';
import { formatDate, useLanguage, useT } from 'shared/i18n';

type Resources = {
    type: string;
    img: string;
    title: string;
    date: string;
    author: string;
}[]

const getResources = (isId: boolean): Resources => [{
    type: isId ? "Loyalitas" : "Loyalty",
    img: img1,
    title: isId
        ? "Peresmian BRI Liga 1 Fans Corner dan rilis pers LIB Super Apps."
        : "The inauguration of the BRI Liga 1 Fans Corner and the press release of the LIB Super Apps.",
    date: formatDate(new Date().toISOString(), isId ? "DD MMMM YYYY" : "MMMM DD, YYYY", isId ? "ID" : "EN"),
    author: "Admin"
}, {
    type: isId ? "Keahlian" : "Expertise",
    img: img2,
    title: isId
        ? "Golden Loyalty Awards | Juara kedua kategori Excellence in Management."
        : "Golden Loyalty Awards | Second place in the Excellence in Management category.",
    date: formatDate(new Date().toISOString(), isId ? "DD MMMM YYYY" : "MMMM DD, YYYY", isId ? "ID" : "EN"),
    author: "Admin"
}]

export default function ResourcesComponent() {
    const [data, setData] = useState<ResourcesModel>({} as ResourcesModel)
    const [loading, setLoading] = useState<boolean>(true)
    const t = useT()
    const resources = getResources(useLanguage() === "ID")

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
                a.download = 'amala.pdf';
                a.click();
            });
        });
        window.open(data.product.section.file, '_blank');
    }

    return (
        <>
            <Typography className={styles.title}>{t("Resources", "Sumber Daya")}</Typography>
            <div className="flex flex-row gap-[48px]">
                {Children.toArray(resources.map(({ type, img, title, date, author }) =>
                    <Link to="https://www.asyst.co.id/news" style={boxImagesStyle}>
                        <div>
                            <img alt="" src={img} style={{
                                backgroundSize: 'cover',
                                width: '100%',
                                height: 'auto',
                                textAlign: 'center',
                                borderRadius: '20px',
                            }}></img>
                            <div className={styles.tagsLabel}>
                                <Typography variant="subtitle2">{type}</Typography>
                            </div>
                            <div className="h-[100px]">
                                <Typography className={styles.titleNews} variant="subtitle2">{title}</Typography>
                            </div>
                            <div className="flex justify-between mt-[19px]">
                                <Typography className={styles.footerNews}>{date}</Typography>
                                <Typography className={styles.footerNews}>{author}</Typography>
                            </div>
                        </div>
                    </Link>
                ))}
                <div className='download-box'>
                    <div className={`vector-box ${styles.vectorBox}`} style={vectorBoxStyle}><img alt="" src={arrow} className='arrow-image' style={{ marginLeft: '35px', marginTop: '25px' }}></img></div>
                    <div className="p-[30px]">
                        <Typography className={`text1 ${styles.text1}`}>{t(`Download Free ${data?.product?.product_name ?? ""} Document`, `Unduh Dokumen ${data?.product?.product_name ?? ""} Gratis`)}</Typography>
                        <div className="flex flex-row gap-[10px] pt-[20px]" onClick={() => downloadBrochure()}>
                            <img alt="" src={pdf} style={{ width: '24px', height: '24px', cursor: 'pointer' }}></img>
                            <Typography className={styles.text2}><u>{t(`${data?.product?.product_name ?? ""} product information.pdf`, `informasi produk ${data?.product?.product_name ?? ""}.pdf`)}</u></Typography>
                        </div>
                        <img alt="" src={divider} className="divider" style={{ width:'322px', height: '1px', paddingBottom: '15px', paddingTop: '30px' }}></img>
                        <Typography className={styles.text1}>{t("Looking for another Asyst media resources?", "Mencari sumber media Asyst lainnya?")}</Typography>
                        <Link to="https://www.asyst.co.id/news"><Typography className={styles.text2} style={{ paddingTop: '30px' }}><u>{t("View all media resources", "Lihat semua sumber media")}</u></Typography></Link>
                    </div>
                </div>
            </div>
        </>
    )
}