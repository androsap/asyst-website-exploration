import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styles } from './styled';
import { Children, useState, useEffect } from "react"
import Button from '@mui/material/Button';
import business from "assets/asyst/img/background/product/anteros/business.png"
// import './index.scss'
import { BusinessModel } from "models/anteros/business.model";
import BusinessHelper from 'helper/hermes/BusinessHelper';
import { CardBusinessModel } from "models/anteros/cardbusiness.model";
import CardBusinessHelper from 'helper/hermes/CardBusinessHelper';
import he from 'he'

export default function BusinessComponent() {
    const [active, setActive] = useState<string>("1")
    const [data, setData] = useState<BusinessModel>({} as BusinessModel)
    const [loading, setLoading] = useState<boolean>(true)
    const [dataCard, setDataCard] = useState<CardBusinessModel>({} as CardBusinessModel)
    const [loadingCard, setLoadingCard] = useState<boolean>(true)

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
                            dangerouslySetInnerHTML={{ __html: he.decode(data.product?.section?.title_id || '') }} />
                        <Typography sx={styles.subtitle}
                            dangerouslySetInnerHTML={{ __html: he.decode(data.product?.section?.description_id || '') }} />

                    </Box>
                    <Box display='flex' flexDirection='row' gap='24px'>

                        {Children.toArray(dataCard.product?.section?.map(item =>
                            <Button className={`${active === item.sequence && "active"}`} sx={styles.buttonBox} variant={item.sequence === active ? "contained" : "text"} onClick={() => setActive(item.sequence)}>
                                <Box>
                                    <Box sx={styles.button} >
                                        <img src={business}></img>
                                        <Typography sx={styles.textButton}
                                            dangerouslySetInnerHTML={{ __html: he.decode(item.title_id || '') }} />
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography sx={styles.desc}
                                        dangerouslySetInnerHTML={{ __html: he.decode(item.subtitle_id || '') }} />
                                </Box>
                            </Button>
                        ))}

                    </Box>
                    {Children.toArray(dataCard.product?.section?.filter(x => x.sequence === active).map(item =>
                        <>
                            <Box sx={styles.contentBox}>
                                <img src={item.image1} style={{ width: '543px', height: '310px', borderRadius: '16px' }}></img>
                                <Box display='flex' flexDirection='column' gap={3}>
                                    {!loadingCard && Children.toArray(item.sub_section_1.map(sub_section =>
                                        <Box gap={2}>
                                            <Typography sx={styles.contentTitle}>{sub_section.title_id}</Typography>
                                            <Typography sx={styles.contentSubtitle}>{sub_section.description_id}</Typography>
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