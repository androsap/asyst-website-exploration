import { Typography } from "components/ui/typography";
import { styles } from './styled';
import { Children, useState, useEffect } from "react"
import { Button } from "components/ui/button";
import business from "assets/asyst/img/background/product/amala/business.webp"
import './index.scss'
import { BusinessModel } from "models/amala/business.model";
import BusinessHelper from 'helper/auxoshift/BusinessHelper';
import { CardBusinessModel } from "models/amala/cardbusiness.model";
import CardBusinessHelper from 'helper/auxoshift/CardBusinessHelper';
import he from 'he'
import { useApiText } from 'shared/i18n'

export default function BusinessComponent() {
    const [active, setActive] = useState<string>("1")
    const [data, setData] = useState<BusinessModel>({} as BusinessModel)
    const [loading, setLoading] = useState<boolean>(true)
    const [dataCard, setDataCard] = useState<CardBusinessModel>({} as CardBusinessModel)
    const [loadingCard, setLoadingCard] = useState<boolean>(true)
    const apiText = useApiText()

    useEffect(() => {
        getData()
        getDataCard()
    }, [])

    const getData = () => {
        setLoading(true)
        BusinessHelper.get(({ status, data }) => {
            setLoading(false)
            if (status) setData(data.data)
        })
    }

    const getDataCard = () => {
        setLoadingCard(true)
        CardBusinessHelper.get(({ status, data }) => {
            setLoadingCard(false)
            if (status) setDataCard(data.data)
        })
    }
    // console.log('card', dataCard)
    return (
        <>
            {!loading && data && (
                <div>
                    <div className="w-[80%]">
                        <Typography className={styles.title}
                            dangerouslySetInnerHTML={{ __html: he.decode(apiText(data.product?.section, "title") || '') }} />
                        <Typography className={styles.subtitle}
                            dangerouslySetInnerHTML={{ __html: he.decode(apiText(data.product?.section, "description") || '') }} />

                    </div>
                    <div className="flex flex-row gap-[24px]">

                        {Children.toArray(dataCard.product?.section?.map(item =>
                            <Button className={`${active === item.sequence && "active"} ${styles.buttonBox}`} variant={item.sequence === active ? "contained" : "text"} onClick={() => setActive(item.sequence)}>
                                <span className="block">
                                    <span className={styles.button} >
                                        <img src={business} alt=""></img>
                                        <Typography component="span" className={`block ${styles.textButton}`}
                                            dangerouslySetInnerHTML={{ __html: he.decode(apiText(item, "title") || '') }} />
                                    </span>
                                </span>
                                <span className="block">
                                    <Typography component="span" className={`block ${styles.desc}`}
                                        dangerouslySetInnerHTML={{ __html: he.decode(apiText(item, "subtitle") || '') }} />
                                </span>
                            </Button>
                        ))}

                    </div>
                    {Children.toArray(dataCard.product?.section?.filter(x => x.sequence === active).map(item =>
                        <>
                            <div className='content-box'>
                                <img alt="" src={item.image1} style={{ width: '543px', height: '310px', borderRadius: '16px' }}></img>
                                <div className='business-box'>
                                    {!loadingCard && Children.toArray(item.sub_section_1.map(sub_section =>
                                        <div className="gap-[32px]">
                                            <Typography className={styles.contentTitle}>{apiText(sub_section, "title")}</Typography>
                                            <Typography className={styles.contentSubtitle}>{apiText(sub_section, "description")}</Typography>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            )
            }
        </>
    )
}