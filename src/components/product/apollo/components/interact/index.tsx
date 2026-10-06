import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import { styles } from './styled'
import { PromotionModel } from "models/amala/promotion.model";
import PromotionHelper from 'helper/apollo/PromotionHelper';
import { PromotionCardsModel } from "models/amala/promotionCards.model";
import PromotionCardsHelper from 'helper/apollo/PromotionCardsHelper';
import { Children, useState, useEffect } from "react"
import he from 'he'
import { useApiText } from 'shared/i18n'

export default function InteractComponent() {
    const [data, setData] = useState<PromotionModel>({} as PromotionModel)
    const [loading, setLoading] = useState<boolean>(true)
    const [dataCards, setDataCards] = useState<PromotionCardsModel>({} as PromotionCardsModel)
    const [loadingCards, setLoadingCards] = useState<boolean>(true)
    const apiText = useApiText()

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
                    dangerouslySetInnerHTML={{ __html: he.decode(apiText(data.product?.section, "title") || '') }} />
                <Typography sx={styles.content}
                    dangerouslySetInnerHTML={{ __html: he.decode(apiText(data.product?.section, "description") || '') }} />
                {!loading && data.product?.section?.sub_section_1 && Children.toArray(data.product?.section?.sub_section_1.map(item =>
                    <>
                        <Typography sx={styles.subtitle}>
                            {apiText(item, "title")}
                        </Typography>
                        <Typography sx={styles.subcontent}>
                            {apiText(item, "description")}
                        </Typography>
                    </>
                ))}
            </Box>
            <img src={data.product?.section?.image1} style={{ width: '521px', height: '521px', borderRadius: '16px' }}></img>
        </Box >
        <Box sx={styles.numberBox}>
            {loadingCards && dataCards?.product?.section && Children.toArray(dataCards.product?.section.map((section, index) =>
                <Box display="flex" flexDirection="row" justifyContent='space-evenly' width='33.33%'>
                    <Box display='flex' flexDirection='column' alignItems='center' sx={{ marginTop: '32px' }}>
                        <Box sx={styles.numberContentBox}>
                            <Typography sx={styles.number}
                                dangerouslySetInnerHTML={{ __html: he.decode(apiText(section, "title")) }} />
                        </Box>
                        <Box sx={{ height: '100px' }}>
                            <Typography sx={styles.text}
                                dangerouslySetInnerHTML={{ __html: he.decode(apiText(section, "subtitle")) }} />
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