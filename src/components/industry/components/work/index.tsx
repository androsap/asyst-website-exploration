import Typography from '@mui/material/Typography'
import './index.scss'
import { styles } from './styled'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import IndustryOverviewHelper from 'helper/industry/IndustryOverviewHelper'
import { useEffect, useState, Children } from 'react'
import Skeleton from '@mui/material/Skeleton'
import WorkConst, { WorkTypeConst } from "consts/work-asyst.const"
import Button from "@mui/material/Button"

export default function HowWeWorkComponent() {
    const [loadingTitleData, setLoadingTitleData] = useState<boolean>(false)
    const [titleData, setTitleData] = useState<{ title: string; description: string }>({ title: "", description: "" })
    const [active, setActive] = useState<string>(WorkTypeConst[0])

    const getTitleData = () => {
        setLoadingTitleData(true)
        IndustryOverviewHelper.getHowWeWork(({ status, data }) => {
            setLoadingTitleData(false)
            if (status && data?.data?.section?.[0]) {
                const section = data.data.section[0]
                setTitleData({
                    title: section.title_en,
                    description: section.description_en,
                })
            }
        })
    }

    useEffect(() => {
        getTitleData()
    }, [])

    return <>
        <Box sx={styles.box}>
            <Grid container columns={5} sx={styles.box.header}>
                <Grid item xs={2}>
                    {loadingTitleData ? (
                        <Skeleton variant="text" width="80%" height={40} />
                    ) : (
                        <Typography sx={styles.box.title}>{titleData.title}</Typography>
                    )}
                </Grid>
                <Grid item xs={3}>
                    {loadingTitleData ? (
                        <Skeleton variant="text" width="90%" height={60} />
                    ) : (
                        <Typography sx={styles.box.highlight}>{titleData.description}</Typography>
                    )}
                </Grid>
            </Grid>
            <Divider />
            <Box display="flex" justifyContent="space-between" sx={{ mt: "38px" }}>
                {Children.toArray(WorkConst.map(({ type, icon, icon2, label }) =>
                    <Button className={`${active === type && "active"}`} sx={styles.buttonBox} variant={type === active ? "contained" : "text"} onClick={() => setActive(type)}>
                        {active === type ? <img src={icon2}></img> : <img src={icon}></img>}
                        <Typography sx={styles.textButton}>{label}</Typography>
                    </Button>
                ))}
            </Box>
            <Box display="flex" flexDirection="row" gap="24px" mt="50px">
                {Children.toArray(WorkConst.filter(x => !active || active === 'All' ? true : x.type === active).map(({ img, title, content, step }) =>
                        <Box display='flex' flexDirection='row' className='content-box' gap="40px">
                            <img src={img} style={{ width: '543px', height: '310px', borderRadius: '16px' }}></img>
                            <Box className='business-box'>
                                <Box gap={2}>
                                    <Typography sx={styles.title}>{title}</Typography>
                                    <Typography sx={styles.content}>{content}</Typography>
                                    <Typography sx={styles.step}>{step}</Typography>
                                </Box>
                            </Box>
                        </Box>
                ))}
            </Box>
        </Box>
    </>
}