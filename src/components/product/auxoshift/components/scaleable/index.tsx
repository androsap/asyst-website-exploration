import Typography from "@mui/material/Typography"
import { styles } from './styled'
import Box from "@mui/material/Box"
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
            <Box>
                <Typography sx={styles.title}
                    dangerouslySetInnerHTML={{ __html: he.decode(apiText(data.product?.section, "subtitle") || '') }} />
                <Box display='flex' flexDirection='row' justifyContent='space-between'>
                    <Box width='80%'>
                        <Typography sx={styles.subtitle}
                            dangerouslySetInnerHTML={{ __html: he.decode(apiText(data.product?.section, "title") || '') }} />
                        <div style={{ display: 'inline' }}>
                            <a
                                style={{
                                    color: 'var(--color-primary, #2775BB)',
                                    display: 'inline',
                                }}
                            >
                                {data?.product?.product_name}{' '}
                            </a> 
                            <Typography
                                sx={{
                                    ...styles.description,
                                    display: 'inline'
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: he.decode(apiText(data.product?.section, "description") || '')
                                }}
                            />
                        </div>
                    </Box>
                    <img src={data.product?.section?.image1} style={{ paddingTop: 1, width: '166.163px', height: '173px' }} />
                </Box>
            </Box>
        )}
    </>

}