import { Typography } from "components/ui/typography";
import { styles } from './styled'
import { useState, useEffect, } from 'react'
import { ScaleModel } from "models/amala/scale.model"
import ScaleHelper from 'helper/auxoshift/ScaleHelper'
import he from 'he'
import { useApiText } from 'shared/i18n'

export default function ScalableComponent() {
    const [data, setData] = useState<ScaleModel>({} as ScaleModel)
    const [loading, setLoading] = useState<boolean>(true)
    const apiText = useApiText()

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        setLoading(true)
        ScaleHelper.get(({ status, data }) => {
            setLoading(false)
            if (status) setData(data.data)
        })
    }
    // console.log("data nih", data.product?.product_name)
    return <>
        {!loading && data && (
            <div>
                <Typography className={styles.title}
                    dangerouslySetInnerHTML={{ __html: he.decode(apiText(data.product?.section, "subtitle") || '') }} />
                <div className="flex flex-row justify-between">
                    <div className="w-[80%]">
                        <Typography className={styles.subtitle}
                            dangerouslySetInnerHTML={{ __html: he.decode(apiText(data.product?.section, "title") || '') }} />
                        <div className="inline">
                            <a className="inline text-[color:var(--color-primary,#2775BB)]">
                                {data?.product?.product_name}{' '}
                            </a> 
                            <Typography
                                className={`${styles.description} inline`}
                                dangerouslySetInnerHTML={{
                                    __html: he.decode(apiText(data.product?.section, "description") || '')
                                }}
                            />
                        </div>
                    </div>
                    <img alt="" src={data.product?.section?.image1} className="pt-px w-[166.163px] h-[173px]" />
                </div>
            </div>
        )}
    </>

}