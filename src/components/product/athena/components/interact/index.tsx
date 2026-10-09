import { Typography } from "components/ui/typography";
import { Divider } from "components/ui/divider";
import { styles } from './styled'
import { PromotionModel } from "models/amala/promotion.model";
import PromotionHelper from 'helper/athena/PromotionHelper';
import { PromotionCardsModel } from "models/amala/promotionCards.model";
import PromotionCardsHelper from 'helper/athena/PromotionCardsHelper';
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
        <div className={styles.mainBox}>
            <div className={styles.textContentBox}>
                <Typography className={styles.title}
                    dangerouslySetInnerHTML={{ __html: he.decode(apiText(data.product?.section, "title") || '') }} />
                <Typography className={styles.content}
                    dangerouslySetInnerHTML={{ __html: he.decode(apiText(data.product?.section, "description") || '') }} />
                {!loading && data.product?.section?.sub_section_1 && Children.toArray(data.product?.section?.sub_section_1.map(item =>
                    <>
                        <Typography className={styles.subtitle}>
                            {apiText(item, "title")}
                        </Typography>
                        <Typography className={styles.subcontent}>
                            {apiText(item, "description")}
                        </Typography>
                    </>
                ))}
            </div>
            <img alt="" src={data.product?.section?.image1} className="w-[521px] h-[521px] rounded-[16px]"></img>
        </div >
        <div className={styles.numberBox}>
            {loadingCards && dataCards?.product?.section && Children.toArray(dataCards.product?.section.map((section, index) =>
                <div className="flex flex-row justify-evenly w-[33.33%]">
                    <div className="flex flex-col items-center mt-[32px]">
                        <div className={styles.numberContentBox}>
                            <Typography className={styles.number}
                                dangerouslySetInnerHTML={{ __html: he.decode(apiText(section, "title")) }} />
                        </div>
                        <div className="h-[100px]">
                            <Typography className={styles.text}
                                dangerouslySetInnerHTML={{ __html: he.decode(apiText(section, "subtitle")) }} />
                        </div>
                    </div>
                    <div>
                        {index + 1 !== dataCards.product?.section?.length &&
                            <Divider className="h-[170px]" orientation="vertical" variant="middle" flexItem />}
                    </div>
                </div>
            ))}
        </div>
        <div className="box-border flex-row">

        </div>
    </>
}