import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import { styles } from './styled'
import { PromotionModel } from "models/amala/promotion.model";
import PromotionHelper from 'helper/hermes/PromotionHelper';
import { PromotionCardsModel } from "models/amala/promotionCards.model";
import PromotionCardsHelper from 'helper/hermes/PromotionCardsHelper';
import { Children, useState, useEffect } from "react"
import he from 'he'

export default function InteractComponent() {
    const [data, setData] = useState<PromotionModel>({} as PromotionModel)
    const [loading, setLoading] = useState<boolean>(true)
    const [dataCards, setDataCards] = useState<PromotionCardsModel>({} as PromotionCardsModel)
    const [loadingCards, setLoadingCards] = useState<boolean>(true)

    useEffect(() => {
        getData()
        getDataCards()
    }, [])

    const getData = () => {
        setLoading(true)
        PromotionHelper.get(({ status, data }) => {
            setLoading(false)
            if (status) setData(data.data)
        })
    }

    const getDataCards = () => {
        setLoadingCards(true)
        PromotionCardsHelper.get(({ status, data }) => {
            setLoading(false)
            if (status) setDataCards(data.data)
        })
    }
    // console.log('promotion cards', dataCards)
    return <>
        <Box sx={styles.mainBox}>
            <Box sx={styles.textContentBox}>
                <Typography sx={styles.title}
                    dangerouslySetInnerHTML={{ __html: he.decode(data.product?.section?.title_id || '') }} />
                <Typography sx={styles.content}
                    dangerouslySetInnerHTML={{ __html: he.decode(data.product?.section?.description_id || '') }} />
                {!loading && data.product?.section?.sub_section_1 && Children.toArray(data.product?.section?.sub_section_1.map(item =>
                    <>
                        <Typography sx={styles.subtitle}>
                            {item.title_id}
                        </Typography>
                        <Typography sx={styles.subcontent}>
                            {item.description_id}
                        </Typography>
                    </>
                ))}
            </Box>
            <img src={data.product?.section?.image1} style={{ width: '521px', height: '100%', borderRadius: '16px' }}></img>
        </Box >
        <Box sx={styles.numberBox}>
            {loadingCards && dataCards?.product?.section && Children.toArray(dataCards.product?.section.map((section, index) =>
                <Box display="flex" flexDirection="row" justifyContent='space-evenly' width='33.33%'>
                    <Box display='flex' flexDirection='column' alignItems='center' sx={{ marginTop: '32px' }}>
                        <Box sx={styles.numberContentBox}>
                            <Typography sx={styles.number}
                                dangerouslySetInnerHTML={{ __html: he.decode(section.title_id) }} />
                        </Box>
                        <Box sx={{ height: '100px' }}>
                            <Typography sx={styles.text}
                                dangerouslySetInnerHTML={{ __html: he.decode(section.subtitle_id) }} />
                        </Box>
                    </Box>
                    <Box>
                        {index + 1 !== dataCards.product?.section?.length &&
                            <Divider style={{ height: '170px' }} orientation="vertical" variant="middle" flexItem />}
                    </Box>
                </Box>
            ))}
        </Box>
        <Grid>

        </Grid>
    </>
}