import Typography from "@mui/material/Typography"
import { styles } from './styled'
import Box from "@mui/material/Box"
import { useState, useEffect, } from 'react'
import { ScaleModel } from "models/anteros/scale.model"
import ScaleHelper from 'helper/chronus/ScaleHelper'
import he from 'he'

export default function ScalableComponent() {
    const [data, setData] = useState<ScaleModel>({} as ScaleModel)
    const [loading, setLoading] = useState<boolean>(true)

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
                    dangerouslySetInnerHTML={{ __html: he.decode(data.product?.section?.subtitle_id || '') }} />
                <Box display='flex' flexDirection='row' justifyContent='space-between'>
                    <Box width='80%'>
                        <Typography sx={styles.subtitle}
                            dangerouslySetInnerHTML={{ __html: he.decode(data.product?.section?.title_id || '') }} />
                        <div style={{ display: 'inline' }}>
                            <a
                                style={{
                                    color: 'var(--Primary, #006CAE)',
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
                                    __html: he.decode(data.product?.section?.description_id || '')
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