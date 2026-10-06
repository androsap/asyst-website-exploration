import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styles } from './styled';
import { Children, useState, useEffect } from "react"
import Button from '@mui/material/Button';
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
                <Box>
                    <Box width="80%">
                        <Typography sx={styles.title}
                            dangerouslySetInnerHTML={{ __html: he.decode(apiText(data.product?.section, "title") || '') }} />
                        <Typography sx={styles.subtitle}
                            dangerouslySetInnerHTML={{ __html: he.decode(apiText(data.product?.section, "description") || '') }} />

                    </Box>
                    <Box display='flex' flexDirection='row' gap='24px'>

                        {Children.toArray(dataCard.product?.section?.map(item =>
                            <Button className={`${active === item.sequence && "active"}`} sx={styles.buttonBox} variant={item.sequence === active ? "contained" : "text"} onClick={() => setActive(item.sequence)}>
                                <Box>
                                    <Box sx={styles.button} >
                                        <img src={business}></img>
                                        <Typography sx={styles.textButton}
                                            dangerouslySetInnerHTML={{ __html: he.decode(apiText(item, "title") || '') }} />
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography sx={styles.desc}
                                        dangerouslySetInnerHTML={{ __html: he.decode(apiText(item, "subtitle") || '') }} />
                                </Box>
                            </Button>
                        ))}

                    </Box>
                    {Children.toArray(dataCard.product?.section?.filter(x => x.sequence === active).map(item =>
                        <>
                            <Box className='content-box'>
                                <img src={item.image1} style={{ width: '543px', height: '310px', borderRadius: '16px' }}></img>
                                <Box className='business-box'>
                                    {!loadingCard && Children.toArray(item.sub_section_1.map(sub_section =>
                                        <Box gap={2}>
                                            <Typography sx={styles.contentTitle}>{apiText(sub_section, "title")}</Typography>
                                            <Typography sx={styles.contentSubtitle}>{apiText(sub_section, "description")}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </>
                    ))}
                </Box >
            )
            }
        </>
    )
}